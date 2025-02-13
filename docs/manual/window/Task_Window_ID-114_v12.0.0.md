# Window: Task

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Tasks  
**Help:** The Maintain Tasks window defines the different tasks used in workflows and the access level for those tasks.  
![](/img/docs/manual/Task-Window_iDempiere_v12.0.0.png)

### Tab: Task

**[Created:** 21/06/1999 - **Updated:** 06/08/2013 **]**   
**Description:** Task  
**Help:** The Task Tab defines the unique tasks that will be used.  
**Tab Level:** 0

Table 10: Task - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Data Access Level | Access Level required | Indicates the access level required for this record or process. | [ad_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task.html).AccessLevel<small> character(1) <br/> List</small> | 
| OS Command | Operating System Command | The OS Command is for optionally defining a command to that will be part of this task.  For example it can be used to starting a back up process or performing a file transfer. | [ad_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task.html).OS_Command<small> character varying(2000) <br/> String</small> | 
| Context Help |  |  | [ad_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task.html).AD_CtxHelp_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Task Translation

**[Created:** 11/06/1999 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Task Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| OS Task | Operation System Task | The Task field identifies a Operation System Task in the system. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).AD_Task_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).Help<small> character varying(2000) <br/> Text</small> | 


### Tab: Access

**[Created:** 04/09/2000 - **Updated:** 06/08/2013 **]**   
**Description:** Task Access  
**Help:** The Task Access Tab defines the Roles that will have access to this task and the type of access each Role is granted.  
**Tab Level:** 1

Table 30: Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_task_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_access.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_task_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_access.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| OS Task | Operation System Task | The Task field identifies a Operation System Task in the system. | [ad_task_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_access.html).AD_Task_ID<small> numeric(10) <br/> Table Direct</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_task_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_access.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_task_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_access.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Read Write | Field is read / write | The Read Write indicates that this field may be read and updated. | [ad_task_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_access.html).IsReadWrite<small> character(1) <br/> Yes-No</small> | 


