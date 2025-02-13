# Process: Reset Allocation 

**[Created:** 15/08/2004 - **Updated:** 21/02/2005 **]**  
**Description:** Reset (delete) allocation of invoices to payments  
**Help:** Delete Allocations for a business partner or business partner group, accounting date range or individual allocation. In contrast to &quot;Void&quot; in &quot;View Allocation&quot;, the allocation is deleted (no trace), if the period is open.  
**Class:** [org.compiere.process.AllocationReset](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/AllocationReset.html)

![](/img/docs/manual/ResetAllocation-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | C_BP_Group_ID<br/>Table Direct | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Search | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | DateAcct<br/>Date | 
| Allocation | Payment allocation |  | C_AllocationHdr_ID<br/>Search | 
| All Allocations |  |  | AllAllocations<br/>Yes-No | 


