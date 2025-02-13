# Report: Replenish Report

**[Created:** 27/07/2011 - **Updated:** 10/04/2023 **]**  
**Description:** Inventory Replenish Report  
**Help:** Report lists products to be replenished. Note that a product can have only one current vendor. If there are more then vendor per product, both records are reset.  You need to select a current vendor manually.Movements are only created, if a sourcing warehouse is defined for the warehouse to be replenished.  

![](/img/docs/manual/ReplenishReport-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | M_Warehouse_ID<br/>Table Direct | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Table | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | M_Product_Category_ID<br/>Table Direct | 
| Is Kanban |  |  | IsKanban<br/>List | 
| Create | Create from Replenishment |  | ReplenishmentCreate<br/>List | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | C_DocType_ID<br/>Table Direct | 


