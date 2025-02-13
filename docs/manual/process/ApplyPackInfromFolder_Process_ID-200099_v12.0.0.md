# Process: Apply Pack In from Folder 

**[Created:** 15/03/2018 - **Updated:** 10/03/2022 **]**  
**Description:** Apply all zip files from a folder following the rules and conventions of Automatic Pack In process  
**Help:** This process apply all the pack in files found in a folder recursively - ordered by timestamp.The filename of the pack in files is important, it must follow the following convention:[Timestamp]_[ClientValue][_AdditionalInformation].zipTimestamp: must be in the format yyyymmddHHMMClientValue: case sensitive and compared against AD_Client.Value to find the tenant where the pack in must be appliedAdditionalInformation: Any additional information to identify the zip fileNOTE that AD_Client.Value must not contain underscore in order for this process to work.There is a special case for ClientValue, if the ClientValue is ALL-CLIENTS then the 2pack is intended to be applied in all active non-system tenants.If there is a need to apply initially in a seed tenant then the ClientValue must take the form ALL-CLIENTS-Seed.For example:201803151607_ALL-CLIENTS-GardenWorld_Test123.zip  
**Class:** [org.adempiere.pipo2.PackInFolder](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/adempiere/pipo2/PackInFolder.html)

![](/img/docs/manual/ApplyPackInfromFolder-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Folder | Path on the server where the pack in files are located |  | Folder<br/>String | 


