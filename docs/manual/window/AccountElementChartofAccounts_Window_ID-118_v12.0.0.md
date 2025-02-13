# Window: Account Element (Chart of Accounts)

**[Created:** 11/06/1999 - **Updated:** 08/12/2023 **]**  
**Description:** Maintain Account Elements  
**Help:** The Account Element Window is used to define and maintain the Accounting Element and User Defined Elements. One of the account segments is your natural account segment (Chart of Account). You may add a new account element for parallel reporting or for user defined accounting segments.  
![](/img/docs/manual/AccountElementChartofAccounts-Window_iDempiere_v12.0.0.png)

### Tab: Element

**[Created:** 23/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Account Element definition  
**Help:** The Element Tab defines the Name, Description and Format for an Element.  Additionally, a Type of Account or User Defined is selected. Each Account Schema must have an Account Element type.  The User Defined Elements are optional.  
**Tab Level:** 0

Table 10: Element - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_element.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_element.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_element.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_element.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_element.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Value Format | Format of the value; Can contain fixed format elements, Variables: &quot;_lLoOaAcCa09&quot;, or ~regex | Validation elements:~regex - Validates a regular expression (Space) any character_Space (fixed character)lany Letter a..Z NO spaceLany Letter a..Z NO space converted to upper caseoany Letter a..Z or spaceOany Letter a..Z or space converted to upper caseaany Letters &amp; Digits NO spaceAany Letters &amp; Digits NO space converted to upper casecany Letters &amp; Digits or spaceCany Letters &amp; Digits or space converted to upper case0Digits 0..9 NO space9Digits 0..9 or spaceExample of format &quot;(000)_000-0000&quot; | [c_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_element.html).VFormat<small> character varying(40) <br/> String</small> | 
| Type | Element Type (account or user defined) | The Element Type indicates if this element is the Account element or is a User Defined element. | [c_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_element.html).ElementType<small> character(1) <br/> List</small> | 
| Natural Account | The primary natural account | The natural account is often based on (industry specific) chart of accounts | [c_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_element.html).IsNaturalAccount<small> character(1) <br/> Yes-No</small> | 
| Balancing | All transactions within an element value must balance (e.g. cost centers) | The Balancing checkbox indicates the this element must balance in each journal transaction.  For example, if cost centers have been defined as an element which is balance then the debits and credits for each unique cost center must net to 0.00.  This is commonly used to define parts of an organization which report as their own entity.  Balancing is not an option for the Account element. | [c_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_element.html).IsBalancing<small> character(1) <br/> Yes-No</small> | 
| Tree | Identifies a Tree | The Tree field identifies a unique Tree in the system. Trees define roll ups or summary levels of information.  They are used in reports for defining report points and summarization levels. | [c_element](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_element.html).AD_Tree_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Element Value

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define Element Values  
**Help:** The Element Value Tab defines the individual valid values for the Element.  The values must conform to the format defined.  If the Element is an Account Type then the Account Classification (Asset, Liability etc) and posting controls are also defined  
**Tab Level:** 1

Table 20: Element Value - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Element | Accounting Element | The Account Element uniquely identifies an Account Type.  These are commonly known as a Chart of Accounts. | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).C_Element_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).Name<small> character varying(120) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Account Type | Indicates the type of account | Valid account types are A - Asset, E - Expense, L - Liability, O- Owner&#x27;s Equity, R -Revenue and M- Memo.  The account type is used to determine what taxes, if any are applicable, validating payables and receivables for business partners.  Note:  Memo account amounts are ignored when checking for balancing | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).AccountType<small> character(1) <br/> List</small> | 
| Post Actual | Actual Values can be posted | The Post Actual indicates if actual values can be posted to this element value. | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).PostActual<small> character(1) <br/> Yes-No</small> | 
| Account Sign | Indicates the Natural Sign of the Account as a Debit or Credit | Indicates if the expected balance for this account should be a Debit or a Credit. If set to Natural, the account sign for an asset or expense account is Debit Sign (i.e. negative if a credit balance). | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).AccountSign<small> character(1) <br/> List</small> | 
| Post Budget | Budget values can be posted | The Post Budget indicates if budget values can be posted to this element value. | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).PostBudget<small> character(1) <br/> Yes-No</small> | 
| Document Controlled | Control account - If an account is controlled by a document, you cannot post manually to it |  | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).IsDocControlled<small> character(1) <br/> Yes-No</small> | 
| Post Statistical | Post statistical quantities to this account? |  | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).PostStatistical<small> character(1) <br/> Yes-No</small> | 
| Bank Account | Indicates if this is the Bank Account | The Bank Account checkbox indicates if this is account is the bank account. | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).IsBankAccount<small> character(1) <br/> Yes-No</small> | 
| Bank Account | Account at the Bank | The Bank Account identifies an account at this Bank. | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).C_BankAccount_ID<small> numeric(10) <br/> Table Direct</small> | 
| Foreign Currency Account | Balances in foreign currency accounts are held in the nominated currency | Balances in foreign currency accounts are held in the nominated currency and translated to functional currency | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).IsForeignCurrency<small> character(1) <br/> Yes-No</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Manage Business Partners |  |  | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).IsDetailBPartner<small> character(1) <br/> Yes-No</small> | 
| Business Partner Type |  |  | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).BPartnerType<small> character(1) <br/> List</small> | 
| Manage Products |  |  | [c_elementvalue](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue.html).IsDetailProduct<small> character(1) <br/> Yes-No</small> | 


### Tab: Translation

**[Created:** 04/12/1999 - **Updated:** 27/10/2024 **]**   
**Description:** Define Translation  
**Help:** The Translation Tab defines the translation to an alternate language  
**Tab Level:** 2

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_elementvalue_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_elementvalue_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Account Element | Account Element | Account Elements can be natural accounts or user defined values. | [c_elementvalue_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue_trl.html).C_ElementValue_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [c_elementvalue_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_elementvalue_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_elementvalue_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue_trl.html).Name<small> character varying(120) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_elementvalue_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [c_elementvalue_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_elementvalue_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


### Tab: Sub Account

**[Created:** 31/10/2005 - **Updated:** 31/10/2005 **]**   
**Description:** Sub Account for Element Value  
**Help:** The Element Value (e.g. Account) may have optional sub accounts for further detail. The sub account is dependent on the value of the account, so a further specification. If the sub-accounts are more or less the same, consider using another accounting dimension.  
**Tab Level:** 2

Table 40: Sub Account - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_subacct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_subacct.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_subacct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_subacct.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Account Element | Account Element | Account Elements can be natural accounts or user defined values. | [c_subacct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_subacct.html).C_ElementValue_ID<small> numeric(10) <br/> Search</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_subacct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_subacct.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_subacct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_subacct.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_subacct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_subacct.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_subacct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_subacct.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_subacct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_subacct.html).IsActive<small> character(1) <br/> Yes-No</small> | 


