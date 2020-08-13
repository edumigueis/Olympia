using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;
using Newtonsoft.Json;

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
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
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
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPut("{idUsuario}")]
        public async Task<IActionResult> put(int idUsuario, Usuarios model)
        {

            try
            {
                var Usuario = await this.Repo.GetAllUsuariosAsyncById(idUsuario);
                if (Usuario == null) return NotFound(); 
                this.Repo.Update(model);
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

        [HttpDelete("{idUsuario}")]
        public async Task<IActionResult> delete(int idUsuario)
        {

            try
            {
                var Usuario = await this.Repo.GetAllUsuariosAsyncById(idUsuario);
                if (Usuario == null) return NotFound();
                this.Repo.Delete(Usuario);
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
        public async Task<IActionResult> post(Usuarios model)
        {

            try
            {
                model.Senha = PasswordHasher.Hash(model.Senha);
                this.Repo.Add(model);

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

        [HttpGet("Obra/{idObra}")]
        public async Task<IActionResult> GetUsuariobyObra(int idObra)
        {

            try
            {
                var result = this.Repo.SpUserObra(idObra);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("Servico/{idServico}")]
        public async Task<IActionResult> GetUsuariobyServico(int idServico)
        {

            try
            {
                var result = this.Repo.SpUserServico(idServico);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("Username/{username}")]
        public async Task<IActionResult> IsUserNameUsed(string username)
        {

            try
            {
                var result = this.Repo.SpExisteUsername(username);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("IdByUserName/{username}")]
        public async Task<IActionResult> GetIdByUsername(string username)
        {

            try
            {
                var result = this.Repo.SpUserNameId(username);
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPost("MudarBio")]
        public async Task<IActionResult> postBio(Biografias bio)
        {

            try
            {
                this.Repo.SpMudarBio(bio.Biografia, bio.Bio, bio.IdUsuario);
                return Ok();
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPost("VerificarDados")]
        public async Task<IActionResult> postVerificarDados(DadosLogin dados)
        {
            try
            {
                if (dados.User.Substring(0, 1).Equals("@"))
                {
                    var result = this.Repo.SpVerificarDadosByUser(dados.User.ToString());
                    var senhaIgual = false;

                    if (result != null)
                    {
                        senhaIgual = PasswordHasher.Verify(dados.Senha.ToString(), result);
                    }
                    else
                        return this.StatusCode(StatusCodes.Status406NotAcceptable, "Não foram encontrados dados que atendam a sua requisição");

                    if (senhaIgual)
                        return Ok();

                    return this.StatusCode(StatusCodes.Status406NotAcceptable, "Não foram encontrados dados que atendam a sua requisição");
                }
                else
                {
                    var result = this.Repo.SpVerificarDadosByEmail(dados.User.ToString());
                    var senhaIgual = false;

                    if (result != null)
                    {
                        senhaIgual = PasswordHasher.Verify(dados.Senha.ToString(), result);
                    }

                    else
                        return this.StatusCode(StatusCodes.Status406NotAcceptable, "Não foram encontrados dados que atendam a sua requisição");

                    if (senhaIgual)
                        return Ok();

                    return this.StatusCode(StatusCodes.Status406NotAcceptable, "Não foram encontrados dados que atendam a sua requisição");
                }

            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("UserByLoginData/{info}")]
        public async Task<IActionResult> GetUserByLoginData(string info)
        {

            try
            {
                if (info.Substring(0, 1).Equals("@"))
                {
                    var result = this.Repo.SpUserByUsername(info);
                    return Ok(result);
                }
                else
                {
                    var result = this.Repo.SpUserByEmail(info);
                    return Ok(result);
                }

            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("Biografia/{idUsuario}")]
        public async Task<IActionResult> GetBiografia(int idUsuario)
        {

            try
            {
                var result = this.Repo.SpBiografiaByIdUser(idUsuario);
                return Ok(result);

            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("Bio/{idUsuario}")]
        public async Task<IActionResult> GetBio(int idUsuario)
        {

            try
            {
                var result = this.Repo.SpBioByIdUser(idUsuario);
                return Ok(result);

            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPost("AlterarConfig")]
        public async Task<IActionResult> postAlterarConfig(Configs dados, int idUsuario)
        {

            try
            {
                this.Repo.SpAlterConfig(JsonConvert.SerializeObject(dados), idUsuario);
                return Ok();
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("Search/{key}")]
        public async Task<IActionResult> Search(string key)
        {

            try
            {
                var result = this.Repo.SpSearchUser(key);
                return Ok(result);

            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }
    }
}