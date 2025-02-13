# Window: Export Processor

**[Created:** 05/03/2008 - **Updated:** 17/02/2022 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ExportProcessor-Window_iDempiere_v12.0.0.png)

### Tab: Export Processor

**[Created:** 05/03/2008 - **Updated:** 05/03/2008 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Export Processor - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).Name<small> character varying(60) <br/> String</small> | 
| Export Processor Type |  |  | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).EXP_Processor_Type_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).Help<small> character varying(2000) <br/> Text</small> | 
| Host |  |  | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).Host<small> character varying(255) <br/> String</small> | 
| Port |  |  | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).Port<small> numeric(10) <br/> Integer</small> | 
| Account |  |  | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).Account<small> character varying(255) <br/> String</small> | 
| Password Info |  |  | [exp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processor.html).PasswordInfo<small> character varying(255) <br/> String</small> | 


### Tab: Export Processor Parameter

**[Created:** 05/03/2008 - **Updated:** 05/03/2008 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Export Processor Parameter - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [exp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processorparameter.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [exp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processorparameter.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Export Processor |  |  | [exp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processorparameter.html).EXP_Processor_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [exp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processorparameter.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [exp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processorparameter.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [exp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processorparameter.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [exp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processorparameter.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [exp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processorparameter.html).Help<small> character varying(2000) <br/> Text</small> | 
| Parameter Value |  |  | [exp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/exp_processorparameter.html).ParameterValue<small> character varying(60) <br/> String</small> | 


