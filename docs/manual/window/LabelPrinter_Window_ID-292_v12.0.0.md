# Window: Label Printer

**[Created:** 07/10/2003 - **Updated:** 17/02/2022 **]**  
**Description:** Maintain Label Printer Definition  
**Help:**   
![](/img/docs/manual/LabelPrinter-Window_iDempiere_v12.0.0.png)

### Tab: Printer

**[Created:** 07/10/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Define Label Printer  
**Help:**   
**Tab Level:** 0

Table 10: Printer - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_labelprinter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinter.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_labelprinter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinter.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_labelprinter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinter.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_labelprinter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinter.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_labelprinter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinter.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Function

**[Created:** 07/10/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Label Printer Function  
**Help:**   
**Tab Level:** 1

Table 20: Function - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_labelprinterfunction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinterfunction.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_labelprinterfunction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinterfunction.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Label printer | Label Printer Definition |  | [ad_labelprinterfunction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinterfunction.html).AD_LabelPrinter_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_labelprinterfunction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinterfunction.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_labelprinterfunction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinterfunction.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_labelprinterfunction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinterfunction.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Function Prefix | Data sent before the function |  | [ad_labelprinterfunction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinterfunction.html).FunctionPrefix<small> character varying(40) <br/> String</small> | 
| XY Position | The Function is XY position | This function positions for the next print operation | [ad_labelprinterfunction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinterfunction.html).IsXYPosition<small> character(1) <br/> Yes-No</small> | 
| XY Separator | The separator between the X and Y function. |  | [ad_labelprinterfunction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinterfunction.html).XYSeparator<small> character varying(20) <br/> String</small> | 
| Function Suffix | Data sent after the function |  | [ad_labelprinterfunction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_labelprinterfunction.html).FunctionSuffix<small> character varying(40) <br/> String</small> | 


