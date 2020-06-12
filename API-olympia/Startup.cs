using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using API_olympia.Data;
using API_olympia.Controllers;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.Cookies;

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
                                        builder.WithOrigins("https://olympia.art.br", "http://localhost:8080","http://localhost:5001","http://localhost:5000","http://localhost:9000")
                                               .WithMethods("PUT", "DELETE", "GET", "POST")
                                               .AllowAnyHeader()
                                               .AllowCredentials();
                                    });
            });

            services.AddIdentityCore<IdentityUser>()
                    .AddRoles<IdentityRole>()
                    .AddEntityFrameworkStores<OlympiaContext>()
                    .AddDefaultTokenProviders()
                    .AddSignInManager<SignInManager<IdentityUser>>();


            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = "Administrador";
                options.DefaultSignInScheme = "Administrador";
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
            services.AddSingleton(new DataArmazenador());
            services.AddSingleton(new Armazenador());
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddMemoryCache();
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

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });

            app.UseMvc();

            app.UseDeveloperExceptionPage();
        }
    }
}






