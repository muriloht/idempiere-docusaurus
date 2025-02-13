# Window: Price List

**[Created:** 09/08/1999 - **Updated:** 03/06/2021 **]**  
**Description:** Maintain Product Price Lists  
**Help:** The Price List Window allows you to generate product price lists for your Business Partners.  Price lists determine currency and tax treatment.  Price list versions allow to maintain parallel lists for different date ranges.  The most current pricelist version is used based on the document date.All pricelists have three prices: List, Standard and LimitFirst step is to create a base price list.  You can manually add products and enter the prices or create them automatically.  The base price list is often the purchase price list with list price (&#x27;official&#x27; retail price), the standard price (your purchase price).  The limit price can be used to check your final purchase costs after discounts, rebates, etc. Pricelists can be calculated and copied.  To speed up the calculation, the parameters are stored an used when creating a new price list version.  
![](/img/docs/manual/PriceList-Window_iDempiere_v12.0.0.png)

### Tab: Price List

**[Created:** 09/08/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define Price Lists  
**Help:** Price lists determine currency of the document as well as tax treatment.  
**Tab Level:** 0

Table 10: Price List - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).Description<small> character varying(255) <br/> String</small> | 
| Base Price List | Pricelist to be used, if product not found on this pricelist | The Base Price List identifies the default price list to be used if a product is not found on the selected price list | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).BasePriceList_ID<small> numeric(10) <br/> Table</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Price Precision | Precision (number of decimals) for the Price | The prices of the price list are rounded to the precision entered.  This allows to have prices with below currency precision, e.g. ./script_gen_wiki_files_Window_TEMPLATE_PAGE_pg.sh.005. Enter the number of decimals or -1 for no rounding. | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).PricePrecision<small> numeric(10) <br/> Integer</small> | 
| Sales Price list | This is a Sales Price List | The Sales Price List check box indicates if this price list is used for sales transactions. | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).IsSOPriceList<small> character(1) <br/> Yes-No</small> | 
| Price includes Tax | Tax is included in the price | The Tax Included checkbox indicates if the prices include tax.  This is also known as the gross price. | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).IsTaxIncluded<small> character(1) <br/> Yes-No</small> | 
| Enforce price limit | Do not allow prices below the limit price | The Enforce Price Limit check box indicates that prices cannot be below the limit price in Orders and Invoices.  This can be overwritten, if the role allows this. | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).EnforcePriceLimit<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Version

**[Created:** 04/12/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain price list versions  
**Help:** Price lists are automatically created based on Product Purchasing Information and the Vendor Category Discount.The other alternative is to copy them from existing pricelists and the re-calculate them.You can also re-calculate the pricelist by referencing no pricelist or referencing the same pricelist.  If no base price list is selected, the Procuct Purchase records are used as reference.  
**Tab Level:** 1

Table 20: Version - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_pricelist_version](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_pricelist_version](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Price List | Unique identifier of a Price List | Price Lists are used to determine the pricing, margin and cost of items purchased or sold. | [m_pricelist_version](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version.html).M_PriceList_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_pricelist_version](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_pricelist_version](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_pricelist_version](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Price List Schema | Schema to calculate price lists |  | [m_pricelist_version](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version.html).M_DiscountSchema_ID<small> numeric(10) <br/> Table</small> | 
| Base Price List | Source for Price list calculations | The Base Price List identifies the Base Pricelist used for calculating prices (the source) | [m_pricelist_version](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version.html).M_Pricelist_Version_Base_ID<small> numeric(10) <br/> Table</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [m_pricelist_version](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version.html).ValidFrom<small> timestamp without time zone <br/> Date</small> | 
| Create Price List  | Create Prices based on parameters of this version | Create Prices for this pricelist version in the sequence of the Discount Schema Price List.Lines with a higher sequence overwrite existing prices.  The sequence should be from generic to specific. | [m_pricelist_version](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version.html).ProcCreate<small> character(1) <br/> Button</small> | 


### Tab: Product Price

**[Created:** 09/08/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Product Prices  
**Help:** The Price List Tab displays the prices for a product based on the selected price list.  
**Tab Level:** 2

Table 30: Product Price - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Price List Version | Identifies a unique instance of a Price List | Each Price List can have multiple versions.  The most common use is to indicate the dates that a Price List is valid for. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).M_PriceList_Version_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| List Price | List Price | The List Price is the official List Price in the document currency. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).PriceList<small> numeric <br/> Costs+Prices</small> | 
| Standard Price | Standard Price | The Standard Price indicates the standard or normal price for a product on this price list | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).PriceStd<small> numeric <br/> Costs+Prices</small> | 
| Limit Price | Lowest price for a product | The Price Limit indicates the lowest price for a product stated in the Price List Currency. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).PriceLimit<small> numeric <br/> Costs+Prices</small> | 


### Tab: Product Price Break

**[Created:** 17/03/2009 - **Updated:** 01/10/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 40: Product Price Break - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_productpricevendorbreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productpricevendorbreak.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_productpricevendorbreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productpricevendorbreak.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Price List Version | Identifies a unique instance of a Price List | Each Price List can have multiple versions.  The most common use is to indicate the dates that a Price List is valid for. | [m_productpricevendorbreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productpricevendorbreak.html).M_PriceList_Version_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_productpricevendorbreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productpricevendorbreak.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [m_productpricevendorbreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productpricevendorbreak.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Break Value | Low Value of trade discount break level | Starting Quantity or Amount Value for break level | [m_productpricevendorbreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productpricevendorbreak.html).BreakValue<small> numeric <br/> Number</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_productpricevendorbreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productpricevendorbreak.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| List Price | List Price | The List Price is the official List Price in the document currency. | [m_productpricevendorbreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productpricevendorbreak.html).PriceList<small> numeric <br/> Costs+Prices</small> | 
| Standard Price | Standard Price | The Standard Price indicates the standard or normal price for a product on this price list | [m_productpricevendorbreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productpricevendorbreak.html).PriceStd<small> numeric <br/> Costs+Prices</small> | 
| Limit Price | Lowest price for a product | The Price Limit indicates the lowest price for a product stated in the Price List Currency. | [m_productpricevendorbreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productpricevendorbreak.html).PriceLimit<small> numeric <br/> Costs+Prices</small> | 


### Tab: Translation

**[Created:** 21/03/2014 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 50: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_pricelist_version_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_pricelist_version_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Price List Version | Identifies a unique instance of a Price List | Each Price List can have multiple versions.  The most common use is to indicate the dates that a Price List is valid for. | [m_pricelist_version_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version_trl.html).M_PriceList_Version_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [m_pricelist_version_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_pricelist_version_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [m_pricelist_version_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_pricelist_version_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_version_trl.html).Name<small> character varying(60) <br/> String</small> | 


### Tab: Translation

**[Created:** 21/03/2014 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 60: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_pricelist_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_pricelist_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Price List | Unique identifier of a Price List | Price Lists are used to determine the pricing, margin and cost of items purchased or sold. | [m_pricelist_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_trl.html).M_PriceList_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [m_pricelist_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_pricelist_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [m_pricelist_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_pricelist_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_pricelist_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_pricelist_trl.html).Description<small> character varying(255) <br/> String</small> | 


