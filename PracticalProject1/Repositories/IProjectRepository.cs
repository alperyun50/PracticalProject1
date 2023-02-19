using System.Threading.Tasks;
using System;
using PracticalProject1.Models;
using System.Collections.Generic;

namespace PracticalProject1.Repositories
{
    public interface IProjectRepository
    {
        Task<IEnumerable<Department>> Get_Departments();

        Task<IEnumerable<Names>> Get_Names();

        Task<Department> Update_Department(Department person);
    }
}
