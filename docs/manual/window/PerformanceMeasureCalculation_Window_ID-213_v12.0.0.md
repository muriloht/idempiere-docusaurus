# Window: Performance Measure Calculation

**[Created:** 24/04/2001 - **Updated:** 30/09/2022 **]**  
**Description:** Define how you calculate your performance measures  
**Help:** The Performance Measure Calculation defines how performance measures will be calculated.The sql needs to return a single value.  Please check examples.The date restriction is defined in the Goal.Any restrictions for Organizations, Business Partners, Products, etc. are as Performance Goal Restrictions.  
![](/img/docs/manual/PerformanceMeasureCalculation-Window_iDempiere_v12.0.0.png)

### Tab: Performance Measure Calculation

**[Created:** 24/04/2001 - **Updated:** 30/09/2022 **]**   
**Description:** Maintain your Performance Measure Calculation  
**Help:** The Performance Measure Calculation defines how performance measures will be calculated. See examples.The SELECT definition must contain the SELECT and FROM keywords in upper case.  The WHERE clause can only contain values of the main table (e.g. when selecting from Header and lines, only header variables can be used in the where clause) and be fully qualified if there is more then one table.  
**Tab Level:** 0

Table 10: Performance Measure Calculation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Sql SELECT | SQL SELECT clause | The Select Clause indicates the SQL SELECT clause to use for selecting the record for a measure calculation. Do not include the SELECT itself. | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).SelectClause<small> character varying(2000) <br/> Text</small> | 
| Sql WHERE | Fully qualified SQL WHERE clause | The Where Clause indicates the SQL WHERE clause to use for record selection. The WHERE clause is added to the query. Fully qualified means &quot;tablename.columnname&quot;. | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).WhereClause<small> character varying(2000) <br/> Text</small> | 
| Date Column | Fully qualified date column | The Date Column indicates the date to be used when calculating this measurement | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).DateColumn<small> character varying(124) <br/> String</small> | 
| Org Column | Fully qualified Organization column (AD_Org_ID) | The Organization Column indicates the organization to be used in calculating this measurement. | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).OrgColumn<small> character varying(124) <br/> String</small> | 
| B.Partner Column | Fully qualified Business Partner key column (C_BPartner_ID) | The Business Partner Column indicates the Business Partner to use when calculating this measurement | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).BPartnerColumn<small> character varying(124) <br/> String</small> | 
| Product Column | Fully qualified Product column (M_Product_ID) | The Product Column indicates the product to use to use when calculating this measurement. | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).ProductColumn<small> character varying(124) <br/> String</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Key Column | Key Column for Table |  | [pa_measurecalc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_measurecalc.html).KeyColumn<small> character varying(124) <br/> String</small> | 


