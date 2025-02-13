# Window: System Translation Check

**[Created:** 15/01/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Check System Language Translations  
**Help:** Verify your language translations for selected entities. You should use Translation Export / Import for effective translation. This window allows you to check the translation of the main translation entities.  
![](/img/docs/manual/SystemTranslationCheck-Window_iDempiere_v12.0.0.png)

### Tab: Select Language

**[Created:** 15/01/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Select your Language  
**Help:** The Language needs to be a (verified) System Language  
**Tab Level:** 0

Table 10: Select Language - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).AD_Language<small> character varying(6) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).Name<small> character varying(60) <br/> String</small> | 
| ISO Language Code | Lower-case two-letter ISO-3166 code - http://www.ics.uci.edu/pub/ietf/http/related/iso639.txt | The ISO Language Code indicates the standard ISO code for a language in lower case.  Information can be found at http://www.ics.uci.edu/pub/ietf/http/related/iso639.txt | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).LanguageISO<small> character(2) <br/> String</small> | 
| ISO Country Code | Upper-case two-letter alphanumeric ISO Country code according to ISO 3166-1 | The official list can be found at https://www.iso.org/obp/ui/#search | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).CountryCode<small> character(2) <br/> String</small> | 


### Tab: Element Translation

**[Created:** 15/01/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Element Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| System Element | System Element enables the central maintenance of column description and help. | The System Element allows for the central maintenance of help, descriptions and terminology for a database column. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).AD_Element_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Print Text | The label text to be printed on a document or correspondence. | The Label to be printed indicates the name that will be printed on a document or correspondence. The max length is 2000 characters. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).PrintName<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).Help<small> character varying(2000) <br/> Text</small> | 
| PO Name | Name on PO Screens |  | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).PO_Name<small> character varying(60) <br/> String</small> | 
| PO Print name | Print name on PO Screens/Reports |  | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).PO_PrintName<small> character varying(60) <br/> String</small> | 
| PO Description | Description in PO Screens |  | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).PO_Description<small> character varying(255) <br/> String</small> | 
| PO Help | Help for PO Screens |  | [ad_element_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_element_trl.html).PO_Help<small> character varying(2000) <br/> String</small> | 


### Tab: Message Translation

**[Created:** 15/01/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Message Translation - Fields 

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


### Tab: Window Translation

**[Created:** 15/01/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 40: Window Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_window_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_window_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_window_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_window_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_window_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_window_trl.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_window_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_window_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_window_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_window_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_window_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_window_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_window_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_window_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_window_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_window_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_window_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_window_trl.html).Help<small> character varying(2000) <br/> Text</small> | 


### Tab: Tab Translation

**[Created:** 04/07/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 50: Tab Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_tab_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tab_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_tab_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tab_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Tab | Tab within a Window | The Tab indicates a tab that displays within a window. | [ad_tab_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tab_trl.html).AD_Tab_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_tab_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tab_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_tab_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tab_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_tab_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tab_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_tab_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tab_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_tab_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tab_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_tab_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tab_trl.html).Help<small> character varying(2000) <br/> Text</small> | 
| Commit Warning | Warning displayed when saving | Warning or information displayed when committing the record | [ad_tab_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tab_trl.html).CommitWarning<small> character varying(2000) <br/> Text</small> | 


### Tab: Field Translation

**[Created:** 04/07/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 60: Field Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_field_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_field_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Field | Field on a database table | The Field identifies a field on a database table. | [ad_field_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field_trl.html).AD_Field_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_field_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_field_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_field_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_field_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_field_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_field_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_field_trl.html).Help<small> character varying(2000) <br/> Text</small> | 


### Tab: Field Group Translation

**[Created:** 04/07/2003 - **Updated:** 27/10/2024 **]**   
**Description:** Please note, that most of the fields translations are derived from Element!  
**Help:** Run Synchronize Terminology to update menu translation. You need only to translate Fields, which are not centrally maintained.  
**Tab Level:** 1

Table 70: Field Group Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Field Group | Logical grouping of fields | The Field Group indicates the logical group that this field belongs to (History, Amounts, Quantities) | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).AD_FieldGroup_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_fieldgroup_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_fieldgroup_trl.html).Name<small> character varying(60) <br/> String</small> | 


### Tab: Process Translation

**[Created:** 15/01/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 80: Process Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_process_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_process_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_process_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_trl.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_process_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_process_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_process_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_process_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_process_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_process_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_process_trl.html).Help<small> character varying(2000) <br/> Text</small> | 


### Tab: Form Translation

**[Created:** 04/07/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 90: Form Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Special Form | Special Form | The Special Form field identifies a unique Special Form in the system. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).AD_Form_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_form_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_form_trl.html).Help<small> character varying(2000) <br/> Text</small> | 


### Tab: Task Translation

**[Created:** 04/07/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 100: Task Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| OS Task | Operation System Task | The Task field identifies a Operation System Task in the system. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).AD_Task_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_task_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_task_trl.html).Help<small> character varying(2000) <br/> Text</small> | 


### Tab: Workflow Translation

**[Created:** 04/07/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 110: Workflow Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Workflow | Workflow or combination of tasks | The Workflow field identifies a unique Workflow in the system. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).AD_Workflow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_workflow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_workflow_trl.html).Help<small> text <br/> Text</small> | 


### Tab: Workflow Node Translation

**[Created:** 04/07/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 120: Workflow Node Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Node | Workflow Node (activity), step or process | The Workflow Node indicates a unique step or process in a Workflow. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).AD_WF_Node_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_wf_node_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wf_node_trl.html).Help<small> text <br/> Text</small> | 


### Tab: Menu Translation

**[Created:** 04/07/2003 - **Updated:** 27/10/2024 **]**   
**Description:** Please note, that most of the menu translations are derived from Window/Form/.. translation!  
**Help:** Run Synchronize Terminology to update menu translation.  
**Tab Level:** 1

Table 130: Menu Translation - Fields 

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


### Tab: Reference List Translation

**[Created:** 04/07/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 140: Reference List Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Reference List | Reference List based on Table | The Reference List field indicates a list of reference values from a database tables.  Reference lists populate drop down list boxes in data entry screens | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).AD_Ref_List_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_ref_list_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_ref_list_trl.html).Description<small> character varying(255) <br/> String</small> | 


### Tab: Info Window Translation

**[Created:** 01/10/2023 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 150: Info Window Translation - Fields 

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
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_infowindow_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infowindow_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Info Column Translation

**[Created:** 01/10/2023 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 160: Info Column Translation - Fields 

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
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Placeholder |  |  | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).Placeholder<small> character varying(255) <br/> String</small> | 
| Placeholder2 |  |  | [ad_infocolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_infocolumn_trl.html).Placeholder2<small> character varying(255) <br/> String</small> | 


### Tab: Table Translation

**[Created:** 15/10/2023 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 170: Table Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_table_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_table_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Column Translation

**[Created:** 15/10/2023 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 180: Column Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Placeholder |  |  | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).Placeholder<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_column_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_column_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 


