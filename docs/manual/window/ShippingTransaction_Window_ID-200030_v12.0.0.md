# Window: Shipping Transaction

**[Created:** 14/12/2012 - **Updated:** 14/12/2012 **]**  
**Description:** Shipping Transactions  
**Help:**   
![](/img/docs/manual/ShippingTransaction-Window_iDempiere_v12.0.0.png)

### Tab: Shipping Transaction

**[Created:** 14/12/2012 - **Updated:** 14/12/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Shipping Transaction - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).AD_User_ID<small> numeric(10) <br/> Table Direct</small> | 
| Warehouse | Storage Warehouse and Service Point | The Warehouse identifies a unique Warehouse where products are stored or Services are provided. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).M_Warehouse_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sales Representative | Sales Representative or Company Agent | The Sales Representative indicates the Sales Rep for this Region.  Any Sales Rep must be a valid internal user. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).SalesRep_ID<small> numeric(10) <br/> Table</small> | 
| Latest Pickup Time |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).LatestPickupTime<small> timestamp without time zone <br/> Time</small> | 
| Date Received | Date a product was received | The Date Received indicates the date that product was received. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).DateReceived<small> timestamp without time zone <br/> Date</small> | 
| Info Received | Information of the receipt of the package (acknowledgement) |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).ReceivedInfo<small> character varying(255) <br/> String</small> | 
| Weight | Weight of a product | The Weight indicates the weight  of the product in the Weight UOM of the Tenant | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).Weight<small> numeric <br/> Quantity</small> | 
| UOM for Weight | Standard Unit of Measure for Weight | The Standard UOM for Weight indicates the UOM to use for products referenced by weight in a document. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).C_UOM_Weight_ID<small> numeric(10) <br/> Table</small> | 
| Length |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).Length<small> numeric <br/> Quantity</small> | 
| UOM for Length | Standard Unit of Measure for Length | The Standard UOM for Length indicates the UOM to use for products referenced by length in a document. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).C_UOM_Length_ID<small> numeric(10) <br/> Table</small> | 
| Width |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).Width<small> numeric <br/> Quantity</small> | 
| Height |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).Height<small> numeric <br/> Quantity</small> | 
| Shipper | Method or manner of product delivery | The Shipper indicates the method of delivering product | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).M_Shipper_ID<small> numeric(10) <br/> Table</small> | 
| Shipping Processor |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).M_ShippingProcessor_ID<small> numeric(10) <br/> Table</small> | 
| Ship Date | Shipment Date/Time | Actual Date/Time of Shipment (pick up) | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).ShipDate<small> timestamp without time zone <br/> Date</small> | 
| Box Count |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).BoxCount<small> numeric(10) <br/> Integer</small> | 
| Shipper Packaging |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).M_ShipperPackaging_ID<small> numeric(10) <br/> Table</small> | 
| Shipper Labels |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).M_ShipperLabels_ID<small> numeric(10) <br/> Table</small> | 
| Shipper Pickup Types |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).M_ShipperPickupTypes_ID<small> numeric(10) <br/> Table</small> | 
| Insurance |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).Insurance<small> character(1) <br/> List</small> | 
| Insured Amount |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).InsuredAmount<small> numeric <br/> Amount</small> | 
| Freight Charges |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).FreightCharges<small> character varying(10) <br/> List</small> | 
| Freight Terms |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).FOB<small> character varying(10) <br/> List</small> | 
| Shipper Account Number |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).ShipperAccount<small> character varying(40) <br/> String</small> | 
| Duties Shipper Account |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).DutiesShipperAccount<small> character varying(40) <br/> String</small> | 
| Invoice Location | Business Partner Location for invoicing |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).Bill_Location_ID<small> numeric(10) <br/> Table</small> | 
| Customs Value |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).CustomsValue<small> numeric <br/> Costs+Prices</small> | 
| Freight Amount | Freight Amount | The Freight Amount indicates the amount charged for Freight in the document currency. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).FreightAmt<small> numeric <br/> Costs+Prices</small> | 
| Handling Charge |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).HandlingCharge<small> numeric <br/> Amount</small> | 
| Added Handling |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsAddedHandling<small> character(1) <br/> Yes-No</small> | 
| COD |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).CashOnDelivery<small> character(1) <br/> Yes-No</small> | 
| COD Amount |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).CODAmount<small> numeric <br/> Costs+Prices</small> | 
| Payment Rule | How you pay the invoice | The Payment Rule indicates the method of invoice payment. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).PaymentRule<small> character(1) <br/> List</small> | 
| Delivery Confirmation | EMail Delivery confirmation |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).DeliveryConfirmation<small> character(1) <br/> Yes-No</small> | 
| Delivery Confirmation Type |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).DeliveryConfirmationType<small> character varying(30) <br/> List</small> | 
| Verbal Confirmation |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsVerbalConfirmation<small> character(1) <br/> Yes-No</small> | 
| Saturday Delivery |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsSaturdayDelivery<small> character(1) <br/> Yes-No</small> | 
| Saturday Pickup |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsSaturdayPickup<small> character(1) <br/> Yes-No</small> | 
| Future Day Shipment |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsFutureDayShipment<small> character(1) <br/> Yes-No</small> | 
| Residential |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsResidential<small> character(1) <br/> Yes-No</small> | 
| Home Delivery Premium Type |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).HomeDeliveryPremiumType<small> character varying(30) <br/> List</small> | 
| Phone Number |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).HomeDeliveryPremiumPhone<small> character varying(30) <br/> String</small> | 
| Date |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).HomeDeliveryPremiumDate<small> timestamp without time zone <br/> Date</small> | 
| Hazardous Materials |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsHazMat<small> character(1) <br/> Yes-No</small> | 
| Dot Hazard Class or Division |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).DotHazardClassOrDivision<small> character varying(30) <br/> List</small> | 
| Cargo Aircraft Only |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsCargoAircraftOnly<small> character(1) <br/> Yes-No</small> | 
| Accessible |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsAccessible<small> character(1) <br/> Yes-No</small> | 
| Dry Ice |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsDryIce<small> character(1) <br/> Yes-No</small> | 
| Dry Ice Weight |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).DryIceWeight<small> numeric <br/> Amount</small> | 
| Hold At Location |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsHoldAtLocation<small> character(1) <br/> Yes-No</small> | 
| Hold Address |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).HoldAddress_ID<small> numeric(10) <br/> Table</small> | 
| Ignore Zip State Not Match |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsIgnoreZipStateNotMatch<small> character(1) <br/> Yes-No</small> | 
| Ignore Zip Not Found |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsIgnoreZipNotFound<small> character(1) <br/> Yes-No</small> | 
| Dutiable |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsDutiable<small> character(1) <br/> Yes-No</small> | 
| Alternate Return Address |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsAlternateReturnAddress<small> character(1) <br/> Yes-No</small> | 
| Return Partner |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).ReturnBPartner_ID<small> numeric(10) <br/> Search</small> | 
| Return Location |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).ReturnLocation_ID<small> numeric(10) <br/> Table</small> | 
| Return User/Contact |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).ReturnUser_ID<small> numeric(10) <br/> Table</small> | 
| Notification Type | Type of Notifications | Emails or Notification sent out for Request Updates, etc. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).NotificationType<small> character varying(2) <br/> List</small> | 
| Notification Message |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).NotificationMessage<small> character varying(255) <br/> String</small> | 
| Price | Price | The Price indicates the Price for a product or service. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).Price<small> numeric <br/> Costs+Prices</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Surcharges |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).Surcharges<small> numeric <br/> Costs+Prices</small> | 
| Tracking No | Number to track the shipment |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).TrackingNo<small> character varying(255) <br/> String</small> | 
| Tracking Info |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).TrackingInfo<small> character varying(255) <br/> String</small> | 
| Response Message |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).ShippingRespMessage<small> character varying(2000) <br/> Text</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).Description<small> character varying(255) <br/> String</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Action | Indicates the Action to be performed | The Action field is a drop down list box which indicates the Action to be performed for this Item. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).Action<small> character varying(2) <br/> List</small> | 
| Privileged Rate |  |  | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).IsPriviledgedRate<small> character(1) <br/> Yes-No</small> | 
| Order | Order | The Order is a control document.  The  Order is complete when the quantity ordered is the same as the quantity shipped and invoiced.  When you close an order, unshipped (backordered) quantities are cancelled. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).C_Order_ID<small> numeric(10) <br/> Search</small> | 
| Order Reference | Transaction Reference Number (Sales Order, Purchase Order) of your Business Partner | The business partner order reference is the order reference for this specific transaction; Often Purchase Order numbers are given to print on Invoices for easier reference.  A standard number can be defined in the Business Partner (Customer) window. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).POReference<small> character varying(30) <br/> String</small> | 
| Shipment/Receipt | Material Shipment Document | The Material Shipment / Receipt | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).M_InOut_ID<small> numeric(10) <br/> Search</small> | 
| Package | Shipment Package | A Shipment can have one or more Packages.  A Package may be individually tracked. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).M_Package_ID<small> numeric(10) <br/> Search</small> | 
| Invoice | Invoice Identifier | The Invoice Document. | [m_shippingtransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransaction.html).C_Invoice_ID<small> numeric(10) <br/> Search</small> | 


### Tab: Shipping Transaction Line

**[Created:** 14/12/2012 - **Updated:** 14/12/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Shipping Transaction Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Shipping Transaction |  |  | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).M_ShippingTransaction_ID<small> numeric(10) <br/> Search</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).Description<small> character varying(255) <br/> String</small> | 
| Master Tracking No |  |  | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).MasterTrackingNo<small> character varying(255) <br/> String</small> | 
| Tracking No | Number to track the shipment |  | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).TrackingNo<small> character varying(255) <br/> String</small> | 
| Price | Price | The Price indicates the Price for a product or service. | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).Price<small> numeric <br/> Costs+Prices</small> | 
| Weight | Weight of a product | The Weight indicates the weight  of the product in the Weight UOM of the Tenant | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).Weight<small> numeric <br/> Quantity</small> | 
| UOM for Weight | Standard Unit of Measure for Weight | The Standard UOM for Weight indicates the UOM to use for products referenced by weight in a document. | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).C_UOM_Weight_ID<small> numeric(10) <br/> Table</small> | 
| Length |  |  | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).Length<small> numeric <br/> Quantity</small> | 
| UOM for Length | Standard Unit of Measure for Length | The Standard UOM for Length indicates the UOM to use for products referenced by length in a document. | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).C_UOM_Length_ID<small> numeric(10) <br/> Table</small> | 
| Width |  |  | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).Width<small> numeric <br/> Quantity</small> | 
| Height |  |  | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).Height<small> numeric <br/> Quantity</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Package MPS |  |  | [m_shippingtransactionline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_shippingtransactionline.html).M_PackageMPS_ID<small> numeric(10) <br/> Search</small> | 


