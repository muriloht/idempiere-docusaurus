# Window: Dashboard Content

**[Created:** 09/07/2007 - **Updated:** 12/09/2013 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/DashboardContent-Window_iDempiere_v12.0.0.png)

### Tab: Dashboard Content

**[Created:** 09/07/2007 - **Updated:** 10/05/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Dashboard Content - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).Name<small> character varying(120) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Column No | Dashboard content column number | Dashboard content column number, not used by the swing tenant at the moment. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).ColumnNo<small> numeric(10) <br/> Integer</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).Line<small> numeric <br/> Number</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).Help<small> character varying(2000) <br/> Text</small> | 
| HTML |  |  | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).HTML<small> text <br/> Text</small> | 
| Gadget URI | URI for Dashboard Gadget | URI for Dashboard Gadget. This can be absolute path to a zul file or an unique gadget id which is instantiated through OSGi factory services. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).ZulFilePath<small> character varying(255) <br/> String</small> | 
| Goal | Performance Goal | The Performance Goal indicates what this users performance will be measured against. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).PA_Goal_ID<small> numeric(10) <br/> Table Direct</small> | 
| Goal Display | Type of goal display on dashboard | Display goal on dashboard as html table or graph. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).GoalDisplay<small> character(1) <br/> List</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Embed Report Content | Embed report content into dashboard |  | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).IsEmbedReportContent<small> character(1) <br/> Yes-No</small> | 
| Process Parameters | Comma separated process parameter list | A list of name value pair process parameter separated by comma | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).ProcessParameters<small> character varying(2000) <br/> String</small> | 
| Chart |  |  | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).AD_Chart_ID<small> numeric(10) <br/> Table Direct</small> | 
| Print Format | Data Print Format | The print format determines how data is rendered for print. | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).AD_PrintFormat_ID<small> numeric(10) <br/> Table Direct</small> | 
| Status Line |  |  | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).AD_StatusLine_ID<small> numeric(10) <br/> Table Direct</small> | 
| Maximizable |  |  | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).IsMaximizable<small> character(1) <br/> Yes-No</small> | 
| Show Title |  |  | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).IsShowTitle<small> character(1) <br/> Yes-No</small> | 
| Collapsible | Flag to indicate the state of the dashboard panel | Flag to indicate the state of the dashboard panel (i.e. collapsible or static) | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).IsCollapsible<small> character(1) <br/> Yes-No</small> | 
| Collapsed By Default | Flag to set the initial state of collapsible field group. |  | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).IsCollapsedByDefault<small> character(1) <br/> Yes-No</small> | 
| Show in Dashboard | Show the dashlet in the dashboard |  | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).IsShowInDashboard<small> character(1) <br/> Yes-No</small> | 
| Show on Login |  |  | [pa_dashboardcontent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent.html).IsShowinLogin<small> character(1) <br/> Yes-No</small> | 


### Tab: Dashboard Content Access

**[Created:** 02/09/2013 - **Updated:** 16/09/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Dashboard Content Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_dashboardcontent_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_access.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_dashboardcontent_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_access.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dashboard Content |  |  | [pa_dashboardcontent_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_access.html).PA_DashboardContent_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [pa_dashboardcontent_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_access.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [pa_dashboardcontent_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_access.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_dashboardcontent_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_access.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Translation

**[Created:** 05/12/2010 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_dashboardcontent_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_dashboardcontent_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dashboard Content |  |  | [pa_dashboardcontent_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_trl.html).PA_DashboardContent_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [pa_dashboardcontent_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_dashboardcontent_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [pa_dashboardcontent_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_dashboardcontent_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_trl.html).Name<small> character varying(120) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_dashboardcontent_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [pa_dashboardcontent_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_trl.html).Help<small> character varying(2000) <br/> Text</small> | 
| HTML |  |  | [pa_dashboardcontent_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_dashboardcontent_trl.html).HTML<small> text <br/> Text</small> | 


