# Report: Open Items (Aging)

**[Created:** 03/01/2001 - **Updated:** 08/12/2023 **]**  
**Description:** Open Items (Invoice and Aging) List  
**Help:** Displays all unpaid invoices for a given Business Partner and date range.  

![](/img/docs/manual/OpenItemsAging-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Business Partner  | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Chosen Multiple Selection Search | 
| Sales Transaction | This is a Sales Transaction | The Sales Transaction checkbox indicates if this item is a Sales Transaction. | IsSOTrx<br/>Yes-No | 
| Days due | Number of days due (negative: due in number of days) |  | DaysDue<br/>Number | 
| Collection Status | Invoice Collection Status | Status of the invoice collection process | InvoiceCollectionType<br/>Chosen Multiple Selection List | 


