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
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            try
            {
                var resultSp = this.Repo.VerfificarSpAdmins(model);
                if (resultSp == true)
                {
                    if (ModelState.IsValid)
                    {
                        var result = await signInManager.PasswordSignInAsync(
                            model.UserName, model.Senha, false, false);

                        if (result.Succeeded)
                        {
                            return RedirectToAction("index", "home");
                        }

                        ModelState.AddModelError(string.Empty, "Invalid Login Attempt");
                    }
                }
                return View(model);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }

        }
    }
}