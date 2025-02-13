# Window: Request Type

**[Created:** 01/10/2002 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Request Types  
**Help:** Request Types are used for processing and categorizing requests. Options are Account Inquiry, Warranty Issue, etc.  
![](/img/docs/manual/RequestType-Window_iDempiere_v12.0.0.png)

### Tab: Request Type

**[Created:** 01/10/2002 - **Updated:** 02/01/2000 **]**   
**Description:** Type of request (e.g. Inquiry, Complaint, ..)  
**Help:** Request Types are used for processing and categorizing requests. Options are Account Inquiry, Warranty Issue, etc.  
**Tab Level:** 0

Table 10: Request Type - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Status Category | Request Status Category | Category of Request Status enables to maintain different set of Status for different Request Categories | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).R_StatusCategory_ID<small> numeric(10) <br/> Table Direct</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 
| EMail when Due | Send EMail when Request becomes due | Send EMail when Request becomes due | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).IsEMailWhenDue<small> character(1) <br/> Yes-No</small> | 
| Due Date Tolerance | Tolerance in days between the Date Next Action and the date the request is regarded as overdue | When the Date Next Action is passed, the Request becomes Due. After the Due Date Tolerance, the Request becomes Overdue. | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).DueDateTolerance<small> numeric(10) <br/> Integer</small> | 
| EMail when Overdue | Send EMail when Request becomes overdue | Send EMail when Request becomes overdue | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).IsEMailWhenOverdue<small> character(1) <br/> Yes-No</small> | 
| Auto Due Date Days | Automatic Due Date Days | If a due date is not defined and the Auto Due Days ins greater then zero, a due date in the number of days is automatically created. | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).AutoDueDateDays<small> numeric(10) <br/> Integer</small> | 
| Invoiced | Is this invoiced? | If selected, invoices are created | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).IsInvoiced<small> character(1) <br/> Yes-No</small> | 
| Confidentiality | Type of Confidentiality |  | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).ConfidentialType<small> character(1) <br/> List</small> | 
| Confidential Info | Can enter confidential information | When entering/updating Requests over the web, the user can mark his info as confidential | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).IsConfidentialInfo<small> character(1) <br/> Yes-No</small> | 
| Create Change Request | Automatically create BOM (Engineering) Change Request | Create automatically a Product Bill of Material  (Engineering) Change Request when the Request Group references a Product BOM | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).IsAutoChangeRequest<small> character(1) <br/> Yes-No</small> | 
| Header Color | Header color of calendar dashlet |  | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).HeaderColor<small> character varying(7) <br/> String</small> | 
| Content Color | Content color of calendar dashlet |  | [r_requesttype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttype.html).ContentColor<small> character varying(7) <br/> String</small> | 


### Tab: Update Notification

**[Created:** 13/05/2005 - **Updated:** 13/05/2005 **]**   
**Description:** List Recipients for to receive Request Updates  
**Help:**   
**Tab Level:** 1

Table 20: Update Notification - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [r_requesttypeupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttypeupdates.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [r_requesttypeupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttypeupdates.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Request Type | Type of request (e.g. Inquiry, Complaint, ..) | Request Types are used for processing and categorizing requests. Options are Account Inquiry, Warranty Issue, etc. | [r_requesttypeupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttypeupdates.html).R_RequestType_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [r_requesttypeupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttypeupdates.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [r_requesttypeupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttypeupdates.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [r_requesttypeupdates](https://idempiere-schemaspy.muriloht.com/adempiere/tables/r_requesttypeupdates.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 


