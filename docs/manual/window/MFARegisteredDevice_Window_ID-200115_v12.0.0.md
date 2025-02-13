# Window: MFA Registered Device

**[Created:** 30/05/2021 - **Updated:** 30/05/2021 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/MFARegisteredDevice-Window_iDempiere_v12.0.0.png)

### Tab: MFA Registered Device

**[Created:** 30/05/2021 - **Updated:** 30/05/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: MFA Registered Device - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [mfa_registereddevice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registereddevice.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [mfa_registereddevice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registereddevice.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [mfa_registereddevice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registereddevice.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| MFA Device Identifier | Multi-factor Authentication Device Identifier |  | [mfa_registereddevice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registereddevice.html).MFADeviceIdentifier<small> character varying(2000) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [mfa_registereddevice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registereddevice.html).Help<small> character varying(2000) <br/> Text</small> | 
| Expire On | Expire On |  | [mfa_registereddevice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registereddevice.html).Expiration<small> timestamp without time zone <br/> Date+Time</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [mfa_registereddevice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/mfa_registereddevice.html).IsActive<small> character(1) <br/> Yes-No</small> | 


