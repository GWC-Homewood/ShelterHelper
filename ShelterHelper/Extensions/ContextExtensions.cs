using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;



namespace ShelterHelper.Extensions
{
    public static class ContextExtensions
    {
        public static IServiceCollection AddContexts(this IServiceCollection services, string Connections)
        {

            return services;
        }
    }
}
