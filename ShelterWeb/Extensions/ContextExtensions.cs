using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Pets.Data;

namespace ShelterHelper.Extensions
{
    public static class ContextExtensions
    {
        public static IServiceCollection AddContexts(this IServiceCollection services, string Connections)
        {
            services.AddDbContext<PetsContext>(options =>
            options.UseSqlServer(Connections, x => x.MigrationsHistoryTable("_Migrations", "Pets")));
            
            return services;
        }
    }
}
