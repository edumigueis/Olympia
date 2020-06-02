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
    [AttributeUsage(AttributeTargets.All)]
    public class CustomAuthorizeAttribute : Attribute, IAuthorizationFilter
    {
<<<<<<< HEAD
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
=======
        private readonly OlympiaContext context;
        public CustomAuthorizeAttribute(OlympiaContext context) 
>>>>>>> parent of 9bb520e... cul
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

<<<<<<< HEAD
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
=======
                if (context.armazenador.StringValueRole != null)
                {
                    if (context.armazenador.StringValueRole.Equals("Admin"))
>>>>>>> parent of 9bb520e... cul
                    {
                        return;
                    }
                    else
                    {
                        filterContext.Result = new RedirectResult("/Home/Login");
                    }
<<<<<<< HEAD
>>>>>>> parent of 1dc3ba6... Ajustes
=======
>>>>>>> parent of 9bb520e... cul
                }
                else
                {
                    filterContext.Result = new RedirectResult("/Home/Login");
                }
        }
    }
}

