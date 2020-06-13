using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace API_olympia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArmazenadorController : Controller
    {
        public async Task<IActionResult> RedirectToGet()
        {
            return Redirect("/api/Armazenador/Access");
        }

        [HttpGet("Access")]
        public Armazenador accessArmazenadorHttpContext()
        {
            return HttpContext.RequestServices.GetService(typeof(Armazenador)) as Armazenador;
        }
    }
}
