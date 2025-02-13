# Window: Remuneration

**[Created:** 15/05/2005 - **Updated:** 16/12/2017 **]**  
**Description:** Maintain Remuneration  
**Help:** Wages and Salaries  
![](/img/docs/manual/Remuneration-Window_iDempiere_v12.0.0.png)

### Tab: Remuneration

**[Created:** 15/05/2005 - **Updated:** 15/05/2005 **]**   
**Description:** Maintain Remuneration Levels  
**Help:**   
**Tab Level:** 0

Table 10: Remuneration - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Remuneration Type | Type of Remuneration |  | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).RemunerationType<small> character(1) <br/> List</small> | 
| Gross Amount | Gross Remuneration Amount | Gross Salary or Wage Amount (without Overtime, Benefits and Employer overhead) | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).GrossRAmt<small> numeric <br/> Amount</small> | 
| Gross Cost | Gross Remuneration Costs | Gross Salary or Wage Costs (without Overtime, with Benefits and Employer overhead) | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).GrossRCost<small> numeric <br/> Costs+Prices</small> | 
| Standard Hours | Standard Work Hours based on Remuneration Type | Number of hours per Remuneration Type (e.g. Daily 8 hours, Weekly 40 hours, etc.) to determine when overtime starts | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).StandardHours<small> numeric(10) <br/> Integer</small> | 
| Overtime Amount | Hourly Overtime Rate | Hourly Amount without Benefits and Employer overhead | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).OvertimeAmt<small> numeric <br/> Amount</small> | 
| Overtime Cost | Hourly Overtime Cost | Hourly Amount with Benefits and Employer overhead | [c_remuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_remuneration.html).OvertimeCost<small> numeric <br/> Costs+Prices</small> | 


### Tab: Position Remuneration

**[Created:** 15/05/2005 - **Updated:** 15/05/2005 **]**   
**Description:** Maintain Position Remuneration  
**Help:**   
**Tab Level:** 1

Table 20: Position Remuneration - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Remuneration | Wage or Salary |  | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).C_Remuneration_ID<small> numeric(10) <br/> Table Direct</small> | 
| Position | Job Position |  | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).C_Job_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).ValidFrom<small> timestamp without time zone <br/> Date+Time</small> | 
| Valid to | Valid to including this date (last day) | The Valid To date indicates the last day of a date range | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).ValidTo<small> timestamp without time zone <br/> Date+Time</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_jobremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobremuneration.html).Description<small> character varying(255) <br/> String</small> | 


### Tab: Employee Remuneration

**[Created:** 15/05/2005 - **Updated:** 15/05/2005 **]**   
**Description:** Overwrite of Employee Position Remuneration  
**Help:**   
**Tab Level:** 1

Table 30: Employee Remuneration - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Remuneration | Wage or Salary |  | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).C_Remuneration_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Gross Amount | Gross Remuneration Amount | Gross Salary or Wage Amount (without Overtime, Benefits and Employer overhead) | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).GrossRAmt<small> numeric <br/> Amount</small> | 
| Gross Cost | Gross Remuneration Costs | Gross Salary or Wage Costs (without Overtime, with Benefits and Employer overhead) | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).GrossRCost<small> numeric <br/> Costs+Prices</small> | 
| Overtime Amount | Hourly Overtime Rate | Hourly Amount without Benefits and Employer overhead | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).OvertimeAmt<small> numeric <br/> Amount</small> | 
| Overtime Cost | Hourly Overtime Cost | Hourly Amount with Benefits and Employer overhead | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).OvertimeCost<small> numeric <br/> Costs+Prices</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).ValidFrom<small> timestamp without time zone <br/> Date+Time</small> | 
| Valid to | Valid to including this date (last day) | The Valid To date indicates the last day of a date range | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).ValidTo<small> timestamp without time zone <br/> Date+Time</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_userremuneration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_userremuneration.html).Description<small> character varying(255) <br/> String</small> | 


