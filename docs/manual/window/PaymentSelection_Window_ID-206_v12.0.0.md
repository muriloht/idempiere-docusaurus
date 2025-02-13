# Window: Payment Selection

**[Created:** 15/02/2001 - **Updated:** 03/06/2021 **]**  
**Description:** Select Invoices for Payment  
**Help:** The Payment Selection Window allows you to select and process the invoices you want to pay.(a) You can create a Payment Selection and select the invoices manually or generate the suggestions based on criteria.  You can change the amount to be paid or delete invoices, you do not want to pay.(b) If you are happy with the Payment Selection, you create the payments.(c) You print or export your payments in the Window Payment Print/Export  
![](/img/docs/manual/PaymentSelection-Window_iDempiere_v12.0.0.png)

### Tab: Payment Selection

**[Created:** 15/02/2001 - **Updated:** 02/01/2000 **]**   
**Description:** Define Payment  
**Help:** The Payment Selection Tab defines the bank account and date of the payments to be made. You also create the payments here.  
**Tab Level:** 0

Table 10: Payment Selection - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).Name<small> character varying(120) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Bank Account | Account at the Bank | The Bank Account identifies an account at this Bank. | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).C_BankAccount_ID<small> numeric(10) <br/> Table Direct</small> | 
| Payment date | Date Payment made | The Payment Date indicates the date the payment was made. | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).PayDate<small> timestamp without time zone <br/> Date</small> | 
| Approved | Indicates if this document requires approval | The Approved checkbox indicates if this document requires approval before it can be processed. | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).IsApproved<small> character(1) <br/> Yes-No</small> | 
| Total Amount | Total Amount | The Total Amount indicates the total document amount. | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).TotalAmt<small> numeric <br/> Amount</small> | 
| One Payment Per Invoice |  |  | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).IsOnePaymentPerInvoice<small> character(1) <br/> Yes-No</small> | 
| Create From ... |  |  | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).CreateFrom<small> character(1) <br/> Button</small> | 
| Prepare Payment | Create Prepared Payments (Checks) to be paid | You create the actual Payments via Payment Print/Export | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).Processing<small> character(1) <br/> Button</small> | 
| Reverse Prepare Payment | Reverse what Prepare Payment process did | Delete prepared payments and allow to add/remove invoices | [c_payselection](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselection.html).ReversePreparePayment<small> character(1) <br/> Button</small> | 


### Tab: Payment Selection Line

**[Created:** 15/02/2001 - **Updated:** 16/03/2021 **]**   
**Description:** Payment Selection Line  
**Help:** The Payment Selection Line Tab defines the individual invoices an organization is paying to a Vendor with this payment.  
**Tab Level:** 1

Table 20: Payment Selection Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Payment Selection | Payment Selection | The Payment Selection identifies a unique Payment | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).C_PaySelection_ID<small> numeric(10) <br/> Search</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).Line<small> numeric(10) <br/> Integer</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Payment Rule | How you pay the invoice | The Payment Rule indicates the method of invoice payment. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).PaymentRule<small> character(1) <br/> List</small> | 
| Invoice | Invoice Identifier | The Invoice Document. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).C_Invoice_ID<small> numeric(10) <br/> Search</small> | 
| Sales Transaction | This is a Sales Transaction | The Sales Transaction checkbox indicates if this item is a Sales Transaction. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).IsSOTrx<small> character(1) <br/> Yes-No</small> | 
| Open Amount | Open item amount |  | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).OpenAmt<small> numeric <br/> Amount</small> | 
| Payment amount | Amount being paid | Indicates the amount this payment is for.  The payment amount can be for single or multiple invoices or a partial payment for an invoice. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).PayAmt<small> numeric <br/> Amount</small> | 
| Write-off Amount | Amount to write-off | The Write Off Amount indicates the amount to be written off as uncollectible. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).WriteOffAmt<small> numeric <br/> Amount</small> | 
| Discount Amount | Calculated amount of discount | The Discount Amount indicates the discount amount for a document or line. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).DiscountAmt<small> numeric <br/> Amount</small> | 
| Difference | Difference Amount |  | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).DifferenceAmt<small> numeric <br/> Amount</small> | 
| Pay Selection Check | Payment Selection Check |  | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).C_PaySelectionCheck_ID<small> numeric(10) <br/> Search</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [c_payselectionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectionline.html).Processed<small> character(1) <br/> Yes-No</small> | 


### Tab: Prepared Payment

**[Created:** 07/09/2002 - **Updated:** 02/01/2000 **]**   
**Description:** View Generated Prepared Payments (Checks)  
**Help:** You create the actual Payments via Payment Print/Export  
**Tab Level:** 1

Table 30: Prepared Payment - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Payment Selection | Payment Selection | The Payment Selection identifies a unique Payment | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).C_PaySelection_ID<small> numeric(10) <br/> Search</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Payment Rule | How you pay the invoice | The Payment Rule indicates the method of invoice payment. | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).PaymentRule<small> character(1) <br/> List</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).Qty<small> numeric <br/> Integer</small> | 
| Payment amount | Amount being paid | Indicates the amount this payment is for.  The payment amount can be for single or multiple invoices or a partial payment for an invoice. | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).PayAmt<small> numeric <br/> Amount</small> | 
| Discount Amount | Calculated amount of discount | The Discount Amount indicates the discount amount for a document or line. | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).DiscountAmt<small> numeric <br/> Amount</small> | 
| Write-off Amount | Amount to write-off | The Write Off Amount indicates the amount to be written off as uncollectible. | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).WriteOffAmt<small> numeric <br/> Amount</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).DocumentNo<small> character varying(30) <br/> String</small> | 
| Receipt | This is a sales transaction (receipt) |  | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).IsReceipt<small> character(1) <br/> Yes-No</small> | 
| Payment | Payment identifier | The Payment is a unique identifier of this payment. | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).C_Payment_ID<small> numeric(10) <br/> Search</small> | 
| Printed | Indicates if this document / line is printed | The Printed checkbox indicates if this document or line will included when printing. | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).IsPrinted<small> character(1) <br/> Yes-No</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [c_payselectioncheck](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_payselectioncheck.html).Processed<small> character(1) <br/> Yes-No</small> | 


