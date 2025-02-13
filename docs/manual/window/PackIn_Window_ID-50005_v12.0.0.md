# Window: Pack In

**[Created:** 11/12/2006 - **Updated:** 28/05/2012 **]**  
**Description:** Imports a package  
**Help:** Imports a package previously created by PackOut  
![](/img/docs/manual/PackIn-Window_iDempiere_v12.0.0.png)

### Tab: PackIn

**[Created:** 11/12/2006 - **Updated:** 14/08/2015 **]**   
**Description:** Import a package created by PackOut  
**Help:**   
**Tab Level:** 0

Table 10: PackIn - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_package_imp_proc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_proc.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_package_imp_proc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_proc.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_package_imp_proc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_proc.html).Name<small> character varying(500) <br/> String</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_package_imp_proc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_proc.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Date Processed |  |  | [ad_package_imp_proc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_proc.html).DateProcessed<small> timestamp without time zone <br/> Date+Time</small> | 
| Process Message |  |  | [ad_package_imp_proc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_proc.html).P_Msg<small> character varying(2000) <br/> Text</small> | 
| PackIn | Import Package | Import a package | [ad_package_imp_proc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_proc.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Package Installation

**[Created:** 13/08/2015 - **Updated:** 12/11/2020 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Package Installation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Package Imp. Proc. |  |  | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).AD_Package_Imp_Proc_ID<small> numeric(10) <br/> Table Direct</small> | 
| Package Imp. |  |  | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).AD_Package_Imp_ID<small> numeric(10) <br/> ID</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).Name<small> character varying(500) <br/> String</small> | 
| Package Version |  |  | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).PK_Version<small> character varying(20) <br/> String</small> | 
| Package Status |  |  | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).PK_Status<small> character varying(22) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).Description<small> character varying(1000) <br/> Memo</small> | 
| PackRoll |  |  | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).Processing<small> character(1) <br/> Button</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_package_imp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp.html).IsActive<small> character(1) <br/> Yes-No</small> | 


