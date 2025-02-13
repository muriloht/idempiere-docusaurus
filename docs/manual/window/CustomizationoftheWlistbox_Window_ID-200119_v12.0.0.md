# Window: Customization of the Wlistbox

**[Created:** 28/10/2021 - **Updated:** 28/10/2021 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/CustomizationoftheWlistbox-Window_iDempiere_v12.0.0.png)

### Tab: Customization of the Wlistbox

**[Created:** 28/10/2021 - **Updated:** 28/10/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Customization of the Wlistbox - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_wlistbox_customization](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wlistbox_customization.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_wlistbox_customization](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wlistbox_customization.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| WlistboxName |  |  | [ad_wlistbox_customization](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wlistbox_customization.html).WlistboxName<small> character varying(80) <br/> String</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_wlistbox_customization](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wlistbox_customization.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Custom |  |  | [ad_wlistbox_customization](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wlistbox_customization.html).Custom<small> character varying(4000) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_wlistbox_customization](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_wlistbox_customization.html).IsActive<small> character(1) <br/> Yes-No</small> | 


