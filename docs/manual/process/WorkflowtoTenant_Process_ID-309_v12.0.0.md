# Process: Workflow to Tenant 

**[Created:** 28/09/2004 - **Updated:** 10/03/2022 **]**  
**Description:** Move custom workflow elements to the current tenant  
**Help:** The security architecture prevents you from adding tenant specific modifications/customizations to existing standard workflows.  This process moves your customization made on system level to this tenant to add tenant specific details.  
**Class:** [org.compiere.wf.WorkflowMoveToClient](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/wf/WorkflowMoveToClient.html)

![](/img/docs/manual/WorkflowtoTenant-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | AD_Client_ID<br/>Table Direct | 
| Workflow | Workflow or combination of tasks | The Workflow field identifies a unique Workflow in the system. | AD_Workflow_ID<br/>Table Direct | 


