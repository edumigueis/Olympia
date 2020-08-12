using Microsoft.AspNetCore.Mvc;
using API_olympia.Data;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace API_olympia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : Controller
    {
        public IRepository Repo { get; }
        private Authorize auth;

        public AdminsController(IRepository repo)
        {
            this.Repo = repo;
            auth = new Authorize(Repo);
        }   

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var resultado = auth.OnAuthorization();
            if (!resultado)
                return RedirectToAction("login", "home");

            try
            {
                var result = await this.Repo.GetAllAdminsAsync();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get().");
            }
        }

        [HttpGet("{idAdmin}")]
        public async Task<IActionResult> Get(int AdminsId)
        {
            var resultado = auth.OnAuthorization();
            if (!resultado)
                return RedirectToAction("login", "home");

            try
            {
                var result = await this.Repo.GetAllAdminsAsyncById(AdminsId);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }
    }
}