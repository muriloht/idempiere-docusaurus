# Window: Part Type

**[Created:** 27/07/2011 - **Updated:** 27/07/2011 **]**  
**Description:** Manufacturing Part Types  
**Help:**   
![](/img/docs/manual/PartType-Window_iDempiere_v12.0.0.png)

### Tab: Type

**[Created:** 27/07/2011 - **Updated:** 27/07/2011 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Type - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_parttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_parttype.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_parttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_parttype.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_parttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_parttype.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_parttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_parttype.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_parttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_parttype.html).IsActive<small> character(1) <br/> Yes-No</small> | 


