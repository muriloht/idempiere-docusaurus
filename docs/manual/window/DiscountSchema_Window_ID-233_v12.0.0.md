# Window: Discount Schema

**[Created:** 28/12/2001 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Trade Discount Schema  
**Help:** Trade discount schema calculates the trade discount percentage  
![](/img/docs/manual/DiscountSchema-Window_iDempiere_v12.0.0.png)

### Tab: Discount Schema

**[Created:** 28/12/2001 - **Updated:** 30/09/2009 **]**   
**Description:** Trade Discount Schema  
**Help:** Trade discount schema calculates the trade discount percentage  
**Tab Level:** 0

Table 10: Discount Schema - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Discount Type | Type of trade discount calculation | Type of procedure used to calculate the trade discount percentage | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).DiscountType<small> character(1) <br/> List</small> | 
| Script | Dynamic Java Language Script to calculate result | Use Java language constructs to define the result of the calculation | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).Script<small> character varying(2000) <br/> Text</small> | 
| B.Partner Flat Discount | Use flat discount defined on Business Partner Level | For calculation of the discount, use the discount defined on Business Partner Level | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).IsBPartnerFlatDiscount<small> character(1) <br/> Yes-No</small> | 
| Flat Discount % | Flat discount percentage |  | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).FlatDiscount<small> numeric <br/> Number</small> | 
| Quantity based | Trade discount break level based on Quantity (not value) | The calculation of the trade discount level is based on the quantity of the order and not the value amount of the order | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).IsQuantityBased<small> character(1) <br/> Yes-No</small> | 
| Accumulation Level | Level for accumulative calculations |  | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).CumulativeLevel<small> character(1) <br/> List</small> | 
| Renumber | Renumber Discount entries |  | [m_discountschema](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschema.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Discount Break

**[Created:** 28/12/2001 - **Updated:** 15/12/2008 **]**   
**Description:** Trade discount based on breaks (steps)  
**Help:**   
**Tab Level:** 1

Table 30: Discount Break - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_discountschemabreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschemabreak.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_discountschemabreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschemabreak.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Discount Schema | Schema to calculate the trade discount percentage | After calculation of the (standard) price, the trade discount percentage is calculated and applied resulting in the final price. | [m_discountschemabreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschemabreak.html).M_DiscountSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_discountschemabreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschemabreak.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [m_discountschemabreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschemabreak.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | [m_discountschemabreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschemabreak.html).M_Product_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_discountschemabreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschemabreak.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Break Value | Low Value of trade discount break level | Starting Quantity or Amount Value for break level | [m_discountschemabreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschemabreak.html).BreakValue<small> numeric <br/> Number</small> | 
| B.Partner Flat Discount | Use flat discount defined on Business Partner Level | For calculation of the discount, use the discount defined on Business Partner Level | [m_discountschemabreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschemabreak.html).IsBPartnerFlatDiscount<small> character(1) <br/> Yes-No</small> | 
| Break Discount % | Trade Discount in Percent for the break level | Trade Discount in Percent for the break level | [m_discountschemabreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschemabreak.html).BreakDiscount<small> numeric <br/> Number</small> | 
| Fixed Price | Fixed Price for Product |  | [m_discountschemabreak](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_discountschemabreak.html).FixedPrice<small> numeric <br/> Costs+Prices</small> | 


