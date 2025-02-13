# Window: Freight Category

**[Created:** 07/06/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Freight Categories  
**Help:** Freight Categories are used to calculate the Freight for the Shipper selected  
![](/img/docs/manual/FreightCategory-Window_iDempiere_v12.0.0.png)

### Tab: Freight Category

**[Created:** 07/06/2003 - **Updated:** 17/12/2007 **]**   
**Description:** Category of the Freight  
**Help:** Freight Categories are used to calculate the Freight for the Shipper selected  
**Tab Level:** 0

Table 10: Freight Category - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_freightcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freightcategory.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_freightcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freightcategory.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_freightcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freightcategory.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_freightcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freightcategory.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_freightcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freightcategory.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [m_freightcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freightcategory.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_freightcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_freightcategory.html).IsActive<small> character(1) <br/> Yes-No</small> | 


