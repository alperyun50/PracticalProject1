using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace PracticalProject1.Models
{
    public class Department
    {
        [Key]
        public int Id { get; set; }

        public string code { get; set; }

        public string department { get; set; }
    }
}
