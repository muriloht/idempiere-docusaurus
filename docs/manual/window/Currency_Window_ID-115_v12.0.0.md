# Window: Currency

**[Created:** 11/06/1999 - **Updated:** 10/03/2022 **]**  
**Description:** Maintain Currencies  
**Help:** The Currency Window defines any currency which will be used in documents or reporting. You would define used currencies on System level and add currencies on Tenant level only for statistical currencies (e.g. for instable currencies)  
![](/img/docs/manual/Currency-Window_iDempiere_v12.0.0.png)

### Tab: Currency

**[Created:** 21/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define Currency  
**Help:** The Currency Tab defines any currency you will transact with or report in.  
**Tab Level:** 0

Table 10: Currency - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_currency](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_currency](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ISO Currency Code | Three letter ISO 4217 Code of the Currency | For details - http://www.unece.org/trade/rec/rec09en.htm | [c_currency](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency.html).ISO_Code<small> character(3) <br/> String</small> | 
| Symbol | Symbol of the currency (opt used for printing only) | The Currency Symbol defines the symbol that will print when this currency is used. | [c_currency](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency.html).CurSymbol<small> character varying(10) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_currency](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_currency](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Standard Precision | Rule for rounding  calculated amounts | The Standard Precision defines the number of decimal places that amounts will be rounded to for accounting transactions and documents. | [c_currency](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency.html).StdPrecision<small> numeric(10) <br/> Integer</small> | 
| Costing Precision | Rounding used costing calculations | The Costing Precision defines the number of decimal places that amounts will be rounded to when performing costing calculations. | [c_currency](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency.html).CostingPrecision<small> numeric(10) <br/> Integer</small> | 


### Tab: Conversion Rates

**[Created:** 11/06/1999 - **Updated:** 16/11/2012 **]**   
**Description:** Define currency conversion rates  
**Help:** The Conversion Rate Tab defines the rates to use when converting a source currency to an accounting or reporting currency. Note that only the multiply rate is used; The divide rate is for visualization only.  
**Tab Level:** 1

Table 20: Conversion Rates - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_conversion_rate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_conversion_rate.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_conversion_rate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_conversion_rate.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_conversion_rate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_conversion_rate.html).C_Currency_ID<small> numeric(10) <br/> Table</small> | 
| Currency To | Target currency | The Currency To defines the target currency for this conversion rate. | [c_conversion_rate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_conversion_rate.html).C_Currency_ID_To<small> numeric(10) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_conversion_rate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_conversion_rate.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Currency Type | Currency Conversion Rate Type | The Currency Conversion Rate Type lets you define different type of rates, e.g. Spot, Corporate and/or Sell/Buy rates. | [c_conversion_rate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_conversion_rate.html).C_ConversionType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [c_conversion_rate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_conversion_rate.html).ValidFrom<small> timestamp without time zone <br/> Date</small> | 
| Valid to | Valid to including this date (last day) | The Valid To date indicates the last day of a date range | [c_conversion_rate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_conversion_rate.html).ValidTo<small> timestamp without time zone <br/> Date</small> | 
| Multiply Rate | Rate to multiple the source by to calculate the target. | To convert Source number to Target number, the Source is multiplied by the multiply rate.  If the Multiply Rate is entered, then the Divide Rate will be automatically calculated. | [c_conversion_rate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_conversion_rate.html).MultiplyRate<small> numeric <br/> Number</small> | 
| Divide Rate | To convert Source number to Target number, the Source is divided | To convert Source number to Target number, the Source is divided by the divide rate.  If you enter a Divide Rate, the Multiply Rate will be automatically calculated. | [c_conversion_rate](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_conversion_rate.html).DivideRate<small> numeric <br/> Number</small> | 


### Tab: Translation

**[Created:** 06/08/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 40: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_currency_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_currency_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_currency_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency_trl.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [c_currency_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_currency_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [c_currency_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_currency_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Symbol | Symbol of the currency (opt used for printing only) | The Currency Symbol defines the symbol that will print when this currency is used. | [c_currency_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_currency_trl.html).CurSymbol<small> character varying(10) <br/> String</small> | 


