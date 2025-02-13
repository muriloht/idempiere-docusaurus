# Process: Initial Tenant Setup 

**[Created:** 14/02/2009 - **Updated:** 10/03/2022 **]**  
**Description:**   
**Help:**   
**Class:** [org.adempiere.process.InitialClientSetup](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/adempiere/process/InitialClientSetup.html)

![](/img/docs/manual/InitialTenantSetup-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant Name |  |  | ClientName<br/>String | 
| Org Key | Key of the Organization |  | OrgValue<br/>String | 
| Organization Name | Name of the Organization |  | OrgName<br/>String | 
| Administrative User Name |  |  | AdminUserName<br/>String | 
| Administrative User Email |  |  | AdminUserEmail<br/>String | 
| Normal User Name |  |  | NormalUserName<br/>String | 
| Normal User Email |  |  | NormalUserEmail<br/>String | 
| Set Initial Password |  |  | IsSetInitialPassword<br/>Yes-No | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | C_Currency_ID<br/>Table Direct | 
| Country | Country | The Country defines a Country.  Each Country must be defined before it can be used in any document. | C_Country_ID<br/>Table Direct | 
| Region | Identifies a geographical Region | The Region identifies a unique Region for this Country. | C_Region_ID<br/>Table Direct | 
| City Name |  |  | CityName<br/>String | 
| City | City | City in a country | C_City_ID<br/>Table Direct | 
| ZIP | Postal code | The Postal Code or ZIP identifies the postal code for this entity&#x27;s address. | Postal<br/>String | 
| Address 1 | Address line 1 for this location | The Address 1 identifies the address for an entity&#x27;s location | Address1<br/>String | 
| BP Accounting | Use BP accounting dimension | Define if this tenant will use business partner accounting dimension.  This can be changed later in Accounting Schema window of the tenant. | IsUseBPDimension<br/>Yes-No | 
| Product Accounting | Use Product accounting dimension | Define if this tenant will use product accounting dimension.  This can be changed later in Accounting Schema window of the tenant. | IsUseProductDimension<br/>Yes-No | 
| Project Accounting | Use Project accounting dimension | Define if this tenant will use project accounting dimension.  This can be changed later in Accounting Schema window of the tenant. | IsUseProjectDimension<br/>Yes-No | 
| Campaign Accounting | Use Campaign accounting dimension | Define if this tenant will use campaign accounting dimension.  This can be changed later in Accounting Schema window of the tenant. | IsUseCampaignDimension<br/>Yes-No | 
| Sales Region Accounting | Use Sales Region accounting dimension | Define if this tenant will use sales region accounting dimension.  This can be changed later in Accounting Schema window of the tenant. | IsUseSalesRegionDimension<br/>Yes-No | 
| Activity Accounting | Use Activity accounting dimension | Define if this tenant will use activity accounting dimension.  This can be changed later in Accounting Schema window of the tenant. | IsUseActivityDimension<br/>Yes-No | 
| Use Default CoA | Use Default Chart of Accounts |  | UseDefaultCoA<br/>Yes-No | 
| Chart of Accounts File | Location of the chart of accounts to be used with this tenant.  At this stage just the default accounts will be created. |  | CoAFile<br/>FileName | 
| Inactivate Defaults | Inactivate Defaults after Created |  | InactivateDefaults<br/>Yes-No | 
| Phone | Identifies a telephone number | The Phone field identifies a telephone number | Phone<br/>String | 
| 2nd Phone | Identifies an alternate telephone number. | The 2nd Phone field identifies an alternate telephone number. | Phone2<br/>String | 
| Fax | Facsimile number | The Fax identifies a facsimile number for this Business Partner or  Location | Fax<br/>String | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | EMail<br/>String | 
| Tax ID | Tax Identification | The Tax ID field identifies the legal Identification number of this Entity. | TaxID<br/>String | 


