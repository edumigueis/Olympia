using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace API_olympia.Controllers
{
    [CustomAuthorizeAttribute]
    [Route("api/[controller]")]
    [ApiController]
    public class PublicacoesController : Controller
    {
        public IRepository Repo { get; }
        public PublicacoesController(IRepository repo)
        {
            this.Repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await this.Repo.GetAllPublicacoesAsync();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get().");
            }
        }

        [HttpGet("{idPublicacao}")]
        public async Task<IActionResult> Get(int idPublicacao)
        {
            try
            {
                var result = await this.Repo.GetAllPublicacoesAsyncById(idPublicacao);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpPut("{idPublicacao}")]
        public async Task<IActionResult> put(int idPublicacao, Publicacoes model)
        {
            try
            {
                var Publicacao = await this.Repo.GetAllPublicacoesAsyncById(idPublicacao);
                if (Publicacao == null) return NotFound(); //método do EF
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

        [HttpDelete("{idPublicacao}")]
        public async Task<IActionResult> delete(int idPublicacao)
        {
            try
            {
                var Publicacao = await this.Repo.GetAllPublicacoesAsyncById(idPublicacao);
                if (Publicacao == null) return NotFound();
                this.Repo.Delete(Publicacao);
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
        public async Task<IActionResult> post(Publicacoes model)
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

        [HttpGet("Curtidas")]
        public async Task<IActionResult> GetPublicacoesCurtidasOrderByCurtidas()
        {
            try
            {
                var result = this.Repo.SpPublicacoesCurtidas();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }


        [HttpGet("CurtidasDesc")]
        public async Task<IActionResult> GetPublicacoesCurtidasOrderByCurtidasDesc()
        {
            try
            {
                var result = this.Repo.SpPublicacoesCurtidasDesc();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpGet("NaoCurtidas")]
        public async Task<IActionResult> GetPublicacoesNaoCurtidas()
        {
            try
            {
                var result = this.Repo.SpPublicacoesNaoCurtidas();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("MaisRecentes")]
        public async Task<IActionResult> GetPublicacoesOrderByData()
        {
            try
            {
                var result = this.Repo.SpPublicacoesOrderByData();
                return Ok(result);
            }
            catch 
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("MenosRecentes")]
        public async Task<IActionResult> GetPublicacoesOrderByDataDesc()
        {
            try
            {
                var result = this.Repo.SpPublicacoesOrderByDataDesc();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }
    }
}