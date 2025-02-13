# Window: Toolbar Button

**[Created:** 28/03/2012 - **Updated:** 23/10/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ToolbarButton-Window_iDempiere_v12.0.0.png)

### Tab: ToolBar Button

**[Created:** 28/03/2012 - **Updated:** 24/10/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: ToolBar Button - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).Name<small> character varying(60) <br/> String</small> | 
| Action | Indicates the Action to be performed | The Action field is a drop down list box which indicates the Action to be performed for this Item. | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).Action<small> character(1) <br/> List</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Component Name |  |  | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).ComponentName<small> character varying(255) <br/> String</small> | 
| Customization | The change is a customization of the data dictionary and can be applied after Migration | The migration &quot;resets&quot; the system to the current/original setting.  If selected you can save the customization and re-apply it.  Please note that you need to check, if your customization has no negative side effect in the new release. | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).IsCustomization<small> character(1) <br/> Yes-No</small> | 
| Service Component Name | The service component name that implements the interface for toolbar actions | The OSGi service component name that implements the IAction interface for toolbar action | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).ActionClassName<small> character varying(255) <br/> String</small> | 
| Advanced Button | This Button contains advanced Functionality | The button with advanced functionality is only displayed for role that can access advanced functionality | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).IsAdvancedButton<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Group in show more |  |  | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).IsShowMore<small> character(1) <br/> Yes-No</small> | 
| Pressed Logic |  |  | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).PressedLogic<small> character varying(2000) <br/> Text</small> | 
| Display Logic | If the Field is displayed, the result determines if the field is actually displayed | format := &amp;#123;expression&amp;#125; [&amp;#123;logic&amp;#125; &amp;#123;expression&amp;#125;] expression := @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; or @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; logic := &amp;#123;|&amp;#125;|&amp;#123;&amp;&amp;#125;context := any global or window context value := strings or numberslogic operators:= AND or OR with the previous result from left to right operand := eq&amp;#123;=&amp;#125;, gt&amp;#123;&amp;gt;&amp;#125;, le&amp;#123;&amp;lt;&amp;#125;, not&amp;#123;~^!&amp;#125; Examples:  @AD_Table_ID@=14 | @Language@!GERGER @PriceLimit@&gt;10 | @PriceList@&gt;@PriceActual@ @Name@&gt;JStrings may be in single quotes (optional) | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).DisplayLogic<small> character varying(2000) <br/> Text</small> | 
| Read Only Logic | Logic to determine if field is read only (applies only when field is read-write) | format := &amp;#123;expression&amp;#125; [&amp;#123;logic&amp;#125; &amp;#123;expression&amp;#125;] expression := @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; or @&amp;#123;context&amp;#125;@&amp;#123;operand&amp;#125;&amp;#123;value&amp;#125; logic := &amp;#123;|&amp;#125;|&amp;#123;&amp;&amp;#125;context := any global or window context value := strings or numberslogic operators:= AND or OR with the previous result from left to right operand := eq&amp;#123;=&amp;#125;, gt&amp;#123;&amp;gt;&amp;#125;, le&amp;#123;&amp;lt;&amp;#125;, not&amp;#123;~^!&amp;#125; Examples:  @AD_Table_ID@=14 | @Language@!GERGER @PriceLimit@&gt;10 | @PriceList@&gt;@PriceActual@ @Name@&gt;JStrings may be in single quotes (optional) | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).ReadOnlyLogic<small> character varying(2000) <br/> Text</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Add Separator |  |  | [ad_toolbarbutton](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_toolbarbutton.html).IsAddSeparator<small> character(1) <br/> Yes-No</small> | 


