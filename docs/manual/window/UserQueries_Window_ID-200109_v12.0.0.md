# Window: User Queries

**[Created:** 13/11/2019 - **Updated:** 13/11/2019 **]**  
**Description:** View and maintain saved queries  
**Help:**   
![](/img/docs/manual/UserQueries-Window_iDempiere_v12.0.0.png)

### Tab: User Queries

**[Created:** 13/11/2019 - **Updated:** 04/04/2024 **]**   
**Description:** View and maintain saved queries  
**Help:**   
**Tab Level:** 0

Table 10: User Queries - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).Description<small> character varying(255) <br/> String</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Tab | Tab within a Window | The Tab indicates a tab that displays within a window. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).AD_Tab_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Validation code | Validation Code | The Validation Code displays the date, time and message of the error.You can add advanced SQL queries to your searches by filling this field with @SQL=[WHERE CLAUSE].Do not include the WHERE statement and use Fully qualified SQL statements. F.e:@SQL=C_Order.isActive=&#x27;Y&#x27; AND SalesRep_ID=@AD_User_ID@ will filter orders by active and where the sales representative is the current user. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).Code<small> character varying(4000) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [ad_userquery](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_userquery.html).IsDefault<small> character(1) <br/> Yes-No</small> | 


