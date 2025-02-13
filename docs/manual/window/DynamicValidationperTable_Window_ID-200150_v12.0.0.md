# Window: Dynamic Validation per Table

**[Created:** 25/01/2024 - **Updated:** 25/01/2024 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/DynamicValidationperTable-Window_iDempiere_v12.0.0.png)

### Tab: Dynamic Validation per Table

**[Created:** 25/01/2024 - **Updated:** 25/01/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Dynamic Validation per Table - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_tablevalrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablevalrule.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_tablevalrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablevalrule.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_tablevalrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablevalrule.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_tablevalrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablevalrule.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_tablevalrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablevalrule.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_tablevalrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablevalrule.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_tablevalrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablevalrule.html).Description<small> character varying(255) <br/> String</small> | 
| SQL Filter | SQL Filter | Enter a valid WHERE SQL fully qualified clause.  The WHERE is not needed, the code will be surrounded within parenthesis before applied | [ad_tablevalrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_tablevalrule.html).Code<small> character varying(4000) <br/> String</small> | 


