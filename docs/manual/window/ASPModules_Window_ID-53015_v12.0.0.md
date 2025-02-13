# Window: ASP Modules

**[Created:** 09/01/2008 - **Updated:** 19/09/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ASPModules-Window_iDempiere_v12.0.0.png)

### Tab: Module

**[Created:** 09/01/2008 - **Updated:** 09/01/2008 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Module - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_module](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_module.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_module](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_module.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [asp_module](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_module.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [asp_module](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_module.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [asp_module](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_module.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [asp_module](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_module.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_module](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_module.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Level

**[Created:** 09/01/2008 - **Updated:** 16/01/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Level - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_level](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_level.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_level](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_level.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Module |  |  | [asp_level](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_level.html).ASP_Module_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [asp_level](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_level.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [asp_level](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_level.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [asp_level](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_level.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [asp_level](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_level.html).Help<small> character varying(2000) <br/> Text</small> | 
| ASP Generate Level |  |  | [asp_level](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_level.html).Processing<small> character(1) <br/> Button</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_level](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_level.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Window

**[Created:** 09/01/2008 - **Updated:** 16/01/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 40: Window - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_window](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_window.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_window](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_window.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Level |  |  | [asp_window](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_window.html).ASP_Level_ID<small> numeric(10) <br/> Table Direct</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [asp_window](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_window.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Status |  |  | [asp_window](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_window.html).ASP_Status<small> character(1) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_window](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_window.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Tab

**[Created:** 09/01/2008 - **Updated:** 16/01/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 3

Table 50: Tab - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_tab](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_tab.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_tab](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_tab.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Window |  |  | [asp_tab](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_tab.html).ASP_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Tab | Tab within a Window | The Tab indicates a tab that displays within a window. | [asp_tab](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_tab.html).AD_Tab_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Status |  |  | [asp_tab](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_tab.html).ASP_Status<small> character(1) <br/> List</small> | 
| All Fields |  |  | [asp_tab](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_tab.html).AllFields<small> character(1) <br/> Yes-No</small> | 
| ASP Generate Fields |  |  | [asp_tab](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_tab.html).Processing<small> character(1) <br/> Button</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_tab](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_tab.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Field

**[Created:** 09/01/2008 - **Updated:** 16/08/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 4

Table 60: Field - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_field.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_field.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Tab |  |  | [asp_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_field.html).ASP_Tab_ID<small> numeric(10) <br/> Table Direct</small> | 
| Field | Field on a database table | The Field identifies a field on a database table. | [asp_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_field.html).AD_Field_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Status |  |  | [asp_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_field.html).ASP_Status<small> character(1) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_field.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Process

**[Created:** 09/01/2008 - **Updated:** 16/01/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 70: Process - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_process](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_process](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Level |  |  | [asp_process](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process.html).ASP_Level_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [asp_process](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Status |  |  | [asp_process](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process.html).ASP_Status<small> character(1) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_process](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Process Parameter

**[Created:** 09/01/2008 - **Updated:** 16/01/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 3

Table 80: Process Parameter - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_process_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process_para.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_process_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process_para.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Process |  |  | [asp_process_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process_para.html).ASP_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process Parameter |  |  | [asp_process_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process_para.html).AD_Process_Para_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Status |  |  | [asp_process_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process_para.html).ASP_Status<small> character(1) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_process_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_process_para.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Form

**[Created:** 09/01/2008 - **Updated:** 16/01/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 90: Form - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_form.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_form.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Level |  |  | [asp_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_form.html).ASP_Level_ID<small> numeric(10) <br/> Table Direct</small> | 
| Special Form | Special Form | The Special Form field identifies a unique Special Form in the system. | [asp_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_form.html).AD_Form_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Status |  |  | [asp_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_form.html).ASP_Status<small> character(1) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_form.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Task

**[Created:** 09/01/2008 - **Updated:** 16/01/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 100: Task - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_task.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_task.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Level |  |  | [asp_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_task.html).ASP_Level_ID<small> numeric(10) <br/> Table Direct</small> | 
| OS Task | Operation System Task | The Task field identifies a Operation System Task in the system. | [asp_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_task.html).AD_Task_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Status |  |  | [asp_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_task.html).ASP_Status<small> character(1) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_task.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Workflow

**[Created:** 09/01/2008 - **Updated:** 16/01/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 110: Workflow - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_workflow.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_workflow.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Level |  |  | [asp_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_workflow.html).ASP_Level_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow | Workflow or combination of tasks | The Workflow field identifies a unique Workflow in the system. | [asp_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_workflow.html).AD_Workflow_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Status |  |  | [asp_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_workflow.html).ASP_Status<small> character(1) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_workflow.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Ref List

**[Created:** 14/08/2012 - **Updated:** 14/08/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 120: Ref List - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [asp_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_ref_list.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [asp_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_ref_list.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Level |  |  | [asp_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_ref_list.html).ASP_Level_ID<small> numeric(10) <br/> Table Direct</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [asp_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_ref_list.html).AD_Reference_ID<small> numeric(10) <br/> Table Direct</small> | 
| Reference List | Reference List based on Table | The Reference List field indicates a list of reference values from a database tables.  Reference lists populate drop down list boxes in data entry screens | [asp_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_ref_list.html).AD_Ref_List_ID<small> numeric(10) <br/> Table Direct</small> | 
| ASP Status |  |  | [asp_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_ref_list.html).ASP_Status<small> character(1) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [asp_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/asp_ref_list.html).IsActive<small> character(1) <br/> Yes-No</small> | 


