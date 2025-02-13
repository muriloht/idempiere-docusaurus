# Process: Create Asset from Project 

**[Created:** 15/03/2012 - **Updated:** 11/11/2022 **]**  
**Description:** This process creates asset from project and automatically close the project  
**Help:** There are four parameters:a. Project, is the Project that will be converted to asset. This project will be closed after this process completesb. Product, is the asset product that will be act as the base for the newly created assetc. UseLifeYears, is an optional parameter. Use this if you want a different use life years for the newly created asset, instead of the default uselifeyears from asset group accounting.d. Transaction Date, will become in-service-date for the newly created asset.  
**Class:** [org.idempiere.fa.process.ProjectCreateAsset](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/idempiere/fa/process/ProjectCreateAsset.html)

![](/img/docs/manual/CreateAssetfromProject-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Project | Financial Project | A Project allows you to track and control internal or external activities. | C_Project_ID<br/>Search | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Search | 
| Transaction Date | Transaction Date | The Transaction Date indicates the date of the transaction. | DateTrx<br/>Date | 
| Usable Life - Years | Years of the usable life of the asset |  | UseLifeYears<br/>Integer | 


