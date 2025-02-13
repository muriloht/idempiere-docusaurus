# Window: Import Account

**[Created:** 11/01/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Import Natural Account Values  
**Help:** The Import Natural Account Window is an interim table which is used when importing external data into the system.  Selecting the &#x27;Process&#x27; button will either add or modify the appropriate records.  
![](/img/docs/manual/ImportAccount-Window_iDempiere_v12.0.0.png)

### Tab: Import Account

**[Created:** 11/01/2003 - **Updated:** 02/01/2000 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Import Account - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Import Account | Import Account Value |  | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).I_ElementValue_ID<small> numeric(10) <br/> ID</small> | 
| Imported | Has this import been processed | The Imported check box indicates if this import has been processed. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).I_IsImported<small> character(1) <br/> Yes-No</small> | 
| Account Element | Account Element | Account Elements can be natural accounts or user defined values. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).C_ElementValue_ID<small> numeric(10) <br/> Search</small> | 
| Import Error Message | Messages generated from import process | The Import Error Message displays any error messages generated during the import process. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).I_ErrorMsg<small> character varying(2000) <br/> String</small> | 
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Element Name | Name of the Element |  | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).ElementName<small> character varying(60) <br/> String</small> | 
| Element | Accounting Element | The Account Element uniquely identifies an Account Type.  These are commonly known as a Chart of Accounts. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).C_Element_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).Description<small> character varying(255) <br/> String</small> | 
| Account Type | Indicates the type of account | Valid account types are A - Asset, E - Expense, L - Liability, O- Owner&#x27;s Equity, R -Revenue and M- Memo.  The account type is used to determine what taxes, if any are applicable, validating payables and receivables for business partners.  Note:  Memo account amounts are ignored when checking for balancing | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).AccountType<small> character(1) <br/> List</small> | 
| Account Sign | Indicates the Natural Sign of the Account as a Debit or Credit | Indicates if the expected balance for this account should be a Debit or a Credit. If set to Natural, the account sign for an asset or expense account is Debit Sign (i.e. negative if a credit balance). | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).AccountSign<small> character(1) <br/> List</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Parent Key | Key if the Parent |  | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).ParentValue<small> character varying(40) <br/> String</small> | 
| Parent Account | The parent (summary) account |  | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).ParentElementValue_ID<small> numeric(10) <br/> Search</small> | 
| Post Actual | Actual Values can be posted | The Post Actual indicates if actual values can be posted to this element value. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).PostActual<small> character(1) <br/> Yes-No</small> | 
| Post Budget | Budget values can be posted | The Post Budget indicates if budget values can be posted to this element value. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).PostBudget<small> character(1) <br/> Yes-No</small> | 
| Post Statistical | Post statistical quantities to this account? |  | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).PostStatistical<small> character(1) <br/> Yes-No</small> | 
| Post Encumbrance | Post commitments to this account |  | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).PostEncumbrance<small> character(1) <br/> Yes-No</small> | 
| Document Controlled | Control account - If an account is controlled by a document, you cannot post manually to it |  | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).IsDocControlled<small> character(1) <br/> Yes-No</small> | 
| Default Account | Name of the Default Account Column |  | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).Default_Account<small> character varying(30) <br/> String</small> | 
| Column | Column in the table | Link to the database column of the table | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).AD_Column_ID<small> numeric(10) <br/> Table</small> | 
| Import Accounts | Import Natural Accounts | Import accounts and their hierarchies and optional update the default accounts.  Updating the Default Accounts changes the natural account segment of the used account, e.g. account 01-240 becomes 01-300).  If you create a new combination, the old account (e.g. 01-240) will remain, otherwise replaced.If you select this, make sure that you not multiple default accounts using one natural account and HAVE A BACKUP !!The Parameters are default values for null import record values, they do not overwrite any data. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).Processing<small> character(1) <br/> Button</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [i_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_elementvalue.html).Processed<small> character(1) <br/> Yes-No</small> | 


