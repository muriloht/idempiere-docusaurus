# Process: Role Access Update 

**[Created:** 21/07/2004 - **Updated:** 15/01/2024 **]**  
**Description:** Update the access rights of a role or roles of a tenant  
**Help:** Update the access rights of a role or all roles of a tenant to windows, forms, processes and workflows. Note that a role is only updated if it is not marked as manual. Note that if is executed from System tenant and role is not set, all tenants will be updated  
**Class:** [org.compiere.process.RoleAccessUpdate](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/RoleAccessUpdate.html)

![](/img/docs/manual/RoleAccessUpdate-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | AD_Role_ID<br/>Table Direct | 
| Reset Existing Access | Reset Existing Access |  | ResetAccess<br/>Yes-No | 


