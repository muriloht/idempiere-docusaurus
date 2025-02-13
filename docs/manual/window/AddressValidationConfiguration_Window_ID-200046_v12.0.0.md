# Window: Address Validation Configuration

**[Created:** 19/08/2013 - **Updated:** 19/08/2013 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/AddressValidationConfiguration-Window_iDempiere_v12.0.0.png)

### Tab: Address Validation

**[Created:** 19/08/2013 - **Updated:** 19/08/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Address Validation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Host Address | Host Address URL or DNS | The Host Address identifies the URL or DNS of the target host | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).HostAddress<small> character varying(60) <br/> String</small> | 
| Host port | Host Communication Port | The Host Port identifies the port to communicate with the host. | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).HostPort<small> numeric(10) <br/> Integer</small> | 
| Proxy address | Address of your proxy server | The Proxy Address must be defined if you must pass through a firewall to access your payment processor. | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).ProxyAddress<small> character varying(60) <br/> String</small> | 
| Proxy port | Port of your proxy server | The Proxy Port identifies the port of your proxy server. | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).ProxyPort<small> numeric(10) <br/> Integer</small> | 
| Proxy logon | Logon of your proxy server | The Proxy Logon identifies the Logon ID for your proxy server. | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).ProxyLogon<small> character varying(60) <br/> String</small> | 
| Proxy password | Password of your proxy server | The Proxy Password identifies the password for your proxy server. | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).ProxyPassword<small> character varying(60) <br/> String</small> | 
| Service Path |  |  | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).ServicePath<small> character varying(60) <br/> String</small> | 
| Address Validation Class |  |  | [c_addressvalidationcfg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addressvalidationcfg.html).AddressValidationClass<small> character varying(100) <br/> String</small> | 


