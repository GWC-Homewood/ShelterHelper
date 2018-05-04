using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SharedKernel.Interfaces;
using Autofac;

namespace SharedKernel
{
    public class NetEventContainer : IEventContainer
    {
        private readonly Autofac.IContainer _IContainer;

        public NetEventContainer(Autofac.IContainer IContainer)
        {
            _IContainer = IContainer;
        }

        public IEnumerable<IDomainEventHandler<T>> Handlers<T>(T domainEvent) where T : IDomainEvent
        {
            return _IContainer.Resolve<IEnumerable<IDomainEventHandler<T>>>();


        }

    }
}
