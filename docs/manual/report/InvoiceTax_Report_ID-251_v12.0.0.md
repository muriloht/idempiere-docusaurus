# Report: Invoice Tax

**[Created:** 09/01/2004 - **Updated:** 21/11/2005 **]**  
**Description:** Invoice Tax Reconciliation  
**Help:** The Report lists Invoice Tax lines with Business Partner Tax information.  

![](/img/docs/manual/InvoiceTax-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | AD_Org_ID<br/>Chosen Multiple Selection Table | 
| Date Invoiced | Date printed on Invoice | The Date Invoice indicates the date printed on the invoice. | DateInvoiced<br/>Date | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | DateAcct<br/>Date | 
| Tax | Tax identifier | The Tax indicates the type of tax used in document line. | C_Tax_ID<br/>Chosen Multiple Selection Table | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | C_DocType_ID<br/>Chosen Multiple Selection Table | 


