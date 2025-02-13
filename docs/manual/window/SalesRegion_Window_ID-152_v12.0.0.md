# Window: Sales Region

**[Created:** 26/09/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Sales Regions  
**Help:** The Sales Region Window defines the different regions where you do business.  You can generate reports based on Sales Regions  
![](/img/docs/manual/SalesRegion-Window_iDempiere_v12.0.0.png)

### Tab: Sales Region

**[Created:** 26/09/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Sales Region  
**Help:** The Sales Region Tab defines the different regions where you do business.  Sales Regions can be used when generating reports or calculating commissions.  
**Tab Level:** 0

Table 10: Sales Region - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).IsSummary<small> character(1) <br/> Yes-No</small> | 


### Tab: Translation

**[Created:** 21/03/2014 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_salesregion_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_salesregion_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Region | Sales coverage region | The Sales Region indicates a specific area of sales coverage. | [c_salesregion_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion_trl.html).C_SalesRegion_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [c_salesregion_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_salesregion_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [c_salesregion_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_salesregion_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_salesregion_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion_trl.html).Description<small> character varying(255) <br/> String</small> | 


