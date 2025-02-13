# Process: Recalculate Cube 

**[Created:** 15/05/2009 - **Updated:** 10/12/2009 **]**  
**Description:** Recalculate summary facts based on report cube definitions.  
**Help:**   
**Class:** [org.compiere.process.FactAcctSummary](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/FactAcctSummary.html)

![](/img/docs/manual/RecalculateCube-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Report Cube | Define reporting cube for pre-calculation of summary accounting data. | Summary data will be generated for each period of the selected calendar, grouped by the selected dimensions.. | PA_ReportCube_ID<br/>Table | 
| Full rebuild | Delete all existing summary data and recalculate. | If not selected, only those periods with recently posted accounting facts will be recalculated. | Reset<br/>Yes-No | 
| Force | Force rebuild of cube even if locked. |  | Force<br/>Yes-No | 


