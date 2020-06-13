using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;

namespace API_olympia.Controllers
{
    [CustomAuthorizeAttribute]
    [Route("api/[controller]")]
    [ApiController]
    public class CurtidasController : Controller
    {
        public IRepository Repo { get; }
        public CurtidasController(IRepository repo)
        {
            this.Repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await this.Repo.GetAllCurtidasAsync();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get().");
            }
        }

        [HttpGet("{idCurtida}")]
        public async Task<IActionResult> Get(int idCurtida)
        {
            try
            {
                var result = await this.Repo.GetAllCurtidasAsyncById(idCurtida);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpPut("{idCurtida}")]
        public async Task<IActionResult> put(int idCurtida, Curtidas model)
        {
            try
            {
                var Curtida = await this.Repo.GetAllCurtidasAsyncById(idCurtida);
                if (Curtida == null) return NotFound(); //método do EF
                this.Repo.Update(model);
                //
                if (await this.Repo.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no put().");
            }
            return BadRequest();
        }

        [HttpDelete("{idCurtida}")]
        public async Task<IActionResult> delete(int idCurtida)
        {
            try
            {
                var Curtida = await this.Repo.GetAllCurtidasAsyncById(idCurtida);
                if (Curtida == null) return NotFound();
                this.Repo.Delete(Curtida);
                //
                if (await this.Repo.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no delete().");
            }
            return BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult> post(Curtidas model)
        {
            try
            {
                this.Repo.Add(model);
                //
                if (await this.Repo.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no post().");
            }
            return BadRequest();
        }

    }
}