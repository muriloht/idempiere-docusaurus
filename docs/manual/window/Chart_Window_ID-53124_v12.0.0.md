# Window: Chart

**[Created:** 23/08/2010 - **Updated:** 23/08/2010 **]**  
**Description:** Chart Definition  
**Help:**   
![](/img/docs/manual/Chart-Window_iDempiere_v12.0.0.png)

### Tab: Chart

**[Created:** 23/08/2010 - **Updated:** 23/08/2010 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Chart - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).Description<small> character varying(255) <br/> String</small> | 
| Chart Type | Type of chart to render |  | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).ChartType<small> character varying(2) <br/> List</small> | 
| Window Height |  |  | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).WinHeight<small> numeric(10) <br/> Integer</small> | 
| Display Legend | Display chart legend | Toggles the display of the chart legend | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).IsDisplayLegend<small> character(1) <br/> Yes-No</small> | 
| Orientation | The orientation of the chart. |  | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).ChartOrientation<small> character(1) <br/> List</small> | 
| Domain Label | Label for the domain axis. |  | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).DomainLabel<small> character varying(60) <br/> String</small> | 
| Range Label | Label for the range axis. |  | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).RangeLabel<small> character varying(60) <br/> String</small> | 
| Time Series | The domain data for the chart is organised by time. | A time series chart will automatically group and restrict the data by the time unit and scope specified. | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).IsTimeSeries<small> character(1) <br/> Yes-No</small> | 
| Time Unit | The unit of time for grouping chart data. |  | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).TimeUnit<small> character(1) <br/> List</small> | 
| Time Scope | The number of time units to include the chart result. |  | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).TimeScope<small> numeric(10) <br/> Integer</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_chart](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Datasource

**[Created:** 23/08/2010 - **Updated:** 12/09/2022 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Datasource - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Chart |  |  | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).AD_Chart_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).Description<small> character varying(255) <br/> String</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Sql FROM | SQL FROM clause | The Select Clause indicates the SQL FROM clause to use for selecting the record for a measure calculation. It can have JOIN clauses. Do not include the FROM itself. | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).FromClause<small> character varying(2000) <br/> Text</small> | 
| Sql WHERE | Fully qualified SQL WHERE clause | The Where Clause indicates the SQL WHERE clause to use for record selection. The WHERE clause is added to the query. Fully qualified means &quot;tablename.columnname&quot;. | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).WhereClause<small> character varying(2000) <br/> Text</small> | 
| Series Column |  |  | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).SeriesColumn<small> character varying(124) <br/> String</small> | 
| Category Column | Fully qualified data category column | The Category Column determines how the chart data is grouped | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).CategoryColumn<small> character varying(124) <br/> String</small> | 
| Date Column | Fully qualified date column | The Date Column indicates the date to be used when calculating this measurement | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).DateColumn<small> character varying(124) <br/> String</small> | 
| Time Offset | Number of time units to offset displayed chart data from the current date. | For example an offset of -12 with a chart time unit of Month will result in previous year data being displayed. | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).TimeOffset<small> numeric(10) <br/> Integer</small> | 
| Value Column | Fully qualified data value column | The Value Column contains the value data for the chart | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).ValueColumn<small> character varying(124) <br/> String</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Key Column | Key Column for Table |  | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).KeyColumn<small> character varying(124) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_chartdatasource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Datasource Translation

**[Created:** 12/09/2022 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 30: Datasource Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_chartdatasource_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_chartdatasource_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Chart Datasource |  |  | [ad_chartdatasource_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource_trl.html).AD_ChartDatasource_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_chartdatasource_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_chartdatasource_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_chartdatasource_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_chartdatasource_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chartdatasource_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Translation

**[Created:** 21/03/2014 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 40: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_chart_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_chart_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Chart |  |  | [ad_chart_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart_trl.html).AD_Chart_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_chart_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_chart_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_chart_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_chart_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_chart_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Domain Label | Label for the domain axis. |  | [ad_chart_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart_trl.html).DomainLabel<small> character varying(60) <br/> String</small> | 
| Range Label | Label for the range axis. |  | [ad_chart_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_chart_trl.html).RangeLabel<small> character varying(60) <br/> String</small> | 


