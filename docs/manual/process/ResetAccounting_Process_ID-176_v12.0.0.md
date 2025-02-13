# Process: Reset Accounting 

**[Created:** 02/12/2001 - **Updated:** 24/04/2005 **]**  
**Description:** Reset Accounting Entries ** Stop Accounting Server before starting **  
**Help:** Delete accounting records of documents to be re-created by the next run of the accounting engine.  This is a dramatic step and you want to do this ONLY after changes of the accounting structure (e.g. different default accounts, etc.) and if fixing via manual Journal entries is not sensible.  
**Class:** [org.compiere.process.FactAcctReset](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/FactAcctReset.html)

![](/img/docs/manual/ResetAccounting-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | AD_Client_ID<br/>Table Direct | 
| Table | Database Table information | The Database Table provides the information of the table definition | AD_Table_ID<br/>Table | 
| Delete existing Accounting Entries | The selected accounting entries will be deleted!  DANGEROUS !!! |  | DeletePosting<br/>Yes-No | 
| Account Date | Optional account date range | Only documents within this date range which are also in open periods will be reset. | DateAcct<br/>Date | 
| Also Without Postings |  |  | AlsoWithoutPostings<br/>Yes-No | 


