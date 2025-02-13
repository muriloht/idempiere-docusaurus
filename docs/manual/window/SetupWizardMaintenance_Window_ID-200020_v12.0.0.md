# Window: Setup Wizard Maintenance

**[Created:** 20/11/2012 - **Updated:** 20/11/2012 **]**  
**Description:** Maintenance Setup Wizard window  
**Help:**   
![](/img/docs/manual/SetupWizardMaintenance-Window_iDempiere_v12.0.0.png)

### Tab: Setup Wizard

**[Created:** 20/11/2012 - **Updated:** 27/11/2012 **]**   
**Description:** Setup Wizard  
**Help:**   
**Tab Level:** 0

Table 10: Setup Wizard - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_wizardprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wizardprocess.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_wizardprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wizardprocess.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Node | Workflow Node (activity), step or process | The Workflow Node indicates a unique step or process in a Workflow. | [ad_wizardprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wizardprocess.html).AD_WF_Node_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_wizardprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wizardprocess.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Wizard Status |  |  | [ad_wizardprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wizardprocess.html).WizardStatus<small> character(1) <br/> List</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_wizardprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wizardprocess.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Note | Optional additional user defined information | The Note field allows for optional entry of user defined information regarding this record | [ad_wizardprocess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wizardprocess.html).Note<small> character varying(2000) <br/> Text</small> | 


