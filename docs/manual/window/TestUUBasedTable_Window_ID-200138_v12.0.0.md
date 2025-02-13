# Window: Test UU Based Table

**[Created:** 17/03/2023 - **Updated:** 17/03/2023 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/TestUUBasedTable-Window_iDempiere_v12.0.0.png)

### Tab: Test UU Based Table

**[Created:** 17/03/2023 - **Updated:** 10/06/2023 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Test UU Based Table - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [testuu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [testuu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [testuu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [testuu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [testuu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [testuu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu.html).Help<small> character varying(2000) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [testuu](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Test UU Based Table Trl

**[Created:** 26/11/2023 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Test UU Based Table Trl - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [testuu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu_trl.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [testuu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Test UU |  |  | [testuu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu_trl.html).TestUU_UU<small> character varying(36) <br/> Search (UU)</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [testuu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [testuu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [testuu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [testuu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu_trl.html).Help<small> character varying(2000) <br/> String</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [testuu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [testuu_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuu_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Test UU Detail

**[Created:** 24/03/2023 - **Updated:** 26/11/2023 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Test UU Detail - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Test UU |  |  | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).TestUU_UU<small> character varying(36) <br/> Table Direct (UU)</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).Name<small> character varying(60) <br/> String</small> | 
| Alternate Test UU |  |  | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).AltTestUU_UU<small> character varying(36) <br/> Search (UU)</small> | 
| Multi Test UU |  |  | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).TestUU_UUs<small> character varying(2000) <br/> Chosen Multiple Selection Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [testuudet](https://idempiere-schemaspy.muriloht.com/adempiere/tables/testuudet.html).IsActive<small> character(1) <br/> Yes-No</small> | 


