# Window: Request Status

**[Created:** 26/04/2005 - **Updated:** 26/04/2005 **]**  
**Description:** Maintain Request Status  
**Help:** Status if the request (open, closed, investigating, ..)  
![](/img/docs/manual/RequestStatus-Window_iDempiere_v12.0.0.png)

### Tab: Status Category

**[Created:** 15/01/2006 - **Updated:** 15/01/2006 **]**   
**Description:** Request Status Category  
**Help:** Category of Request Status enables to maintain different set of Status for different Request Categories  
**Tab Level:** 0

Table 10: Status Category - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_statuscategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_statuscategory.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_statuscategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_statuscategory.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [r_statuscategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_statuscategory.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [r_statuscategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_statuscategory.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [r_statuscategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_statuscategory.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_statuscategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_statuscategory.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [r_statuscategory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_statuscategory.html).IsDefault<small> character(1) <br/> Yes-No</small> | 


### Tab: Request Status

**[Created:** 26/04/2005 - **Updated:** 15/01/2006 **]**   
**Description:** Maintain Request Status  
**Help:** Status if the request (open, closed, investigating, ..)  
**Tab Level:** 1

Table 20: Request Status - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Status Category | Request Status Category | Category of Request Status enables to maintain different set of Status for different Request Categories | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).R_StatusCategory_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Web Can Update | Entry can be updated from the Web |  | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).IsWebCanUpdate<small> character(1) <br/> Yes-No</small> | 
| Update Status | Automatically change the status after entry from web | Change the status automatically after the entry was changed via the Web | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).Update_Status_ID<small> numeric(10) <br/> Table</small> | 
| Timeout in Days | Timeout in Days to change Status automatically | After the number of days of inactivity, the status is changed automatically to the Next Status.  If no Next Status is defined, the status is not changed. | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).TimeoutDays<small> numeric(10) <br/> Integer</small> | 
| Next Status | Move to next status automatically after timeout | After the timeout, change the status automatically | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).Next_Status_ID<small> numeric(10) <br/> Table</small> | 
| Open Status | The status is closed | This allows to have the three general situations of &quot;not open&quot; - &quot;open&quot; - &quot;closed&quot; | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).IsOpen<small> character(1) <br/> Yes-No</small> | 
| Closed Status | The status is closed | This allows to have multiple closed status | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).IsClosed<small> character(1) <br/> Yes-No</small> | 
| Final Close | Entries with Final Close cannot be re-opened |  | [r_status](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_status.html).IsFinalClose<small> character(1) <br/> Yes-No</small> | 


