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
            services.AddScoped<IServiceProvider, Service>();
            services.AddScoped<DbContext, OlympiaContext>();

            services.AddMvc(option =>
            {
                option.EnableEndpointRouting = false;
                var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
            });

            services.AddCors(options =>
            {
                options.AddPolicy(name: "myPolicy",
                                    builder =>
                                    {
                                        builder.WithOrigins("https://localhost:5001", "https://localhost:5000", "https://localhost:8080")
                                               .WithMethods("PUT", "DELETE", "GET", "POST");
                                    });
            });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("RequireAdminRole",
                 policy => policy.RequireRole("Admin"));
            });

            services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = IdentityConstants.ApplicationScheme;
                    options.DefaultChallengeScheme = IdentityConstants.ApplicationScheme;
                    options.DefaultSignInScheme = IdentityConstants.ExternalScheme;
                }
            )
                .AddIdentityCookies();


            services.AddDbContext<OlympiaContext>(
                x => x.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer"))
            );

            services.AddControllers();
            services.AddScoped<IRepository, Repository>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["jwt:key"])),
                ClockSkew = TimeSpan.Zero
            });

            services.AddIdentityCore<IdentityUser>()
                    .AddRoles<IdentityRole>()
                    .AddEntityFrameworkStores<OlympiaContext>()
                    .AddDefaultTokenProviders()
                    .AddDefaultTokenProviders()
                    .AddSignInManager<SignInManager<IdentityUser>>();


            services.AddControllersWithViews();
            services.AddRazorPages();

            services.AddHttpContextAccessor();

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
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IServiceProvider serviceProvider)
        {
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

            app.UseMvc();

            app.UseAuthorization();
            app.UseCors("myPolicy");
            app.UseAuthentication();

            serviceProvider.GetService<OlympiaContext>().Database.EnsureCreated();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}






