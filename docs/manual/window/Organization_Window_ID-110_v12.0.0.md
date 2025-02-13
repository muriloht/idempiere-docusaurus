# Window: Organization

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Organizations  
**Help:** The Organization Window allows you to define and maintain Organizational entities.  An Organization is often a legal entity or sub-unit for which documents and transactions are processed  
![](/img/docs/manual/Organization-Window_iDempiere_v12.0.0.png)

### Tab: Organization

**[Created:** 11/06/1999 - **Updated:** 24/02/2018 **]**   
**Description:** Define Organizations  
**Help:** The Organization Tab is used to define an Organization.  Each Organization has a Key and Name and optionally a Description.  When adding a new organization, you must re-login to be able to access the new organization.  
**Tab Level:** 0

Table 10: Organization - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Replication Strategy | Data Replication Strategy | The Data Replication Strategy determines what and how tables are replicated | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).AD_ReplicationStrategy_ID<small> numeric <br/> Table Direct</small> | 


### Tab: Organization Info

**[Created:** 09/07/1999 - **Updated:** 24/02/2018 **]**   
**Description:** Organization Detail Information  
**Help:** The Organization Info Tab is used to define an Organization&#x27;s address, DUNS number and Tax Identification number  
**Tab Level:** 1

Table 20: Organization Info - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).AD_Org_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Address | Location or Address | The Location / Address field defines the location of an entity. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).C_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Organization Type | Organization Type | Organization Type allows you to categorize your organizations for reporting purposes | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).AD_OrgType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Parent Organization | Parent (superior) Organization | Parent Organization - the next level in the organizational hierarchy. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).Parent_Org_ID<small> numeric(10) <br/> Table</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| Drop Ship Warehouse | The (logical) warehouse to use for recording drop ship receipts and shipments. | The drop ship warehouse will be used for recording material transactions relating to drop shipments to and from this organization. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).DropShip_Warehouse_ID<small> numeric(10) <br/> Table</small> | 
| D-U-N-S | Dun &amp; Bradstreet Number | Used for EDI - For details see   www.dnb.com/dunsno/list.htm | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).DUNS<small> character varying(11) <br/> String</small> | 
| Tax ID | Tax Identification | The Tax ID field identifies the legal Identification number of this Entity. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).TaxID<small> character varying(20) <br/> String</small> | 
| Supervisor | Supervisor for this user/organization - used for escalation and approval | The Supervisor indicates who will be used for forwarding and escalating issues for this user - or for approvals. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).Supervisor_ID<small> numeric(10) <br/> Search</small> | 
| Calendar | Accounting Calendar Name | The Calendar uniquely identifies an accounting calendar.  Multiple calendars can be used.  For example you may need a standard calendar that runs from Jan 1 to Dec 31 and a fiscal calendar that runs from July 1 to June 30. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).C_Calendar_ID<small> numeric(10) <br/> Table Direct</small> | 
| Time Zone | Time zone name |  | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).TimeZone<small> character varying(60) <br/> Time Zone</small> | 
| Phone | Identifies a telephone number | The Phone field identifies a telephone number | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).Phone<small> character varying(40) <br/> String</small> | 
| 2nd Phone | Identifies an alternate telephone number. | The 2nd Phone field identifies an alternate telephone number. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).Phone2<small> character varying(40) <br/> String</small> | 
| Fax | Facsimile number | The Fax identifies a facsimile number for this Business Partner or  Location | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).Fax<small> character varying(40) <br/> String</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).EMail<small> character varying(60) <br/> String</small> | 
| Logo |  |  | [ad_orginfo](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_orginfo.html).Logo_ID<small> numeric(10) <br/> Image</small> | 


