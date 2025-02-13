# Window: Dashboard Preference

**[Created:** 22/08/2012 - **Updated:** 22/08/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/DashboardPreference-Window_iDempiere_v12.0.0.png)

### Tab: Preference

**[Created:** 22/08/2012 - **Updated:** 29/07/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Preference - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_dashboardpreference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardpreference.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_dashboardpreference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardpreference.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [pa_dashboardpreference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardpreference.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [pa_dashboardpreference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardpreference.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dashboard Content |  |  | [pa_dashboardpreference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardpreference.html).PA_DashboardContent_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_dashboardpreference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardpreference.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Column No | Dashboard content column number | Dashboard content column number, not used by the swing tenant at the moment. | [pa_dashboardpreference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardpreference.html).ColumnNo<small> numeric(10) <br/> Integer</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [pa_dashboardpreference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardpreference.html).Line<small> numeric <br/> Number</small> | 
| Flex Grow | This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up. |  | [pa_dashboardpreference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardpreference.html).FlexGrow<small> numeric(10) <br/> Integer</small> | 
| Collapsed By Default | Flag to set the initial state of collapsible field group. |  | [pa_dashboardpreference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardpreference.html).IsCollapsedByDefault<small> character(1) <br/> Yes-No</small> | 
| Show in Dashboard | Show the dashlet in the dashboard |  | [pa_dashboardpreference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardpreference.html).IsShowInDashboard<small> character(1) <br/> Yes-No</small> | 


