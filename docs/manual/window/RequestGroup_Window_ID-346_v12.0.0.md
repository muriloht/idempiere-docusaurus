# Window: Request Group

**[Created:** 26/04/2005 - **Updated:** 26/04/2005 **]**  
**Description:** Maintain Request Group  
**Help:** Group of requests (e.g. version numbers, responsibility, ...)  
![](/img/docs/manual/RequestGroup-Window_iDempiere_v12.0.0.png)

### Tab: Request Group

**[Created:** 26/04/2005 - **Updated:** 15/05/2005 **]**   
**Description:** Maintain Request Groups  
**Help:** Group of requests (e.g. version numbers, responsibility, ...). If a BOM is referenced  and enabled in Request Type, a BOM Change Request is automatically created.  
**Tab Level:** 0

Table 10: Request Group - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_group.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_group.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [r_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_group.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [r_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_group.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [r_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_group.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_group.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| BOM & Formula | BOM &amp; Formula |  | [r_group](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_group.html).PP_Product_BOM_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Request Updates

**[Created:** 13/05/2005 - **Updated:** 13/05/2005 **]**   
**Description:** List Recipients for to receive Request Updates  
**Help:**   
**Tab Level:** 1

Table 20: Request Updates - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_groupupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_groupupdates.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_groupupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_groupupdates.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Group | Request Group | Group of requests (e.g. version numbers, responsibility, ...) | [r_groupupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_groupupdates.html).R_Group_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [r_groupupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_groupupdates.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_groupupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_groupupdates.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [r_groupupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_groupupdates.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 


