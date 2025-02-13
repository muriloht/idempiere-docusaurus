# Window: Sales Rep Dashboard

**[Created:** 25/08/2013 - **Updated:** 12/09/2013 **]**  
**Description:** The Sales Rep Dashboard provides a single location for managing sales opportunities  
**Help:**   
![](/img/docs/manual/SalesRepDashboard-Window_iDempiere_v12.0.0.png)

### Tab: Dashboard

**[Created:** 25/08/2013 - **Updated:** 11/09/2013 **]**   
**Description:** Sales Rep dashboard  
**Help:**   
**Tab Level:** 0

Table 10: Dashboard - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Sales Pipeline |  |  | [c_salesdashboard](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesdashboard.html).SalesPipeline<small> integer <br/> Chart</small> | 
| Sales Rep Name | Sales Representative Name | The name of the sales rep that this dashboard relates to. | [c_salesdashboard](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesdashboard.html).Name<small> character varying(60) <br/> String</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [c_salesdashboard](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesdashboard.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Leads

**[Created:** 25/08/2013 - **Updated:** 27/08/2013 **]**   
**Description:** Leads assigned to Sales Rep  
**Help:**   
**Tab Level:** 1

Table 15: Leads - Fields 

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
| Address | Location or Address | The Location / Address field defines the location of an entity. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Title | Name this entity is referred to as | The Title indicates the name that an entity is referred to as. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Title<small> character varying(40) <br/> String</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| Position | Job Position |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Job_ID<small> numeric(10) <br/> Table Direct</small> | 
| Birthday | Birthday or Anniversary day | Birthday or Anniversary day | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).Birthday<small> timestamp without time zone <br/> Date</small> | 
| Last Contact | Date this individual was last contacted | The Last Contact indicates the date that this Business Partner Contact was last contacted. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LastContact<small> timestamp without time zone <br/> Date</small> | 
| Last Result | Result of last contact | The Last Result identifies the result of the last contact made. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LastResult<small> character varying(255) <br/> String</small> | 
| Campaign | Marketing Campaign | The Campaign defines a unique marketing program.  Projects can be associated with a pre defined Marketing Campaign.  You can then report based on a specific Campaign. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).C_Campaign_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Lead Source | The source of this lead/opportunity |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LeadSource<small> character varying(10) <br/> List</small> | 
| Lead Source Description | Additional information on the source of this lead/opportunity |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LeadSourceDescription<small> character varying(255) <br/> Text</small> | 
| Lead Status | The status of this lead/opportunity in the sales cycle |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LeadStatus<small> character varying(10) <br/> List</small> | 
| Lead Status Description | Additional information on the status of this lead/opportunity |  | [ad_user](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_user.html).LeadStatusDescription<small> character varying(255) <br/> Text</small> | 


### Tab: Opportunities

**[Created:** 25/08/2013 - **Updated:** 27/08/2013 **]**   
**Description:** Opportunities assigned to Sales Rep  
**Help:**   
**Tab Level:** 1

Table 20: Opportunities - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).DocumentNo<small> character varying(60) <br/> String</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Campaign | Marketing Campaign | The Campaign defines a unique marketing program.  Projects can be associated with a pre defined Marketing Campaign.  You can then report based on a specific Campaign. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).C_Campaign_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Sales Stage | Stages of the sales process | Define what stages your sales process will move through | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).C_SalesStage_ID<small> numeric(10) <br/> Table</small> | 
| Probability |  |  | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).Probability<small> numeric <br/> Amount</small> | 
| Expected Close Date | Expected Close Date | The Expected Close Date indicates the expected last or final date | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).ExpectedCloseDate<small> timestamp without time zone <br/> Date</small> | 
| Opportunity Amount | The estimated value of this opportunity. |  | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).OpportunityAmt<small> numeric <br/> Amount</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).Description<small> character varying(255) <br/> String</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).Comments<small> text <br/> Text</small> | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).C_Order_ID<small> numeric(10) <br/> Search</small> | 
| Close Date | Close Date | The Start Date indicates the last or final date | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).CloseDate<small> timestamp without time zone <br/> Date</small> | 
| Cost | Cost information |  | [c_opportunity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_opportunity.html).Cost<small> numeric <br/> Amount</small> | 


### Tab: Activities

**[Created:** 25/08/2013 - **Updated:** 27/08/2013 **]**   
**Description:** Sales Rep Activities  
**Help:**   
**Tab Level:** 1

Table 40: Activities - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Activity Type | Type of activity, e.g. task, email, phone call |  | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).ContactActivityType<small> character varying(10) <br/> List</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).Description<small> character varying(255) <br/> String</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Sales Opportunity |  |  | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).C_Opportunity_ID<small> numeric(10) <br/> Table Direct</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).Comments<small> text <br/> Text</small> | 
| Start Date | First effective day (inclusive) | The Start Date indicates the first or starting date | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).StartDate<small> timestamp without time zone <br/> Date+Time</small> | 
| End Date | Last effective date (inclusive) | The End Date indicates the last date in this range. | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).EndDate<small> timestamp without time zone <br/> Date+Time</small> | 
| Complete | It is complete | Indication that this is complete | [c_contactactivity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_contactactivity.html).IsComplete<small> character(1) <br/> Yes-No</small> | 


