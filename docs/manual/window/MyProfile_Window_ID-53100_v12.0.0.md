# Window: My Profile

**[Created:** 12/09/2009 - **Updated:** 12/09/2009 **]**  
**Description:** My user information  
**Help:**   
![](/img/docs/manual/MyProfile-Window_iDempiere_v12.0.0.png)

### Tab: User Contact

**[Created:** 12/09/2009 - **Updated:** 12/09/2009 **]**   
**Description:** Maintain User or Business Partner Contact  
**Help:** The User Tab defines the log in for Users who have access to the system.  For application access, users need to have a role assigned.  
**Tab Level:** 0

Table 10: User Contact - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Name<small> character varying(60) <br/> String</small> | 
| Search Key | Search key for the record in the format required | 7 bit lower case alpha numeric - max length 8 - can be used for operating system names. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Value<small> character varying(40) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Description<small> character varying(255) <br/> String</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Comments<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMail<small> character varying(60) <br/> String</small> | 
| Password | Password of any length (case sensitive) | The Password for this User.  Passwords are required to identify authorized users.  For iDempiere Users, you can change the password via the Process &quot;Reset Password&quot;. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Password<small> character varying(1024) <br/> String</small> | 
| Title | Name this entity is referred to as | The Title indicates the name that an entity is referred to as. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Title<small> character varying(40) <br/> String</small> | 
| User PIN |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).UserPIN<small> character varying(20) <br/> String</small> | 
| Birthday | Birthday or Anniversary day | Birthday or Anniversary day | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Birthday<small> timestamp without time zone <br/> Date</small> | 
| Phone | Identifies a telephone number | The Phone field identifies a telephone number | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Phone<small> character varying(40) <br/> String</small> | 
| 2nd Phone | Identifies an alternate telephone number. | The 2nd Phone field identifies an alternate telephone number. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Phone2<small> character varying(40) <br/> String</small> | 
| Fax | Facsimile number | The Fax identifies a facsimile number for this Business Partner or  Location | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Fax<small> character varying(40) <br/> String</small> | 
| Notification Type | Type of Notifications | Emails or Notification sent out for Request Updates, etc. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).NotificationType<small> character(1) <br/> List</small> | 
| Position | Job Position |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Job_ID<small> numeric(10) <br/> Table Direct</small> | 
| Full BP Access | The user/contact has full access to Business Partner information and resources | If selected, the user has full access to the Business Partner (BP) information (Business Documents like Orders, Invoices - Requests) or resources (Assets, Downloads). If you deselect it, the user has no access rights unless, you explicitly grant it in tab &quot;BP Access&quot; | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsFullBPAccess<small> character(1) <br/> Yes-No</small> | 
| EMail User ID | User Name (ID) in the Mail System | The user name in the mail system is usually the string before the @ of your email address.  Required if the mail server requires authentication to send emails. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMailUser<small> character varying(60) <br/> String</small> | 
| EMail User Password | Password of your email user id | Required if the mail server requires authentication to send emails. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMailUserPW<small> character varying(255) <br/> String</small> | 
| Supervisor | Supervisor for this user/organization - used for escalation and approval | The Supervisor indicates who will be used for forwarding and escalating issues for this user - or for approvals. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Supervisor_ID<small> numeric(10) <br/> Search</small> | 
| LDAP User Name | User Name used for authorization via LDAP (directory) services | Optional LDAP system user name for the user. If not defined, the normal Name of the user is used. This allows to use the internal (LDAP) user id (e.g. jjanke) and the normal display name (e.g. Jorg Janke).  The LDAP User Name can also be used without LDAP enables (see system window).  This would allow to sign in as jjanke and use the display name of Jorg Janke. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LDAPUser<small> character varying(60) <br/> String</small> | 
| Trx Organization | Performing or initiating organization | The organization which performs or initiates this transaction (for another organization).  The owning Organization may not be the transaction organization in a service bureau environment, with centralized services, and inter-organization transactions. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_OrgTrx_ID<small> numeric(10) <br/> Table</small> | 
| Connection Profile | How a Java Tenant connects to the server(s) | Depending on the connection profile, different protocols are used and tasks are performed on the server rather then the tenant. Usually the user can select different profiles, unless it is enforced by the User or Role definition. The User level profile overwrites the Role based profile. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).ConnectionProfile<small> character(1) <br/> List</small> | 
| Auto expand menu | If ticked, the menu is automatically expanded |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsMenuAutoExpand<small> character(1) <br/> List</small> | 
| Greeting | Greeting to print on correspondence | The Greeting identifies the greeting to print on correspondence. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Greeting_ID<small> numeric(10) <br/> Table Direct</small> | 
| EMail Verify | Date Email was verified |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMailVerifyDate<small> timestamp without time zone <br/> Date+Time</small> | 
| Last Contact | Date this individual was last contacted | The Last Contact indicates the date that this Business Partner Contact was last contacted. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LastContact<small> timestamp without time zone <br/> Date</small> | 
| Verification Info | Verification information of EMail Address | The field contains additional information how the EMail Address has been verified | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMailVerify<small> character varying(40) <br/> String</small> | 
| Last Result | Result of last contact | The Last Result identifies the result of the last contact made. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LastResult<small> character varying(255) <br/> String</small> | 


### Tab: User Mail

**[Created:** 12/09/2009 - **Updated:** 12/09/2009 **]**   
**Description:** Mail sent to the user  
**Help:** Archive of mails sent to users  
**Tab Level:** 1

Table 20: User Mail - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Mail Template | Text templates for mailings | The Mail Template indicates the mail template for return messages. Mail text can include variables.  The priority of parsing is User/Contact, Business Partner and then the underlying business object (like Request, Dunning, Workflow object).So, @Name@ would resolve into the User name (if user is defined defined), then Business Partner name (if business partner is defined) and then the Name of the business object if it has a Name.For Multi-Lingual systems, the template is translated based on the Business Partner&#x27;s language selection. | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).R_MailText_ID<small> numeric(10) <br/> Table Direct</small> | 
| Mail Message | Web Store Mail Message Template |  | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).W_MailMsg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Message ID | EMail Message ID | SMTP Message ID for tracking purposes | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).MessageID<small> character varying(120) <br/> String</small> | 
| EMail sent from |  |  | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).EMailFrom<small> character varying(255) <br/> String</small> | 
| To |  |  | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).RecipientTo<small> character varying(2000) <br/> String</small> | 
| Cc |  |  | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).RecipientCc<small> character varying(2000) <br/> String</small> | 
| Bcc |  |  | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).RecipientBcc<small> character varying(2000) <br/> String</small> | 
| Subject | Email Message Subject | Subject of the EMail | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).Subject<small> character varying(255) <br/> String</small> | 
| Mail Text | Text used for Mail message | The Mail Text indicates the text used for mail messages. | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).MailText<small> character varying(2000) <br/> Text</small> | 
| Delivery Confirmation | EMail Delivery confirmation |  | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).DeliveryConfirmation<small> character varying(120) <br/> String</small> | 
| Delivered |  |  | [ad_usermail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_usermail.html).IsDelivered<small> character(1) <br/> List</small> | 


