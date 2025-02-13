# Report: Order Detail

**[Created:** 27/08/2005 - **Updated:** 27/08/2005 **]**  
**Description:** Order Detail Report  
**Help:** The report includes order detail information including lost sales.  The report can be used for Sales and Purchasing.  

![](/img/docs/manual/OrderDetail-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | C_DocType_ID<br/>Chosen Multiple Selection Table | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Chosen Multiple Selection Search | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Chosen Multiple Selection Search | 
| Date Ordered | Date of Order | Indicates the Date an item was ordered. | DateOrdered<br/>Date | 


