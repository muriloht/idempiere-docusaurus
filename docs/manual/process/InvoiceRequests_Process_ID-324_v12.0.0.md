# Process: Invoice Requests 

**[Created:** 19/05/2005 - **Updated:** 19/05/2005 **]**  
**Description:** Create Invoice for Requests  
**Help:** Create invoice for Request Type with optional Request Group, Category for Business Partner.  If the used product for invoicing is not defined, the product defined in the parameter is used.  
**Class:** [org.compiere.process.RequestInvoice](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/RequestInvoice.html)

![](/img/docs/manual/InvoiceRequests-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Request Type | Type of request (e.g. Inquiry, Complaint, ..) | Request Types are used for processing and categorizing requests. Options are Account Inquiry, Warranty Issue, etc. | R_RequestType_ID<br/>Table Direct | 
| Group | Request Group | Group of requests (e.g. version numbers, responsibility, ...) | R_Group_ID<br/>Table Direct | 
| Category | Request Category | Category or Topic of the Request | R_Category_ID<br/>Table Direct | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Search | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Search | 


