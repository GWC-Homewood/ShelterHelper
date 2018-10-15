using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace ShelterHelper.Extensions
{
    public static class CustomServiceExtensions
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {
            //  services.AddTransient<Center.Factories.ICenterFactory, Center.Factories.CenterFactory>();
            //services.AddTransient<Center.Command.ICenterCommand, Center.Command.CenterCommands>();

            return services;
        }
    }
}
