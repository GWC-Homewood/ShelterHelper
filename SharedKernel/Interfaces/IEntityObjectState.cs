using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharedKernel.Interfaces
{
    public interface IEntityObjectState
    {
        EntityObjectState ObjectState { get; set; }
    }

    public enum EntityObjectState
    {
        Unchanged,
        Added,
        Modified,
        Deleted

    }
}
