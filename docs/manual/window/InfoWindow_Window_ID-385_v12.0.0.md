# Window: Info Window

**[Created:** 17/06/2006 - **Updated:** 07/07/2006 **]**  
**Description:** Define Info and search/select Window  
**Help:** The Info window is used to search and select records as well as display information relevant to the selection.  
![](/img/docs/manual/InfoWindow-Window_iDempiere_v12.0.0.png)

### Tab: Window

**[Created:** 17/06/2006 - **Updated:** 04/01/2013 **]**   
**Description:** Info and search/select Window  
**Help:** The Info window is used to search and select records as well as display information relevant to the selection.  
**Tab Level:** 0

Table 10: Window - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Valid | Element is valid | The element passed the validation check | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).IsValid<small> character(1) <br/> Yes-No</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sql FROM | SQL FROM clause | The Select Clause indicates the SQL FROM clause to use for selecting the record for a measure calculation. It can have JOIN clauses. Do not include the FROM itself. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).FromClause<small> character varying(2000) <br/> Text</small> | 
| Sql WHERE | Fully qualified SQL WHERE clause | The Where Clause indicates the SQL WHERE clause to use for record selection. The WHERE clause is added to the query. Fully qualified means &quot;tablename.columnname&quot;. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).WhereClause<small> character varying(2000) <br/> Text</small> | 
| Other SQL Clause | Other SQL Clause | Any other complete clause like GROUP BY, HAVING, ORDER BY, etc. after WHERE clause. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).OtherClause<small> character varying(2000) <br/> Text</small> | 
| Sql ORDER BY | Fully qualified ORDER BY clause | The ORDER BY Clause indicates the SQL ORDER BY clause to use for record selection | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).OrderByClause<small> character varying(2000) <br/> Text</small> | 
| Validate | Validate Info Window SQL | Validate generated Info Window SQL | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).Processing<small> character(1) <br/> Button</small> | 
| Distinct | Select Distinct |  | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).IsDistinct<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Load Page Num | When load data for info window, also load number of paging | Load number of paging maybe affect to performance when info window is join of many table | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).isLoadPageNum<small> character(1) <br/> Yes-No</small> | 
| Max Query Records | If defined, you cannot query more records as defined - the query criteria needs to be changed to query less records | Enter the number of records a user will be able to query to avoid unnecessary system load.  If 0, no restrictions are imposed. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).MaxQueryRecords<small> numeric(10) <br/> Integer</small> | 
| Paging Size |  |  | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).PagingSize<small> numeric(10) <br/> Integer</small> | 
| Show in Dashboard | Show the dashlet in the dashboard |  | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).IsShowInDashboard<small> character(1) <br/> Yes-No</small> | 
| Context Help |  |  | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).AD_CtxHelp_ID<small> numeric(10) <br/> Search</small> | 
| Image URL | URL of  image | URL of image; The image is not stored in the database, but retrieved at runtime. The image can be a gif, jpeg or png. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).ImageURL<small> character varying(120) <br/> String</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| PO Window | Purchase Order Window | Window for Purchase Order (AP) Zooms | [ad_infowindow](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow.html).PO_Window_ID<small> numeric(10) <br/> Table</small> | 


### Tab: Column

**[Created:** 17/06/2006 - **Updated:** 01/01/2013 **]**   
**Description:** Info Window Column  
**Help:** Column in the Info Window for display and/or selection.  If used for selection, the column cannot be a SQL expression. The SQL clause must be fully qualified based on the FROM clause in the Info Window definition  
**Tab Level:** 1

Table 20: Column - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| System Element | System Element enables the central maintenance of column description and help. | The System Element allows for the central maintenance of help, descriptions and terminology for a database column. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).AD_Element_ID<small> numeric(10) <br/> Search</small> | 
| DB Column Name | Name of the column in the database | The Column Name indicates the name of a column on a table as defined in the database. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).ColumnName<small> character varying(63) <br/> String</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Sql SELECT | SQL SELECT clause | The Select Clause indicates the SQL SELECT clause to use for selecting the record for a measure calculation. Do not include the SELECT itself. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).SelectClause<small> character varying(2000) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).Help<small> character varying(2000) <br/> Text</small> | 
| Placeholder |  |  | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).Placeholder<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Displayed | Determines, if this field is displayed | If the field is displayed, the field Display Logic will determine at runtime, if it is actually displayed | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).IsDisplayed<small> character(1) <br/> Yes-No</small> | 
| Query Criteria | The column is also used as a query criteria | The column is used to enter queries - the SQL cannot be an expression | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).IsQueryCriteria<small> character(1) <br/> Yes-No</small> | 
| Centrally maintained | Information maintained in System Element table | The Centrally Maintained checkbox indicates if the Name, Description and Help maintained in &#x27;System Element&#x27; table  or &#x27;Window&#x27; table. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).IsCentrallyMaintained<small> character(1) <br/> Yes-No</small> | 
| Mandatory | Data entry is required in this column | The field must have a value for the record to be saved to the database. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).IsMandatory<small> character(1) <br/> Yes-No</small> | 
| Query After Change | Issues a query request after the user has made changes to the field |  | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).IsQueryAfterChange<small> character(1) <br/> Yes-No</small> | 
| Read Only | Field is read only | The Read Only indicates that this field may only be Read.  It may not be updated. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).IsReadOnly<small> character(1) <br/> Yes-No</small> | 
| Identifier | This column is part of the record identifier | The Identifier checkbox indicates that this column is part of the identifier or key for this table. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).IsIdentifier<small> character(1) <br/> Yes-No</small> | 
| Key column | This column is the key in this table | The key column must also be display sequence 0 in the field definition and may be hidden. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).IsKey<small> character(1) <br/> Yes-No</small> | 
| Selection Column Sequence | Selection Column Sequence | For ordering sequence of selection column | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).SeqNoSelection<small> numeric(10) <br/> Integer</small> | 
| Display Logic | If the Field is displayed, the result determines if the field is actually displayed | format := &amp;#123;expression&amp;#125; [&amp;#123;logic&amp;#125; &amp;#123;expression&amp;#125;] expression := @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; or @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; logic := &amp;#123;|&amp;#125;|&amp;#123;&amp;&amp;#125;context := any global or window context value := strings or numberslogic operators:= AND or OR with the previous result from left to right operand := eq&amp;#123;=&amp;#125;, gt&amp;#123;&amp;gt;&amp;#125;, le&amp;#123;&amp;lt;&amp;#125;, not&amp;#123;~^!&amp;#125; Examples:  @AD_Table_ID@=14 | @Language@!GERGER @PriceLimit@&gt;10 | @PriceList@&gt;@PriceActual@ @Name@&gt;JStrings may be in single quotes (optional) | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).DisplayLogic<small> character varying(2000) <br/> Text</small> | 
| Default Logic | Default value hierarchy, separated by ; | The defaults are evaluated in the order of definition, the first not null value becomes the default value of the column. The values are separated by comma or semicolon. a) Literals:. &#x27;Text&#x27; or 123 b) Variables - in format @Variable@ - Login e.g. #Date, #AD_Org_ID, #AD_Tenant_ID - Accounting Schema: e.g. ,  - Global defaults: e.g. DateFormat - Window values (all Picks, CheckBoxes, RadioButtons, and DateDoc/DateAcct) c) SQL code with the tag: @SQL=SELECT something AS DefaultValue FROM ... The SQL statement can contain variables.  There can be no other value other than the SQL statement. The default is only evaluated, if no user preference is defined.  Default definitions are ignored for record columns as Key, Parent, Tenant as well as Buttons. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).DefaultValue<small> character varying(2000) <br/> String</small> | 
| Query Operator | Operator for database query |  | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).QueryOperator<small> character varying(10) <br/> List</small> | 
| Query Function | Database function for query | Database function for user query. If the database function takes more than just the column name parameter, use ? to indicate where the column name should goes to. E.g: Upper, Trunc and To_Char(?,&#x27;MM&#x27;) | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).QueryFunction<small> character varying(255) <br/> String</small> | 
| Range | The parameter is a range of values | The Range checkbox indicates that this parameter is a range of values. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).IsRange<small> character(1) <br/> Yes-No</small> | 
| Default Logic 2 | Default value hierarchy, separated by ; | The defaults are evaluated in the order of definition, the first not null value becomes the default value of the column. The values are separated by comma or semicolon. a) Literals:. &#x27;Text&#x27; or 123 b) Variables - in format @Variable@ - Login e.g. #Date, #AD_Org_ID, #AD_Tenant_ID - Accounting Schema: e.g. ,  - Global defaults: e.g. DateFormat - Window values (all Picks, CheckBoxes, RadioButtons, and DateDoc/DateAcct) c) SQL code with the tag: @SQL=SELECT something AS DefaultValue FROM ... The SQL statement can contain variables.  There can be no other value other than the SQL statement. The default is only evaluated, if no user preference is defined.  Default definitions are ignored for record columns as Key, Parent, Tenant as well as Buttons. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).DefaultValue2<small> character varying(2000) <br/> String</small> | 
| Placeholder2 |  |  | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).Placeholder2<small> character varying(255) <br/> String</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).AD_Reference_ID<small> numeric(10) <br/> Table</small> | 
| Reference Key | Required to specify, if data type is Table or List | The Reference Value indicates where the reference values are stored.  It must be specified if the data type is Table or List. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).AD_Reference_Value_ID<small> numeric(10) <br/> Table</small> | 
| Dynamic Validation | Dynamic Validation Rule | These rules define how an entry is determined to valid. You can use variables for dynamic (context sensitive) validation. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).AD_Val_Rule_ID<small> numeric(10) <br/> Table Direct</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Input field validation | Input field validation query | Input field validation query | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).InputFieldValidation<small> character varying(2000) <br/> Text</small> | 
| Field Style | Field CSS Style |  | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).AD_FieldStyle_ID<small> numeric(10) <br/> Table</small> | 
| Auto complete | Automatic completion for text fields | The autocompletion uses all existing values (from the same tenant and organization) of the field. | [ad_infocolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn.html).IsAutocomplete<small> character(1) <br/> Yes-No</small> | 


### Tab: Column Translation

**[Created:** 17/06/2006 - **Updated:** 27/10/2024 **]**   
**Description:** Infow Window Column Translation  
**Help:**   
**Tab Level:** 2

Table 30: Column Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Column | Info Window Column | Column in the Info Window for display and/or selection.  If used for selection, the column cannot be a SQL expression. The SQL clause must be fully qualified based on the FROM clause in the Info Window definition | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).AD_InfoColumn_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).Help<small> character varying(2000) <br/> Text</small> | 
| Placeholder |  |  | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).Placeholder<small> character varying(255) <br/> String</small> | 
| Placeholder2 |  |  | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).Placeholder2<small> character varying(255) <br/> String</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


### Tab: Window Translation

**[Created:** 17/06/2006 - **Updated:** 27/10/2024 **]**   
**Description:** Info Window Translation  
**Help:**   
**Tab Level:** 1

Table 40: Window Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_infowindow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_infowindow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_infowindow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_trl.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_infowindow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_infowindow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_infowindow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_infowindow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_trl.html).Help<small> character varying(2000) <br/> Text</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_infowindow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


### Tab: Related Info Window

**[Created:** 06/07/2013 - **Updated:** 26/01/2014 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 50: Related Info Window - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).Help<small> character varying(2000) <br/> Text</small> | 
| Related Info Window |  |  | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).RelatedInfo_ID<small> numeric(10) <br/> Table</small> | 
| Related Info Column |  |  | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).RelatedColumn_ID<small> numeric(10) <br/> Table</small> | 
| Parent Related Column | column in parent info window, link with column in this relate info | default column RelatedColumn in Relate Info window will link with key column of main info windowcolumn define in ParentRelatedColumn will replace key column | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).ParentRelatedColumn_ID<small> numeric(10) <br/> Table</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Display Logic | If the Field is displayed, the result determines if the field is actually displayed | format := &amp;#123;expression&amp;#125; [&amp;#123;logic&amp;#125; &amp;#123;expression&amp;#125;] expression := @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; or @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; logic := &amp;#123;|&amp;#125;|&amp;#123;&amp;&amp;#125;context := any global or window context value := strings or numberslogic operators:= AND or OR with the previous result from left to right operand := eq&amp;#123;=&amp;#125;, gt&amp;#123;&amp;gt;&amp;#125;, le&amp;#123;&amp;lt;&amp;#125;, not&amp;#123;~^!&amp;#125; Examples:  @AD_Table_ID@=14 | @Language@!GERGER @PriceLimit@&gt;10 | @PriceList@&gt;@PriceActual@ @Name@&gt;JStrings may be in single quotes (optional) | [ad_inforelated](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_inforelated.html).DisplayLogic<small> character varying(2000) <br/> Text</small> | 


### Tab: Process

**[Created:** 26/05/2014 - **Updated:** 26/05/2014 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 60: Process - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_infoprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infoprocess.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_infoprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infoprocess.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_infoprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infoprocess.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Image URL | URL of  image | URL of image; The image is not stored in the database, but retrieved at runtime. The image can be a gif, jpeg or png. | [ad_infoprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infoprocess.html).ImageURL<small> character varying(120) <br/> String</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_infoprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infoprocess.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_infoprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infoprocess.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Layout Type | Layout type of info process | Process info can display as button, list, menu | [ad_infoprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infoprocess.html).LayoutType<small> character varying(10) <br/> Radio Group List</small> | 
| ViewID Column | Name of unique column in a view. value of this column will save to t_selection table | Column to resolve issue in https://idempiere.atlassian.net/browse/IDEMPIERE-1970 | [ad_infoprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infoprocess.html).AD_InfoColumn_ID<small> numeric(10) <br/> Table Direct</small> | 
| Display Logic | If the Field is displayed, the result determines if the field is actually displayed | format := &amp;#123;expression&amp;#125; [&amp;#123;logic&amp;#125; &amp;#123;expression&amp;#125;] expression := @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; or @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; logic := &amp;#123;|&amp;#125;|&amp;#123;&amp;&amp;#125;context := any global or window context value := strings or numberslogic operators:= AND or OR with the previous result from left to right operand := eq&amp;#123;=&amp;#125;, gt&amp;#123;&amp;gt;&amp;#125;, le&amp;#123;&amp;lt;&amp;#125;, not&amp;#123;~^!&amp;#125; Examples:  @AD_Table_ID@=14 | @Language@!GERGER @PriceLimit@&gt;10 | @PriceList@&gt;@PriceActual@ @Name@&gt;JStrings may be in single quotes (optional) | [ad_infoprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infoprocess.html).DisplayLogic<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_infoprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infoprocess.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_infoprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infoprocess.html).EntityType<small> character varying(40) <br/> Table</small> | 


### Tab: Role Access

**[Created:** 03/06/2014 - **Updated:** 03/06/2014 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 70: Role Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_infowindow_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_access.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_infowindow_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_access.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_infowindow_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_access.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_infowindow_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_access.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_infowindow_access](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_access.html).IsActive<small> character(1) <br/> Yes-No</small> | 


