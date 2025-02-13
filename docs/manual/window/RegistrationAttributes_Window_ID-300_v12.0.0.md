# Window: Registration Attributes

**[Created:** 08/01/2004 - **Updated:** 17/02/2022 **]**  
**Description:** Asset Registration Attributes  
**Help:** Define the individual values for the Asset Registration  
![](/img/docs/manual/RegistrationAttributes-Window_iDempiere_v12.0.0.png)

### Tab: Attribute

**[Created:** 08/01/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Asset Registration Attribute  
**Help:** Define the individual values for the Asset Registration  
**Tab Level:** 0

Table 10: Attribute - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_registrationattribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationattribute.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_registrationattribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationattribute.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [a_registrationattribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationattribute.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_registrationattribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationattribute.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_registrationattribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationattribute.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [a_registrationattribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationattribute.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [a_registrationattribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationattribute.html).AD_Reference_ID<small> numeric(10) <br/> Table</small> | 
| DB Column Name | Name of the column in the database | The Column Name indicates the name of a column on a table as defined in the database. | [a_registrationattribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationattribute.html).ColumnName<small> character varying(63) <br/> String</small> | 
| Reference Key | Required to specify, if data type is Table or List | The Reference Value indicates where the reference values are stored.  It must be specified if the data type is Table or List. | [a_registrationattribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationattribute.html).AD_Reference_Value_ID<small> numeric(10) <br/> Table</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [a_registrationattribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationattribute.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 


### Tab: Product Assignment

**[Created:** 10/04/2004 - **Updated:** 15/01/2024 **]**   
**Description:** Assignment of Attributes to Products  
**Help:** Determines, which attributes are assigned to a product  
**Tab Level:** 1

Table 20: Product Assignment - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_registrationproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationproduct.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_registrationproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationproduct.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Registration Attribute | Asset Registration Attribute | Define the individual values for the Asset Registration | [a_registrationproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationproduct.html).A_RegistrationAttribute_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [a_registrationproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationproduct.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_registrationproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationproduct.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_registrationproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_registrationproduct.html).IsActive<small> character(1) <br/> Yes-No</small> | 


