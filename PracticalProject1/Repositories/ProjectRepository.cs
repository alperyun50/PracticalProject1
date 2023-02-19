using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using PracticalProject1.Models;
using Microsoft.EntityFrameworkCore;

namespace PracticalProject1.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        // added for dbcontext injection
        private ProjectDbContext _dbContext;

        public ProjectRepository(ProjectDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Department>> Get_Departments()
        {
            var result = await _dbContext.Departments.ToListAsync();

            return result;
        }

        public async Task<IEnumerable<Names>> Get_Names()
        {
            var result = await _dbContext.Namess.ToListAsync();
            return result;
        }

        public async Task<Department> Update_Department(Department dept)
        {
            var result = await _dbContext.Departments.FirstOrDefaultAsync(e => e.Id == dept.Id);

            if (result != null)
            {
                result.code = dept.code;
                result.department = dept.department;

                _dbContext.Departments.Update(result);
                await _dbContext.SaveChangesAsync();

                return result;
            }

            return null;
        }
    }
}
