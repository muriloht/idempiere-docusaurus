# Window: SSO Configuration

**[Created:** 12/09/2022 - **Updated:** 12/09/2022 **]**  
**Description:** Single sign-on Configuration  
**Help:** Single sign-on is an authentication scheme that allows a user to log in with a single ID to any of several related, yet independent, software systems.  
![](/img/docs/manual/SSOConfiguration-Window_iDempiere_v12.0.0.png)

### Tab: SSO Configuration

**[Created:** 12/09/2022 - **Updated:** 12/09/2022 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: SSO Configuration - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| SSO Provider | Single Sign-On (SSO) Providers ( Microsoft Azure , Google, Jump Cloud etc..) |  | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).SSO_Provider<small> character varying(22) <br/> List</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Tenant ID | SSO Tenant ID |  | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).SSO_AuthorizationTenantID<small> character varying(100) <br/> String</small> | 
| Application Client ID | SSO Application Client ID |  | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).SSO_ApplicationClientID<small> character varying(100) <br/> String</small> | 
| Application Secret Key | SSO Application Secret Key |  | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).SSO_ApplicationSecretKey<small> character varying(100) <br/> String</small> | 
| Application Redirect URIs | SSO Application Redirect URIs |  | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).SSO_ApplicationRedirectURIs<small> character varying(1000) <br/> String</small> | 
| iDempiere Monitor Redirect URIs | iDempiere Monitor Redirect URIs |  | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).SSO_IDempMonitorRedirectURIs<small> character varying(1000) <br/> String</small> | 
| Felix Web Console Redirect URIs | Apache Felix Web Console Bundles Redirect URIs |  | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).SSO_OSGIRedirectURIs<small> character varying(1000) <br/> String</small> | 
| Application Discovery URI | SSO Application Discovery URI |  | [sso_principalconfig](https://idempiere-schemaspy.muriloht.com/adempiere/tables/sso_principalconfig.html).SSO_ApplicationDiscoveryURI<small> character varying(4000) <br/> String</small> | 


