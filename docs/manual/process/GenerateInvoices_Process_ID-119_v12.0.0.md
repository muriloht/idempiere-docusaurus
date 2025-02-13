# Process: Generate Invoices 

**[Created:** 26/04/2000 - **Updated:** 02/01/2000 **]**  
**Description:** Generate and print Invoices from open Orders  
**Help:** Invoices for open Orders are created based on the invoice rule of the Order.If several Orders of a business partner have the same bill location, the orders can be consolidated into one Invoice.  
**Class:** [org.compiere.process.InvoiceGenerate](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/InvoiceGenerate.html)

![](/img/docs/manual/GenerateInvoices-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Date Invoiced | Date printed on Invoice | The Date Invoice indicates the date printed on the invoice. | DateInvoiced<br/>Date | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | AD_Org_ID<br/>Table | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | C_Order_ID<br/>Table Direct | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Table Direct | 
| Document Action | The targeted status of the document | You find the current status in the Document Status field. The options are listed in a popup | DocAction<br/>List | 
| Consolidate to one Document | Consolidate Lines into one Document |  | ConsolidateDocument<br/>Yes-No | 
| Minimum Amt | Minimum Amount in Document Currency |  | MinimumAmt<br/>Amount | 
| Shipment/Receipt | Material Shipment Document | The Material Shipment / Receipt | M_InOut_ID<br/>Search | 


