using API_olympia.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using System;

namespace API_olympia.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {

        private readonly SignInManager<IdentityUser> signInManager;
        private readonly UserManager<IdentityUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        public IRepository Repo { get; }
        public AccountController(SignInManager<IdentityUser> signInManager, UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager, IRepository repo)
        {
            this.signInManager = signInManager;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.Repo = repo;
        }

        /*[HttpPost]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return RedirectToAction("index", "home");
        }*/

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromForm]LoginViewModel model)
        {
            try
            {
                var resultSp = this.Repo.VerfificarSpAdmins(model);

                if (resultSp)
                {
                    var user = new IdentityUser { UserName = model.UserName };

                    await userManager.CreateAsync(user);

                    var role = new IdentityRole { Name = "Admin" };

                    await roleManager.CreateAsync(role);

                    await userManager.CreateAsync(user, model.Senha);

                    await signInManager.SignInAsync(user, false, "");

                    await userManager.AddToRoleAsync(user, role.Name);

                    return RedirectToAction("admin", "home");

                }
                else
                    return View("Views/Home/Login.cshtml");
            }
            catch (Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, e.ToString());
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
