# Window: Bill of Materials and Formula

**[Created:** 17/12/2007 - **Updated:** 08/12/2023 **]**  
**Description:** Maintain Product Bill of Materials &amp; Formula  
**Help:** It is a list of all the subassemblies, intermediates, parts and raw material that go into a parent assembly showing the quantity of each required to make an assembly. There are a variety of display formats of bill of material, including single level bill of material, indented bill of material, modular (planning), costed bill of material, etc. May also be called &quot;formula&quot;, &quot;recipe&quot;, &quot;ingredients list&quot; in certain industries.It answers the question, what are the components of the product?  
![](/img/docs/manual/BillofMaterialsandFormula-Window_iDempiere_v12.0.0.png)

### Tab: Parent Product

**[Created:** 17/12/2007 - **Updated:** 17/12/2007 **]**   
**Description:** Define the Parent Product to this BOM &amp; Formula  
**Help:** Define the Parent Product to this BOM &amp; Formula  
**Tab Level:** 0

Table 10: Parent Product - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).Value<small> character varying(80) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).Name<small> character varying(60) <br/> Text</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Revision |  |  | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).Revision<small> character varying(10) <br/> String</small> | 
| BOM Type | Type of BOM | The type of Bills of Materials determines the state | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).BOMType<small> character(1) <br/> List</small> | 
| BOM Use | The use of the Bill of Material | By default the Master BOM is used, if the alternatives are not defined | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).BOMUse<small> character(1) <br/> List</small> | 
| Copy BOM Lines From | Copy BOM Lines from an existing BOM | Copy BOM Lines from an existing BOM. The BOM being copied to, must not have any existing BOM Lines. | [pp_product_bom](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom.html).CopyFrom<small> character(1) <br/> Button</small> | 


### Tab: Parent Product Translation

**[Created:** 18/04/2009 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 15: Parent Product Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pp_product_bom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pp_product_bom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| BOM & Formula | BOM &amp; Formula |  | [pp_product_bom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom_trl.html).PP_Product_BOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [pp_product_bom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pp_product_bom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pp_product_bom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [pp_product_bom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom_trl.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pp_product_bom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [pp_product_bom_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bom_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


### Tab: Components of the BOM & Formula

**[Created:** 17/12/2007 - **Updated:** 21/04/2009 **]**   
**Description:** Components of the BOM &amp; Formula  
**Help:** The information relative to every component that will be used in the BOM &amp; Formula of the finished product.  
**Tab Level:** 1

Table 20: Components of the BOM & Formula - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [pp_product_bomline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline.html).Line<small> numeric(10) <br/> Integer</small> | 
| BOM & Formula | BOM &amp; Formula |  | [pp_product_bomline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline.html).PP_Product_BOM_ID<small> numeric(10) <br/> Search</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [pp_product_bomline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [pp_product_bomline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Component Type | Component Type for a Bill of Material or Formula | The Component Type can be:1.- By Product: Define a By Product as Component into BOM2.- Component: Define a normal Component into BOM 3.- Option: Define an Option for Product Configure BOM4.- Phantom: Define a Phantom as Component into BOM5.- Packing: Define a Packing as Component into BOM6.- Planning : Define Planning as Component into BOM7.- Tools: Define Tools as Component into BOM8.- Variant: Define Variant  for Product Configure BOM | [pp_product_bomline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline.html).ComponentType<small> character(2) <br/> List</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pp_product_bomline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [pp_product_bomline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pp_product_bomline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Quantity | Indicate the Quantity use in this BOM | Exist two way the add a component to a BOM or Formula:1.- Adding a Component based in quantity to use in this BOM2.- Adding a Component based in % to use the Order Quantity of Manufacturing Order in this Formula. | [pp_product_bomline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline.html).QtyBOM<small> numeric <br/> Number</small> | 
| Feature | Indicated the Feature for Product Configure | Indicated the Feature for Product Configure | [pp_product_bomline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline.html).Feature<small> character varying(30) <br/> String</small> | 


### Tab: Components Translation

**[Created:** 21/04/2009 - **Updated:** 27/10/2024 **]**   
**Description:** BOM &amp; Formula Line Translation  
**Help:**   
**Tab Level:** 2

Table 30: Components Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pp_product_bomline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pp_product_bomline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| BOM Line | BOM Line | The BOM Line is a unique identifier for a BOM line in an BOM. | [pp_product_bomline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline_trl.html).PP_Product_BOMLine_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [pp_product_bomline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pp_product_bomline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [pp_product_bomline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline_trl.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pp_product_bomline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [pp_product_bomline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pp_product_bomline_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


