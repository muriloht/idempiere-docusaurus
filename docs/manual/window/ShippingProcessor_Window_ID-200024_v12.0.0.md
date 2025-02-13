# Window: Shipping Processor

**[Created:** 06/12/2012 - **Updated:** 06/12/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ShippingProcessor-Window_iDempiere_v12.0.0.png)

### Tab: Shipping Processor

**[Created:** 06/12/2012 - **Updated:** 06/12/2012 **]**   
**Description:** Shipping Processors  
**Help:** Shipping processor tab to define integration details with online shipping services.  
**Tab Level:** 0

Table 10: Shipping Processor - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_shippingprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingprocessor.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_shippingprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingprocessor.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Shipping Processor Configuration |  |  | [m_shippingprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingprocessor.html).M_ShippingProcessorCfg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_shippingprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingprocessor.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_shippingprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingprocessor.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| User ID | User ID or account number | The User ID identifies a user and allows access to records or processes. | [m_shippingprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingprocessor.html).UserID<small> character varying(60) <br/> String</small> | 
| Connection Key |  |  | [m_shippingprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingprocessor.html).ConnectionKey<small> character varying(60) <br/> String</small> | 
| Connection Password |  |  | [m_shippingprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingprocessor.html).ConnectionPassword<small> character varying(60) <br/> String</small> | 


