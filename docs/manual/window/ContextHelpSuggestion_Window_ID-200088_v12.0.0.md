# Window: Context Help Suggestion

**[Created:** 05/07/2016 - **Updated:** 05/07/2016 **]**  
**Description:** Review context help suggestion from tenant  
**Help:**   
![](/img/docs/manual/ContextHelpSuggestion-Window_iDempiere_v12.0.0.png)

### Tab: Suggestion

**[Created:** 05/07/2016 - **Updated:** 12/05/2022 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Suggestion - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Context Help |  |  | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).AD_CtxHelp_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Tenant of User |  |  | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).AD_UserClient_ID<small> numeric(10) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Message Text | Textual Informational, Menu or Error Message | The Message Text indicates the message that will display | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).MsgText<small> character varying(2000) <br/> Text</small> | 
| Approved | Indicates if this document requires approval | The Approved checkbox indicates if this document requires approval before it can be processed. | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).IsApproved<small> character(1) <br/> Yes-No</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Save As Tenant Customization | Apply changes as tenant customization | Changes is keep as tenant specific customization and wouldn&#x27;t effect other tenants in the system | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).IsSaveAsTenantCustomization<small> character(1) <br/> Yes-No</small> | 
| Compare Context Help Suggestion |  |  | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).CompareSuggestion<small> character(1) <br/> Button</small> | 
| Reject Context Help Suggestion | Reject suggested changes for context help |  | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).RejectSuggestion<small> character(1) <br/> Button</small> | 
| Accept Context Help Suggestion | Accept suggested changes for context help |  | [ad_ctxhelpsuggestion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpsuggestion.html).AcceptSuggestion<small> character(1) <br/> Button</small> | 


