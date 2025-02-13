# Window: Search Definition

**[Created:** 18/02/2009 - **Updated:** 18/02/2009 **]**  
**Description:** Define transactioncodes for the QuickSearch bar  
**Help:**   
![](/img/docs/manual/SearchDefinition-Window_iDempiere_v12.0.0.png)

### Tab: Searches

**[Created:** 18/02/2009 - **Updated:** 18/02/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Searches - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Transaction Code | The transaction code represents the search definition |  | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).TransactionCode<small> character varying(8) <br/> String</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Search Type | Which kind of search is used (Query or Table) |  | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).SearchType<small> character varying(1) <br/> String</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).AD_Table_ID<small> numeric(10) <br/> Table</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).AD_Column_ID<small> numeric(10) <br/> Table</small> | 
| Query | SQL |  | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).Query<small> character varying(2000) <br/> Text</small> | 
| Data Type | Type of data |  | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).DataType<small> character varying(1) <br/> String</small> | 
| Message | System Message | Information and Error messages | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).AD_Message_ID<small> numeric(10) <br/> Search</small> | 
| Style | CSS style for field and label |  | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).AD_Style_ID<small> numeric(10) <br/> Table Direct</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).AD_Window_ID<small> numeric(10) <br/> Table</small> | 
| PO Window | Purchase Order Window | Window for Purchase Order (AP) Zooms | [ad_searchdefinition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_searchdefinition.html).PO_Window_ID<small> numeric(10) <br/> Table</small> | 


