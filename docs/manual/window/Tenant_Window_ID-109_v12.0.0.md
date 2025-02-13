# Window: Tenant

**[Created:** 11/06/1999 - **Updated:** 10/03/2022 **]**  
**Description:** Maintain Tenants  
**Help:** The Tenant is the highest level of an independent business entity.  Each Tenant will have one or more Organizations reporting to it.  Each Tenant defines the accounting parameters (Accounting Schema, Tree definition, Non Monetary UOM&#x27;s). To create new Tenants, run the Initial Tenant Setup with the System Administrator Role.Do not create a new tenant in this window, but use &quot;Initial Tenant Setup&quot; to set up the required security and access rules. If you create a new tenant here, you will not be able to view it and also the required tenant infrastructure would not have been set up.  
![](/img/docs/manual/Tenant-Window_iDempiere_v12.0.0.png)

### Tab: Tenant

**[Created:** 19/06/1999 - **Updated:** 10/03/2022 **]**   
**Description:** Tenant Definition  
**Help:** The Tenant Definition Tab defines a unique tenant.Do not create a new tenant in this window, but use &quot;Initial Tenant Setup&quot; (System Administrator Role) to set up the required security and access rules. If you create a new tenant here, you will not be able to view it and also the required tenant infrastructure would not have been set up.  
**Tab Level:** 0

Table 10: Tenant - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).Value<small> character varying(40) <br/> String</small> | 
| Login Prefix |  |  | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).LoginPrefix<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Use Beta Functions | Enable the use of Beta Functionality | The exact scope of Beta Functionality is listed in the release note.  It is usually not recommended to enable Beta functionality in production environments. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).IsUseBetaFunctions<small> character(1) <br/> Yes-No</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Multi Lingual Documents | Documents are Multi Lingual | If selected, you enable multi lingual documents and need to maintain translations for entities used in documents (examples: Products, Payment Terms, ...).Please note, that the base language is always English. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).IsMultiLingualDocument<small> character(1) <br/> Yes-No</small> | 
| Auto Archive | Enable and level of automatic Archive of documents | iDempiere allows to automatically create archives of Documents (e.g. Invoices) or Reports. You view the archived material with the Archive Viewer | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).AutoArchive<small> character(1) <br/> List</small> | 
| Material Policy | Material Movement Policy | The Material Movement Policy determines how the stock is flowing (FiFo or LiFo) if a specific Product Instance was not selected.  The policy can not contradict the costing method (e.g. FiFo movement policy and LiFo costing method). | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).MMPolicy<small> character(1) <br/> List</small> | 
| Mail Host | Hostname of Mail Server for SMTP and IMAP | The host name of the Mail Server for this tenant with SMTP services to send mail, and IMAP to process incoming mail. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).SMTPHost<small> character varying(60) <br/> String</small> | 
| SMTP Authentication | Your mail server requires Authentication | Some email servers require authentication before sending emails.  If yes, users are required to define their email user name and password.  If authentication is required and no user name and password is required, delivery will fail. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).IsSmtpAuthorization<small> character(1) <br/> Yes-No</small> | 
| SMTP Port | SMTP Port Number |  | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).SMTPPort<small> numeric(10) <br/> Integer</small> | 
| SMTP SSL/TLS | Use SSL/TLS for SMTP |  | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).IsSecureSMTP<small> character(1) <br/> Yes-No</small> | 
| Request EMail | EMail address to send automated mails from or receive mails for automated processing (fully qualified) | EMails for requests, alerts and escalation are sent from this email address as well as delivery information if the sales rep does not have an email account. The address must be filly qualified (e.g. joe.smith@company.com) and should be a valid address. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).RequestEMail<small> character varying(60) <br/> String</small> | 
| Request Folder | EMail folder to process incoming emails; if empty INBOX is used | Email folder used to read emails to process as requests, If left empty the default mailbox (INBOX) will be used. Requires IMAP services. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).RequestFolder<small> character varying(20) <br/> String</small> | 
| Request User | User Name (ID) of the email owner | EMail user name for requests, alerts and escalation are sent from this email address as well as delivery information if the sales rep does not have an email account. Required, if your mail server requires authentication as well as for processing incoming mails. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).RequestUser<small> character varying(60) <br/> String</small> | 
| Request User Password | Password of the user name (ID) for mail processing |  | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).RequestUserPW<small> character varying(255) <br/> String</small> | 
| Test EMail | Test EMail Connection | Test EMail Connection based on info defined. An EMail is sent from the request user to the request user.  Also, the web store mail settings are tested. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).EMailTest<small> character(1) <br/> Button</small> | 
| Model Validation Classes | List of data model validation classes separated by ; | List of classes implementing the interface org.compiere.model.ModelValidator, separated by semicolon.The class is called for the tenant and allows to validate documents in the prepare stage and monitor model changes. | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).ModelValidationClasses<small> character varying(255) <br/> String</small> | 
| Is Use ASP |  |  | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).IsUseASP<small> character(1) <br/> Yes-No</small> | 
| Store Archive On File System |  |  | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).StoreArchiveOnFileSystem<small> character(1) <br/> Yes-No</small> | 
| Replication Strategy | Data Replication Strategy | The Data Replication Strategy determines what and how tables are replicated | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).AD_ReplicationStrategy_ID<small> numeric(10) <br/> Table Direct</small> | 
| Windows Archive Path |  |  | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).WindowsArchivePath<small> character varying(255) <br/> String</small> | 
| Unix Archive Path |  |  | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).UnixArchivePath<small> character varying(255) <br/> String</small> | 
| Password Policies |  |  | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).AD_PasswordRule_ID<small> numeric(10) <br/> Table Direct</small> | 
| Authentication Type |  |  | [ad_client](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_client.html).AuthenticationType<small> character varying(10) <br/> List</small> | 


### Tab: Tenant Info

**[Created:** 09/07/1999 - **Updated:** 10/03/2022 **]**   
**Description:** Tenant Info  
**Help:** The Tenant Info Tab defines the details for each tenant.  The accounting rules and high level defaults are defined here. The Calendar is used to determine if a period is open or closed.  
**Tab Level:** 1

Table 20: Tenant Info - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Discount calculated from Line Amounts | Payment Discount calculation does not include Taxes and Charges | If the payment discount is calculated from line amounts only, the tax and charge amounts are not included. This is e.g. business practice in the US.  If not selected the total invoice amount is used to calculate the payment discount. | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).IsDiscountLineAmt<small> character(1) <br/> Yes-No</small> | 
| Calendar | Accounting Calendar Name | The Calendar uniquely identifies an accounting calendar.  Multiple calendars can be used.  For example you may need a standard calendar that runs from Jan 1 to Dec 31 and a fiscal calendar that runs from July 1 to June 30. | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).C_Calendar_ID<small> numeric(10) <br/> Table Direct</small> | 
| Primary Accounting Schema | Primary rules for accounting | An Accounting  Schema defines the rules used accounting such as costing method, currency and calendar. | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).C_AcctSchema1_ID<small> numeric(10) <br/> Table</small> | 
| Time Zone | Time zone name |  | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).TimeZone<small> character varying(60) <br/> Time Zone</small> | 
| UOM for Length | Standard Unit of Measure for Length | The Standard UOM for Length indicates the UOM to use for products referenced by length in a document. | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).C_UOM_Length_ID<small> numeric(10) <br/> Table</small> | 
| UOM for Weight | Standard Unit of Measure for Weight | The Standard UOM for Weight indicates the UOM to use for products referenced by weight in a document. | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).C_UOM_Weight_ID<small> numeric(10) <br/> Table</small> | 
| Template B.Partner | Business Partner used for creating new Business Partners on the fly | When creating a new Business Partner from the Business Partner Search Field (right-click: Create), the selected business partner is used as a template, e.g. to define price list, payment terms, etc. | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).C_BPartnerCashTrx_ID<small> numeric(10) <br/> Search</small> | 
| Product for Freight |  |  | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).M_ProductFreight_ID<small> numeric(10) <br/> Search</small> | 
| Charge for Freight |  |  | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).C_ChargeFreight_ID<small> numeric(10) <br/> Table</small> | 
| Attachment Store |  |  | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).AD_StorageProvider_ID<small> numeric(10) <br/> Table Direct</small> | 
| Archive Store |  |  | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).StorageArchive_ID<small> numeric(10) <br/> Table</small> | 
| Image Store | Storage provider for Image |  | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).StorageImage_ID<small> numeric(10) <br/> Table</small> | 
| Show Confirmation On Document Action Close |  |  | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).IsConfirmOnDocClose<small> character(1) <br/> Yes-No</small> | 
| Show Confirmation On Document Action Void |  |  | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).IsConfirmOnDocVoid<small> character(1) <br/> Yes-No</small> | 
| Organization Tree | Trees are used for (financial) reporting and security access (via role) | Trees are used for (finanial) reporting and security access (via role) | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).AD_Tree_Org_ID<small> numeric(10) <br/> Table</small> | 
| Menu Tree | Tree of the menu | Menu access tree | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).AD_Tree_Menu_ID<small> numeric(10) <br/> Table</small> | 
| BPartner Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).AD_Tree_BPartner_ID<small> numeric(10) <br/> Table</small> | 
| Product Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).AD_Tree_Product_ID<small> numeric(10) <br/> Table</small> | 
| Project Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).AD_Tree_Project_ID<small> numeric(10) <br/> Table</small> | 
| Sales Region Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).AD_Tree_SalesRegion_ID<small> numeric(10) <br/> Table</small> | 
| Campaign Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).AD_Tree_Campaign_ID<small> numeric(10) <br/> Table</small> | 
| Activity Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).AD_Tree_Activity_ID<small> numeric(10) <br/> Table</small> | 
| Logo |  |  | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).Logo_ID<small> numeric(10) <br/> Image</small> | 
| Logo Report |  |  | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).LogoReport_ID<small> numeric(10) <br/> Image</small> | 
| Logo Web |  |  | [ad_clientinfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientinfo.html).LogoWeb_ID<small> numeric(10) <br/> Image</small> | 


### Tab: Tenant Share

**[Created:** 20/11/2005 - **Updated:** 10/03/2022 **]**   
**Description:** Force (not) sharing of tenant/org entities  
**Help:** Business Partner can be either defined on Tenant level (shared) or on Org level (not shared).  You can define here of Products are always shared (i.e. always created under Organization &quot;*&quot;) or if they are not shared (i.e. you cannot enter them with Organization &quot;*&quot;).The creation of  &quot;Tenant and Org&quot; shared records is the default and is ignored.  
**Tab Level:** 1

Table 30: Tenant Share - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_clientshare](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientshare.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_clientshare](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientshare.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_clientshare](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientshare.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_clientshare](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientshare.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_clientshare](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientshare.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_clientshare](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientshare.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Share Type | Type of sharing | Defines if a table is shared within a tenant or not. | [ad_clientshare](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_clientshare.html).ShareType<small> character(1) <br/> List</small> | 


