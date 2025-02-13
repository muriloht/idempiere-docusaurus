# Window: User

**[Created:** 07/06/1999 - **Updated:** 03/06/2021 **]**  
**Description:** Maintain Users of the system  
**Help:** The User Window allows you to maintain User of the system.  Users can log into the system and have access to functionality via one or more roles.  A user can also be a business partner contact.  
![](/img/docs/manual/User-Window_iDempiere_v12.0.0.png)

### Tab: User Contact

**[Created:** 07/06/1999 - **Updated:** 21/04/2015 **]**   
**Description:** Maintain User or Business Partner Contact  
**Help:** The User Tab defines the log in for Users who have access to the system.  For application access, users need to have a role assigned.  
**Tab Level:** 0

Table 10: User Contact - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Image | Image or Icon | Images and Icon can be used to display supported graphic formats (gif, jpg, png).You can either load the image (in the database) or point to a graphic via a URI (i.e. it can point to a resource, http address) | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Image_ID<small> numeric(10) <br/> Image</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Description<small> character varying(255) <br/> String</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Comments<small> character varying(2000) <br/> Text</small> | 
| Search Key | Search key for the record in the format required | 7 bit lower case alpha numeric - max length 8 - can be used for operating system names. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Value<small> character varying(40) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| Ship Contact | Business Partner Shipment Contact | If the Ship Contact is selected, the contact is used for notification. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsShipTo<small> character(1) <br/> Yes-No</small> | 
| Invoice Contact | Business Partner Invoice/Bill Contact | If the Invoice Contact is selected, the contact is used to send notifications about invoices to a customer or a vendor. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsBillTo<small> character(1) <br/> Yes-No</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMail<small> character varying(60) <br/> String</small> | 
| Password | Password of any length (case sensitive) | The Password for this User.  Passwords are required to identify authorized users.  For iDempiere Users, you can change the password via the Process &quot;Reset Password&quot;. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Password<small> character varying(1024) <br/> String</small> | 
| Title | Name this entity is referred to as | The Title indicates the name that an entity is referred to as. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Title<small> character varying(40) <br/> String</small> | 
| Birthday | Birthday or Anniversary day | Birthday or Anniversary day | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Birthday<small> timestamp without time zone <br/> Date</small> | 
| Full BP Access | The user/contact has full access to Business Partner information and resources | If selected, the user has full access to the Business Partner (BP) information (Business Documents like Orders, Invoices - Requests) or resources (Assets, Downloads). If you deselect it, the user has no access rights unless, you explicitly grant it in tab &quot;BP Access&quot; | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsFullBPAccess<small> character(1) <br/> Yes-No</small> | 
| Phone | Identifies a telephone number | The Phone field identifies a telephone number | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Phone<small> character varying(40) <br/> String</small> | 
| 2nd Phone | Identifies an alternate telephone number. | The 2nd Phone field identifies an alternate telephone number. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Phone2<small> character varying(40) <br/> String</small> | 
| Fax | Facsimile number | The Fax identifies a facsimile number for this Business Partner or  Location | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Fax<small> character varying(40) <br/> String</small> | 
| Notification Type | Type of Notifications | Emails or Notification sent out for Request Updates, etc. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).NotificationType<small> character(1) <br/> List</small> | 
| Position | Job Position |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Job_ID<small> numeric(10) <br/> Table Direct</small> | 
| User PIN |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).UserPIN<small> character varying(20) <br/> String</small> | 
| EMail User ID | User Name (ID) in the Mail System | The user name in the mail system is usually the string before the @ of your email address.  Required if the mail server requires authentication to send emails. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMailUser<small> character varying(60) <br/> String</small> | 
| EMail User Password | Password of your email user id | Required if the mail server requires authentication to send emails. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMailUserPW<small> character varying(255) <br/> String</small> | 
| Supervisor | Supervisor for this user/organization - used for escalation and approval | The Supervisor indicates who will be used for forwarding and escalating issues for this user - or for approvals. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Supervisor_ID<small> numeric(10) <br/> Search</small> | 
| LDAP User Name | User Name used for authorization via LDAP (directory) services | Optional LDAP system user name for the user. If not defined, the normal Name of the user is used. This allows to use the internal (LDAP) user id (e.g. jjanke) and the normal display name (e.g. Jorg Janke).  The LDAP User Name can also be used without LDAP enables (see system window).  This would allow to sign in as jjanke and use the display name of Jorg Janke. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LDAPUser<small> character varying(60) <br/> String</small> | 
| Support User |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsSupportUser<small> character(1) <br/> Yes-No</small> | 
| Trx Organization | Performing or initiating organization | The organization which performs or initiates this transaction (for another organization).  The owning Organization may not be the transaction organization in a service bureau environment, with centralized services, and inter-organization transactions. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_OrgTrx_ID<small> numeric(10) <br/> Table</small> | 
| Auto expand menu | If ticked, the menu is automatically expanded |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsMenuAutoExpand<small> character(1) <br/> List</small> | 
| Greeting | Greeting to print on correspondence | The Greeting identifies the greeting to print on correspondence. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Greeting_ID<small> numeric(10) <br/> Table Direct</small> | 
| EMail Verify | Date Email was verified |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMailVerifyDate<small> timestamp without time zone <br/> Date+Time</small> | 
| Default mail template |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).R_DefaultMailText_ID<small> numeric(10) <br/> Table</small> | 
| Add Mail Text Automatically | The selected mail template will be automatically inserted when creating an email |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsAddMailTextAutomatically<small> character(1) <br/> Yes-No</small> | 
| Last Contact | Date this individual was last contacted | The Last Contact indicates the date that this Business Partner Contact was last contacted. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LastContact<small> timestamp without time zone <br/> Date</small> | 
| Verification Info | Verification information of EMail Address | The field contains additional information how the EMail Address has been verified | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMailVerify<small> character varying(40) <br/> String</small> | 
| Last Result | Result of last contact | The Last Result identifies the result of the last contact made. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LastResult<small> character varying(255) <br/> String</small> | 
| Date Account Locked |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).DateAccountLocked<small> timestamp without time zone <br/> Date+Time</small> | 
| Locked |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsLocked<small> character(1) <br/> Yes-No</small> | 
| No Password Reset |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsNoPasswordReset<small> character(1) <br/> Yes-No</small> | 
| Expired |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsExpired<small> character(1) <br/> Yes-No</small> | 
| No Expire |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsNoExpire<small> character(1) <br/> Yes-No</small> | 
| Failed Login Count |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).FailedLoginCount<small> numeric(10) <br/> Integer</small> | 
| Date Last Login |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).DateLastLogin<small> timestamp without time zone <br/> Date+Time</small> | 
| Date Password Changed |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).DatePasswordChanged<small> timestamp without time zone <br/> Date+Time</small> | 
| Authentication Type |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AuthenticationType<small> character varying(10) <br/> List</small> | 


### Tab: User Roles

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** User Roles  
**Help:** The User Roles Tab define the Roles each user may have.  The Roles will determine what windows, tasks, processes and workflows that a User has access to.  
**Tab Level:** 1

Table 20: User Roles - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_user_roles](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_roles.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_user_roles](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_roles.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_user_roles](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_roles.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_user_roles](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_roles.html).AD_Role_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_user_roles](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_roles.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: User Substitute

**[Created:** 01/01/2004 - **Updated:** 10/01/2015 **]**   
**Description:** Substitute of the user  
**Help:** A user who can act for this user.  
**Tab Level:** 1

Table 30: User Substitute - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_user_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_substitute.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_user_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_substitute.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_user_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_substitute.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_user_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_substitute.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_user_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_substitute.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_user_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_substitute.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Substitute | Entity which can be used in place of this entity | The Substitute identifies the entity to be used as a substitute for this entity. | [ad_user_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_substitute.html).Substitute_ID<small> numeric(10) <br/> Search</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [ad_user_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_substitute.html).ValidFrom<small> timestamp without time zone <br/> Date</small> | 
| Valid to | Valid to including this date (last day) | The Valid To date indicates the last day of a date range | [ad_user_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_substitute.html).ValidTo<small> timestamp without time zone <br/> Date</small> | 


### Tab: Org Access

**[Created:** 21/04/2005 - **Updated:** 10/03/2022 **]**   
**Description:** Maintain User Org Access  
**Help:** Add the tenant and organizations the user has access to. Entries here are ignored, if in the Role, User Org Access is not selected or the role has access to all roles.Note that access information is cached and requires re-login or reset of cache.  
**Tab Level:** 1

Table 50: Org Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_user_orgaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_orgaccess.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_user_orgaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_orgaccess.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_user_orgaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_orgaccess.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_user_orgaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_orgaccess.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Read Only | Field is read only | The Read Only indicates that this field may only be Read.  It may not be updated. | [ad_user_orgaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user_orgaccess.html).IsReadOnly<small> character(1) <br/> Yes-No</small> | 


### Tab: User Mail

**[Created:** 02/05/2005 - **Updated:** 02/05/2005 **]**   
**Description:** Mail sent to the user  
**Help:** Archive of mails sent to users  
**Tab Level:** 1

Table 60: User Mail - Fields 

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


### Tab: Queries

**[Created:** 09/09/2005 - **Updated:** 09/09/2005 **]**   
**Description:** View and maintain saved queries  
**Help:**   
**Tab Level:** 1

Table 70: Queries - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Validation code | Validation Code | The Validation Code displays the date, time and message of the error.You can add advanced SQL queries to your searches by filling this field with @SQL=[WHERE CLAUSE].Do not include the WHERE statement and use Fully qualified SQL statements. F.e:@SQL=C_Order.isActive=&#x27;Y&#x27; AND SalesRep_ID=@AD_User_ID@ will filter orders by active and where the sales representative is the current user. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).Code<small> character varying(4000) <br/> String</small> | 


### Tab: LDAP Access

**[Created:** 29/10/2006 - **Updated:** 29/10/2006 **]**   
**Description:** User Access via LDAP  
**Help:**   
**Tab Level:** 1

Table 80: LDAP Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Ldap Processor | LDAP Server to authenticate and authorize external systems based on iDempiere | The LDAP Server allows third party software (e.g. Apache) to use the users defined in the system to authentificate and authorize them.  There is only one server per iDempiere system.  The &quot;o&quot; is the Tenant key and the optional &quot;ou&quot; is the Interest Area key. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).AD_LdapProcessor_ID<small> numeric(10) <br/> Table Direct</small> | 
| Interest Area | Interest Area or Topic | Interest Areas reflect interest in a topic by a contact. Interest areas can be used for marketing campaigns. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).R_InterestArea_ID<small> numeric(10) <br/> Table Direct</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Error | An Error occurred in the execution |  | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).IsError<small> character(1) <br/> Yes-No</small> | 
| Summary | Textual summary of this request | The Summary allows free form text entry of a recap of this request. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).Summary<small> character varying(2000) <br/> Text</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).Description<small> character varying(255) <br/> String</small> | 


### Tab: Document Status Access

**[Created:** 28/06/2021 - **Updated:** 28/06/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 100: Document Status Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).AD_Org_ID<small> numeric(10) <br/> Search</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Status |  |  | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).PA_DocumentStatus_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_documentstatusaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_documentstatusaccess.html).IsActive<small> character(1) <br/> Yes-No</small> | 


