# Window: Unit of Measure

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Unit of Measure  
**Help:** The Unit of Measure Window is used to define non monetary units of measure.  It also defines if conversion between units of measure are allowed and how they are to be performed. The system provides some automatic conversions between units of measures (e.g. minute, hour, day, working day, etc.) if they are not explicitly defined here.Conversions need to be direct (i.e. if you have only a conversion between A-B and B-C, the system cannot convert A-C, you need to define it explicitly).  
![](/img/docs/manual/UnitofMeasure-Window_iDempiere_v12.0.0.png)

### Tab: Unit of Measure

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define units of measure  
**Help:** The Unit of Measure Tab defines a non monetary Unit of Measure.  
**Tab Level:** 0

Table 10: Unit of Measure - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| UOM Code | UOM EDI X12 Code | The Unit of Measure Code indicates the EDI X12 Code Data Element 355 (Unit or Basis for Measurement) | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).X12DE355<small> character varying(4) <br/> String</small> | 
| UN/CEFACT Code | Code for Units of Measure used in International Trade | As defined at United Nations Centre for Trade Facilitation and Electronic Business.  https://service.unece.org/trade/uncefact/vocabulary/rec20/ | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).UNCEFACT<small> character varying(10) <br/> String</small> | 
| Symbol | Symbol for a Unit of Measure | The Symbol identifies the Symbol to be displayed and printed for a Unit of Measure | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).UOMSymbol<small> character varying(10) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).Description<small> character varying(255) <br/> String</small> | 
| UOM Type |  |  | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).UOMType<small> character varying(2) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Standard Precision | Rule for rounding  calculated amounts | The Standard Precision defines the number of decimal places that amounts will be rounded to for accounting transactions and documents. | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).StdPrecision<small> numeric(10) <br/> Integer</small> | 
| Costing Precision | Rounding used costing calculations | The Costing Precision defines the number of decimal places that amounts will be rounded to when performing costing calculations. | [c_uom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom.html).CostingPrecision<small> numeric(10) <br/> Integer</small> | 


### Tab: Conversion

**[Created:** 11/06/1999 - **Updated:** 16/11/2012 **]**   
**Description:** Define standard Unit of Measure Conversion  
**Help:** The Conversion Tab defines the rates for converting a Unit of Measure. The system provides some automatic conversions between units of measures (e.g. minute, hour, day, working day, etc.) if they are not explicitly defined here.Conversions need to be direct (i.e. if you have only a conversion between A-B and B-C, the system cannot convert A-C, you need to define it explicitly).  
**Tab Level:** 1

Table 20: Conversion - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| UoM To | Target or destination Unit of Measure | The UOM To indicates the destination UOM for a UOM Conversion pair. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).C_UOM_To_ID<small> numeric(10) <br/> Table</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Multiply Rate | Rate to multiple the source by to calculate the target. | To convert Source number to Target number, the Source is multiplied by the multiply rate.  If the Multiply Rate is entered, then the Divide Rate will be automatically calculated. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).MultiplyRate<small> numeric <br/> Number</small> | 
| Divide Rate | To convert Source number to Target number, the Source is divided | To convert Source number to Target number, the Source is divided by the divide rate.  If you enter a Divide Rate, the Multiply Rate will be automatically calculated. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).DivideRate<small> numeric <br/> Number</small> | 


### Tab: Translation

**[Created:** 25/01/2000 - **Updated:** 27/10/2024 **]**   
**Description:** Unit of Measure Translation  
**Help:**   
**Tab Level:** 1

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_uom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_uom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [c_uom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_trl.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [c_uom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_uom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [c_uom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Symbol | Symbol for a Unit of Measure | The Symbol identifies the Symbol to be displayed and printed for a Unit of Measure | [c_uom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_trl.html).UOMSymbol<small> character varying(10) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_uom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_uom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_trl.html).Description<small> character varying(255) <br/> String</small> | 


