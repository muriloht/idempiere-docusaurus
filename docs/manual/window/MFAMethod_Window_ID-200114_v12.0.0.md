# Window: MFA Method

**[Created:** 30/05/2021 - **Updated:** 30/05/2021 **]**  
**Description:** Multi-factor Authentication Method  
**Help:**   
![](/img/docs/manual/MFAMethod-Window_iDempiere_v12.0.0.png)

### Tab: MFA Method

**[Created:** 30/05/2021 - **Updated:** 30/05/2021 **]**   
**Description:** Multi-factor Authentication Method  
**Help:**   
**Tab Level:** 0

Table 10: MFA Method - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).Help<small> character varying(2000) <br/> Text</small> | 
| Method |  |  | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).Method<small> character varying(60) <br/> List</small> | 
| MFA Type | Multi-factor authentication type (Something you Know/Have/Are, Location) |  | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).MFAType<small> character(1) <br/> List</small> | 
| Parameter Element |  |  | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).MFA_ElementPrm_ID<small> numeric(10) <br/> Search</small> | 
| Expire in Minutes |  |  | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).ExpireInMinutes<small> numeric(10) <br/> Integer</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Mail Template | Text templates for mailings | The Mail Template indicates the mail template for return messages. Mail text can include variables.  The priority of parsing is User/Contact, Business Partner and then the underlying business object (like Request, Dunning, Workflow object).So, @Name@ would resolve into the User name (if user is defined defined), then Business Partner name (if business partner is defined) and then the Name of the business object if it has a Name.For Multi-Lingual systems, the template is translated based on the Business Partner&#x27;s language selection. | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).R_MailText_ID<small> numeric(10) <br/> Table Direct</small> | 
| Issuer |  |  | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).MFAIssuer<small> character varying(2000) <br/> String</small> | 
| Allowed Time Period Discrepancy |  |  | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).MFAAllowedTimeDiscrepancy<small> numeric(10) <br/> Integer</small> | 
| Time Provider |  |  | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).MFATimeProvider<small> character(1) <br/> List</small> | 
| Time Server |  |  | [mfa_method](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_method.html).MFATimeServer<small> character varying(255) <br/> String</small> | 


