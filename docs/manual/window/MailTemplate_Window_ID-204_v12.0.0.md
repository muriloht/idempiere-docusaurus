# Window: Mail Template

**[Created:** 11/01/2001 - **Updated:** 13/11/2005 **]**  
**Description:** Maintain Mail Template  
**Help:** Mail templates can contain variables of the user, business partner or a general object.  The priority of parsing is User/Contact, Business Partner and then the underlying business object (like Request, Dunning, Workflow object).So, @Name@ would resolve into the User name (if user is defined defined), then Business Partner name (if business partner is defined) and then the Name of the business object if it has a Name.For Multi-Lingual systems, the template is translated based on the Business Partner&#x27;s language selection.  
![](/img/docs/manual/MailTemplate-Window_iDempiere_v12.0.0.png)

### Tab: Mail Template

**[Created:** 11/01/2001 - **Updated:** 07/07/2005 **]**   
**Description:** Maintain Mail Template  
**Help:** A mail template can contain variables, e.g. @Name@.  The variables are replaced based on the context. First, the the User is searched to find the variables.Additional objects are used for dunning (business partner, dunning entry), asset delivery (asset) and invoice print (business partner, invoice)  
**Tab Level:** 0

Table 10: Mail Template - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_mailtext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_mailtext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [r_mailtext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_mailtext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Subject | Mail Header (Subject) | The subject of the mail message | [r_mailtext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext.html).MailHeader<small> character varying(2000) <br/> String</small> | 
| Mail Text | Text used for Mail message | The Mail Text indicates the text used for mail messages. | [r_mailtext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext.html).MailText<small> text <br/> Text</small> | 
| Mail Text 2 | Optional second text part used for Mail message | The Mail Text indicates the text used for mail messages. | [r_mailtext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext.html).MailText2<small> character varying(2000) <br/> Text</small> | 
| Mail Text 3 | Optional third text part used for Mail message | The Mail Text indicates the text used for mail messages. | [r_mailtext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext.html).MailText3<small> character varying(2000) <br/> Text</small> | 
| HTML | Text has HTML tags |  | [r_mailtext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext.html).IsHtml<small> character(1) <br/> Yes-No</small> | 


### Tab: Translation

**[Created:** 13/11/2005 - **Updated:** 27/10/2024 **]**   
**Description:** Translation  
**Help:**   
**Tab Level:** 1

Table 20: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_mailtext_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_mailtext_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Mail Template | Text templates for mailings | The Mail Template indicates the mail template for return messages. Mail text can include variables.  The priority of parsing is User/Contact, Business Partner and then the underlying business object (like Request, Dunning, Workflow object).So, @Name@ would resolve into the User name (if user is defined defined), then Business Partner name (if business partner is defined) and then the Name of the business object if it has a Name.For Multi-Lingual systems, the template is translated based on the Business Partner&#x27;s language selection. | [r_mailtext_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext_trl.html).R_MailText_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [r_mailtext_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [r_mailtext_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_mailtext_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [r_mailtext_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Subject | Mail Header (Subject) | The subject of the mail message | [r_mailtext_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext_trl.html).MailHeader<small> character varying(2000) <br/> Text</small> | 
| Mail Text | Text used for Mail message | The Mail Text indicates the text used for mail messages. | [r_mailtext_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext_trl.html).MailText<small> text <br/> Text</small> | 
| Mail Text 2 | Optional second text part used for Mail message | The Mail Text indicates the text used for mail messages. | [r_mailtext_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext_trl.html).MailText2<small> character varying(2000) <br/> Text</small> | 
| Mail Text 3 | Optional third text part used for Mail message | The Mail Text indicates the text used for mail messages. | [r_mailtext_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_mailtext_trl.html).MailText3<small> character varying(2000) <br/> Text</small> | 


### Tab: User Mail

**[Created:** 02/05/2005 - **Updated:** 13/11/2005 **]**   
**Description:** Mail sent to the user  
**Help:**   
**Tab Level:** 1

Table 30: User Mail - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Mail Template | Text templates for mailings | The Mail Template indicates the mail template for return messages. Mail text can include variables.  The priority of parsing is User/Contact, Business Partner and then the underlying business object (like Request, Dunning, Workflow object).So, @Name@ would resolve into the User name (if user is defined defined), then Business Partner name (if business partner is defined) and then the Name of the business object if it has a Name.For Multi-Lingual systems, the template is translated based on the Business Partner&#x27;s language selection. | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).R_MailText_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Message ID | EMail Message ID | SMTP Message ID for tracking purposes | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).MessageID<small> character varying(120) <br/> String</small> | 
| Delivery Confirmation | EMail Delivery confirmation |  | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).DeliveryConfirmation<small> character varying(120) <br/> String</small> | 
| Delivered |  |  | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).IsDelivered<small> character(1) <br/> List</small> | 


