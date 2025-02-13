# Window: Theme Customization

**[Created:** 12/11/2024 - **Updated:** 22/11/2024 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ThemeCustomization-Window_iDempiere_v12.0.0.png)

### Tab: Theme Customization

**[Created:** 12/11/2024 - **Updated:** 24/11/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Theme Customization - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_userdef_theme](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_userdef_theme](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_userdef_theme](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_userdef_theme](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Theme | Theme name |  | [ad_userdef_theme](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme.html).Theme<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_userdef_theme](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_userdef_theme](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_userdef_theme](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme.html).Description<small> character varying(255) <br/> String</small> | 
| Stylesheet | CSS (Stylesheet) used | Base Stylesheet (.css file) to use - if empty, the default (standard.css) is used. The Style sheet can be a URL. | [ad_userdef_theme](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme.html).Stylesheet<small> character varying(512) <br/> String</small> | 


### Tab: Theme Customization Detail

**[Created:** 12/11/2024 - **Updated:** 22/11/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Theme Customization Detail - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_userdef_theme_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme_detail.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_userdef_theme_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme_detail.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Theme Customization |  |  | [ad_userdef_theme_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme_detail.html).AD_UserDef_Theme_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_userdef_theme_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme_detail.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Current Value |  |  | [ad_userdef_theme_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme_detail.html).CurrentValue<small> character varying(255) <br/> String</small> | 
| New Value | New field value | New data entered in the field | [ad_userdef_theme_detail](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userdef_theme_detail.html).NewValue<small> character varying(255) <br/> String</small> | 


