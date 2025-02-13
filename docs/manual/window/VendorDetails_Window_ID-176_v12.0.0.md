# Window: Vendor Details

**[Created:** 25/01/2000 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Vendor Details  
**Help:** The Vendor Details Window allows you to display and maintain all products for a selected Vendor.  
![](/img/docs/manual/VendorDetails-Window_iDempiere_v12.0.0.png)

### Tab: Vendor

**[Created:** 25/01/2000 - **Updated:** 02/01/2000 **]**   
**Description:** Vendor  
**Help:** The Vendor Tab displays the Vendors.  A Vendor is selected and all products for that Vendor will be displayed.  
**Tab Level:** 0

Table 10: Vendor - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Name<small> character varying(120) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Description<small> character varying(255) <br/> String</small> | 
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).C_BP_Group_ID<small> numeric(10) <br/> Table Direct</small> | 
| Open Balance | Total Open Balance Amount in primary Accounting Currency | The Total Open Balance Amount is the calculated open item amount for Customer and Vendor activity.  If the Balance is below zero, we owe the Business Partner.  The amount is used for Credit Management.Invoices and Payment Allocations determine the Open Balance (i.e. not Orders or Payments). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).TotalOpenBalance<small> numeric <br/> Amount</small> | 


### Tab: Product Details

**[Created:** 25/01/2000 - **Updated:** 02/01/2000 **]**   
**Description:** Product Details  
**Help:** The Product Details Tab allows you to display and maintain all products for a selected Vendor.  
**Tab Level:** 1

Table 20: Product Details - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Quality Rating | Method for rating vendors | The Quality Rating indicates how a vendor is rated (higher number = higher quality) | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).QualityRating<small> numeric <br/> Integer</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_product_po](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product_po.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
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


