# Window: Online Transaction History

**[Created:** 30/10/2012 - **Updated:** 30/10/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/OnlineTransactionHistory-Window_iDempiere_v12.0.0.png)

### Tab: Online Transaction History

**[Created:** 30/10/2012 - **Updated:** 01/11/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Online Transaction History - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_onlinetrxhistory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_onlinetrxhistory.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_onlinetrxhistory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_onlinetrxhistory.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [c_onlinetrxhistory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_onlinetrxhistory.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [c_onlinetrxhistory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_onlinetrxhistory.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [c_onlinetrxhistory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_onlinetrxhistory.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_onlinetrxhistory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_onlinetrxhistory.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Text Message | Text Message |  | [c_onlinetrxhistory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_onlinetrxhistory.html).TextMsg<small> character varying(2000) <br/> Text</small> | 
| Error | An Error occurred in the execution |  | [c_onlinetrxhistory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_onlinetrxhistory.html).IsError<small> character(1) <br/> Yes-No</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [c_onlinetrxhistory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_onlinetrxhistory.html).Processed<small> character(1) <br/> Yes-No</small> | 


