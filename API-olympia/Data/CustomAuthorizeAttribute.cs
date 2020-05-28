using System;
using System.Net;
using System.Security.Claims;
using System.Web.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;


namespace API_olympia.Data
{
    [AttributeUsage(AttributeTargets.Class)]
    public class CustomAuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext filterContext)
        {
            HttpContextAccessor httpContextAccessor = new HttpContextAccessor();;

            if (httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.Role).Value.Equals("Admin"))
            {

                filterContext.HttpContext.Response.Headers.Add("AuthStatus", "Authorized");

                filterContext.HttpContext.Response.Headers.Add("storeAccessiblity", "Authorized");

            }
            else
            {
                filterContext.HttpContext.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
            }
        }
    }
}

