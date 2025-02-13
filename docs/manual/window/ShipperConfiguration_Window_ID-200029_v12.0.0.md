# Window: Shipper Configuration

**[Created:** 13/12/2012 - **Updated:** 13/12/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ShipperConfiguration-Window_iDempiere_v12.0.0.png)

### Tab: Shipper

**[Created:** 13/12/2012 - **Updated:** 13/12/2012 **]**   
**Description:** Shippers  
**Help:** The Shippers Tab defines any entity who will provide shipping to or shipping from an Organization.  
**Tab Level:** 0

Table 10: Shipper - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Online Access | Can be accessed online | The Online Access check box indicates if the application can be accessed via the web. | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).IsOnline<small> character(1) <br/> Yes-No</small> | 
| Shipping Processor Configuration |  |  | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).M_ShippingProcessorCfg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Service Code |  |  | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).ShippingServiceCode<small> character varying(40) <br/> String</small> | 
| Tracking URL | URL of the shipper to track shipments | The variable @TrackingNo@ in the URL is replaced by the actual tracking number of the shipment. | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).TrackingURL<small> character varying(120) <br/> URL</small> | 
| International |  |  | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).IsInternational<small> character(1) <br/> Yes-No</small> | 
| Saturday Delivery |  |  | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).IsSaturdayDelivery<small> character(1) <br/> Yes-No</small> | 
| Residential |  |  | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).IsResidential<small> character(1) <br/> Yes-No</small> | 
| Shipper Copy From ... |  |  | [m_shippercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippercfg.html).CopyFrom<small> character(1) <br/> Button</small> | 


### Tab: Packaging

**[Created:** 13/12/2012 - **Updated:** 13/12/2012 **]**   
**Description:** Packaging Options supported by the Shipper  
**Help:**   
**Tab Level:** 1

Table 20: Packaging - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_shipperpackagingcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackagingcfg.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_shipperpackagingcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackagingcfg.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Shipper Configuration |  |  | [m_shipperpackagingcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackagingcfg.html).M_ShipperCfg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_shipperpackagingcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackagingcfg.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_shipperpackagingcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackagingcfg.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_shipperpackagingcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackagingcfg.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_shipperpackagingcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackagingcfg.html).Description<small> character varying(255) <br/> String</small> | 
| Weight | Weight of a product | The Weight indicates the weight  of the product in the Weight UOM of the Tenant | [m_shipperpackagingcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackagingcfg.html).Weight<small> numeric <br/> Quantity</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [m_shipperpackagingcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpackagingcfg.html).IsDefault<small> character(1) <br/> Yes-No</small> | 


### Tab: Label Type

**[Created:** 13/12/2012 - **Updated:** 13/12/2012 **]**   
**Description:** Label Types Supported by the Shipper.  
**Help:** Used when booking a shipment online to define the label format that will be printed.  
**Tab Level:** 1

Table 30: Label Type - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_shipperlabelscfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabelscfg.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_shipperlabelscfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabelscfg.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Shipper Configuration |  |  | [m_shipperlabelscfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabelscfg.html).M_ShipperCfg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_shipperlabelscfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabelscfg.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_shipperlabelscfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabelscfg.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_shipperlabelscfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabelscfg.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_shipperlabelscfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabelscfg.html).Description<small> character varying(255) <br/> String</small> | 
| Width |  |  | [m_shipperlabelscfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabelscfg.html).Width<small> numeric <br/> Quantity</small> | 
| Height |  |  | [m_shipperlabelscfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabelscfg.html).Height<small> numeric <br/> Quantity</small> | 
| Label Print Method |  |  | [m_shipperlabelscfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabelscfg.html).LabelPrintMethod<small> character(1) <br/> List</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [m_shipperlabelscfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperlabelscfg.html).IsDefault<small> character(1) <br/> Yes-No</small> | 


### Tab: Pickup Types

**[Created:** 13/12/2012 - **Updated:** 13/12/2012 **]**   
**Description:** Methods that the Shipper will support for picking up from your location  
**Help:**   
**Tab Level:** 1

Table 40: Pickup Types - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_shipperpickuptypescfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypescfg.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_shipperpickuptypescfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypescfg.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Shipper Configuration |  |  | [m_shipperpickuptypescfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypescfg.html).M_ShipperCfg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_shipperpickuptypescfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypescfg.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_shipperpickuptypescfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypescfg.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_shipperpickuptypescfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypescfg.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_shipperpickuptypescfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypescfg.html).Description<small> character varying(255) <br/> String</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [m_shipperpickuptypescfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shipperpickuptypescfg.html).IsDefault<small> character(1) <br/> Yes-No</small> | 


