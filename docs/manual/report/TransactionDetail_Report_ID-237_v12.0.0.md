# Report: Transaction Detail

**[Created:** 04/12/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Transaction Detail Report  
**Help:** The report shows transaction details (receipts, shipments, inventory, movements, ...) including product instance (Lot, Serial No) info  

![](/img/docs/manual/TransactionDetail-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Movement Type | Method of moving the inventory | The Movement Type indicates the type of movement (in, out, to production, etc) | MovementType<br/>List | 
| Movement Date | Date a product was moved in or out of inventory | The Movement Date indicates the date that a product moved in or out of inventory.  This is the result of a shipment, receipt or inventory movement. | MovementDate<br/>Date | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | M_Product_Category_ID<br/>Chosen Multiple Selection Table | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Chosen Multiple Selection Search | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | M_Locator_ID<br/>Locator (WH) | 
| Lot | Product Lot Definition | The individual Lot of a Product | M_Lot_ID<br/>Search | 
| Lot No | Lot number (alphanumeric) | The Lot Number indicates the specific lot that a product was part of. | Lot<br/>String | 
| Serial No | Product Serial Number | The Serial Number identifies a tracked, warranted product.  It can only be used when the quantity is 1. | SerNo<br/>String | 


