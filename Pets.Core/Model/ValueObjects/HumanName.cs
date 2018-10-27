using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Pets.ValueObjects
{
    [Owned]
    public class HumanName
    {
        [MaxLength(50)]
        public string LastName { get; private set; }
        [MaxLength(50)]
        public string FirstName { get; private set; }
        [MaxLength(50)]
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
