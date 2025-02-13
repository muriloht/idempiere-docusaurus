# Window: Field Suggestions

**[Created:** 29/06/2016 - **Updated:** 29/06/2016 **]**  
**Description:** Suggestions for field name, description and help.  
**Help:**   
![](/img/docs/manual/FieldSuggestions-Window_iDempiere_v12.0.0.png)

### Tab: Suggestions

**[Created:** 29/06/2016 - **Updated:** 29/06/2016 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Suggestions - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Tenant of User |  |  | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).AD_UserClient_ID<small> numeric(10) <br/> Table</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Field | Field on a database table | The Field identifies a field on a database table. | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).AD_Field_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).Help<small> character varying(2000) <br/> Text</small> | 
| Approved | Indicates if this document requires approval | The Approved checkbox indicates if this document requires approval before it can be processed. | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).IsApproved<small> character(1) <br/> Yes-No</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Compare Field Suggestion |  |  | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).CompareSuggestion<small> character(1) <br/> Button</small> | 
| Reject Field Suggestion | Reject suggested name, description and help changes |  | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).RejectSuggestion<small> character(1) <br/> Button</small> | 
| Accept Field Suggestion | Accept suggested changes for field |  | [ad_fieldsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldsuggestion.html).AcceptSuggestion<small> character(1) <br/> Button</small> | 


