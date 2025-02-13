# Window: RfQ Response

**[Created:** 23/03/2004 - **Updated:** 25/03/2022 **]**  
**Description:** Manage RfQ Responses  
**Help:**   
![](/img/docs/manual/RfQResponse-Window_iDempiere_v12.0.0.png)

### Tab: Response

**[Created:** 19/02/2004 - **Updated:** 20/05/2013 **]**   
**Description:** RfQ Response  
**Help:** Request for Quotation Response from a potential Vendor  
**Tab Level:** 0

Table 10: Response - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| RfQ | Request for Quotation | Request for Quotation to be sent out to vendors of a RfQ Topic. After Vendor selection, optionally create Sales Order or Quote for Customer as well as Purchase Order  for Vendor(s) | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).C_RfQ_ID<small> numeric(10) <br/> Search</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship from) address for this Business Partner | The Partner address indicates the location of a Business Partner | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Invited | Date when (last) invitation was sent |  | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).DateInvited<small> timestamp without time zone <br/> Date</small> | 
| Response Date | Date of the Response | Date of the Response | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).DateResponse<small> timestamp without time zone <br/> Date</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Price | Price | The Price indicates the Price for a product or service. | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).Price<small> numeric <br/> Costs+Prices</small> | 
| Work Start | Date when work is (planned to be) started |  | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).DateWorkStart<small> timestamp without time zone <br/> Date</small> | 
| Delivery Days | Number of Days (planned) until Delivery |  | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).DeliveryDays<small> numeric(10) <br/> Integer</small> | 
| Work Complete | Date when work is (planned to be) complete |  | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).DateWorkComplete<small> timestamp without time zone <br/> Date</small> | 
| Invite and Remind | EMail Invite or Remind Vendor to answer RfQ | Send Invitation/Reminder to Vendors to respond to RfQ per email | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).Processing<small> character(1) <br/> Button</small> | 
| Ranking | Relative Rank Number | One is the highest Rank | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).Ranking<small> numeric(10) <br/> Integer</small> | 
| Selected Winner | The response is the selected winner | The response is the selected winner. If selected on Response level, the line selections are ignored. | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).IsSelectedWinner<small> character(1) <br/> Yes-No</small> | 
| Purchase Order | Purchase Order | The Purchase Order is a control document.  The Purchase Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).C_Order_ID<small> numeric(10) <br/> Search</small> | 
| Check Complete | Check if Response is Complete based on RfQ settings |  | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).CheckComplete<small> character(1) <br/> Button</small> | 
| Complete | It is complete | Indication that this is complete | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).IsComplete<small> character(1) <br/> Yes-No</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [c_rfqresponse](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponse.html).Processed<small> character(1) <br/> Yes-No</small> | 


### Tab: Response Line

**[Created:** 19/02/2004 - **Updated:** 20/05/2013 **]**   
**Description:** RfQ Response Line  
**Help:** Request for Quotation Response Line from a potential Vendor  
**Tab Level:** 1

Table 20: Response Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| RfQ Line | Request for Quotation Line | Request for Quotation Line | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).C_RfQLine_ID<small> numeric(10) <br/> Table Direct</small> | 
| RfQ Response | Request for Quotation Response from a potential Vendor | Request for Quotation Response from a potential Vendor | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).C_RfQResponse_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Work Start | Date when work is (planned to be) started |  | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).DateWorkStart<small> timestamp without time zone <br/> Date</small> | 
| Delivery Days | Number of Days (planned) until Delivery |  | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).DeliveryDays<small> numeric(10) <br/> Integer</small> | 
| Work Complete | Date when work is (planned to be) complete |  | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).DateWorkComplete<small> timestamp without time zone <br/> Date</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).Help<small> character varying(2000) <br/> Text</small> | 
| Selected Winner | The response is the selected winner | The response is the selected winner. If selected on Response level, the line selections are ignored. | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).IsSelectedWinner<small> character(1) <br/> Yes-No</small> | 
| Self-Service | This is a Self-Service entry or this entry can be changed via Self-Service | Self-Service allows users to enter data or update their data.  The flag indicates, that this record was entered or created via Self-Service or that the user can change it via the Self-Service functionality. | [c_rfqresponseline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponseline.html).IsSelfService<small> character(1) <br/> Yes-No</small> | 


### Tab: Response Quantity

**[Created:** 19/02/2004 - **Updated:** 20/05/2013 **]**   
**Description:** RfQ Line Quantity Response  
**Help:** Request for Quotation Response Line Quantity from a potential Vendor  
**Tab Level:** 2

Table 30: Response Quantity - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_rfqresponselineqty](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponselineqty.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_rfqresponselineqty](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponselineqty.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| RfQ Response Line | Request for Quotation Response Line | Request for Quotation Response Line from a potential Vendor | [c_rfqresponselineqty](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponselineqty.html).C_RfQResponseLine_ID<small> numeric(10) <br/> Table Direct</small> | 
| RfQ Line Quantity | Request for Quotation Line Quantity | You may request a quotation for different quantities | [c_rfqresponselineqty](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponselineqty.html).C_RfQLineQty_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_rfqresponselineqty](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponselineqty.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Price | Price | The Price indicates the Price for a product or service. | [c_rfqresponselineqty](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponselineqty.html).Price<small> numeric <br/> Costs+Prices</small> | 
| Discount % | Discount in percent | The Discount indicates the discount applied or taken as a percentage. | [c_rfqresponselineqty](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponselineqty.html).Discount<small> numeric <br/> Number</small> | 
| Ranking | Relative Rank Number | One is the highest Rank | [c_rfqresponselineqty](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_rfqresponselineqty.html).Ranking<small> numeric(10) <br/> Integer</small> | 


