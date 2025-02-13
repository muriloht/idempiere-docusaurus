# Window: Message

**[Created:** 21/05/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Information and Error Messages  
**Help:** The Message Window defines the Message Text and Message Tips for each system generated message.  It is for System Admin use only.  
![](/img/docs/manual/Message-Window_iDempiere_v12.0.0.png)

### Tab: Message

**[Created:** 21/05/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Information Error and Menu Messages  
**Help:** The Message Tab displays error message text and menu messages  
**Tab Level:** 0

Table 10: Message - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_message](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_message](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ad_message](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message.html).Value<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_message](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_message](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Message Type | Type of message (Informational, Menu or Error) | The Message Type indicates the type of message being defined.  Valid message types are Informational, Menu and Error. | [ad_message](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message.html).MsgType<small> character(1) <br/> List</small> | 
| Message Text | Textual Informational, Menu or Error Message | The Message Text indicates the message that will display | [ad_message](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message.html).MsgText<small> character varying(2000) <br/> Text</small> | 
| Message Tip | Additional tip or help for this message | The Message Tip defines additional help or information about this message. | [ad_message](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message.html).MsgTip<small> character varying(2000) <br/> Text</small> | 


### Tab: Translation

**[Created:** 21/05/1999 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Message | System Message | Information and Error messages | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).AD_Message_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Message Text | Textual Informational, Menu or Error Message | The Message Text indicates the message that will display | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).MsgText<small> character varying(2000) <br/> Text</small> | 
| Message Tip | Additional tip or help for this message | The Message Tip defines additional help or information about this message. | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).MsgTip<small> character varying(2000) <br/> Text</small> | 


