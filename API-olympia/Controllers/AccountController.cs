using API_olympia.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;

namespace API_olympia.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {

        private readonly SignInManager<IdentityUser> signInManager;
        public IRepository Repo { get; }
        public AccountController(SignInManager<IdentityUser> signInManager, IRepository repo)
        {
            this.signInManager = signInManager;
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
                if (resultSp == true)
                {
                    var result = await signInManager.PasswordSignInAsync(
                        model.UserName, model.Senha, false, false);

                    if (result.Succeeded)
                    {
                        return RedirectToAction("index", "home");
                    }

                    return View(model);
                }
                else
                    return View(model);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
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