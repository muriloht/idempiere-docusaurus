# Report: Invoice Detail and Margin

**[Created:** 27/01/2001 - **Updated:** 08/12/2023 **]**  
**Description:** Invoice (Line) Detail and Margin Report  
**Help:** The Report lists Customer and Vendor Invoice Details with Margines.  

![](/img/docs/manual/InvoiceDetailandMargin-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | C_BP_Group_ID<br/>Chosen Multiple Selection Table | 
| Business Partner  | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Chosen Multiple Selection Search | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | M_Product_Category_ID<br/>Chosen Multiple Selection Table | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Chosen Multiple Selection Search | 
| Date Invoiced | Date printed on Invoice | The Date Invoice indicates the date printed on the invoice. | DateInvoiced<br/>Date | 
| Sales Transaction | This is a Sales Transaction | The Sales Transaction checkbox indicates if this item is a Sales Transaction. | IsSOTrx<br/>List | 


