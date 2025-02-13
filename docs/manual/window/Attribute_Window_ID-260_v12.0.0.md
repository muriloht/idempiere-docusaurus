# Window: Attribute

**[Created:** 06/05/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Product Attribute  
**Help:** Product Attribute like Color, Size, etc.  
![](/img/docs/manual/Attribute-Window_iDempiere_v12.0.0.png)

### Tab: Attribute

**[Created:** 05/05/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Product Attribute  
**Help:** Product Attribute like Color, Size, etc.  If it is an Instance Attribute, all products have the same value.  
**Tab Level:** 0

Table 10: Attribute - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Mandatory | Data entry is required in this column | The field must have a value for the record to be saved to the database. | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).IsMandatory<small> character(1) <br/> Yes-No</small> | 
| Attribute Value Type | Type of Attribute Value | The Attribute Value type determines the data/validation type | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).AttributeValueType<small> character(1) <br/> List</small> | 
| Instance Attribute | The product attribute is specific to the instance (like Serial No, Lot or Guarantee Date) | If selected, the individual instance of the product has this attribute - like the individual Serial or Lot Numbers or  Guarantee Date of a product instance.  If not selected, all instances of the product share the attribute (e.g. color=green). | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).IsInstanceAttribute<small> character(1) <br/> Yes-No</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).AD_Reference_ID<small> numeric(10) <br/> Table</small> | 
| Reference Key | Required to specify, if data type is Table or List | The Reference Value indicates where the reference values are stored.  It must be specified if the data type is Table or List. | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).AD_Reference_Value_ID<small> numeric(10) <br/> Table</small> | 
| Date Format | Date format used in the input format | The date format is usually detected, but sometimes need to be defined. | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).DateFormat<small> character varying(20) <br/> String</small> | 
| Dynamic Validation | Dynamic Validation Rule | These rules define how an entry is determined to valid. You can use variables for dynamic (context sensitive) validation. | [m_attribute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attribute.html).AD_Val_Rule_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Attribute Value

**[Created:** 05/05/2003 - **Updated:** 27/02/2024 **]**   
**Description:** Product Attribute Value  
**Help:** Individual value of a product attribute (e.g. green, large, ..)  
**Tab Level:** 1

Table 20: Attribute Value - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_attributevalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributevalue.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_attributevalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributevalue.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Attribute | Product Attribute | Product Attribute like Color, Size | [m_attributevalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributevalue.html).M_Attribute_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_attributevalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributevalue.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_attributevalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributevalue.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_attributevalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributevalue.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_attributevalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributevalue.html).IsActive<small> character(1) <br/> Yes-No</small> | 


