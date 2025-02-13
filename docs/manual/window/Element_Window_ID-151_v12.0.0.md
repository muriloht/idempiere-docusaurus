# Window: Element

**[Created:** 26/09/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain System Elements  
**Help:** The System Element Window is the Central Repository for Field Names Descriptions and Help/Comments  
![](/img/docs/manual/Element-Window_iDempiere_v12.0.0.png)

### Tab: Element

**[Created:** 26/09/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Element  
**Help:** The Element Tab defines each system level element.  
**Tab Level:** 0

Table 10: Element - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| DB Column Name | Name of the column in the database | The Column Name indicates the name of a column on a table as defined in the database. | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).ColumnName<small> character varying(63) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).Name<small> character varying(60) <br/> String</small> | 
| Print Text | The label text to be printed on a document or correspondence. | The Label to be printed indicates the name that will be printed on a document or correspondence. The max length is 2000 characters. | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).PrintName<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).Help<small> character varying(2000) <br/> Text</small> | 
| Placeholder |  |  | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).Placeholder<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).EntityType<small> character varying(40) <br/> Table</small> | 
| PO Name | Name on PO Screens |  | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).PO_Name<small> character varying(60) <br/> String</small> | 
| PO Print name | Print name on PO Screens/Reports |  | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).PO_PrintName<small> character varying(60) <br/> String</small> | 
| PO Description | Description in PO Screens |  | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).PO_Description<small> character varying(255) <br/> String</small> | 
| PO Help | Help for PO Screens |  | [ad_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element.html).PO_Help<small> character varying(2000) <br/> Text</small> | 


### Tab: Translation

**[Created:** 26/09/1999 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| System Element | System Element enables the central maintenance of column description and help. | The System Element allows for the central maintenance of help, descriptions and terminology for a database column. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).AD_Element_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Print Text | The label text to be printed on a document or correspondence. | The Label to be printed indicates the name that will be printed on a document or correspondence. The max length is 2000 characters. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).PrintName<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).Help<small> character varying(2000) <br/> Text</small> | 
| Placeholder |  |  | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).Placeholder<small> character varying(255) <br/> String</small> | 
| PO Name | Name on PO Screens |  | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).PO_Name<small> character varying(60) <br/> String</small> | 
| PO Print name | Print name on PO Screens/Reports |  | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).PO_PrintName<small> character varying(60) <br/> String</small> | 
| PO Description | Description in PO Screens |  | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).PO_Description<small> character varying(255) <br/> String</small> | 
| PO Help | Help for PO Screens |  | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).PO_Help<small> character varying(2000) <br/> String</small> | 


### Tab: Used in Column

**[Created:** 07/04/2001 - **Updated:** 02/01/2000 **]**   
**Description:** Used  in Column  
**Help:** The Used in Column Tab defines the table and column this element resides in.  
**Tab Level:** 1

Table 30: Used in Column - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Column_ID<small> numeric(10) <br/> ID</small> | 
| DB Column Name | Name of the column in the database | The Column Name indicates the name of a column on a table as defined in the database. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).ColumnName<small> character varying(63) <br/> String</small> | 


### Tab: Used in Process Parameter

**[Created:** 11/12/2009 - **Updated:** 11/12/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 40: Used in Process Parameter - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_process_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_para.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process Parameter |  |  | [ad_process_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_para.html).AD_Process_Para_ID<small> numeric(10) <br/> ID</small> | 
| DB Column Name | Name of the column in the database | The Column Name indicates the name of a column on a table as defined in the database. | [ad_process_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_para.html).ColumnName<small> character varying(63) <br/> String</small> | 


### Tab: Used in Info Column

**[Created:** 22/11/2013 - **Updated:** 22/11/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 50: Used in Info Column - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Column | Info Window Column | Column in the Info Window for display and/or selection.  If used for selection, the column cannot be a SQL expression. The SQL clause must be fully qualified based on the FROM clause in the Info Window definition | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).AD_InfoColumn_ID<small> numeric(10) <br/> ID</small> | 
| DB Column Name | Name of the column in the database | The Column Name indicates the name of a column on a table as defined in the database. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).ColumnName<small> character varying(63) <br/> String</small> | 


