# Window: POS Terminal

**[Created:** 09/07/2004 - **Updated:** 17/02/2022 **]**  
**Description:** Maintain your Point of Sales Terminal  
**Help:** The POS Terminal defines the defaults and functions available for the POS Form  
![](/img/docs/manual/POSTerminal-Window_iDempiere_v12.0.0.png)

### Tab: POS Terminal

**[Created:** 09/07/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Point of Sales Terminal  
**Help:** The POS Terminal defines the defaults and functions available for the POS Form  
**Tab Level:** 0

Table 10: POS Terminal - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Price List | Unique identifier of a Price List | Price Lists are used to determine the pricing, margin and cost of items purchased or sold. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).M_PriceList_ID<small> numeric(10) <br/> Table Direct</small> | 
| Modify Price | Allow modifying the price | Allow modifying the price for products with a non zero price | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).IsModifyPrice<small> character(1) <br/> Yes-No</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| Bank Account | Account at the Bank | The Bank Account identifies an account at this Bank. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).C_BankAccount_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Template B.Partner | Business Partner used for creating new Business Partners on the fly | When creating a new Business Partner from the Business Partner Search Field (right-click: Create), the selected business partner is used as a template, e.g. to define price list, payment terms, etc. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).C_BPartnerCashTrx_ID<small> numeric(10) <br/> Search</small> | 
| POS Key Layout | POS Function Key Layout | POS Function Key Layout | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).C_POSKeyLayout_ID<small> numeric(10) <br/> Table Direct</small> | 
| Auto Logout Delay | Automatically logout if terminal inactive for this period | Measured in seconds, zero for no automatic logout | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).AutoLogoutDelay<small> numeric(10) <br/> Integer</small> | 
| On Screen Keyboard layout | The key layout to use for on screen keyboard for text fields. | If empty, the on screen keyboard will not be used. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).OSK_KeyLayout_ID<small> numeric(10) <br/> Table</small> | 
| On Screen Number Pad layout | The key layout to use for on screen number pad for numeric fields. | If empty, the on screen numberpad will not be used. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).OSNP_KeyLayout_ID<small> numeric(10) <br/> Table</small> | 
| Printer Name | Name of the Printer | Internal (Operating System) Name of the Printer; Please mote that the printer name may be different on different tenants. Enter a printer name, which applies to ALL tenants (e.g. printer on a server). If none is entered, the default printer is used. You specify your default printer when you log in. You can also change the default printer in Preferences. | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).PrinterName<small> character varying(60) <br/> String</small> | 
| Cash Drawer |  |  | [c_pos](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_pos.html).CashDrawer<small> character varying(120) <br/> String</small> | 


