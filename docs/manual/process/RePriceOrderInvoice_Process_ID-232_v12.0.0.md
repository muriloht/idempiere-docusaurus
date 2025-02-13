# Process: RePrice Order/Invoice 

**[Created:** 04/10/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Recalculate the price based on the latest price list version of an open order or invoice  
**Help:**   
**Class:** [org.compiere.process.OrderRePrice](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/OrderRePrice.html)

![](/img/docs/manual/RePriceOrderInvoice-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | C_Order_ID<br/>Table Direct | 
| Invoice | Invoice Identifier | The Invoice Document. | C_Invoice_ID<br/>Table Direct | 


