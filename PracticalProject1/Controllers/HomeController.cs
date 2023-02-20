using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PracticalProject1.Models;
using PracticalProject1.Repositories;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace PracticalProject1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IProjectRepository _projectRepository;

        public HomeController(ILogger<HomeController> logger, IProjectRepository projectRepository)
        {
            _logger = logger;
            _projectRepository = projectRepository;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Department>>> GetDepartments()
        {
            try
            {
                var departments = await _projectRepository.Get_Departments();

                return Ok(departments);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retriewing data from the database!..");
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Names>>> GetNames()
        {
            try
            {
                var names = await _projectRepository.Get_Names();

                return Ok(names);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retriewing data from the database!..");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Department>> UpdateDepartments(Department dept)
        {
            try
            {
                if (dept == null)
                {
                    return BadRequest();
                }

                var department = await _projectRepository.Update_Department(dept);

                return Ok(department);

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating new department and/or code record!..");
            }
        }

        //[HttpPut]
        //public ActionResult UpdateDepartment(int id)
        //{
        //    try
        //    {
        //        var department = _projectRepository.Update_Departments(id);

        //        return Ok(department);
        //    }
        //    catch (Exception)
        //    {
        //        return StatusCode(StatusCodes.Status500InternalServerError, "Error updating new department and/or code record!..");
        //    }
        //}

        //public JsonResult GetDepartment(int id)
        //{
        //    var data = _projectDbContext.Departments.Where(e => e.Id == id).SingleOrDefault();

        //    return new JsonResult(data);
        //}

        [HttpGet]
        public async Task<ActionResult<Department>> GetDepartment(int Id)
        {
            try
            {
                var result = await _projectRepository.Get_Depart(Id);

                if (result == null)
                {
                    return NotFound();
                }

                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retriewing data from the database!..");
            }
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
