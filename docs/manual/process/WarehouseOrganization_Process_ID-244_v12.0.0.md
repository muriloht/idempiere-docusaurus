# Process: Warehouse Organization 

**[Created:** 23/12/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Set and verify Organization ownership of Warehouse  
**Help:** The process allows you to change or verify the organization ownership of a warehouse and its dependent entities (Location, Storage).  
**Class:** [org.compiere.process.OrgOwnership](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/OrgOwnership.html)

![](/img/docs/manual/WarehouseOrganization-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | AD_Org_ID<br/>Table Direct | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | M_Warehouse_ID<br/>Table Direct | 


