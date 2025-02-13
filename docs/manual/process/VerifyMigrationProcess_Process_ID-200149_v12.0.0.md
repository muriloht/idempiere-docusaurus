# Process: Verify Migration Process 

**[Created:** 13/01/2023 - **Updated:** 13/01/2023 **]**  
**Description:** This process helps to verify if everything is OK after a migration and discover possible customizations lost  
**Help:** The Date To parameter serves to filter the change audit records, in case you want to detect changes just until some date, when empty it process all change audit records  
**Class:** [org.idempiere.process.VerifyMigration](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/idempiere/process/VerifyMigration.html)

![](/img/docs/manual/VerifyMigrationProcess-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Date To | Last Date to verify Change Log | The change log is verified until this date (useful for example to exclude the application of some 2Packs) | DateTo<br/>Date | 


