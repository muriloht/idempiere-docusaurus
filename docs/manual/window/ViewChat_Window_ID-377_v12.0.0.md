# Window: View Chat

**[Created:** 05/04/2006 - **Updated:** 18/04/2006 **]**  
**Description:** View discussions / chats  
**Help:** View chat / discussion threads  
![](/img/docs/manual/ViewChat-Window_iDempiere_v12.0.0.png)

### Tab: Chat

**[Created:** 18/04/2006 - **Updated:** 18/04/2006 **]**   
**Description:** View Chat or discussion thread  
**Help:** Thread of discussion  
**Tab Level:** 0

Table 10: Chat - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [cm_chat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chat.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [cm_chat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chat.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [cm_chat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chat.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [cm_chat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chat.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Chat Type | Type of discussion / chat | Chat Type allows you to receive subscriptions for particular content of discussions. It is linked to a table. | [cm_chat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chat.html).CM_ChatType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Confidentiality | Type of Confidentiality |  | [cm_chat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chat.html).ConfidentialType<small> character(1) <br/> List</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [cm_chat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chat.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record UUID |  |  | [cm_chat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chat.html).Record_UU<small> character varying(36) <br/> Record UUID</small> | 
| Moderation Type | Type of moderation |  | [cm_chat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chat.html).ModerationType<small> character(1) <br/> List</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [cm_chat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chat.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 


### Tab: Chat Entry

**[Created:** 18/04/2006 - **Updated:** 18/04/2006 **]**   
**Description:** Individual Chat / Discussion Entry  
**Help:** The entry can not be changed - just the confidentiality  
**Tab Level:** 1

Table 20: Chat Entry - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Chat | Chat or discussion thread | Thread of discussion | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).CM_Chat_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Moderation Status | Status of Moderation |  | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).ModeratorStatus<small> character(1) <br/> List</small> | 
| Confidentiality | Type of Confidentiality |  | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).ConfidentialType<small> character(1) <br/> List</small> | 
| Chat Entry Type | Type of Chat/Forum Entry |  | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).ChatEntryType<small> character(1) <br/> List</small> | 
| Subject | Email Message Subject | Subject of the EMail | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).Subject<small> character varying(255) <br/> String</small> | 
| Chat Entry Grandparent | Link to Grand Parent (root level) |  | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).CM_ChatEntryGrandParent_ID<small> numeric(10) <br/> Table</small> | 
| Chat Entry Parent | Link to direct Parent |  | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).CM_ChatEntryParent_ID<small> numeric(10) <br/> Table</small> | 
| Character Data | Long Character Field |  | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).CharacterData<small> text <br/> Text Long</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [cm_chatentry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatentry.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Updates

**[Created:** 18/04/2006 - **Updated:** 18/04/2006 **]**   
**Description:** Subscribers for this Chat  
**Help:** Subscribers receive updates per email or notice. In addition to the subscribers for this specific cta, also the subscribers of the Chat Type receive updates.  
**Tab Level:** 1

Table 30: Updates - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [cm_chatupdate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatupdate.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [cm_chatupdate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatupdate.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Chat | Chat or discussion thread | Thread of discussion | [cm_chatupdate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatupdate.html).CM_Chat_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [cm_chatupdate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatupdate.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [cm_chatupdate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatupdate.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [cm_chatupdate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/cm_chatupdate.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 


