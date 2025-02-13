# Process: Create/Complete Table 

**[Created:** 08/07/2021 - **Updated:** 21/07/2021 **]**  
**Description:**   
**Help:**   
**Class:** [org.idempiere.process.CreateTable](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/idempiere/process/CreateTable.html)

![](/img/docs/manual/CreateCompleteTable-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| DB Table Name | Name of the table in the database | The DB Table Name indicates the name of the table in database. | TableName<br/>String | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | Name<br/>String | 
| Description | Optional short description of the record | A description is limited to 255 characters. | Description<br/>String | 
| Data Access Level | Access Level required | Indicates the access level required for this record or process. | AccessLevel<br/>List | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | EntityType<br/>Table | 
| Create KeyColumn |  |  | IsCreateKeyColumn<br/>Yes-No | 
| Create a Workflow |  |  | IsCreateWorkflow<br/>Yes-No | 
| Create a Translation Table |  |  | IsCreateTranslationTable<br/>Yes-No | 
| Create 'Value' column |  |  | IsCreateColValue<br/>Yes-No | 
| Create 'Name' column |  |  | IsCreateColName<br/>Yes-No | 
| Create 'Description' column |  |  | IsCreateColDescription<br/>Yes-No | 
| Create 'Help' column |  |  | IsCreateColHelp<br/>Yes-No | 
| Create 'DocumentNo' column |  |  | IsCreateColDocumentNo<br/>Yes-No | 
| Create 'DocAction' column |  |  | IsCreateColDocAction<br/>Yes-No | 
| Create 'DocStatus' column |  |  | IsCreateColDocStatus<br/>Yes-No | 
| Create 'Processed' column |  |  | IsCreateColProcessed<br/>Yes-No | 
| Create 'ProcessedOn' column |  |  | IsCreateColProcessedOn<br/>Yes-No | 
| Create 'Processing' column |  |  | IsCreateColProcessing<br/>Yes-No | 
| Create 'C_DocTypeTarget_ID' column |  |  | IsCreateColC_DocTypeTarget_ID<br/>Yes-No | 
| Create 'C_DocType_ID' column |  |  | IsCreateColC_DocType_ID<br/>Yes-No | 
| Create 'C_Currency_ID' column |  |  | IsCreateColC_Currency_ID<br/>Yes-No | 
| Create 'DateTrx' column |  |  | IsCreateColDateTrx<br/>Yes-No | 
| Create 'DateAcct' column |  |  | IsCreateColDateAcct<br/>Yes-No | 
| Create 'Posted' column |  |  | IsCreateColPosted<br/>Yes-No | 
| Create 'IsApproved' column |  |  | IsCreateColIsApproved<br/>Yes-No | 
| Create 'SalesRep_ID' column |  |  | IsCreateColSalesRep_ID<br/>Yes-No | 
| Create 'AD_User_ID' column |  |  | IsCreateColAD_User_ID<br/>Yes-No | 


