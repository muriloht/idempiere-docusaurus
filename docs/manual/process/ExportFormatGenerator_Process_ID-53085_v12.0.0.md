# Process: Export Format Generator 

**[Created:** 24/03/2008 - **Updated:** 01/12/2009 **]**  
**Description:** Create multiple Export Format based in a Window  
**Help:**   
**Class:** [org.eevolution.process.ExportFormatGenerator](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/eevolution/process/ExportFormatGenerator.html)

![](/img/docs/manual/ExportFormatGenerator-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | AD_Window_ID<br/>Table Direct | 
| Includes only the Tabs that Insert records | Generated Export Format for the Tabs with Insert Record is Yes |  | IsInsertRecord<br/>Yes-No | 
| Includes only the mandatory columns | Generated an Export Format Line  if the column is mandatory |  | IsMandatory<br/>Yes-No | 


