# Window: GL Category

**[Created:** 29/06/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain General Ledger Categories  
**Help:** The GL Category Window allows you to define categories to be used in journals.  These categories provide a method of optionally grouping and reporting on journals.  
![](/img/docs/manual/GLCategory-Window_iDempiere_v12.0.0.png)

### Tab: GL Category

**[Created:** 29/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define General Ledger Categories  
**Help:** The GL Category Tab defines optional identifiers for a document or journal.  Each Category may be used on a document, manual journal or import  
**Tab Level:** 0

Table 10: GL Category - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [gl_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [gl_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [gl_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category.html).Value<small> character varying(60) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [gl_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category.html).Name<small> character varying(60) <br/> String</small> | 
| Print Text | The label text to be printed on a document or correspondence. | The Label to be printed indicates the name that will be printed on a document or correspondence. The max length is 2000 characters. | [gl_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category.html).PrintName<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [gl_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [gl_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Document Base Type | Logical type of document | The Document Base Type identifies the base or starting point for a document.  Multiple document types may share a single document base type. | [gl_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category.html).DocBaseType<small> character(3) <br/> List</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [gl_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Category Type | Source of the Journal with this category | The Category Type indicates the source of the journal for this category.  Journals can be generated from a document, entered manually or imported. | [gl_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category.html).CategoryType<small> character(1) <br/> List</small> | 


### Tab: Translation

**[Created:** 21/03/2014 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [gl_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [gl_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| GL Category | General Ledger Category | The General Ledger Category is an optional, user defined method of grouping journal lines. | [gl_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category_trl.html).GL_Category_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [gl_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [gl_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [gl_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [gl_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Print Text | The label text to be printed on a document or correspondence. | The Label to be printed indicates the name that will be printed on a document or correspondence. The max length is 2000 characters. | [gl_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_category_trl.html).PrintName<small> character varying(60) <br/> String</small> | 


