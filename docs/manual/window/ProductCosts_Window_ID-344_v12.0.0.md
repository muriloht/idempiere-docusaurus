# Window: Product Costs

**[Created:** 24/04/2005 - **Updated:** 26/07/2005 **]**  
**Description:** Maintain Product Costs  
**Help:** Maintain Product Cost Elements  
![](/img/docs/manual/ProductCosts-Window_iDempiere_v12.0.0.png)

### Tab: Select Product

**[Created:** 24/04/2005 - **Updated:** 26/07/2005 **]**   
**Description:** Select the product  
**Help:**   
**Tab Level:** 0

Table 10: Select Product - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Value<small> character varying(510) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Help<small> character varying(2000) <br/> Text</small> | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).M_Product_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product Type | Type of product | The type of product also determines accounting consequences. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).ProductType<small> character(1) <br/> List</small> | 
| UPC/EAN | Bar Code (Universal Product Code or its superset European Article Number) | Use this field to enter the bar code for the product in any of the bar code symbologies (Codabar, Code 25, Code 39, Code 93, Code 128, UPC (A), UPC (E), EAN-13, EAN-8, ITF, ITF-14, ISBN, ISSN, JAN-13, JAN-8, POSTNET and FIM, MSI/Plessey, and Pharmacode) | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).UPC<small> character varying(30) <br/> String</small> | 
| SKU | Stock Keeping Unit | The SKU indicates a user defined stock keeping unit.  It may be used for an additional bar code symbols or your own schema. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).SKU<small> character varying(30) <br/> String</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Stocked | Organization stocks this product | The Stocked check box indicates if this product is stocked by this Organization. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsStocked<small> character(1) <br/> Yes-No</small> | 
| Company Agent | Purchase or Company Agent | Purchase agent for the document. Any Sales Rep must be a valid internal user. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 


### Tab: Product Costs

**[Created:** 24/04/2005 - **Updated:** 13/09/2005 **]**   
**Description:** Maintain Product Costs  
**Help:**   
**Tab Level:** 1

Table 20: Product Costs - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Cost Type | Type of Cost (e.g. Current, Plan, Future) | You can define multiple cost types. A cost type selected in an Accounting Schema is used for accounting. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).M_CostType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Cost Element | Product Cost Element |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).M_CostElement_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).Description<small> character varying(255) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Current Cost Price | The currently used cost price |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).CurrentCostPrice<small> numeric <br/> Costs+Prices</small> | 
| Current Cost Price Lower Level | Current Price Lower Level Is the sum of the costs of the components of this product manufactured for this level. | Current Price Lower Level is used for get the total costs for lower level the a product manufactured.The Current Price Lower Level always will be calculated.You can see the Current Cost Price and Current Cost Price Lower Level with Cost  Bill of Material &amp; Formula Detail Report. The sum the Current Cost Price + Current Cost Price Lower Level is the total cost to a product manufactured. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).CurrentCostPriceLL<small> numeric <br/> Costs+Prices</small> | 
| Future Cost Price |  |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).FutureCostPrice<small> numeric <br/> Costs+Prices</small> | 
| Future Cost Price Lower Level |  |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).FutureCostPriceLL<small> numeric <br/> Costs+Prices</small> | 
| Percent | Percentage | The Percent indicates the percentage used. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).Percent<small> numeric(10) <br/> Integer</small> | 
| Current Quantity | Current Quantity |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).CurrentQty<small> numeric <br/> Quantity</small> | 
| Cost Frozen | Indicated that the Standard Cost is frozen |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).IsCostFrozen<small> character(1) <br/> Yes-No</small> | 
| Accumulated Amt | Total Amount | Sum of all amounts | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).CumulatedAmt<small> numeric <br/> Amount</small> | 
| Accumulated Qty | Total Quantity | Sum of the quantities | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).CumulatedQty<small> numeric <br/> Quantity</small> | 


### Tab: Cost Movement

**[Created:** 08/03/2012 - **Updated:** 23/07/2013 **]**   
**Description:** Show movement of cost by transaction  
**Help:**   
**Tab Level:** 2

Table 30: Cost Movement - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Cost Type | Type of Cost (e.g. Current, Plan, Future) | You can define multiple cost types. A cost type selected in an Accounting Schema is used for accounting. | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).M_CostType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Cost Element | Product Cost Element |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).M_CostElement_ID<small> numeric(10) <br/> Table Direct</small> | 
| Cost Detail | Cost Detail Information |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).M_CostDetail_ID<small> numeric(10) <br/> Search</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).Qty<small> numeric <br/> Quantity</small> | 
| Amount | Amount | Amount | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).Amt<small> numeric <br/> Amount</small> | 
| Delta Amount | Difference Amount |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).DeltaAmt<small> numeric <br/> Amount</small> | 
| Delta Quantity | Quantity Difference |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).DeltaQty<small> numeric <br/> Quantity</small> | 
| Old Current Quantity | Old current quantity before the processing of M_CostDetail |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).OldQty<small> numeric <br/> Quantity</small> | 
| Old Current Cost Price | Old current cost price before the processing of M_CostDetail |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).OldCostPrice<small> numeric <br/> Costs+Prices</small> | 
| Old Accumulated Qty | Old accumulated qty before the processing of M_CostDetail |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).OldCQty<small> numeric <br/> Quantity</small> | 
| Old Accumulated Amt | Old accumulated amt before the processing of M_CostDetail |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).OldCAmt<small> numeric <br/> Amount</small> | 
| New Current Quantity | New current quantity after processing of M_CostDetail |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).NewQty<small> numeric <br/> Quantity</small> | 
| New Cost Price | New current cost price after processing of M_CostDetail |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).NewCostPrice<small> numeric <br/> Costs+Prices</small> | 
| New Accumulated Qty | New Accumulated Qty after processing of M_CostDetail |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).NewCQty<small> numeric <br/> Quantity</small> | 
| New Accumulated Amt | Accumulated Amt after processing of M_CostDetail |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).NewCAmt<small> numeric <br/> Amount</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).Description<small> character varying(255) <br/> String</small> | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).DateAcct<small> timestamp without time zone <br/> Date</small> | 
| Back-Date |  |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).IsBackDate<small> character(1) <br/> Yes-No</small> | 
| Back-Date Processed On | The date+time (expressed in decimal format) when the document has been processed | The ProcessedOn Date+Time save the exact moment (nanoseconds precision if allowed by the DB) when a document has been processed. | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).BackDateProcessedOn<small> timestamp without time zone <br/> Date+Time</small> | 
| Move Line | Inventory Move document Line | The Movement Line indicates the inventory movement document line (if applicable) for this transaction | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).M_MovementLine_ID<small> numeric(10) <br/> Search</small> | 
| Invoice Line | Invoice Detail Line | The Invoice Line uniquely identifies a single line of an Invoice. | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).C_InvoiceLine_ID<small> numeric(10) <br/> Search</small> | 
| Phys.Inventory Line | Unique line in an Inventory document | The Physical Inventory Line indicates the inventory document line (if applicable) for this transaction | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).M_InventoryLine_ID<small> numeric(10) <br/> Search</small> | 
| Production Line | Document Line representing a production | The Production Line indicates the production document line (if applicable) for this transaction | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).M_ProductionLine_ID<small> numeric(10) <br/> Search</small> | 
| Project Issue | Project Issues (Material, Labor) | Issues to the project initiated by the &quot;Issue to Project&quot; process. You can issue Receipts, Time and Expenses, or Stock. | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).C_ProjectIssue_ID<small> numeric(10) <br/> Search</small> | 
| Purchase Order Line | Purchase Order Line | The Purchase Order Line is a unique identifier for a line in an order. | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).C_OrderLine_ID<small> numeric(10) <br/> Search</small> | 
| Receipt Line | Line on Receipt document |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).M_InOutLine_ID<small> numeric(10) <br/> Search</small> | 
| Match Invoice | Match Shipment/Receipt to Invoice |  | [m_costmovement_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costmovement_v.html).M_MatchInv_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Cost Details

**[Created:** 26/07/2005 - **Updated:** 08/03/2012 **]**   
**Description:** View Product Cost Details  
**Help:**   
**Tab Level:** 1

Table 40: Cost Details - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Cost Element | Product Cost Element |  | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).M_CostElement_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).Qty<small> numeric <br/> Quantity</small> | 
| Amount | Amount | Amount | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).Amt<small> numeric <br/> Amount</small> | 
| Delta Quantity | Quantity Difference |  | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).DeltaQty<small> numeric <br/> Quantity</small> | 
| Delta Amount | Difference Amount |  | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).DeltaAmt<small> numeric <br/> Amount</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).Description<small> character varying(255) <br/> String</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).DateAcct<small> timestamp without time zone <br/> Date</small> | 
| Back-Date |  |  | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).IsBackDate<small> character(1) <br/> Yes-No</small> | 
| Purchase Order Line | Purchase Order Line | The Purchase Order Line is a unique identifier for a line in an order. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).C_OrderLine_ID<small> numeric(10) <br/> Search</small> | 
| Invoice Line | Invoice Detail Line | The Invoice Line uniquely identifies a single line of an Invoice. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).C_InvoiceLine_ID<small> numeric(10) <br/> Search</small> | 
| Receipt Line | Line on Receipt document |  | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).M_InOutLine_ID<small> numeric(10) <br/> Search</small> | 
| Move Line | Inventory Move document Line | The Movement Line indicates the inventory movement document line (if applicable) for this transaction | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).M_MovementLine_ID<small> numeric(10) <br/> Search</small> | 
| Phys.Inventory Line | Unique line in an Inventory document | The Physical Inventory Line indicates the inventory document line (if applicable) for this transaction | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).M_InventoryLine_ID<small> numeric(10) <br/> Search</small> | 
| Project Issue | Project Issues (Material, Labor) | Issues to the project initiated by the &quot;Issue to Project&quot; process. You can issue Receipts, Time and Expenses, or Stock. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).C_ProjectIssue_ID<small> numeric(10) <br/> Search</small> | 
| Production Line | Document Line representing a production | The Production Line indicates the production document line (if applicable) for this transaction | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).M_ProductionLine_ID<small> numeric(10) <br/> Search</small> | 
| Sales Transaction | This is a Sales Transaction | The Sales Transaction checkbox indicates if this item is a Sales Transaction. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).IsSOTrx<small> character(1) <br/> Yes-No</small> | 
| Referenced Cost Detail |  |  | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).Ref_CostDetail_ID<small> numeric(10) <br/> ID</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Back-Date Processed On | The date+time (expressed in decimal format) when the document has been processed | The ProcessedOn Date+Time save the exact moment (nanoseconds precision if allowed by the DB) when a document has been processed. | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).BackDateProcessedOn<small> timestamp without time zone <br/> Date+Time</small> | 
| Current Cost Price | The currently used cost price |  | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).CurrentCostPrice<small> numeric <br/> Costs+Prices</small> | 
| Current Quantity | Current Quantity |  | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).CurrentQty<small> numeric <br/> Quantity</small> | 
| Accumulated Amt | Total Amount | Sum of all amounts | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).CumulatedAmt<small> numeric <br/> Amount</small> | 
| Accumulated Qty | Total Quantity | Sum of the quantities | [m_costdetail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costdetail.html).CumulatedQty<small> numeric <br/> Quantity</small> | 


### Tab: Cost Queue

**[Created:** 18/09/2005 - **Updated:** 08/03/2012 **]**   
**Description:** Cost Queue for Lifo/Fifo  
**Help:** Note thet the cost queue may not be the same as the physical movement cost queue due to differences in costing level and warehouse priority.  
**Tab Level:** 1

Table 50: Cost Queue - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_costqueue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costqueue.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_costqueue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costqueue.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [m_costqueue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costqueue.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Cost Type | Type of Cost (e.g. Current, Plan, Future) | You can define multiple cost types. A cost type selected in an Accounting Schema is used for accounting. | [m_costqueue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costqueue.html).M_CostType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Cost Element | Product Cost Element |  | [m_costqueue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costqueue.html).M_CostElement_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_costqueue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costqueue.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_costqueue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costqueue.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Current Cost Price | The currently used cost price |  | [m_costqueue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costqueue.html).CurrentCostPrice<small> numeric <br/> Costs+Prices</small> | 
| Current Quantity | Current Quantity |  | [m_costqueue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costqueue.html).CurrentQty<small> numeric <br/> Quantity</small> | 


