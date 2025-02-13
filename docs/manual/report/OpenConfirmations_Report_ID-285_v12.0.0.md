# Report: Open Confirmations

**[Created:** 18/05/2004 - **Updated:** 02/01/2000 **]**  
**Description:** Open Shipment or Receipt Confirmations  
**Help:** The report lists the open confirmations  

![](/img/docs/manual/OpenConfirmations-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | M_Warehouse_ID<br/>Table Direct | 
| Confirmation Type | Type of confirmation |  | ConfirmType<br/>List | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Chosen Multiple Selection Search | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | C_Order_ID<br/>Search | 


