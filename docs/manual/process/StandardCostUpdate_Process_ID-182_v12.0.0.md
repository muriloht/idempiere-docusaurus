# Process: Standard Cost Update 

**[Created:** 21/02/2002 - **Updated:** 10/03/2022 **]**  
**Description:** Set standard and future cost price  
**Help:** For Standard Costs you can set/recalculate the current or future cost price (for the cost type of the accounting schema). If the Costing Level of the Accounting Schema is set to Tenant, missing cost records are created. The historical costs are calculated based on the accumulated amount/quantity of the costing method.  
**Class:** [org.compiere.process.CostUpdate](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/CostUpdate.html)

![](/img/docs/manual/StandardCostUpdate-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | M_Product_Category_ID<br/>Table Direct | 
| Set Standard Cost to | Set new Standard Costs to the selection |  | SetStandardCostTo<br/>List | 
| Set Future Costs to | Set the Future costs to the selection |  | SetFutureCostTo<br/>List | 
| Pricelist Version | Only used if Price List is used to set future/standard cost price |  | M_PriceList_Version_ID<br/>Table Direct | 
| Document Type | Inventory Cost Adjustment Document Type |  | C_DocType_ID<br/>Table | 


