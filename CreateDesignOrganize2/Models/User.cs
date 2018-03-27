//WOZU FINAL PROJECT
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CreateDesignOrganize2.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public string Role { get; set; }
    }
}
