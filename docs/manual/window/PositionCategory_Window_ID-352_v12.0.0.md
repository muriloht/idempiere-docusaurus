# Window: Position Category

**[Created:** 15/05/2005 - **Updated:** 13/11/2005 **]**  
**Description:** Maintain Job Position Categories  
**Help:**   
![](/img/docs/manual/PositionCategory-Window_iDempiere_v12.0.0.png)

### Tab: Position Category

**[Created:** 15/05/2005 - **Updated:** 15/05/2005 **]**   
**Description:** Maintain Job Position Categories  
**Help:**   
**Tab Level:** 0

Table 10: Position Category - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_jobcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobcategory.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_jobcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobcategory.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_jobcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobcategory.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_jobcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobcategory.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_jobcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobcategory.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_jobcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_jobcategory.html).IsActive<small> character(1) <br/> Yes-No</small> | 


