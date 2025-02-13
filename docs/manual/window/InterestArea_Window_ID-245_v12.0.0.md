# Window: Interest Area

**[Created:** 01/10/2002 - **Updated:** 02/01/2000 **]**  
**Description:** Interest Area or Topic  
**Help:** Interest Areas reflect interest in a topic by a contact. Interest areas can be used for marketing campaigns.  
![](/img/docs/manual/InterestArea-Window_iDempiere_v12.0.0.png)

### Tab: Interest Area

**[Created:** 01/10/2002 - **Updated:** 02/01/2000 **]**   
**Description:** Interest Area or Topic  
**Help:** Interest Areas reflect interest in a topic by a contact. Interest areas can be used for marketing campaigns. If a list is not &quot;Self Service&quot;, it is not visible for users via the web.  
**Tab Level:** 0

Table 10: Interest Area - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_interestarea](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_interestarea.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_interestarea](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_interestarea.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [r_interestarea](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_interestarea.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [r_interestarea](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_interestarea.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [r_interestarea](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_interestarea.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_interestarea](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_interestarea.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [r_interestarea](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_interestarea.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 


### Tab: Subscriptions

**[Created:** 05/07/2003 - **Updated:** 02/12/2024 **]**   
**Description:** User Subscriptions  
**Help:**   
**Tab Level:** 1

Table 20: Subscriptions - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_contactinterest](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_contactinterest.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_contactinterest](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_contactinterest.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Interest Area | Interest Area or Topic | Interest Areas reflect interest in a topic by a contact. Interest areas can be used for marketing campaigns. | [r_contactinterest](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_contactinterest.html).R_InterestArea_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [r_contactinterest](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_contactinterest.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_contactinterest](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_contactinterest.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Subscribe Date | Date the contact actively subscribed | Date the contact subscribe the interest area | [r_contactinterest](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_contactinterest.html).SubscribeDate<small> timestamp without time zone <br/> Date</small> | 
| Opt-out Date | Date the contact opted out | If the field has a date, the customer opted out (unsubscribed) and cannot receive mails for the Interest Area | [r_contactinterest](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_contactinterest.html).OptOutDate<small> timestamp without time zone <br/> Date</small> | 


### Tab: LDAP Access

**[Created:** 29/10/2006 - **Updated:** 29/10/2006 **]**   
**Description:** User Access via LDAP  
**Help:**   
**Tab Level:** 1

Table 30: LDAP Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Interest Area | Interest Area or Topic | Interest Areas reflect interest in a topic by a contact. Interest areas can be used for marketing campaigns. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).R_InterestArea_ID<small> numeric(10) <br/> Table Direct</small> | 
| Ldap Processor | LDAP Server to authenticate and authorize external systems based on iDempiere | The LDAP Server allows third party software (e.g. Apache) to use the users defined in the system to authentificate and authorize them.  There is only one server per iDempiere system.  The &quot;o&quot; is the Tenant key and the optional &quot;ou&quot; is the Interest Area key. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).AD_LdapProcessor_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Error | An Error occurred in the execution |  | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).IsError<small> character(1) <br/> Yes-No</small> | 
| Summary | Textual summary of this request | The Summary allows free form text entry of a recap of this request. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).Summary<small> character varying(2000) <br/> Text</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_ldapaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ldapaccess.html).Description<small> character varying(255) <br/> String</small> | 


