# Window: Activity (ABC)

**[Created:** 29/06/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Activities for Activity Based Costing  
**Help:** The Activity Based Costing Window defines the different activities for which you want to capture costs.  
![](/img/docs/manual/ActivityABC-Window_iDempiere_v12.0.0.png)

### Tab: Activity

**[Created:** 19/12/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Activity for Activity Based Costing  
**Help:**   
**Tab Level:** 0

Table 10: Activity - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).IsSummary<small> character(1) <br/> Yes-No</small> | 


### Tab: Translation

**[Created:** 21/03/2014 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_activity_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_activity_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Activity | Business Activity | Activities indicate tasks that are performed and used to utilize Activity based Costing | [c_activity_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity_trl.html).C_Activity_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [c_activity_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_activity_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [c_activity_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_activity_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_activity_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_activity_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity_trl.html).Help<small> character varying(2000) <br/> Text</small> | 


