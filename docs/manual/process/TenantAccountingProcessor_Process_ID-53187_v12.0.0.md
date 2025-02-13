# Process: Tenant Accounting Processor 

**[Created:** 13/09/2009 - **Updated:** 10/03/2022 **]**  
**Description:** Tenant Accounting Processor  
**Help:** The tenant accounting processor allows a user to run the accounting processor in a tenant session.  The system configurator parameter CLIENT_ACCOUNTING must be enabled (configured as [I]mmediate or [Q]ueue).  
**Class:** [org.adempiere.process.ClientAcctProcessor](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/adempiere/process/ClientAcctProcessor.html)

![](/img/docs/manual/TenantAccountingProcessor-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | C_AcctSchema_ID<br/>Table Direct | 
| Table | Database Table information | The Database Table provides the information of the table definition | AD_Table_ID<br/>Table Direct | 


