# Window: Scheduler

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Schedule Processes and Logs  
**Help:** Schedule processes to be executed asynchronously  
![](/img/docs/manual/Scheduler-Window_iDempiere_v12.0.0.png)

### Tab: Schedule Process

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Schedule processes  
**Help:** Schedule processes to be executed asynchronously  
**Tab Level:** 0

Table 10: Schedule Process - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Print Format | Data Print Format | The print format determines how data is rendered for print. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).AD_PrintFormat_ID<small> numeric(10) <br/> Table Direct</small> | 
| Report Output Type |  |  | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).ReportOutputType<small> character varying(4) <br/> List</small> | 
| Mail Template | Text templates for mailings | The Mail Template indicates the mail template for return messages. Mail text can include variables.  The priority of parsing is User/Contact, Business Partner and then the underlying business object (like Request, Dunning, Workflow object).So, @Name@ would resolve into the User name (if user is defined defined), then Business Partner name (if business partner is defined) and then the Name of the business object if it has a Name.For Multi-Lingual systems, the template is translated based on the Business Partner&#x27;s language selection. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).R_MailText_ID<small> numeric(10) <br/> Table Direct</small> | 
| Schedule |  |  | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).AD_Schedule_ID<small> numeric(10) <br/> Table Direct</small> | 
| Supervisor | Supervisor for this user/organization - used for escalation and approval | The Supervisor indicates who will be used for forwarding and escalating issues for this user - or for approvals. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).Supervisor_ID<small> numeric(10) <br/> Table</small> | 
| Days to keep Log | Number of days to keep the log entries | Older Log entries may be deleted | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).KeepLogDays<small> numeric(10) <br/> Integer</small> | 
| Date Last Run | Date the process was last run. | The Date Last Run indicates the last time that a process was run. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).DateLastRun<small> timestamp with time zone <br/> Timestamp With Time Zone</small> | 
| Date Next Run | Date the process will run next | The Date Next Run indicates the next time this process will run. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).DateNextRun<small> timestamp with time zone <br/> Timestamp With Time Zone</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_scheduler](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 


### Tab: Parameter

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Scheduler Parameter  
**Help:** Provide parameter for scheduled process  
**Tab Level:** 1

Table 20: Parameter - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_scheduler_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler_para.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_scheduler_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler_para.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Scheduler | Schedule Processes | Schedule processes to be executed asynchronously | [ad_scheduler_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler_para.html).AD_Scheduler_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process Parameter |  |  | [ad_scheduler_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler_para.html).AD_Process_Para_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_scheduler_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler_para.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default Parameter | Default value of the parameter | The default value can be a variable like @#Date@ | [ad_scheduler_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler_para.html).ParameterDefault<small> character varying(255) <br/> String</small> | 
| Default To Parameter | Default value of the to parameter | The default value can be a variable like @#Date@ | [ad_scheduler_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler_para.html).ParameterToDefault<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_scheduler_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_scheduler_para.html).Description<small> character varying(255) <br/> String</small> | 


### Tab: Scheduler Recipient

**[Created:** 12/03/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Recipient of the Scheduler Notification  
**Help:** You can send the notifications to users or roles  
**Tab Level:** 1

Table 30: Scheduler Recipient - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_schedulerrecipient](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerrecipient.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_schedulerrecipient](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerrecipient.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Scheduler | Schedule Processes | Schedule processes to be executed asynchronously | [ad_schedulerrecipient](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerrecipient.html).AD_Scheduler_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_schedulerrecipient](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerrecipient.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_schedulerrecipient](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerrecipient.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_schedulerrecipient](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerrecipient.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| Upload |  |  | [ad_schedulerrecipient](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerrecipient.html).IsUpload<small> character(1) <br/> Yes-No</small> | 
| Authorization Account |  |  | [ad_schedulerrecipient](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerrecipient.html).AD_AuthorizationAccount_ID<small> numeric(10) <br/> Table Direct</small> | 
| File Name | Name of the local file or URL | Name of a file in the local directory space - or URL (file://.., http://.., ftp://..) | [ad_schedulerrecipient](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerrecipient.html).FileName<small> character varying(255) <br/> String</small> | 


### Tab: Log

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Scheduler Log  
**Help:** Result of the execution of the Scheduler  
**Tab Level:** 1

Table 40: Log - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_schedulerlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerlog.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_schedulerlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerlog.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Scheduler | Schedule Processes | Schedule processes to be executed asynchronously | [ad_schedulerlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerlog.html).AD_Scheduler_ID<small> numeric(10) <br/> Table Direct</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_schedulerlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerlog.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Summary | Textual summary of this request | The Summary allows free form text entry of a recap of this request. | [ad_schedulerlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerlog.html).Summary<small> character varying(2000) <br/> Text</small> | 
| Error | An Error occurred in the execution |  | [ad_schedulerlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerlog.html).IsError<small> character(1) <br/> Yes-No</small> | 
| Reference | Reference for this record | The Reference displays the source document number. | [ad_schedulerlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerlog.html).Reference<small> character varying(60) <br/> String</small> | 
| Text Message | Text Message |  | [ad_schedulerlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerlog.html).TextMsg<small> character varying(2000) <br/> Text</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_schedulerlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedulerlog.html).Description<small> character varying(255) <br/> String</small> | 


