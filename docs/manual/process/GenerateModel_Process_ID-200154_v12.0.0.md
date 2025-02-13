# Process: Generate Model 

**[Created:** 10/07/2023 - **Updated:** 10/07/2023 **]**  
**Description:**   
**Help:**   
**Class:** [org.idempiere.process.GenerateModel](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/idempiere/process/GenerateModel.html)

![](/img/docs/manual/GenerateModel-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Model Generator Template |  |  | AD_ModelGeneratorTemplate_ID<br/>Table Direct | 
| Folder | A folder on a local or remote system to store data into | We store files in folders, especially media files. | Folder<br/>String | 
| Package Name |  |  | PackageName<br/>String | 
| Table Like | You can use % or a comma separated list of table names enclosed within single quotes (case sensitive) | The DB Table Name indicates the name of the table in database. | TableLike<br/>String | 
| Table Entity Type |  |  | TableEntityType<br/>Chosen Multiple Selection Table | 
| Column Entity Type |  |  | ColumnEntityType<br/>Chosen Multiple Selection Table | 
| Generate Interface |  |  | IsGenerateInterface<br/>Yes-No | 
| Generate Class |  |  | IsGenerateClass<br/>Yes-No | 


