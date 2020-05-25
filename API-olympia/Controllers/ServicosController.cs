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
    [Authorize(Roles = "Admin")]
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
                    servico = await this.Repo.GetAllServicosAsyncById(idServico);
                    return Created($"/api/Servicos/{model.IdServico}", servico);
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
                    //return Ok();
                    return Created($"/api/Servicos/{model.IdServico}", model);
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