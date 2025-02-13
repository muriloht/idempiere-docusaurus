# Window: Expenses (not reimbursed)

**[Created:** 06/02/2003 - **Updated:** 02/01/2000 **]**  
**Description:** View expenses and charges not reimbursed  
**Help:** Before reimbursing expenses, check the open expense items  
![](/img/docs/manual/Expensesnotreimbursed-Window_iDempiere_v12.0.0.png)

### Tab: Employee, Vendor

**[Created:** 06/02/2003 - **Updated:** 03/04/2013 **]**   
**Description:** Business Partner to be reimbursed  
**Help:** Select the business partner to be reimbursed.  
**Tab Level:** 0

Table 10: Employee, Vendor - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Name<small> character varying(120) <br/> String</small> | 
| Name 2 | Additional Name |  | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Name2<small> character varying(60) <br/> String</small> | 
| Vendor | Indicates if this Business Partner is a Vendor | The Vendor checkbox indicates if this Business Partner is a Vendor.  If it is selected, additional fields will display which further identify this vendor. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsVendor<small> character(1) <br/> Yes-No</small> | 
| Employee | Indicates if  this Business Partner is an employee | The Employee checkbox indicates if this Business Partner is an Employee.  If it is selected, additional fields will display which further identify this employee. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsEmployee<small> character(1) <br/> Yes-No</small> | 
| PO Payment Term | Payment rules for a purchase order | The PO Payment Term indicates the payment term that will be used when this purchase order becomes an invoice. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).PO_PaymentTerm_ID<small> numeric(10) <br/> Table</small> | 
| Open Balance | Total Open Balance Amount in primary Accounting Currency | The Total Open Balance Amount is the calculated open item amount for Customer and Vendor activity.  If the Balance is below zero, we owe the Business Partner.  The amount is used for Credit Management.Invoices and Payment Allocations determine the Open Balance (i.e. not Orders or Payments). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).TotalOpenBalance<small> numeric <br/> Amount</small> | 


### Tab: Report Line

**[Created:** 06/02/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Time and Expense Report Line (not reimbursed)  
**Help:** View and modify Time and Expense Report Lines. It lists expense items for the business partner on the expense header where the expense lines were not invoiced yet.  
**Tab Level:** 1

Table 20: Report Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Expense Report | Time and Expense Report |  | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).S_TimeExpense_ID<small> numeric(10) <br/> Search</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).Line<small> numeric(10) <br/> Integer</small> | 
| Expense Date | Date of expense | Date of expense | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).DateExpense<small> timestamp without time zone <br/> Date</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Time Report | Line is a time report only (no expense) | The line contains only time information | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).IsTimeReport<small> character(1) <br/> Yes-No</small> | 
| Invoice Line | Invoice Detail Line | The Invoice Line uniquely identifies a single line of an Invoice. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_InvoiceLine_ID<small> numeric(10) <br/> Search</small> | 
| Invoiced | Is this invoiced? | If selected, invoices are created | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).IsInvoiced<small> character(1) <br/> Yes-No</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Resource Assignment | Resource Assignment |  | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).S_ResourceAssignment_ID<small> numeric(10) <br/> Assignment</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).Qty<small> numeric <br/> Quantity</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Quantity Reimbursed | The reimbursed quantity | The reimbursed quantity is derived from the entered quantity and can be overwritten when approving the expense report. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).QtyReimbursed<small> numeric <br/> Quantity</small> | 
| Expense Amount | Amount for this expense | Expense amount in currency | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).ExpenseAmt<small> numeric <br/> Amount</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Converted Amount | Converted Amount | The Converted Amount is the result of multiplying the Source Amount by the Conversion Rate for this target currency. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).ConvertedAmt<small> numeric <br/> Amount</small> | 
| Price Reimbursed | The reimbursed price (in currency of the employee&#x27;s AP price list) | The reimbursed price is derived from the converted price and can be overwritten when approving the expense report. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).PriceReimbursed<small> numeric <br/> Costs+Prices</small> | 
| Time Type | Type of time recorded | Differentiate time types for reporting purposes (In parallel to Activities) | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).S_TimeType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).Description<small> character varying(255) <br/> String</small> | 
| Note | Optional additional user defined information | The Note field allows for optional entry of user defined information regarding this record | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).Note<small> character varying(255) <br/> Text</small> | 
| Campaign | Marketing Campaign | The Campaign defines a unique marketing program.  Projects can be associated with a pre defined Marketing Campaign.  You can then report based on a specific Campaign. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_Campaign_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
| Activity | Business Activity | Activities indicate tasks that are performed and used to utilize Activity based Costing | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_Activity_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project Phase | Phase of a Project |  | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_ProjectPhase_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project Task | Actual Project Task in a Phase | A Project Task in a Project Phase represents the actual work. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_ProjectTask_ID<small> numeric(10) <br/> Table Direct</small> | 


