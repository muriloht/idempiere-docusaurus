# Report: Accounting Fact Period

**[Created:** 09/01/2004 - **Updated:** 10/03/2022 **]**  
**Description:** Accounting Fact Details summarized by Accounting Period  
**Help:** The Period is based on the the Calendar defined on Tenant level.  

![](/img/docs/manual/AccountingFactPeriod-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | C_AcctSchema_ID<br/>Table Direct | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | AD_Org_ID<br/>Chosen Multiple Selection Table | 
| Period | Period of the Calendar | The Period indicates an exclusive range of dates for a calendar. | C_Period_ID<br/>Chosen Multiple Selection Table | 
| Account | Account used | The (natural) account used | Account_ID<br/>Chosen Multiple Selection Table | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Chosen Multiple Selection Search | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Chosen Multiple Selection Search | 
| Tax | Tax identifier | The Tax indicates the type of tax used in document line. | C_Tax_ID<br/>Chosen Multiple Selection Table | 


