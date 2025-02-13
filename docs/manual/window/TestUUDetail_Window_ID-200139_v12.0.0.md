# Window: Test UU Detail

**[Created:** 24/03/2023 - **Updated:** 24/03/2023 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/TestUUDetail-Window_iDempiere_v12.0.0.png)

### Tab: Test UU Detail

**[Created:** 24/03/2023 - **Updated:** 24/03/2023 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Test UU Detail - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Test UU |  |  | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).TestUU_UU<small> character varying(36) <br/> Table Direct (UU)</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).Name<small> character varying(60) <br/> String</small> | 
| Alternate Test UU |  |  | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).AltTestUU_UU<small> character varying(36) <br/> Search (UU)</small> | 
| Multi Test UU |  |  | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).TestUU_UUs<small> character varying(2000) <br/> Chosen Multiple Selection Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).IsActive<small> character(1) <br/> Yes-No</small> | 


