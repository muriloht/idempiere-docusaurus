# Window: System

**[Created:** 01/11/2002 - **Updated:** 02/01/2000 **]**  
**Description:** System Definition  
**Help:** Common System Definition - Only one Record - Do not add additional records.  
![](/img/docs/manual/System-Window_iDempiere_v12.0.0.png)

### Tab: System

**[Created:** 01/11/2002 - **Updated:** 18/10/2005 **]**   
**Description:** System Definition  
**Help:** Common System Definition.  
**Tab Level:** 0

Table 10: System - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| System Name | Name your iDempiere System installation, e.g. Joe Block, Inc. | The name if the system to differentiate support contracts | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).Name<small> character varying(60) <br/> String</small> | 
| System Status | Status of the system - Support priority depends on system status | System status helps to prioritize support resources | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).SystemStatus<small> character(1) <br/> List</small> | 
| User Name |  |  | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).UserName<small> character varying(60) <br/> String</small> | 
| Password | Password of any length (case sensitive) | The Password for this User.  Passwords are required to identify authorized users.  For iDempiere Users, you can change the password via the Process &quot;Reset Password&quot;. | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).Password<small> character varying(20) <br/> String</small> | 
| Support EMail | EMail address to send support information and updates to | If not entered the registered email is used. | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).SupportEMail<small> character varying(60) <br/> String</small> | 
| Custom Prefix | Prefix for Custom entities | The prefix listed are ignored as customization for database or entity migration | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).CustomPrefix<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).Description<small> character varying(255) <br/> String</small> | 
| Release No | Internal Release Number |  | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).ReleaseNo<small> character varying(10) <br/> String</small> | 
| Version | Version of the table definition | The Version indicates the version of this table definition. | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).Version<small> character varying(20) <br/> String</small> | 
| Database Name | Database Name |  | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).DBInstance<small> character varying(60) <br/> String</small> | 
| DB Address | JDBC URL of the database server |  | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).DBAddress<small> character varying(255) <br/> String</small> | 
| Internal Users | Number of Internal Users for iDempiere Support | You can purchase professioal support from iDempiere, Inc. or their partners.  See http://www.idempiere.org for details. | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).SupportUnits<small> numeric(10) <br/> Integer</small> | 
| Processors | Number of Database Processors |  | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).NoProcessors<small> numeric(10) <br/> Integer</small> | 
| Replication Type | Type of Data Replication | The Type of data Replication determines the direction of the data replication.  Reference means that the data in this system is read only -&gt; Local means that the data in this system is not replicated to other systems - Merge means that the data in this system is synchronized with the other system | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).ReplicationType<small> character(1) <br/> List</small> | 
| ID Range Start | Start of the ID Range used | The ID Range allows to restrict the range of the internally used IDs. The standard rages are 0-899,999 for the Application Dictionary 900,000-999,999 for Application Dictionary customizations/extensions and &gt; 1,000,000 for tenant data. The standard system limit is 9,999,999,999 but can easily be extended.  The ID range is on a per table basis.Please note that the ID range is NOT enforced. | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).IDRangeStart<small> numeric <br/> Number</small> | 
| ID Range End | End if the ID Range used | The ID Range allows to restrict the range of the internally used IDs. Please note that the ID range is NOT enforced. | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).IDRangeEnd<small> numeric <br/> Number</small> | 
| LDAP URL | Connection String to LDAP server starting with ldap:// | LDAP connection string, e.g. ldap://dc.idempiere.org | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).LDAPHost<small> character varying(60) <br/> String</small> | 
| LDAP Domain | Directory service domain name - e.g. idempiere.org | If LDAP Host and Domain is specified, the user is authenticated via LDAP. The password in the User table is not used for connecting to iDempiere. | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).LDAPDomain<small> character varying(255) <br/> String</small> | 
| Maintain Statistics | Maintain general statistics | Maintain and allow to transfer general statistics (number of tenants, orgs, business partners, users, products, invoices) to get a better feeling for the application use.  This information is not published. | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).IsAllowStatistics<small> character(1) <br/> Yes-No</small> | 
| Statistics | Information to help profiling the system for solving support issues | Profile information do not contain sensitive information and are used to support issue detection and diagnostics as well as general anonymous statistics | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).StatisticsInfo<small> character varying(60) <br/> String</small> | 
| Error Reporting | Automatically report Errors | To automate error reporting, submit errors to iDempiere. Only error (stack trace) information is submitted (no data or confidential information).  It helps us to react faster and proactively.  If you have a support contract, we will you inform about corrective measures.  This functionality is experimental at this point. | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).IsAutoErrorReport<small> character(1) <br/> Yes-No</small> | 
| Profile | Information to help profiling the system for solving support issues | Profile information do not contain sensitive information and are used to support issue detection and diagnostics | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).ProfileInfo<small> character varying(4000) <br/> String</small> | 
| Encryption Class | Encryption Class used for securing data content | The class needs to implement the interface org.compiere.util.SecureInterface.You enable it by setting the COMPIERE_SECURE parameter of your Tenant and Server start scripts to the custom class. | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).EncryptionKey<small> character varying(255) <br/> String</small> | 
| Fail on Missing Model Validator |  |  | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).IsFailOnMissingModelValidator<small> character(1) <br/> Yes-No</small> | 
| Last Build Info |  |  | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).LastBuildInfo<small> character varying(255) <br/> String</small> | 
| Fail if Build Differ |  |  | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).IsFailOnBuildDiffer<small> character(1) <br/> Yes-No</small> | 
| Support Expires | Date when the iDempiere support expires | Check http://www.idempiere.org for support options | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).SupportExpDate<small> timestamp without time zone <br/> Date</small> | 
| Validate Support | Validate Support Contract | The process connects to the iDempiere Support Services server and validates the support contract.  To sign up for support, please go to http://www.idempiere.org | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).Processing<small> character(1) <br/> Button</small> | 
| Last Migration Script Applied | Register of the filename for the last migration script applied on this database |  | [ad_system](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_system.html).LastMigrationScriptApplied<small> character varying(255) <br/> String</small> | 


