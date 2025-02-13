# Window: Export Format

**[Created:** 05/03/2008 - **Updated:** 01/12/2009 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ExportFormat-Window_iDempiere_v12.0.0.png)

### Tab: Export Format

**[Created:** 05/03/2008 - **Updated:** 05/03/2008 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Export Format - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).Value<small> character varying(40) <br/> String</small> | 
| Version | Version of the table definition | The Version indicates the version of this table definition. | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).Version<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).Help<small> character varying(2000) <br/> Text</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).AD_Table_ID<small> numeric(10) <br/> Search</small> | 
| Sql WHERE | Fully qualified SQL WHERE clause | The Where Clause indicates the SQL WHERE clause to use for record selection. The WHERE clause is added to the query. Fully qualified means &quot;tablename.columnname&quot;. | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).WhereClause<small> character varying(255) <br/> Text</small> | 
| Test Import Model | Test Import of XML files |  | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).TestImportModel<small> character(1) <br/> Button</small> | 
| Test Export Model | Test Export of XML files |  | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).TestExportModel<small> character(1) <br/> Button</small> | 
| Export Format |  |  | [exp_format](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_format.html).EXP_Format_ID<small> numeric(10) <br/> ID</small> | 


### Tab: Export Format Line

**[Created:** 05/03/2008 - **Updated:** 01/12/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Export Format Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Export Format |  |  | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).EXP_Format_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).Help<small> character varying(2000) <br/> Text</small> | 
| Position |  |  | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).Position<small> numeric(10) <br/> Integer</small> | 
| Mandatory | Data entry is required in this column | The field must have a value for the record to be saved to the database. | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).IsMandatory<small> character(1) <br/> Yes-No</small> | 
| Type | Type of Validation (SQL, Java Script, Java Language) | The Type indicates the type of validation that will occur.  This can be SQL, Java Script or Java Language. | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).Type<small> character(1) <br/> List</small> | 
| Column | Column in the table | Link to the database column of the table | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).AD_Column_ID<small> numeric(10) <br/> Search</small> | 
| Is Part Unique Index |  |  | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).IsPartUniqueIndex<small> character(1) <br/> Yes-No</small> | 
| Embedded Format |  |  | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).EXP_EmbeddedFormat_ID<small> numeric(10) <br/> Table</small> | 
| Date Format | Date format used in the input format | The date format is usually detected, but sometimes need to be defined. | [exp_formatline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_formatline.html).DateFormat<small> character varying(40) <br/> String</small> | 


