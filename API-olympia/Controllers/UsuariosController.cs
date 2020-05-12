using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;

namespace API_olympia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : Controller
    {
        public IRepository Repo { get; }
        public UsuariosController(IRepository repo)
        {
            this.Repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await this.Repo.GetAllUsuariosAsync();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get().");
            }
        }

        [HttpGet("{idUsuario}")]
        public async Task<IActionResult> Get(int idUsuario)
        {
            try
            {
                var result = await this.Repo.GetAllUsuariosAsyncById(idUsuario);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpPut("{idUsuario}")]
        public async Task<IActionResult> put(int idUsuario, Usuarios model)
        {
            try
            {
                var Usuario = await this.Repo.GetAllArtesAsyncById(idUsuario);
                if (Usuario == null) return NotFound(); //método do EF
                this.Repo.Update(model);
                //
                if (await this.Repo.SaveChangesAsync())
                {
                    Usuario = await this.Repo.GetAllArtesAsyncById(idUsuario);
                    return Created($"/api/Usuarios/{model.IdUsuario}", Usuario);
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no put().");
            }
            return BadRequest();
        }

        [HttpDelete("{idUsuario}")]
        public async Task<IActionResult> delete(int idUsuario)
        {
            try
            {
                var Usuario = await this.Repo.GetAllArtesAsyncById(idUsuario);
                if (Usuario == null) return NotFound();
                this.Repo.Delete(Usuario);
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
        public async Task<IActionResult> post(Usuarios model)
        {
            try
            {
                this.Repo.Add(model);
                //
                if (await this.Repo.SaveChangesAsync())
                {
                    //return Ok();
                    return Created($"/api/Usuarios/{model.IdUsuario}", model);
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