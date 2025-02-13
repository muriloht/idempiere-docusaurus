# Window: Product

**[Created:** 09/08/1999 - **Updated:** 26/01/2023 **]**  
**Description:** Maintain Products  
**Help:** The Product Window defines all products used by an organization.  These products include those sold to customers, used in the manufacture of products sold to customers and products purchased by an organization.  
![](/img/docs/manual/Product-Window_iDempiere_v12.0.0.png)

### Tab: Product

**[Created:** 09/08/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define Product  
**Help:** The Product Tab defines each product and identifies it for use in price lists and orders. The Location is the default location when receiving the stored product.  
**Tab Level:** 0

Table 10: Product - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Value<small> character varying(510) <br/> String</small> | 
| Version No | Version Number |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).VersionNo<small> character varying(20) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Help<small> character varying(2000) <br/> Text</small> | 
| Document Note | Additional information for a Document | The Document Note is used for recording any additional information regarding this product. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).DocumentNote<small> character varying(2000) <br/> Text</small> | 
| UPC/EAN | Bar Code (Universal Product Code or its superset European Article Number) | Use this field to enter the bar code for the product in any of the bar code symbologies (Codabar, Code 25, Code 39, Code 93, Code 128, UPC (A), UPC (E), EAN-13, EAN-8, ITF, ITF-14, ISBN, ISSN, JAN-13, JAN-8, POSTNET and FIM, MSI/Plessey, and Pharmacode) | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).UPC<small> character varying(30) <br/> String</small> | 
| SKU | Stock Keeping Unit | The SKU indicates a user defined stock keeping unit.  It may be used for an additional bar code symbols or your own schema. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).SKU<small> character varying(30) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).M_Product_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| Classification | Classification for grouping | The Classification can be used to optionally group products. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Classification<small> character varying(12) <br/> String</small> | 
| Tax Category | Tax Category | The Tax Category provides a method of grouping similar taxes.  For example, Sales Tax or Value Added Tax. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).C_TaxCategory_ID<small> numeric(10) <br/> Table Direct</small> | 
| Revenue Recognition | Method for recording revenue | The Revenue Recognition indicates how revenue will be recognized for this product | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).C_RevenueRecognition_ID<small> numeric(10) <br/> Table Direct</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Product Type | Type of product | The type of product also determines accounting consequences. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).ProductType<small> character(1) <br/> List</small> | 
| Mail Template | Text templates for mailings | The Mail Template indicates the mail template for return messages. Mail text can include variables.  The priority of parsing is User/Contact, Business Partner and then the underlying business object (like Request, Dunning, Workflow object).So, @Name@ would resolve into the User name (if user is defined defined), then Business Partner name (if business partner is defined) and then the Name of the business object if it has a Name.For Multi-Lingual systems, the template is translated based on the Business Partner&#x27;s language selection. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).R_MailText_ID<small> numeric(10) <br/> Table Direct</small> | 
| Weight | Weight of a product | The Weight indicates the weight  of the product in the Weight UOM of the Tenant | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Weight<small> numeric <br/> Amount</small> | 
| Volume | Volume of a product | The Volume indicates the volume of the product in the Volume UOM of the Tenant | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Volume<small> numeric <br/> Amount</small> | 
| Own Box |  |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsOwnBox<small> character(1) <br/> Yes-No</small> | 
| Customs Tariff Number | Customs Tariff Number, usually the HS-Code |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).CustomsTariffNumber<small> character varying(20) <br/> String</small> | 
| Freight Category | Category of the Freight | Freight Categories are used to calculate the Freight for the Shipper selected | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).M_FreightCategory_ID<small> numeric(10) <br/> Table Direct</small> | 
| Drop Shipment | Drop Shipments are sent directly to the Drop Shipment Location | Drop Shipments are sent directly to the Drop Shipment Location using the Drop Ship Business Partner name and contact. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsDropShip<small> character(1) <br/> Yes-No</small> | 
| Stocked | Organization stocks this product | The Stocked check box indicates if this product is stocked by this Organization. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsStocked<small> character(1) <br/> Yes-No</small> | 
| Manufactured | This product is manufactured |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsManufactured<small> character(1) <br/> Yes-No</small> | 
| Phantom | Phantom Component | Phantom Component are not stored and produced with the product. This is an option to avild maintaining an Engineering and Manufacturing Bill of Materials. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsPhantom<small> character(1) <br/> Yes-No</small> | 
| Kanban controlled | This part is Kanban controlled |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsKanban<small> character(1) <br/> Yes-No</small> | 
| Part Type |  |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).M_PartType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).M_Locator_ID<small> numeric(10) <br/> Locator (WH)</small> | 
| Shelf Width | Shelf width required | The Shelf Width indicates the width dimension required on a shelf for a product | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).ShelfWidth<small> numeric(10) <br/> Integer</small> | 
| Shelf Height | Shelf height required | The Shelf Height indicates the height dimension required on a shelf for a product | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).ShelfHeight<small> numeric <br/> Amount</small> | 
| Shelf Depth | Shelf depth required | The Shelf Depth indicates the depth dimension required on a shelf for a product | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).ShelfDepth<small> numeric(10) <br/> Integer</small> | 
| Units Per Pallet | Units Per Pallet | The Units per Pallet indicates the number of units of this product which fit on a pallet. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).UnitsPerPallet<small> numeric <br/> Costs+Prices</small> | 
| Bill of Materials | Bill of Materials | The Bill of Materials check box indicates if this product consists of a bill of materials. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsBOM<small> character(1) <br/> Yes-No</small> | 
| Verified | The BOM configuration has been verified | The Verified check box indicates if the configuration of this product has been verified.  This is used for products that consist of a bill of materials | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsVerified<small> character(1) <br/> Yes-No</small> | 
| Verify BOM Structure | Verify BOM for correctness | The Verify BOM process checks for circular BOMs (unsupported). | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Processing<small> character(1) <br/> Button</small> | 
| Auto Produce | Auto create production to fulfill shipment |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsAutoProduce<small> character(1) <br/> Yes-No</small> | 
| Print detail records on invoice | Print detail BOM elements on the invoice | The Print Details on Invoice indicates that the BOM element products will print on the Invoice as opposed to this product. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsInvoicePrintDetails<small> character(1) <br/> Yes-No</small> | 
| Print detail records on pick list | Print detail BOM elements on the pick list | The Print Details on Pick List indicates that the BOM element products will print on the Pick List as opposed to this product. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsPickListPrintDetails<small> character(1) <br/> Yes-No</small> | 
| Purchased | Organization purchases this product | The Purchased check box indicates if this product is purchased by this organization. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsPurchased<small> character(1) <br/> Yes-No</small> | 
| Sold | Organization sells this product | The Sold check box indicates if this product is sold by this organization. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsSold<small> character(1) <br/> Yes-No</small> | 
| Discontinued | This product is no longer available | The Discontinued check box indicates a product that has been discontinued. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Discontinued<small> character(1) <br/> Yes-No</small> | 
| Discontinued At | Discontinued At indicates Date when product was discontinued |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).DiscontinuedAt<small> timestamp without time zone <br/> Date</small> | 
| Expense Type | Expense report type |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).S_ExpenseType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Resource | Resource |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).S_Resource_ID<small> numeric(10) <br/> Table Direct</small> | 
| Exclude Auto Delivery | Exclude from automatic Delivery | The product is excluded from generating Shipments.  This allows manual creation of shipments for high demand items. If selected, you need to create the shipment manually.But, the item is always included, when the delivery rule of the Order is Force (e.g. for POS). This allows finer granularity of the Delivery Rule Manual. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsExcludeAutoDelivery<small> character(1) <br/> Yes-No</small> | 
| Image URL | URL of  image | URL of image; The image is not stored in the database, but retrieved at runtime. The image can be a gif, jpeg or png. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).ImageURL<small> character varying(120) <br/> URL</small> | 
| Description URL | URL for the description |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).DescriptionURL<small> character varying(120) <br/> URL</small> | 
| Guarantee Days | Number of days the product is guaranteed or available | If the value is 0, there is no limit to the availability or guarantee, otherwise the guarantee date is calculated by adding the days to the delivery date. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).GuaranteeDays<small> numeric(10) <br/> Integer</small> | 
| Min Guarantee Days | Minimum number of guarantee days | When selecting batch/products with a guarantee date, the minimum left guarantee days for automatic picking.  You can pick any batch/product manually. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).GuaranteeDaysMin<small> numeric(10) <br/> Integer</small> | 
| Attribute Set | Product Attribute Set | Define Product Attribute Sets to add additional attributes and values to the product. You need to define a Attribute Set if you want to enable Serial and Lot Number tracking. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).M_AttributeSet_ID<small> numeric(10) <br/> Table Direct</small> | 
| Attribute Set Instance | Product Attribute Values | The values of the actual Product Attributes. Product Instance attributes are defined in the actual transactions. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Copy from product | Copy prices etc from other product |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).CopyFrom<small> character(1) <br/> Button</small> | 
| Featured in Web Store | If selected, the product is displayed in the initial or any empty search | In the display of products in the Web Store, the product is displayed in the initial view or if no search criteria are entered. To be displayed, the product must be in the price list used. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsWebStoreFeatured<small> character(1) <br/> Yes-No</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 
| Group1 |  |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Group1<small> character varying(255) <br/> String</small> | 
| Group2 |  |  | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Group2<small> character varying(255) <br/> String</small> | 


### Tab: BOM

**[Created:** 26/11/2009 - **Updated:** 26/09/2021 **]**   
**Description:** Bill of Material product lines  
**Help:** The Bill of Materials tab defines those products that are generated from other products.  A Bill of Material (BOM) is one or more Products or BOMs.Available Quantity:- Stored BOMs have to be created via &quot;Production&quot;- The available quantity of a non-stored BOMs is dynamically calculated- The attribute &quot;Stored&quot; is defined in the &quot;Product&quot; tabPrice:- BOMs must be listed in Pricelists- If the price is 0.00, the price is dynamically calculatedPrinting:- Usually, only the BOM information is printed- For invoices, delivery slips and pick lists, you have the option to print the details- In the details, the quantity is listed - and the price, if this is dynamically calculated  
**Tab Level:** 1

Table 15: BOM - Fields 

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


### Tab: Components

**[Created:** 26/11/2009 - **Updated:** 15/01/2024 **]**   
**Description:** Components  
**Help:** Components of Bill of Materials  
**Tab Level:** 2

Table 16: Components - Fields 

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


### Tab: Substitute

**[Created:** 09/08/1999 - **Updated:** 21/01/2009 **]**   
**Description:** Define Substitute  
**Help:** The Substitute Tab defines products which may be used as a replacement for the selected product.  
**Tab Level:** 1

Table 30: Substitute - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_substitute.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_substitute.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_substitute.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_substitute.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_substitute.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_substitute.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Substitute | Entity which can be used in place of this entity | The Substitute identifies the entity to be used as a substitute for this entity. | [m_substitute](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_substitute.html).Substitute_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Related

**[Created:** 19/02/2004 - **Updated:** 21/01/2009 **]**   
**Description:** Related Product  
**Help:** Related Product - e.g. for promotions  
**Tab Level:** 1

Table 40: Related - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_relatedproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_relatedproduct.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_relatedproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_relatedproduct.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_relatedproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_relatedproduct.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_relatedproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_relatedproduct.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_relatedproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_relatedproduct.html).Description<small> character varying(255) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_relatedproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_relatedproduct.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Related Product Type |  |  | [m_relatedproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_relatedproduct.html).RelatedProductType<small> character(1) <br/> List</small> | 
| Related Product | Related Product |  | [m_relatedproduct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_relatedproduct.html).RelatedProduct_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Replenish

**[Created:** 09/08/1999 - **Updated:** 21/07/2005 **]**   
**Description:** Define Product Replenishment  
**Help:** The Replenishment Tab defines the type of replenishment quantities.  This is used for automated ordering.  If you select a custom replenishment type, you need to create a class implementing org.compiere.util.ReplenishInterface and set that on warehouse level.  
**Tab Level:** 1

Table 50: Replenish - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_replenish](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_replenish.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_replenish](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_replenish.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_replenish](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_replenish.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [m_replenish](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_replenish.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [m_replenish](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_replenish.html).M_Locator_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_replenish](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_replenish.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Replenish Type | Method for re-ordering a product | The Replenish Type indicates if this product will be manually re-ordered, ordered when the quantity is below the minimum quantity or ordered when it is below the maximum quantity. If you select a custom replenishment type, you need to create a class implementing org.compiere.util.ReplenishInterface and set that on warehouse level. | [m_replenish](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_replenish.html).ReplenishType<small> character(1) <br/> List</small> | 
| Minimum Level | Minimum Inventory level for this product | Indicates the minimum quantity of this product to be stocked in inventory. | [m_replenish](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_replenish.html).Level_Min<small> numeric <br/> Amount</small> | 
| Maximum Level | Maximum Inventory level for this product | Indicates the maximum quantity of this product to be stocked in inventory. | [m_replenish](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_replenish.html).Level_Max<small> numeric <br/> Amount</small> | 
| Source Warehouse | Optional Warehouse to replenish from | If defined, the warehouse selected is used to replenish the product(s) | [m_replenish](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_replenish.html).M_WarehouseSource_ID<small> numeric(10) <br/> Table</small> | 
| Qty Batch Size |  |  | [m_replenish](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_replenish.html).QtyBatchSize<small> numeric <br/> Quantity</small> | 


### Tab: Purchasing

**[Created:** 04/12/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Purchasing  
**Help:** The Purchasing Tab define the pricing and rules ( pack quantity, UPC, minimum order quantity) for each product.  
**Tab Level:** 1

Table 60: Purchasing - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Quality Rating | Method for rating vendors | The Quality Rating indicates how a vendor is rated (higher number = higher quality) | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).QualityRating<small> numeric <br/> Integer</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Current vendor | Use this Vendor for pricing and stock replenishment | The Current Vendor indicates if prices are used and Product is reordered from this vendor | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).IsCurrentVendor<small> character(1) <br/> Yes-No</small> | 
| UPC/EAN | Bar Code (Universal Product Code or its superset European Article Number) | Use this field to enter the bar code for the product in any of the bar code symbologies (Codabar, Code 25, Code 39, Code 93, Code 128, UPC (A), UPC (E), EAN-13, EAN-8, ITF, ITF-14, ISBN, ISSN, JAN-13, JAN-8, POSTNET and FIM, MSI/Plessey, and Pharmacode) | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).UPC<small> character varying(20) <br/> String</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| List Price | List Price | The List Price is the official List Price in the document currency. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).PriceList<small> numeric <br/> Costs+Prices</small> | 
| Price effective | Effective Date of Price | The Price Effective indicates the date this price is for. This allows you to enter future prices for products which will become effective when appropriate. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).PriceEffective<small> timestamp without time zone <br/> Date</small> | 
| PO Price | Price based on a purchase order | The PO Price indicates the price for a product per the purchase order. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).PricePO<small> numeric <br/> Costs+Prices</small> | 
| Royalty Amount | (Included) Amount for copyright, etc. |  | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).RoyaltyAmt<small> numeric <br/> Amount</small> | 
| Last PO Price | Price of the last purchase order for the product | The Last PO Price indicates the last price paid (per the purchase order) for this product. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).PriceLastPO<small> numeric <br/> Costs+Prices</small> | 
| Last Invoice Price | Price of the last invoice for the product | The Last Invoice Price indicates the last price paid (per the invoice) for this product. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).PriceLastInv<small> numeric <br/> Costs+Prices</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Minimum Order Qty | Minimum order quantity in UOM | The Minimum Order Quantity indicates the smallest quantity of this product which can be ordered. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).Order_Min<small> numeric <br/> Quantity</small> | 
| Order Pack Qty | Package order size in UOM (e.g. order set of 5 units) | The Order Pack Quantity indicates the number of units in each pack of this product. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).Order_Pack<small> numeric <br/> Quantity</small> | 
| Promised Delivery Time | Promised days between order and delivery | The Promised Delivery Time indicates the number of days between the order date and the date that delivery was promised. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).DeliveryTime_Promised<small> numeric(10) <br/> Integer</small> | 
| Actual Delivery Time | Actual days between order and delivery | The Actual Delivery Time indicates the number of days elapsed between placing an order and the delivery of the order | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).DeliveryTime_Actual<small> numeric(10) <br/> Integer</small> | 
| Cost per Order | Fixed Cost Per Order | The Cost Per Order indicates the fixed charge levied when an order for this product is placed. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).CostPerOrder<small> numeric <br/> Costs+Prices</small> | 
| Partner Product Key | Product Key of the Business Partner | The Business Partner Product Key identifies the number used by the Business Partner for this product. It can be printed on orders and invoices when you include the Product Key in the print format. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).VendorProductNo<small> character varying(40) <br/> String</small> | 
| Partner Category | Product Category of the Business Partner | The Business Partner Category identifies the category used by the Business Partner for this product. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).VendorCategory<small> character varying(30) <br/> String</small> | 
| Manufacturer | Manufacturer of the Product | The manufacturer of the Product (used if different from the Business Partner / Vendor) | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).Manufacturer<small> character varying(30) <br/> String</small> | 
| Discontinued | This product is no longer available | The Discontinued check box indicates a product that has been discontinued. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).Discontinued<small> character(1) <br/> Yes-No</small> | 
| Discontinued At | Discontinued At indicates Date when product was discontinued |  | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).DiscontinuedAt<small> timestamp without time zone <br/> Date</small> | 


### Tab: Business Partner

**[Created:** 07/12/2003 - **Updated:** 19/04/2005 **]**   
**Description:** Business Partner specific Information of a Product  
**Help:** Note that some information is for reference only!  The  
**Tab Level:** 1

Table 70: Business Partner - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Partner Product Key | Product Key of the Business Partner | The Business Partner Product Key identifies the number used by the Business Partner for this product. It can be printed on orders and invoices when you include the Product Key in the print format. | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).VendorProductNo<small> character varying(30) <br/> String</small> | 
| Partner Category | Product Category of the Business Partner | The Business Partner Category identifies the category used by the Business Partner for this product. | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).VendorCategory<small> character varying(30) <br/> String</small> | 
| Manufacturer | Manufacturer of the Product | The manufacturer of the Product (used if different from the Business Partner / Vendor) | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).Manufacturer<small> character varying(30) <br/> String</small> | 
| Quality Rating | Method for rating vendors | The Quality Rating indicates how a vendor is rated (higher number = higher quality) | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).QualityRating<small> numeric <br/> Number</small> | 
| Min Shelf Life % | Minimum Shelf Life in percent based on Product Instance Guarantee Date | Minimum Shelf Life of products with Guarantee Date instance. If &gt; 0 you cannot select products with a shelf life ((Guarantee Date-Today) / Guarantee Days) less than the minimum shelf life, unless you select &quot;Show All&quot; | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).ShelfLifeMinPct<small> numeric(10) <br/> Integer</small> | 
| Min Shelf Life Days | Minimum Shelf Life in days based on Product Instance Guarantee Date | Minimum Shelf Life of products with Guarantee Date instance. If &gt; 0 you cannot select products with a shelf life less than the minimum shelf life, unless you select &quot;Show All&quot; | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).ShelfLifeMinDays<small> numeric(10) <br/> Integer</small> | 
| Is Manufacturer | Indicate role of this Business partner as Manufacturer |  | [c_bpartner_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner_product.html).IsManufacturer<small> character(1) <br/> Yes-No</small> | 


### Tab: Price

**[Created:** 09/08/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Product Pricing  
**Help:** The Pricing Tab displays the List, Standard and Limit prices for each price list a product is contained in.  
**Tab Level:** 1

Table 90: Price - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Price List Version | Identifies a unique instance of a Price List | Each Price List can have multiple versions.  The most common use is to indicate the dates that a Price List is valid for. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).M_PriceList_Version_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| List Price | List Price | The List Price is the official List Price in the document currency. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).PriceList<small> numeric <br/> Costs+Prices</small> | 
| Standard Price | Standard Price | The Standard Price indicates the standard or normal price for a product on this price list | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).PriceStd<small> numeric <br/> Costs+Prices</small> | 
| Limit Price | Lowest price for a product | The Price Limit indicates the lowest price for a product stated in the Price List Currency. | [m_productprice](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_productprice.html).PriceLimit<small> numeric <br/> Costs+Prices</small> | 


### Tab: Accounting

**[Created:** 26/09/1999 - **Updated:** 05/03/2013 **]**   
**Description:** Define Accounting Parameters  
**Help:** The Accounting Tab defines the defaults to use when generating accounting transactions for orders and invoices which contain this product.  
**Tab Level:** 1

Table 100: Accounting - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Product Asset | Account for Product Asset (Inventory) | The Product Asset Account indicates the account used for valuing this a product in inventory. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_Asset_Acct<small> numeric(10) <br/> Account</small> | 
| Product Expense | Account for Product Expense | The Product Expense Account indicates the account used to record expenses associated with this product. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_Expense_Acct<small> numeric(10) <br/> Account</small> | 
| Cost Adjustment | Product Cost Adjustment Account | Account used for posting product cost adjustments (e.g. landed costs) | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_CostAdjustment_Acct<small> numeric(10) <br/> Account</small> | 
| Inventory Clearing | Product Inventory Clearing Account | Account used for posting matched product (item) expenses (e.g. AP Invoice, Invoice Match).  You would use a different account then Product Expense, if you want to differentiate service related costs from item related costs. The balance on the clearing account should be zero and accounts for the timing difference between invoice receipt and matching. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_InventoryClearing_Acct<small> numeric(10) <br/> Account</small> | 
| Product COGS | Account for Cost of Goods Sold | The Product COGS Account indicates the account used when recording costs associated with this product. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_COGS_Acct<small> numeric(10) <br/> Account</small> | 
| Product Revenue | Account for Product Revenue (Sales Account) | The Product Revenue Account indicates the account used for recording sales revenue for this product. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_Revenue_Acct<small> numeric(10) <br/> Account</small> | 
| Purchase Price Variance | Difference between Standard Cost and Purchase Price (PPV) | The Purchase Price Variance is used in Standard Costing. It reflects the difference between the Standard Cost and the Purchase Order Price. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_PurchasePriceVariance_Acct<small> numeric(10) <br/> Account</small> | 
| Invoice Price Variance | Difference between Costs and Invoice Price (IPV) | The Invoice Price Variance is used reflects the difference between the current Costs and the Invoice Price. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_InvoicePriceVariance_Acct<small> numeric(10) <br/> Account</small> | 
| Trade Discount Received | Trade Discount Receivable Account | The Trade Discount Receivables Account indicates the account for received trade discounts in vendor invoices | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_TradeDiscountRec_Acct<small> numeric(10) <br/> Account</small> | 
| Trade Discount Granted | Trade Discount Granted Account | The Trade Discount Granted Account indicates the account for granted trade discount in sales invoices | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_TradeDiscountGrant_Acct<small> numeric(10) <br/> Account</small> | 
| Rate Variance | The Rate Variance account is the account used Manufacturing Order | The Rate Variance is used in Standard Costing. It reflects the difference between the Standard Cost Rates and  The Cost Rates of Manufacturing Order.If you change the Standard Rates then this variance is generate. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_RateVariance_Acct<small> numeric(10) <br/> Account</small> | 
| Average Cost Variance | Average Cost Variance | The Average Cost Variance is used in weighted average costing to reflect differences when posting costs for negative inventory. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_AverageCostVariance_Acct<small> numeric(10) <br/> Account</small> | 
| Landed Cost Clearing | Product Landed Cost Clearing Account | Account used for posting of estimated and actual landed cost amount.  The balance on the clearing account should be zero and accounts for the timing difference between material receipt and landed cost invoice. | [m_product_acct](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_acct.html).P_LandedCostClearing_Acct<small> numeric(10) <br/> Account</small> | 


### Tab: Transactions

**[Created:** 17/05/2000 - **Updated:** 02/01/2000 **]**   
**Description:** Transactions for stored Products  
**Help:** The Transaction Tab displays the transactions that have been processed for this product.  
**Tab Level:** 1

Table 110: Transactions - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).M_Locator_ID<small> numeric(10) <br/> Locator (WH)</small> | 
| Movement Quantity | Quantity of a product moved. | The Movement Quantity indicates the quantity of a product that has been moved. | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).MovementQty<small> numeric <br/> Quantity</small> | 
| Movement Date | Date a product was moved in or out of inventory | The Movement Date indicates the date that a product moved in or out of inventory.  This is the result of a shipment, receipt or inventory movement. | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).MovementDate<small> timestamp without time zone <br/> Date</small> | 
| Movement Type | Method of moving the inventory | The Movement Type indicates the type of movement (in, out, to production, etc) | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).MovementType<small> character(2) <br/> List</small> | 
| Shipment/Receipt Line | Line on Shipment or Receipt document | The Shipment/Receipt Line indicates a unique line in a Shipment/Receipt document | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).M_InOutLine_ID<small> numeric(10) <br/> Search</small> | 
| Phys.Inventory Line | Unique line in an Inventory document | The Physical Inventory Line indicates the inventory document line (if applicable) for this transaction | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).M_InventoryLine_ID<small> numeric(10) <br/> Search</small> | 
| Move Line | Inventory Move document Line | The Movement Line indicates the inventory movement document line (if applicable) for this transaction | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).M_MovementLine_ID<small> numeric(10) <br/> Search</small> | 
| Production Line | Document Line representing a production | The Production Line indicates the production document line (if applicable) for this transaction | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).M_ProductionLine_ID<small> numeric(10) <br/> Search</small> | 
| Project Issue | Project Issues (Material, Labor) | Issues to the project initiated by the &quot;Issue to Project&quot; process. You can issue Receipts, Time and Expenses, or Stock. | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).C_ProjectIssue_ID<small> numeric(10) <br/> Search</small> | 
| Manufacturing Cost Collector |  |  | [m_transaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_transaction.html).PP_Cost_Collector_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Translation

**[Created:** 04/12/1999 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 120: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_product_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_trl.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [m_product_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_product_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_trl.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_product_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Document Note | Additional information for a Document | The Document Note is used for recording any additional information regarding this product. | [m_product_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_trl.html).DocumentNote<small> character varying(2000) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_product_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [m_product_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


### Tab: Located at

**[Created:** 28/08/2009 - **Updated:** 19/11/2012 **]**   
**Description:** Where are my units located?  
**Help:**   
**Tab Level:** 1

Table 130: Located at - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_storage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storage.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_storage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storage.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_storage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storage.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Date  Material Policy | Time used for LIFO and FIFO Material Policy | This field is used to record time used for LIFO and FIFO material policy | [m_storage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storage.html).DateMaterialPolicy<small> timestamp without time zone <br/> Date</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [m_storage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storage.html).M_Locator_ID<small> numeric(10) <br/> Locator (WH)</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_storage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storage.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_storage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storage.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| On Hand Quantity | On Hand Quantity | The On Hand Quantity indicates the quantity of a product that is on hand in a warehouse. | [m_storage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storage.html).QtyOnHand<small> numeric <br/> Quantity</small> | 
| Date Last Inventory Count | Date of Last Inventory Count | The Date Last Inventory Count indicates the last time an Inventory count was done. | [m_storage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storage.html).DateLastInventory<small> timestamp without time zone <br/> Date</small> | 
| Ordered Quantity | Ordered Quantity | The Ordered Quantity indicates the quantity of a product that was ordered. | [m_storage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storage.html).QtyOrdered<small> numeric <br/> Quantity</small> | 
| Reserved Quantity | Reserved Quantity | The Reserved Quantity indicates the quantity of a product that is currently reserved. | [m_storage](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storage.html).QtyReserved<small> numeric <br/> Quantity</small> | 


### Tab: UOM Conversion

**[Created:** 29/08/2009 - **Updated:** 29/08/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 140: UOM Conversion - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| UoM To | Target or destination Unit of Measure | The UOM To indicates the destination UOM for a UOM Conversion pair. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).C_UOM_To_ID<small> numeric(10) <br/> Table</small> | 
| Multiply Rate | Rate to multiple the source by to calculate the target. | To convert Source number to Target number, the Source is multiplied by the multiply rate.  If the Multiply Rate is entered, then the Divide Rate will be automatically calculated. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).MultiplyRate<small> numeric <br/> Number</small> | 
| Divide Rate | To convert Source number to Target number, the Source is divided | To convert Source number to Target number, the Source is divided by the divide rate.  If you enter a Divide Rate, the Multiply Rate will be automatically calculated. | [c_uom_conversion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_uom_conversion.html).DivideRate<small> numeric <br/> Number</small> | 


### Tab: Costs

**[Created:** 02/12/2009 - **Updated:** 02/12/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 150: Costs - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Cost Type | Type of Cost (e.g. Current, Plan, Future) | You can define multiple cost types. A cost type selected in an Accounting Schema is used for accounting. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).M_CostType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Cost Element | Product Cost Element |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).M_CostElement_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).Description<small> character varying(255) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Current Cost Price | The currently used cost price |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).CurrentCostPrice<small> numeric <br/> Costs+Prices</small> | 
| Current Cost Price Lower Level | Current Price Lower Level Is the sum of the costs of the components of this product manufactured for this level. | Current Price Lower Level is used for get the total costs for lower level the a product manufactured.The Current Price Lower Level always will be calculated.You can see the Current Cost Price and Current Cost Price Lower Level with Cost  Bill of Material &amp; Formula Detail Report. The sum the Current Cost Price + Current Cost Price Lower Level is the total cost to a product manufactured. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).CurrentCostPriceLL<small> numeric <br/> Costs+Prices</small> | 
| Future Cost Price |  |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).FutureCostPrice<small> numeric <br/> Costs+Prices</small> | 
| Future Cost Price Lower Level |  |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).FutureCostPriceLL<small> numeric <br/> Costs+Prices</small> | 
| Percent | Percentage | The Percent indicates the percentage used. | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).Percent<small> numeric(10) <br/> Integer</small> | 
| Current Quantity | Current Quantity |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).CurrentQty<small> numeric <br/> Quantity</small> | 
| Cost Frozen | Indicated that the Standard Cost is frozen |  | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).IsCostFrozen<small> character(1) <br/> Yes-No</small> | 
| Accumulated Amt | Total Amount | Sum of all amounts | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).CumulatedAmt<small> numeric <br/> Amount</small> | 
| Accumulated Qty | Total Quantity | Sum of the quantities | [m_cost](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_cost.html).CumulatedQty<small> numeric <br/> Quantity</small> | 


### Tab: Reserved Quantity Log

**[Created:** 01/11/2021 - **Updated:** 01/11/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 160: Reserved Quantity Log - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).DocumentNo<small> character varying(255) <br/> String</small> | 
| Line | Line No |  | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).LineNo<small> numeric(10) <br/> Integer</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 
| Old Current Quantity | Old current quantity before the processing of M_CostDetail |  | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).OldQty<small> numeric <br/> Quantity</small> | 
| Delta Quantity | Quantity Difference |  | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).DeltaQty<small> numeric <br/> Quantity</small> | 
| New Current Quantity | New current quantity after processing of M_CostDetail |  | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).NewQty<small> numeric <br/> Quantity</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 


### Tab: Ordered Quantity Log

**[Created:** 01/11/2021 - **Updated:** 01/11/2021 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 170: Ordered Quantity Log - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).AD_Client_ID<small> numeric(10) <br/> Search</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).DocumentNo<small> character varying(255) <br/> String</small> | 
| Line | Line No |  | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).LineNo<small> numeric(10) <br/> Integer</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 
| Old Current Quantity | Old current quantity before the processing of M_CostDetail |  | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).OldQty<small> numeric <br/> Quantity</small> | 
| Delta Quantity | Quantity Difference |  | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).DeltaQty<small> numeric <br/> Quantity</small> | 
| New Current Quantity | New current quantity after processing of M_CostDetail |  | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).NewQty<small> numeric <br/> Quantity</small> | 
| Created | Date this record was created | The Created field indicates the date that this record was created. | [m_storagereservationlog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_storagereservationlog.html).Created<small> timestamp without time zone <br/> Date+Time</small> | 


