# Window: Report Cube

**[Created:** 14/05/2009 - **Updated:** 14/05/2009 **]**  
**Description:** Define reporting cube for pre-calculation of summary accounting data.  
**Help:** Summary data will be generated for each period of the selected calendar, grouped by the selected dimensions..  
![](/img/docs/manual/ReportCube-Window_iDempiere_v12.0.0.png)

### Tab: Report Cube

**[Created:** 14/05/2009 - **Updated:** 14/05/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Report Cube - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).Description<small> character varying(255) <br/> Text</small> | 
| Calendar | Accounting Calendar Name | The Calendar uniquely identifies an accounting calendar.  Multiple calendars can be used.  For example you may need a standard calendar that runs from Jan 1 to Dec 31 and a fiscal calendar that runs from July 1 to June 30. | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).C_Calendar_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Product Dimension | Include Product as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsProductDim<small> character(1) <br/> Yes-No</small> | 
| Business Partner Dimension | Include Business Partner as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsBPartnerDim<small> character(1) <br/> Yes-No</small> | 
| Sales Region Dimension | Include Sales Region as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsSalesRegionDim<small> character(1) <br/> Yes-No</small> | 
| OrgTrx Dimension | Include OrgTrx as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsOrgTrxDim<small> character(1) <br/> Yes-No</small> | 
| Activity Dimension | Include Activity as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsActivityDim<small> character(1) <br/> Yes-No</small> | 
| Campaign Dimension | Include Campaign as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsCampaignDim<small> character(1) <br/> Yes-No</small> | 
| Project Dimension | Include Project as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsProjectDim<small> character(1) <br/> Yes-No</small> | 
| Project Phase  Dimension | Include Project Phase as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsProjectPhaseDim<small> character(1) <br/> Yes-No</small> | 
| Project Task  Dimension | Include Project Task as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsProjectTaskDim<small> character(1) <br/> Yes-No</small> | 
| GL Budget Dimension | Include GL Budget as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsGLBudgetDim<small> character(1) <br/> Yes-No</small> | 
| Location From Dimension | Include Location From as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsLocFromDim<small> character(1) <br/> Yes-No</small> | 
| Location To  Dimension | Include Location To as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsLocToDim<small> character(1) <br/> Yes-No</small> | 
| Sub Acct Dimension | Include Sub Acct as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsSubAcctDim<small> character(1) <br/> Yes-No</small> | 
| User Element List 1 Dimension | Include User Element List 1 as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsUser1Dim<small> character(1) <br/> Yes-No</small> | 
| User Element List 2 Dimension | Include User Element List 2 as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsUser2Dim<small> character(1) <br/> Yes-No</small> | 
| User Column 1 Dimension | Include User Element 1 as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsUserElement1Dim<small> character(1) <br/> Yes-No</small> | 
| User Column 2 Dimension | Include User Element 2 as a cube dimension |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).IsUserElement2Dim<small> character(1) <br/> Yes-No</small> | 
| Last Recalculated | The time last recalculated. |  | [pa_reportcube](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcube.html).LastRecalculated<small> timestamp without time zone <br/> Date+Time</small> | 


