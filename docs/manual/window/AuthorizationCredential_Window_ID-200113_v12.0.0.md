# Window: Authorization Credential

**[Created:** 17/02/2021 - **Updated:** 17/02/2021 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/AuthorizationCredential-Window_iDempiere_v12.0.0.png)

### Tab: Authorization Credential

**[Created:** 17/02/2021 - **Updated:** 17/02/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Authorization Credential - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_authorizationcredential](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationcredential.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_authorizationcredential](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationcredential.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Authorization Provider |  |  | [ad_authorizationcredential](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationcredential.html).AD_AuthorizationProvider_ID<small> numeric(10) <br/> Table Direct</small> | 
| Scope List |  |  | [ad_authorizationcredential](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationcredential.html).AD_AuthorizationScopeList<small> character varying(2000) <br/> Chosen Multiple Selection List</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_authorizationcredential](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationcredential.html).Name<small> character varying(60) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_authorizationcredential](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationcredential.html).Help<small> character varying(2000) <br/> Text</small> | 
| Authorization client-id |  |  | [ad_authorizationcredential](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationcredential.html).AuthorizationClientId<small> character varying(2000) <br/> String</small> | 
| Authorization client-secret |  |  | [ad_authorizationcredential](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationcredential.html).AuthorizationClientSecret<small> character varying(2000) <br/> String</small> | 
| Authorization Redirect URL |  |  | [ad_authorizationcredential](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationcredential.html).AuthorizationRedirectURL<small> character varying(2000) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_authorizationcredential](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationcredential.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Authorization Account

**[Created:** 17/02/2021 - **Updated:** 11/05/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Authorization Account - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Authorization Credential |  |  | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).AD_AuthorizationCredential_ID<small> numeric(10) <br/> Table Direct</small> | 
| Authorization Scopes |  |  | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).AD_AuthorizationScopes<small> character varying(255) <br/> Chosen Multiple Selection List</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).EMail<small> character varying(200) <br/> String</small> | 
| Preferred User Name |  |  | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).Preferred_UserName<small> character varying(1000) <br/> String</small> | 
| Access Token |  |  | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).AccessToken<small> text <br/> Text</small> | 
| Refresh Token |  |  | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).RefreshToken<small> character varying(4000) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).Help<small> character varying(2000) <br/> Text</small> | 
| Expire in Seconds |  |  | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).ExpireInSeconds<small> numeric <br/> Number</small> | 
| Access Token Timestamp |  |  | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).AccessTokenTimestamp<small> timestamp without time zone <br/> Date+Time</small> | 
| Authorized |  |  | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).IsAuthorized<small> character(1) <br/> Yes-No</small> | 
| Access Revoked |  |  | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).IsAccessRevoked<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_authorizationaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_authorizationaccount.html).IsActive<small> character(1) <br/> Yes-No</small> | 


