# Process: Load Bank Statement 

**[Created:** 25/12/2003 - **Updated:** 03/03/2005 **]**  
**Description:** Load Bank Statement  
**Help:** Load the bank statement into the import table. The parameters used depend on the actual loader.  
**Class:** [org.compiere.process.LoadBankStatement](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/LoadBankStatement.html)

![](/img/docs/manual/LoadBankStatement-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Bank Statement Loader | Definition of Bank Statement Loader (SWIFT, OFX) | The loader definition provides the parameters to load bank statements from EFT formats like SWIFT (MT940) or OFX | C_BankStatementLoader_ID<br/>Table Direct | 
| File Name | Name of the local file or URL | Name of a file in the local directory space - or URL (file://.., http://.., ftp://..) | FileName<br/>FileName | 


