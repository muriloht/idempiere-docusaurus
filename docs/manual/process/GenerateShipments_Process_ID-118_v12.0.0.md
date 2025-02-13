# Process: Generate Shipments 

**[Created:** 26/04/2000 - **Updated:** 05/01/2005 **]**  
**Description:** Generate and print Shipments from open Orders  
**Help:** Shipments for open Orders are created based on the delivery rule of the Order and the relative order priority.  If a Promise Date is selected only orders up to (including) the date are selected.If several Orders of a business partner have the same location, the orders can be consolidated into one Shipment.You can also include orders who have outstanding confirmations (e.g. ordered=10 - not confirmed shipments=4 - would create a new shipment of 6 if available).  
**Class:** [org.compiere.process.InOutGenerate](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/InOutGenerate.html)

![](/img/docs/manual/GenerateShipments-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | M_Warehouse_ID<br/>Table Direct | 
| Shipment Date | Date printed on shipment | The Shipment Date indicates the date printed on the shipment. | MovementDate<br/>Date | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Search | 
| Date Promised | Date Order was promised | The Date Promised indicates the date, if any, that an Order was promised for. | DatePromised<br/>Date | 
| Orders with unconfirmed Shipments | Generate shipments for Orders with open delivery confirmations? | You can also include orders who have outstanding confirmations (e.g. ordered=10 - not confirmed shipments=4 - would create a new shipment of 6 if available). | IsUnconfirmedInOut<br/>Yes-No | 
| Document Action | The targeted status of the document | You find the current status in the Document Status field. The options are listed in a popup | DocAction<br/>List | 
| Consolidate to one Document | Consolidate Lines into one Document |  | ConsolidateDocument<br/>Yes-No | 
| Subtract In Progress Shipment From On Hand | Subtract In Progress Shipment From On Hand |  | SubtractOnHand<br/>Yes-No | 


