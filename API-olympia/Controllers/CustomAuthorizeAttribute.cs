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

