# Window: Lead

**[Created:** 25/08/2013 - **Updated:** 04/01/2021 **]**  
**Description:** Maintain Leads  
**Help:** The Lead Window allows you to maintain Leads (can be Sales or Purchase). These are unqualified contacts to who you wish to recruit or market to.  
![](/img/docs/manual/Lead-Window_iDempiere_v12.0.0.png)

### Tab: Lead

**[Created:** 25/08/2013 - **Updated:** 31/12/2020 **]**   
**Description:** Any information about the contact  
**Help:**   
**Tab Level:** 0

Table 10: Lead - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Value<small> character varying(40) <br/> String</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Description<small> character varying(255) <br/> String</small> | 
| Convert Lead | Convert Lead to BP and Opportunity | Convert Lead into a Business Partner and (optional) Sales Opportunity | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Processing<small> character(1) <br/> Button</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Sales Lead | This contact is a sales lead | Sales leads can be converted into full contacts with Business Partners. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsSalesLead<small> character(1) <br/> Yes-No</small> | 
| Vendor Lead | This contact is a vendor lead | Vendor leads can be converted into full contacts with Business Partners. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).IsVendorLead<small> character(1) <br/> Yes-No</small> | 
| Phone | Identifies a telephone number | The Phone field identifies a telephone number | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Phone<small> character varying(40) <br/> String</small> | 
| 2nd Phone | Identifies an alternate telephone number. | The 2nd Phone field identifies an alternate telephone number. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Phone2<small> character varying(40) <br/> String</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).EMail<small> character varying(60) <br/> String</small> | 
| Fax | Facsimile number | The Fax identifies a facsimile number for this Business Partner or  Location | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Fax<small> character varying(40) <br/> String</small> | 
| Address | Location or Address | The Location / Address field defines the location of an entity. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Birthday | Birthday or Anniversary day | Birthday or Anniversary day | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Birthday<small> timestamp without time zone <br/> Date</small> | 
| BP Name |  |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).BPName<small> character varying(60) <br/> String</small> | 
| BP Address | Address of the Business Partner |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).BP_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Position | Job Position |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Job_ID<small> numeric(10) <br/> Table Direct</small> | 
| Campaign | Marketing Campaign | The Campaign defines a unique marketing program.  Projects can be associated with a pre defined Marketing Campaign.  You can then report based on a specific Campaign. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Campaign_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Lead Source | The source of this lead/opportunity |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LeadSource<small> character varying(10) <br/> List</small> | 
| Lead Source Description | Additional information on the source of this lead/opportunity |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LeadSourceDescription<small> character varying(255) <br/> Text</small> | 
| Lead Status | The status of this lead/opportunity in the sales cycle |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LeadStatus<small> character varying(10) <br/> List</small> | 
| Lead Status Description | Additional information on the status of this lead/opportunity |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LeadStatusDescription<small> character varying(255) <br/> Text</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Comments<small> character varying(2000) <br/> Text</small> | 


### Tab: Activity

**[Created:** 25/08/2013 - **Updated:** 25/08/2013 **]**   
**Description:**   
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


