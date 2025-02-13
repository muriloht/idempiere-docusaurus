# Process: Copy Tenant 

**[Created:** 13/03/2019 - **Updated:** 10/03/2022 **]**  
**Description:** Process to copy a tenant  
**Help:** This process can be used to copy a tenant from an external database to the current database, or to duplicate a template tenant within the current database.  
**Class:** [org.idempiere.process.MoveClient](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/idempiere/process/MoveClient.html)

![](/img/docs/manual/CopyTenant-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Copy Template Tenant |  |  | IsCopyClient<br/>Yes-No | 
| JDBC URL |  |  | JDBC_URL<br/>String | 
| User Name |  |  | UserName<br/>String | 
| Password | Password of any length (case sensitive) | The Password for this User.  Passwords are required to identify authorized users.  For iDempiere Users, you can change the password via the Process &quot;Reset Password&quot;. | Password<br/>String | 
| Tenant Name |  | Tenant in which current session user logged in | ClientName<br/>String | 
| Tenant Key | Key of the Tenant |  | ClientValue<br/>String | 
| Tables to Exclude | Comma separated list of tables to exclude |  | TablesToExclude<br/>String | 
| Tenants to Include | Comma separated list of tenant IDs to include |  | ClientsToInclude<br/>String | 
| Tenants to Exclude | Comma separated list of tenant IDs to exclude |  | ClientsToExclude<br/>String | 
| Only Validate Data | Validate the date and do not process |  | IsValidateOnly<br/>Yes-No | 
| Preserve IDs |  |  | IsPreserveIDs<br/>String | 
| Skip Some Validations |  |  | IsSkipSomeValidations<br/>Yes-No | 


