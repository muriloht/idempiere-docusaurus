# Window: Payment Processor

**[Created:** 03/10/2012 - **Updated:** 03/10/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/PaymentProcessor-Window_iDempiere_v12.0.0.png)

### Tab: Payment Processor

**[Created:** 03/10/2012 - **Updated:** 03/10/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Payment Processor - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Host Address | Host Address URL or DNS | The Host Address identifies the URL or DNS of the target host | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).HostAddress<small> character varying(60) <br/> String</small> | 
| Host port | Host Communication Port | The Host Port identifies the port to communicate with the host. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).HostPort<small> numeric(10) <br/> Integer</small> | 
| Proxy address | Address of your proxy server | The Proxy Address must be defined if you must pass through a firewall to access your payment processor. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).ProxyAddress<small> character varying(60) <br/> String</small> | 
| Proxy port | Port of your proxy server | The Proxy Port identifies the port of your proxy server. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).ProxyPort<small> numeric(10) <br/> Integer</small> | 
| Proxy logon | Logon of your proxy server | The Proxy Logon identifies the Logon ID for your proxy server. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).ProxyLogon<small> character varying(60) <br/> String</small> | 
| Proxy password | Password of your proxy server | The Proxy Password identifies the password for your proxy server. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).ProxyPassword<small> character varying(60) <br/> String</small> | 
| Accept MasterCard | Accept Master Card | Indicates if Master Cards are accepted | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AcceptMC<small> character(1) <br/> Yes-No</small> | 
| Accept Visa | Accept Visa Cards | Indicates if Visa Cards are accepted | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AcceptVisa<small> character(1) <br/> Yes-No</small> | 
| Accept AMEX | Accept American Express Card | Indicates if American Express Cards are accepted | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AcceptAMEX<small> character(1) <br/> Yes-No</small> | 
| Accept Diners | Accept Diner&#x27;s Club | Indicates if Diner&#x27;s Club Cards are accepted | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AcceptDiners<small> character(1) <br/> Yes-No</small> | 
| Accept Corporate | Accept Corporate Purchase Cards | Indicates if Corporate Purchase Cards are accepted | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AcceptCorporate<small> character(1) <br/> Yes-No</small> | 
| Accept Discover | Accept Discover Card | Indicates if Discover Cards are accepted | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AcceptDiscover<small> character(1) <br/> Yes-No</small> | 
| Accept Direct Deposit | Accept Direct Deposit (payee initiated) | Indicates if Direct Deposits (wire transfers, etc.) are accepted. Direct Deposits are initiated by the payee. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AcceptDirectDeposit<small> character(1) <br/> Yes-No</small> | 
| Accept Direct Debit | Accept Direct Debits (vendor initiated) | Accept Direct Debit transactions. Direct Debits are initiated by the vendor who has permission to deduct amounts from the payee&#x27;s account. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AcceptDirectDebit<small> character(1) <br/> Yes-No</small> | 
| Accept Electronic Check | Accept ECheck (Electronic Checks) | Indicates if EChecks are accepted | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AcceptCheck<small> character(1) <br/> Yes-No</small> | 
| Accept ATM | Accept Bank ATM Card | Indicates if Bank ATM Cards are accepted | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).AcceptATM<small> character(1) <br/> Yes-No</small> | 
| Minimum Amt | Minimum Amount in Document Currency |  | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).MinimumAmt<small> numeric <br/> Amount</small> | 
| Only Currency | Restrict accepting only this currency | The Only Currency field indicates that this bank account accepts only the currency identified here. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Require Credit Card Verification Code | Require 3/4 digit Credit Verification Code | The Require CC Verification checkbox indicates if this bank accounts requires a verification number for credit card transactions. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).RequireVV<small> character(1) <br/> Yes-No</small> | 
| Payment Processor Class | Payment Processor Java Class | Payment Processor class identifies the Java class used to process payments extending the org.compiere.model.PaymentProcessor class. Example implementations are Optimal Payments: org.compiere.model.PP_Optimal or Verisign: org.compiere.model.PP_PayFlowPro | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).PayProcessorClass<small> character varying(60) <br/> String</small> | 
| Transaction Type | Type of credit card transaction | The Transaction Type indicates the type of transaction to be submitted to the Credit Card Company. | [c_paymentprocessor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_paymentprocessor.html).TrxType<small> character(1) <br/> List</small> | 


