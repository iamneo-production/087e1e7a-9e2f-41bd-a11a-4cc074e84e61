using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace dotnetapp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //string connectionString = Configuration.GetConnectionString("myconnstring");
           // services.AddDbContext<ProductDBContext>(opt => opt.UseSqlServer(connectionString));
           // services.AddScoped<IProductService, ProductService>();
            services.AddCors();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "dotnetapp", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "dotnetapp v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
<<<<<<< HEAD
            app.UseCors(options => options.WithOrigins("https://8081-affdbaabdcabfabadfbbdfdacbcefeddcbcbaffb.project.examly.io/").AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

=======
<<<<<<< HEAD

            app.UseCors(options => options.WithOrigins("https://8081-dcfcfccddeabadfbbdfdacbcefeddcbcbaffb.project.examly.io/").AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

=======
             app.UseCors(options => options.WithOrigins("https://8081-afafecaabdbcabadfbbdfdacbcefeddcbcbaffb.project.examly.io/").AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
>>>>>>> 7bb85aaa0df656ed55ed049478d067799ad7402d
>>>>>>> b28bffbab001a6d01c349a4da93d7e07c08ca0ac
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
