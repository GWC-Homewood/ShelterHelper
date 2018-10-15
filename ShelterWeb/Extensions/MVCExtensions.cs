using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace ShelterHelper.Extensions
{
    public static class MVCExtensions
    {
        public static IApplicationBuilder AddCustomizedMVC(this IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.MapWhen(x => !x.Request.Path.Value.StartsWith("/swagger"), builder =>
                {
                    builder.UseMvc(routes =>
                    {
                        routes.MapSpaFallbackRoute(
                            name: "spa-fallback",
                            defaults: new { controller = "Home", action = "Index" });
                    });
                });
                return app;
            }
            else
            {
                app.UseMvc(routes =>
                {
                    routes.MapRoute(
                     name: "default",
                     template: "{controller=Home}/{action=Index}/{id?}");

                    routes.MapRoute(
                     "Sitemap",
                     "sitemap.xml",
                     new { controller = "Home", action = "SitemapXml" });

                    routes.MapSpaFallbackRoute(
                      name: "spa-fallback",
                      defaults: new { controller = "Home", action = "Index" });

                });
                return app;
            }
        }
    }
}
