using System;
using System.Collections.Generic;
using System.Text;

namespace Pets.Entities
{
    public class MedicalRecord
    {
        public Guid ID { get; set; }
        public DateTime Date { get; private set; }

    }
}
