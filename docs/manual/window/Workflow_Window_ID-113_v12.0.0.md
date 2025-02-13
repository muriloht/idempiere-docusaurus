# Window: Workflow

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Workflow  
**Help:** The Workflow Window defines Workflows in the system, the access level for the Workflow and the Nodes or Steps within the Workflow.  
![](/img/docs/manual/Workflow-Window_iDempiere_v12.0.0.png)

### Tab: Workflow

**[Created:** 21/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define Workflow  
**Help:** The Workflow Tab defines Workflows in the system.  
**Tab Level:** 0

Table 10: Workflow - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).Help<small> text <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Beta Functionality | This functionality is considered Beta | Beta functionality is not fully tested or completed. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).IsBetaFunctionality<small> character(1) <br/> Yes-No</small> | 
| Workflow Type | Type of Workflow | The type of workflow determines how the workflow is started. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).WorkflowType<small> character(1) <br/> List</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).AD_Table_ID<small> numeric(10) <br/> Search</small> | 
| Document Value Logic | Logic to determine Workflow Start - If true, a workflow process is started for the document | You can enter simple logic using variables like @Created@=@Updated@, which fires, when a record is created. If you need to evaluate also values of other records, you need to use SQL logic and need to prefix this logic with &quot;SQL=&quot;. Example: start a Order verify workflow, when a business partner ordered something and is over the credit limit  &quot;SQL=EXISTS (SELECT * FROM C_BPartner bp WHERE C_Order. C_BPartner_ID=bp. C_BPartner_ID AND SO_CreditUsed &gt; SO_CreditLimit)&quot;.Note that the SQL based logic checks for duplicate workflows (i.e. a workflow is started only once per record). | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).DocValueLogic<small> character varying(2000) <br/> String</small> | 
| Data Access Level | Access Level required | Indicates the access level required for this record or process. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).AccessLevel<small> character(1) <br/> List</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Workflow Responsible | Responsible for Workflow Execution | The ultimate responsibility for a workflow is with an actual user. The Workflow Responsible allows to define ways to find that actual User. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).AD_WF_Responsible_ID<small> numeric(10) <br/> Table Direct</small> | 
| Priority | Indicates if this request is of a high, medium or low priority. | The Priority indicates the importance of this request. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).Priority<small> numeric(10) <br/> Integer</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).ValidFrom<small> timestamp without time zone <br/> Date</small> | 
| Valid to | Valid to including this date (last day) | The Valid To date indicates the last day of a date range | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).ValidTo<small> timestamp without time zone <br/> Date</small> | 
| Publication Status | Status of Publication | Used for internal documentation | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).PublishStatus<small> character(1) <br/> List</small> | 
| Version | Version of the table definition | The Version indicates the version of this table definition. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).Version<small> numeric(10) <br/> Integer</small> | 
| Author | Author/Creator of the Entity |  | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).Author<small> character varying(20) <br/> String</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Start Node | Workflow Node, step or process | The Workflow Node indicates a unique step or process in a Workflow. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).AD_WF_Node_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow Processor | Workflow Processor Server | Workflow Processor Server | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).AD_WorkflowProcessor_ID<small> numeric(10) <br/> Table Direct</small> | 
| Duration Unit | Unit of Duration | Unit to define the length of time for the execution | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).DurationUnit<small> character(1) <br/> List</small> | 
| Duration Limit | Maximum Duration in Duration Unit | Maximum (critical) Duration for time management purposes (e.g. starting an escalation procedure, etc.) in Duration Units. | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).Limit<small> numeric(10) <br/> Integer</small> | 
| Duration | Normal Duration in Duration Unit | Expected (normal) Length of time for the execution | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).Duration<small> numeric(10) <br/> Integer</small> | 
| Cost | Cost information |  | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).Cost<small> numeric <br/> Costs+Prices</small> | 
| Working Time | Workflow Simulation Execution Time | Amount of time the performer of the activity needs to perform the task in Duration Unit | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).WorkingTime<small> numeric(10) <br/> Integer</small> | 
| Waiting Time | Workflow Simulation Waiting time | Amount of time needed to prepare the performance of the task on Duration Units | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).WaitingTime<small> numeric(10) <br/> Integer</small> | 
| Context Help |  |  | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).AD_CtxHelp_ID<small> numeric(10) <br/> Search</small> | 
| Validate Workflow | Validate that the workflow is correct | (limited checking) | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).ValidateWorkflow<small> character(1) <br/> Button</small> | 
| Valid | Element is valid | The element passed the validation check | [ad_workflow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow.html).IsValid<small> character(1) <br/> Yes-No</small> | 


### Tab: Node

**[Created:** 11/06/1999 - **Updated:** 22/04/2020 **]**   
**Description:** Define workflow nodes  
**Help:** The Node Tab defines each Node, Activity or step in this Workflow.The action (activity) type determines the execution: &quot;Route&quot; may be used in routing control conditions.  &quot;None&quot; identifies manual execution.  
**Tab Level:** 1

Table 20: Node - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow | Workflow or combination of tasks | The Workflow field identifies a unique Workflow in the system. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_Workflow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).Help<small> text <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Centrally maintained | Information maintained in System Element table | The Centrally Maintained checkbox indicates if the Name, Description and Help maintained in &#x27;System Element&#x27; table  or &#x27;Window&#x27; table. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).IsCentrallyMaintained<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Workflow Responsible | Responsible for Workflow Execution | The ultimate responsibility for a workflow is with an actual user. The Workflow Responsible allows to define ways to find that actual User. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_WF_Responsible_ID<small> numeric(10) <br/> Table Direct</small> | 
| Priority | Indicates if this request is of a high, medium or low priority. | The Priority indicates the importance of this request. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).Priority<small> numeric(10) <br/> Integer</small> | 
| Start Mode | Workflow Activity Start Mode | How is the execution of an activity triggered. Automatic are triggered implicitly by the system, Manual explicitly by the User. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).StartMode<small> character(1) <br/> List</small> | 
| Finish Mode | Workflow Activity Finish Mode | How the system operated at the end of an activity. Automatic  implies return when the invoked applications finished control - Manual the user has to explicitly terminate the activity. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).FinishMode<small> character(1) <br/> List</small> | 
| Join Element | Semantics for multiple incoming Transitions | Semantics for multiple incoming Transitions for a Node/Activity. AND joins all concurrent threads - XOR requires one thread (no synchronization). | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).JoinElement<small> character(1) <br/> List</small> | 
| Split Element | Semantics for multiple outgoing Transitions | Semantics for multiple outgoing Transitions for a Node/Activity.  AND represents multiple concurrent threads - XOR represents the first transition with a true Transition condition. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).SplitElement<small> character(1) <br/> List</small> | 
| Action | Indicates the Action to be performed | The Action field is a drop down list box which indicates the Action to be performed for this Item. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).Action<small> character(1) <br/> List</small> | 
| Image | Image or Icon | Images and Icon can be used to display supported graphic formats (gif, jpg, png).You can either load the image (in the database) or point to a graphic via a URI (i.e. it can point to a resource, http address) | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_Image_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Special Form | Special Form | The Special Form field identifies a unique Special Form in the system. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_Form_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| Attribute Name | Name of the Attribute | Identifier of the attribute | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AttributeName<small> character varying(60) <br/> String</small> | 
| Attribute Value | Value of the Attribute | iDempiere converts the (string) field values to the attribute data type.  Booleans (Yes-No) may have the values &quot;true&quot; and &quot;false&quot;, the date format is YYYY-MM-DD | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AttributeValue<small> character varying(60) <br/> String</small> | 
| EMail Recipient | Recipient of the EMail |  | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).EMailRecipient<small> character(1) <br/> List</small> | 
| EMail Address | Electronic Mail Address | The Email Address is the Electronic Mail ID for this User and should be fully qualified (e.g. joe.smith@company.com). The Email Address is used to access the self service application functionality from the web. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).EMail<small> character varying(60) <br/> String</small> | 
| Attached Document | Attached document to Email |  | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).IsAttachedDocumentToEmail<small> character(1) <br/> Yes-No</small> | 
| Mail Template | Text templates for mailings | The Mail Template indicates the mail template for return messages. Mail text can include variables.  The priority of parsing is User/Contact, Business Partner and then the underlying business object (like Request, Dunning, Workflow object).So, @Name@ would resolve into the User name (if user is defined defined), then Business Partner name (if business partner is defined) and then the Name of the business object if it has a Name.For Multi-Lingual systems, the template is translated based on the Business Partner&#x27;s language selection. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).R_MailText_ID<small> numeric(10) <br/> Table Direct</small> | 
| Duration Limit | Maximum Duration in Duration Unit | Maximum (critical) Duration for time management purposes (e.g. starting an escalation procedure, etc.) in Duration Units. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).Limit<small> numeric(10) <br/> Integer</small> | 
| OS Task | Operation System Task | The Task field identifies a Operation System Task in the system. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_Task_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow | Workflow or tasks | The Workflow field identifies a unique workflow.   A workflow is a grouping of related tasks, in a specified sequence and optionally including approvals | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).Workflow_ID<small> numeric(10) <br/> Table</small> | 
| Subflow Execution | Mode how the sub-workflow is executed |  | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).SubflowExecution<small> character(1) <br/> List</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Action | The targeted status of the document | You find the current status in the Document Status field. The options are listed in a popup | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).DocAction<small> character(2) <br/> List</small> | 
| Wait Time | Time in minutes to wait (sleep) | Time in minutes to be suspended (sleep).  A value of -1 means to wait and execute after the commit of the workflow transaction. | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).WaitTime<small> numeric(10) <br/> Integer</small> | 
| Dynamic Priority Unit | Change of priority when Activity is suspended waiting for user | Starting with the Process / Node priority level, the priority of the suspended activity can be changed dynamically. Example +5 every 10 minutes | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).DynPriorityUnit<small> character(1) <br/> List</small> | 
| Dynamic Priority Change | Change of priority when Activity is suspended waiting for user | Starting with the Process / Node priority level, the priority of the suspended activity can be changed dynamically. Example +5 every 10 minutes | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).DynPriorityChange<small> numeric <br/> Number</small> | 
| Duration | Normal Duration in Duration Unit | Expected (normal) Length of time for the execution | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).Duration<small> numeric(10) <br/> Integer</small> | 
| Cost | Cost information |  | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).Cost<small> numeric <br/> Costs+Prices</small> | 
| Working Time | Workflow Simulation Execution Time | Amount of time the performer of the activity needs to perform the task in Duration Unit | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).WorkingTime<small> numeric(10) <br/> Integer</small> | 
| Waiting Time | Workflow Simulation Waiting time | Amount of time needed to prepare the performance of the task on Duration Units | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).WaitingTime<small> numeric(10) <br/> Integer</small> | 
| Context Help |  |  | [ad_wf_node](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node.html).AD_CtxHelp_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Parameter

**[Created:** 01/01/2004 - **Updated:** 28/09/2015 **]**   
**Description:** Workflow Node Parameter  
**Help:** Parameter for the execution of the Workflow Node  
**Tab Level:** 2

Table 30: Parameter - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_wf_node_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_para.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_wf_node_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_para.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Node | Workflow Node (activity), step or process | The Workflow Node indicates a unique step or process in a Workflow. | [ad_wf_node_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_para.html).AD_WF_Node_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_wf_node_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_para.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Process Parameter |  |  | [ad_wf_node_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_para.html).AD_Process_Para_ID<small> numeric(10) <br/> Table Direct</small> | 
| Attribute Name | Name of the Attribute | Identifier of the attribute | [ad_wf_node_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_para.html).AttributeName<small> character varying(60) <br/> String</small> | 
| Attribute Value | Value of the Attribute | iDempiere converts the (string) field values to the attribute data type.  Booleans (Yes-No) may have the values &quot;true&quot; and &quot;false&quot;, the date format is YYYY-MM-DD | [ad_wf_node_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_para.html).AttributeValue<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_wf_node_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_para.html).Description<small> character varying(255) <br/> String</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_wf_node_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_para.html).EntityType<small> character varying(40) <br/> Table</small> | 


### Tab: Node Translation

**[Created:** 11/06/1999 - **Updated:** 27/10/2024 **]**   
**Description:** Node Translation  
**Help:**   
**Tab Level:** 2

Table 40: Node Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Node | Workflow Node (activity), step or process | The Workflow Node indicates a unique step or process in a Workflow. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).AD_WF_Node_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).Help<small> text <br/> Text</small> | 


### Tab: Transition

**[Created:** 11/06/1999 - **Updated:** 16/11/2012 **]**   
**Description:** Workflow Node Transition  
**Help:** The Next Nodes Tab defines the order or Nodes or Steps in a Workflow.  
**Tab Level:** 2

Table 50: Transition - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_wf_nodenext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nodenext.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_wf_nodenext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nodenext.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Node | Workflow Node (activity), step or process | The Workflow Node indicates a unique step or process in a Workflow. | [ad_wf_nodenext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nodenext.html).AD_WF_Node_ID<small> numeric(10) <br/> Table Direct</small> | 
| Next Node | Next Node in workflow | The Next Node indicates the next step or task in this Workflow. | [ad_wf_nodenext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nodenext.html).AD_WF_Next_ID<small> numeric(10) <br/> Table</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_wf_nodenext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nodenext.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_wf_nodenext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nodenext.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_wf_nodenext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nodenext.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Std User Workflow | Standard Manual User Approval Workflow | If selected, only documents with an open status (drafted, in progress, approved, rejected, invalid) and standard user actions (prepare, complete, approve, reject) are allowed to continue.  Use this to prevent having to define details on how automatic processes (unlock, invalidate, post, re-activate) and when the document is closed for normal user action (completed, waiting, closed, voided, reversed). | [ad_wf_nodenext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nodenext.html).IsStdUserWorkflow<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_wf_nodenext](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nodenext.html).EntityType<small> character varying(40) <br/> Table</small> | 


### Tab: Condition

**[Created:** 17/03/2004 - **Updated:** 16/11/2012 **]**   
**Description:** Workflow Node Transition Condition  
**Help:** Optional restriction of transition of one node to the next. The (string) value is converted to the datatype.  Booleans (Yes-No) are represented by &quot;true&quot; and &quot;false&quot;, the date format is YYYY-mm-DD  
**Tab Level:** 3

Table 60: Condition - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Node Transition | Workflow Node Transition | The Next Nodes Tab defines the order or Nodes or Steps in a Workflow. | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).AD_WF_NodeNext_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| And/Or | Logical operation: AND or OR |  | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).AndOr<small> character(1) <br/> List</small> | 
| Operation | Compare Operation |  | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).Operation<small> character(2) <br/> List</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| SQL Expression/Statement |  |  | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).SQLStatement<small> character varying(4000) <br/> String</small> | 
| Value | Condition Value |  | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).Value<small> character varying(40) <br/> String</small> | 
| Value To | Value To |  | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).Value2<small> character varying(40) <br/> String</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_wf_nextcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_nextcondition.html).EntityType<small> character varying(40) <br/> Table</small> | 


### Tab: Workflow Translation

**[Created:** 21/06/1999 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 70: Workflow Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow | Workflow or combination of tasks | The Workflow field identifies a unique Workflow in the system. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).AD_Workflow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).Help<small> text <br/> Text</small> | 


### Tab: Access

**[Created:** 04/09/2000 - **Updated:** 16/11/2012 **]**   
**Description:** Workflow Access  
**Help:** The Workflow Access Tab defines the Roles who have access to this Workflow.  
**Tab Level:** 1

Table 80: Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_workflow_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_access.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_workflow_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_access.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow | Workflow or combination of tasks | The Workflow field identifies a unique Workflow in the system. | [ad_workflow_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_access.html).AD_Workflow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_workflow_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_access.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_workflow_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_access.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Read Write | Field is read / write | The Read Write indicates that this field may be read and updated. | [ad_workflow_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_access.html).IsReadWrite<small> character(1) <br/> Yes-No</small> | 


