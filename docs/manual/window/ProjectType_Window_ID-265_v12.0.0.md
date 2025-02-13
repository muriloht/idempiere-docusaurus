# Window: Project Type

**[Created:** 28/05/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Project Type and Phase  
**Help:** Maintain Project Types and their Phases with standard performance information  
![](/img/docs/manual/ProjectType-Window_iDempiere_v12.0.0.png)

### Tab: Project Type

**[Created:** 28/05/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Type of a Project  
**Help:** Type of the project with optional phases and tasks of the project with standard performance information  
**Tab Level:** 0

Table 10: Project Type - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_projecttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttype.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_projecttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttype.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_projecttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttype.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_projecttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttype.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_projecttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttype.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_projecttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttype.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Project Category | Project Category | The Project Category determines the behavior of the project:General - no special accounting, e.g. for Presales or general trackingService - no special accounting, e.g. for Service/Charge projectsWork Order - creates Project/Job WIP transactions - ability to issue materialAsset - create Project Asset transactions - ability to issue material | [c_projecttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_projecttype.html).ProjectCategory<small> character(1) <br/> List</small> | 


### Tab: Standard Phase

**[Created:** 28/05/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Standard Project Phase  
**Help:** Standard Phase of the project with performance information  
**Tab Level:** 1

Table 20: Standard Phase - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_phase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_phase.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_phase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_phase.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project Type | Type of the project | Type of the project with optional phases of the project with standard performance information | [c_phase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_phase.html).C_ProjectType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [c_phase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_phase.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_phase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_phase.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_phase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_phase.html).Description<small> character varying(255) <br/> Text</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_phase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_phase.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_phase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_phase.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_phase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_phase.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Standard Quantity | Standard Quantity |  | [c_phase](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_phase.html).StandardQty<small> numeric <br/> Quantity</small> | 


### Tab: Standard Task

**[Created:** 01/06/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Standard Project Task  
**Help:** Standard Project Task  
**Tab Level:** 2

Table 30: Standard Task - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_task.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_task.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Standard Phase | Standard Phase of the Project Type | Phase of the project with standard performance information with standard work | [c_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_task.html).C_Phase_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [c_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_task.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_task.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_task.html).Description<small> character varying(255) <br/> Text</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_task.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_task.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_task.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Standard Quantity | Standard Quantity |  | [c_task](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_task.html).StandardQty<small> numeric <br/> Quantity</small> | 


