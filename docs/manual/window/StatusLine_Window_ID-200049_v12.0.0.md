# Window: Status Line

**[Created:** 12/01/2014 - **Updated:** 12/01/2014 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/StatusLine-Window_iDempiere_v12.0.0.png)

### Tab: Status Line

**[Created:** 12/01/2014 - **Updated:** 12/01/2014 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Status Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_statusline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statusline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_statusline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statusline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_statusline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statusline.html).Name<small> character varying(60) <br/> String</small> | 
| Message | System Message | Information and Error messages | [ad_statusline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statusline.html).AD_Message_ID<small> numeric(10) <br/> Search</small> | 
| SQL Expression/Statement |  |  | [ad_statusline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statusline.html).SQLStatement<small> character varying(2000) <br/> Text</small> | 
| Style | CSS style for field and label |  | [ad_statusline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statusline.html).AD_Style_ID<small> numeric(10) <br/> Table Direct</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_statusline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statusline.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_statusline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statusline.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Used In

**[Created:** 12/01/2014 - **Updated:** 12/01/2014 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Used In - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_statuslineusedin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statuslineusedin.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_statuslineusedin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statuslineusedin.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Status Line |  |  | [ad_statuslineusedin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statuslineusedin.html).AD_StatusLine_ID<small> numeric(10) <br/> Search</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_statuslineusedin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statuslineusedin.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_statuslineusedin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statuslineusedin.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_statuslineusedin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statuslineusedin.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Tab | Tab within a Window | The Tab indicates a tab that displays within a window. | [ad_statuslineusedin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statuslineusedin.html).AD_Tab_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_statuslineusedin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statuslineusedin.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_statuslineusedin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statuslineusedin.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Status Line | Defines if this record refers to a status line or to a help widget | If checked the definition corresponds to a status line, when unchecked it corresponds to a help widget | [ad_statuslineusedin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statuslineusedin.html).IsStatusLine<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_statuslineusedin](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_statuslineusedin.html).IsActive<small> character(1) <br/> Yes-No</small> | 


