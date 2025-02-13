# Process: Verify BOM Structure 

**[Created:** 27/07/2011 - **Updated:** 27/07/2011 **]**  
**Description:** Verify BOM for correctness  
**Help:** The Verify BOM process checks for circular BOMs (unsupported).  
**Class:** [org.compiere.process.BOMVerify](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/BOMVerify.html)

![](/img/docs/manual/VerifyBOMStructure-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Search | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | M_Product_Category_ID<br/>Table Direct | 
| Re-Validate | Re-Validate entries |  | IsReValidate<br/>Yes-No | 


