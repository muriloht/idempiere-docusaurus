# Report: Invoice Not Realized Gain/Loss

**[Created:** 30/05/2005 - **Updated:** 19/12/2005 **]**  
**Description:** Invoice Not Realized Gain &amp; Loss Report  
**Help:** The Report lists not fully paid invoices with open amount, the GL amounts and the revalued amounts.  If an invoice is partially paid, the percentage of the open amount is used to calculate the revaluation amount.If you select a currency, only invoices of that currency are included; if you select Include All Currencies, all invoices are included and you can use the report to reconcile your AP/AR accounts.If you select a GL Document Type, a GL Journal is created. Note that the report only includes posted invoices.  

![](/img/docs/manual/InvoiceNotRealizedGainLoss-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | C_AcctSchema_ID<br/>Table Direct | 
| Revaluation Conversion Type | Revaluation Currency Conversion Type |  | C_ConversionTypeReval_ID<br/>Table | 
| Revaluation Date | Date of Revaluation |  | DateReval<br/>Date | 
| AP - AR | Include Receivables and/or Payables transactions |  | APAR<br/>List | 
| Include All Currencies | Report not just foreign currency Invoices |  | IsAllCurrencies<br/>Yes-No | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | C_Currency_ID<br/>Table Direct | 
| Revaluation Document Type | Document Type for Revaluation Journal |  | C_DocTypeReval_ID<br/>Table | 


