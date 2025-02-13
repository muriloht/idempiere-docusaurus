# Window: Cost Element

**[Created:** 24/04/2005 - **Updated:** 24/04/2005 **]**  
**Description:** Maintain Product Cost Element  
**Help:** You can define your own product cost elements.  
![](/img/docs/manual/CostElement-Window_iDempiere_v12.0.0.png)

### Tab: Cost Element

**[Created:** 24/04/2005 - **Updated:** 25/04/2005 **]**   
**Description:** Maintain product cost elements  
**Help:** You can maintain multiple Material Costs. Which of the Material Cost Types is used for accounting is determined by the costing method.Define a Costing Method (for Material Elements) only if you want the cost calculated for that costing method. For accounting, the costing method defined in the Accounting Schema or Product Category Acct is used.  
**Tab Level:** 0

Table 10: Cost Element - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_costelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costelement.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_costelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costelement.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_costelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costelement.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_costelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costelement.html).Description<small> character varying(255) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_costelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costelement.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Cost Element Type | Type of Cost Element |  | [m_costelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costelement.html).CostElementType<small> character(1) <br/> List</small> | 
| Costing Method | Indicates how Costs will be calculated | The Costing Method indicates how costs will be calculated (Standard, Average, Lifo, FiFo).  The default costing method is defined on accounting schema level and can be optionally overwritten in the product category.  The costing method cannot conflict with the Material Movement Policy (defined on Product Category). | [m_costelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costelement.html).CostingMethod<small> character(1) <br/> List</small> | 
| Calculated | The value is calculated by the system | You cannot change values maintained by the system. | [m_costelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_costelement.html).IsCalculated<small> character(1) <br/> Yes-No</small> | 


