# Window: Role Toolbar Button Access

**[Created:** 28/03/2012 - **Updated:** 23/10/2012 **]**  
**Description:** Maintain toolbar button access rule  
**Help:**   
![](/img/docs/manual/RoleToolbarButtonAccess-Window_iDempiere_v12.0.0.png)

### Tab: Toolbar Button Access

**[Created:** 28/03/2012 - **Updated:** 23/10/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Toolbar Button Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_toolbarbuttonrestrict](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbuttonrestrict.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_toolbarbuttonrestrict](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbuttonrestrict.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_toolbarbuttonrestrict](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbuttonrestrict.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_toolbarbuttonrestrict](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbuttonrestrict.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Action | Indicates the Action to be performed | The Action field is a drop down list box which indicates the Action to be performed for this Item. | [ad_toolbarbuttonrestrict](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbuttonrestrict.html).Action<small> character(1) <br/> List</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_toolbarbuttonrestrict](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbuttonrestrict.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_toolbarbuttonrestrict](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbuttonrestrict.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Tab | Tab within a Window | The Tab indicates a tab that displays within a window. | [ad_toolbarbuttonrestrict](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbuttonrestrict.html).AD_Tab_ID<small> numeric(10) <br/> Table Direct</small> | 
| ToolBar Button |  |  | [ad_toolbarbuttonrestrict](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbuttonrestrict.html).AD_ToolBarButton_ID<small> numeric(10) <br/> Table Direct</small> | 
| Exclude | Exclude access to the data - if not selected Include access to the data | If selected (excluded), the role cannot access the data specified.  If not selected (included), the role can ONLY access the data specified. Exclude items represent a negative list (i.e. you don&#x27;t have access to the listed items). Include items represent a positive list (i.e. you only have access to the listed items).You would usually  not mix Exclude and Include. If you have one include rule in your list, you would only have access to that item anyway. | [ad_toolbarbuttonrestrict](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbuttonrestrict.html).IsExclude<small> character(1) <br/> Yes-No</small> | 


