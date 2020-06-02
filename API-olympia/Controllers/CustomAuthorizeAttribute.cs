using System;
using System.Net;
using System.Security.Claims;
using System.Web.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace API_olympia.Data
{
    [AttributeUsage(AttributeTargets.All)]
    public class CustomAuthorizeAttribute : Attribute, IAuthorizationFilter
    {
<<<<<<< HEAD
<<<<<<< HEAD
        public void OnAuthorization(AuthorizationFilterArmazenador filterArmazenador)
=======
=======
        private readonly OlympiaContext context;
        public CustomAuthorizeAttribute() 
        {
            this.context = context;
        }
>>>>>>> parent of 831c112... ooi
        public void OnAuthorization(AuthorizationFilterContext filterContext)
>>>>>>> parent of 1dc3ba6... Ajustes
        {
            if (Armazenador.StringValueRoute != null)
            {

                if (Armazenador.StringValueRoute.Equals("olympia.art.br") ||
                    Armazenador.StringValueRoute.Equals("http://localhost:8080/"))
                {
                    Armazenador.StringValueRoute = null;
                    return;
                }

                Armazenador.StringValueRoute = null;
            }

<<<<<<< HEAD
            if (Armazenador.StringValueRole != null)
            {
                if (Armazenador.StringValueRole.Equals("Admin"))
                {
                    return;
=======
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
>>>>>>> parent of 1dc3ba6... Ajustes
                }
                else
                {
                    filterArmazenador.Result = new RedirectResult("/Home/Login");
                }
            }
            else
            {
                filterArmazenador.Result = new RedirectResult("/Home/Login");
            }
        }
    }
}

