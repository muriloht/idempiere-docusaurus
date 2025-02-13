# Workflow: Business Partner Setup 

**[Created:** 05/04/2001 - **Updated:** 25/12/2005 **]**  
**Description:** Setup Business Partner Rules  
**Help:** This workflow defines the Business Partners and the supporting rules.

![](/img/docs/manual/BusinessPartnerSetup-Workflow_iDempiere_v12.0.0.png)

Table: Fields

| **Name** | **Description** | **Help** | **Type** | **Zoom** |
|----------|---------------|-----------|----------|----------|
| Business Partner Group | Maintain Business Partner Groups | The Business Partner Group window allows you to define the accounting parameters at a group level.  If you define the accounting parameters for a group any Business Partner entered using this group will have these accounting parameters automatically populated.  You can then make any modifications necessary at the Business Partner level. | User Window | Business Partner Group | 
| Greeting | Maintain Greetings | The Greeting Window defines a greeting that is then associated with a Business Partner or Business Partner Contact. | User Window | Greeting | 
| Payment Term | Maintain Payment Terms | The Payment Terms Window defines the different payment terms that you offer your customers and that are offered to you by your vendors.  Each invoice must contain a Payment Term.  On the standard invoice, the Name and the Document Note of the Payment Term is printed. | User Window | Payment Term | 
| Invoice Schedule | Maintain Invoicing Schedule | The Invoice Schedule Window defines the frequency and cut off dates for generating summary invoices.  If a customer requires a single invoice for multiple shipments you would define the appropriate invoice schedule and associate it with the Customer. | User Window | Invoice Schedule | 
| Dunning | Maintain Dunning Levels | The Dunning Window defines the parameters that will be used when generating Dunning Letters.  Each customer can be associated with a Dunning Code. | User Window | Dunning | 
| Import Business Partner | Import Business Partner | The Import Business Partner Window is an interim table which is used when importing external data into the system.  Selecting the &#x27;Process&#x27; button will either add or modify the appropriate records. | User Window | Import Business Partner | 
| Business Partner | Maintain Business Partners | The Business Partner window allows you do define any party with whom you transact.  This includes customers, vendors and employees.  Prior to entering or importing products, you must define your vendors.  Prior to generating Orders you must define your customers.  This window holds all information about your business partner and the values entered will be used to generate all document transactions | User Window | Business Partner | 


