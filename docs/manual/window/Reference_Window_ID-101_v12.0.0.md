# Window: Reference

**[Created:** 21/05/1999 - **Updated:** 03/05/2006 **]**  
**Description:** Maintain System References  
**Help:** The Reference Window defines field/display types and validations. This window is for System Admin use only.  
![](/img/docs/manual/Reference-Window_iDempiere_v12.0.0.png)

### Tab: Reference

**[Created:** 21/05/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Reference header definitions  
**Help:** The Reference Tab defines the references that are used to validate data  
**Tab Level:** 0

Table 10: Reference - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Validation type | Different method of validating data | The Validation Type indicates the validation method to use.  These include list, table or data type validation. | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).ValidationType<small> character(1) <br/> List</small> | 
| System Element | System Element enables the central maintenance of column description and help. | The System Element allows for the central maintenance of help, descriptions and terminology for a database column. | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).AD_Element_ID<small> numeric(10) <br/> Search</small> | 
| Value Format | Format of the value; Can contain fixed format elements, Variables: &quot;_lLoOaAcCa09&quot;, or ~regex | Validation elements:~regex - Validates a regular expression (Space) any character_Space (fixed character)lany Letter a..Z NO spaceLany Letter a..Z NO space converted to upper caseoany Letter a..Z or spaceOany Letter a..Z or space converted to upper caseaany Letters &amp; Digits NO spaceAany Letters &amp; Digits NO space converted to upper casecany Letters &amp; Digits or spaceCany Letters &amp; Digits or space converted to upper case0Digits 0..9 NO space9Digits 0..9 or spaceExample of format &quot;(000)_000-0000&quot; | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).VFormat<small> character varying(40) <br/> String</small> | 
| Show Inactive | Show Inactive Records |  | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).ShowInactive<small> character varying(4) <br/> List</small> | 
| Order By Value | Order list using the value column instead of the name column | Order list using the value column instead of the name column | [ad_reference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference.html).IsOrderByValue<small> character(1) <br/> Yes-No</small> | 


### Tab: List Validation

**[Created:** 21/05/1999 - **Updated:** 16/11/2012 **]**   
**Description:** Reference List  
**Help:** The List Validation Tab defines lists to validate data  
**Tab Level:** 1

Table 20: List Validation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [ad_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list.html).AD_Reference_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ad_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list.html).Value<small> character varying(60) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [ad_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list.html).ValidFrom<small> timestamp without time zone <br/> Date</small> | 
| Valid to | Valid to including this date (last day) | The Valid To date indicates the last day of a date range | [ad_ref_list](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list.html).ValidTo<small> timestamp without time zone <br/> Date</small> | 


### Tab: List Translation

**[Created:** 09/08/1999 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 30: List Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Reference List | Reference List based on Table | The Reference List field indicates a list of reference values from a database tables.  Reference lists populate drop down list boxes in data entry screens | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).AD_Ref_List_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).Description<small> character varying(255) <br/> String</small> | 


### Tab: Table Validation

**[Created:** 21/05/1999 - **Updated:** 16/11/2012 **]**   
**Description:** Table validation  
**Help:** The Table Validation Tab defines tables to validate data  
**Tab Level:** 1

Table 40: Table Validation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).AD_Reference_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Key column | Unique identifier of a record | The Key Column indicates that this the unique identifier of a record on this table. | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).AD_Key<small> numeric(10) <br/> Table</small> | 
| Display column | Column that will display | The Display Column indicates the column that will display. | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).AD_Display<small> numeric(10) <br/> Table</small> | 
| Display Value | Displays Value column with the Display column | The Display Value checkbox indicates if the value column will display with the display column. | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).IsValueDisplayed<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Sql WHERE | Fully qualified SQL WHERE clause | The Where Clause indicates the SQL WHERE clause to use for record selection. The WHERE clause is added to the query. Fully qualified means &quot;tablename.columnname&quot;. | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).WhereClause<small> character varying(2000) <br/> Text</small> | 
| Sql ORDER BY | Fully qualified ORDER BY clause | The ORDER BY Clause indicates the SQL ORDER BY clause to use for record selection | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).OrderByClause<small> character varying(2000) <br/> Text</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_ref_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_table.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Used in Column

**[Created:** 27/10/2005 - **Updated:** 16/11/2012 **]**   
**Description:** Used in Column (Reference)  
**Help:**   
**Tab Level:** 1

Table 50: Used in Column - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| DB Column Name | Name of the column in the database | The Column Name indicates the name of a column on a table as defined in the database. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).ColumnName<small> character varying(63) <br/> String</small> | 
| System Element | System Element enables the central maintenance of column description and help. | The System Element allows for the central maintenance of help, descriptions and terminology for a database column. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Element_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Length | Length of the column in the database | The Length indicates the length of a column as defined in the database. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).FieldLength<small> numeric(10) <br/> Integer</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Reference_ID<small> numeric(10) <br/> Table</small> | 
| Reference Key | Required to specify, if data type is Table or List | The Reference Value indicates where the reference values are stored.  It must be specified if the data type is Table or List. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Reference_Value_ID<small> numeric(10) <br/> Table</small> | 
| Dynamic Validation | Dynamic Validation Rule | These rules define how an entry is determined to valid. You can use variables for dynamic (context sensitive) validation. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Val_Rule_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dynamic Validation (Lookup) | Override Dynamic Validation Rule for Lookup Window | For some situations the dynamic validation rule for a Lookup window should be different from user data entry window. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Val_Rule_Lookup_ID<small> numeric(10) <br/> Table</small> | 


### Tab: Reference Translation

**[Created:** 09/08/1999 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 60: Reference Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_reference_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_reference_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [ad_reference_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference_trl.html).AD_Reference_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_reference_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_reference_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_reference_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_reference_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_reference_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_reference_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reference_trl.html).Help<small> character varying(2000) <br/> Text</small> | 


