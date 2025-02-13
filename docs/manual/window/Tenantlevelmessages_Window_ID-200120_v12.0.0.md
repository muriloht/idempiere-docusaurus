# Window: Tenant level messages

**[Created:** 04/01/2022 - **Updated:** 17/01/2025 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/Tenantlevelmessages-Window_iDempiere_v12.0.0.png)

### Tab: Tenant level messages

**[Created:** 04/01/2022 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Tenant level messages - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Message | System Message | Information and Error messages | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).AD_Message_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Message Text | Textual Informational, Menu or Error Message | The Message Text indicates the message that will display | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).MsgText<small> character varying(2000) <br/> Text</small> | 
| Message Tip | Additional tip or help for this message | The Message Tip defines additional help or information about this message. | [ad_message_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_message_trl.html).MsgTip<small> character varying(2000) <br/> Text</small> | 


