using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Autofac;


namespace ShelterHelper.Extensions
{
    public static class EventExtensions
    {
        public static ContainerBuilder RegisterEvents()
        {
            var builder = new ContainerBuilder();
            //builder.RegisterType<Center.EventHandlers.CenterUpdatedEventHandler>().As<IDomainEventHandler<Center.Events.CenterUpdated>>();


            return builder;
        }
    }
}
