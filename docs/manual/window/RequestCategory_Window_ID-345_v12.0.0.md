# Window: Request Category

**[Created:** 26/04/2005 - **Updated:** 26/04/2005 **]**  
**Description:** Maintain Request Category  
**Help:** Category or Topic of the Request  
![](/img/docs/manual/RequestCategory-Window_iDempiere_v12.0.0.png)

### Tab: Request Category

**[Created:** 26/04/2005 - **Updated:** 26/04/2005 **]**   
**Description:** Maintain Request Category  
**Help:** Category or Topic of the Request  
**Tab Level:** 0

Table 10: Request Category - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_category.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_category.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [r_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_category.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [r_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_category.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [r_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_category.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_category.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [r_category](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_category.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Update Notification

**[Created:** 13/05/2005 - **Updated:** 13/05/2005 **]**   
**Description:** List Recipients for to receive Request Updates  
**Help:**   
**Tab Level:** 1

Table 20: Update Notification - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_categoryupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_categoryupdates.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_categoryupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_categoryupdates.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Category | Request Category | Category or Topic of the Request | [r_categoryupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_categoryupdates.html).R_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [r_categoryupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_categoryupdates.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_categoryupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_categoryupdates.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [r_categoryupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_categoryupdates.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 


