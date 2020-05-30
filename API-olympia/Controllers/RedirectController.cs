﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Claims;
using System.Collections.Generic;
using Microsoft.Extensions.Primitives;

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

        [HttpPost("CadastroUser")]
        public async Task<IActionResult> PostUsuarios(Usuarios model)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[7];
                return Redirect("/api/Usuarios/RedirectToPost/" + model);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Eventos/{idEvento}")]
        public async Task<IActionResult> GetEventos(int idEvento)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[7];
                return Redirect("/api/Eventos/" + idEvento);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Obras/{idObra}")]
        public async Task<IActionResult> GetObras(int idObra)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[7];
                return Redirect("/api/Obras/" + idObra);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Usuarios/{idUsuario}")]
        public async Task<IActionResult> GetUsuarios(int idUsuario)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[7];
                return Redirect("/api/Usuarios/" + idUsuario);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Servicos/{idServico}")]
        public async Task<IActionResult> GetServicos(int idServico)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[7];
                return Redirect("/api/Servicos/" + idServico);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet("Publicacoes/{idPublicacao}")]
        public async Task<IActionResult> GetPublicacoes(int idPublicacao)
        {
            try
            {
                ICollection<StringValues> lista;
                lista = HttpContext.Request.Headers.Values;
                IList<StringValues> listagem = lista as IList<StringValues>;
                Armazenador.StringValueRoute = listagem[7];
                return Redirect("/api/Publicacoes/" + idPublicacao);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

    }
}