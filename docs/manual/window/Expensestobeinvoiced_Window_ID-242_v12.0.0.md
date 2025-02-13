# Window: Expenses (to be invoiced)

**[Created:** 14/07/2002 - **Updated:** 02/01/2000 **]**  
**Description:** View expenses and charges not invoiced to customers  
**Help:** Before invoicing to customers, check the expense lines to be invoiced  
![](/img/docs/manual/Expensestobeinvoiced-Window_iDempiere_v12.0.0.png)

### Tab: Customer

**[Created:** 14/07/2002 - **Updated:** 03/04/2013 **]**   
**Description:** Business Partner (Customers) to be invoiced  
**Help:**   
**Tab Level:** 0

Table 10: Customer - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Name<small> character varying(120) <br/> String</small> | 
| Name 2 | Additional Name |  | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Name2<small> character varying(60) <br/> String</small> | 
| Customer | Indicates if this Business Partner is a Customer | The Customer checkbox indicates if this Business Partner is a customer.  If it is select additional fields will display which further define this customer. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsCustomer<small> character(1) <br/> Yes-No</small> | 
| Price List | Unique identifier of a Price List | Price Lists are used to determine the pricing, margin and cost of items purchased or sold. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).M_PriceList_ID<small> numeric(10) <br/> Table Direct</small> | 
| Payment Term | The terms of Payment (timing, discount) | Payment Terms identify the method and timing of payment. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).C_PaymentTerm_ID<small> numeric(10) <br/> Table</small> | 
| Open Balance | Total Open Balance Amount in primary Accounting Currency | The Total Open Balance Amount is the calculated open item amount for Customer and Vendor activity.  If the Balance is below zero, we owe the Business Partner.  The amount is used for Credit Management.Invoices and Payment Allocations determine the Open Balance (i.e. not Orders or Payments). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).TotalOpenBalance<small> numeric <br/> Amount</small> | 


### Tab: Report Line

**[Created:** 14/07/2002 - **Updated:** 02/01/2000 **]**   
**Description:** Time and Expense Report Line (not invoiced)  
**Help:** View and modify Time and Expense Report Lines.  It lists expense items for the business partner on the expense line where the expense lines have no orders yet. (Sales Orders are created).  
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
| Invoiced | Is this invoiced? | If selected, invoices are created | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).IsInvoiced<small> character(1) <br/> Yes-No</small> | 
| Sales Order Line | Sales Order Line | The Sales Order Line is a unique identifier for a line in an order. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_OrderLine_ID<small> numeric(10) <br/> Search</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Resource Assignment | Resource Assignment |  | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).S_ResourceAssignment_ID<small> numeric(10) <br/> Assignment</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).Qty<small> numeric <br/> Quantity</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Quantity Invoiced | Invoiced Quantity | The Invoiced Quantity indicates the quantity of a product that have been invoiced. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).QtyInvoiced<small> numeric <br/> Quantity</small> | 
| Expense Amount | Amount for this expense | Expense amount in currency | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).ExpenseAmt<small> numeric <br/> Amount</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Invoice Price | Unit price to be invoiced or 0 for default price | Unit Price in the currency of the business partner!  If it is 0, the standard price of the sales price list of the business partner (customer) is used. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).InvoicePrice<small> numeric <br/> Costs+Prices</small> | 
| Converted Amount | Converted Amount | The Converted Amount is the result of multiplying the Source Amount by the Conversion Rate for this target currency. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).ConvertedAmt<small> numeric <br/> Amount</small> | 
| Price Invoiced | The priced invoiced to the customer (in the currency of the customer&#x27;s AR price list) - 0 for default price | The invoiced price is derived from the Invoice Price entered and can be overwritten.  If the price is 0, the default price on the customer&#x27;s invoice is used. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).PriceInvoiced<small> numeric <br/> Costs+Prices</small> | 
| Time Type | Type of time recorded | Differentiate time types for reporting purposes (In parallel to Activities) | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).S_TimeType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).Description<small> character varying(255) <br/> String</small> | 
| Note | Optional additional user defined information | The Note field allows for optional entry of user defined information regarding this record | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).Note<small> character varying(255) <br/> Text</small> | 
| Campaign | Marketing Campaign | The Campaign defines a unique marketing program.  Projects can be associated with a pre defined Marketing Campaign.  You can then report based on a specific Campaign. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_Campaign_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
| Activity | Business Activity | Activities indicate tasks that are performed and used to utilize Activity based Costing | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_Activity_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project Phase | Phase of a Project |  | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_ProjectPhase_ID<small> numeric(10) <br/> Table Direct</small> | 
| Project Task | Actual Project Task in a Phase | A Project Task in a Project Phase represents the actual work. | [s_timeexpenseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_timeexpenseline.html).C_ProjectTask_ID<small> numeric(10) <br/> Table Direct</small> | 


