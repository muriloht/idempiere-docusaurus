# Window: Performance Color Schema

**[Created:** 23/12/2005 - **Updated:** 15/01/2024 **]**  
**Description:** Maintain Performance Color Schema  
**Help:** Visual representation of performance by color.  The Schema has often three levels (e.g. red-yellow-green).  iDempiere supports two levels (e.g. red-green) or four levels (e.g. gray-bronce-silver-gold).  Note that Measures without a goal are represented white.  The percentages could be between 0 and unlimited (i.e. above 100%).  
![](/img/docs/manual/PerformanceColorSchema-Window_iDempiere_v12.0.0.png)

### Tab: Color Schema

**[Created:** 23/12/2005 - **Updated:** 15/01/2024 **]**   
**Description:** Performance Color Schema  
**Help:** Visual representation of performance by color.  The Schema has often three levels (e.g. red-yellow-green).  iDempiere supports two levels (e.g. red-green) or four levels (e.g. gray-bronce-silver-gold).  Note that Measures without a goal are represented white.  The percentages could be between 0 and unlimited (i.e. above 100%).  
**Tab Level:** 0

Table 10: Color Schema - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Mark 1 Percent | Percentage up to this color is used | Example 50 - i.e. below 50% this color is used | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).Mark1Percent<small> numeric(10) <br/> Integer</small> | 
| Color 1 | First color used |  | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).AD_PrintColor1_ID<small> numeric(10) <br/> Table</small> | 
| Mark 2 Percent | Percentage up to this color is used | Example 80 - e.g., if Mark 1 is 50 - this color is used between 50% and 80% | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).Mark2Percent<small> numeric(10) <br/> Integer</small> | 
| Color 2 | Second color used |  | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).AD_PrintColor2_ID<small> numeric(10) <br/> Table</small> | 
| Mark 3 Percent | Percentage up to this color is used | Example 100 - e.g., if Mark 2 is 80 - this color is used between 80% and 100% | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).Mark3Percent<small> numeric(10) <br/> Integer</small> | 
| Color 3 | Third color used |  | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).AD_PrintColor3_ID<small> numeric(10) <br/> Table</small> | 
| Mark 4 Percent | Percentage up to this color is used | Example 9999 - e.g., if Mark 3 is 100 - this color is used above 100% | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).Mark4Percent<small> numeric(10) <br/> Integer</small> | 
| Color 4 | Forth color used |  | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).AD_PrintColor4_ID<small> numeric(10) <br/> Table</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [pa_colorschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_colorschema.html).EntityType<small> character varying(40) <br/> Table</small> | 


