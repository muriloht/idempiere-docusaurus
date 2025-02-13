# Window: Import Report Line Set

**[Created:** 11/01/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Import Report Line Sets  
**Help:** The Import Report Line Set Window is an interim table which is used when importing external data into the system.  Selecting the &#x27;Process&#x27; button will either add or modify the appropriate records.  
![](/img/docs/manual/ImportReportLineSet-Window_iDempiere_v12.0.0.png)

### Tab: Import Report Line Set

**[Created:** 11/01/2003 - **Updated:** 02/01/2000 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Import Report Line Set - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Import Report Line Set | Import Report Line Set values |  | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).I_ReportLine_ID<small> numeric(10) <br/> ID</small> | 
| Imported | Has this import been processed | The Imported check box indicates if this import has been processed. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).I_IsImported<small> character(1) <br/> Yes-No</small> | 
| Import Error Message | Messages generated from import process | The Import Error Message displays any error messages generated during the import process. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).I_ErrorMsg<small> character varying(2000) <br/> String</small> | 
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Report Line Set Name | Name of the Report Line Set |  | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).ReportLineSetName<small> character varying(60) <br/> String</small> | 
| Report Line Set |  |  | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).PA_ReportLineSet_ID<small> numeric(10) <br/> Table Direct</small> | 
| Report Line |  |  | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).PA_ReportLine_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).Description<small> character varying(255) <br/> String</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Printed | Indicates if this document / line is printed | The Printed checkbox indicates if this document or line will included when printing. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).IsPrinted<small> character(1) <br/> Yes-No</small> | 
| Posting Type | The type of posted amount for the transaction | The Posting Type indicates the type of amount (Actual, Budget, Reservation, Commitment, Statistical) the transaction. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).PostingType<small> character(1) <br/> List</small> | 
| Amount Type | PA Amount Type for reporting | The amount type to report on: Quantity, Credit Only, Debit Only, Balance (expected sign) or Balance (accounted sign). &quot;Expected sign&quot; adjusts the sign of the result based on the Account Type and Expected Sign of each Account Element, whereas &quot;accounted sign&quot; always returns DR-CR. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).PAAmountType<small> character(1) <br/> List</small> | 
| Period Type | PA Period Type | The Period Type to report on: Period, Year, Total or Natural. Natural = Year for P &amp; L accounts, Total for Balance Sheet accounts. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).PAPeriodType<small> character(1) <br/> List</small> | 
| Line Type |  |  | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).LineType<small> character(1) <br/> List</small> | 
| Calculation |  |  | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).CalculationType<small> character(1) <br/> List</small> | 
| Report Source | Restriction of what will be shown in Report Line |  | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).PA_ReportSource_ID<small> numeric(10) <br/> Table Direct</small> | 
| Element Key | Key of the element |  | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).ElementValue<small> character varying(40) <br/> String</small> | 
| Account Element | Account Element | Account Elements can be natural accounts or user defined values. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).C_ElementValue_ID<small> numeric(10) <br/> Search</small> | 
| Import Report Line Set | Import Report Line Set information | The Parameters are default values for null import record values, they do not overwrite any data. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).Processing<small> character(1) <br/> Button</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [i_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_reportline.html).Processed<small> character(1) <br/> Yes-No</small> | 


