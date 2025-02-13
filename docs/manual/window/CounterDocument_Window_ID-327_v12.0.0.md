# Window: Counter Document

**[Created:** 14/04/2004 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Counter Document Types  
**Help:** When using explicit documents for inter-org transaction (after linking a Business Partner to an Organization), you can determine what document type the counter document is based on the document type of the original transaction.  Example: a &quot;Standard Order&quot; creates a &quot;Standard PO&quot;. If you define a relationship here, you overwrite the default counter document type in the Document Type definition. This allows you to define a specific mapping.If not defined, the first matching document type is used (e.g. AR Invoice - first AP Invoice document type)  
![](/img/docs/manual/CounterDocument-Window_iDempiere_v12.0.0.png)

### Tab: Counter Document

**[Created:** 14/04/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Counter Document Types  
**Help:** When using explicit documents for inter-org transaction (after linking a Business Partner to an Organization), you can determine what document type the counter document is based on the document type of the original transaction.  Example: a &quot;Standard Order&quot; creates a &quot;Standard PO&quot;. If you define a relationship here, you overwrite the default counter document type in the Document Type definition. This allows you to define a specific mapping.You can define conter documents for all organizations (of the original transaction) or for a specific organization.  
**Tab Level:** 0

Table 10: Counter Document - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_doctypecounter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_doctypecounter.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_doctypecounter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_doctypecounter.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_doctypecounter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_doctypecounter.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_doctypecounter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_doctypecounter.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_doctypecounter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_doctypecounter.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [c_doctypecounter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_doctypecounter.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Create Counter Document | Create Counter Document | If selected, create specified counter document.  If not selected, no counter document is created for the document type. | [c_doctypecounter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_doctypecounter.html).IsCreateCounter<small> character(1) <br/> Yes-No</small> | 
| Counter Document Type | Generated Counter Document Type (To) | The Document Type of the generated counter document | [c_doctypecounter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_doctypecounter.html).Counter_C_DocType_ID<small> numeric(10) <br/> Table</small> | 
| Document Action | The targeted status of the document | You find the current status in the Document Status field. The options are listed in a popup | [c_doctypecounter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_doctypecounter.html).DocAction<small> character(2) <br/> List</small> | 
| Valid | Element is valid | The element passed the validation check | [c_doctypecounter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_doctypecounter.html).IsValid<small> character(1) <br/> Yes-No</small> | 
| Validate Document Type |  |  | [c_doctypecounter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_doctypecounter.html).Processing<small> character(1) <br/> Button</small> | 


