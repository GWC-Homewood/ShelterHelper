using System;
using System.Collections.Generic;
using System.Text;
using Pets.Entities;

namespace Pets.Aggregates
{
   public class Pet
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string MicrochipNumber { get; set; }
        public DateTime? BirthDate { get; set; }

        public List<MedicalRecord> MedicalRecords { get; set; }
        public Guid ParentID { get; set; }
        public Parent Parent { get; set; }

    }
}
