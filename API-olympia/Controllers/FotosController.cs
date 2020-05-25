using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace API_olympia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles="Admin")]
    public class FotosController : Controller
    {
        public IRepository Repo { get; }
        public FotosController(IRepository repo)
        {
            this.Repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await this.Repo.GetAllFotosAsync();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get().");
            }
        }

        [HttpGet("{idFoto}")]
        public async Task<IActionResult> Get(int idFoto)
        {
            try
            {
                var result = await this.Repo.GetAllFotosAsyncById(idFoto);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpPut("{idFoto}")]
        public async Task<IActionResult> put(int idFoto, Fotos model)
        {
            try
            {
                var foto = await this.Repo.GetAllFotosAsyncById(idFoto);
                if (foto == null) return NotFound(); //método do EF
                this.Repo.Update(model);
                //
                if (await this.Repo.SaveChangesAsync())
                {
                    foto = await this.Repo.GetAllFotosAsyncById(idFoto);
                    return Created($"/api/fotos/{model.IdFoto}", foto);
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no put().");
            }
            return BadRequest();
        }

        [HttpDelete("{idFoto}")]
        public async Task<IActionResult> delete(int idFoto)
        {
            try
            {
                var foto = await this.Repo.GetAllFotosAsyncById(idFoto);
                if (foto == null) return NotFound();
                this.Repo.Delete(foto);
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
        public async Task<IActionResult> post(Fotos model)
        {
            try
            {
                this.Repo.Add(model);
                if (await this.Repo.SaveChangesAsync())
                {
                    return Created($"/api/fotos/{model.IdFoto}", model);
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