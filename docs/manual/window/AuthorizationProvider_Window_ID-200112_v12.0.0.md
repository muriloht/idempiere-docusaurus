# Window: Authorization Provider

**[Created:** 17/02/2021 - **Updated:** 17/02/2021 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/AuthorizationProvider-Window_iDempiere_v12.0.0.png)

### Tab: Authorization Provider

**[Created:** 17/02/2021 - **Updated:** 17/02/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Authorization Provider - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_authorizationprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationprovider.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_authorizationprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationprovider.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_authorizationprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationprovider.html).Name<small> character varying(60) <br/> String</small> | 
| Authorization Type |  |  | [ad_authorizationprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationprovider.html).AD_AuthorizationType<small> character varying(10) <br/> List</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_authorizationprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationprovider.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_authorizationprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationprovider.html).Help<small> character varying(2000) <br/> Text</small> | 
| Authorization Endpoint |  |  | [ad_authorizationprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationprovider.html).AuthorizationEndpoint<small> character varying(2000) <br/> String</small> | 
| Token Endpoint |  |  | [ad_authorizationprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationprovider.html).TokenEndpoint<small> character varying(2000) <br/> String</small> | 
| Revoke Endpoint |  |  | [ad_authorizationprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationprovider.html).RevokeEndpoint<small> character varying(2000) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_authorizationprovider](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationprovider.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Authorization Scope Provider

**[Created:** 17/02/2021 - **Updated:** 17/02/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Authorization Scope Provider - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_authorizationscopeprov](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationscopeprov.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_authorizationscopeprov](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationscopeprov.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Authorization Provider |  |  | [ad_authorizationscopeprov](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationscopeprov.html).AD_AuthorizationProvider_ID<small> numeric(10) <br/> Table Direct</small> | 
| Authorization Scope |  |  | [ad_authorizationscopeprov](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationscopeprov.html).AD_AuthorizationScope<small> character varying(10) <br/> List</small> | 
| Scope URL |  |  | [ad_authorizationscopeprov](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationscopeprov.html).ScopeURL<small> character varying(2000) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_authorizationscopeprov](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationscopeprov.html).IsActive<small> character(1) <br/> Yes-No</small> | 


