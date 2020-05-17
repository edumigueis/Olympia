using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;

namespace API_olympia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ObrasController : Controller
    {
        public IRepository Repo { get; }
        public ObrasController(IRepository repo)
        {
            this.Repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await this.Repo.GetAllEventosAsync();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get().");
            }
        }

        [HttpGet("{idObra}")]
        public async Task<IActionResult> Get(int idObra)
        {
            try
            {
                var result = await this.Repo.GetAllEventosAsyncById(idObra);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpPut("{idObra}")]
        public async Task<IActionResult> put(int idObra, Eventos model)
        {
            try
            {
                var Evento = await this.Repo.GetAllArtesAsyncById(idObra);
                if (Evento == null) return NotFound(); //método do EF
                this.Repo.Update(model);
                //
                if (await this.Repo.SaveChangesAsync())
                {
                    Evento = await this.Repo.GetAllArtesAsyncById(idObra);
                    return Created($"/api/Obras/{model.idObra}", Obra);
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no put().");
            }
            return BadRequest();
        }

        [HttpDelete("{idObra}")]
        public async Task<IActionResult> delete(int idObra)
        {
            try
            {
                var Evento = await this.Repo.GetAllArtesAsyncById(idObra);
                if (Evento == null) return NotFound();
                this.Repo.Delete(Obra);
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
        public async Task<IActionResult> post(Obra model)
        {
            try
            {
                this.Repo.Add(model);
                //
                if (await this.Repo.SaveChangesAsync())
                {
                    //return Ok();
                    return Created($"/api/Obra/{model.IdObra}", model);
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