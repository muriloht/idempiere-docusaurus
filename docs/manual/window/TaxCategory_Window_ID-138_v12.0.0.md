# Window: Tax Category

**[Created:** 09/08/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Tax Categories  
**Help:** The Tax Category Window is used to enter and maintain Tax Categories.  Each product is associated with a tax category which facilitates reacting changing tax rates.  
![](/img/docs/manual/TaxCategory-Window_iDempiere_v12.0.0.png)

### Tab: Tax Category

**[Created:** 09/08/1999 - **Updated:** 03/03/2008 **]**   
**Description:** Tax Category  
**Help:** The Tax Category Tab is used to define and maintain Tax Categories.  Each Product is associated with a Tax Category.  This facilitates adapting to changes in taxation.  
**Tab Level:** 0

Table 10: Tax Category - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_taxcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_taxcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_taxcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_taxcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_taxcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [c_taxcategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory.html).IsDefault<small> character(1) <br/> Yes-No</small> | 


### Tab: Tax Rate

**[Created:** 18/10/2023 - **Updated:** 18/10/2023 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 15: Tax Rate - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Tax Category | Tax Category | The Tax Category provides a method of grouping similar taxes.  For example, Sales Tax or Value Added Tax. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).C_TaxCategory_ID<small> numeric(10) <br/> Table Direct</small> | 
| Valid from | Valid from including this date (first day) | The Valid From date indicates the first day of a date range | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).ValidFrom<small> timestamp without time zone <br/> Date</small> | 
| SO Tax exempt | Business partner is exempt from tax on sales | If a business partner is exempt from tax on sales, the exempt tax rate is used. For this, you need to set up a tax rate with a 0% rate and indicate that this is your tax exempt rate.  This is required for tax reporting, so that you can track tax exempt transactions. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).IsTaxExempt<small> character(1) <br/> Yes-No</small> | 
| Requires Tax Certificate | This tax rate requires the Business Partner to be tax exempt | The Requires Tax Certificate indicates that a tax certificate is required for a Business Partner to be tax exempt. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).RequiresTaxCertificate<small> character(1) <br/> Yes-No</small> | 
| Document Level | Tax is calculated on document level (rather than line by line) | If the tax is calculated on document level, all lines with that tax rate are added before calculating the total tax for the document.Otherwise the tax is calculated per line and then added.Due to rounding, the tax amount can differ. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).IsDocumentLevel<small> character(1) <br/> Yes-No</small> | 
| Sales Tax | This is a sales tax (i.e. not a value added tax) | If selected AP tax is handled as expense, otherwise it is handled as a VAT credit. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).IsSalesTax<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Parent Tax | Parent Tax indicates a tax that is made up of multiple taxes | The Parent Tax indicates a tax that is a reference for multiple taxes.  This allows you to charge multiple taxes on a document by entering the Parent Tax | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).Parent_Tax_ID<small> numeric(10) <br/> Table</small> | 
| SO/PO Type | Sales Tax applies to sales situations, Purchase Tax to purchase situations | Sales Tax: charged when selling - examples: Sales Tax, Output VAT (payable)Purchase Tax: tax charged when purchasing - examples: Use Tax, Input VAT (receivable) | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).SOPOType<small> character(1) <br/> List</small> | 
| Tax Indicator | Short form for Tax to be printed on documents | The Tax Indicator identifies the short name that will print on documents referencing this tax. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).TaxIndicator<small> character varying(10) <br/> String</small> | 
| Rate | Rate or Tax or Exchange | The Rate indicates the percentage to be multiplied by the source to arrive at the tax or exchange amount. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).Rate<small> numeric <br/> Number</small> | 
| Posting Indicator | Type of input tax (deductible and non deductible) | Separate Tax Posting: Tax is calculated on the full amount of the item and posted separately.Distribute Tax with Relevant Expense: Tax amount is added to the item amount during account posting time and for updating of Product Cost. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).TaxPostingIndicator<small> character(1) <br/> List</small> | 
| Country Group |  |  | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).C_CountryGroupFrom_ID<small> numeric(10) <br/> Table</small> | 
| To |  |  | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).C_CountryGroupTo_ID<small> numeric(10) <br/> Table</small> | 
| Country | Country | The Country defines a Country.  Each Country must be defined before it can be used in any document. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).C_Country_ID<small> numeric(10) <br/> Table</small> | 
| To | Receiving Country | The To Country indicates the receiving country on a document | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).To_Country_ID<small> numeric(10) <br/> Table</small> | 
| Region | Identifies a geographical Region | The Region identifies a unique Region for this Country. | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).C_Region_ID<small> numeric(10) <br/> Table</small> | 
| To | Receiving Region | The To Region indicates the receiving region on a document | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).To_Region_ID<small> numeric(10) <br/> Table</small> | 
| Tax Provider |  |  | [c_tax](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_tax.html).C_TaxProvider_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Translation

**[Created:** 19/03/2000 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_taxcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_taxcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Tax Category | Tax Category | The Tax Category provides a method of grouping similar taxes.  For example, Sales Tax or Value Added Tax. | [c_taxcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory_trl.html).C_TaxCategory_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [c_taxcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_taxcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [c_taxcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_taxcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_taxcategory_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_taxcategory_trl.html).Description<small> character varying(255) <br/> String</small> | 


