using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System;

namespace API_olympia.Controllers
{
    [CustomAuthorizeAttribute]
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
                var result = await this.Repo.GetAllObrasAsync();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("{idObra}")]
        public async Task<IActionResult> Get(int idObra)
        {
            try
            {
                var result = await this.Repo.GetAllObrasAsyncById(idObra);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPut("{idObra}")]
        public async Task<IActionResult> put(int idObra, Obras model)
        {
            try
            {
                var obra = await this.Repo.GetAllObrasAsyncById(idObra);
                if (obra == null) return NotFound(); //método do EF
                this.Repo.Update(model);
                //
                if (await this.Repo.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
            return BadRequest();
        }

        [HttpDelete("{idObra}")]
        public async Task<IActionResult> delete(int idObra)
        {
            try
            {
                var obra = await this.Repo.GetAllObrasAsyncById(idObra);
                if (obra == null) return NotFound();
                this.Repo.Delete(obra);
                //
                if (await this.Repo.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
            return BadRequest();
        }

        [HttpPost]
        public async Task<IActionResult> post(Obras model)
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
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
            return BadRequest();
        }

        [HttpGet("Usuario/{idUsuario}")]
        public async Task<IActionResult> GetAllObrasByUser(int idUsuario)
        {
            try
            {
                var result = this.Repo.SpAllObrasUser(idUsuario);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("Curtidas")]
        public async Task<IActionResult> GetObrasCurtidasOrderByCurtidas()
        {
            try
            {
                var result = this.Repo.SpObrasCurtidas();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("CurtidasDesc")]
        public async Task<IActionResult> GetObrasCurtidasOrderByCurtidasDesc()
        {
            try
            {
                var result = this.Repo.SpObrasCurtidasDesc();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("NaoCurtidas")]
        public async Task<IActionResult> GetObrasNaoCurtidas()
        {
            try
            {
                var result = this.Repo.SpObrasNaoCurtidas();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("MaisRecentes")]
        public async Task<IActionResult> GetObrasOrderByData()
        {
            try
            {
                var result = this.Repo.SpObrasOrderByData();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("MenosRecentes")]
        public async Task<IActionResult> GetObrasOrderByDataDesc()
        {
            try
            {
                var result = this.Repo.SpObrasOrderByDataDesc();
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }
    }
}