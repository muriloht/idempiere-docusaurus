# Window: Print Header/Footer

**[Created:** 28/07/2021 - **Updated:** 28/07/2021 **]**  
**Description:** Maintain Print Header/Footer  
**Help:**   
![](/img/docs/manual/PrintHeaderFooter-Window_iDempiere_v12.0.0.png)

### Tab: Print Header/Footer

**[Created:** 28/07/2021 - **Updated:** 28/07/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Print Header/Footer - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_printheaderfooter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printheaderfooter.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_printheaderfooter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printheaderfooter.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_printheaderfooter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printheaderfooter.html).Name<small> character varying(60) <br/> String</small> | 
| Source Class | Source Class Name |  | [ad_printheaderfooter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printheaderfooter.html).SourceClassName<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_printheaderfooter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printheaderfooter.html).IsActive<small> character(1) <br/> Yes-No</small> | 


