# Window: Reporting Hierarchy

**[Created:** 23/10/2005 - **Updated:** 15/01/2024 **]**  
**Description:** Define Reporting Hierarchy  
**Help:** Reporting Hierarchy allows you to select different Hierarchies/Trees for the report.Accounting Segments like Organization, Account, Product may have several hierarchies to accommodate different views on the business  
![](/img/docs/manual/ReportingHierarchy-Window_iDempiere_v12.0.0.png)

### Tab: Reporting Hierarchy

**[Created:** 23/10/2005 - **Updated:** 23/10/2005 **]**   
**Description:** Reporting Hierarchy  
**Help:** Reporting Hierarchy allows you to select different Hierarchies/Trees for the report.Accounting Segments like Organization, Account, Product may have several hierarchies to accomodate different views on the business  
**Tab Level:** 0

Table 10: Reporting Hierarchy - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Organization Tree | Trees are used for (financial) reporting and security access (via role) | Trees are used for (finanial) reporting and security access (via role) | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).AD_Tree_Org_ID<small> numeric(10) <br/> Table</small> | 
| Account Tree | Tree for Natural Account Tree |  | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).AD_Tree_Account_ID<small> numeric(10) <br/> Table</small> | 
| Activity Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).AD_Tree_Activity_ID<small> numeric(10) <br/> Table</small> | 
| BPartner Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).AD_Tree_BPartner_ID<small> numeric(10) <br/> Table</small> | 
| Product Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).AD_Tree_Product_ID<small> numeric(10) <br/> Table</small> | 
| Project Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).AD_Tree_Project_ID<small> numeric(10) <br/> Table</small> | 
| Campaign Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).AD_Tree_Campaign_ID<small> numeric(10) <br/> Table</small> | 
| Sales Region Tree | Trees are used for (financial) reporting | Trees are used for (finanial) reporting | [pa_hierarchy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_hierarchy.html).AD_Tree_SalesRegion_ID<small> numeric(10) <br/> Table</small> | 


