using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using API_olympia.Data;
using Microsoft.AspNetCore.Mvc;
using API_olympia.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;

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
        var UserManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
        string[] roleNames = { "Admin"};
        IdentityResult roleResult;

        foreach (var roleName in roleNames)
        {
            var roleExist = await RoleManager.RoleExistsAsync(roleName);
            // ensure that the role does not exist
            if (!roleExist)
            {
                //create the roles and seed them to the database: 
                roleResult = await RoleManager.CreateAsync(new IdentityRole(roleName));
            }
        }

        // find the user with the admin email 
        var _user = await UserManager.FindByEmailAsync("admin@email.com");

       // check if the user exists
       if(_user == null)
       {
            //Here you could create the super admin who will maintain the web app
            var poweruser = new ApplicationUser
            {
                UserName = "Admin",
                Email = "admin@email.com",
            };
            string adminPassword = "p@$$w0rd";

            var createPowerUser = await UserManager.CreateAsync(poweruser, adminPassword);
            if (createPowerUser.Succeeded)
            {
                //here we tie the new user to the role
                await UserManager.AddToRoleAsync(poweruser, "Admin");

            }
       }
    }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: "myPolicy",
                                    builder =>
                                    {
                                        builder.WithOrigins("https://localhost:5001","https://localhost:5000")
                                               .WithMethods("PUT", "DELETE", "GET", "POST");
                                    });
            });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("RequireAdministratorRole",
                policy => policy.RequireRole("Administrator"));
            });
            services.AddDbContext<OlympiaContext>(
                x => x.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer"))
            );

            services.AddControllers();
            services.AddScoped<IRepository, Repository>();
            services.AddControllersWithViews();
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

            services.AddControllersWithViews();
            services.AddRazorPages();
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
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

            app.UseAuthorization();
            app.UseCors("myPolicy");

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






