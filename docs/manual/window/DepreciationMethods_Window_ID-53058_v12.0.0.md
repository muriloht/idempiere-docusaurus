# Window: Depreciation Methods

**[Created:** 30/05/2008 - **Updated:** 12/04/2012 **]**  
**Description:** Depreciation Methods  
**Help:** The Depreciation method windows allows the user to review the depreciation calculations available in Adempiere  
![](/img/docs/manual/DepreciationMethods-Window_iDempiere_v12.0.0.png)

### Tab: Depreciation Functions

**[Created:** 30/05/2008 - **Updated:** 28/03/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Depreciation Functions - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [a_depreciation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [a_depreciation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name |  |  | [a_depreciation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation.html).Name<small> character varying(120) <br/> String</small> | 
| Depreciation Type |  |  | [a_depreciation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation.html).DepreciationType<small> character varying(10) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [a_depreciation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation.html).Description<small> character varying(510) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [a_depreciation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/a_depreciation.html).IsActive<small> character(1) <br/> Yes-No</small> | 


