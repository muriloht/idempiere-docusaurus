# Window: Table and Column

**[Created:** 21/05/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Tables and Columns  
**Help:** The Table and Column Window defines all tables with their columns  
![](/img/docs/manual/TableandColumn-Window_iDempiere_v12.0.0.png)

### Tab: Table

**[Created:** 21/05/1999 - **Updated:** 15/01/2024 **]**   
**Description:** Table definitions  
**Help:** Table (header) definition - Note that the name of most tables is automatically synchronized.  
**Tab Level:** 0

Table 10: Table - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| DB Table Name | Name of the table in the database | The DB Table Name indicates the name of the table in database. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).TableName<small> character varying(60) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| View | This is a view | This is a view rather than a table.  A view is always treated as read only in the system. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).IsView<small> character(1) <br/> Yes-No</small> | 
| Data Access Level | Access Level required | Indicates the access level required for this record or process. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).AccessLevel<small> character(1) <br/> List</small> | 
| Maintain Change Log | Maintain a log of changes | If selected, a log of all changes is maintained. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).IsChangeLog<small> character(1) <br/> Yes-No</small> | 
| Replication Type | Type of Data Replication | The Type of data Replication determines the direction of the data replication.  Reference means that the data in this system is read only -&gt; Local means that the data in this system is not replicated to other systems - Merge means that the data in this system is synchronized with the other system | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).ReplicationType<small> character(1) <br/> List</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| PO Window | Purchase Order Window | Window for Purchase Order (AP) Zooms | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).PO_Window_ID<small> numeric(10) <br/> Table</small> | 
| Records deletable | Indicates if records can be deleted from the database | The Records Deletable checkbox indicates if a record can be deleted from the database.  If records cannot be deleted, you can only deselect the Active flag | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).IsDeleteable<small> character(1) <br/> Yes-No</small> | 
| High Volume | Use Search instead of Pick list | The High Volume Checkbox indicates if a search screen will display as opposed to a pick list for selecting records from this table. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).IsHighVolume<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Create Columns from DB | Create Dictionary Columns of Table not existing as a Column but in the Database | If you have added columns in the database to this table, this procedure creates the Column records in the Dictionary.  Please be aware, that they may deleted, if the entity type is not set to User. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).ImportTable<small> character(1) <br/> Button</small> | 
| Copy Columns from Table | Create Dictionary Columns for a Table taking another as base |  | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).CopyColumnsFromTable<small> character varying(1) <br/> Button</small> | 
| Centrally maintained | Information maintained in System Element table | The Centrally Maintained checkbox indicates if the Name, Description and Help maintained in &#x27;System Element&#x27; table  or &#x27;Window&#x27; table. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).IsCentrallyMaintained<small> character(1) <br/> Yes-No</small> | 
| View Validate |  |  | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).Processing<small> character(1) <br/> Button</small> | 
| Drop view |  |  | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).DatabaseViewDrop<small> character(1) <br/> Button</small> | 
| Copy Components From View | Create dictionary view components for a table taking another as base |  | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).CopyComponentsFromView<small> character(1) <br/> Button</small> | 
| Create Window, Tab and Field from Table | Create Window, Tab and Field record of the Table | This process will take the table definition and create the Window/Tab and field record with these options:New Window: if selected the process will create a new Window record. Otherwise, the process will create a new tab and add it to the selected window.Create Menu: if selected the process creates the menu record for the new window. | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).CreateWindowFromTable<small> character(1) <br/> Button</small> | 
| Show In Drill Options | This parameter enables the table to be displayed in Drill Assistant - Table tab |  | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).IsShowInDrillOptions<small> character(1) <br/> Yes-No</small> | 
| Partition | This is a partitioned table |  | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).IsPartition<small> character(1) <br/> Yes-No</small> | 
| Create/Update Table Partition | Process which create or update table partitions based on the table and column records | The Create/update partition process will create or update table partitions based on the information in the table and column records | [ad_table](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table.html).CreatePartition<small> character(1) <br/> Button</small> | 


### Tab: Column

**[Created:** 21/05/1999 - **Updated:** 15/01/2024 **]**   
**Description:** Table Column definitions  
**Help:** Defines the columns of a table. Note that the name of the column is automatically synchronized.  
**Tab Level:** 1

Table 20: Column - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| System Element | System Element enables the central maintenance of column description and help. | The System Element allows for the central maintenance of help, descriptions and terminology for a database column. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Element_ID<small> numeric(10) <br/> Search</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).EntityType<small> character varying(40) <br/> Table</small> | 
| DB Column Name | Name of the column in the database | The Column Name indicates the name of a column on a table as defined in the database. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).ColumnName<small> character varying(63) <br/> String</small> | 
| Column SQL | Virtual Column (r/o) | You can define virtual columns (not stored in the database). If defined, the Column name is the synonym of the SQL expression defined here. The SQL expression must be valid.Example: &quot;Updated-Created&quot; would list the age of the entry in days.It is not recommended to add complex queries in virtual columns as the impact on the database performance can be too expensive.However, you can use the prefix @SQLFIND= for virtual columns that can be used for queries and reports, they have less impact on the database, but as a field they don&#x27;t show values.Additionally, the prefix @SQL= allows to define a virtual UI column, this is calculated on the fly and can use context variables in the query, virtual UI columns are shown in grid just on the current row, they are not searchable, and not shown in reports. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).ColumnSQL<small> character varying(4000) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).Help<small> character varying(2000) <br/> Text</small> | 
| Placeholder |  |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).Placeholder<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Version | Version of the table definition | The Version indicates the version of this table definition. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).Version<small> numeric <br/> Amount</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Reference_ID<small> numeric(10) <br/> Table</small> | 
| Dynamic Validation | Dynamic Validation Rule | These rules define how an entry is determined to valid. You can use variables for dynamic (context sensitive) validation. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Val_Rule_ID<small> numeric(10) <br/> Table Direct</small> | 
| Length | Length of the column in the database | The Length indicates the length of a column as defined in the database. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).FieldLength<small> numeric(10) <br/> Integer</small> | 
| Dynamic Validation (Lookup) | Override Dynamic Validation Rule for Lookup Window | For some situations the dynamic validation rule for a Lookup window should be different from user data entry window. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Val_Rule_Lookup_ID<small> numeric(10) <br/> Table</small> | 
| HTML | Text has HTML tags |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsHtml<small> character(1) <br/> Yes-No</small> | 
| Auto complete | Automatic completion for text fields | The autocompletion uses all existing values (from the same tenant and organization) of the field. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsAutocomplete<small> character(1) <br/> Yes-No</small> | 
| Format Pattern | The pattern used to format a number or date. | A string complying with either Java SimpleDateFormat or DecimalFormat pattern syntax used to override the default presentation format of a date or number type field. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).FormatPattern<small> character varying(22) <br/> String</small> | 
| Value Format | Format of the value; Can contain fixed format elements, Variables: &quot;_lLoOaAcCa09&quot;, or ~regex | Validation elements:~regex - Validates a regular expression (Space) any character_Space (fixed character)lany Letter a..Z NO spaceLany Letter a..Z NO space converted to upper caseoany Letter a..Z or spaceOany Letter a..Z or space converted to upper caseaany Letters &amp; Digits NO spaceAany Letters &amp; Digits NO space converted to upper casecany Letters &amp; Digits or spaceCany Letters &amp; Digits or space converted to upper case0Digits 0..9 NO space9Digits 0..9 or spaceExample of format &quot;(000)_000-0000&quot; | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).VFormat<small> character varying(255) <br/> String</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Chart |  |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Chart_ID<small> numeric(10) <br/> Table Direct</small> | 
| Dashboard Content |  |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).PA_DashboardContent_ID<small> numeric(10) <br/> Table Direct</small> | 
| Reference Key | Required to specify, if data type is Table or List | The Reference Value indicates where the reference values are stored.  It must be specified if the data type is Table or List. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AD_Reference_Value_ID<small> numeric(10) <br/> Table</small> | 
| Min. Value | Minimum Value for a field | The Minimum Value indicates the lowest  allowable value for a field. use format yyyy-mm-dd for Date | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).ValueMin<small> character varying(20) <br/> String</small> | 
| Max. Value | Maximum Value for a field | The Maximum Value indicates the highest allowable value for a field. use format yyyy-mm-dd for Date | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).ValueMax<small> character varying(20) <br/> String</small> | 
| Key column | This column is the key in this table | The key column must also be display sequence 0 in the field definition and may be hidden. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsKey<small> character(1) <br/> Yes-No</small> | 
| Parent link column | This column is a link to the parent table (e.g. header from lines) - incl. Association key columns | The Parent checkbox indicates if this column is a link to the parent table. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsParent<small> character(1) <br/> Yes-No</small> | 
| Constraint Name |  |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).FKConstraintName<small> character varying(63) <br/> String</small> | 
| Constraint Type |  |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).FKConstraintType<small> character(1) <br/> List</small> | 
| Constraint Message |  |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).FKConstraintMsg_ID<small> numeric(10) <br/> Search</small> | 
| Default Logic | Default value hierarchy, separated by ; | The defaults are evaluated in the order of definition, the first not null value becomes the default value of the column. The values are separated by comma or semicolon. a) Literals:. &#x27;Text&#x27; or 123 b) Variables - in format @Variable@ - Login e.g. #Date, #AD_Org_ID, #AD_Tenant_ID - Accounting Schema: e.g. ,  - Global defaults: e.g. DateFormat - Window values (all Picks, CheckBoxes, RadioButtons, and DateDoc/DateAcct) c) SQL code with the tag: @SQL=SELECT something AS DefaultValue FROM ... The SQL statement can contain variables.  There can be no other value other than the SQL statement. The default is only evaluated, if no user preference is defined.  Default definitions are ignored for record columns as Key, Parent, Tenant as well as Buttons. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).DefaultValue<small> character varying(2000) <br/> Text</small> | 
| Mandatory | Data entry is required in this column | The field must have a value for the record to be saved to the database. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsMandatory<small> character(1) <br/> Yes-No</small> | 
| Updatable | Determines, if the field can be updated | The Updatable checkbox indicates if a field can be updated by the user. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsUpdateable<small> character(1) <br/> Yes-No</small> | 
| Always Updatable | The column is always updateable, even if the record is not active or processed | If selected and if the window / tab is not read only, you can always update the column.  This might be useful for comments, etc. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsAlwaysUpdateable<small> character(1) <br/> Yes-No</small> | 
| Synchronize Column | Change database table definition from application dictionary | When selected, the database column definition is updated based on your entries in the Column definition of the Application Dictionary. Note that not all changes are supported by the database and may result in an error. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsSyncDatabase<small> character(1) <br/> Button</small> | 
| Always Updatable Logic | Logic to determine if field is Updatable irrespective if record&#x27;s active status or processed status. This logic Applicable only if Always Updatable is N. | format := &amp;#123;expression&amp;#125; [&amp;#123;logic&amp;#125; &amp;#123;expression&amp;#125;] expression := @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; or @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; logic := |&amp;()context := any global or window context value := strings or numberslogic operators:= AND or OR with the previous result from left to right operand := eq&amp;#123;=&amp;#125;, gt&amp;#123;&amp;gt;&amp;#125;, le&amp;#123;&amp;lt;&amp;#125;, not&amp;#123;~^!&amp;#125; Examples:  @AD_Table_ID@=14 | @Language@!GERGER @PriceLimit@&gt;10 | @PriceList@&gt;@PriceActual@ @Name@&gt;JStrings may be in single quotes (optional) | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).AlwaysUpdatableLogic<small> character varying(2000) <br/> Text</small> | 
| Column Encryption | Test and enable Column Encryption | To enable storage encryption or remove encryption is dangerous as you may loose data. You need to verify that the column is big enough to hold the encrypted value.  You can provide your own encryption method, but cannot change it once enabled.  The default implementation supports US ASCII String conversion (not Unicode, Numbers, Dates)Note that support is restricted to setup and test, but not data recovery. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsEncrypted<small> character(1) <br/> Button</small> | 
| Read Only Logic | Logic to determine if field is read only (applies only when field is read-write) | format := &amp;#123;expression&amp;#125; [&amp;#123;logic&amp;#125; &amp;#123;expression&amp;#125;] expression := @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; or @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; logic := &amp;#123;|&amp;#125;|&amp;#123;&amp;&amp;#125;context := any global or window context value := strings or numberslogic operators:= AND or OR with the previous result from left to right operand := eq&amp;#123;=&amp;#125;, gt&amp;#123;&amp;gt;&amp;#125;, le&amp;#123;&amp;lt;&amp;#125;, not&amp;#123;~^!&amp;#125; Examples:  @AD_Table_ID@=14 | @Language@!GERGER @PriceLimit@&gt;10 | @PriceList@&gt;@PriceActual@ @Name@&gt;JStrings may be in single quotes (optional) | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).ReadOnlyLogic<small> character varying(2000) <br/> Text</small> | 
| Mandatory Logic |  |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).MandatoryLogic<small> character varying(2000) <br/> Text</small> | 
| Identifier | This column is part of the record identifier | The Identifier checkbox indicates that this column is part of the identifier or key for this table. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsIdentifier<small> character(1) <br/> Yes-No</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Selection Column | Is this column used for finding rows in windows | If selected, the column is listed in the first find window tab and in the selection part of the window | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsSelectionColumn<small> character(1) <br/> Yes-No</small> | 
| Selection Column Sequence | Selection Column Sequence | For ordering sequence of selection column | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).SeqNoSelection<small> numeric(10) <br/> Integer</small> | 
| Allow Logging | Determine if a column must be recorded into the change log |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsAllowLogging<small> character(1) <br/> Yes-No</small> | 
| Allow Copy | Determine if a column must be copied when pushing the button to copy record |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsAllowCopy<small> character(1) <br/> Yes-No</small> | 
| Secure content | Defines whether content must be treated as secure |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsSecure<small> character(1) <br/> Yes-No</small> | 
| Toolbar Button | Show the button on the toolbar, the window, or both | The IsToolbarButton field indicates if this button is part of the toolbar&#x27;s process button popup list, or render as field in window, or both. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsToolbarButton<small> character(1) <br/> List</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Callout | Fully qualified class names and method - separated by semicolons | A Callout allow you to create Java extensions to perform certain tasks always after a value changed. Callouts should not be used for validation but consequences of a user selecting a certain value.The callout is a Java class implementing org.compiere.model.Callout and a method name to call.  Example: &quot;org.compiere.model.CalloutRequest.copyText&quot; instantiates the class &quot;CalloutRequest&quot; and calls the method &quot;copyText&quot;. You can have multiple callouts by separating them via a semicolon | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).Callout<small> character varying(255) <br/> String</small> | 
| Partition Key | This is a partition key |  | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).IsPartitionKey<small> character(1) <br/> Yes-No</small> | 
| Partition Key Sequence | Indicates the order of partition keys | The Partition Key Sequence indicates the order of the partition keys where the lowest number comes first | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).SeqNoPartition<small> numeric(10) <br/> Integer</small> | 
| Partitioning Method | Indicates how the Table is partitioned | The Partitioning Method indicates how the Table is partitioned (List or Range). List partitioning - The data distribution is defined by a discrete list of values. Range Partitioning - The data is distributed based on a range of values. | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).PartitioningMethod<small> character varying(2) <br/> List</small> | 
| Range Partition Interval | Indicates the interval used in a range partitioning | The Range Partition Interval indicates the interval used in a range partitioning (date or number). Examples of date intervals: 1 year; 6 months; Examples of number intervals: 5000; 100000; | [ad_column](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column.html).RangePartitionInterval<small> character varying(30) <br/> String</small> | 


### Tab: Column Translation

**[Created:** 06/09/2004 - **Updated:** 27/10/2024 **]**   
**Description:** Column Translation  
**Help:** Do not translate - overwritten / translated automatically  
**Tab Level:** 2

Table 30: Column Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Placeholder |  |  | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).Placeholder<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


### Tab: Used in Field

**[Created:** 12/12/2009 - **Updated:** 16/11/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 40: Used in Field - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tab | Tab within a Window | The Tab indicates a tab that displays within a window. | [ad_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field.html).AD_Tab_ID<small> numeric(10) <br/> Table Direct</small> | 
| Field | Field on a database table | The Field identifies a field on a database table. | [ad_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field.html).AD_Field_ID<small> numeric(10) <br/> ID</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_field](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field.html).Name<small> character varying(60) <br/> String</small> | 


### Tab: Zoom Condition

**[Created:** 28/02/2013 - **Updated:** 28/02/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 50: Zoom Condition - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_zoomcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_zoomcondition.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_zoomcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_zoomcondition.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_zoomcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_zoomcondition.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_zoomcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_zoomcondition.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_zoomcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_zoomcondition.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_zoomcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_zoomcondition.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_zoomcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_zoomcondition.html).Description<small> character varying(255) <br/> String</small> | 
| Zoom Logic | the result determines if the zoom condition is applied | format := &amp;#123;expression&amp;#125; [&amp;#123;logic&amp;#125; &amp;#123;expression&amp;#125;] expression := @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; or @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; logic := &amp;#123;|&amp;#125;|&amp;#123;&amp;&amp;#125;context := any global or window context value := strings or numberslogic operators:= AND or OR with the previous result from left to right operand := eq&amp;#123;=&amp;#125;, gt&amp;#123;&amp;gt;&amp;#125;, le&amp;#123;&amp;lt;&amp;#125;, not&amp;#123;~^!&amp;#125; Examples:  @AD_Table_ID@=14 | @Language@!GERGER @PriceLimit@&gt;10 | @PriceList@&gt;@PriceActual@ @Name@&gt;JStrings may be in single quotes (optional) | [ad_zoomcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_zoomcondition.html).ZoomLogic<small> character varying(2000) <br/> Text</small> | 
| Sql WHERE | Fully qualified SQL WHERE clause | The Where Clause indicates the SQL WHERE clause to use for record selection. The WHERE clause is added to the query. Fully qualified means &quot;tablename.columnname&quot;. | [ad_zoomcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_zoomcondition.html).WhereClause<small> character varying(2000) <br/> Text</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_zoomcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_zoomcondition.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_zoomcondition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_zoomcondition.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Table Script Validator

**[Created:** 01/02/2008 - **Updated:** 22/07/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 60: Table Script Validator - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_table_scriptvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_scriptvalidator.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_table_scriptvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_scriptvalidator.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_table_scriptvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_scriptvalidator.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Event Model Validator |  |  | [ad_table_scriptvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_scriptvalidator.html).EventModelValidator<small> character varying(4) <br/> List</small> | 
| Rule |  |  | [ad_table_scriptvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_scriptvalidator.html).AD_Rule_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_table_scriptvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_scriptvalidator.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_table_scriptvalidator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_scriptvalidator.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Table Translation

**[Created:** 07/07/2004 - **Updated:** 27/10/2024 **]**   
**Description:** Table Translation  
**Help:** Note that many Table names will be overwritten / translated automatically  
**Tab Level:** 1

Table 70: Table Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


### Tab: Table Index

**[Created:** 04/07/2013 - **Updated:** 01/08/2019 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 80: Table Index - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).Name<small> character varying(63) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Create Constraint |  |  | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).IsCreateConstraint<small> character(1) <br/> Yes-No</small> | 
| Unique |  |  | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).IsUnique<small> character(1) <br/> Yes-No</small> | 
| Key column | This column is the key in this table | The key column must also be display sequence 0 in the field definition and may be hidden. | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).IsKey<small> character(1) <br/> Yes-No</small> | 
| Message | System Message | Information and Error messages | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).AD_Message_ID<small> numeric(10) <br/> Search</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Index Validate |  |  | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).Processing<small> character(1) <br/> Button</small> | 
| Drop Table Index |  |  | [ad_tableindex](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tableindex.html).TableIndexDrop<small> character(1) <br/> Button</small> | 


### Tab: Index Column

**[Created:** 04/07/2013 - **Updated:** 01/08/2019 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 90: Index Column - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_indexcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_indexcolumn.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_indexcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_indexcolumn.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table Index |  |  | [ad_indexcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_indexcolumn.html).AD_TableIndex_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_indexcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_indexcolumn.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column SQL | Virtual Column (r/o) | You can define virtual columns (not stored in the database). If defined, the Column name is the synonym of the SQL expression defined here. The SQL expression must be valid.Example: &quot;Updated-Created&quot; would list the age of the entry in days | [ad_indexcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_indexcolumn.html).ColumnSQL<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_indexcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_indexcolumn.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_indexcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_indexcolumn.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_indexcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_indexcolumn.html).EntityType<small> character varying(40) <br/> Table</small> | 


### Tab: View Component

**[Created:** 04/07/2013 - **Updated:** 28/07/2017 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 100: View Component - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).Name<small> character varying(50) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).Help<small> character varying(2000) <br/> Text</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Is UNION ALL | The component view is UNION ALL | When this is set the component view is joined to the others using UNION ALL, otherwise just UNION | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).IsUnionAll<small> character(1) <br/> Yes-No</small> | 
| Distinct | Select Distinct |  | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).IsDistinct<small> character(1) <br/> Yes-No</small> | 
| Sql FROM | SQL FROM clause | The Select Clause indicates the SQL FROM clause to use for selecting the record for a measure calculation. It can have JOIN clauses. It must include the FROM itself. | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).FromClause<small> character varying(4000) <br/> String</small> | 
| Sql WHERE | Fully qualified SQL WHERE clause | The Where Clause indicates the SQL WHERE clause to use for record selection. It must include the WHERE itself. Fully qualified means &quot;tablename.columnname&quot;. | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).WhereClause<small> character varying(2000) <br/> Text</small> | 
| Other SQL Clause | Other SQL Clause | Any other complete clause like GROUP BY, HAVING, ORDER BY, etc. after WHERE clause. | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).OtherClause<small> character varying(2000) <br/> Text</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Referenced Table |  |  | [ad_viewcomponent](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcomponent.html).Referenced_Table_ID<small> numeric(10) <br/> Table</small> | 


### Tab: View Column

**[Created:** 04/07/2013 - **Updated:** 28/07/2017 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 110: View Column - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_viewcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcolumn.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_viewcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcolumn.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Database View Component |  |  | [ad_viewcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcolumn.html).AD_ViewComponent_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column SQL | Virtual Column (r/o) | You can define virtual columns (not stored in the database). If defined, the Column name is the synonym of the SQL expression defined here. The SQL expression must be valid.Example: &quot;Updated-Created&quot; would list the age of the entry in days | [ad_viewcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcolumn.html).ColumnSQL<small> character varying(2000) <br/> String</small> | 
| DB Column Name | Name of the column in the database | The Column Name indicates the name of a column on a table as defined in the database. | [ad_viewcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcolumn.html).ColumnName<small> character varying(63) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_viewcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcolumn.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_viewcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcolumn.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_viewcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcolumn.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_viewcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcolumn.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_viewcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcolumn.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Database Data Type |  |  | [ad_viewcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_viewcolumn.html).DBDataType<small> character(1) <br/> List</small> | 


### Tab: Table Partition

**[Created:** 04/12/2023 - **Updated:** 27/12/2023 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 120: Table Partition - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_tablepartition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablepartition.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_tablepartition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablepartition.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_tablepartition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablepartition.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_tablepartition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablepartition.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_tablepartition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablepartition.html).Name<small> character varying(63) <br/> String</small> | 
| Expression | SQL clause for partition |  | [ad_tablepartition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablepartition.html).ExpressionPartition<small> character varying(250) <br/> String</small> | 
| Parent Partition | Parent table partition |  | [ad_tablepartition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablepartition.html).Parent_TablePartition_ID<small> numeric(10) <br/> Search</small> | 
| Attached | Partition attached to table |  | [ad_tablepartition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablepartition.html).IsPartitionAttached<small> character(1) <br/> Yes-No</small> | 
| Detach/re-attach Table Partition | Detach or re-attach table partition | Detach an attached table partition or re-attach a detached table partition | [ad_tablepartition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablepartition.html).Processing<small> character(1) <br/> Button</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_tablepartition](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablepartition.html).IsActive<small> character(1) <br/> Yes-No</small> | 


