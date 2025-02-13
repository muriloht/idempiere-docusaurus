# Window: Accounting Processor

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Accounting Processor and Logs  
**Help:** Accounting Processor/Server Parameters and Logs  
![](/img/docs/manual/AccountingProcessor-Window_iDempiere_v12.0.0.png)

### Tab: Accounting Processor

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Accounting Processor/Server Parameters  
**Help:** Accounting Processor/Server Parameters. If no account schema is selected, all accounting schema are processed. If no transaction table is selected, accounting for all transaction is created.  
**Tab Level:** 0

Table 10: Accounting Processor - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Schedule |  |  | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).AD_Schedule_ID<small> numeric(10) <br/> Table Direct</small> | 
| Supervisor | Supervisor for this user/organization - used for escalation and approval | The Supervisor indicates who will be used for forwarding and escalating issues for this user - or for approvals. | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).Supervisor_ID<small> numeric(10) <br/> Table</small> | 
| Days to keep Log | Number of days to keep the log entries | Older Log entries may be deleted | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).KeepLogDays<small> numeric(10) <br/> Integer</small> | 
| Date Last Run | Date the process was last run. | The Date Last Run indicates the last time that a process was run. | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).DateLastRun<small> timestamp without time zone <br/> Date+Time</small> | 
| Date Next Run | Date the process will run next | The Date Next Run indicates the next time this process will run. | [c_acctprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessor.html).DateNextRun<small> timestamp without time zone <br/> Date+Time</small> | 


### Tab: Log

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Result of the execution of the Accounting Processor  
**Help:** Result of the execution of the Accounting Processor  
**Tab Level:** 1

Table 20: Log - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_acctprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessorlog.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_acctprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessorlog.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Accounting Processor | Accounting Processor/Server Parameters | Accounting Processor/Server Parameters | [c_acctprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessorlog.html).C_AcctProcessor_ID<small> numeric(10) <br/> Table Direct</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [c_acctprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessorlog.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Summary | Textual summary of this request | The Summary allows free form text entry of a recap of this request. | [c_acctprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessorlog.html).Summary<small> character varying(2000) <br/> Text</small> | 
| Error | An Error occurred in the execution |  | [c_acctprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessorlog.html).IsError<small> character(1) <br/> Yes-No</small> | 
| Reference | Reference for this record | The Reference displays the source document number. | [c_acctprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessorlog.html).Reference<small> character varying(60) <br/> String</small> | 
| Text Message | Text Message |  | [c_acctprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessorlog.html).TextMsg<small> character varying(2000) <br/> Text</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_acctprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_acctprocessorlog.html).Description<small> character varying(255) <br/> String</small> | 


