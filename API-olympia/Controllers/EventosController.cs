using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Cors;
using System;
using System.Net;

namespace API_olympia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class EventosController : Controller
    {
        public IRepository Repo { get; }

        public EventosController(IRepository repo)
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

        [HttpGet("{idEvento}")]
        public async Task<IActionResult> Get(int idEvento)
        {

            try
            {
                var result = await this.Repo.GetAllEventosAsyncById(idEvento);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [HttpPut("{idEvento}")]
        public async Task<IActionResult> put(int idEvento, Eventos model)
        {
            try
            {
                var Evento = await this.Repo.GetAllEventosAsyncById(idEvento);
                if (Evento == null) return NotFound(); 
                this.Repo.Update(model);
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

        [HttpDelete("{idEvento}")]
        public async Task<IActionResult> delete(int idEvento)
        {

            try
            {
                var Evento = await this.Repo.GetAllEventosAsyncById(idEvento);
                if (Evento == null) return NotFound();
                this.Repo.Delete(Evento);
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
        public async Task<IActionResult> post(Eventos model)
        {
            try
            {
                this.Repo.Add(model);
                if (await this.Repo.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch(Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no post().");
            }
            return BadRequest();
        }

        [HttpGet("Arte/{idArte}")]
        public async Task<IActionResult> GetAllObrasByUser(int idArte)
        {
 
            try
            {
                var result = this.Repo.SpAllEventosArte(idArte);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

    }
}