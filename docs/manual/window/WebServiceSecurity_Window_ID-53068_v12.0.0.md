# Window: Web Service Security

**[Created:** 30/01/2009 - **Updated:** 17/02/2022 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/WebServiceSecurity-Window_iDempiere_v12.0.0.png)

### Tab: Web Service Type

**[Created:** 30/01/2009 - **Updated:** 27/08/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Web Service Type - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ws_webservicetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetype.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ws_webservicetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetype.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ws_webservicetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetype.html).Value<small> character varying(40) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ws_webservicetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetype.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ws_webservicetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetype.html).Name<small> character varying(60) <br/> String</small> | 
| Web Service |  |  | [ws_webservicetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetype.html).WS_WebService_ID<small> numeric(10) <br/> Table Direct</small> | 
| Web Service Method |  |  | [ws_webservicetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetype.html).WS_WebServiceMethod_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ws_webservicetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetype.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ws_webservicetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetype.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ws_webservicetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetype.html).Help<small> character varying(2000) <br/> Text</small> | 
| Create Default Parameters | This process will add required parameters for current web service type |  | [ws_webservicetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetype.html).InsertParameters<small> character(1) <br/> Button</small> | 


### Tab: Web Service Parameters

**[Created:** 30/01/2009 - **Updated:** 18/06/2020 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Web Service Parameters - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ws_webservice_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservice_para.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ws_webservice_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservice_para.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Web Service Type |  |  | [ws_webservice_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservice_para.html).WS_WebServiceType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Parameter Name |  |  | [ws_webservice_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservice_para.html).ParameterName<small> character varying(60) <br/> String</small> | 
| Parameter Type |  |  | [ws_webservice_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservice_para.html).ParameterType<small> character(1) <br/> List</small> | 
| Constant Value | Constant value |  | [ws_webservice_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservice_para.html).ConstantValue<small> character varying(2000) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ws_webservice_para](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservice_para.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Web Service Field Input

**[Created:** 30/01/2009 - **Updated:** 18/06/2020 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Web Service Field Input - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ws_webservicefieldinput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldinput.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ws_webservicefieldinput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldinput.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Web Service Type |  |  | [ws_webservicefieldinput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldinput.html).WS_WebServiceType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column | Column in the table | Link to the database column of the table | [ws_webservicefieldinput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldinput.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| DB Column Name | Name of the column in the database | The Column Name indicates the name of a column on a table as defined in the database. | [ws_webservicefieldinput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldinput.html).ColumnName<small> character varying(63) <br/> String</small> | 
| Reference | System Reference and Validation | The Reference could be a display type, list or table validation. | [ws_webservicefieldinput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldinput.html).AD_Reference_ID<small> numeric(10) <br/> Table</small> | 
| Reference Key | Required to specify, if data type is Table or List | The Reference Value indicates where the reference values are stored.  It must be specified if the data type is Table or List. | [ws_webservicefieldinput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldinput.html).AD_Reference_Value_ID<small> numeric(10) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ws_webservicefieldinput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldinput.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Identifier | This column is part of the record identifier | The Identifier checkbox indicates that this column is part of the identifier or key for this table. | [ws_webservicefieldinput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldinput.html).IsIdentifier<small> character(1) <br/> Yes-No</small> | 
| Allow Null Value | Should allow null value for identifier field |  | [ws_webservicefieldinput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldinput.html).IsNullIdentifier<small> character(1) <br/> Yes-No</small> | 
| Identifier Logic |  |  | [ws_webservicefieldinput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldinput.html).IdentifierLogic<small> character varying(2000) <br/> Text</small> | 


### Tab: Web Service Field Output

**[Created:** 30/01/2009 - **Updated:** 18/06/2020 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 40: Web Service Field Output - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ws_webservicefieldoutput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldoutput.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ws_webservicefieldoutput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldoutput.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Web Service Type |  |  | [ws_webservicefieldoutput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldoutput.html).WS_WebServiceType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column | Column in the table | Link to the database column of the table | [ws_webservicefieldoutput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldoutput.html).AD_Column_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ws_webservicefieldoutput](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicefieldoutput.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Web Service Access

**[Created:** 30/01/2009 - **Updated:** 18/06/2020 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 50: Web Service Access - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ws_webservicetypeaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetypeaccess.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ws_webservicetypeaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetypeaccess.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Web Service Type |  |  | [ws_webservicetypeaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetypeaccess.html).WS_WebServiceType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [ws_webservicetypeaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetypeaccess.html).AD_Role_ID<small> numeric(10) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ws_webservicetypeaccess](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ws_webservicetypeaccess.html).IsActive<small> character(1) <br/> Yes-No</small> | 


