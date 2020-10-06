using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Imagesearchengineservice.Models;
using System.Web.Mvc;

namespace Imagesearchengineservice.Controllers
{
    public class UserProfileController : ApiController
    {
        private readonly wp_projectEntities wp_ProjectEntities;
        public UserProfileController()
        {
            wp_ProjectEntities = new wp_projectEntities();
            ;
        }


        [System.Web.Http.HttpGet]


        [System.Web.Mvc.Route("api/UserProfile/Login/{LoginId}/{Password}")]
        public IHttpActionResult Get(string LoginId, string Password)
        {
            try
            {
                var Result = wp_ProjectEntities.UserProfiles.Any(user => user.User_Email.Equals(LoginId) && user.User_Password.Equals(Password));
                if (Result == true)
                    return Ok();
                return Unauthorized();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex.InnerException);
            }

        }


        [System.Web.Mvc.Route("api/UserProfile/Registration")]
        [System.Web.Http.HttpPost]
        public HttpResponseMessage Post(UserProfile userProfile)
        {
            try
            {
                var EnailAlreadyExist = wp_ProjectEntities.UserProfiles.Any(user => user.User_Email.Equals(userProfile.User_Email));
                var MobileAlreadyExist = wp_ProjectEntities.UserProfiles.Any(user => user.User_Mobile_No.Equals(userProfile.User_Mobile_No));
                if (EnailAlreadyExist == true)
                {
                    return Request.CreateResponse((HttpStatusCode)420, "Email Already Exist");
                }
                else if (MobileAlreadyExist == true)
                {
                    return Request.CreateResponse((HttpStatusCode)421, "MobileNo Already Exist");
                }
                else
                {
                    wp_ProjectEntities.UserProfiles.Add(userProfile);
                    wp_ProjectEntities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.InnerException);
            }

        }
        [System.Web.Mvc.Route("api/user/ResetPassowrd/{EmailId}/{NewPassowrd}")]



        [System.Web.Http.HttpPut]
        public HttpResponseMessage Put(string EmailId, string NewPassowrd)
        {
            try
            {
                var IsExists = wp_ProjectEntities.UserProfiles.Any(user => user.User_Email.Equals(EmailId));
                if (IsExists)
                {
                    wp_ProjectEntities.Proc_ResetPassword(EmailId, NewPassowrd);
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
                else
                {
                    return Request.CreateResponse((HttpStatusCode.NoContent, "User Not  Exists"));
                }

            }

            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.InnerException);
            }

        }

    }
    }
