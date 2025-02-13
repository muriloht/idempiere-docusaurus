# Window: ASP Subscribed Modules

**[Created:** 09/01/2008 - **Updated:** 19/09/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ASPSubscribedModules-Window_iDempiere_v12.0.0.png)

### Tab: Tenant Level

**[Created:** 09/01/2008 - **Updated:** 10/03/2022 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Tenant Level - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_clientlevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientlevel.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_clientlevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientlevel.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Module |  |  | [asp_clientlevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientlevel.html).ASP_Module_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Level |  |  | [asp_clientlevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientlevel.html).ASP_Level_ID<small> numeric(10) <br/> Table Direct</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [asp_clientlevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientlevel.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_clientlevel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientlevel.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Exceptions

**[Created:** 09/01/2008 - **Updated:** 06/08/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 20: Exceptions - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).AD_Window_ID<small> numeric(10) <br/> Search</small> | 
| Tab | Tab within a Window | The Tab indicates a tab that displays within a window. | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).AD_Tab_ID<small> numeric(10) <br/> Search</small> | 
| Field | Field on a database table | The Field identifies a field on a database table. | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).AD_Field_ID<small> numeric(10) <br/> Search</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process Parameter |  |  | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).AD_Process_Para_ID<small> numeric(10) <br/> Search</small> | 
| Special Form | Special Form | The Special Form field identifies a unique Special Form in the system. | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).AD_Form_ID<small> numeric(10) <br/> Table Direct</small> | 
| OS Task | Operation System Task | The Task field identifies a Operation System Task in the system. | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).AD_Task_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow | Workflow or combination of tasks | The Workflow field identifies a unique Workflow in the system. | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).AD_Workflow_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Status |  |  | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).ASP_Status<small> character(1) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_clientexception](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_clientexception.html).IsActive<small> character(1) <br/> Yes-No</small> | 


