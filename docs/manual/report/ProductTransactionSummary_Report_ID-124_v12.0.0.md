# Report: Product Transaction Summary

**[Created:** 11/05/2000 - **Updated:** 02/01/2000 **]**  
**Description:** Product Transaction Summary  
**Help:** The report shows transaction summary for stored products  

![](/img/docs/manual/ProductTransactionSummary-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Movement Date | Date a product was moved in or out of inventory | The Movement Date indicates the date that a product moved in or out of inventory.  This is the result of a shipment, receipt or inventory movement. | MovementDate<br/>Date | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | M_Warehouse_ID<br/>Chosen Multiple Selection Table | 
| Movement Type | Method of moving the inventory | The Movement Type indicates the type of movement (in, out, to production, etc) | MovementType<br/>Chosen Multiple Selection List | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Chosen Multiple Selection Search | 


