# Window: Menu

**[Created:** 21/05/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Menu  
**Help:** The Maintain Menu Window defines the Menu which will display.  It is for System Admin use only.  The menu items that each user will see depends upon the security defined.  
![](/img/docs/manual/Menu-Window_iDempiere_v12.0.0.png)

### Tab: Menu

**[Created:** 21/05/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Menu  
**Help:** The Menu Tab defines the tree structured menu which will be used for the selected Organization. Note that the name and description will be automatically synchronized (overwritten), if not a summary node.  
**Tab Level:** 0

Table 10: Menu - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Centrally maintained | Information maintained in System Element table | The Centrally Maintained checkbox indicates if the Name, Description and Help maintained in &#x27;System Element&#x27; table  or &#x27;Window&#x27; table. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).IsCentrallyMaintained<small> character(1) <br/> Yes-No</small> | 
| Read Only | Field is read only | The Read Only indicates that this field may only be Read.  It may not be updated. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).IsReadOnly<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Action | Indicates the Action to be performed | The Action field is a drop down list box which indicates the Action to be performed for this Item. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).Action<small> character(1) <br/> List</small> | 
| Sales Transaction | This is a Sales Transaction | The Sales Transaction checkbox indicates if this item is a Sales Transaction. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).IsSOTrx<small> character(1) <br/> Yes-No</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow | Workflow or combination of tasks | The Workflow field identifies a unique Workflow in the system. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).AD_Workflow_ID<small> numeric(10) <br/> Table Direct</small> | 
| OS Task | Operation System Task | The Task field identifies a Operation System Task in the system. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).AD_Task_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Special Form | Special Form | The Special Form field identifies a unique Special Form in the system. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).AD_Form_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Predefined Context Variables | Predefined context variables to inject when opening a menu entry or a window |  | [ad_menu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu.html).PredefinedContextVariables<small> character varying(4000) <br/> String</small> | 


### Tab: Translation

**[Created:** 21/05/1999 - **Updated:** 27/10/2024 **]**   
**Description:** Menu Translation - May not need to be translated  
**Help:** Menu translations are derived from Window,  Process, etc. You only need to translate Summary level items all others will be translated automatically (overwritten)  
**Tab Level:** 1

Table 20: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_menu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_menu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Menu | Identifies a Menu | The Menu identifies a unique Menu.  Menus are used to control the display of those screens a user has access to. | [ad_menu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu_trl.html).AD_Menu_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_menu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_menu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_menu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_menu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_menu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_menu_trl.html).Description<small> character varying(255) <br/> String</small> | 


