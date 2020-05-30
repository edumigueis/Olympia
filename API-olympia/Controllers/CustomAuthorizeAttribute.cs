using System;
using System.Net;
using System.Security.Claims;
using System.Web.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using API_olympia.Controllers;

namespace API_olympia.Data
{
    [AttributeUsage(AttributeTargets.Class)]
    public class CustomAuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext filterContext)
        {
            if (Armazenador.StringValueRoute.Equals("olympia.art.br") ||
                Armazenador.StringValueRoute.Equals("localhost:5000") ||
                Armazenador.StringValueRoute.Equals("localhost:5001") ||
                Armazenador.StringValueRoute.Equals("localhost:8080"))
                return;

                if (Armazenador.StringValueRole != null)
                {
                    if (Armazenador.StringValueRole.Equals("Admin"))
                    {
                        return;
                    }
                    else
                    {
                        filterContext.Result = new RedirectResult("/Home/Login");
                    }
                }
                else
                {
                    filterContext.Result = new RedirectResult("/Home/Login");
                }
        }
    }
}
