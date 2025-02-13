# Report: Product Cost

**[Created:** 25/07/2005 - **Updated:** 26/07/2005 **]**  
**Description:** Product Cost Report  
**Help:** The Product Cost  report lists the product costs for the product, cost type and cost element  

![](/img/docs/manual/ProductCost-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | C_AcctSchema_ID<br/>Table Direct | 
| Cost Type | Type of Cost (e.g. Current, Plan, Future) | You can define multiple cost types. A cost type selected in an Accounting Schema is used for accounting. | M_CostType_ID<br/>Table Direct | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | M_Product_Category_ID<br/>Chosen Multiple Selection Table | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Chosen Multiple Selection Search | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | Value<br/>String | 
| Cost Element | Product Cost Element |  | M_CostElement_ID<br/>Table Direct | 


