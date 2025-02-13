# Window: Print Label

**[Created:** 28/05/2003 - **Updated:** 17/02/2022 **]**  
**Description:** Print Label Format  
**Help:** Maintain Format to print Labels  
![](/img/docs/manual/PrintLabel-Window_iDempiere_v12.0.0.png)

### Tab: Label

**[Created:** 28/05/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Print Label  
**Help:** Maintain the Format for printing Labels  
**Tab Level:** 0

Table 10: Label - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_printlabel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabel.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_printlabel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabel.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_printlabel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabel.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_printlabel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabel.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_printlabel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabel.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_printlabel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabel.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Label printer | Label Printer Definition |  | [ad_printlabel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabel.html).AD_LabelPrinter_ID<small> numeric(10) <br/> Table Direct</small> | 
| Printer Name | Name of the Printer | Internal (Operating System) Name of the Printer; Please mote that the printer name may be different on different tenants. Enter a printer name, which applies to ALL tenants (e.g. printer on a server). If none is entered, the default printer is used. You specify your default printer when you log in. You can also change the default printer in Preferences. | [ad_printlabel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabel.html).PrinterName<small> character varying(40) <br/> String</small> | 
| Landscape | Landscape orientation |  | [ad_printlabel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabel.html).IsLandscape<small> character(1) <br/> Yes-No</small> | 
| Label Height | Height of the label | Physical height of the label | [ad_printlabel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabel.html).LabelHeight<small> numeric(10) <br/> Integer</small> | 
| Label Width | Width of the Label | Physical Width of the Label | [ad_printlabel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabel.html).LabelWidth<small> numeric(10) <br/> Integer</small> | 


### Tab: Line

**[Created:** 28/05/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Print Label Line  
**Help:** Maintain Format of the line on a Label  
**Tab Level:** 1

Table 20: Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Print Label | Label Format to print | Format for printing Labels | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).AD_PrintLabel_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Label Format Type | Label Format Type |  | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).LabelFormatType<small> character(1) <br/> List</small> | 
| Print Text | The label text to be printed on a document or correspondence. | The Label to be printed indicates the name that will be printed on a document or correspondence. The max length is 2000 characters. | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).PrintName<small> character varying(60) <br/> String</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| X Position | Absolute X (horizontal) position in 1/72 of an inch | Absolute X (horizontal) position in 1/72 of an inch | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).XPosition<small> numeric(10) <br/> Integer</small> | 
| Y Position | Absolute Y (vertical) position in 1/72 of an inch | Absolute Y (vertical) position in 1/72 of an inch | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).YPosition<small> numeric(10) <br/> Integer</small> | 
| Label printer Function | Function of Label Printer |  | [ad_printlabelline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline.html).AD_LabelPrinterFunction_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Translation

**[Created:** 28/05/2003 - **Updated:** 27/10/2024 **]**   
**Description:** Print Label Line Translation  
**Help:** Maintain the translation for Label Line formats  
**Tab Level:** 3

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_printlabelline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_printlabelline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Print Label Line | Print Label Line Format | Format of the line on a Label | [ad_printlabelline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline_trl.html).AD_PrintLabelLine_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_printlabelline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_printlabelline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [ad_printlabelline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Print Text | The label text to be printed on a document or correspondence. | The Label to be printed indicates the name that will be printed on a document or correspondence. The max length is 2000 characters. | [ad_printlabelline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printlabelline_trl.html).PrintName<small> character varying(60) <br/> String</small> | 


