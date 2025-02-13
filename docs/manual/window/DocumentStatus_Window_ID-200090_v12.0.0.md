# Window: Document Status

**[Created:** 11/04/2017 - **Updated:** 11/04/2017 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/DocumentStatus-Window_iDempiere_v12.0.0.png)

### Tab: Document Status Indicator

**[Created:** 11/04/2017 - **Updated:** 12/04/2017 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Document Status Indicator - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).Name<small> character varying(60) <br/> String</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Print Font for Name |  |  | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).Name_PrintFont_ID<small> numeric(10) <br/> Table</small> | 
| Print Color for Name |  |  | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).Name_PrintColor_ID<small> numeric(10) <br/> Table</small> | 
| Print Font for Number |  |  | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).Number_PrintFont_ID<small> numeric(10) <br/> Table</small> | 
| Print Color for Number |  |  | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).Number_PrintColor_ID<small> numeric(10) <br/> Table</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sql WHERE | Fully qualified SQL WHERE clause | The Where Clause indicates the SQL WHERE clause to use for record selection. The WHERE clause is added to the query. Fully qualified means &quot;tablename.columnname&quot;. | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).WhereClause<small> character varying(2000) <br/> Text</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Special Form | Special Form | The Special Form field identifies a unique Special Form in the system. | [pa_documentstatus](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus.html).AD_Form_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Document Status Access

**[Created:** 28/06/2021 - **Updated:** 28/06/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Document Status Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).AD_Org_ID<small> numeric(10) <br/> Search</small> | 
| Document Status |  |  | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).PA_DocumentStatus_ID<small> numeric(10) <br/> Table Direct</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Document Status Translation

**[Created:** 12/04/2017 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Document Status Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_documentstatus_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_documentstatus_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Status |  |  | [pa_documentstatus_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus_trl.html).PA_DocumentStatus_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [pa_documentstatus_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_documentstatus_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_documentstatus_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [pa_documentstatus_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_documentstatus_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatus_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 


