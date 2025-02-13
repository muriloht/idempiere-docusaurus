# Window: Address Validation

**[Created:** 19/08/2013 - **Updated:** 19/08/2013 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/AddressValidation-Window_iDempiere_v12.0.0.png)

### Tab: Address Validation

**[Created:** 19/08/2013 - **Updated:** 19/08/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Address Validation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_addressvalidation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidation.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_addressvalidation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidation.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Address Validation Configuration |  |  | [c_addressvalidation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidation.html).C_AddressValidationCfg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_addressvalidation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidation.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_addressvalidation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidation.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [c_addressvalidation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidation.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| User ID | User ID or account number | The User ID identifies a user and allows access to records or processes. | [c_addressvalidation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidation.html).UserID<small> character varying(60) <br/> String</small> | 
| Connection Key |  |  | [c_addressvalidation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidation.html).ConnectionKey<small> character varying(60) <br/> String</small> | 
| Connection Password |  |  | [c_addressvalidation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidation.html).ConnectionPassword<small> character varying(60) <br/> String</small> | 
| Shipper Account Number |  |  | [c_addressvalidation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidation.html).ShipperAccount<small> character varying(40) <br/> String</small> | 
| Shipper Meter |  |  | [c_addressvalidation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidation.html).ShipperMeter<small> character varying(255) <br/> String</small> | 


