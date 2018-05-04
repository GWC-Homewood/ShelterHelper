using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharedKernel.Interfaces
{
    public interface IEventContainer
    {
        IEnumerable<IDomainEventHandler<T>> Handlers<T>(T domainEvent)
                                                            where T : IDomainEvent;
    }
}
