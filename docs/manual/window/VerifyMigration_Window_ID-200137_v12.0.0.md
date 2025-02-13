# Window: Verify Migration

**[Created:** 13/01/2023 - **Updated:** 13/01/2023 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/VerifyMigration-Window_iDempiere_v12.0.0.png)

### Tab: Verify Migration Process

**[Created:** 13/01/2023 - **Updated:** 13/01/2023 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Verify Migration Process - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Updated | Date this record was updated | The Updated field indicates the date that this record was updated. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).Updated<small> timestamp without time zone <br/> Date+Time</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Error Msg |  |  | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).ErrorMsg<small> character varying(2000) <br/> String</small> | 
| Result | Result of the action taken | The Result indicates the result of any action taken on this request. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).Result<small> numeric(10) <br/> Integer</small> | 
| Session | User Session Online or Web | Online or Web Session Information | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_Session_ID<small> numeric(10) <br/> Search</small> | 
| Processing |  |  | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).IsProcessing<small> character(1) <br/> Yes-No</small> | 
| Run as Job |  |  | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).IsRunAsJob<small> character(1) <br/> Yes-No</small> | 
| Notification Type | Type of Notifications | Emails or Notification sent out for Request Updates, etc. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).NotificationType<small> character varying(2) <br/> List</small> | 


### Tab: Verify Migration

**[Created:** 13/01/2023 - **Updated:** 13/01/2023 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Verify Migration - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process Instance | Instance of the process |  | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).AD_PInstance_ID<small> numeric(10) <br/> Search</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Priority | Priority of a document | The Priority indicates the importance (high, medium, low) of this document | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).PriorityRule<small> character(1) <br/> List</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| Change Log | Log of data changes | Log of data changes | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).AD_ChangeLog_ID<small> numeric(10) <br/> Search</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).Help<small> character varying(2000) <br/> String</small> | 
| Expected Value |  |  | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).ExpectedValue<small> character varying(4000) <br/> String</small> | 
| Current Value |  |  | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).CurrentValue<small> character varying(4000) <br/> String</small> | 
| Note | Note for manual entry | The Note allows for entry for additional information regarding a manual entry. | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).ManualNote<small> character varying(4000) <br/> String</small> | 
| Ignore |  |  | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).IsIgnore<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_verifymigration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_verifymigration.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 


