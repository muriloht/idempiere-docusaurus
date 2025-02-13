# Window: Resource

**[Created:** 15/06/2002 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Resources  
**Help:** Maintain your Resources. The product for the resource is automatically created and synchronized. Update Name, Unit of Measure, etc. in the Resource and don&#x27;t change it in the product.  
![](/img/docs/manual/Resource-Window_iDempiere_v12.0.0.png)

### Tab: Resource

**[Created:** 15/06/2002 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Resources  
**Help:**   
**Tab Level:** 0

Table 10: Resource - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [s_resource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resource.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [s_resource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resource.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [s_resource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resource.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [s_resource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resource.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [s_resource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resource.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [s_resource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resource.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Resource Type |  |  | [s_resource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resource.html).S_ResourceType_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [s_resource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resource.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [s_resource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resource.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| Available | Resource is available | Resource is available for assignments | [s_resource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resource.html).IsAvailable<small> character(1) <br/> Yes-No</small> | 


### Tab: Unavailability

**[Created:** 15/06/2002 - **Updated:** 02/01/2000 **]**   
**Description:** Resource unavailability  
**Help:** Dates, when the resource is not available (e.g. vacation)  
**Tab Level:** 1

Table 20: Unavailability - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [s_resourceunavailable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceunavailable.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [s_resourceunavailable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceunavailable.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Resource | Resource |  | [s_resourceunavailable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceunavailable.html).S_Resource_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [s_resourceunavailable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceunavailable.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Date From | Starting date for a range | The Date From indicates the starting date of a range. | [s_resourceunavailable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceunavailable.html).DateFrom<small> timestamp without time zone <br/> Date</small> | 
| Date To | End date of a date range | The Date To indicates the end date of a range (inclusive) | [s_resourceunavailable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceunavailable.html).DateTo<small> timestamp without time zone <br/> Date</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [s_resourceunavailable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceunavailable.html).Description<small> character varying(255) <br/> String</small> | 


### Tab: Resource Product

**[Created:** 15/06/2002 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Product information of Resource  
**Help:** The product for the resource is automatically created and synchronized. Update Name, Unit of Measure, etc. in the Resource and don&#x27;t change it in the product.  
**Tab Level:** 1

Table 30: Resource Product - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Value<small> character varying(510) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Help<small> character varying(2000) <br/> Text</small> | 
| Document Note | Additional information for a Document | The Document Note is used for recording any additional information regarding this product. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).DocumentNote<small> character varying(2000) <br/> Text</small> | 
| UPC/EAN | Bar Code (Universal Product Code or its superset European Article Number) | Use this field to enter the bar code for the product in any of the bar code symbologies (Codabar, Code 25, Code 39, Code 93, Code 128, UPC (A), UPC (E), EAN-13, EAN-8, ITF, ITF-14, ISBN, ISSN, JAN-13, JAN-8, POSTNET and FIM, MSI/Plessey, and Pharmacode) | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).UPC<small> character varying(30) <br/> String</small> | 
| SKU | Stock Keeping Unit | The SKU indicates a user defined stock keeping unit.  It may be used for an additional bar code symbols or your own schema. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).SKU<small> character varying(30) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).M_Product_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| Classification | Classification for grouping | The Classification can be used to optionally group products. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Classification<small> character varying(12) <br/> String</small> | 
| Tax Category | Tax Category | The Tax Category provides a method of grouping similar taxes.  For example, Sales Tax or Value Added Tax. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).C_TaxCategory_ID<small> numeric(10) <br/> Table Direct</small> | 
| Revenue Recognition | Method for recording revenue | The Revenue Recognition indicates how revenue will be recognized for this product | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).C_RevenueRecognition_ID<small> numeric(10) <br/> Table Direct</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Product Type | Type of product | The type of product also determines accounting consequences. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).ProductType<small> character(1) <br/> List</small> | 
| Purchased | Organization purchases this product | The Purchased check box indicates if this product is purchased by this organization. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsPurchased<small> character(1) <br/> Yes-No</small> | 
| Sold | Organization sells this product | The Sold check box indicates if this product is sold by this organization. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsSold<small> character(1) <br/> Yes-No</small> | 
| Discontinued | This product is no longer available | The Discontinued check box indicates a product that has been discontinued. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Discontinued<small> character(1) <br/> Yes-No</small> | 
| Discontinued At | Discontinued At indicates Date when product was discontinued |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).DiscontinuedAt<small> timestamp without time zone <br/> Date</small> | 
| Image URL | URL of  image | URL of image; The image is not stored in the database, but retrieved at runtime. The image can be a gif, jpeg or png. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).ImageURL<small> character varying(120) <br/> URL</small> | 
| Description URL | URL for the description |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).DescriptionURL<small> character varying(120) <br/> URL</small> | 


### Tab: Price

**[Created:** 22/06/2002 - **Updated:** 02/01/2000 **]**   
**Description:** Resource Pricing  
**Help:** The Pricing Tab displays the List, Standard and Limit prices for each price list a resource is contained in.  
**Tab Level:** 2

Table 40: Price - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Price List Version | Identifies a unique instance of a Price List | Each Price List can have multiple versions.  The most common use is to indicate the dates that a Price List is valid for. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).M_PriceList_Version_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| List Price | List Price | The List Price is the official List Price in the document currency. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).PriceList<small> numeric <br/> Costs+Prices</small> | 
| Standard Price | Standard Price | The Standard Price indicates the standard or normal price for a product on this price list | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).PriceStd<small> numeric <br/> Costs+Prices</small> | 
| Limit Price | Lowest price for a product | The Price Limit indicates the lowest price for a product stated in the Price List Currency. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).PriceLimit<small> numeric <br/> Costs+Prices</small> | 


### Tab: Accounting

**[Created:** 22/06/2002 - **Updated:** 05/03/2013 **]**   
**Description:** Define Accounting Parameters  
**Help:** The Accounting Tab defines the defaults to use when generating accounting transactions for orders and invoices which contain this resource.  Not all accounts apply to resources.  
**Tab Level:** 2

Table 50: Accounting - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Product Asset | Account for Product Asset (Inventory) | The Product Asset Account indicates the account used for valuing this a product in inventory. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_Asset_Acct<small> numeric(10) <br/> Account</small> | 
| Product Expense | Account for Product Expense | The Product Expense Account indicates the account used to record expenses associated with this product. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_Expense_Acct<small> numeric(10) <br/> Account</small> | 
| Product COGS | Account for Cost of Goods Sold | The Product COGS Account indicates the account used when recording costs associated with this product. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_COGS_Acct<small> numeric(10) <br/> Account</small> | 
| Purchase Price Variance | Difference between Standard Cost and Purchase Price (PPV) | The Purchase Price Variance is used in Standard Costing. It reflects the difference between the Standard Cost and the Purchase Order Price. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_PurchasePriceVariance_Acct<small> numeric(10) <br/> Account</small> | 
| Invoice Price Variance | Difference between Costs and Invoice Price (IPV) | The Invoice Price Variance is used reflects the difference between the current Costs and the Invoice Price. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_InvoicePriceVariance_Acct<small> numeric(10) <br/> Account</small> | 
| Trade Discount Received | Trade Discount Receivable Account | The Trade Discount Receivables Account indicates the account for received trade discounts in vendor invoices | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_TradeDiscountRec_Acct<small> numeric(10) <br/> Account</small> | 
| Trade Discount Granted | Trade Discount Granted Account | The Trade Discount Granted Account indicates the account for granted trade discount in sales invoices | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_TradeDiscountGrant_Acct<small> numeric(10) <br/> Account</small> | 
| Product Revenue | Account for Product Revenue (Sales Account) | The Product Revenue Account indicates the account used for recording sales revenue for this product. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_Revenue_Acct<small> numeric(10) <br/> Account</small> | 


### Tab: Assignment

**[Created:** 15/06/2002 - **Updated:** 02/01/2000 **]**   
**Description:** Resource Assignments  
**Help:** History of Assignments  
**Tab Level:** 1

Table 70: Assignment - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [s_resourceassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceassignment.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [s_resourceassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceassignment.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Resource | Resource |  | [s_resourceassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceassignment.html).S_Resource_ID<small> numeric(10) <br/> Table Direct</small> | 
| Assign From | Assign resource from | Assignment start | [s_resourceassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceassignment.html).AssignDateFrom<small> timestamp without time zone <br/> Date+Time</small> | 
| Assign To | Assign resource until | Assignment end | [s_resourceassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceassignment.html).AssignDateTo<small> timestamp without time zone <br/> Date+Time</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [s_resourceassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceassignment.html).Qty<small> numeric <br/> Quantity</small> | 
| Confirmed | Assignment is confirmed | Resource assignment is confirmed | [s_resourceassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceassignment.html).IsConfirmed<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [s_resourceassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceassignment.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [s_resourceassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourceassignment.html).Description<small> character varying(255) <br/> String</small> | 


