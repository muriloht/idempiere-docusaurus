# Process: Issue to Project 

**[Created:** 02/09/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Issue Material to Project from Receipt or manual Inventory Location  
**Help:** Select a Project and either- Material Receipt- Expense Report&lt;br&lt;- Inventory Location and Project Line not issued yet- Inventory Location, Product and QuantityThe default Movement Date is today&#x27;s date.  
**Class:** [org.compiere.process.ProjectIssue](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/ProjectIssue.html)

![](/img/docs/manual/IssuetoProject-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Project | Financial Project | A Project allows you to track and control internal or external activities. | C_Project_ID<br/>Table Direct | 
| Shipment/Receipt | Material Shipment Document | The Material Shipment / Receipt | M_InOut_ID<br/>Search | 
| Expense Report | Time and Expense Report |  | S_TimeExpense_ID<br/>Table Direct | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | M_Locator_ID<br/>Locator (WH) | 
| Project Line | Task or step in a project | The Project Line indicates a unique project line. | C_ProjectLine_ID<br/>Table Direct | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Search | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | M_AttributeSetInstance_ID<br/>Product Attribute | 
| Movement Quantity | Quantity of a product moved. | The Movement Quantity indicates the quantity of a product that has been moved. | MovementQty<br/>Quantity | 
| Movement Date | Date a product was moved in or out of inventory | The Movement Date indicates the date that a product moved in or out of inventory.  This is the result of a shipment, receipt or inventory movement. | MovementDate<br/>Date | 
| Description | Optional short description of the record | A description is limited to 255 characters. | Description<br/>String | 


