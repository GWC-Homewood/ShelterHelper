using System;
using System.Collections.Generic;
using System.Text;

namespace Pets.ValueObjects
{
    public class HumanName
    {
        public string LastName { get; private set; }
        public string FirstName { get; private set; }
        public string MiddleName { get; private set; }

        public HumanName(string lastName, string firstName, string middleName)
        {
            LastName = lastName;
            FirstName = firstName;
            MiddleName = middleName;
        }
        public HumanName(string lastName, string firstName)
        {
            LastName = lastName;
            FirstName = firstName;
            MiddleName = null;
        }
    }
}
