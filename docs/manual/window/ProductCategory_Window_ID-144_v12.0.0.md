# Window: Product Category

**[Created:** 09/08/1999 - **Updated:** 24/07/2005 **]**  
**Description:** Maintain Product Categories  
**Help:** The Product Category allows you to define different groups of products.  These groups can be used in generating Price Lists, defining margins and for easily assigning different accounting parameters for products.  
![](/img/docs/manual/ProductCategory-Window_iDempiere_v12.0.0.png)

### Tab: Product Category

**[Created:** 09/08/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define Product Category  
**Help:** The Product Category defines unique groupings of products.  Product categories can be used in building price lists.  
**Tab Level:** 0

Table 10: Product Category - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).Description<small> character varying(255) <br/> String</small> | 
| Parent Product Category |  |  | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).M_Product_Category_Parent_ID<small> numeric(10) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Material Policy | Material Movement Policy | The Material Movement Policy determines how the stock is flowing (FiFo or LiFo) if a specific Product Instance was not selected.  The policy can not contradict the costing method (e.g. FiFo movement policy and LiFo costing method). | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).MMPolicy<small> character(1) <br/> List</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 
| Planned Margin % | Project&#x27;s planned margin as a percentage | The Planned Margin Percentage indicates the anticipated margin percentage for this project or project line | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).PlannedMargin<small> numeric <br/> Number</small> | 
| Asset Group | Group of Assets | The group of assets determines default accounts.  If an asset group is selected in the product category, assets are created when delivering the asset. | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).A_Asset_Group_ID<small> numeric(10) <br/> Table Direct</small> | 
| Print Color | Color used for printing and display | Colors used for printing and display | [m_product_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category.html).AD_PrintColor_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Accounting

**[Created:** 18/12/2000 - **Updated:** 05/03/2013 **]**   
**Description:** Accounting Parameters  
**Help:** The Accounting Tab defines default accounting parameters.  Any product that uses a product category can inherit its default accounting parameters.  If the Costing method is not defined, the default costing method of the accounting schema is used.  
**Tab Level:** 1

Table 20: Accounting - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).M_Product_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Costing Method | Indicates how Costs will be calculated | The Costing Method indicates how costs will be calculated (Standard, Average, Lifo, FiFo).  The default costing method is defined on accounting schema level and can be optionally overwritten in the product category.  The costing method cannot conflict with the Material Movement Policy (defined on Product Category). | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).CostingMethod<small> character(1) <br/> List</small> | 
| Costing Level | The lowest level to accumulate Costing Information | If you want to maintain different costs per organization (warehouse) or per Batch/Lot, you need to make sure that you define the costs for each of the organizations or batch/lot. The Costing Level is defined per Accounting Schema and can be overwritten by Product Category and Accounting Schema. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).CostingLevel<small> character(1) <br/> List</small> | 
| Product Asset | Account for Product Asset (Inventory) | The Product Asset Account indicates the account used for valuing this a product in inventory. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_Asset_Acct<small> numeric(10) <br/> Account</small> | 
| Product Expense | Account for Product Expense | The Product Expense Account indicates the account used to record expenses associated with this product. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_Expense_Acct<small> numeric(10) <br/> Account</small> | 
| Cost Adjustment | Product Cost Adjustment Account | Account used for posting product cost adjustments (e.g. landed costs) | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_CostAdjustment_Acct<small> numeric(10) <br/> Account</small> | 
| Inventory Clearing | Product Inventory Clearing Account | Account used for posting matched product (item) expenses (e.g. AP Invoice, Invoice Match).  You would use a different account then Product Expense, if you want to differentiate service related costs from item related costs. The balance on the clearing account should be zero and accounts for the timing difference between invoice receipt and matching. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_InventoryClearing_Acct<small> numeric(10) <br/> Account</small> | 
| Product COGS | Account for Cost of Goods Sold | The Product COGS Account indicates the account used when recording costs associated with this product. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_COGS_Acct<small> numeric(10) <br/> Account</small> | 
| Product Revenue | Account for Product Revenue (Sales Account) | The Product Revenue Account indicates the account used for recording sales revenue for this product. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_Revenue_Acct<small> numeric(10) <br/> Account</small> | 
| Purchase Price Variance | Difference between Standard Cost and Purchase Price (PPV) | The Purchase Price Variance is used in Standard Costing. It reflects the difference between the Standard Cost and the Purchase Order Price. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_PurchasePriceVariance_Acct<small> numeric(10) <br/> Account</small> | 
| Invoice Price Variance | Difference between Costs and Invoice Price (IPV) | The Invoice Price Variance is used reflects the difference between the current Costs and the Invoice Price. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_InvoicePriceVariance_Acct<small> numeric(10) <br/> Account</small> | 
| Trade Discount Received | Trade Discount Receivable Account | The Trade Discount Receivables Account indicates the account for received trade discounts in vendor invoices | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_TradeDiscountRec_Acct<small> numeric(10) <br/> Account</small> | 
| Trade Discount Granted | Trade Discount Granted Account | The Trade Discount Granted Account indicates the account for granted trade discount in sales invoices | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_TradeDiscountGrant_Acct<small> numeric(10) <br/> Account</small> | 
| Rate Variance | The Rate Variance account is the account used Manufacturing Order | The Rate Variance is used in Standard Costing. It reflects the difference between the Standard Cost Rates and  The Cost Rates of Manufacturing Order.If you change the Standard Rates then this variance is generate. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_RateVariance_Acct<small> numeric(10) <br/> Account</small> | 
| Average Cost Variance | Average Cost Variance | The Average Cost Variance is used in weighted average costing to reflect differences when posting costs for negative inventory. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_AverageCostVariance_Acct<small> numeric(10) <br/> Account</small> | 
| Landed Cost Clearing | Product Landed Cost Clearing Account | Account used for posting of estimated and actual landed cost amount.  The balance on the clearing account should be zero and accounts for the timing difference between material receipt and landed cost invoice. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).P_LandedCostClearing_Acct<small> numeric(10) <br/> Account</small> | 
| Copy Accounts | Copy and overwrite Accounts to Products of this category | If you copy and overwrite the current default values, you may have to repeat previous updates (e.g. set the revenue account, ...). If no Accounting Schema is selected all Accounting Schemas will be updated / inserted for products of this category. | [m_product_category_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_acct.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Assigned Products

**[Created:** 01/01/2002 - **Updated:** 02/01/2000 **]**   
**Description:** Products assigned to Product Category  
**Help:**   
**Tab Level:** 1

Table 30: Assigned Products - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).M_Product_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Value<small> character varying(510) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Name<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Discontinued | This product is no longer available | The Discontinued check box indicates a product that has been discontinued. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Discontinued<small> character(1) <br/> Yes-No</small> | 
| Product Type | Type of product | The type of product also determines accounting consequences. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).ProductType<small> character(1) <br/> List</small> | 
| Expense Type | Expense report type |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).S_ExpenseType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Resource | Resource |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).S_Resource_ID<small> numeric(10) <br/> Table Direct</small> | 
| Featured in Web Store | If selected, the product is displayed in the initial or any empty search | In the display of products in the Web Store, the product is displayed in the initial view or if no search criteria are entered. To be displayed, the product must be in the price list used. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsWebStoreFeatured<small> character(1) <br/> Yes-No</small> | 


### Tab: Translation

**[Created:** 21/03/2014 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 40: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | [m_product_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_trl.html).M_Product_Category_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [m_product_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_product_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [m_product_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_product_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_product_category_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_category_trl.html).Description<small> character varying(255) <br/> String</small> | 


