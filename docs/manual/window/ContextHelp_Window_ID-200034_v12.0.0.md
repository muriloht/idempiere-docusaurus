# Window: Context Help

**[Created:** 05/02/2013 - **Updated:** 08/02/2013 **]**  
**Description:** Maintain Context Helps  
**Help:** The Context Help window defines the context help message text to display in the help pane. It is for Web UI only.  
![](/img/docs/manual/ContextHelp-Window_iDempiere_v12.0.0.png)

### Tab: Context Help

**[Created:** 05/02/2013 - **Updated:** 08/02/2013 **]**   
**Description:** Context Helps  
**Help:** The Context Help tab defines the type of context help  
**Tab Level:** 0

Table 10: Context Help - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_ctxhelp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelp.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_ctxhelp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelp.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_ctxhelp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelp.html).Name<small> character varying(120) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_ctxhelp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelp.html).Description<small> character varying(255) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_ctxhelp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelp.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Context Type | Type of Context Help | The Context Type field indicates the type of context help (tab, process, form etc) this context help is defined as | [ad_ctxhelp](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelp.html).CtxType<small> character(1) <br/> List</small> | 


### Tab: Message

**[Created:** 05/02/2013 - **Updated:** 08/02/2013 **]**   
**Description:** Context Help Messages  
**Help:** The Message tab displays message text  
**Tab Level:** 1

Table 20: Message - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_ctxhelpmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_ctxhelpmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Context Help |  |  | [ad_ctxhelpmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg.html).AD_CtxHelp_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_ctxhelpmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Message Text | Textual Informational, Menu or Error Message | The Message Text indicates the message that will display | [ad_ctxhelpmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg.html).MsgText<small> character varying(2000) <br/> Text</small> | 


### Tab: Translation

**[Created:** 05/02/2013 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_ctxhelpmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_ctxhelpmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Context Help Message |  |  | [ad_ctxhelpmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg_trl.html).AD_CtxHelpMsg_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_ctxhelpmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_ctxhelpmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_ctxhelpmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Message Text | Textual Informational, Menu or Error Message | The Message Text indicates the message that will display | [ad_ctxhelpmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ctxhelpmsg_trl.html).MsgText<small> character varying(2000) <br/> Text</small> | 


