# Window: Workflow Activities (all)

**[Created:** 01/01/2004 - **Updated:** 09/02/2005 **]**  
**Description:** Monitor all Workflow activities  
**Help:** Maintain all Workflow activities  
![](/img/docs/manual/WorkflowActivitiesall-Window_iDempiere_v12.0.0.png)

### Tab: Activity

**[Created:** 01/01/2004 - **Updated:** 27/11/2005 **]**   
**Description:** Workflow Activities  
**Help:** The Workflow Activity is the actual Workflow Node in a Workflow Process instance  
**Tab Level:** 0

Table 10: Activity - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow Process | Actual Workflow Process Instance | Instance of a workflow execution | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).AD_WF_Process_ID<small> numeric(10) <br/> Search</small> | 
| Node | Workflow Node (activity), step or process | The Workflow Node indicates a unique step or process in a Workflow. | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).AD_WF_Node_ID<small> numeric(10) <br/> Table Direct</small> | 
| Priority | Indicates if this request is of a high, medium or low priority. | The Priority indicates the importance of this request. | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).Priority<small> numeric(10) <br/> Integer</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 
| Workflow State | State of the execution of the workflow |  | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).WFState<small> character(2) <br/> List</small> | 
| End Wait | End of sleep time | End of suspension (sleep) | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).EndWaitTime<small> timestamp without time zone <br/> Date+Time</small> | 
| Workflow | Workflow or combination of tasks | The Workflow field identifies a unique Workflow in the system. | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).AD_Workflow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow Responsible | Responsible for Workflow Execution | The ultimate responsibility for a workflow is with an actual user. The Workflow Responsible allows to define ways to find that actual User. | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).AD_WF_Responsible_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).AD_Table_ID<small> numeric(10) <br/> Search</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 
| Message | System Message | Information and Error messages | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).AD_Message_ID<small> numeric(10) <br/> Search</small> | 
| Last Alert | Date when last alert were sent | The last alert date is updated when a reminder email is sent | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).DateLastAlert<small> timestamp without time zone <br/> Date</small> | 
| Text Message | Text Message |  | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).TextMsg<small> character varying(2000) <br/> Text</small> | 
| Manage Activity | Manage Workflow Activity | Update or stop Workflow Activity | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).Processing<small> character(1) <br/> Button</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Workflow Activity | Workflow Activity | The Workflow Activity is the actual Workflow Node in a Workflow Process instance | [ad_wf_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activity.html).AD_WF_Activity_ID<small> numeric(10) <br/> ID</small> | 


### Tab: Approver

**[Created:** 08/08/2017 - **Updated:** 08/08/2017 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Approver - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_wf_activityapprover](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activityapprover.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_wf_activityapprover](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activityapprover.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow Activity | Workflow Activity | The Workflow Activity is the actual Workflow Node in a Workflow Process instance | [ad_wf_activityapprover](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activityapprover.html).AD_WF_Activity_ID<small> numeric(10) <br/> Search</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_wf_activityapprover](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activityapprover.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_wf_activityapprover](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_activityapprover.html).IsActive<small> character(1) <br/> Yes-No</small> | 


