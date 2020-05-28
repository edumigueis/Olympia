using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using API_olympia.Data;
using API_olympia.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Umbraco.Core.Persistence.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Core.Services;
using Microsoft.AspNetCore.Mvc.Routing;
using Umbraco.Core.Services.Implement;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Hosting.Internal;

namespace API_olympia
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        private async Task CreateRoles(IServiceProvider serviceProvider)
        {
            //initializing custom roles 
            var RoleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var UserManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
            string[] roleNames = { "Admin" };
            IdentityResult roleResult;

            foreach (var roleName in roleNames)
            {
                var roleExist = await RoleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    roleResult = await RoleManager.CreateAsync(new IdentityRole(roleName));
                }
            }

        }

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddMvc(option =>
            {
                option.EnableEndpointRouting = false;
                var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
            });
            services.AddControllers();
            services.AddScoped<IRepository, Repository>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddDbContext<OlympiaContext>(
                x => x.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer"))
            );

            services.AddCors(options =>
            {
                options.AddPolicy(name: "myPolicy",
                                    builder =>
                                    {
                                        builder.WithOrigins("https://localhost:5001", "https://localhost:5000", "https://localhost:8080")
                                               .WithMethods("PUT", "DELETE", "GET", "POST");
                                    });
            });

            services.AddIdentityCore<IdentityUser>()
                    .AddRoles<IdentityRole>()
                    .AddEntityFrameworkStores<OlympiaContext>()
                    .AddDefaultTokenProviders()
                    .AddSignInManager<SignInManager<IdentityUser>>();


            services.AddAuthentication(o =>
            {
                o.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                o.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddCookie("Administrador", options =>
            {
                options.ExpireTimeSpan = TimeSpan.FromMinutes(30);
                options.Cookie.HttpOnly = true;
                options.Cookie.SameSite = Microsoft.AspNetCore.Http.SameSiteMode.Lax;
                options.Cookie.SecurePolicy = Microsoft.AspNetCore.Http.CookieSecurePolicy.SameAsRequest;
                options.Events.OnRedirectToLogin = (context) =>
                {
                    context.Response.StatusCode = Microsoft.AspNetCore.Http.StatusCodes.Status401Unauthorized;
                    context.Response.Redirect("/Home/Login");
                    return Task.CompletedTask;
                };
            })
            .AddJwtBearer();

            services.AddHttpClient();
            services.AddHttpContextAccessor();

            /*services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["jwt:key"])),
                        ClockSkew = TimeSpan.Zero
                    });*/

            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(30);
                options.Cookie.Name = "Administrador";
                options.Cookie.Path = "/";
                options.Cookie.HttpOnly = true;
                options.Cookie.SameSite = Microsoft.AspNetCore.Http.SameSiteMode.Lax;
                options.Cookie.SecurePolicy = Microsoft.AspNetCore.Http.CookieSecurePolicy.SameAsRequest;
            });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("Admin",
                 policy => policy.RequireClaim("Admin"));
            });

            services.AddMemoryCache();

            if (Configuration.GetSection("AppSettings")["RedisConnectionString"] != "")
            {
                services.AddStackExchangeRedisCache(options =>
                {
                    options.Configuration = Configuration.GetSection("AppSettings")["RedisConnectionString"];
                    options.InstanceName = "Fotbollstabeller:";
                });
            }

            services.AddScoped<IServiceProvider, Service>();
            services.TryAddScoped<IUserValidator<IdentityUser>, UserValidator<IdentityUser>>();
            services.TryAddScoped<IPasswordValidator<IdentityUser>, PasswordValidator<IdentityUser>>();
            services.TryAddScoped<IPasswordHasher<IdentityUser>, PasswordHasher<IdentityUser>>();
            services.TryAddScoped<ILookupNormalizer, UpperInvariantLookupNormalizer>();
            services.TryAddScoped<IRoleValidator<IdentityRole>, RoleValidator<IdentityRole>>();
            services.TryAddScoped<IdentityErrorDescriber>();
            services.TryAddScoped<ISecurityStampValidator, SecurityStampValidator<IdentityUser>>();
            services.TryAddScoped<ITwoFactorSecurityStampValidator, TwoFactorSecurityStampValidator<IdentityUser>>();
            services.TryAddScoped<IUserClaimsPrincipalFactory<IdentityUser>, UserClaimsPrincipalFactory<IdentityUser, IdentityRole>>();
            services.TryAddScoped<UserManager<IdentityUser>>();
            services.TryAddScoped<SignInManager<IdentityUser>>();
            services.TryAddScoped<RoleManager<IdentityRole>>();
            services.AddControllersWithViews();
            services.AddRazorPages();

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory, IServiceProvider serviceProvider)
        {
            app.ApplicationServices.GetRequiredService<IHttpContextAccessor>();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();
            app.UseAuthorization();
            app.UseCors("myPolicy");
            app.UseAuthentication();
            app.UseSession();
            app.UseCookiePolicy();

            serviceProvider.GetService<OlympiaContext>().Database.EnsureCreated();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });

            app.UseMvc();

        }
    }
}






