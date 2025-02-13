# Window: Commodity Shipment

**[Created:** 06/12/2012 - **Updated:** 06/12/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/CommodityShipment-Window_iDempiere_v12.0.0.png)

### Tab: Commodity Shipment

**[Created:** 06/12/2012 - **Updated:** 06/12/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Commodity Shipment - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_commodityshipment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_commodityshipment.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_commodityshipment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_commodityshipment.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_commodityshipment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_commodityshipment.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_commodityshipment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_commodityshipment.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Harmonized Code |  |  | [m_commodityshipment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_commodityshipment.html).HarmonizedCode<small> character varying(30) <br/> String</small> | 
| Country Of Manufacture |  |  | [m_commodityshipment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_commodityshipment.html).CountryOfManufacture_ID<small> numeric(10) <br/> Table</small> | 
| Export License Number |  |  | [m_commodityshipment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_commodityshipment.html).ExportLicenseNum<small> character varying(30) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_commodityshipment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_commodityshipment.html).Description<small> character varying(255) <br/> String</small> | 


