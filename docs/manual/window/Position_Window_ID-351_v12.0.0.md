# Window: Position

**[Created:** 15/05/2005 - **Updated:** 13/11/2005 **]**  
**Description:** Maintain Job Positions  
**Help:** Maintain internal (employee) or external positions  
![](/img/docs/manual/Position-Window_iDempiere_v12.0.0.png)

### Tab: Position

**[Created:** 15/05/2005 - **Updated:** 16/09/2005 **]**   
**Description:** Maintain Job Position  
**Help:** Maintain internal (employee) or external positions  
**Tab Level:** 0

Table 10: Position - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_job](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_job.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_job](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_job.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_job](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_job.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_job](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_job.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_job](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_job.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_job](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_job.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Employee | Indicates if  this Business Partner is an employee | The Employee checkbox indicates if this Business Partner is an Employee.  If it is selected, additional fields will display which further identify this employee. | [c_job](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_job.html).IsEmployee<small> character(1) <br/> Yes-No</small> | 
| Position Category | Job Position Category | Classification of Job Positions | [c_job](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_job.html).C_JobCategory_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Assignment

**[Created:** 15/05/2005 - **Updated:** 15/05/2005 **]**   
**Description:** Employee Assignment  
**Help:**   
**Tab Level:** 1

Table 20: Assignment - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_jobassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobassignment.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_jobassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobassignment.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Position | Job Position |  | [c_jobassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobassignment.html).C_Job_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [c_jobassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobassignment.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_jobassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobassignment.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [c_jobassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobassignment.html).ValidFrom<small> timestamp without time zone <br/> Date+Time</small> | 
| Valid to | Valid to including this date (last day) | The Valid To date indicates the last day of a date range | [c_jobassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobassignment.html).ValidTo<small> timestamp without time zone <br/> Date+Time</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_jobassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobassignment.html).Description<small> character varying(255) <br/> String</small> | 


### Tab: Remuneration

**[Created:** 15/05/2005 - **Updated:** 15/05/2005 **]**   
**Description:** Position Remuneration  
**Help:**   
**Tab Level:** 1

Table 30: Remuneration - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Position | Job Position |  | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).C_Job_ID<small> numeric(10) <br/> Table Direct</small> | 
| Remuneration | Wage or Salary |  | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).C_Remuneration_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).ValidFrom<small> timestamp without time zone <br/> Date+Time</small> | 
| Valid to | Valid to including this date (last day) | The Valid To date indicates the last day of a date range | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).ValidTo<small> timestamp without time zone <br/> Date+Time</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).Description<small> character varying(255) <br/> String</small> | 


