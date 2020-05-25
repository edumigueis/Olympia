using Microsoft.AspNetCore.Mvc;
using API_olympia.Data;
using API_olympia.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Collections.Generic;  
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace API_olympia.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration _configuration;
        public IRepository Repo { get; }
        public AdminsController(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        /*[HttpPost("Login")]
        public async Task<ActionResult> Login(UserInfo userInfo)
        {

            Claim claim = new Claim(userInfo.User, userInfo.Password);
            IList<Claim> Claims = new List<Claim>() {claim};
            ClaimsIdentity identity = new ClaimsIdentity(Claims);
            ClaimsPrincipal principal = new ClaimsPrincipal(identity);
            Thread.CurrentPrincipal = principal;

            return View();
        }

        private UserToken BuildToken(UserInfo userInfo)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.UniqueName, userInfo.User),
                new Claim("meuValor", "oque voce quiser"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var expiration = DateTime.UtcNow.AddHours(1);
            JwtSecurityToken token = new JwtSecurityToken(
               issuer: null,
               audience: null,
               claims: claims,
               expires: expiration,
               signingCredentials: creds);

            return new UserToken()
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration
            };
        }*/

        [HttpPost]
        public async Task<IActionResult> post(Admins model)
        {
            try
            {
                this.Repo.Add(model);
                //
                if (await this.Repo.SaveChangesAsync())
                {
                    //return Ok();
                    /*return Created($"/api/artes/{model.IdArte}", model);*/
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