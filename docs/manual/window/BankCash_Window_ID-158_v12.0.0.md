# Window: Bank/Cash

**[Created:** 04/12/1999 - **Updated:** 15/01/2024 **]**  
**Description:** Maintain Bank/Cash  
**Help:** The Bank/Cash Window is used to define the banks and accounts associated with an organization or business partner  
![](/img/docs/manual/BankCash-Window_iDempiere_v12.0.0.png)

### Tab: Bank/Cash

**[Created:** 04/12/1999 - **Updated:** 15/01/2024 **]**   
**Description:** Maintain Bank  
**Help:** The Bank Tab defines a bank that is used by an organization or business partner.  Each Bank is given an identifying Name, Address, Routing No and Swift Code  
**Tab Level:** 0

Table 10: Bank/Cash - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bank](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bank.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bank](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bank.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bank](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bank.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_bank](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bank.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bank](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bank.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Address | Location or Address | The Location / Address field defines the location of an entity. | [c_bank](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bank.html).C_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Own Bank | Bank for this Organization | The Own Bank field indicates if this bank is for this Organization as opposed to a Bank for a Business Partner. | [c_bank](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bank.html).IsOwnBank<small> character(1) <br/> Yes-No</small> | 
| Routing No | Bank Routing Number | The Bank Routing Number (ABA Number) identifies a legal Bank.  It is used in routing checks and electronic transactions. | [c_bank](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bank.html).RoutingNo<small> character varying(20) <br/> String</small> | 
| Swift code | Swift Code or BIC | The Swift Code (Society of Worldwide Interbank Financial Telecommunications) or BIC (Bank Identifier Code) is an identifier of a Bank. The first 4 characters are the bank code, followed by the 2 character country code, the two character location code and optional 3 character branch code. For details see http://www.swift.com/biconline/index.cfm | [c_bank](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bank.html).SwiftCode<small> character varying(20) <br/> String</small> | 


### Tab: Account

**[Created:** 04/12/1999 - **Updated:** 11/10/2005 **]**   
**Description:** Maintain Bank Account  
**Help:** The Account Tab is used to define one or more accounts for a Bank.  Each account has a unique Account No and Currency.  The bank account organization is used for accounting.  
**Tab Level:** 1

Table 20: Account - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).Name<small> character varying(60) <br/> String</small> | 
| Bank | Bank | The Bank is a unique identifier of a Bank for this Organization or for a Business Partner with whom this Organization transacts. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).C_Bank_ID<small> numeric(10) <br/> Table Direct</small> | 
| Account No | Account Number | The Account Number indicates the Number assigned to this bank account. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).AccountNo<small> character varying(20) <br/> String</small> | 
| BBAN | Basic Bank Account Number | The Basic (or Domestic) Bank Account Number is used in Bank transfers (see also IBAN). For details see ISO 13616 and http://www.ecbs.org/ | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).BBAN<small> character varying(40) <br/> String</small> | 
| IBAN | International Bank Account Number | If your bank provides an International Bank Account Number, enter it hereDetails ISO 13616 and http://www.ecbs.org. The account number has the maximum length of 22 characters (without spaces). The IBAN is often printed with a apace after 4 characters. Do not enter the spaces in iDempiere. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).IBAN<small> character varying(40) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Bank Account Type | Bank Account Type | The Bank Account Type field indicates the type of account (savings, checking etc) this account  is defined as. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).BankAccountType<small> character(1) <br/> List</small> | 
| Credit limit | Amount of Credit allowed | The Credit Limit field indicates the credit limit for this account. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).CreditLimit<small> numeric <br/> Number</small> | 
| Payment Export Class |  |  | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).PaymentExportClass<small> character varying(60) <br/> String</small> | 
| Current balance | Current Balance | The Current Balance field indicates the current balance in this account. | [c_bankaccount](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount.html).CurrentBalance<small> numeric <br/> Number</small> | 


### Tab: Bank Account Document

**[Created:** 28/07/2001 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Bank Account Documents  
**Help:** In this tab, you define the documents used for this bank account.  You define your check and other payment document (sequence) number as well as format.  
**Tab Level:** 2

Table 30: Bank Account Document - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bankaccountdoc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccountdoc.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bankaccountdoc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccountdoc.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Bank Account | Account at the Bank | The Bank Account identifies an account at this Bank. | [c_bankaccountdoc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccountdoc.html).C_BankAccount_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bankaccountdoc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccountdoc.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_bankaccountdoc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccountdoc.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bankaccountdoc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccountdoc.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Payment Rule | How you pay the invoice | The Payment Rule indicates the method of invoice payment. | [c_bankaccountdoc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccountdoc.html).PaymentRule<small> character(1) <br/> List</small> | 
| Current Next | The next number to be used | The Current Next indicates the next number to use for this document | [c_bankaccountdoc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccountdoc.html).CurrentNext<small> numeric(10) <br/> Integer</small> | 
| Check Print Format | Print Format for printing Checks | You need to define a Print Format to print the document. | [c_bankaccountdoc](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccountdoc.html).Check_PrintFormat_ID<small> numeric(10) <br/> Table</small> | 


### Tab: Bank Account Processor

**[Created:** 17/10/2012 - **Updated:** 17/10/2012 **]**   
**Description:** Maintain Bank Account Payment Processors  
**Help:**   
**Tab Level:** 2

Table 40: Bank Account Processor - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Bank Account | Account at the Bank | The Bank Account identifies an account at this Bank. | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).C_BankAccount_ID<small> numeric(10) <br/> Table Direct</small> | 
| Payment Processor | Payment processor for electronic payments | The Payment Processor indicates the processor to be used for electronic payments | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).C_PaymentProcessor_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Partner ID | Partner ID or Account for the Payment Processor | Partner ID (Verisign) or Account ID (Optimal) | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).PartnerID<small> character varying(60) <br/> String</small> | 
| Vendor ID | Vendor ID for the Payment Processor |  | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).VendorID<small> character varying(60) <br/> String</small> | 
| User ID | User ID or account number | The User ID identifies a user and allows access to records or processes. | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).UserID<small> character varying(100) <br/> String</small> | 
| Password | Password of any length (case sensitive) | The Password for this User.  Passwords are required to identify authorized users.  For iDempiere Users, you can change the password via the Process &quot;Reset Password&quot;. | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).Password<small> character varying(60) <br/> String</small> | 
| Accept MasterCard | Accept Master Card | Indicates if Master Cards are accepted | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).AcceptMC<small> character(1) <br/> Yes-No</small> | 
| Accept Visa | Accept Visa Cards | Indicates if Visa Cards are accepted | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).AcceptVisa<small> character(1) <br/> Yes-No</small> | 
| Accept AMEX | Accept American Express Card | Indicates if American Express Cards are accepted | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).AcceptAMEX<small> character(1) <br/> Yes-No</small> | 
| Accept Diners | Accept Diner&#x27;s Club | Indicates if Diner&#x27;s Club Cards are accepted | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).AcceptDiners<small> character(1) <br/> Yes-No</small> | 
| Accept Corporate | Accept Corporate Purchase Cards | Indicates if Corporate Purchase Cards are accepted | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).AcceptCorporate<small> character(1) <br/> Yes-No</small> | 
| Accept Discover | Accept Discover Card | Indicates if Discover Cards are accepted | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).AcceptDiscover<small> character(1) <br/> Yes-No</small> | 
| Accept Direct Deposit | Accept Direct Deposit (payee initiated) | Indicates if Direct Deposits (wire transfers, etc.) are accepted. Direct Deposits are initiated by the payee. | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).AcceptDirectDeposit<small> character(1) <br/> Yes-No</small> | 
| Accept Direct Debit | Accept Direct Debits (vendor initiated) | Accept Direct Debit transactions. Direct Debits are initiated by the vendor who has permission to deduct amounts from the payee&#x27;s account. | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).AcceptDirectDebit<small> character(1) <br/> Yes-No</small> | 
| Accept Electronic Check | Accept ECheck (Electronic Checks) | Indicates if EChecks are accepted | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).AcceptCheck<small> character(1) <br/> Yes-No</small> | 
| Minimum Amt | Minimum Amount in Document Currency |  | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).MinimumAmt<small> numeric <br/> Amount</small> | 
| Only Currency | Restrict accepting only this currency | The Only Currency field indicates that this bank account accepts only the currency identified here. | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Require Credit Card Verification Code | Require 3/4 digit Credit Verification Code | The Require CC Verification checkbox indicates if this bank accounts requires a verification number for credit card transactions. | [c_bankaccount_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_processor.html).RequireVV<small> character(1) <br/> Yes-No</small> | 


### Tab: Statement Loader

**[Created:** 25/12/2003 - **Updated:** 15/01/2024 **]**   
**Description:** Definition of Bank Statement Loader (SWIFT, OFX)  
**Help:** The loader definition provides the parameters to load bank statements from EFT formats like SWIFT (MT940) or OFX. The required parameters depend on the actual statement loader class  
**Tab Level:** 2

Table 50: Statement Loader - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Bank Account | Account at the Bank | The Bank Account identifies an account at this Bank. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).C_BankAccount_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Financial Institution ID | The ID of the Financial Institution / Bank | Depending on the loader, it might require a ID of the financial institution | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).FinancialInstitutionID<small> character varying(20) <br/> String</small> | 
| Branch ID | Bank Branch ID | Dependent on the loader, you may have to provide a bank branch ID | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).BranchID<small> character varying(20) <br/> String</small> | 
| Account No | Account Number | The Account Number indicates the Number assigned to this bank account. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).AccountNo<small> character varying(20) <br/> String</small> | 
| PIN | Personal Identification Number |  | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).PIN<small> character varying(20) <br/> String</small> | 
| User ID | User ID or account number | The User ID identifies a user and allows access to records or processes. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).UserID<small> character varying(60) <br/> String</small> | 
| Password | Password of any length (case sensitive) | The Password for this User.  Passwords are required to identify authorized users.  For iDempiere Users, you can change the password via the Process &quot;Reset Password&quot;. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).Password<small> character varying(60) <br/> String</small> | 
| Host Address | Host Address URL or DNS | The Host Address identifies the URL or DNS of the target host | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).HostAddress<small> character varying(60) <br/> String</small> | 
| Host port | Host Communication Port | The Host Port identifies the port to communicate with the host. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).HostPort<small> numeric(10) <br/> Integer</small> | 
| Proxy address | Address of your proxy server | The Proxy Address must be defined if you must pass through a firewall to access your payment processor. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).ProxyAddress<small> character varying(60) <br/> String</small> | 
| Proxy port | Port of your proxy server | The Proxy Port identifies the port of your proxy server. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).ProxyPort<small> numeric(10) <br/> Integer</small> | 
| Proxy logon | Logon of your proxy server | The Proxy Logon identifies the Logon ID for your proxy server. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).ProxyLogon<small> character varying(60) <br/> String</small> | 
| Proxy password | Password of your proxy server | The Proxy Password identifies the password for your proxy server. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).ProxyPassword<small> character varying(60) <br/> String</small> | 
| File Name | Name of the local file or URL | Name of a file in the local directory space - or URL (file://.., http://.., ftp://..) | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).FileName<small> character varying(120) <br/> String</small> | 
| Statement Loader Class | Class name of the bank statement loader | The name of the actual bank statement loader implementing the interface org.compiere.impexp.BankStatementLoaderInterface | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).StmtLoaderClass<small> character varying(60) <br/> String</small> | 
| Date Format | Date format used in the input format | The date format is usually detected, but sometimes need to be defined. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).DateFormat<small> character varying(20) <br/> String</small> | 
| Date Last Run | Date the process was last run. | The Date Last Run indicates the last time that a process was run. | [c_bankstatementloader](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankstatementloader.html).DateLastRun<small> timestamp without time zone <br/> Date+Time</small> | 


### Tab: Accounting

**[Created:** 18/12/2000 - **Updated:** 05/03/2013 **]**   
**Description:** Maintain Accounting Data  
**Help:** The Accounting Tab is used to define the accounts used for transactions with this Bank.  
**Tab Level:** 2

Table 60: Accounting - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bankaccount_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_acct.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bankaccount_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_acct.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Bank Account | Account at the Bank | The Bank Account identifies an account at this Bank. | [c_bankaccount_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_acct.html).C_BankAccount_ID<small> numeric(10) <br/> Table Direct</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [c_bankaccount_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_acct.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bankaccount_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_acct.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Bank Asset | Bank Asset Account | The Bank Asset Account identifies the account to be used for booking changes to the balance in this bank account | [c_bankaccount_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_acct.html).B_Asset_Acct<small> numeric(10) <br/> Account</small> | 
| Bank In Transit | Bank In Transit Account | The Bank in Transit Account identifies the account to be used for funds which are in transit. | [c_bankaccount_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_acct.html).B_InTransit_Acct<small> numeric(10) <br/> Account</small> | 
| Payment Selection | AP Payment Selection Clearing Account |  | [c_bankaccount_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_acct.html).B_PaymentSelect_Acct<small> numeric(10) <br/> Account</small> | 
| Unallocated Cash | Unallocated Cash Clearing Account | Receipts not allocated to Invoices | [c_bankaccount_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_acct.html).B_UnallocatedCash_Acct<small> numeric(10) <br/> Account</small> | 
| Bank Interest Expense | Bank Interest Expense Account | The Bank Interest Expense Account identifies the account to be used for recording interest expenses. | [c_bankaccount_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_acct.html).B_InterestExp_Acct<small> numeric(10) <br/> Account</small> | 
| Bank Interest Revenue | Bank Interest Revenue Account | The Bank Interest Revenue Account identifies the account to be used for recording interest revenue from this Bank. | [c_bankaccount_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bankaccount_acct.html).B_InterestRev_Acct<small> numeric(10) <br/> Account</small> | 


