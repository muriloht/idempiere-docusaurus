# Window: Validation Rules

**[Created:** 21/05/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain dynamic Validation Rules for columns and fields  
**Help:** The Validation Rules Window defines all dynamic rules used when entering and maintaining columns and fields.  This window is for System Admin use only.  
![](/img/docs/manual/ValidationRules-Window_iDempiere_v12.0.0.png)

### Tab: Validation

**[Created:** 21/05/1999 - **Updated:** 24/08/2022 **]**   
**Description:** Validation Rules  
**Help:** The Validation Rules Tab defines all dynamic rules used when entering and maintaining columns and fields.  
**Tab Level:** 0

Table 10: Validation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_val_rule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_val_rule.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_val_rule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_val_rule.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_val_rule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_val_rule.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_val_rule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_val_rule.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_val_rule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_val_rule.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_val_rule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_val_rule.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Type | Type of Validation (SQL, Java Script, Java Language) | The Type indicates the type of validation that will occur.  This can be SQL, Java Script or Java Language. | [ad_val_rule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_val_rule.html).Type<small> character(1) <br/> List</small> | 
| Validation code | Validation Code | The Validation Code displays the date, time and message of the error. | [ad_val_rule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_val_rule.html).Code<small> character varying(4000) <br/> String</small> | 


### Tab: Used in Column

**[Created:** 27/10/2005 - **Updated:** 27/10/2005 **]**   
**Description:** Used in Column  
**Help:**   
**Tab Level:** 1

Table 20: Used in Column - Fields 

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


### Tab: Used in Column (Lookup)

**[Created:** 22/06/2019 - **Updated:** 24/02/2022 **]**   
**Description:** Used in Column (Lookup)  
**Help:**   
**Tab Level:** 1

Table 30: Used in Column (Lookup) - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Column_ID<small> numeric(10) <br/> ID</small> | 
| DB Column Name | Name of the column in the database | The Column Name indicates the name of a column on a table as defined in the database. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).ColumnName<small> character varying(63) <br/> String</small> | 


