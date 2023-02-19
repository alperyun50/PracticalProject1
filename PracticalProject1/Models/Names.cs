using System.ComponentModel.DataAnnotations;

namespace PracticalProject1.Models
{
    public class Names
    {
        [Key]
        public int code { get; set; }

        public string names { get; set; }
    }
}
