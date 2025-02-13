# Window: Charge

**[Created:** 04/12/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Charges  
**Help:** The Charges Window defines the different charges that may be incurred.  These can include Bank Charges, Vendor Charges and Handling Charges.  
![](/img/docs/manual/Charge-Window_iDempiere_v12.0.0.png)

### Tab: Charge

**[Created:** 04/12/1999 - **Updated:** 19/01/2006 **]**   
**Description:** Charge  
**Help:** The Charge Tab defines the unique charges that may be associated with a document.The optional Business Partner allows to create Purchase Orders from Requisitions.  
**Tab Level:** 0

Table 10: Charge - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_charge](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_charge](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_charge](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_charge](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_charge](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Charge amount | Charge Amount | The Charge Amount indicates the amount for an additional charge. | [c_charge](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge.html).ChargeAmt<small> numeric <br/> Amount</small> | 
| Tax Category | Tax Category | The Tax Category provides a method of grouping similar taxes.  For example, Sales Tax or Value Added Tax. | [c_charge](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge.html).C_TaxCategory_ID<small> numeric(10) <br/> Table Direct</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_charge](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Charge Type |  |  | [c_charge](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge.html).C_ChargeType_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Accounting

**[Created:** 19/12/2000 - **Updated:** 05/03/2013 **]**   
**Description:** Charge Accounting  
**Help:** The Accounting Tab defines the accounting parameters used for transactions including a charge or charges.  
**Tab Level:** 1

Table 20: Accounting - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_charge_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_acct.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_charge_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_acct.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Charge | Additional document charges | The Charge indicates a type of Charge (Handling, Shipping, Restocking) | [c_charge_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_acct.html).C_Charge_ID<small> numeric(10) <br/> Table Direct</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [c_charge_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_acct.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_charge_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_acct.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Charge Account | Charge Account | The Charge Account identifies the account to use when recording charges | [c_charge_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_acct.html).Ch_Expense_Acct<small> numeric(10) <br/> Account</small> | 


### Tab: Translation

**[Created:** 17/04/2009 - **Updated:** 27/10/2024 **]**   
**Description:** Translation  
**Help:** The Translation Tab defines a Document Type in an alternate language.  
**Tab Level:** 1

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_charge_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_charge_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Charge | Additional document charges | The Charge indicates a type of Charge (Handling, Shipping, Restocking) | [c_charge_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_trl.html).C_Charge_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [c_charge_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_charge_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_charge_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_charge_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [c_charge_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_charge_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


