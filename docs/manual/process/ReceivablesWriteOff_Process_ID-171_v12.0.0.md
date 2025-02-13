# Process: Receivables Write-Off 

**[Created:** 14/11/2001 - **Updated:** 27/11/2005 **]**  
**Description:** Write off open receivables  
**Help:** Write-off receivables causes the invoices selected by the criteria to be marked as paid and the open invoice amount to be written off.  Alternatively you can create payments.  
**Class:** [org.compiere.process.InvoiceWriteOff](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/InvoiceWriteOff.html)

![](/img/docs/manual/ReceivablesWriteOff-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Search | 
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | C_BP_Group_ID<br/>Table Direct | 
| Invoice | Invoice Identifier | The Invoice Document. | C_Invoice_ID<br/>Search | 
| Maximum write-off per Invoice | Maximum invoice amount to be written off in invoice currency |  | MaxInvWriteOffAmt<br/>Amount | 
| AP - AR | Include Receivables and/or Payables transactions |  | APAR<br/>List | 
| Date Invoiced | Date printed on Invoice | The Date Invoice indicates the date printed on the invoice. | DateInvoiced<br/>Date | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | DateAcct<br/>Date | 
| Create Payment |  |  | CreatePayment<br/>Yes-No | 
| Bank Account | Account at the Bank | The Bank Account identifies an account at this Bank. | C_BankAccount_ID<br/>Table Direct | 
| Simulation | Performing the function is only simulated |  | IsSimulation<br/>Yes-No | 


