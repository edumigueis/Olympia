using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Net;

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

        [HttpGet("RedirectToPost/{json}")]
        public async Task<IActionResult> RedirectToPost(string json)
        {

            try
            {
                Usuarios usuario = JsonConvert.DeserializeObject<Usuarios>(json);

                return await post(usuario);
            }
            catch(Exception e)
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

        [HttpGet("RedirectToPostBio/{json}")]
        public async Task<IActionResult> RedirectToPostBio(string json)
        {

            try
            {
                List<string> bio = JsonConvert.DeserializeObject<List<string>>(json);

                return await postBio(bio);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPost("MudarBio")]
        public async Task<IActionResult> postBio(List<string> bio)
        {

            try
            {
                this.Repo.SpMudarBio(bio[0].ToString(), bio[1].ToString(), Convert.ToInt32(bio[2]));
                return Ok();
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("RedirectToPostVerificarDados/{json}")]
        public async Task<IActionResult> RedirectToPostVerificarDados(string json)
        {

            try
            {
                var dados = json.Split(',').Select(item => item).ToList();

                return await postVerificarDados(dados);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPost("VerificarDados")]
        public async Task<IActionResult> postVerificarDados(List<string> dados)
        {
            try
            {
                if (dados[0].Substring(0, 1).Equals("@"))
                {
                    var result = this.Repo.SpVerificarDadosByUser(dados[0].ToString());
                    var senhaIgual = false;

                    if (result != null)
                    {
                        senhaIgual = PasswordHasher.Verify(dados[1].ToString(), result);
                    }
                    else
                        return this.StatusCode(StatusCodes.Status406NotAcceptable, "Não foram encontrados dados que atendam a sua requisição");

                    if (senhaIgual)
                        return Ok();

                    return this.StatusCode(StatusCodes.Status406NotAcceptable, "Não foram encontrados dados que atendam a sua requisição");
                }
                else
                {
                    var result = this.Repo.SpVerificarDadosByEmail(dados[0].ToString());
                    var senhaIgual = false;

                    if (result != null)
                    {
                        senhaIgual = PasswordHasher.Verify(dados[1].ToString(), result);
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

        [HttpGet("RedirectToPostAlterarConfig/{json}")]
        public async Task<IActionResult> RedirectToPostAlterarConfig(string json)
        {

            try
            {
                var dados = (IList<object>)JsonConvert.DeserializeObject<Configs>(json);
                return await postAlterarConfig(dados);
            }
            catch (Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, e.ToString());
            }
        }

        [HttpPost("AlterarConfig")]
        public async Task<IActionResult> postAlterarConfig(IList<object> dados)
        {

            try
            {
                this.Repo.SpAlterConfig(dados[0] + "",Convert.ToInt32(dados[1]));
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