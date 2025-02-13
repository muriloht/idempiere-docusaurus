# Window: Imported Fixed Asset

**[Created:** 20/06/2010 - **Updated:** 20/06/2010 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ImportedFixedAsset-Window_iDempiere_v12.0.0.png)

### Tab: Fixed Asset

**[Created:** 20/06/2010 - **Updated:** 12/03/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Fixed Asset - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Imported | Has this import been processed | The Imported check box indicates if this import has been processed. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).I_IsImported<small> character(1) <br/> Yes-No</small> | 
| Import Error Message | Messages generated from import process | The Import Error Message displays any error messages generated during the import process. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).I_ErrorMsg<small> character varying(2000) <br/> String</small> | 
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Inventory No |  |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).InventoryNo<small> character varying(30) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).Name<small> character varying(120) <br/> String</small> | 
| In Service Date | Date when Asset was put into service | The date when the asset was put into service - usually used as start date for depreciation. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).AssetServiceDate<small> timestamp without time zone <br/> Date</small> | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).DateAcct<small> timestamp without time zone <br/> Date</small> | 
| Asset Depreciation Date | Date of last depreciation | Date of the last deprecation, if the asset is used internally and depreciated. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).AssetDepreciationDate<small> timestamp without time zone <br/> Date</small> | 
| Asset Group | Group of Assets | The group of assets determines default accounts.  If an asset group is selected in the product category, assets are created when delivering the asset. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).A_Asset_Group_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset Group Key |  |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).A_Asset_Group_Value<small> character varying(40) <br/> String</small> | 
| BPartner (Agent) | Business Partner (Agent or Sales Rep) |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).C_BPartnerSR_ID<small> numeric(10) <br/> Search</small> | 
| Business Partner Key | The Key of the Business Partner |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).BPartner_Value<small> character varying(40) <br/> String</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Product Key | Key of the Product |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).ProductValue<small> character varying(40) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).Description<small> character varying(255) <br/> String</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).C_UOM_ID<small> numeric(10) <br/> Search</small> | 
| Symbol | Symbol for a Unit of Measure | The Symbol identifies the Symbol to be displayed and printed for a Unit of Measure | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).UOMSymbol<small> character varying(10) <br/> String</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).M_Locator_ID<small> numeric(10) <br/> Table Direct</small> | 
| Locator Key | Key of the Warehouse Locator |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).LocatorValue<small> character varying(40) <br/> String</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).Qty<small> numeric <br/> Quantity</small> | 
| Asset Cost |  |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).A_Asset_Cost<small> numeric <br/> Amount</small> | 
| Asset Salvage Value |  |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).A_Salvage_Value<small> numeric <br/> Number</small> | 
| Usable Life - Months | Months of the usable life of the asset |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).UseLifeMonths<small> numeric(10) <br/> Integer</small> | 
| Use Life - Months (fiscal) |  |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).UseLifeMonths_F<small> numeric(10) <br/> Integer</small> | 
| Current Period |  |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).A_Current_Period<small> numeric(10) <br/> Integer</small> | 
| Accumulated Depreciation |  |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).A_Accumulated_Depr<small> numeric <br/> Amount</small> | 
| Accumulated Depreciation (fiscal) |  |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).A_Accumulated_Depr_F<small> numeric <br/> Amount</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| ISO Currency Code | Three letter ISO 4217 Code of the Currency | For details - http://www.unece.org/trade/rec/rec09en.htm | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).ISO_Code<small> character varying(3) <br/> String</small> | 
| Entered Amount |  |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).AssetAmtEntered<small> numeric <br/> Amount</small> | 
| Source Amount |  |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).AssetSourceAmt<small> numeric <br/> Amount</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Account Schema Name | Name of the Accounting Schema |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).AcctSchemaName<small> character varying(120) <br/> String</small> | 
| Document Action | The targeted status of the document | You find the current status in the Document Status field. The options are listed in a popup | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).DocAction<small> character varying(2) <br/> List</small> | 
| Import Fixed Asset |  |  | [i_fixedasset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_fixedasset.html).Processing<small> character(1) <br/> Button</small> | 


