# Report: Shipment Details

**[Created:** 20/07/2004 - **Updated:** 02/01/2000 **]**  
**Description:** Shipment Detail Information  
**Help:** The report provides Material Shipment Header and Line with locator information.  You can use the report to create a Consolidated Picking List.  

![](/img/docs/manual/ShipmentDetails-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | M_Warehouse_ID<br/>Chosen Multiple Selection Table | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Chosen Multiple Selection Search | 
| Movement Date | Date a product was moved in or out of inventory | The Movement Date indicates the date that a product moved in or out of inventory.  This is the result of a shipment, receipt or inventory movement. | MovementDate<br/>Date | 
| Locator Key | Key of the Warehouse Locator |  | LocatorValue<br/>String | 
| Document Status | The current status of the document | The Document Status indicates the status of a document at this time.  If you want to change the document status, use the Document Action field | DocStatus<br/>Chosen Multiple Selection List | 


