# Window: Test

**[Created:** 21/06/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Test Screen  
**Help:**   
![](/img/docs/manual/Test-Window_iDempiere_v12.0.0.png)

### Tab: Test

**[Created:** 21/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Test - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Amount |  |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).T_Amount<small> numeric <br/> Amount</small> | 
| Integer |  |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).T_Integer<small> numeric(10) <br/> Integer</small> | 
| Number |  |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).T_Number<small> numeric <br/> Number</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Qty |  |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).T_Qty<small> numeric <br/> Quantity</small> | 
| Date |  |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).T_Date<small> timestamp without time zone <br/> Date</small> | 
| DateTime |  |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).T_DateTime<small> timestamp without time zone <br/> Date+Time</small> | 
| Timestamp | Timestamp with time zone |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).T_Timestamp<small> timestamp with time zone <br/> Timestamp With Time Zone</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Payment | Payment identifier | The Payment is a unique identifier of this payment. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).C_Payment_ID<small> numeric(10) <br/> Search</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).M_Locator_ID<small> numeric(10) <br/> Locator (WH)</small> | 
| Address | Location or Address | The Location / Address field defines the location of an entity. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).C_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Account_Acct |  |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).Account_Acct<small> numeric(10) <br/> Account</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 
| Record UUID |  |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).Record_UU<small> character varying(36) <br/> Record UUID</small> | 
| Color |  |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).Color<small> character varying(7) <br/> Color</small> | 
| Binary Data | Binary Data | The Binary field stores binary data. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).BinaryData<small> bytea <br/> Binary</small> | 
| Character Data | Long Character Field |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).CharacterData<small> text <br/> Text Long</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Process Now |  |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).Processing<small> character(1) <br/> Button</small> | 
| JSON Data | The json field stores json data. |  | [test](https://idempiere-schemaspy.muriloht.com/adempiere/tables/test.html).JsonData<small> jsonb <br/> JSON</small> | 


