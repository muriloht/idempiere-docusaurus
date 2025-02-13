# Window: POS Key Layout

**[Created:** 09/07/2004 - **Updated:** 17/02/2022 **]**  
**Description:** POS Function Key Layout  
**Help:**   
![](/img/docs/manual/POSKeyLayout-Window_iDempiere_v12.0.0.png)

### Tab: POS Key Layout

**[Created:** 09/07/2004 - **Updated:** 02/01/2000 **]**   
**Description:** POS Function Key Layout  
**Help:** POS Function Key Layout  
**Tab Level:** 0

Table 10: POS Key Layout - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_poskeylayout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskeylayout.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_poskeylayout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskeylayout.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_poskeylayout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskeylayout.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_poskeylayout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskeylayout.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_poskeylayout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskeylayout.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_poskeylayout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskeylayout.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| POS Key Layout Type | The type of Key Layout | Keyboard: used for POS text field on screen keyboardNumberpad: used for POS numeric field on screen numberpadProduct: used to quickly add products to POS order | [c_poskeylayout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskeylayout.html).POSKeyLayoutType<small> character(1) <br/> List</small> | 
| Columns | Number of columns | The number of columns in the layout grid | [c_poskeylayout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskeylayout.html).Columns<small> numeric(10) <br/> Integer</small> | 
| Print Color | Color used for printing and display | Colors used for printing and display | [c_poskeylayout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskeylayout.html).AD_PrintColor_ID<small> numeric(10) <br/> Table Direct</small> | 
| Print Font | Maintain Print Font | Font used for printing | [c_poskeylayout](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskeylayout.html).AD_PrintFont_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: POS Key

**[Created:** 09/07/2004 - **Updated:** 02/01/2000 **]**   
**Description:** POS Function Key  
**Help:** POS Function Key Assignment  
**Tab Level:** 1

Table 20: POS Key - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| POS Key Layout | POS Function Key Layout | POS Function Key Layout | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).C_POSKeyLayout_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Key Layout | Key Layout to be displayed when this key is pressed |  | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).SubKeyLayout_ID<small> numeric(10) <br/> Table</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).Qty<small> numeric <br/> Quantity</small> | 
| Description |  |  | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).Text<small> character varying(22) <br/> String</small> | 
| Print Color | Color used for printing and display | Colors used for printing and display | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).AD_PrintColor_ID<small> numeric(10) <br/> Table Direct</small> | 
| Print Font | Maintain Print Font | Font used for printing | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).AD_PrintFont_ID<small> numeric(10) <br/> Table Direct</small> | 
| Column span | Number of columns spanned |  | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).SpanX<small> numeric(10) <br/> Integer</small> | 
| Row Span | Number of rows spanned |  | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).SpanY<small> numeric(10) <br/> Integer</small> | 
| Image | Image or Icon | Images and Icon can be used to display supported graphic formats (gif, jpg, png).You can either load the image (in the database) or point to a graphic via a URI (i.e. it can point to a resource, http address) | [c_poskey](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_poskey.html).AD_Image_ID<small> numeric(10) <br/> Image</small> | 


