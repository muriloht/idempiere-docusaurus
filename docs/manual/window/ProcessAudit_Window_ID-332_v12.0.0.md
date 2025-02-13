# Window: Process Audit

**[Created:** 15/06/2004 - **Updated:** 02/01/2000 **]**  
**Description:** Audit process use  
**Help:** Process Instance Information  
![](/img/docs/manual/ProcessAudit-Window_iDempiere_v12.0.0.png)

### Tab: Process Audit

**[Created:** 15/06/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Audit Process use  
**Help:**   
**Tab Level:** 0

Table 10: Process Audit - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Updated | Date this record was updated | The Updated field indicates the date that this record was updated. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).Updated<small> timestamp without time zone <br/> Date+Time</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 
| Record UUID |  |  | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).Record_UU<small> character varying(36) <br/> Record UUID</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Error Msg |  |  | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).ErrorMsg<small> character varying(2000) <br/> String</small> | 
| JSON Data | The json field stores json data. |  | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).JsonData<small> json <br/> JSON</small> | 
| Result | Result of the action taken | The Result indicates the result of any action taken on this request. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).Result<small> numeric(10) <br/> Integer</small> | 
| Session | User Session Online or Web | Online or Web Session Information | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_Session_ID<small> numeric(10) <br/> Search</small> | 
| Processing |  |  | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).IsProcessing<small> character(1) <br/> Yes-No</small> | 
| Run as Job |  |  | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).IsRunAsJob<small> character(1) <br/> Yes-No</small> | 
| Notification Type | Type of Notifications | Emails or Notification sent out for Request Updates, etc. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).NotificationType<small> character varying(2) <br/> List</small> | 
| Report Type |  |  | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).ReportType<small> character varying(5) <br/> String</small> | 
| Language ID |  |  | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_Language_ID<small> numeric(10) <br/> Table Direct</small> | 
| Print Format | Data Print Format | The print format determines how data is rendered for print. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).AD_PrintFormat_ID<small> numeric(10) <br/> Table Direct</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_pinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance.html).Name<small> character varying(60) <br/> String</small> | 


### Tab: Parameter Audit

**[Created:** 15/06/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Audit Process Parameter Values  
**Help:**   
**Tab Level:** 1

Table 20: Parameter Audit - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process Instance | Instance of the process |  | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).AD_PInstance_ID<small> numeric(10) <br/> Search</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).SeqNo<small> numeric(10) <br/> ID</small> | 
| Parameter Name |  |  | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).ParameterName<small> character varying(60) <br/> String</small> | 
| Info | Information | The Information displays data from the source document line. | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).Info<small> character varying(4000) <br/> String</small> | 
| Info To |  |  | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).Info_To<small> character varying(4000) <br/> String</small> | 
| Process String | Process Parameter |  | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).P_String<small> character varying(4000) <br/> String</small> | 
| Process String To | Process Parameter |  | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).P_String_To<small> character varying(4000) <br/> String</small> | 
| Process Date | Process Parameter |  | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).P_Date<small> timestamp without time zone <br/> Date+Time</small> | 
| Process Date To | Process Parameter |  | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).P_Date_To<small> timestamp without time zone <br/> Date+Time</small> | 
| Process Number | Process Parameter |  | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).P_Number<small> numeric <br/> Number</small> | 
| Process Number To | Process Parameter |  | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).P_Number_To<small> numeric <br/> Number</small> | 
| Not Clause | Indicates if a chosen multiple component value must be negate |  | [ad_pinstance_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_para.html).IsNotClause<small> character(1) <br/> Yes-No</small> | 


### Tab: Log

**[Created:** 15/06/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Process Log  
**Help:**   
**Tab Level:** 1

Table 30: Log - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Process Instance | Instance of the process |  | [ad_pinstance_log](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_log.html).AD_PInstance_ID<small> numeric(10) <br/> Search</small> | 
| Log |  |  | [ad_pinstance_log](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_log.html).Log_ID<small> numeric(10) <br/> Integer</small> | 
| Process ID |  |  | [ad_pinstance_log](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_log.html).P_ID<small> numeric(10) <br/> ID</small> | 
| Process Date | Process Parameter |  | [ad_pinstance_log](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_log.html).P_Date<small> timestamp without time zone <br/> Date</small> | 
| Process Number | Process Parameter |  | [ad_pinstance_log](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_log.html).P_Number<small> numeric <br/> Number</small> | 
| Process Message |  |  | [ad_pinstance_log](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_log.html).P_Msg<small> character varying(4000) <br/> Memo</small> | 
| JSON Data | The json field stores json data. |  | [ad_pinstance_log](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_log.html).JsonData<small> json <br/> JSON</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_pinstance_log](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_log.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_pinstance_log](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_log.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 
| Log Type | Process Audit Log Type |  | [ad_pinstance_log](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_pinstance_log.html).PInstanceLogType<small> character varying(3) <br/> List</small> | 


