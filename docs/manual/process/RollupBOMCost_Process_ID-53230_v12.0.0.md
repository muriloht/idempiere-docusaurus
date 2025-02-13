# Process: Rollup BOM Cost 

**[Created:** 27/07/2011 - **Updated:** 27/07/2011 **]**  
**Description:** Rollup BOM cost  
**Help:** Rollup BOM costs from the lowest level recursively.  
**Class:** [org.compiere.process.RollUpCosts](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/RollUpCosts.html)

![](/img/docs/manual/RollupBOMCost-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | M_Product_Category_ID<br/>Table Direct | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Search | 
| Cost Element | Product Cost Element |  | M_CostElement_ID<br/>Table Direct | 


