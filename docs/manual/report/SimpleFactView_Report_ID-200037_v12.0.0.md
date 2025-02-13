# Report: Simple Fact View

**[Created:** 01/03/2013 - **Updated:** 01/03/2013 **]**  
**Description:**   
**Help:**   

![](/img/docs/manual/SimpleFactView-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | C_AcctSchema_ID<br/>Table Direct | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | AD_Org_ID<br/>Chosen Multiple Selection Table | 
| Account | Account used | The (natural) account used | Account_ID<br/>Chosen Multiple Selection Table | 
| Account Key | Key of Account Element |  | AccountValue<br/>String | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | DateAcct<br/>Date | 


