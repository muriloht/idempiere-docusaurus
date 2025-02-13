# Window: Field Group

**[Created:** 11/01/2001 - **Updated:** 02/01/2000 **]**  
**Description:** Define Field Group  
**Help:** The Field Group Window allows you to define subsections in a tab.  For System Admin use only.  
![](/img/docs/manual/FieldGroup-Window_iDempiere_v12.0.0.png)

### Tab: Field group

**[Created:** 11/01/2001 - **Updated:** 02/01/2000 **]**   
**Description:** System Admin use only.  Field Groups allow for grouping of fields within a window  
**Help:**   
**Tab Level:** 0

Table 10: Field group - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_fieldgroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_fieldgroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_fieldgroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_fieldgroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Field Group Type |  |  | [ad_fieldgroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup.html).FieldGroupType<small> character varying(10) <br/> Radio Group List</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_fieldgroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Collapsed By Default | Flag to set the initial state of collapsible field group. |  | [ad_fieldgroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup.html).IsCollapsedByDefault<small> character(1) <br/> Yes-No</small> | 


### Tab: Translation

**[Created:** 11/01/2001 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Field Group | Logical grouping of fields | The Field Group indicates the logical group that this field belongs to (History, Amounts, Quantities) | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).AD_FieldGroup_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).Name<small> character varying(60) <br/> String</small> | 


### Tab: Used in Field

**[Created:** 10/03/2013 - **Updated:** 10/03/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Used in Field - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tab | Tab within a Window | The Tab indicates a tab that displays within a window. | [ad_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field.html).AD_Tab_ID<small> numeric(10) <br/> Table Direct</small> | 
| Field | Field on a database table | The Field identifies a field on a database table. | [ad_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field.html).AD_Field_ID<small> numeric(10) <br/> ID</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field.html).Name<small> character varying(60) <br/> String</small> | 


