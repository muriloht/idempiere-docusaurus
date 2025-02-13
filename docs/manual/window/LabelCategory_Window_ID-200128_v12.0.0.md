# Window: Label Category

**[Created:** 16/05/2022 - **Updated:** 16/05/2022 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/LabelCategory-Window_iDempiere_v12.0.0.png)

### Tab: Label Category

**[Created:** 16/05/2022 - **Updated:** 16/05/2022 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Label Category - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_labelcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_labelcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_labelcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_labelcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_labelcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Can Be Used in All Tables |  |  | [ad_labelcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory.html).IsCanBeUsedInAllTables<small> character(1) <br/> Yes-No</small> | 
| Label Style | Label CSS Style |  | [ad_labelcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory.html).AD_LabelStyle_ID<small> numeric(10) <br/> Table</small> | 


### Tab: Table Access

**[Created:** 16/05/2022 - **Updated:** 16/05/2022 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Table Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_labelcategorytable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategorytable.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_labelcategorytable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategorytable.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_labelcategorytable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategorytable.html).Description<small> character varying(255) <br/> String</small> | 
| Label Category | Category of a Label | Identifies the category which this label belongs to. | [ad_labelcategorytable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategorytable.html).AD_LabelCategory_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_labelcategorytable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategorytable.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_labelcategorytable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategorytable.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Translation

**[Created:** 16/05/2022 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_labelcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory_trl.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_labelcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Label Category | Category of a Label | Identifies the category which this label belongs to. | [ad_labelcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory_trl.html).AD_LabelCategory_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_labelcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_labelcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_labelcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_labelcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_labelcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelcategory_trl.html).Description<small> character varying(255) <br/> String</small> | 


