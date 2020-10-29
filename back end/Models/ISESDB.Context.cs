﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Imagesearchengineservice.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class wp_projectEntities : DbContext
    {
        public wp_projectEntities()
            : base("name=wp_projectEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<UserProfile> UserProfiles { get; set; }
    
        public virtual ObjectResult<string> PROC_ISES_LOGIN_VALIDATION(string loginID, string password)
        {
            var loginIDParameter = loginID != null ?
                new ObjectParameter("loginID", loginID) :
                new ObjectParameter("loginID", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("Password", password) :
                new ObjectParameter("Password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("PROC_ISES_LOGIN_VALIDATION", loginIDParameter, passwordParameter);
        }
    
        public virtual int PROC_ISES_User_Registration(string user_ID, string user_Name, string email_ID, string mobile_Number, string user_type, string password, ObjectParameter result)
        {
            var user_IDParameter = user_ID != null ?
                new ObjectParameter("User_ID", user_ID) :
                new ObjectParameter("User_ID", typeof(string));
    
            var user_NameParameter = user_Name != null ?
                new ObjectParameter("User_Name", user_Name) :
                new ObjectParameter("User_Name", typeof(string));
    
            var email_IDParameter = email_ID != null ?
                new ObjectParameter("Email_ID", email_ID) :
                new ObjectParameter("Email_ID", typeof(string));
    
            var mobile_NumberParameter = mobile_Number != null ?
                new ObjectParameter("Mobile_Number", mobile_Number) :
                new ObjectParameter("Mobile_Number", typeof(string));
    
            var user_typeParameter = user_type != null ?
                new ObjectParameter("User_type", user_type) :
                new ObjectParameter("User_type", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("Password", password) :
                new ObjectParameter("Password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("PROC_ISES_User_Registration", user_IDParameter, user_NameParameter, email_IDParameter, mobile_NumberParameter, user_typeParameter, passwordParameter, result);
        }
    
        public virtual int Proc_ResetPassword(string emailId, string password)
        {
            var emailIdParameter = emailId != null ?
                new ObjectParameter("EmailId", emailId) :
                new ObjectParameter("EmailId", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("password", password) :
                new ObjectParameter("password", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("Proc_ResetPassword", emailIdParameter, passwordParameter);
        }
    }
}