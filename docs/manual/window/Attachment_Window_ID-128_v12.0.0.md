# Window: Attachment

**[Created:** 29/06/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Attachments  
**Help:** For System Maintenance Only.  The Maintain Attachments window is used for diagnostic purposes to display the attributes of an attachment.  
![](/img/docs/manual/Attachment-Window_iDempiere_v12.0.0.png)

### Tab: Attachment

**[Created:** 09/08/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Attachment  
**Help:** The Attachment tab displays the attributes of an attachment.  
**Tab Level:** 0

Table 10: Attachment - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_attachment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachment.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_attachment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachment.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_attachment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachment.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record UUID |  |  | [ad_attachment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachment.html).Record_UU<small> character varying(36) <br/> Record UUID</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_attachment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachment.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 
| Title | Name this entity is referred to as | The Title indicates the name that an entity is referred to as. | [ad_attachment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachment.html).Title<small> character varying(60) <br/> String</small> | 
| Text Message | Text Message |  | [ad_attachment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachment.html).TextMsg<small> character varying(2000) <br/> Text</small> | 
| Storage Provider |  |  | [ad_attachment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachment.html).AD_StorageProvider_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_attachment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachment.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Note

**[Created:** 16/03/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Personal Note  
**Help:**   
**Tab Level:** 1

Table 20: Note - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_attachmentnote](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachmentnote.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_attachmentnote](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachmentnote.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Attachment | Attachment for the document | Attachment can be of any document/file type and can be attached to any record in the system. | [ad_attachmentnote](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachmentnote.html).AD_Attachment_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_attachmentnote](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachmentnote.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_attachmentnote](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachmentnote.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Title | Name this entity is referred to as | The Title indicates the name that an entity is referred to as. | [ad_attachmentnote](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachmentnote.html).Title<small> character varying(60) <br/> String</small> | 
| Text Message | Text Message |  | [ad_attachmentnote](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_attachmentnote.html).TextMsg<small> character varying(2000) <br/> Text</small> | 


