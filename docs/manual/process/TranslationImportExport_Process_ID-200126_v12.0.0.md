# Process: Translation Import/Export 

**[Created:** 24/11/2020 - **Updated:** 24/11/2020 **]**  
**Description:** Import or Export Language Translation  
**Help:** Export/Import Translation info to/from xml for translation in external tool.  Please note that the Language MUST be an enabled and verified System Language.  
**Class:** [org.idempiere.process.TranslationImpExp](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/idempiere/process/TranslationImpExp.html)

![](/img/docs/manual/TranslationImportExport-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Import/Export |  |  | ImportOrExport<br/>List | 
| Tenant (All) |  |  | AD_AllClients_V_ID<br/>Table Direct | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | AD_Language<br/>Table | 
| Table | Database Table information | The Database Table provides the information of the table definition | AD_Table_ID<br/>Table | 
| Only Centralized Data |  |  | IsOnlyCentralizedData<br/>Yes-No | 
| File Name | Name of the local file or URL | Name of a file in the local directory space - or URL (file://.., http://.., ftp://..) | FileName<br/>FileName | 
| Folder | A folder on a local or remote system to store data into | We store files in folders, especially media files. | Folder<br/>FilePath | 


