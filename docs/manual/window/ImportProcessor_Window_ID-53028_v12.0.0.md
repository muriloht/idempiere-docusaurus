# Window: Import Processor

**[Created:** 05/03/2008 - **Updated:** 17/02/2022 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ImportProcessor-Window_iDempiere_v12.0.0.png)

### Tab: Import Processor

**[Created:** 05/03/2008 - **Updated:** 05/03/2008 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Import Processor - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).Help<small> character varying(2000) <br/> Text</small> | 
| Import Processor Type |  |  | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).IMP_Processor_Type_ID<small> numeric(10) <br/> Table Direct</small> | 
| Frequency Type | Frequency of event | The frequency type is used for calculating the date of the next event. | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).FrequencyType<small> character(1) <br/> List</small> | 
| Frequency | Frequency of events | The frequency is used in conjunction with the frequency type in determining an event. Example: If the Frequency Type is Week and the Frequency is 2 - it is every two weeks. | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).Frequency<small> numeric(10) <br/> Integer</small> | 
| Days to keep Log | Number of days to keep the log entries | Older Log entries may be deleted | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).KeepLogDays<small> numeric(10) <br/> Integer</small> | 
| Date Last Run | Date the process was last run. | The Date Last Run indicates the last time that a process was run. | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).DateLastRun<small> timestamp without time zone <br/> Date+Time</small> | 
| Date Next Run | Date the process will run next | The Date Next Run indicates the next time this process will run. | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).DateNextRun<small> timestamp without time zone <br/> Date+Time</small> | 
| Host |  |  | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).Host<small> character varying(255) <br/> String</small> | 
| Port |  |  | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).Port<small> numeric(10) <br/> Integer</small> | 
| Account |  |  | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).Account<small> character varying(255) <br/> String</small> | 
| Password Info |  |  | [imp_processor](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processor.html).PasswordInfo<small> character varying(255) <br/> String</small> | 


### Tab: Parameter

**[Created:** 05/03/2008 - **Updated:** 05/03/2008 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Parameter - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [imp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorparameter.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [imp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorparameter.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Import Processor |  |  | [imp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorparameter.html).IMP_Processor_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [imp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorparameter.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [imp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorparameter.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [imp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorparameter.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [imp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorparameter.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [imp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorparameter.html).Help<small> character varying(2000) <br/> Text</small> | 
| Parameter Value |  |  | [imp_processorparameter](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorparameter.html).ParameterValue<small> character varying(60) <br/> String</small> | 


### Tab: Log

**[Created:** 05/03/2008 - **Updated:** 05/03/2008 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Log - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [imp_processorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorlog.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [imp_processorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorlog.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Import Processor |  |  | [imp_processorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorlog.html).IMP_Processor_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [imp_processorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorlog.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [imp_processorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorlog.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [imp_processorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorlog.html).Help<small> character varying(2000) <br/> Text</small> | 
| Binary Data | Binary Data | The Binary field stores binary data. | [imp_processorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorlog.html).BinaryData<small> bytea <br/> Binary</small> | 
| Error | An Error occurred in the execution |  | [imp_processorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorlog.html).IsError<small> character(1) <br/> Yes-No</small> | 
| Reference | Reference for this record | The Reference displays the source document number. | [imp_processorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorlog.html).Reference<small> character varying(60) <br/> String</small> | 
| Summary | Textual summary of this request | The Summary allows free form text entry of a recap of this request. | [imp_processorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorlog.html).Summary<small> character varying(2000) <br/> Text</small> | 
| Text Message | Text Message |  | [imp_processorlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/imp_processorlog.html).TextMsg<small> character varying(2000) <br/> Text</small> | 


