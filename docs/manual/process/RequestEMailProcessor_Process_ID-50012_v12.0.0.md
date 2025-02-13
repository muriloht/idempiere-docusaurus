# Process: Request EMail Processor 

**[Created:** 28/02/2007 - **Updated:** 28/02/2007 **]**  
**Description:**   
**Help:**   
**Class:** [org.compiere.process.RequestEMailProcessor](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/RequestEMailProcessor.html)

![](/img/docs/manual/RequestEMailProcessor-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| IMAP Host |  |  | p_IMAPHost<br/>String | 
| IMAP User |  |  | p_IMAPUser<br/>String | 
| IMAP Password |  |  | p_IMAPPwd<br/>String | 
| Request Folder | After take email form inbox folder, and process it success, email will move to this folder | folder can define as hierarchy, use &quot;\&quot; to separate folder. example customer\vietnamwill read email from folder vietnam under folder customerafter take email form inbox folder, and process it success, email will move to this folder | p_RequestFolder<br/>String | 
| Inbox Folder | Mail folder, where process will take email and make request | folder can define as hierarchy, use &quot;\&quot; to separate folder. example customer\vietnamwill read email from folder vietnam under folder customer | p_InboxFolder<br/>String | 
| Error Folder | Mail folder to push unsuccess email | folder can define as hierarchy, use &quot;\&quot; to separate folder. example customer\error\vietnamwill puss email can&#x27;t process to folder vietnam under folder error under folder customer | p_ErrorFolder<br/>String | 
| Inbox As Root Folder | True if other folder (request, error,..) occupy in inbox folder | Some email server as outlook, every folder occupy in inbox, with web mail as google, we easy create my folder outside inbox folder.this field define where request, error,.. occupy. | p_NestInbox<br/>Yes-No | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Search | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | AD_User_ID<br/>Table Direct | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | AD_Role_ID<br/>Table Direct | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | SalesRep_ID<br/>Table | 
| Request Type | Type of request (e.g. Inquiry, Complaint, ..) | Request Types are used for processing and categorizing requests. Options are Account Inquiry, Warranty Issue, etc. | R_RequestType_ID<br/>Table Direct | 
| User Importance | Priority of the issue for the User |  | p_DefaultPriority<br/>List | 
| Confidentiality | Type of Confidentiality |  | p_DefaultConfidentiality<br/>List | 
| HTML Attachment Type | Define html email body processing behaviour. HTML Email body can be converted as attachment *.html file or parse images into attachment. |  | HTMLAttachmentType<br/>List | 


