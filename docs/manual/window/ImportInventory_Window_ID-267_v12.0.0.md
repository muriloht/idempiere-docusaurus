# Window: Import Inventory

**[Created:** 28/05/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Import Inventory Transactions  
**Help:** Validate and Import Inventory Transactions  
![](/img/docs/manual/ImportInventory-Window_iDempiere_v12.0.0.png)

### Tab: Inventory

**[Created:** 28/05/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Import Inventory  
**Help:** Validate and Import Inventory Transactions. The Locator is primarily determined by the Locator Key, then the Warehouse and X,Y,Z fields.A Physical Inventory is created per Warehouse and Movement Date.  
**Tab Level:** 0

Table 10: Inventory - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Import Inventory | Import Inventory Transactions |  | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).I_Inventory_ID<small> numeric(10) <br/> ID</small> | 
| Imported | Has this import been processed | The Imported check box indicates if this import has been processed. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).I_IsImported<small> character(1) <br/> Yes-No</small> | 
| Phys.Inventory | Parameters for a Physical Inventory | The Physical Inventory indicates a unique parameters for a physical inventory. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).M_Inventory_ID<small> numeric(10) <br/> Search</small> | 
| Phys.Inventory Line | Unique line in an Inventory document | The Physical Inventory Line indicates the inventory document line (if applicable) for this transaction | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).M_InventoryLine_ID<small> numeric(10) <br/> Search</small> | 
| Import Error Message | Messages generated from import process | The Import Error Message displays any error messages generated during the import process. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).I_ErrorMsg<small> character varying(2000) <br/> String</small> | 
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Type Name | Name of the Document Type |  | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).DocTypeName<small> character varying(60) <br/> String</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Movement Date | Date a product was moved in or out of inventory | The Movement Date indicates the date that a product moved in or out of inventory.  This is the result of a shipment, receipt or inventory movement. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).MovementDate<small> timestamp without time zone <br/> Date</small> | 
| Warehouse Key | Key of the Warehouse | Key to identify the Warehouse | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).WarehouseValue<small> character varying(40) <br/> String</small> | 
| Aisle (X) | X dimension, e.g., Aisle | The X dimension indicates the Aisle a product is located in. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).X<small> character varying(60) <br/> String</small> | 
| Bin (Y) | Y dimension, e.g., Bin | The Y dimension indicates the Bin a product is located in | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).Y<small> character varying(60) <br/> String</small> | 
| Level (Z) | Z dimension, e.g., Level | The Z dimension indicates the Level a product is located in. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).Z<small> character varying(60) <br/> String</small> | 
| Locator Key | Key of the Warehouse Locator |  | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).LocatorValue<small> character varying(40) <br/> String</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).M_Locator_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).Value<small> character varying(40) <br/> String</small> | 
| UPC/EAN | Bar Code (Universal Product Code or its superset European Article Number) | Use this field to enter the bar code for the product in any of the bar code symbologies (Codabar, Code 25, Code 39, Code 93, Code 128, UPC (A), UPC (E), EAN-13, EAN-8, ITF, ITF-14, ISBN, ISSN, JAN-13, JAN-8, POSTNET and FIM, MSI/Plessey, and Pharmacode) | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).UPC<small> character varying(30) <br/> String</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Lot No | Lot number (alphanumeric) | The Lot Number indicates the specific lot that a product was part of. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).Lot<small> character varying(20) <br/> String</small> | 
| Serial No | Product Serial Number | The Serial Number identifies a tracked, warranted product.  It can only be used when the quantity is 1. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).SerNo<small> character varying(20) <br/> String</small> | 
| Quantity book | Book Quantity | The Quantity Book indicates the line count stored in the system for a product in inventory | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).QtyBook<small> numeric <br/> Quantity</small> | 
| Quantity count | Counted Quantity | The Quantity Count indicates the actual inventory count taken for a product in inventory | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).QtyCount<small> numeric <br/> Quantity</small> | 
| Internal Use Qty | Internal Use Quantity removed from Inventory | Quantity of product inventory used internally (positive if taken out - negative if returned) | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).QtyInternalUse<small> numeric <br/> Quantity</small> | 
| Charge Name | Name of the Charge |  | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).ChargeName<small> character varying(60) <br/> String</small> | 
| Charge | Additional document charges | The Charge indicates a type of Charge (Handling, Shipping, Restocking) | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).C_Charge_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).Description<small> character varying(255) <br/> String</small> | 
| Current Cost Price | The currently used cost price |  | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).CurrentCostPrice<small> numeric <br/> Amount</small> | 
| Cost Adjustment Line | Unique line in an Inventory cost adjustment document | The Cost Adjustment Line indicates the inventory cost adjustment document line (if applicable) for this transaction | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).M_CostingLine_ID<small> numeric(10) <br/> Search</small> | 
| Import Inventory | Import Physical Inventory | The Parameters are default values for null import record values, they do not overwrite any data. | [i_inventory](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inventory.html).Processing<small> character(1) <br/> Button</small> | 


