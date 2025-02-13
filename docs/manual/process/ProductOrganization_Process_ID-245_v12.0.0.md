# Process: Product Organization 

**[Created:** 23/12/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Set and verify Organization ownership of Products  
**Help:** The process allows you to change or verify the organization ownership of Products and its dependent entities (BOM, Substitute, Replenish, Purchasing, Business Partner Info, Costing). Select either a Product Category ar a specific Product.  
**Class:** [org.compiere.process.OrgOwnership](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/OrgOwnership.html)

![](/img/docs/manual/ProductOrganization-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | AD_Org_ID<br/>Table Direct | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | M_Product_Category_ID<br/>Table Direct | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Search | 


