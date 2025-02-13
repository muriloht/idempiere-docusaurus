# Process: Quote convert 

**[Created:** 04/10/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Convert open Proposal or Quotation to Order  
**Help:** You can convert a Proposal or Quotation to any other Order document type. You would use this process, if you want to maintain/keep the Proposal or Quotation. The document status needs to be In Process.  
**Class:** [org.compiere.process.CopyOrder](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/CopyOrder.html)

![](/img/docs/manual/Quoteconvert-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | C_Order_ID<br/>Table Direct | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | C_DocType_ID<br/>Table Direct | 
| Document Date | Date of the Document | The Document Date indicates the date the document was generated.  It may or may not be the same as the accounting date. | DateDoc<br/>Date | 
| Close Document | Close Document (process) |  | IsCloseDocument<br/>Yes-No | 


