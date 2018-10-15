using System;
using System.Collections.Generic;
using System.Text;
using Pets.ValueObjects;

namespace Pets.Entities
{
    public class Parent
    {
        public Guid ID { get; private set; }
        public HumanName HumanName { get; set; }
        public Address Address { get; set; }

    }
}
