# Process: Migrate ID 

**[Created:** 14/03/2019 - **Updated:** 14/03/2019 **]**  
**Description:** Process to migrate an ID or a UUID  
**Help:**   
**Class:** [org.idempiere.process.MigraID](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/idempiere/process/MigraID.html)

![](/img/docs/manual/MigrateID-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Table | Database Table information | The Database Table provides the information of the table definition | AD_Table_ID<br/>Search | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | Record_ID<br/>Integer | 
| To Record ID |  |  | To_Record_ID<br/>Integer | 
| Source UUID | UUID from the source tenant |  | Source_UUID<br/>String | 
| Target UUID | New UUID created by the pack in tenant |  | Target_UUID<br/>String | 


