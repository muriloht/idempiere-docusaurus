# Window: Asset

**[Created:** 23/01/2003 - **Updated:** 17/06/2010 **]**  
**Description:** Asset used internally or by customers  
**Help:** An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset.  
![](/img/docs/manual/Asset-Window_iDempiere_v12.0.0.png)

### Tab: Asset

**[Created:** 23/01/2003 - **Updated:** 20/06/2010 **]**   
**Description:** Asset used internally or by customers  
**Help:** An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset.  
**Tab Level:** 0

Table 10: Asset - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).Value<small> character varying(40) <br/> String</small> | 
| Inventory No |  |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).InventoryNo<small> character varying(30) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Parent Asset |  |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).A_Parent_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Asset Group | Group of Assets | The group of assets determines default accounts.  If an asset group is selected in the product category, assets are created when delivering the asset. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).A_Asset_Group_ID<small> numeric(10) <br/> Search</small> | 
| Version No | Version Number |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).VersionNo<small> character varying(20) <br/> String</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Serial No | Product Serial Number | The Serial Number identifies a tracked, warranted product.  It can only be used when the quantity is 1. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).SerNo<small> character varying(255) <br/> String</small> | 
| Manufactured Year |  |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).ManufacturedYear<small> numeric(10) <br/> Integer</small> | 
| Lot No | Lot number (alphanumeric) | The Lot Number indicates the specific lot that a product was part of. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).Lot<small> character varying(255) <br/> String</small> | 
| In Service Date | Date when Asset was put into service | The date when the asset was put into service - usually used as start date for depreciation. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).AssetServiceDate<small> timestamp without time zone <br/> Date</small> | 
| Guarantee Date | Date when guarantee expires | Date when the normal guarantee or availability expires | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).GuaranteeDate<small> timestamp without time zone <br/> Date</small> | 
| Create Date |  |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).A_Asset_CreateDate<small> timestamp without time zone <br/> Date</small> | 
| Revaluation Date |  |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).A_Asset_RevalDate<small> timestamp without time zone <br/> Date</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).C_Project_ID<small> numeric(10) <br/> Search</small> | 
| Activity | Business Activity | Activities indicate tasks that are performed and used to utilize Activity based Costing | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).C_Activity_ID<small> numeric(10) <br/> Table Direct</small> | 
| In Possession | The asset is in the possession of the organization | Assets which are not in possession are e.g. at Customer site and may or may not be owned by the company. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).IsInPosession<small> character(1) <br/> Yes-No</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).M_Locator_ID<small> numeric(10) <br/> Locator (WH)</small> | 
| BPartner (Agent) | Business Partner (Agent or Sales Rep) |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).C_BPartnerSR_ID<small> numeric(10) <br/> Search</small> | 
| Address | Location or Address | The Location / Address field defines the location of an entity. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).C_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Location comment | Additional comments or remarks concerning the location |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).LocationComment<small> character varying(255) <br/> String</small> | 
| Owned | The asset is owned by the organization | The asset may not be in possession, but the asset is legally owned by the organization | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).IsOwned<small> character(1) <br/> Yes-No</small> | 
| Lessor | The Business Partner who rents or leases |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).Lease_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Lease Termination | Lease Termination Date | Last Date of Lease | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).LeaseTerminationDate<small> timestamp without time zone <br/> Date</small> | 
| Depreciate | The asset will be depreciated | The asset is used internally and will be depreciated | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).IsDepreciated<small> character(1) <br/> Yes-No</small> | 
| Fully depreciated | The asset is fully depreciated | The asset costs are fully amortized. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).IsFullyDepreciated<small> character(1) <br/> Yes-No</small> | 
| Life use | Units of use until the asset is not usable anymore | Life use and the actual use may be used to calculate the depreciation | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).LifeUseUnits<small> numeric <br/> Integer</small> | 
| Use units | Currently used units of the assets |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).UseUnits<small> numeric <br/> Integer</small> | 
| Last Maintenance | Last Maintenance Date |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).LastMaintenanceDate<small> timestamp without time zone <br/> Date</small> | 
| Last Unit | Last Maintenance Unit |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).LastMaintenanceUnit<small> numeric(10) <br/> Integer</small> | 
| Last Note | Last Maintenance Note |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).LastMaintenanceNote<small> character varying(60) <br/> String</small> | 
| Next Maintenance | Next Maintenance Date |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).NextMaintenenceDate<small> timestamp without time zone <br/> Date</small> | 
| Next Unit | Next Maintenance Unit |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).NextMaintenenceUnit<small> numeric(10) <br/> Integer</small> | 
| Asset Status |  |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).A_Asset_Status<small> character varying(2) <br/> List</small> | 
| Activation Date |  |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).AssetActivationDate<small> timestamp without time zone <br/> Date</small> | 
| Asset Depreciation Date | Date of last depreciation | Date of the last deprecation, if the asset is used internally and depreciated. | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).AssetDepreciationDate<small> timestamp without time zone <br/> Date</small> | 
| Disposed | The asset is disposed | The asset is no longer used and disposed | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).IsDisposed<small> character(1) <br/> Yes-No</small> | 
| Asset Disposal Date | Date when the asset is/was disposed |  | [a_asset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset.html).AssetDisposalDate<small> timestamp without time zone <br/> Date</small> | 


### Tab: Product

**[Created:** 17/06/2010 - **Updated:** 19/05/2011 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 11: Product - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_product.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_product.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_asset_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_product.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_asset_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_product.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [a_asset_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_product.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [a_asset_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_product.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Current Qty |  |  | [a_asset_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_product.html).A_QTY_Current<small> numeric <br/> Quantity</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [a_asset_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_product.html).M_Locator_ID<small> numeric(10) <br/> Locator (WH)</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_asset_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_product.html).Description<small> character varying(255) <br/> String</small> | 


### Tab: Asset Balances

**[Created:** 30/05/2008 - **Updated:** 17/06/2010 **]**   
**Description:** Asset Balance Report and Adjustments  
**Help:**   
**Tab Level:** 1

Table 12: Asset Balances - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).Description<small> character varying(255) <br/> String</small> | 
| Asset Cost |  |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).A_Asset_Cost<small> numeric <br/> Amount</small> | 
| Posting Type | The type of posted amount for the transaction | The Posting Type indicates the type of amount (Actual, Budget, Reservation, Commitment, Statistical) the transaction. | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).PostingType<small> character(1) <br/> List</small> | 
| Asset Salvage Value |  |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).A_Salvage_Value<small> numeric <br/> Amount</small> | 
| Accumulated Depreciation |  |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).A_Accumulated_Depr<small> numeric <br/> Amount</small> | 
| Accumulated Depreciation (fiscal) |  |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).A_Accumulated_Depr_F<small> numeric <br/> Amount</small> | 
| Remaining Amt |  |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).A_Asset_Remaining<small> numeric <br/> Amount</small> | 
| Remaining Amt (fiscal) |  |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).A_Asset_Remaining_F<small> numeric <br/> Amount</small> | 
| Usable Life - Years | Years of the usable life of the asset |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).UseLifeYears<small> numeric <br/> Number</small> | 
| Use Life - Years (fiscal) |  |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).UseLifeYears_F<small> numeric <br/> Number</small> | 
| Usable Life - Months | Months of the usable life of the asset |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).UseLifeMonths<small> numeric(10) <br/> Integer</small> | 
| Use Life - Months (fiscal) |  |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).UseLifeMonths_F<small> numeric(10) <br/> Integer</small> | 
| Depreciate | The asset will be depreciated | The asset is used internally and will be depreciated | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).IsDepreciated<small> character(1) <br/> Yes-No</small> | 
| Current Period |  |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).A_Current_Period<small> numeric(10) <br/> Integer</small> | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).DateAcct<small> timestamp without time zone <br/> Date</small> | 
| Update depreciation |  |  | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).Processing<small> character(1) <br/> Button</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [a_depreciation_workfile](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_workfile.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Accounting Setup

**[Created:** 30/05/2008 - **Updated:** 17/06/2010 **]**   
**Description:** Enter accounting setup information  
**Help:**   
**Tab Level:** 1

Table 14: Accounting Setup - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).ValidFrom<small> timestamp without time zone <br/> Date</small> | 
| Asset Salvage Value |  |  | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).A_Salvage_Value<small> numeric <br/> Amount</small> | 
| Posting Type | The type of posted amount for the transaction | The Posting Type indicates the type of amount (Actual, Budget, Reservation, Commitment, Statistical) the transaction. | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).PostingType<small> character(1) <br/> List</small> | 
| Depreciation |  |  | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).A_Depreciation_ID<small> numeric(10) <br/> Table</small> | 
| Depreciation (fiscal) |  |  | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).A_Depreciation_F_ID<small> numeric(10) <br/> Table</small> | 
| Asset Acct |  |  | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).A_Asset_Acct<small> numeric(10) <br/> Account</small> | 
| Accumulated Depreciation Account |  |  | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).A_Accumdepreciation_Acct<small> numeric(10) <br/> Account</small> | 
| Depreciation Account |  |  | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).A_Depreciation_Acct<small> numeric(10) <br/> Account</small> | 
| Disposal Revenue Acct |  |  | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).A_Disposal_Revenue_Acct<small> numeric(10) <br/> Account</small> | 
| Disposal Loss Acct |  |  | [a_asset_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_acct.html).A_Disposal_Loss_Acct<small> numeric(10) <br/> Account</small> | 


### Tab: Activation/Addition

**[Created:** 17/06/2010 - **Updated:** 19/05/2011 **]**   
**Description:** Activation/Addition  
**Help:**   
**Tab Level:** 1

Table 15: Activation/Addition - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).DocumentNo<small> character varying(30) <br/> String</small> | 
| Create Asset |  |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).A_CreateAsset<small> character(1) <br/> Yes-No</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Document Date | Date of the Document | The Document Date indicates the date the document was generated.  It may or may not be the same as the accounting date. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).DateDoc<small> timestamp without time zone <br/> Date</small> | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).DateAcct<small> timestamp without time zone <br/> Date</small> | 
| Posting Type | The type of posted amount for the transaction | The Posting Type indicates the type of amount (Actual, Budget, Reservation, Commitment, Statistical) the transaction. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).PostingType<small> character(1) <br/> List</small> | 
| Capital/Expense |  |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).A_CapvsExp<small> character varying(3) <br/> List</small> | 
| Source Type |  |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).A_SourceType<small> character varying(3) <br/> List</small> | 
| Invoice | Invoice Identifier | The Invoice Document. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).C_Invoice_ID<small> numeric(10) <br/> Search</small> | 
| Invoice Line | Invoice Detail Line | The Invoice Line uniquely identifies a single line of an Invoice. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).C_InvoiceLine_ID<small> numeric(10) <br/> Search</small> | 
| Match Invoice | Match Shipment/Receipt to Invoice |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).M_MatchInv_ID<small> numeric(10) <br/> Search</small> | 
| Shipment/Receipt Line | Line on Shipment or Receipt document | The Shipment/Receipt Line indicates a unique line in a Shipment/Receipt document | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).M_InOutLine_ID<small> numeric(10) <br/> Search</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).C_Project_ID<small> numeric(10) <br/> Search</small> | 
| Charge | Additional document charges | The Charge indicates a type of Charge (Handling, Shipping, Restocking) | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).C_Charge_ID<small> numeric(10) <br/> Search</small> | 
| Imported Fixed Asset |  |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).I_FixedAsset_ID<small> numeric(10) <br/> Search</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).M_Locator_ID<small> numeric(10) <br/> Locator (WH)</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).Description<small> character varying(510) <br/> String</small> | 
| Source Amount |  |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).AssetSourceAmt<small> numeric <br/> Amount</small> | 
| Asset value | Book Value of the asset |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).AssetValueAmt<small> numeric <br/> Amount</small> | 
| Entered Amount |  |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).AssetAmtEntered<small> numeric <br/> Amount</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Current Qty |  |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).A_QTY_Current<small> numeric <br/> Number</small> | 
| Accumulated Depreciation |  |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).A_Accumulated_Depr<small> numeric <br/> Amount</small> | 
| Accumulated Depreciation (fiscal) |  |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).A_Accumulated_Depr_F<small> numeric <br/> Amount</small> | 
| Delta Use Life Years |  |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).DeltaUseLifeYears<small> numeric(10) <br/> Integer</small> | 
| Delta Use Life Years (fiscal) | Delta Use Life Years (fiscal) |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).DeltaUseLifeYears_F<small> numeric(10) <br/> Integer</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Document Status | The current status of the document | The Document Status indicates the status of a document at this time.  If you want to change the document status, use the Document Action field | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).DocStatus<small> character varying(2) <br/> List</small> | 
| Asset Addition Process |  |  | [a_asset_addition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_addition.html).DocAction<small> character(2) <br/> Button</small> | 


### Tab: Disposal

**[Created:** 17/06/2010 - **Updated:** 19/05/2011 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 16: Disposal - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_disposed](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_disposed.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_disposed](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_disposed.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_asset_disposed](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_disposed.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Disposed Method |  |  | [a_asset_disposed](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_disposed.html).A_Disposed_Method<small> character varying(2) <br/> List</small> | 
| Disposed Date |  |  | [a_asset_disposed](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_disposed.html).A_Disposed_Date<small> timestamp without time zone <br/> Date</small> | 
| Document Date | Date of the Document | The Document Date indicates the date the document was generated.  It may or may not be the same as the accounting date. | [a_asset_disposed](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_disposed.html).DateDoc<small> timestamp without time zone <br/> Date</small> | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | [a_asset_disposed](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_disposed.html).DateAcct<small> timestamp without time zone <br/> Date</small> | 
| Asset Proceeds |  |  | [a_asset_disposed](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_disposed.html).A_Proceeds<small> numeric <br/> Amount</small> | 
| Asset Trade |  |  | [a_asset_disposed](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_disposed.html).A_Asset_Trade_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_asset_disposed](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_disposed.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [a_asset_disposed](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_disposed.html).Processed<small> character(1) <br/> Yes-No</small> | 


### Tab: Asset History

**[Created:** 30/05/2008 - **Updated:** 20/06/2010 **]**   
**Description:** Detail asset transaction history  
**Help:**   
**Tab Level:** 1

Table 25: Asset History - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Details |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).TextDetails<small> character varying(60) <br/> String</small> | 
| Posting Type | The type of posted amount for the transaction | The Posting Type indicates the type of amount (Actual, Budget, Reservation, Commitment, Statistical) the transaction. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).PostingType<small> character varying(10) <br/> List</small> | 
| Change Type |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).ChangeType<small> character varying(3) <br/> List</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Updated By | User who updated this records | The Updated By field indicates the user who updated this record. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).UpdatedBy<small> numeric(10) <br/> Search</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| A_Period_Start |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Period_Start<small> numeric(10) <br/> Integer</small> | 
| A_Period_End |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Period_End<small> numeric(10) <br/> Integer</small> | 
| A_Depreciation_Manual_Amount |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Depreciation_Manual_Amount<small> numeric <br/> Amount</small> | 
| A_Depreciation_Manual_Period |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Depreciation_Manual_Period<small> character varying(2) <br/> List</small> | 
| Variable Percent |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Depreciation_Variable_Perc<small> numeric <br/> Number</small> | 
| A_Depreciation_Table_Header_ID |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Depreciation_Table_Header_ID<small> numeric(10) <br/> Table</small> | 
| Spread Type |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Asset_Spread_Type<small> character varying(10) <br/> Table</small> | 
| Asset Salvage Value |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Salvage_Value<small> numeric <br/> Amount</small> | 
| Split Percent |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Split_Percent<small> numeric <br/> Number</small> | 
| Owned | The asset is owned by the organization | The asset may not be in possession, but the asset is legally owned by the organization | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).IsOwned<small> character(1) <br/> Yes-No</small> | 
| In Possession | The asset is in the possession of the organization | Assets which are not in possession are e.g. at Customer site and may or may not be owned by the company. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).IsInPosession<small> character(1) <br/> Yes-No</small> | 
| Depreciate | The asset will be depreciated | The asset is used internally and will be depreciated | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).IsDepreciated<small> character(1) <br/> Yes-No</small> | 
| Fully depreciated | The asset is fully depreciated | The asset costs are fully amortized. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).IsFullyDepreciated<small> character(1) <br/> Yes-No</small> | 
| Disposed | The asset is disposed | The asset is no longer used and disposed | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).IsDisposed<small> character(1) <br/> Yes-No</small> | 
| A_Reval_Cal_Method |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Reval_Cal_Method<small> character varying(3) <br/> List</small> | 
| Change Amt |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).ChangeAmt<small> numeric <br/> Amount</small> | 
| Asset value | Book Value of the asset |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).AssetValueAmt<small> numeric <br/> Amount</small> | 
| Asset Book Value Amt |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).AssetBookValueAmt<small> numeric <br/> Amount</small> | 
| Asset Accum Depreciation Amt |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).AssetAccumDepreciationAmt<small> numeric <br/> Amount</small> | 
| Market value Amount | Market value of the asset | For reporting, the market value of the asset | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).AssetMarketValueAmt<small> numeric <br/> Amount</small> | 
| A_QTY_Original |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_QTY_Original<small> numeric <br/> Number</small> | 
| Current Qty |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_QTY_Current<small> numeric <br/> Number</small> | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).DateAcct<small> timestamp without time zone <br/> Date</small> | 
| Create Date |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Asset_CreateDate<small> timestamp without time zone <br/> Date</small> | 
| In Service Date | Date when Asset was put into service | The date when the asset was put into service - usually used as start date for depreciation. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).AssetServiceDate<small> timestamp without time zone <br/> Date</small> | 
| Asset Depreciation Date | Date of last depreciation | Date of the last deprecation, if the asset is used internally and depreciated. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).AssetDepreciationDate<small> timestamp without time zone <br/> Date</small> | 
| Revaluation Date |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Asset_RevalDate<small> timestamp without time zone <br/> Date</small> | 
| Asset Disposal Date | Date when the asset is/was disposed |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).AssetDisposalDate<small> timestamp without time zone <br/> Date</small> | 
| Usable Life - Years | Years of the usable life of the asset |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).UseLifeYears<small> numeric <br/> Number</small> | 
| Usable Life - Months | Months of the usable life of the asset |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).UseLifeMonths<small> numeric(10) <br/> Integer</small> | 
| Life use | Units of use until the asset is not usable anymore | Life use and the actual use may be used to calculate the depreciation | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).LifeUseUnits<small> numeric(10) <br/> Integer</small> | 
| Use units | Currently used units of the assets |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).UseUnits<small> numeric(10) <br/> Integer</small> | 
| Parent Asset |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Parent_Asset_ID<small> numeric(10) <br/> Search</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Address | Location or Address | The Location / Address field defines the location of an entity. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).C_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Lot No | Lot number (alphanumeric) | The Lot Number indicates the specific lot that a product was part of. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).Lot<small> character varying(40) <br/> String</small> | 
| Serial No | Product Serial Number | The Serial Number identifies a tracked, warranted product.  It can only be used when the quantity is 1. | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).SerNo<small> character varying(40) <br/> String</small> | 
| Version No | Version Number |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).VersionNo<small> character varying(40) <br/> String</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table</small> | 
| Asset Acct |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Asset_Acct<small> numeric(10) <br/> Account</small> | 
| Depreciation Account |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Depreciation_Acct<small> numeric(10) <br/> Account</small> | 
| Accumulated Depreciation Account |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Accumdepreciation_Acct<small> numeric(10) <br/> Account</small> | 
| Disposal Revenue Acct |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Disposal_Revenue_Acct<small> numeric(10) <br/> Account</small> | 
| Disposal Loss Acct |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Disposal_Loss_Acct<small> numeric(10) <br/> Account</small> | 
| Revaluation Cost Offset for Current Year |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Reval_Cost_Offset<small> numeric(10) <br/> Integer</small> | 
| Reval Cost Offset Acct |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Reval_Cost_Offset_Acct<small> numeric(10) <br/> Integer</small> | 
| Revaluation Cost Offset for Prior Year |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Reval_Cost_Offset_Prior<small> numeric(10) <br/> Integer</small> | 
| Reval Cost Offset Prior Acct |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Reval_Cost_Offset_Prior_Acct<small> numeric(10) <br/> Integer</small> | 
| Revaluation Accumulated Depreciation Offset for Current Year |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Reval_Accumdep_Offset_Cur<small> numeric(10) <br/> Integer</small> | 
| A_Reval_Accumdep_Offset_Cur |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Reval_Adep_Offset_Cur_Acct<small> numeric(10) <br/> Integer</small> | 
| Revaluation Accumulated Depreciation Offset for Prior Year |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Reval_Accumdep_Offset_Prior<small> numeric(10) <br/> Integer</small> | 
| A_Reval_Accumdep_Offset_Prior |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Reval_Adep_Offset_Prior_Acct<small> numeric(10) <br/> Integer</small> | 
| Reval Depexp Offset Acct |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Reval_Depexp_Offset_Acct<small> numeric(10) <br/> Integer</small> | 
| Revaluation Expense Offs |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Reval_Depexp_Offset<small> numeric(10) <br/> Integer</small> | 
| A_Asset_Change_ID |  |  | [a_asset_change](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_change.html).A_Asset_Change_ID<small> numeric(10) <br/> ID</small> | 


### Tab: Issue Project

**[Created:** 31/12/2005 - **Updated:** 20/06/2010 **]**   
**Description:** Automatic Issue Reporting  
**Help:**   
**Tab Level:** 1

Table 30: Issue Project - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_issueproject](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_issueproject.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_issueproject](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_issueproject.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [r_issueproject](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_issueproject.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [r_issueproject](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_issueproject.html).C_Project_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [r_issueproject](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_issueproject.html).Name<small> character varying(120) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [r_issueproject](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_issueproject.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_issueproject](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_issueproject.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| System Status | Status of the system - Support priority depends on system status | System status helps to prioritize support resources | [r_issueproject](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_issueproject.html).SystemStatus<small> character(1) <br/> List</small> | 
| Statistics | Information to help profiling the system for solving support issues | Profile information do not contain sensitive information and are used to support issue detection and diagnostics as well as general anonymous statistics | [r_issueproject](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_issueproject.html).StatisticsInfo<small> character varying(60) <br/> String</small> | 
| Profile | Information to help profiling the system for solving support issues | Profile information do not contain sensitive information and are used to support issue detection and diagnostics | [r_issueproject](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_issueproject.html).ProfileInfo<small> character varying(4000) <br/> String</small> | 


### Tab: Finance Information

**[Created:** 30/05/2008 - **Updated:** 19/05/2011 **]**   
**Description:** Finace Information for the Asset  
**Help:**   
**Tab Level:** 1

Table 35: Finance Information - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Asset Finance Method |  |  | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).A_Finance_Meth<small> character varying(2) <br/> List</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Contract Date |  |  | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).A_Contract_Date<small> timestamp without time zone <br/> Date</small> | 
| Asset Expired Date |  |  | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).A_Expired_Date<small> timestamp without time zone <br/> Date</small> | 
| Asset Monthly Payment |  |  | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).A_Monthly_Payment<small> numeric <br/> Amount</small> | 
| Asset Due On |  |  | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).A_Due_On<small> character varying(22) <br/> List</small> | 
| Purchase Option |  |  | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).A_Purchase_Option<small> character(1) <br/> Yes-No</small> | 
| Purchase Price |  |  | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).A_Purchase_Price<small> numeric <br/> Amount</small> | 
| Purchase Option Credit |  |  | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).A_Purchase_Option_Credit<small> numeric(10) <br/> Integer</small> | 
| Purchase Option Credit % |  |  | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).A_Purchase_Option_Credit_Per<small> numeric <br/> Number</small> | 
| Text Message | Text Message |  | [a_asset_info_fin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_fin.html).TextMsg<small> character varying(510) <br/> Text</small> | 


### Tab: License Information

**[Created:** 30/05/2008 - **Updated:** 19/05/2011 **]**   
**Description:** License Information for Asset  
**Help:**   
**Tab Level:** 1

Table 40: License Information - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_info_lic](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_lic.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_info_lic](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_lic.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_asset_info_lic](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_lic.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Description |  |  | [a_asset_info_lic](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_lic.html).Text<small> character varying(510) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_asset_info_lic](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_lic.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Account State | State of the Credit Card or Account holder | The State of the Credit Card or Account holder | [a_asset_info_lic](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_lic.html).A_State<small> character varying(60) <br/> String</small> | 
| Issuing Agency |  |  | [a_asset_info_lic](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_lic.html).A_Issuing_Agency<small> character varying(22) <br/> String</small> | 
| Asset License No |  |  | [a_asset_info_lic](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_lic.html).A_License_No<small> character varying(120) <br/> String</small> | 
| Asset License Fee |  |  | [a_asset_info_lic](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_lic.html).A_License_Fee<small> numeric <br/> Amount</small> | 
| Asset Renewal Date |  |  | [a_asset_info_lic](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_lic.html).A_Renewal_Date<small> timestamp without time zone <br/> Date</small> | 


### Tab: Insurance Information

**[Created:** 30/05/2008 - **Updated:** 20/06/2010 **]**   
**Description:** Insurance Information for asset  
**Help:**   
**Tab Level:** 1

Table 45: Insurance Information - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_info_ins](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_ins.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_info_ins](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_ins.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_asset_info_ins](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_ins.html).A_Asset_ID<small> numeric(10) <br/> ID</small> | 
| Insurance Company |  |  | [a_asset_info_ins](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_ins.html).A_Insurance_Co<small> character varying(22) <br/> String</small> | 
| Asset Policy No |  |  | [a_asset_info_ins](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_ins.html).A_Policy_No<small> character varying(100) <br/> String</small> | 
| Asset Renewal Date |  |  | [a_asset_info_ins](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_ins.html).A_Renewal_Date<small> timestamp without time zone <br/> Date</small> | 
| Asset Insurance Premium |  |  | [a_asset_info_ins](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_ins.html).A_Ins_Premium<small> numeric <br/> Amount</small> | 
| Asset Replace Cost |  |  | [a_asset_info_ins](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_ins.html).A_Replace_Cost<small> numeric <br/> Amount</small> | 
| Asset Insurance Value |  |  | [a_asset_info_ins](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_ins.html).A_Ins_Value<small> numeric <br/> Amount</small> | 
| Description |  |  | [a_asset_info_ins](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_ins.html).Text<small> character varying(510) <br/> String</small> | 


### Tab: Tax Information

**[Created:** 30/05/2008 - **Updated:** 20/06/2010 **]**   
**Description:** Tax information for asset  
**Help:**   
**Tab Level:** 1

Table 50: Tax Information - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_info_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_tax.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_info_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_tax.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_asset_info_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_tax.html).A_Asset_ID<small> numeric(10) <br/> ID</small> | 
| Asset Tax Entity |  |  | [a_asset_info_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_tax.html).A_Tax_Entity<small> character varying(22) <br/> String</small> | 
| Account State | State of the Credit Card or Account holder | The State of the Credit Card or Account holder | [a_asset_info_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_tax.html).A_State<small> character varying(60) <br/> String</small> | 
| Asset New Used |  |  | [a_asset_info_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_tax.html).A_New_Used<small> character(1) <br/> Yes-No</small> | 
| Asset Finance Method |  |  | [a_asset_info_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_tax.html).A_Finance_Meth<small> character varying(2) <br/> List</small> | 
| Asset Investment CR |  |  | [a_asset_info_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_tax.html).A_Investment_CR<small> numeric(10) <br/> Integer</small> | 
| Text Message | Text Message |  | [a_asset_info_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_tax.html).TextMsg<small> character varying(510) <br/> String</small> | 


### Tab: Other Information

**[Created:** 30/05/2008 - **Updated:** 20/06/2010 **]**   
**Description:** Other information associated with asset  
**Help:**   
**Tab Level:** 1

Table 55: Other Information - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_Asset_ID<small> numeric(10) <br/> ID</small> | 
| A_User1 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User1<small> character varying(3) <br/> String</small> | 
| A_User10 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User10<small> character varying(3) <br/> String</small> | 
| A_User2 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User2<small> character varying(3) <br/> String</small> | 
| A_User11 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User11<small> character varying(10) <br/> String</small> | 
| A_User3 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User3<small> character varying(3) <br/> String</small> | 
| A_User12 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User12<small> character varying(10) <br/> String</small> | 
| A_User4 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User4<small> character varying(3) <br/> String</small> | 
| A_User13 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User13<small> character varying(10) <br/> String</small> | 
| A_User5 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User5<small> character varying(3) <br/> String</small> | 
| A_User14 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User14<small> character varying(10) <br/> String</small> | 
| A_User6 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User6<small> character varying(3) <br/> String</small> | 
| A_User15 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User15<small> character varying(10) <br/> String</small> | 
| A_User7 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User7<small> character varying(3) <br/> String</small> | 
| A_User8 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User8<small> character varying(3) <br/> String</small> | 
| A_User9 |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).A_User9<small> character varying(3) <br/> String</small> | 
| Description |  |  | [a_asset_info_oth](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_info_oth.html).Text<small> character varying(510) <br/> Memo</small> | 


### Tab: Expense

**[Created:** 17/06/2010 - **Updated:** 19/05/2011 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 65: Expense - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Entry Type |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Entry_Type<small> character varying(3) <br/> List</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).Description<small> character varying(255) <br/> String</small> | 
| Expense |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).Expense<small> numeric <br/> Amount</small> | 
| Expense (fiscal) |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).Expense_F<small> numeric <br/> Amount</small> | 
| Account (debit) | Account used | The (natural) account used | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).DR_Account_ID<small> numeric(10) <br/> Account</small> | 
| Account (credit) | Account used | The (natural) account used | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).CR_Account_ID<small> numeric(10) <br/> Account</small> | 
| Asset Period |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Period<small> numeric(10) <br/> Integer</small> | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).DateAcct<small> timestamp without time zone <br/> Date</small> | 
| Posting Type | The type of posted amount for the transaction | The Posting Type indicates the type of amount (Actual, Budget, Reservation, Commitment, Statistical) the transaction. | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).PostingType<small> character(1) <br/> List</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Process Depreciation Expense |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).Processing<small> character(1) <br/> Button</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).Help<small> character varying(2000) <br/> Text</small> | 
| Asset Cost |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Asset_Cost<small> numeric <br/> Amount</small> | 
| Delta Asset Cost |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Asset_Cost_Delta<small> numeric <br/> Amount</small> | 
| Accumulated Depreciation |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Accumulated_Depr<small> numeric <br/> Amount</small> | 
| Accumulated Depreciation (delta) |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Accumulated_Depr_Delta<small> numeric <br/> Amount</small> | 
| Accumulated Depreciation (fiscal) |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Accumulated_Depr_F<small> numeric <br/> Amount</small> | 
| Accumulated Depreciation - fiscal (delta) |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Accumulated_Depr_F_Delta<small> numeric <br/> Amount</small> | 
| Remaining Amt |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Asset_Remaining<small> numeric <br/> Amount</small> | 
| Remaining Amt (fiscal) |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Asset_Remaining_F<small> numeric <br/> Amount</small> | 
| Usable Life - Months | Months of the usable life of the asset |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).UseLifeMonths<small> numeric(10) <br/> Integer</small> | 
| Use Life - Months (fiscal) |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).UseLifeMonths_F<small> numeric(10) <br/> Integer</small> | 
| Asset Addition |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Asset_Addition_ID<small> numeric(10) <br/> Search</small> | 
| Asset Disposed |  |  | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).A_Asset_Disposed_ID<small> numeric(10) <br/> Search</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [a_depreciation_exp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation_exp.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 


