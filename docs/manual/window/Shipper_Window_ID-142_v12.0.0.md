# Window: Shipper

**[Created:** 09/08/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Shippers  
**Help:** The Shipper Window defines the different shipping provides used by an Organization.  When a delivery method of Shipper is used on an Order a predefined Shipper must be selected.  
![](/img/docs/manual/Shipper-Window_iDempiere_v12.0.0.png)

### Tab: Shipper

**[Created:** 09/08/1999 - **Updated:** 17/12/2007 **]**   
**Description:** Shippers  
**Help:** The Shippers Tab defines any entity who will provide shipping to or shipping from an Organization.  
**Tab Level:** 0

Table 10: Shipper - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_shipper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipper.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_shipper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipper.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_shipper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipper.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_shipper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipper.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [m_shipper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipper.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Shipper Configuration |  |  | [m_shipper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipper.html).M_ShipperCfg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Shipping Processor |  |  | [m_shipper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipper.html).M_ShippingProcessor_ID<small> numeric(10) <br/> Table</small> | 
| Shipper Create From ... |  |  | [m_shipper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipper.html).CreateFrom<small> character(1) <br/> Button</small> | 


### Tab: Freight

**[Created:** 07/06/2003 - **Updated:** 17/12/2007 **]**   
**Description:** Freight Rates  
**Help:** Freight Rates for Shipper  
**Tab Level:** 1

Table 20: Freight - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Shipper | Method or manner of product delivery | The Shipper indicates the method of delivering product | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).M_Shipper_ID<small> numeric(10) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Freight Category | Category of the Freight | Freight Categories are used to calculate the Freight for the Shipper selected | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).M_FreightCategory_ID<small> numeric(10) <br/> Table Direct</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).ValidFrom<small> timestamp without time zone <br/> Date</small> | 
| Max Weight |  |  | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).MaxWeight<small> numeric <br/> Amount</small> | 
| Max Dimension |  |  | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).MaxDimension<small> numeric <br/> Amount</small> | 
| Country | Country | The Country defines a Country.  Each Country must be defined before it can be used in any document. | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).C_Country_ID<small> numeric(10) <br/> Table Direct</small> | 
| To | Receiving Country | The To Country indicates the receiving country on a document | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).To_Country_ID<small> numeric(10) <br/> Table</small> | 
| Region | Identifies a geographical Region | The Region identifies a unique Region for this Country. | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).C_Region_ID<small> numeric(10) <br/> Table Direct</small> | 
| To | Receiving Region | The To Region indicates the receiving region on a document | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).To_Region_ID<small> numeric(10) <br/> Table</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Freight Amount | Freight Amount | The Freight Amount indicates the amount charged for Freight in the document currency. | [m_freight](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freight.html).FreightAmt<small> numeric <br/> Amount</small> | 


### Tab: Packaging

**[Created:** 06/12/2012 - **Updated:** 06/12/2012 **]**   
**Description:** Packaging Options supported by the Shipper  
**Help:**   
**Tab Level:** 1

Table 30: Packaging - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_shipperpackaging](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackaging.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_shipperpackaging](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackaging.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Shipper | Method or manner of product delivery | The Shipper indicates the method of delivering product | [m_shipperpackaging](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackaging.html).M_Shipper_ID<small> numeric(10) <br/> Table</small> | 
| Shipper Packaging Configuration |  |  | [m_shipperpackaging](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackaging.html).M_ShipperPackagingCfg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_shipperpackaging](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackaging.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_shipperpackaging](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackaging.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [m_shipperpackaging](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackaging.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Weight | Weight of a product | The Weight indicates the weight  of the product in the Weight UOM of the Tenant | [m_shipperpackaging](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackaging.html).Weight<small> numeric <br/> Quantity</small> | 


### Tab: Label Type

**[Created:** 06/12/2012 - **Updated:** 06/12/2012 **]**   
**Description:** Label Types Supported by the Shipper.  
**Help:** Used when booking a shipment online to define the label format that will be printed.  
**Tab Level:** 1

Table 40: Label Type - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_shipperlabels](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabels.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_shipperlabels](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabels.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Shipper | Method or manner of product delivery | The Shipper indicates the method of delivering product | [m_shipperlabels](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabels.html).M_Shipper_ID<small> numeric(10) <br/> Table</small> | 
| Shipper Labels Configuration |  |  | [m_shipperlabels](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabels.html).M_ShipperLabelsCfg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_shipperlabels](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabels.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_shipperlabels](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabels.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [m_shipperlabels](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabels.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Label Print Method |  |  | [m_shipperlabels](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabels.html).LabelPrintMethod<small> character(1) <br/> List</small> | 


### Tab: Pickup Types

**[Created:** 06/12/2012 - **Updated:** 06/12/2012 **]**   
**Description:** Methods that the Shipper will support for picking up from your location  
**Help:**   
**Tab Level:** 1

Table 50: Pickup Types - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_shipperpickuptypes](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypes.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_shipperpickuptypes](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypes.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Shipper | Method or manner of product delivery | The Shipper indicates the method of delivering product | [m_shipperpickuptypes](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypes.html).M_Shipper_ID<small> numeric(10) <br/> Table</small> | 
| Shipper Pickup Types Configuration |  |  | [m_shipperpickuptypes](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypes.html).M_ShipperPickupTypesCfg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_shipperpickuptypes](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypes.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_shipperpickuptypes](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypes.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [m_shipperpickuptypes](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypes.html).IsDefault<small> character(1) <br/> Yes-No</small> | 


