# Window: Active Session

**[Created:** 11/10/2012 - **Updated:** 18/10/2012 **]**  
**Description:** List of Current Logged in user  
**Help:**   
![](/img/docs/manual/ActiveSession-Window_iDempiere_v12.0.0.png)

### Tab: Sessions

**[Created:** 11/10/2012 - **Updated:** 03/06/2020 **]**   
**Description:** Current Sessions  
**Help:**   
**Tab Level:** 0

Table 10: Sessions - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant Name |  | Tenant in which current session user logged in | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).ClientName<small> text <br/> String</small> | 
| Organization Name | Name of the Organization |  | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).OrgName<small> text <br/> String</small> | 
| Remote Addr | Remote Address | The Remote Address indicates an alternative or external address. | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).Remote_Addr<small> text <br/> String</small> | 
| Remote Host | Remote host Info |  | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).Remote_Host<small> text <br/> String</small> | 
| User Name |  | Login User Name | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).LoginName<small> text <br/> String</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).EMail<small> text <br/> String</small> | 
| LDAP User Name | User Name used for authorization via LDAP (directory) services | Optional LDAP system user name for the user. If not defined, the normal Name of the user is used. This allows to use the internal (LDAP) user id (e.g. jjanke) and the normal display name (e.g. Jorg Janke).  The LDAP User Name can also be used without LDAP enables (see system window).  This would allow to sign in as jjanke and use the display name of Jorg Janke. | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).LDAPUser<small> text <br/> String</small> | 
| Login Role |  | Role name of user logged in with | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).roleName<small> text <br/> String</small> | 
| Login date |  |  | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).LoginDate<small> timestamp without time zone <br/> Date+Time</small> | 
| Session | User Session Online or Web | Online or Web Session Information | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).AD_Session_ID<small> numeric(10) <br/> Search</small> | 
| Web Session | Web Session ID |  | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).WebSession<small> text <br/> String</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Updated | Date this record was updated | The Updated field indicates the date that this record was updated. | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).Updated<small> timestamp without time zone <br/> Date+Time</small> | 
| Server Name |  | Node instance name | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).ServerName<small> text <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_sessioninfo_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sessioninfo_v.html).Description<small> text <br/> String</small> | 


