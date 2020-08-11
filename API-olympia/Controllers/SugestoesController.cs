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
    public class SugestoesController : Controller
    {
        public IRepository Repo { get; }
        public Armazenador Armazenador { get; set; }
        private Authorize auth;

        public SugestoesController(IRepository repo, Armazenador armazenador)
        {
            this.Repo = repo;
            Armazenador = armazenador;
            auth = new Authorize(Armazenador);
        }

        [HttpPut("{idSugestao}")]
        public async Task<IActionResult> put(int idSugestao, Sugestoes model)
        {
            var resultado = auth.OnAuthorization();
            if (!resultado)
                return RedirectToAction("login", "home");

            try
            {
                var sugestao = await this.Repo.GetAllSugestoesAsyncById(idSugestao);
                if (sugestao == null) 
                    return NotFound(); 
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

        [HttpDelete("{idSugestao}")]
        public async Task<IActionResult> delete(int idSugestao)
        {
            var resultado = auth.OnAuthorization();
            if (!resultado)
                return RedirectToAction("login", "home");

            try
            {
                var sugestao = await this.Repo.GetAllSugestoesAsyncById(idSugestao);
                if (sugestao == null) 
                    return NotFound();

                this.Repo.Delete(sugestao);
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
        public async Task<IActionResult> post(Sugestoes model)
        {
            var resultado = auth.OnAuthorization();
            if (!resultado)
                return RedirectToAction("login", "home");

            try
            {
                this.Repo.Add(model);
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