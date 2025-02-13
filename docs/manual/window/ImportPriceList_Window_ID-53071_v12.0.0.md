# Window: Import Price List

**[Created:** 17/03/2009 - **Updated:** 03/06/2021 **]**  
**Description:** Import Price Lists  
**Help:** The Import Price List Window is an interim table which is used when importing external data into the system.  Selecting the &#x27;Process&#x27; button will either add or modify the appropriate records.  
![](/img/docs/manual/ImportPriceList-Window_iDempiere_v12.0.0.png)

### Tab: Import Price List

**[Created:** 17/03/2009 - **Updated:** 17/03/2009 **]**   
**Description:** Import Price Lists  
**Help:**   
**Tab Level:** 0

Table 10: Import Price List - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Import Price List |  |  | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).I_PriceList_ID<small> numeric(10) <br/> ID</small> | 
| Imported | Has this import been processed | The Imported check box indicates if this import has been processed. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).I_IsImported<small> character(1) <br/> Yes-No</small> | 
| Price List | Unique identifier of a Price List | Price Lists are used to determine the pricing, margin and cost of items purchased or sold. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).M_PriceList_ID<small> numeric(10) <br/> Table Direct</small> | 
| Import Error Message | Messages generated from import process | The Import Error Message displays any error messages generated during the import process. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).I_ErrorMsg<small> character varying(2000) <br/> String</small> | 
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).Description<small> character varying(255) <br/> String</small> | 
| ISO Currency Code | Three letter ISO 4217 Code of the Currency | For details - http://www.unece.org/trade/rec/rec09en.htm | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).ISO_Code<small> character varying(3) <br/> String</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Price Precision | Precision (number of decimals) for the Price | The prices of the price list are rounded to the precision entered.  This allows to have prices with below currency precision, e.g. ./script_gen_wiki_files_Window_TEMPLATE_PAGE_pg.sh.005. Enter the number of decimals or -1 for no rounding. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).PricePrecision<small> numeric <br/> Integer</small> | 
| Sales Price list | This is a Sales Price List | The Sales Price List check box indicates if this price list is used for sales transactions. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).IsSOPriceList<small> character(1) <br/> Yes-No</small> | 
| Price includes Tax | Tax is included in the price | The Tax Included checkbox indicates if the prices include tax.  This is also known as the gross price. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).IsTaxIncluded<small> character(1) <br/> Yes-No</small> | 
| Enforce price limit | Do not allow prices below the limit price | The Enforce Price Limit check box indicates that prices cannot be below the limit price in Orders and Invoices.  This can be overwritten, if the role allows this. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).EnforcePriceLimit<small> character(1) <br/> Yes-No</small> | 
| Price List Version | Identifies a unique instance of a Price List | Each Price List can have multiple versions.  The most common use is to indicate the dates that a Price List is valid for. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).M_PriceList_Version_ID<small> numeric(10) <br/> Table Direct</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).ValidFrom<small> timestamp without time zone <br/> Date</small> | 
| Product Key | Key of the Product |  | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).ProductValue<small> character varying(40) <br/> String</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| List Price | List Price | The List Price is the official List Price in the document currency. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).PriceList<small> numeric <br/> Costs+Prices</small> | 
| Standard Price | Standard Price | The Standard Price indicates the standard or normal price for a product on this price list | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).PriceStd<small> numeric <br/> Costs+Prices</small> | 
| Limit Price | Lowest price for a product | The Price Limit indicates the lowest price for a product stated in the Price List Currency. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).PriceLimit<small> numeric <br/> Costs+Prices</small> | 
| Business Partner Key | The Key of the Business Partner |  | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).BPartner_Value<small> character varying(40) <br/> String</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Break Value | Low Value of trade discount break level | Starting Quantity or Amount Value for break level | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).BreakValue<small> numeric <br/> Number</small> | 
| UOM Code | UOM EDI X12 Code | The Unit of Measure Code indicates the EDI X12 Code Data Element 355 (Unit or Basis for Measurement) | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).X12DE355<small> character varying(4) <br/> String</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Import Price Lists | Imports price lists from a file into the application |  | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).Processing<small> character(1) <br/> Button</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [i_pricelist](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_pricelist.html).Processed<small> character(1) <br/> Yes-No</small> | 


