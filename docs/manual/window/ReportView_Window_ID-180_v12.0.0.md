# Window: Report View

**[Created:** 15/05/2000 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Report Views  
**Help:** The Report View Window defines the views used when generating reports.  This window is for System Admin use only.  
![](/img/docs/manual/ReportView-Window_iDempiere_v12.0.0.png)

### Tab: Report View

**[Created:** 15/05/2000 - **Updated:** 08/04/2021 **]**   
**Description:** Define Report View  
**Help:** The Define Report View defines the views used in report generation  
**Tab Level:** 0

Table 10: Report View - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_reportview](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_reportview](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_reportview](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_reportview](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_reportview](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_reportview](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_reportview](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sql WHERE | Fully qualified SQL WHERE clause | The Where Clause indicates the SQL WHERE clause to use for record selection. The WHERE clause is added to the query. Fully qualified means &quot;tablename.columnname&quot;. | [ad_reportview](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview.html).WhereClause<small> character varying(2000) <br/> String</small> | 
| Sql ORDER BY | Fully qualified ORDER BY clause | The ORDER BY Clause indicates the SQL ORDER BY clause to use for record selection | [ad_reportview](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview.html).OrderByClause<small> character varying(2000) <br/> String</small> | 


### Tab: Report View Column

**[Created:** 25/02/2001 - **Updated:** 02/01/2000 **]**   
**Description:** Report View Column  
**Help:** The Report View Column Tab defines any columns which will be overridden in the generation of the select SQL  
**Tab Level:** 1

Table 20: Report View Column - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_reportview_col](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_col.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_reportview_col](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_col.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Report View | View used to generate this report | The Report View indicates the view used to generate this report. | [ad_reportview_col](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_col.html).AD_ReportView_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_reportview_col](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_col.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_reportview_col](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_col.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Function Column | Overwrite Column with Function | The Function Column indicates that the column will be overridden with a function | [ad_reportview_col](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_col.html).FunctionColumn<small> character varying(124) <br/> String</small> | 
| SQL Group Function | This function will generate a Group By Clause | The SQL Group Function checkbox indicates that this function will generate a Group by Clause in the resulting SQL. | [ad_reportview_col](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_col.html).IsGroupFunction<small> character(1) <br/> Yes-No</small> | 


### Tab: Available Columns

**[Created:** 17/01/2014 - **Updated:** 17/01/2014 **]**   
**Description:** You can define on this tab which columns will be available as the print format items  
**Help:**   
**Tab Level:** 1

Table 30: Available Columns - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_reportview_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_column.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_reportview_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_column.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Report View | View used to generate this report | The Report View indicates the view used to generate this report. | [ad_reportview_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_column.html).AD_ReportView_ID<small> numeric(10) <br/> Search</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_reportview_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_column.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_reportview_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_reportview_column.html).IsActive<small> character(1) <br/> Yes-No</small> | 


