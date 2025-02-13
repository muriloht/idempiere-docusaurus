# Window: Broadcast Message

**[Created:** 24/11/2012 - **Updated:** 02/12/2012 **]**  
**Description:** Broadcast Message  
**Help:** Window allows to enter broadcast messages  
![](/img/docs/manual/BroadcastMessage-Window_iDempiere_v12.0.0.png)

### Tab: Broadcast Message

**[Created:** 24/11/2012 - **Updated:** 17/04/2013 **]**   
**Description:** Broadcast Message  
**Help:**   
**Tab Level:** 0

Table 10: Broadcast Message - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Broadcast Message | Broadcast Message |  | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).BroadcastMessage<small> text <br/> Text Long</small> | 
| Title | Name this entity is referred to as | The Title indicates the name that an entity is referred to as. | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).Title<small> character varying(60) <br/> String</small> | 
| Broadcast Type | Type of Broadcast |  | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).BroadcastType<small> character varying(32) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Target | Target tenant |  | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).Target<small> character varying(60) <br/> Radio Group List</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Broadcast Frequency | How Many Times Message Should be Broadcasted |  | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).BroadcastFrequency<small> character varying(60) <br/> List</small> | 
| Expire On | Expire On |  | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).Expiration<small> timestamp without time zone <br/> Date+Time</small> | 
| Test Broadcast Message | Test and verify message before broadcasting |  | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).TestMessage<small> character(1) <br/> Button</small> | 
| Publish Broadcast message | Publish Broadcast message | Selecting ok will publish message.  Do you want to publish message? | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).Publish<small> character(1) <br/> Button</small> | 
| Expire Broadcast Message | Expire Broadcast Message | Selecting OK will expire current message. Do you want to expire message? | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).ExpireNow<small> character(1) <br/> Button</small> | 
| Expired |  |  | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).Expired<small> character(1) <br/> Yes-No</small> | 
| Published | The Topic is published and can be viewed | If not selected, the Topic is not visible to the general public. | [ad_broadcastmessage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage.html).IsPublished<small> character(1) <br/> Yes-No</small> | 


### Tab: Message Log

**[Created:** 24/11/2012 - **Updated:** 25/11/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Message Log - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Message | System Message | Information and Error messages | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).AD_Message_ID<small> numeric(10) <br/> Search</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow Activity | Workflow Activity | The Workflow Activity is the actual Workflow Node in a Workflow Process instance | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).AD_WF_Activity_ID<small> numeric(10) <br/> Search</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 
| Reference | Reference for this record | The Reference displays the source document number. | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).Reference<small> character varying(255) <br/> String</small> | 
| Text Message | Text Message |  | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).TextMsg<small> character varying(2000) <br/> Text</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).Description<small> character varying(255) <br/> String</small> | 
| Broadcast Message | Broadcast Message |  | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).AD_BroadcastMessage_ID<small> numeric(10) <br/> Table Direct</small> | 
| Delete Notices | Delete all Notices |  | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).Processing<small> character(1) <br/> Button</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [ad_note](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_note.html).Processed<small> character(1) <br/> Yes-No</small> | 


### Tab: Translation

**[Created:** 21/03/2014 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_broadcastmessage_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_broadcastmessage_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Broadcast Message | Broadcast Message |  | [ad_broadcastmessage_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage_trl.html).AD_BroadcastMessage_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_broadcastmessage_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_broadcastmessage_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_broadcastmessage_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Title | Name this entity is referred to as | The Title indicates the name that an entity is referred to as. | [ad_broadcastmessage_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage_trl.html).Title<small> character varying(60) <br/> String</small> | 
| Broadcast Message | Broadcast Message |  | [ad_broadcastmessage_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_broadcastmessage_trl.html).BroadcastMessage<small> text <br/> Text Long</small> | 


