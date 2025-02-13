# Window: Private Access

**[Created:** 22/01/2024 - **Updated:** 22/01/2024 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/PrivateAccess-Window_iDempiere_v12.0.0.png)

### Tab: Private Access

**[Created:** 22/01/2024 - **Updated:** 22/01/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Private Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_private_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_private_access.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_private_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_private_access.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_private_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_private_access.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_private_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_private_access.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_private_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_private_access.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_private_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_private_access.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 


