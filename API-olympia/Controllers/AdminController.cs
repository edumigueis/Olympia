using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using API_olympia.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using API_olympia.Data;
using System.Net;

namespace API_olympia.Controllers
{
    public class AdminController : Controller
    {
        public IRepository Repo { get; set; }
        private readonly string ip;

        public AdminController(IRepository repo)
        {
            Repo = repo;
        }

        public IActionResult Admin()
        {
            return View();
        }
        public IActionResult Feedbacks()
        {
            return View();
        }
        public IActionResult Sugestoes()
        {
            return View();
        }
        public IActionResult Denuncias()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
