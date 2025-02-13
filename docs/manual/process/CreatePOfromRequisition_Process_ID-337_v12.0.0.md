# Process: Create PO from Requisition 

**[Created:** 24/10/2005 - **Updated:** 25/10/2005 **]**  
**Description:** Create Purchase Orders from Requisitions  
**Help:** Create Purchase orders from Purchase Requisitions.  
**Class:** [org.compiere.process.RequisitionPOCreate](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/RequisitionPOCreate.html)

![](/img/docs/manual/CreatePOfromRequisition-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Requisition | Material Requisition |  | M_Requisition_ID<br/>Table Direct | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | AD_Org_ID<br/>Table Direct | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | M_Warehouse_ID<br/>Table Direct | 
| Document Date | Date of the Document | The Document Date indicates the date the document was generated.  It may or may not be the same as the accounting date. | DateDoc<br/>Date | 
| Date Required | Date when required |  | DateRequired<br/>Date | 
| Priority | Priority of a document | The Priority indicates the importance (high, medium, low) of this document | PriorityRule<br/>List | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | AD_User_ID<br/>Search | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Search | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | M_Product_Category_ID<br/>Table Direct | 
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | C_BP_Group_ID<br/>Table Direct | 
| Consolidate to one Document | Consolidate Lines into one Document |  | ConsolidateDocument<br/>Yes-No | 


