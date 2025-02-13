# Window: Contact

**[Created:** 25/08/2013 - **Updated:** 12/09/2013 **]**  
**Description:** Maintain Contacts  
**Help:** The Contact Window allows you to maintain Contacts who are individuals you deal with.  Contacts may also be internal or external users who can log into the system and have access to functionality via one or more roles.  A contact can also be a business partner contact.  
![](/img/docs/manual/Contact-Window_iDempiere_v12.0.0.png)

### Tab: Contact

**[Created:** 25/08/2013 - **Updated:** 12/09/2013 **]**   
**Description:** The contact details  
**Help:**   
**Tab Level:** 0

Table 10: Contact - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Description<small> character varying(255) <br/> String</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Comments<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMail<small> character varying(60) <br/> String</small> | 
| Phone | Identifies a telephone number | The Phone field identifies a telephone number | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Phone<small> character varying(40) <br/> String</small> | 
| 2nd Phone | Identifies an alternate telephone number. | The 2nd Phone field identifies an alternate telephone number. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Phone2<small> character varying(40) <br/> String</small> | 
| Fax | Facsimile number | The Fax identifies a facsimile number for this Business Partner or  Location | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Fax<small> character varying(40) <br/> String</small> | 
| Title | Name this entity is referred to as | The Title indicates the name that an entity is referred to as. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Title<small> character varying(40) <br/> String</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| Position | Job Position |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Job_ID<small> numeric(10) <br/> Table Direct</small> | 
| Birthday | Birthday or Anniversary day | Birthday or Anniversary day | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Birthday<small> timestamp without time zone <br/> Date</small> | 
| Last Contact | Date this individual was last contacted | The Last Contact indicates the date that this Business Partner Contact was last contacted. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LastContact<small> timestamp without time zone <br/> Date</small> | 
| Last Result | Result of last contact | The Last Result identifies the result of the last contact made. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LastResult<small> character varying(255) <br/> String</small> | 


### Tab: Activity

**[Created:** 25/08/2013 - **Updated:** 25/08/2013 **]**   
**Description:** Contact Activity  
**Help:**   
**Tab Level:** 1

Table 20: Activity - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Activity Type | Type of activity, e.g. task, email, phone call |  | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).ContactActivityType<small> character varying(10) <br/> List</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).Description<small> character varying(255) <br/> String</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Sales Opportunity |  |  | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).C_Opportunity_ID<small> numeric(10) <br/> Table Direct</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).Comments<small> text <br/> Text</small> | 
| Start Date | First effective day (inclusive) | The Start Date indicates the first or starting date | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).StartDate<small> timestamp without time zone <br/> Date+Time</small> | 
| End Date | Last effective date (inclusive) | The End Date indicates the last date in this range. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).EndDate<small> timestamp without time zone <br/> Date+Time</small> | 
| Complete | It is complete | Indication that this is complete | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).IsComplete<small> character(1) <br/> Yes-No</small> | 


