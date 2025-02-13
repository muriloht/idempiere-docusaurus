# Window: Web Store

**[Created:** 02/05/2005 - **Updated:** 03/05/2020 **]**  
**Description:** Define Web Store  
**Help:** Define the web store setup.  
![](/img/docs/manual/WebStore-Window_iDempiere_v12.0.0.png)

### Tab: Web Store

**[Created:** 02/05/2005 - **Updated:** 10/03/2022 **]**   
**Description:** Define Web Store  
**Help:** Define the web store settings. The web server context must be unique and determines the settings used in the actual transaction. The selected warehouse determines the organization.  The email settings are tested with the tenant email settings.  
**Tab Level:** 0

Table 10: Web Store - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| URL | Full URL address - e.g. http://www.idempiere.org | The URL defines an fully qualified web address like http://www.idempiere.org | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).URL<small> character varying(120) <br/> URL</small> | 
| Web Context | Web Server Context - e.g. /wstore | Unique Web Server Context for this Web Store - will set context-root in application.xml.The web context usually starts with / and needs to be a valid context name (not checked). | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WebContext<small> character varying(20) <br/> String</small> | 
| Stylesheet | CSS (Stylesheet) used | Base Stylesheet (.css file) to use - if empty, the default (standard.css) is used. The Style sheet can be a URL. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).Stylesheet<small> character varying(60) <br/> String</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).SalesRep_ID<small> numeric(10) <br/> Search</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| Price List | Unique identifier of a Price List | Price Lists are used to determine the pricing, margin and cost of items purchased or sold. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).M_PriceList_ID<small> numeric(10) <br/> Table Direct</small> | 
| Payment Term | The terms of Payment (timing, discount) | Payment Terms identify the method and timing of payment. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).C_PaymentTerm_ID<small> numeric(10) <br/> Table Direct</small> | 
| Web Store Info | Web Store Header Information | Display HTML Info in the Web Store - by default in the header. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WebInfo<small> character varying(2000) <br/> Text</small> | 
| Web Store EMail | EMail address used as the sender (From) | The EMail address is used to send mails to users of the web store | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WStoreEMail<small> character varying(60) <br/> String</small> | 
| Web Order EMail | EMail address to receive notifications when web orders were processed | When processing a web order, a confirmation is sent to the EMail address of the customer from the request EMail address copying this email address when entered. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WebOrderEMail<small> character varying(60) <br/> String</small> | 
| WebStore User | User ID of the Web Store EMail address | User ID to connect to the Mail Server | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WStoreUser<small> character varying(60) <br/> String</small> | 
| WebStore Password | Password of the Web Store EMail address | Password to connect to the Mail Server | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WStoreUserPW<small> character varying(20) <br/> String</small> | 
| EMail Header | Header added to EMails | The header is added to every email. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).EMailHeader<small> character varying(2000) <br/> Text</small> | 
| EMail Footer | Footer added to EMails | The footer is added to every email. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).EMailFooter<small> character varying(2000) <br/> Text</small> | 
| Menu Orders | Show Menu Orders |  | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsMenuOrders<small> character(1) <br/> Yes-No</small> | 
| Menu Shipments | Show Menu Shipments |  | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsMenuShipments<small> character(1) <br/> Yes-No</small> | 
| Menu Invoices | Show Menu Invoices |  | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsMenuInvoices<small> character(1) <br/> Yes-No</small> | 
| Menu Assets | Show Menu Assets |  | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsMenuAssets<small> character(1) <br/> Yes-No</small> | 
| Menu Payments | Show Menu Payments |  | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsMenuPayments<small> character(1) <br/> Yes-No</small> | 
| Menu RfQs | Show Menu RfQs |  | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsMenuRfQs<small> character(1) <br/> Yes-No</small> | 
| Menu Requests | Show Menu Requests |  | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsMenuRequests<small> character(1) <br/> Yes-No</small> | 
| Menu Registrations | Show Menu Registrations |  | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsMenuRegistrations<small> character(1) <br/> Yes-No</small> | 
| Menu Interests | Show Menu Interests |  | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsMenuInterests<small> character(1) <br/> Yes-No</small> | 
| Menu Contact | Show Menu Contact |  | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).IsMenuContact<small> character(1) <br/> Yes-No</small> | 
| Web Parameter 1 | Web Site Parameter 1 (default: header image) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam1 - By default, it is positioned on the upper left side with 130 pixel width. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WebParam1<small> character varying(2000) <br/> Text</small> | 
| Web Parameter 2 | Web Site Parameter 2 (default index page) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam2 - By default, it is positioned after the header on the web store index page. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WebParam2<small> character varying(2000) <br/> Text</small> | 
| Web Parameter 3 | Web Site Parameter 3 (default left - menu) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam3 - By default, it is positioned at the end in the menu column with 130 pixel width. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WebParam3<small> character varying(2000) <br/> Text</small> | 
| Web Parameter 4 | Web Site Parameter 4 (default footer left) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam4 - By default, it is positioned on the left side of the footer with 130 pixel width. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WebParam4<small> character varying(2000) <br/> Text</small> | 
| Web Parameter 5 | Web Site Parameter 5 (default footer center) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam5 - By default, it is positioned in the center of the footer. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WebParam5<small> character varying(2000) <br/> Text</small> | 
| Web Parameter 6 | Web Site Parameter 6 (default footer right) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam6 - By default, it is positioned on the right side of the footer. | [w_store](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store.html).WebParam6<small> character varying(2000) <br/> Text</small> | 


### Tab: Store Translation

**[Created:** 02/05/2005 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Store Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Web Store | A Web Store of the Tenant |  | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).W_Store_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Web Store Info | Web Store Header Information | Display HTML Info in the Web Store - by default in the header. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).WebInfo<small> character varying(2000) <br/> Text</small> | 
| EMail Header | Header added to EMails | The header is added to every email. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).EMailHeader<small> character varying(2000) <br/> Text</small> | 
| EMail Footer | Footer added to EMails | The footer is added to every email. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).EMailFooter<small> character varying(2000) <br/> Text</small> | 
| Web Parameter 1 | Web Site Parameter 1 (default: header image) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam1 - By default, it is positioned on the upper left side with 130 pixel width. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).WebParam1<small> character varying(2000) <br/> Text</small> | 
| Web Parameter 2 | Web Site Parameter 2 (default index page) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam2 - By default, it is positioned after the header on the web store index page. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).WebParam2<small> character varying(2000) <br/> Text</small> | 
| Web Parameter 3 | Web Site Parameter 3 (default left - menu) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam3 - By default, it is positioned at the end in the menu column with 130 pixel width. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).WebParam3<small> character varying(2000) <br/> Text</small> | 
| Web Parameter 4 | Web Site Parameter 4 (default footer left) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam4 - By default, it is positioned on the left side of the footer with 130 pixel width. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).WebParam4<small> character varying(2000) <br/> Text</small> | 
| Web Parameter 5 | Web Site Parameter 5 (default footer center) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam5 - By default, it is positioned in the center of the footer. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).WebParam5<small> character varying(2000) <br/> Text</small> | 
| Web Parameter 6 | Web Site Parameter 6 (default footer right) | The parameter could be used in the JSP page for variables like logos, passwords, URLs or entire HTML blocks. The access is via ctx.webParam6 - By default, it is positioned on the right side of the footer. | [w_store_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_store_trl.html).WebParam6<small> character varying(2000) <br/> Text</small> | 


### Tab: Web Store Message

**[Created:** 02/05/2005 - **Updated:** 03/05/2020 **]**   
**Description:** Definine Web Store Messages  
**Help:**   
**Tab Level:** 1

Table 30: Web Store Message - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [w_mailmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [w_mailmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Web Store | A Web Store of the Tenant |  | [w_mailmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg.html).W_Store_ID<small> numeric(10) <br/> Table Direct</small> | 
| Message Type | Mail Message Type |  | [w_mailmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg.html).MailMsgType<small> character(2) <br/> List</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [w_mailmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [w_mailmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [w_mailmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Subject | Email Message Subject | Subject of the EMail | [w_mailmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg.html).Subject<small> character varying(255) <br/> Text</small> | 
| Message | EMail Message | Message of the EMail | [w_mailmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg.html).Message<small> character varying(2000) <br/> Text</small> | 
| Message 2 | Optional second part of the EMail Message | Message of the EMail | [w_mailmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg.html).Message2<small> character varying(2000) <br/> Text</small> | 
| Message 3 | Optional third part of the EMail Message | Message of the EMail | [w_mailmsg](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg.html).Message3<small> character varying(2000) <br/> Text</small> | 


### Tab: Message Translation

**[Created:** 02/05/2005 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 40: Message Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [w_mailmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [w_mailmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Mail Message | Web Store Mail Message Template |  | [w_mailmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg_trl.html).W_MailMsg_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [w_mailmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [w_mailmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [w_mailmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Subject | Email Message Subject | Subject of the EMail | [w_mailmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg_trl.html).Subject<small> character varying(255) <br/> Text</small> | 
| Message | EMail Message | Message of the EMail | [w_mailmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg_trl.html).Message<small> character varying(2000) <br/> Text</small> | 
| Message 2 | Optional second part of the EMail Message | Message of the EMail | [w_mailmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg_trl.html).Message2<small> character varying(2000) <br/> Text</small> | 
| Message 3 | Optional third part of the EMail Message | Message of the EMail | [w_mailmsg_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/w_mailmsg_trl.html).Message3<small> character varying(2000) <br/> Text</small> | 


