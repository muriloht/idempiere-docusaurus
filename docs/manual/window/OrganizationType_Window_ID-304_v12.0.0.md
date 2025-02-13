# Window: Organization Type

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Organization Types  
**Help:** Organization Type allows you to categorize your organizations for reporting purposes  
![](/img/docs/manual/OrganizationType-Window_iDempiere_v12.0.0.png)

### Tab: Org Type

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Organization Type allows you to categorize your organizations  
**Help:** Organization Type allows you to categorize your organizations for reporting purposes  
**Tab Level:** 0

Table 10: Org Type - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_orgtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orgtype.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_orgtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orgtype.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_orgtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orgtype.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_orgtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orgtype.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_orgtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orgtype.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Print Color | Color used for printing and display | Colors used for printing and display | [ad_orgtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orgtype.html).AD_PrintColor_ID<small> numeric(10) <br/> Table Direct</small> | 


