# Window: Workflow Processor

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Workflow Processor and Logs  
**Help:** Workflow Processor Server Parameters  
![](/img/docs/manual/WorkflowProcessor-Window_iDempiere_v12.0.0.png)

### Tab: Workflow Processor

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Workflow Processor Server  
**Help:** Workflow Processor Server  
**Tab Level:** 0

Table 10: Workflow Processor - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Schedule |  |  | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).AD_Schedule_ID<small> numeric(10) <br/> Table Direct</small> | 
| Inactivity Alert Days | Send Alert when there is no activity after days (0= no alert) | An email alert is sent when the request shows no activity for the number of days defined. | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).InactivityAlertDays<small> numeric(10) <br/> Integer</small> | 
| Reminder Days | Days between sending Reminder Emails for a due or inactive Document | When a document is due for too long without activity, a reminder is sent. 0 means no reminders.The Remind Days are the days when the next email reminder is sent. | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).RemindDays<small> numeric(10) <br/> Integer</small> | 
| Supervisor | Supervisor for this user/organization - used for escalation and approval | The Supervisor indicates who will be used for forwarding and escalating issues for this user - or for approvals. | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).Supervisor_ID<small> numeric(10) <br/> Table</small> | 
| Days to keep Log | Number of days to keep the log entries | Older Log entries may be deleted | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).KeepLogDays<small> numeric(10) <br/> Integer</small> | 
| Alert over Priority | Send alert email when over priority | Send alert email when a suspended activity is over the  priority defined | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).AlertOverPriority<small> numeric(10) <br/> Integer</small> | 
| Date Last Run | Date the process was last run. | The Date Last Run indicates the last time that a process was run. | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).DateLastRun<small> timestamp without time zone <br/> Date+Time</small> | 
| Date Next Run | Date the process will run next | The Date Next Run indicates the next time this process will run. | [ad_workflowprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessor.html).DateNextRun<small> timestamp without time zone <br/> Date+Time</small> | 


### Tab: Log

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Workflow Processor Log  
**Help:** Result of the execution of the Workflow Processor  
**Tab Level:** 1

Table 20: Log - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_workflowprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessorlog.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_workflowprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessorlog.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow Processor | Workflow Processor Server | Workflow Processor Server | [ad_workflowprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessorlog.html).AD_WorkflowProcessor_ID<small> numeric(10) <br/> Table Direct</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_workflowprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessorlog.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Summary | Textual summary of this request | The Summary allows free form text entry of a recap of this request. | [ad_workflowprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessorlog.html).Summary<small> character varying(2000) <br/> Text</small> | 
| Error | An Error occurred in the execution |  | [ad_workflowprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessorlog.html).IsError<small> character(1) <br/> Yes-No</small> | 
| Reference | Reference for this record | The Reference displays the source document number. | [ad_workflowprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessorlog.html).Reference<small> character varying(60) <br/> String</small> | 
| Text Message | Text Message |  | [ad_workflowprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessorlog.html).TextMsg<small> character varying(2000) <br/> Text</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_workflowprocessorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflowprocessorlog.html).Description<small> character varying(255) <br/> String</small> | 


