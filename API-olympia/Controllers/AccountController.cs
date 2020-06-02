using API_olympia.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Server.HttpSys;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Owin.Security;
using Microsoft.Owin.Host.SystemWeb;
using System.Web;
using Microsoft.EntityFrameworkCore;

namespace API_olympia.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {

        private readonly SignInManager<IdentityUser> signInManager;
        private readonly UserManager<IdentityUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
<<<<<<< HEAD
        private readonly OlympiaContext context;
<<<<<<< HEAD
        private readonly IHttpContextAccessor httpContextAccessor;
=======
>>>>>>> parent of 831c112... ooi
=======
        private readonly OlympiaContext context = ;
>>>>>>> parent of 9bb520e... cul
        public IRepository Repo { get; }
        public AccountController(SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager,
            RoleManager<IdentityRole> roleManager, IRepository repo, OlympiaContext context)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.roleManager = roleManager;
            Repo = repo;
            this.context = context;
        }

<<<<<<< HEAD
<<<<<<< HEAD

=======
        [CustomAuthorizeAttribute]
>>>>>>> parent of 831c112... ooi
=======
        [CustomAuthorize(new OlympiaContext(new DbContextOptions<OlympiaContext>()))]
>>>>>>> parent of 9bb520e... cul
        [HttpPost("Logout")]
        public async Task<IActionResult> Logout()
        {
            if (Armazenador.StringValueNome != null)
            {
                await HttpContext.SignOutAsync();
                Armazenador.StringValueNome = null;
                Armazenador.StringValueRole = null;
                return RedirectToAction("index", "home");
            }

            return RedirectToAction("index", "home");
        }

        [HttpGet]
        public IActionResult Login()
        {
            Armazenador.StringValueRoute = HttpContext.Request.Host.Value;
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

<<<<<<< HEAD
                            context.armazenador.StringValueRole = HttpContext.User.FindFirst(ClaimTypes.Role).Value;
                            context.armazenador.StringValueNome = HttpContext.User.FindFirst(ClaimTypes.Name).Value;
<<<<<<< HEAD
                            var cu = httpContextAccessor.HttpContext;

=======
                            Armazenador.StringValueRole = HttpContext.User.FindFirst(ClaimTypes.Role).Value;
                            Armazenador.StringValueNome = HttpContext.User.FindFirst(ClaimTypes.Name).Value;
>>>>>>> parent of 1dc3ba6... Ajustes
=======
>>>>>>> parent of 9bb520e... cul

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

                            Armazenador.StringValueRole = HttpContext.User.FindFirst(ClaimTypes.Role).Value;
                            Armazenador.StringValueNome = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

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

                        Armazenador.StringValueRole = HttpContext.User.FindFirst(ClaimTypes.Role).Value;
                        Armazenador.StringValueNome = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

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
