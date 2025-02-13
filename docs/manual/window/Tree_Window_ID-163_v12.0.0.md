# Window: Tree

**[Created:** 09/12/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Tree definition  
**Help:** The Tree Window defines the descriptors and images that will be used when a Tree is displayed.  
![](/img/docs/manual/Tree-Window_iDempiere_v12.0.0.png)

### Tab: Tree

**[Created:** 09/12/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Tree  
**Help:** The Tree Tab defines a Tree which will be displayed.  
**Tab Level:** 0

Table 10: Tree - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Type | Area | Element this tree is built on (i.e Product, Business Partner) | The Tree Type / Area field determines the type of tree this is.  For example, you may define one tree for your Products and another tree for your Business Partners. | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).TreeType<small> character(2) <br/> List</small> | 
| Driven by Search Key |  |  | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).IsTreeDrivenByValue<small> character(1) <br/> Yes-No</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Display Search Key | Displays Search Key in the tree | The Display Search Key checkbox indicates if the Search Key will display in the tree before the Name | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).IsValueDisplayed<small> character(1) <br/> Yes-No</small> | 
| Parent Column | The link column on the parent tab. |  | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).Parent_Column_ID<small> numeric(10) <br/> Table</small> | 
| All Nodes | All Nodes are included (Complete Tree) | If selected, all Nodes must be in the tree. | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).IsAllNodes<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Loads directly all nodes | If checked, all nodes are loaded before tree is displayed |  | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).IsLoadAllNodesImmediately<small> character(1) <br/> Yes-No</small> | 
| Verify Tree | Verify completeness and correctness of Tree |  | [ad_tree](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tree.html).Processing<small> character(1) <br/> Button</small> | 


