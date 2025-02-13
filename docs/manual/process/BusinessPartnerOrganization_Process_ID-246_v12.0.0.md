# Process: Business Partner Organization 

**[Created:** 23/12/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Set and verify Organization ownership of Business Partners  
**Help:** The process allows you to change or verify the organization ownership of Business Partners and its dependent entities (Location, Contact/User, Bank Account, Withholding). Select either a Business Partner Group ar a specific Business Partner  
**Class:** [org.compiere.process.OrgOwnership](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/OrgOwnership.html)

![](/img/docs/manual/BusinessPartnerOrganization-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | AD_Org_ID<br/>Table Direct | 
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | C_BP_Group_ID<br/>Table Direct | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Search | 


