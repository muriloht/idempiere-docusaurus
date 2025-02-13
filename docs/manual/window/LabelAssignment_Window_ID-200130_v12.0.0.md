# Window: Label Assignment

**[Created:** 24/06/2022 - **Updated:** 24/06/2022 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/LabelAssignment-Window_iDempiere_v12.0.0.png)

### Tab: Assignment

**[Created:** 24/06/2022 - **Updated:** 24/06/2022 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Assignment - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_labelassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelassignment.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_labelassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelassignment.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_labelassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelassignment.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_labelassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelassignment.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Label | Record Label |  | [ad_labelassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelassignment.html).AD_Label_ID<small> numeric(10) <br/> Search</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_labelassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelassignment.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record UUID |  |  | [ad_labelassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelassignment.html).Record_UU<small> character varying(36) <br/> Record UUID</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_labelassignment](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelassignment.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 


