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

        [HttpGet("Eventos/{idEvento}")]
        public async Task<IActionResult> Get(int idEvento)
        {
            try
            {
                Armazenador.StringValueRoute = HttpContext.Request.Host.Value;
                return Redirect("/api/Eventos/"+idEvento);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

    }
}