# Window: Registration

**[Created:** 08/01/2004 - **Updated:** 17/02/2022 **]**  
**Description:** User Asset Registration  
**Help:** User Registration of an Asset  
![](/img/docs/manual/Registration-Window_iDempiere_v12.0.0.png)

### Tab: Registration

**[Created:** 08/01/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Asset User Registration  
**Help:** User Registration of an Asset  
**Tab Level:** 0

Table 10: Registration - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Registered | The application is registered. |  | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).IsRegistered<small> character(1) <br/> Yes-No</small> | 
| Allowed to be Published | You allow to publish the information, not just statistical summary info |  | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).IsAllowPublish<small> character(1) <br/> Yes-No</small> | 
| In Production | The system is in production |  | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).IsInProduction<small> character(1) <br/> Yes-No</small> | 
| In Service Date | Date when Asset was put into service | The date when the asset was put into service - usually used as start date for depreciation. | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).AssetServiceDate<small> timestamp without time zone <br/> Date</small> | 
| Note | Optional additional user defined information | The Note field allows for optional entry of user defined information regarding this record | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).Note<small> character varying(2000) <br/> String</small> | 
| Remote Host | Remote host Info |  | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).Remote_Host<small> character varying(120) <br/> String</small> | 
| Remote Addr | Remote Address | The Remote Address indicates an alternative or external address. | [a_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registration.html).Remote_Addr<small> character varying(60) <br/> String</small> | 


### Tab: Value

**[Created:** 08/01/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Registration Values  
**Help:** Indivifual values of Registration Attribute  
**Tab Level:** 1

Table 20: Value - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_registrationvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationvalue.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_registrationvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationvalue.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Registration | User Asset Registration | User Registration of an Asset | [a_registrationvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationvalue.html).A_Registration_ID<small> numeric(10) <br/> Table Direct</small> | 
| Registration Attribute | Asset Registration Attribute | Define the individual values for the Asset Registration | [a_registrationvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationvalue.html).A_RegistrationAttribute_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [a_registrationvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationvalue.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_registrationvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationvalue.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_registrationvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationvalue.html).IsActive<small> character(1) <br/> Yes-No</small> | 


