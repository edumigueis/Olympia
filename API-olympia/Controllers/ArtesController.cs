using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;

namespace API_olympia.Controllers
{
   /* [CustomAuthorizeAttribute]*/
    [Route("api/[controller]")]
    [ApiController]
    public class ArtesController : Controller
    {
        public IRepository Repo { get; }
        public ArtesController(IRepository repo)
        {
            this.Repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await this.Repo.GetAllArtesAsync();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get().");
            }
        }

        [HttpGet("{idArte}")]
        public async Task<IActionResult> Get(int ArtesId)
        {
            try
            {
                var result = await this.Repo.GetAllArtesAsyncById(ArtesId);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpPut("{idArte}")]
        public async Task<IActionResult> put(int ArtesId, Artes model)
        {
            try
            {
                var arte = await this.Repo.GetAllArtesAsyncById(ArtesId);
                if (arte == null) return NotFound(); //método do EF
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

        [HttpDelete("{idArte}")]
        public async Task<IActionResult> delete(int ArtesId)
        {
            try
            {
                //verifica se existe aluno a ser excluído
                var arte = await this.Repo.GetAllArtesAsyncById(ArtesId);
                if (arte == null) return NotFound(); //método do EF
                this.Repo.Delete(arte);
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
        public async Task<IActionResult> post(Artes model)
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