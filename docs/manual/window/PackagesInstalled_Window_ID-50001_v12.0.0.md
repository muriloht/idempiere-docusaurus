# Window: Packages Installed

**[Created:** 11/12/2006 - **Updated:** 12/12/2006 **]**  
**Description:** List of packages installed  
**Help:**   
![](/img/docs/manual/PackagesInstalled-Window_iDempiere_v12.0.0.png)

### Tab: Packages Installed

**[Created:** 11/12/2006 - **Updated:** 06/08/2013 **]**   
**Description:** Packages Installed  
**Help:**   
**Tab Level:** 0

Table 10: Packages Installed - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_package_imp_inst](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_inst.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_package_imp_inst](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_inst.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_package_imp_inst](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_inst.html).Name<small> character varying(240) <br/> String</small> | 
| Package Version |  |  | [ad_package_imp_inst](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_inst.html).PK_Version<small> character varying(40) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_package_imp_inst](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_inst.html).Description<small> character varying(2000) <br/> Text</small> | 
| Package Status |  |  | [ad_package_imp_inst](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_inst.html).PK_Status<small> character varying(44) <br/> String</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_package_imp_inst](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_inst.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Updated | Date this record was updated | The Updated field indicates the date that this record was updated. | [ad_package_imp_inst](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_inst.html).Updated<small> timestamp without time zone <br/> Date+Time</small> | 
| Uninstall |  |  | [ad_package_imp_inst](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_package_imp_inst.html).Uninstall<small> character(1) <br/> Yes-No</small> | 


