# Report: Business Partner Detail

**[Created:** 27/08/2005 - **Updated:** 04/01/2006 **]**  
**Description:** Business Partner Detail Report  
**Help:** The report list details of Business Partner, Addresses and Contacts for any active Business Partner with an Address and Contact  

![](/img/docs/manual/BusinessPartnerDetail-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | Name<br/>String | 
| Contact Name | Business Partner Contact Name |  | ContactName<br/>String | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | EMail<br/>String | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | SalesRep_ID<br/>Chosen Multiple Selection Table | 
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | C_BP_Group_ID<br/>Chosen Multiple Selection Table | 
| Credit Status | Business Partner Credit Status | Credit Management is inactive if Credit Status is No Credit Check, Credit Stop or if the Credit Limit is 0.If active, the status is set automatically set to Credit Hold, if the Total Open Balance (including Vendor activities)  is higher then the Credit Limit. It is set to Credit Watch, if above 90% of the Credit Limit and Credit OK otherwise. | SOCreditStatus<br/>Chosen Multiple Selection List | 


