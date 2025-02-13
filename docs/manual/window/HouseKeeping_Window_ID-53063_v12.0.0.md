# Window: House Keeping

**[Created:** 06/09/2008 - **Updated:** 06/09/2008 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/HouseKeeping-Window_iDempiere_v12.0.0.png)

### Tab: House Keeping

**[Created:** 06/09/2008 - **Updated:** 06/09/2008 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: House Keeping - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).Help<small> character varying(2000) <br/> Text</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| DB Table Name | Name of the table in the database | The DB Table Name indicates the name of the table in database. | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).TableName<small> character varying(60) <br/> String</small> | 
| Sql WHERE | Fully qualified SQL WHERE clause | The Where Clause indicates the SQL WHERE clause to use for record selection. The WHERE clause is added to the query. Fully qualified means &quot;tablename.columnname&quot;. | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).WhereClause<small> character varying(255) <br/> String</small> | 
| Save In Historic |  |  | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).IsSaveInHistoric<small> character(1) <br/> Yes-No</small> | 
| Export XML Backup |  |  | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).IsExportXMLBackup<small> character(1) <br/> Yes-No</small> | 
| Backup Folder | Backup Folder |  | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).BackupFolder<small> character varying(255) <br/> FilePath</small> | 
| House Keeping |  |  | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).Processing<small> character(1) <br/> Button</small> | 
| Last Run |  |  | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).LastRun<small> timestamp without time zone <br/> Date+Time</small> | 
| Last Deleted |  |  | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).LastDeleted<small> numeric(10) <br/> Integer</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_housekeeping](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_housekeeping.html).IsActive<small> character(1) <br/> Yes-No</small> | 


