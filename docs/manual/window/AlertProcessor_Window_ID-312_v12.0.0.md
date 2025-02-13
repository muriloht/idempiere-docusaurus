# Window: Alert Processor

**[Created:** 19/02/2004 - **Updated:** 19/09/2012 **]**  
**Description:** Maintain Alert Processor/Server Parameter and Logs  
**Help:** Alert Processor/Server Parameter  
![](/img/docs/manual/AlertProcessor-Window_iDempiere_v12.0.0.png)

### Tab: Processor

**[Created:** 29/02/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Alert Processor  
**Help:**   
**Tab Level:** 0

Table 10: Processor - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_alertprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessor.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_alertprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessor.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_alertprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessor.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_alertprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessor.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_alertprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessor.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Schedule |  |  | [ad_alertprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessor.html).AD_Schedule_ID<small> numeric(10) <br/> Table Direct</small> | 
| Supervisor | Supervisor for this user/organization - used for escalation and approval | The Supervisor indicates who will be used for forwarding and escalating issues for this user - or for approvals. | [ad_alertprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessor.html).Supervisor_ID<small> numeric(10) <br/> Table</small> | 
| Days to keep Log | Number of days to keep the log entries | Older Log entries may be deleted | [ad_alertprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessor.html).KeepLogDays<small> numeric(10) <br/> Integer</small> | 
| Date Last Run | Date the process was last run. | The Date Last Run indicates the last time that a process was run. | [ad_alertprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessor.html).DateLastRun<small> timestamp without time zone <br/> Date+Time</small> | 
| Date Next Run | Date the process will run next | The Date Next Run indicates the next time this process will run. | [ad_alertprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessor.html).DateNextRun<small> timestamp without time zone <br/> Date+Time</small> | 


### Tab: Log

**[Created:** 29/02/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Alert Processor Log  
**Help:**   
**Tab Level:** 1

Table 20: Log - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_alertprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessorlog.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_alertprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessorlog.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Alert Processor | Alert Processor/Server Parameter | Alert Processor/Server Parameter | [ad_alertprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessorlog.html).AD_AlertProcessor_ID<small> numeric(10) <br/> Table Direct</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_alertprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessorlog.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Summary | Textual summary of this request | The Summary allows free form text entry of a recap of this request. | [ad_alertprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessorlog.html).Summary<small> character varying(2000) <br/> Text</small> | 
| Error | An Error occurred in the execution |  | [ad_alertprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessorlog.html).IsError<small> character(1) <br/> Yes-No</small> | 
| Reference | Reference for this record | The Reference displays the source document number. | [ad_alertprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessorlog.html).Reference<small> character varying(60) <br/> String</small> | 
| Text Message | Text Message |  | [ad_alertprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessorlog.html).TextMsg<small> character varying(2000) <br/> Text</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_alertprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_alertprocessorlog.html).Description<small> character varying(255) <br/> String</small> | 


