# Window: Request Standard Response

**[Created:** 26/04/2005 - **Updated:** 26/04/2005 **]**  
**Description:** Maintain Request Standard Response  
**Help:** Text blocks to be copied into request response text  
![](/img/docs/manual/RequestStandardResponse-Window_iDempiere_v12.0.0.png)

### Tab: Standard Response

**[Created:** 26/04/2005 - **Updated:** 26/04/2005 **]**   
**Description:** Maintain Request Standard Response  
**Help:** Text blocks to be copied into request response text  
**Tab Level:** 0

Table 10: Standard Response - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_standardresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_standardresponse.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_standardresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_standardresponse.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [r_standardresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_standardresponse.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_standardresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_standardresponse.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Response Text | Request Response Text | Text block to be copied into request response text | [r_standardresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_standardresponse.html).ResponseText<small> character varying(2000) <br/> Text</small> | 


