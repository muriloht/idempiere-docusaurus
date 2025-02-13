# Process: Generate PO from Project 

**[Created:** 02/09/2003 - **Updated:** 04/02/2015 **]**  
**Description:** Generate PO from Project Line(s)  
**Help:**   
**Class:** [org.compiere.process.ProjectGenPO](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/ProjectGenPO.html)

![](/img/docs/manual/GeneratePOfromProject-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Project | Financial Project | A Project allows you to track and control internal or external activities. | C_Project_ID<br/>Table Direct | 
| Project Phase | Phase of a Project |  | C_ProjectPhase_ID<br/>Table Direct | 
| Project Line | Task or step in a project | The Project Line indicates a unique project line. | C_ProjectLine_ID<br/>Table Direct | 
| Consolidate to one Document | Consolidate Lines into one Document |  | ConsolidateDocument<br/>Yes-No | 


