# Window: Form

**[Created:** 13/07/2000 - **Updated:** 02/01/2000 **]**  
**Description:** Special Forms  
**Help:** The Forms Window defines any window which is not automatically generated.  For System Admin use only.  
![](/img/docs/manual/Form-Window_iDempiere_v12.0.0.png)

### Tab: Form

**[Created:** 13/07/2000 - **Updated:** 02/01/2000 **]**   
**Description:** Special Form  
**Help:** The Forms Tab defines any window which is not automatically generated.  For System Admin use only.  
**Tab Level:** 0

Table 10: Form - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Beta Functionality | This functionality is considered Beta | Beta functionality is not fully tested or completed. | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).IsBetaFunctionality<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Data Access Level | Access Level required | Indicates the access level required for this record or process. | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).AccessLevel<small> character(1) <br/> List</small> | 
| Classname | Java Classname | The Classname identifies the Java classname used by this report or process. | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).Classname<small> character varying(60) <br/> String</small> | 
| Context Help |  |  | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).AD_CtxHelp_ID<small> numeric(10) <br/> Search</small> | 
| Image URL | URL of  image | URL of image; The image is not stored in the database, but retrieved at runtime. The image can be a gif, jpeg or png. | [ad_form](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form.html).ImageURL<small> character varying(120) <br/> String</small> | 


### Tab: Access

**[Created:** 04/09/2000 - **Updated:** 16/11/2012 **]**   
**Description:** Form Access  
**Help:** The Forms Access Tab defines the access rules for this form  
**Tab Level:** 1

Table 20: Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_form_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_access.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_form_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_access.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Special Form | Special Form | The Special Form field identifies a unique Special Form in the system. | [ad_form_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_access.html).AD_Form_ID<small> numeric(10) <br/> Table Direct</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_form_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_access.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_form_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_access.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Read Write | Field is read / write | The Read Write indicates that this field may be read and updated. | [ad_form_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_access.html).IsReadWrite<small> character(1) <br/> Yes-No</small> | 


### Tab: Translation

**[Created:** 13/07/2000 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Special Form | Special Form | The Special Form field identifies a unique Special Form in the system. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).AD_Form_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).Help<small> character varying(2000) <br/> Text</small> | 


