# Report: Invoice Transactions (Doc)

**[Created:** 27/01/2001 - **Updated:** 18/09/2019 **]**  
**Description:** Invoice Transactions by Invoice Date  
**Help:** The report lists the invoice transactions by invoice date  

![](/img/docs/manual/InvoiceTransactionsDoc-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | AD_Org_ID<br/>Chosen Multiple Selection Table | 
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | C_BP_Group_ID<br/>Chosen Multiple Selection Table | 
| Business Partner  | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Chosen Multiple Selection Search | 
| Date Invoiced | Date printed on Invoice | The Date Invoice indicates the date printed on the invoice. | DateInvoiced<br/>Date | 
| Payment Rule | How you pay the invoice | The Payment Rule indicates the method of invoice payment. | PaymentRule<br/>Chosen Multiple Selection List | 
| Sales Transaction | This is a Sales Transaction | The Sales Transaction checkbox indicates if this item is a Sales Transaction. | IsSOTrx<br/>Yes-No | 


