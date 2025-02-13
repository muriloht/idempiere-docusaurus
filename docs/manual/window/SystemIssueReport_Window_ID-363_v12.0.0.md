# Window: System Issue Report

**[Created:** 12/12/2005 - **Updated:** 14/12/2005 **]**  
**Description:** Automatically created or manually entered System Issue Reports  
**Help:** System Issues are created to speed up the resolution of any system related issues (potential bugs).  If enabled, they are automatically reported to iDempiere.  No data or confidential information is transferred.  
![](/img/docs/manual/SystemIssueReport-Window_iDempiere_v12.0.0.png)

### Tab: System Issue

**[Created:** 12/12/2005 - **Updated:** 14/12/2005 **]**   
**Description:** Automatically created or manually entered System Issue Reporting  
**Help:** System Issues are created to speed up the resolution of any system related issues (potential bugs).  If enabled, they are automatically reported to iDempiere.  No data or confidential information is transferred.  
**Tab Level:** 0

Table 10: System Issue - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Release No | Internal Release Number |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).ReleaseNo<small> character varying(10) <br/> String</small> | 
| Version | Version of the table definition | The Version indicates the version of this table definition. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).Version<small> character varying(40) <br/> String</small> | 
| Vanilla System | The system was NOT compiled from Source - i.e. standard distribution | You may have customizations, like additional columns, tables, etc - but no code modifications which require compiling from source. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).IsVanillaSystem<small> character(1) <br/> List</small> | 
| Release Tag | Release Tag |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).ReleaseTag<small> character varying(60) <br/> String</small> | 
| Source | Issue Source | Source of the Issue | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).IssueSource<small> character(1) <br/> List</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).AD_Window_ID<small> numeric(10) <br/> Search</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).AD_Process_ID<small> numeric(10) <br/> Search</small> | 
| Special Form | Special Form | The Special Form field identifies a unique Special Form in the system. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).AD_Form_ID<small> numeric(10) <br/> Table Direct</small> | 
| Issue Summary | Issue Summary |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).IssueSummary<small> character varying(2000) <br/> String</small> | 
| Reproducible | Problem can re reproduced in Gardenworld | The problem occurs also in the standard distribution in the demo tenant Gardenworld. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).IsReproducible<small> character(1) <br/> List</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).Comments<small> character varying(2000) <br/> Text</small> | 
| Logger | Logger Name |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).LoggerName<small> character varying(255) <br/> String</small> | 
| Source Method | Source Method Name |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).SourceMethodName<small> character varying(60) <br/> String</small> | 
| Source Class | Source Class Name |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).SourceClassName<small> character varying(255) <br/> String</small> | 
| Line | Line No |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).LineNo<small> numeric(10) <br/> Integer</small> | 
| Stack Trace | System Log Trace |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).StackTrace<small> character varying(2000) <br/> Text</small> | 
| Error Trace | System Error Trace | Java Trace Info | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).ErrorTrace<small> character varying(2000) <br/> Text</small> | 
| Response Text | Request Response Text | Text block to be copied into request response text | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).ResponseText<small> character varying(2000) <br/> Text</small> | 
| System Status | Status of the system - Support priority depends on system status | System status helps to prioritize support resources | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).SystemStatus<small> character(1) <br/> List</small> | 
| Known Issue | Known Issue |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).R_IssueKnown_ID<small> numeric(10) <br/> Search</small> | 
| Request Document No | iDempiere Request Document No |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).RequestDocumentNo<small> character varying(30) <br/> String</small> | 
| Request | Request from a Business Partner or Prospect | The Request identifies a unique request from a Business Partner or Prospect. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).R_Request_ID<small> numeric(10) <br/> Search</small> | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).A_Asset_ID<small> numeric(10) <br/> Search</small> | 
| Issue Project | Implementation Projects |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).R_IssueProject_ID<small> numeric(10) <br/> Search</small> | 
| Support EMail | EMail address to send support information and updates to | If not entered the registered email is used. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).SupportEMail<small> character varying(60) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).Name<small> character varying(60) <br/> String</small> | 
| User Name |  |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).UserName<small> character varying(60) <br/> String</small> | 
| Issue System | System creating the issue |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).R_IssueSystem_ID<small> numeric(10) <br/> Search</small> | 
| Issue User | User who reported issues |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).R_IssueUser_ID<small> numeric(10) <br/> Search</small> | 
| DB Address | JDBC URL of the database server |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).DBAddress<small> character varying(255) <br/> String</small> | 
| Local Host | Local Host Info |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).Local_Host<small> character varying(120) <br/> String</small> | 
| Statistics | Information to help profiling the system for solving support issues | Profile information do not contain sensitive information and are used to support issue detection and diagnostics as well as general anonymous statistics | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).StatisticsInfo<small> character varying(255) <br/> String</small> | 
| Profile | Information to help profiling the system for solving support issues | Profile information do not contain sensitive information and are used to support issue detection and diagnostics | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).ProfileInfo<small> character varying(4000) <br/> String</small> | 
| Remote Host | Remote host Info |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).Remote_Host<small> character varying(120) <br/> String</small> | 
| Remote Addr | Remote Address | The Remote Address indicates an alternative or external address. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).Remote_Addr<small> character varying(60) <br/> String</small> | 
| Operating System | Operating System Info |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).OperatingSystemInfo<small> character varying(255) <br/> String</small> | 
| Java Info | Java Version Info |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).JavaInfo<small> character varying(255) <br/> String</small> | 
| Database | Database Information |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).DatabaseInfo<small> character varying(255) <br/> String</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Report or Update Issue | Report Issue to iDempiere |  | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).Processing<small> character(1) <br/> Button</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_issue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_issue.html).Record_ID<small> numeric(10) <br/> Integer</small> | 


