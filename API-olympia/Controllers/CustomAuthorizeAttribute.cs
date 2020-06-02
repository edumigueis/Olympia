using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using API_olympia.Controllers;

namespace API_olympia.Data
{
    [AttributeUsage(AttributeTargets.All)]
    public class CustomAuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        private readonly OlympiaContext context;
        public CustomAuthorizeAttribute() 
        {
            this.context = context;
        }
        public void OnAuthorization(AuthorizationFilterContext filterContext)
        {
            if (context.armazenador.StringValueRoute != null)
            {

                if (context.armazenador.StringValueRoute.Equals("olympia.art.br") ||
                    context.armazenador.StringValueRoute.Equals("http://localhost:8080/"))
                {
                    context.armazenador.StringValueRoute = null;
                    return;
                }

                context.armazenador.StringValueRoute = null;
            }

                if (context.armazenador.StringValueRole != null)
                {
                    if (context.armazenador.StringValueRole.Equals("Admin"))
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

