using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace API_olympia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : Controller
    {
        public IRepository Repo { get; }

       /* private PasswordHasher hasher;*/
        public UsuariosController(IRepository repo)
        {
            this.Repo = repo;
        }

        [CustomAuthorizeAttribute]
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
        
        [CustomAuthorizeAttribute]
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
        
        [CustomAuthorizeAttribute]
        [HttpGet("RedirectToPost/{json}")]
        public async Task<IActionResult> RedirectToPost(string json)
        {
            try
            {
                json = "{\"IdUsuario\":0,\"Nome\":\"er ertert\",\"UserName\":\"vivianetasca\",\"Email\":\"smithrodrigues08 @gmail.com\",\"Senha\":\"Rei1\",\"Foto\":\"assa\"}";

                Usuarios usuario = JsonConvert.DeserializeObject<Usuarios>(json);

                await post(usuario);
                return Ok();
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados no get(id).");
            }
        }

        [CustomAuthorizeAttribute]
        [HttpPut("{idUsuario}")]
        public async Task<IActionResult> put(int idUsuario, Usuarios model)
        {
            try
            {
                var Usuario = await this.Repo.GetAllUsuariosAsyncById(idUsuario);
                if (Usuario == null) return NotFound(); //método do EF
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

        [CustomAuthorizeAttribute]
        [HttpDelete("{idUsuario}")]
        public async Task<IActionResult> delete(int idUsuario)
        {
            try
            {
                var Usuario = await this.Repo.GetAllUsuariosAsyncById(idUsuario);
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

        [CustomAuthorizeAttribute]
        [HttpPost]
        public async Task<IActionResult> post(Usuarios model)
        {
            try
            {
                model.Senha = PasswordHasher.Hash(model.Senha);
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