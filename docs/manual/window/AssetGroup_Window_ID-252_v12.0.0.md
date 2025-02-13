# Window: Asset Group

**[Created:** 23/01/2003 - **Updated:** 17/06/2010 **]**  
**Description:** Group of Assets  
**Help:** The group of assets determines default accounts.  If a asset group is selected in the product category, assets are created when delivering the asset.  
![](/img/docs/manual/AssetGroup-Window_iDempiere_v12.0.0.png)

### Tab: Asset Group

**[Created:** 23/01/2003 - **Updated:** 17/06/2010 **]**   
**Description:** Group of Assets  
**Help:** The group of assets determines default accounts.  If a asset group is selected in the product category, assets are created when delivering the asset.  
**Tab Level:** 0

Table 10: Asset Group - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [a_asset_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_asset_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [a_asset_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_asset_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [a_asset_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Owned | The asset is owned by the organization | The asset may not be in possession, but the asset is legally owned by the organization | [a_asset_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group.html).IsOwned<small> character(1) <br/> Yes-No</small> | 
| Depreciate | The asset will be depreciated | The asset is used internally and will be depreciated | [a_asset_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group.html).IsDepreciated<small> character(1) <br/> Yes-No</small> | 
| One Asset Per UOM | Create one asset per UOM | If selected, one asset per UOM is created, otherwise one asset with the quantity received/shipped.  If you have multiple lines, one asset is created per line. | [a_asset_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group.html).IsOneAssetPerUOM<small> character(1) <br/> Yes-No</small> | 
| Is Fixed Asset |  |  | [a_asset_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group.html).IsFixedAsset<small> character(1) <br/> Yes-No</small> | 


### Tab: Group Account

**[Created:** 30/05/2008 - **Updated:** 06/12/2011 **]**   
**Description:** Setup for Group Accounts  
**Help:**   
**Tab Level:** 1

Table 20: Group Account - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset Group | Group of Assets | The group of assets determines default accounts.  If an asset group is selected in the product category, assets are created when delivering the asset. | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).A_Asset_Group_ID<small> numeric(10) <br/> Table Direct</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Posting Type | The type of posted amount for the transaction | The Posting Type indicates the type of amount (Actual, Budget, Reservation, Commitment, Statistical) the transaction. | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).PostingType<small> character(1) <br/> List</small> | 
| Depreciation |  |  | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).A_Depreciation_ID<small> numeric(10) <br/> Table</small> | 
| Depreciation (fiscal) |  |  | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).A_Depreciation_F_ID<small> numeric(10) <br/> Table</small> | 
| Usable Life - Years | Years of the usable life of the asset |  | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).UseLifeYears<small> numeric <br/> Number</small> | 
| Use Life - Years (fiscal) |  |  | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).UseLifeYears_F<small> numeric <br/> Number</small> | 
| Usable Life - Months | Months of the usable life of the asset |  | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).UseLifeMonths<small> numeric(10) <br/> Integer</small> | 
| Use Life - Months (fiscal) |  |  | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).UseLifeMonths_F<small> numeric(10) <br/> Integer</small> | 
| Asset Acct |  |  | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).A_Asset_Acct<small> numeric(10) <br/> Account</small> | 
| Accumulated Depreciation Account |  |  | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).A_Accumdepreciation_Acct<small> numeric(10) <br/> Account</small> | 
| Depreciation Account |  |  | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).A_Depreciation_Acct<small> numeric(10) <br/> Account</small> | 
| Disposal Revenue Acct |  |  | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).A_Disposal_Revenue_Acct<small> numeric(10) <br/> Account</small> | 
| Disposal Loss Acct |  |  | [a_asset_group_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_acct.html).A_Disposal_Loss_Acct<small> numeric(10) <br/> Account</small> | 


### Tab: Translation

**[Created:** 21/03/2014 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_asset_group_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_asset_group_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Asset Group | Group of Assets | The group of assets determines default accounts.  If an asset group is selected in the product category, assets are created when delivering the asset. | [a_asset_group_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_trl.html).A_Asset_Group_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [a_asset_group_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_asset_group_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [a_asset_group_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [a_asset_group_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_asset_group_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [a_asset_group_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_asset_group_trl.html).Help<small> character varying(2000) <br/> Text</small> | 


