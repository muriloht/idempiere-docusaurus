# Process: Copy Role 

**[Created:** 11/12/2006 - **Updated:** 25/04/2023 **]**  
**Description:** WARNING! when executing the process, all Role to access records will be lost, being replaced by Role from records  
**Help:** Copy role access records from one role to another.  The existing access records for the destination role will be deleted.  This process can be executed just by advanced roles.  
**Class:** [org.compiere.process.CopyRole](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/CopyRole.html)

![](/img/docs/manual/CopyRole-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | AD_Org_ID<br/>Table Direct | 
| Role From | Role that will be copied all accesses | Inform the role that you want to copy the access information | AD_Role_ID_From<br/>Table | 
| Role To | Role that will receive the copy of access permissions | Inform the role that will receive access information | AD_Role_ID_To<br/>Table | 


