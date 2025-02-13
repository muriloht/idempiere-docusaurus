# Window: MFA Registration

**[Created:** 30/05/2021 - **Updated:** 30/05/2021 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/MFARegistration-Window_iDempiere_v12.0.0.png)

### Tab: MFA Registration

**[Created:** 30/05/2021 - **Updated:** 30/05/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: MFA Registration - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).Name<small> character varying(1000) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).Help<small> character varying(2000) <br/> Text</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| MFA Method | Multi-factor Authentication Method |  | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).MFA_Method_ID<small> numeric(10) <br/> Table Direct</small> | 
| Parameter Value |  |  | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).ParameterValue<small> character varying(2000) <br/> String</small> | 
| MFA Secret | Multi-factor Authentication Secret |  | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).MFASecret<small> character varying(2000) <br/> String</small> | 
| Expire On | Expire On |  | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).Expiration<small> timestamp without time zone <br/> Date+Time</small> | 
| Valid | Element is valid | The element passed the validation check | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).IsValid<small> character(1) <br/> Yes-No</small> | 
| Preferred |  |  | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).IsUserMFAPreferred<small> character(1) <br/> Yes-No</small> | 
| Validated at |  |  | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).MFAValidatedAt<small> timestamp without time zone <br/> Date+Time</small> | 
| Unregistered at |  |  | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).MFAUnregisteredAt<small> timestamp without time zone <br/> Date+Time</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Last MFA Secret |  |  | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).MFALastSecret<small> character varying(2000) <br/> String</small> | 
| Last Success |  |  | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).LastSuccess<small> timestamp without time zone <br/> Date+Time</small> | 
| Last Failure |  |  | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).LastFailure<small> timestamp without time zone <br/> Date+Time</small> | 
| Failed Login Count |  |  | [mfa_registration](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registration.html).FailedLoginCount<small> numeric(10) <br/> Integer</small> | 


