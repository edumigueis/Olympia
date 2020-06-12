using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using API_olympia.Controllers;

namespace API_olympia.Data
{
    [AttributeUsage(AttributeTargets.All)]
    public class CustomAuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public Type attributeArgument;
        public Armazenador Armazenador 
        {
            get
            {
              return ((IAttributeArgument)Activator.CreateInstance(attributeArgument)).Armazenador;
            }
        }
        public CustomAuthorizeAttribute(Type attributeArgument)
        {
            this.attributeArgument = attributeArgument;
        }
        public void OnAuthorization(AuthorizationFilterContext filterContext)
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











