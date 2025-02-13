# Window: CSS Style

**[Created:** 05/05/2016 - **Updated:** 05/05/2016 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/CSSStyle-Window_iDempiere_v12.0.0.png)

### Tab: CSS Style

**[Created:** 05/05/2016 - **Updated:** 05/05/2016 **]**   
**Description:** CSS Inline Style Definitions  
**Help:**   
**Tab Level:** 0

Table 10: CSS Style - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_style](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_style.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_style](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_style.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_style](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_style.html).Name<small> character varying(60) <br/> String</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_style](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_style.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_style](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_style.html).Description<small> character varying(255) <br/> String</small> | 
| Wrap With Span | Wrap content in Span and apply the Style to it. |  | [ad_style](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_style.html).IsWrapWithSpan<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_style](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_style.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Style Line

**[Created:** 05/05/2016 - **Updated:** 05/05/2016 **]**   
**Description:** CSS Style Lines  
**Help:**   
**Tab Level:** 1

Table 20: Style Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_styleline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_styleline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_styleline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_styleline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Style | CSS style for field and label |  | [ad_styleline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_styleline.html).AD_Style_ID<small> numeric(10) <br/> Table Direct</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [ad_styleline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_styleline.html).Line<small> numeric(10) <br/> Integer</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_styleline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_styleline.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Inline Style | CSS Inline Style |  | [ad_styleline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_styleline.html).InlineStyle<small> character varying(2000) <br/> String</small> | 
| Display Logic | If the Field is displayed, the result determines if the field is actually displayed | format := &amp;#123;expression&amp;#125; [&amp;#123;logic&amp;#125; &amp;#123;expression&amp;#125;] expression := @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; or @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; logic := &amp;#123;|&amp;#125;|&amp;#123;&amp;&amp;#125;context := any global or window context value := strings or numberslogic operators:= AND or OR with the previous result from left to right operand := eq&amp;#123;=&amp;#125;, gt&amp;#123;&amp;gt;&amp;#125;, le&amp;#123;&amp;lt;&amp;#125;, not&amp;#123;~^!&amp;#125; Examples:  @AD_Table_ID@=14 | @Language@!GERGER @PriceLimit@&gt;10 | @PriceList@&gt;@PriceActual@ @Name@&gt;JStrings may be in single quotes (optional) | [ad_styleline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_styleline.html).DisplayLogic<small> character varying(2000) <br/> Text</small> | 
| Theme | Theme name |  | [ad_styleline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_styleline.html).Theme<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_styleline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_styleline.html).IsActive<small> character(1) <br/> Yes-No</small> | 


