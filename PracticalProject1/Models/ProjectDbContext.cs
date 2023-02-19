using Microsoft.EntityFrameworkCore;
using System;

namespace PracticalProject1.Models
{
    public class ProjectDbContext : DbContext
    {
        public ProjectDbContext(DbContextOptions<ProjectDbContext> opt) : base(opt)
        {

        }


        public DbSet<Department> Departments { get; set; }
        public DbSet<Names> Namess { get; set; }
    }
}
