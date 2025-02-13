# Window: Model Validator

**[Created:** 22/10/2007 - **Updated:** 22/10/2007 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ModelValidator-Window_iDempiere_v12.0.0.png)

### Tab: Model Validator

**[Created:** 22/10/2007 - **Updated:** 22/10/2007 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Model Validator - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_modelvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelvalidator.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_modelvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelvalidator.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_modelvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelvalidator.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_modelvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelvalidator.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_modelvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelvalidator.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_modelvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelvalidator.html).Help<small> character varying(2000) <br/> String</small> | 
| Model Validation Class |  |  | [ad_modelvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelvalidator.html).ModelValidationClass<small> character varying(255) <br/> String</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_modelvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelvalidator.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_modelvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_modelvalidator.html).IsActive<small> character(1) <br/> Yes-No</small> | 


