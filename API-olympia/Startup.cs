using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using API_olympia.Data;
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

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: "123FRSD123DFW32DWF435YASD345C3",
                                    builder =>
                                    {
                                        builder.WithOrigins("https://olympia.art.br", "http://localhost:8080")
                                               .WithMethods("PUT", "DELETE", "GET", "POST")
                                               .AllowAnyHeader()
                                               .AllowCredentials();
                                    });
            });

            services.AddMvc().AddMvcOptions(options => options.EnableEndpointRouting = false); 
            services.AddControllers();
            services.AddScoped<IRepository, Repository>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddDbContext<OlympiaContext>(
                x => x.UseSqlServer(Configuration.GetConnectionString("DFBQ3R5YHJFGS35476GFWS33466T3D"))
            );

            services.AddScoped<IServiceProvider, Service>();
            services.AddControllersWithViews();
            services.AddRazorPages();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("123FRSD123DFW32DWF435YASD345C3");
            app.UseMvc();

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
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });

            app.UseDeveloperExceptionPage();
        }
    }
}






