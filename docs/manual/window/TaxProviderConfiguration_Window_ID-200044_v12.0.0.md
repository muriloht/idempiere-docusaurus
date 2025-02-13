# Window: Tax Provider Configuration

**[Created:** 14/08/2013 - **Updated:** 14/08/2013 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/TaxProviderConfiguration-Window_iDempiere_v12.0.0.png)

### Tab: Tax Provider Configuration

**[Created:** 14/08/2013 - **Updated:** 14/08/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Tax Provider Configuration - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_taxprovidercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxprovidercfg.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_taxprovidercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxprovidercfg.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_taxprovidercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxprovidercfg.html).Name<small> character varying(120) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_taxprovidercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxprovidercfg.html).Description<small> character varying(255) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_taxprovidercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxprovidercfg.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| URL | Full URL address - e.g. http://www.idempiere.org | The URL defines an fully qualified web address like http://www.idempiere.org | [c_taxprovidercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxprovidercfg.html).URL<small> character varying(120) <br/> URL</small> | 
| Tax Provider Class |  |  | [c_taxprovidercfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxprovidercfg.html).TaxProviderClass<small> character varying(60) <br/> String</small> | 


