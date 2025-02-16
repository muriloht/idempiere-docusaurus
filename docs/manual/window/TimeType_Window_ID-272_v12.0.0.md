# Window: Time Type

**[Created:** 02/06/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Time Recording Type  
**Help:** Maintain different types of time for reporting  
![](/img/docs/manual/TimeType-Window_iDempiere_v12.0.0.png)

### Tab: Time Type

**[Created:** 02/06/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Type of Time recorded  
**Help:** Differentiate time types for reporting purposes (In parallel to Activities)  
**Tab Level:** 0

Table 10: Time Type - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [s_timetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timetype.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [s_timetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timetype.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [s_timetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timetype.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [s_timetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timetype.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [s_timetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timetype.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [s_timetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timetype.html).IsActive<small> character(1) <br/> Yes-No</small> | 


