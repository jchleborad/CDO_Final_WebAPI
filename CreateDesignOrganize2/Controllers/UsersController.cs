﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CreateDesignOrganize2.Models;
using Microsoft.AspNetCore.Identity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CreateDesignOrganize2.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private UserContext context;
        public UsersController(UserContext context)
        {
            this.context = context;
        }

        // GET: api/values
        [HttpGet("test")]
        public bool Get()
        {
            return Auth.IsValidToken(Request.Headers["Authorization"]);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values/register
        [HttpPost("register")]
        public string Post([FromBody]User user)
        {
            User foundUser = context.Users.SingleOrDefault<User>(u => u.Username == user.Username);
            if (foundUser != null)
            {
                return "That username is not available, please try another";
            }
            user.Salt = Auth.GenerateSalt();
            user.Password = Auth.Hash(user.Password, user.Salt);
            context.Users.Add(user);
            context.SaveChanges();
            return Auth.GenerateJWT(user);
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            User foundUser = context.Users.SingleOrDefault<User>(
                u => u.Username == user.Username && u.Password == Auth.Hash(user.Password, u.Salt)
                );
            if (foundUser != null)
            {
                return Ok(foundUser);
                 //return Ok(Auth.GenerateJWT(foundUser));
            }
            return BadRequest("ALERT! Invalid Username &/or password.  Please re-enter.");
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
