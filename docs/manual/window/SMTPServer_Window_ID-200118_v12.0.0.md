# Window: SMTP Server

**[Created:** 20/07/2021 - **Updated:** 20/07/2021 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/SMTPServer-Window_iDempiere_v12.0.0.png)

### Tab: SMTP Server

**[Created:** 20/07/2021 - **Updated:** 20/07/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: SMTP Server - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Mail Host | Hostname of Mail Server for SMTP and IMAP | The host name of the Mail Server for this tenant with SMTP services to send mail, and IMAP to process incoming mail. | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).SMTPHost<small> character varying(60) <br/> String</small> | 
| SMTP Authentication | Your mail server requires Authentication | Some email servers require authentication before sending emails.  If yes, users are required to define their email user name and password.  If authentication is required and no user name and password is required, delivery will fail. | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).IsSmtpAuthorization<small> character(1) <br/> Yes-No</small> | 
| SMTP Port | SMTP Port Number |  | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).SMTPPort<small> numeric(10) <br/> Integer</small> | 
| SMTP SSL/TLS | Use SSL/TLS for SMTP |  | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).IsSecureSMTP<small> character(1) <br/> Yes-No</small> | 
| Request User | User Name (ID) of the email owner | EMail user name for requests, alerts and escalation are sent from this email address as well as delivery information if the sales rep does not have an email account. Required, if your mail server requires authentication as well as for processing incoming mails. | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).RequestUser<small> character varying(60) <br/> String</small> | 
| Request User Password | Password of the user name (ID) for mail processing |  | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).RequestUserPW<small> character varying(255) <br/> String</small> | 
| Used by email or domain |  |  | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).UsedByEmailOrDomain<small> character varying(255) <br/> String</small> | 
| Test EMail | Test EMail Connection | Test EMail Connection based on info defined. An EMail is sent from the request user to the request user.  Also, the web store mail settings are tested. | [ad_smtp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_smtp.html).EMailTest<small> character(1) <br/> Button</small> | 


