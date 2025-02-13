# Window: Document Base Type Group

**[Created:** 03/04/2023 - **Updated:** 03/04/2023 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/DocumentBaseTypeGroup-Window_iDempiere_v12.0.0.png)

### Tab: Document Base Type Group

**[Created:** 03/04/2023 - **Updated:** 03/04/2023 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Document Base Type Group - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_docbasegroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_docbasegroup.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_docbasegroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_docbasegroup.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_docbasegroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_docbasegroup.html).Value<small> character varying(40) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_docbasegroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_docbasegroup.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_docbasegroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_docbasegroup.html).Name<small> character varying(60) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_docbasegroup](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_docbasegroup.html).Help<small> character varying(2000) <br/> String</small> | 


### Tab: Document Base Type Group Line

**[Created:** 03/04/2023 - **Updated:** 03/04/2023 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Document Base Type Group Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_docbasegroupline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_docbasegroupline.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_docbasegroupline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_docbasegroupline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Base Type Group | Group of Document Base Type for Period Control |  | [c_docbasegroupline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_docbasegroupline.html).C_DocBaseGroup_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_docbasegroupline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_docbasegroupline.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Document Base Type | Logical type of document | The Document Base Type identifies the base or starting point for a document.  Multiple document types may share a single document base type. | [c_docbasegroupline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_docbasegroupline.html).DocBaseType<small> character varying(3) <br/> List</small> | 


