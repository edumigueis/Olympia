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
    public class ServicosController : Controller
    {
        public IRepository Repo { get; }
        public ServicosController(IRepository repo)
        {
            this.Repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await this.Repo.GetAllServicosAsync();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get().");
            }
        }

        [HttpGet("{idServico}")]
        public async Task<IActionResult> Get(int idServico)
        {
            try
            {
                var result = await this.Repo.GetAllEventosAsyncById(idServico);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpPut("{idServico}")]
        public async Task<IActionResult> put(int idServico, Servicos model)
        {
            try
            {
                var servico = await this.Repo.GetAllServicosAsyncById(idServico);
                if (servico == null) return NotFound(); //método do EF
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

        [HttpDelete("{idServico}")]
        public async Task<IActionResult> delete(int idServico)
        {
            try
            {
                var servico = await this.Repo.GetAllServicosAsyncById(idServico);
                if (servico == null) return NotFound();
                this.Repo.Delete(servico);
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
        public async Task<IActionResult> post(Servicos model)
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

        [HttpGet("Usuario/{idUsuario}")]
        public async Task<IActionResult> GetAllObrasByUser(int idUsuario)
        {
            try
            {
                var result = this.Repo.SpAllServicosUser(idUsuario);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpGet("Curtidas")]
        public async Task<IActionResult> GetServicosCurtidosOrderByCurtidas()
        {
            try
            {
                var result = this.Repo.SpServicosCurtidas();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpGet("CurtidasDesc")]
        public async Task<IActionResult> GetServicosCurtidosOrderByCurtidasDesc()
        {
            try
            {
                var result = this.Repo.SpServicosCurtidasDesc();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpGet("NaoCurtidos")]
        public async Task<IActionResult> GetServicosNaoCurtidos()
        {
            try
            {
                var result = this.Repo.SpServicosNaoCurtidos();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }
    }
}