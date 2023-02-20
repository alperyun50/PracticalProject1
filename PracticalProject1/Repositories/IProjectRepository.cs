using System.Threading.Tasks;
using System;
using PracticalProject1.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace PracticalProject1.Repositories
{
    public interface IProjectRepository
    {
        Task<IEnumerable<Department>> Get_Departments();

        Task<IEnumerable<Names>> Get_Names();

        Task<Department> Update_Department(Department person);

        //Task<Department> Update_Departments(int id);
        Task<Department> Get_Depart(int id);

        //JsonResult Update_Departments(int id);
    }
}
