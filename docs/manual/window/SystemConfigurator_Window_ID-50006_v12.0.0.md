# Window: System Configurator

**[Created:** 28/02/2007 - **Updated:** 20/12/2021 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/SystemConfigurator-Window_iDempiere_v12.0.0.png)

### Tab: System Configurator

**[Created:** 28/02/2007 - **Updated:** 30/06/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: System Configurator - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_sysconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sysconfig.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_sysconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sysconfig.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_sysconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sysconfig.html).Name<small> character varying(50) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_sysconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sysconfig.html).Description<small> character varying(255) <br/> String</small> | 
| Configured Value | Value for the configuration key | You can check the valid variables and values at http://wiki.idempiere.org/en/System_Configurator_(Window_ID-50006) | [ad_sysconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sysconfig.html).Value<small> character varying(4000) <br/> String</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_sysconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sysconfig.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Configuration Level | Configuration Level for this parameter | Configuration Level for this parameterS - just allowed system configurationC - tenant configurable parameterO - org configurable parameter | [ad_sysconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sysconfig.html).ConfigurationLevel<small> character(1) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_sysconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sysconfig.html).IsActive<small> character(1) <br/> Yes-No</small> | 


