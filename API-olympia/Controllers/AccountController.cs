using API_olympia.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.Net;

namespace API_olympia.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]

    public class AccountController : Controller
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        public IRepository Repo { get; }
        public IRepository armazenador { get; }
        private Authorize auth;
        private readonly string ip;

        public AccountController(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager, IRepository repo)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            Repo = repo;
            armazenador = repo;
            IPHostEntry ipEntry = Dns.GetHostEntry(Dns.GetHostName());
            IPAddress[] addr = ipEntry.AddressList;
            ip = addr[2].ToString();
            auth = new Authorize(ip);
        }

        [HttpPost("Logout")]
        public async Task<IActionResult> Logout()
        {
            int indiceNome = 0;
            int indiceRole = 0;

            var resultado = auth.OnAuthorization();
            if (!resultado)
                return RedirectToAction("login", "home");

            for (int i = 0; i < Armazenadora.StringValueRoute.Count; i++)
            {
                var list = Armazenadora.StringValueNome[i];
                if (list[0] == ip)
                {
                    indiceNome = i;
                    break;
                }
            }

            for (int i = 0; i < Armazenadora.StringValueRoute.Count; i++)
            {
                var list = Armazenadora.StringValueRole[i];
                if (list[0] == ip)
                {
                    indiceRole = i;
                    break;
                }
            }

            if (Armazenadora.StringValueNome[indiceNome][1] != null)
            {
                await HttpContext.SignOutAsync();
                Armazenadora.StringValueNome[indiceNome] = null;
                Armazenadora.StringValueNome[indiceNome] = null;
                return RedirectToAction("index", "home");
            }

            return RedirectToAction("index", "home");
        }

        [HttpGet]
        public IActionResult Login()
        {
            object[] vetor = new object[2];
            vetor[0] = ip;
            vetor[1] = HttpContext.Request.Host.Value;
            Armazenadora.StringValueRoute.Add(vetor);
            return View();
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromForm] LoginViewModel model)
        {
            try
            {
                var resultSp = this.Repo.VerfificarSpAdmins(model);

                if (resultSp)
                {

                    var existeUser = await userManager.FindByNameAsync(model.UserName);

                    if (existeUser != null)
                    {
                        IdentityUser userExistente = await userManager.FindByNameAsync(model.UserName);

                        if (userManager.IsInRoleAsync(userExistente, "Admin").Result)
                        {

                            var claims = new List<Claim> {
                                new Claim(ClaimTypes.Name, userExistente.UserName, ClaimValueTypes.String),
                                new Claim(ClaimTypes.Role, "Admin", ClaimValueTypes.String)
                            };

                            var userIdentity = new ClaimsIdentity(claims, "Admin");

                            var userPrincipal = new ClaimsPrincipal(userIdentity);

                            HttpContext.User = userPrincipal;

                            await HttpContext.SignInAsync("Administrador", userPrincipal,
                                new Microsoft.AspNetCore.Authentication.AuthenticationProperties
                                {
                                    ExpiresUtc = DateTime.UtcNow.AddMinutes(20),
                                    IsPersistent = false,
                                    AllowRefresh = false
                                });

                            object[] vetorRole = new object[2];
                            vetorRole[0] = ip;
                            vetorRole[1] = HttpContext.User.FindFirst(ClaimTypes.Role).Value;

                            object[] vetorNome = new object[2];
                            vetorNome[0] = ip;
                            vetorNome[1] = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

                            Armazenadora.StringValueRole.Add(vetorRole);
                            Armazenadora.StringValueNome.Add(vetorNome); 

                            return View("Views/Admin/Admin.cshtml");
                        }
                        else
                        {
                            await roleManager.CreateAsync(new IdentityRole() { Name = "Admin" });

                            var claims = new List<Claim> {
                                new Claim(ClaimTypes.Name, userExistente.UserName, ClaimValueTypes.String),
                                new Claim(ClaimTypes.Role, "Admin", ClaimValueTypes.String)
                            };

                            var userIdentity = new ClaimsIdentity(claims, "Admin");

                            var userPrincipal = new ClaimsPrincipal(userIdentity);

                            HttpContext.User = userPrincipal;

                            await HttpContext.SignInAsync("Administrador", userPrincipal,
                                new Microsoft.AspNetCore.Authentication.AuthenticationProperties
                                {
                                    ExpiresUtc = DateTime.UtcNow.AddMinutes(20),
                                    IsPersistent = false,
                                    AllowRefresh = false
                                });

                            object[] vetorRole = new object[2];
                            vetorRole[0] = ip;
                            vetorRole[1] = HttpContext.User.FindFirst(ClaimTypes.Role).Value;

                            object[] vetorNome = new object[2];
                            vetorNome[0] = ip;
                            vetorNome[1] = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

                            Armazenadora.StringValueRole.Add(vetorRole);
                            Armazenadora.StringValueNome.Add(vetorNome);

                            return View("Views/Admin/Admin.cshtml");

                        }
                    }
                    else
                    {
                        var user = new IdentityUser { UserName = model.UserName };

                        await userManager.CreateAsync(user);

                        var role = await roleManager.FindByNameAsync("Admin");

                        if (role == null)
                            await roleManager.CreateAsync(new IdentityRole() { Name = "Admin" });

                        var claims = new List<Claim> {
                                new Claim(ClaimTypes.Name, user.UserName, ClaimValueTypes.String),
                                new Claim(ClaimTypes.Role, "Admin", ClaimValueTypes.String)
                            };

                        var userIdentity = new ClaimsIdentity(claims, "Admin");

                        var userPrincipal = new ClaimsPrincipal(userIdentity);

                        HttpContext.User = userPrincipal;

                        await HttpContext.SignInAsync("Administrador", userPrincipal,
                            new Microsoft.AspNetCore.Authentication.AuthenticationProperties
                            {
                                ExpiresUtc = DateTime.UtcNow.AddMinutes(20),
                                IsPersistent = false,
                                AllowRefresh = false
                            });

                        object[] vetorRole = new object[2];
                        vetorRole[0] = ip;
                        vetorRole[1] = HttpContext.User.FindFirst(ClaimTypes.Role).Value;

                        object[] vetorNome = new object[2];
                        vetorNome[0] = ip;
                        vetorNome[1] = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

                        Armazenadora.StringValueRole.Add(vetorRole);
                        Armazenadora.StringValueNome.Add(vetorNome);

                        return View("Views/Admin/Admin.cshtml");
                    }
                }

                return View("Views/Home/Login.cshtml");

            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }

        }


        /* private UserToken BuildToken(UserInfo userInfo)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.UniqueName, userInfo.User),
                new Claim("meuValor", "oque voce quiser"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var expiration = DateTime.UtcNow.AddHours(1);
            JwtSecurityToken token = new JwtSecurityToken(
               issuer: null,
               audience: null,
               claims: claims,
               expires: expiration,
               signingCredentials: creds);

            return new UserToken()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration
            };
        }*/
    }
}
