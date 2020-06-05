using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Claims;
using System.Collections.Generic;
using Microsoft.Extensions.Primitives;
using System;
using System.ComponentModel;
using Newtonsoft.Json;

namespace API_olympia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RedirectController : Controller
    {
        public IRepository Repo { get; }
        public RedirectController(IRepository repo)
        {
            this.Repo = repo;
        }

        [HttpPost("Cadastro")]
        public async Task<IActionResult> PostUsuario(Usuarios model)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];

                IDictionary<string, object> result = new Dictionary<string, object>();
                var properties = TypeDescriptor.GetProperties(model);
                foreach (PropertyDescriptor property in properties)
                {
                    result.Add(property.Name, property.GetValue(model));
                }

                JsonSerializerSettings settings = new JsonSerializerSettings { Converters = new[] { new MyConverter() } };
                string json = JsonConvert.SerializeObject(result, settings);
                return Redirect("/api/Usuarios/RedirectToPost/" + json);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }


        [HttpGet("Evento/{idEvento}")]
        public async Task<IActionResult> GetEvento(int idEvento)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Eventos/" + idEvento);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Obra/{idObra}")]
        public async Task<IActionResult> GetObra(int idObra)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Obras/" + idObra);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Usuario/{idUsuario}")]
        public async Task<IActionResult> GetUsuario(int idUsuario)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Usuarios/" + idUsuario);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Servico/{idServico}")]
        public async Task<IActionResult> GetServico(int idServico)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Servicos/" + idServico);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Publicacao/{idPublicacao}")]
        public async Task<IActionResult> GetPublicacao(int idPublicacao)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Publicacoes/" + idPublicacao);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Publicacoes")]
        public async Task<IActionResult> GetPublicacoes()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Publicacoes");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Eventos")]
        public async Task<IActionResult> GetEventos()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Eventos");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Usuarios")]
        public async Task<IActionResult> GetUsuarios()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Usuarios");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Obras")]
        public async Task<IActionResult> GetObras()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Obras");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Servicos")]
        public async Task<IActionResult> GetServicos()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Servicos");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        /****************************Storeds procedures****************************/

        [HttpGet("FotosDoServico/{idServico}")]
        public async Task<IActionResult> GetFotosServico(int idServico)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Fotos/Servico/" + idServico);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("FotosDaObra/{idObra}")]
        public async Task<IActionResult> GetFotosObra(int idObra)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Fotos/Obra/" + idObra);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("FotosDoEvento/{idEvento}")]
        public async Task<IActionResult> GetFotosEvento(int idEvento)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Fotos/Evento/" + idEvento);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("UserObra/{idObra}")]
        public async Task<IActionResult> GetUserObra(int idObra)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Usuarios/Obra/" + idObra);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("UserServico/{idServico}")]
        public async Task<IActionResult> GetUserServico(int idServico)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Usuarios/Servico/" + idServico);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("UserNameIsUsado/{username}")]
        public async Task<IActionResult> GetExisteUsername(string username)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Usuarios/Username/" + username);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("AllObrasUser/{idUsuario}")]
        public async Task<IActionResult> GetAllObrasUser(int idUsuario)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Obras/Usuario/" + idUsuario);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("AllServicosUser/{idUsuario}")]
        public async Task<IActionResult> GetAllServicosUser(int idServico)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Servicos/Usuario/" + idServico);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("AllEventosArte/{idArte}")]
        public async Task<IActionResult> GetAllEventosArte(int idArte)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Eventos/Arte/" + idArte);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("OrdenarObrasCurtidas")]
        public async Task<IActionResult> GetObrasCurtidasOrderByCurtidas()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Obras/Curtidas/");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("OrdenarServicosCurtidos")]
        public async Task<IActionResult> GetServicosCurtidosOrderByCurtidas()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Servicos/Curtidas/");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("OrdenarPublicacoesCurtidas")]
        public async Task<IActionResult> GetPublicacoesCurtidasOrderByCurtidas()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Publicacoes/Curtidas/");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("OrdenarObrasCurtidasDesc")]
        public async Task<IActionResult> GetObrasCurtidasOrderByCurtidasDesc()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Obras/CurtidasDesc/");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("OrdenarServicosCurtidosDesc")]
        public async Task<IActionResult> GetServicosCurtidosOrderByCurtidasDesc()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Servicos/CurtidasDesc/");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("OrdenarPublicacoesCurtidasDesc")]
        public async Task<IActionResult> GetPublicacoesCurtidasOrderByCurtidasDesc()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Publicacoes/CurtidasDesc/");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("ObrasSemCurtidas")]
        public async Task<IActionResult> GetObrasSemCurtidas()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Obras/NaoCurtidas/");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("PublicacoesSemCurtidas")]
        public async Task<IActionResult> GetPublicacoesSemCurtidas()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Publicacoes/NaoCurtidas/");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("ServicosSemCurtidas")]
        public async Task<IActionResult> GetServicosSemCurtidas()
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[5];
                return Redirect("/api/Servicos/NaoCurtidos/");
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}