# Window: Lot

**[Created:** 05/05/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Product Lot Definition  
**Help:** Maintain the individual Lot of a Product  
![](/img/docs/manual/Lot-Window_iDempiere_v12.0.0.png)

### Tab: Lot

**[Created:** 05/05/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Product Lot Definition  
**Help:** Maintain the individual Lot of a Product  
**Tab Level:** 0

Table 10: Lot - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_lot](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_lot.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_lot](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_lot.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_lot](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_lot.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Lot Control | Product Lot Control | Definition to create Lot numbers for Products | [m_lot](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_lot.html).M_LotCtl_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_lot](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_lot.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_lot](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_lot.html).Description<small> character varying(255) <br/> Text</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [m_lot](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_lot.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_lot](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_lot.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Date From | Starting date for a range | The Date From indicates the starting date of a range. | [m_lot](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_lot.html).DateFrom<small> timestamp without time zone <br/> Date</small> | 
| Date To | End date of a date range | The Date To indicates the end date of a range (inclusive) | [m_lot](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_lot.html).DateTo<small> timestamp without time zone <br/> Date</small> | 


