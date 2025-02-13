# Process: Revenue Recognition Run 

**[Created:** 28/10/2014 - **Updated:** 28/10/2014 **]**  
**Description:** Generate revenue recognition journal  
**Help:** Generate GL journal based on valid revenue recognition run entries  
**Class:** [org.compiere.process.RevenueRecognition](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/RevenueRecognition.html)

![](/img/docs/manual/RevenueRecognitionRun-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | C_DocType_ID<br/>Table | 
| Account Date | Accounting Date | The Accounting Date indicates the date to be used on the General Ledger account entries generated from this document. It is also used for any currency conversion. | DateAcct<br/>Date | 
| Revenue Recognition | Method for recording revenue | The Revenue Recognition indicates how revenue will be recognized for this product | C_RevenueRecognition_ID<br/>Table Direct | 


