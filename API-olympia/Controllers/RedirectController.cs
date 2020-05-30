using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Claims;

namespace API_olympia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RedirectController : Controller
    {
        public IRepository Repo { get; }
        public RedirectController(IRepository repo)
        {
            this.Repo = repo;
        }

        [HttpPost("Cadastro")]
        public async Task<IActionResult> Post(Usuarios model)
        {
            try
            {
<<<<<<< HEAD
                Armazenador.StringValueRoute = "Ss";
                string cd = HttpContext.Request.Host.Value;
=======
                Armazenador.StringValueRoute = HttpContext.Request.Host.Value;
>>>>>>> parent of 640a05f... Super Edits
                return RedirectToAction("post", "usuarios", model);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Eventos/{idEvento}")]
        public async Task<IActionResult> Get(int idEvento)
        {
            try
            {
<<<<<<< HEAD
                ICollection<StringValues> cd = HttpContext.Request.Headers.Values;
=======
>>>>>>> parent of 640a05f... Super Edits
                Armazenador.StringValueRoute = HttpContext.Request.Host.Value;
                return Redirect("/api/Eventos/"+idEvento);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

    }
}