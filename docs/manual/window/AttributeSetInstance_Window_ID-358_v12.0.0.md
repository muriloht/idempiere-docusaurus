# Window: Attribute Set Instance

**[Created:** 12/09/2005 - **Updated:** 12/09/2005 **]**  
**Description:** View Attribute Set Instance detail and use  
**Help:**   
![](/img/docs/manual/AttributeSetInstance-Window_iDempiere_v12.0.0.png)

### Tab: Instance

**[Created:** 12/09/2005 - **Updated:** 12/09/2005 **]**   
**Description:** Attribute Set Instance  
**Help:**   
**Tab Level:** 0

Table 10: Instance - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_attributesetinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributesetinstance.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_attributesetinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributesetinstance.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_attributesetinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributesetinstance.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> ID</small> | 
| Attribute Set | Product Attribute Set | Define Product Attribute Sets to add additional attributes and values to the product. You need to define a Attribute Set if you want to enable Serial and Lot Number tracking. | [m_attributesetinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributesetinstance.html).M_AttributeSet_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_attributesetinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributesetinstance.html).Description<small> character varying(1023) <br/> String</small> | 
| Lot | Product Lot Definition | The individual Lot of a Product | [m_attributesetinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributesetinstance.html).M_Lot_ID<small> numeric(10) <br/> Search</small> | 
| Lot No | Lot number (alphanumeric) | The Lot Number indicates the specific lot that a product was part of. | [m_attributesetinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributesetinstance.html).Lot<small> character varying(40) <br/> String</small> | 
| Guarantee Date | Date when guarantee expires | Date when the normal guarantee or availability expires | [m_attributesetinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributesetinstance.html).GuaranteeDate<small> timestamp without time zone <br/> Date</small> | 
| Serial No | Product Serial Number | The Serial Number identifies a tracked, warranted product.  It can only be used when the quantity is 1. | [m_attributesetinstance](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_attributesetinstance.html).SerNo<small> character varying(40) <br/> String</small> | 


### Tab: Shipment, Receipt

**[Created:** 12/09/2005 - **Updated:** 12/09/2005 **]**   
**Description:** Material Shipment and Receipt Lines  
**Help:**   
**Tab Level:** 1

Table 20: Shipment, Receipt - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_inoutlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inoutlinema_v.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_inoutlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inoutlinema_v.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_inoutlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inoutlinema_v.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Receipt | Material Receipt Document | The Material Shipment / Receipt | [m_inoutlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inoutlinema_v.html).M_InOut_ID<small> numeric(10) <br/> Search</small> | 
| Receipt Line | Line on Receipt document |  | [m_inoutlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inoutlinema_v.html).M_InOutLine_ID<small> numeric(10) <br/> Search</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [m_inoutlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inoutlinema_v.html).Line<small> numeric(10) <br/> Integer</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [m_inoutlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inoutlinema_v.html).M_Locator_ID<small> numeric(10) <br/> Search</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_inoutlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inoutlinema_v.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Movement Quantity | Quantity of a product moved. | The Movement Quantity indicates the quantity of a product that has been moved. | [m_inoutlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_inoutlinema_v.html).MovementQty<small> numeric <br/> Quantity</small> | 


### Tab: Movement

**[Created:** 12/09/2005 - **Updated:** 12/09/2005 **]**   
**Description:** Material Movement Lines  
**Help:**   
**Tab Level:** 1

Table 30: Movement - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_movementlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_movementlinema_v.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_movementlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_movementlinema_v.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [m_movementlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_movementlinema_v.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Product Attribute</small> | 
| Inventory Move | Movement of Inventory | The Inventory Movement uniquely identifies a group of movement lines. | [m_movementlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_movementlinema_v.html).M_Movement_ID<small> numeric(10) <br/> Search</small> | 
| Move Line | Inventory Move document Line | The Movement Line indicates the inventory movement document line (if applicable) for this transaction | [m_movementlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_movementlinema_v.html).M_MovementLine_ID<small> numeric(10) <br/> Search</small> | 
| Line No | Unique line for this document | Indicates the unique line for a document.  It will also control the display order of the lines within a document. | [m_movementlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_movementlinema_v.html).Line<small> numeric(10) <br/> Integer</small> | 
| Locator | Warehouse Locator | The Locator indicates where in a Warehouse a product is located. | [m_movementlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_movementlinema_v.html).M_Locator_ID<small> numeric(10) <br/> Table Direct</small> | 
| Locator To | Location inventory is moved to | The Locator To indicates the location where the inventory is being moved to. | [m_movementlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_movementlinema_v.html).M_LocatorTo_ID<small> numeric(10) <br/> Table</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_movementlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_movementlinema_v.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Movement Quantity | Quantity of a product moved. | The Movement Quantity indicates the quantity of a product that has been moved. | [m_movementlinema_v](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_movementlinema_v.html).MovementQty<small> numeric <br/> Quantity</small> | 


### Tab: Invoice

**[Created:** 12/09/2005 - **Updated:** 12/09/2005 **]**   
**Description:** AP / AR Invoice Lines  
**Help:**   
**Tab Level:** 1

Table 40: Invoice - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Attribute Set Instance | Product Attribute Set Instance | The values of the actual Product Attribute Instances.  The product level attributes are defined on Product level. | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).M_AttributeSetInstance_ID<small> numeric(10) <br/> Search</small> | 
| Invoice | Invoice Identifier | The Invoice Document. | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).C_Invoice_ID<small> numeric(10) <br/> Search</small> | 
| Invoice Line | Invoice Detail Line | The Invoice Line uniquely identifies a single line of an Invoice. | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).C_InvoiceLine_ID<small> numeric(10) <br/> Search</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Quantity Invoiced | Invoiced Quantity | The Invoiced Quantity indicates the quantity of a product that have been invoiced. | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).QtyInvoiced<small> numeric <br/> Quantity</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Unit Price | Actual Price | The Actual or Unit Price indicates the Price for a product in source currency. | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).PriceActual<small> numeric <br/> Costs+Prices</small> | 
| Lot No | Lot number (alphanumeric) | The Lot Number indicates the specific lot that a product was part of. | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).Lot<small> character varying(40) <br/> String</small> | 
| Lot | Product Lot Definition | The individual Lot of a Product | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).M_Lot_ID<small> numeric(10) <br/> Table Direct</small> | 
| Serial No | Product Serial Number | The Serial Number identifies a tracked, warranted product.  It can only be used when the quantity is 1. | [rv_c_invoiceline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/rv_c_invoiceline.html).SerNo<small> character varying(40) <br/> String</small> | 


