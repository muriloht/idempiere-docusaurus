# Window: Shipment Package

**[Created:** 06/12/2012 - **Updated:** 06/12/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/ShipmentPackage-Window_iDempiere_v12.0.0.png)

### Tab: Packages

**[Created:** 06/12/2012 - **Updated:** 06/12/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Packages - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document No | Document sequence number of the document | The document number is usually automatically generated by the system and determined by the document type of the document. If the document is not saved, the preliminary number is displayed in &quot;&quot;.If the document type of your document has no automatic document sequence defined, the field is empty if you create a new document. This is for documents which usually have an external number (like vendor invoice).  If you leave the field empty, the system will generate a document number for you. The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).DocumentNo<small> character varying(30) <br/> String</small> | 
| Shipment/Receipt | Material Shipment Document | The Material Shipment / Receipt | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).M_InOut_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Latest Pickup Time |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).LatestPickupTime<small> timestamp without time zone <br/> Time</small> | 
| Date Received | Date a product was received | The Date Received indicates the date that product was received. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).DateReceived<small> timestamp without time zone <br/> Date</small> | 
| Info Received | Information of the receipt of the package (acknowledgement) |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).ReceivedInfo<small> character varying(255) <br/> String</small> | 
| Weight | Weight of a product | The Weight indicates the weight  of the product in the Weight UOM of the Tenant | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).Weight<small> numeric <br/> Quantity</small> | 
| UOM for Weight | Standard Unit of Measure for Weight | The Standard UOM for Weight indicates the UOM to use for products referenced by weight in a document. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).C_UOM_Weight_ID<small> numeric(10) <br/> Table</small> | 
| Length |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).Length<small> numeric <br/> Quantity</small> | 
| UOM for Length | Standard Unit of Measure for Length | The Standard UOM for Length indicates the UOM to use for products referenced by length in a document. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).C_UOM_Length_ID<small> numeric(10) <br/> Table</small> | 
| Width |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).Width<small> numeric <br/> Quantity</small> | 
| Height |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).Height<small> numeric <br/> Quantity</small> | 
| Shipper | Method or manner of product delivery | The Shipper indicates the method of delivering product | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).M_Shipper_ID<small> numeric(10) <br/> Table</small> | 
| Ship Date | Shipment Date/Time | Actual Date/Time of Shipment (pick up) | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).ShipDate<small> timestamp without time zone <br/> Date</small> | 
| Box Count |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).BoxCount<small> numeric(10) <br/> Integer</small> | 
| Shipper Packaging |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).M_ShipperPackaging_ID<small> numeric(10) <br/> Table</small> | 
| Shipper Labels |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).M_ShipperLabels_ID<small> numeric(10) <br/> Table</small> | 
| Shipper Pickup Types |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).M_ShipperPickupTypes_ID<small> numeric(10) <br/> Table</small> | 
| Insured Amount |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).InsuredAmount<small> numeric <br/> Amount</small> | 
| Shipper Account Number |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).ShipperAccount<small> character varying(40) <br/> String</small> | 
| Duties Shipper Account |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).DutiesShipperAccount<small> character varying(40) <br/> String</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| Handling Charge |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).HandlingCharge<small> numeric <br/> Amount</small> | 
| Added Handling |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsAddedHandling<small> character(1) <br/> Yes-No</small> | 
| COD |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).CashOnDelivery<small> character(1) <br/> Yes-No</small> | 
| Payment Rule | How you pay the invoice | The Payment Rule indicates the method of invoice payment. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).PaymentRule<small> character(1) <br/> List</small> | 
| Delivery Confirmation | EMail Delivery confirmation |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).DeliveryConfirmation<small> character(1) <br/> Yes-No</small> | 
| Delivery Confirmation Type |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).DeliveryConfirmationType<small> character varying(30) <br/> List</small> | 
| Verbal Confirmation |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsVerbalConfirmation<small> character(1) <br/> Yes-No</small> | 
| Saturday Delivery |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsSaturdayDelivery<small> character(1) <br/> Yes-No</small> | 
| Saturday Pickup |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsSaturdayPickup<small> character(1) <br/> Yes-No</small> | 
| Future Day Shipment |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsFutureDayShipment<small> character(1) <br/> Yes-No</small> | 
| Residential |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsResidential<small> character(1) <br/> Yes-No</small> | 
| Home Delivery Premium Type |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).HomeDeliveryPremiumType<small> character varying(30) <br/> List</small> | 
| Phone Number |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).HomeDeliveryPremiumPhone<small> character varying(30) <br/> String</small> | 
| Date |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).HomeDeliveryPremiumDate<small> timestamp without time zone <br/> Date</small> | 
| Hazardous Materials |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsHazMat<small> character(1) <br/> Yes-No</small> | 
| Dot Hazard Class or Division |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).DotHazardClassOrDivision<small> character varying(30) <br/> List</small> | 
| Cargo Aircraft Only |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsCargoAircraftOnly<small> character(1) <br/> Yes-No</small> | 
| Accessible |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsAccessible<small> character(1) <br/> Yes-No</small> | 
| Dry Ice |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsDryIce<small> character(1) <br/> Yes-No</small> | 
| Dry Ice Weight |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).DryIceWeight<small> numeric <br/> Amount</small> | 
| Hold At Location |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsHoldAtLocation<small> character(1) <br/> Yes-No</small> | 
| Hold Address |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).HoldAddress_ID<small> numeric(10) <br/> Table</small> | 
| Ignore Zip State Not Match |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsIgnoreZipStateNotMatch<small> character(1) <br/> Yes-No</small> | 
| Ignore Zip Not Found |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsIgnoreZipNotFound<small> character(1) <br/> Yes-No</small> | 
| Dutiable |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).IsDutiable<small> character(1) <br/> Yes-No</small> | 
| Notification Type | Type of Notifications | Emails or Notification sent out for Request Updates, etc. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).NotificationType<small> character varying(2) <br/> List</small> | 
| Notification Message |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).NotificationMessage<small> character varying(255) <br/> String</small> | 
| Online Shipping Rate Inquiry |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).ShippingRateInquiry<small> character(1) <br/> Button</small> | 
| Void Shipment Online | Void shipment using web services provided by shipper |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).VoidIt<small> character(1) <br/> Button</small> | 
| Process Shipment Online | Create shipment using web services provided by shipper |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).OProcessing<small> character(1) <br/> Button</small> | 
| Print Shipping Label | Print shipping label | Print shipping label return from online shipping services. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).LabelPrint<small> character(1) <br/> Button</small> | 
| Price | Price | The Price indicates the Price for a product or service. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).Price<small> numeric <br/> Costs+Prices</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Surcharges |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).Surcharges<small> numeric <br/> Costs+Prices</small> | 
| Tracking No | Number to track the shipment |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).TrackingNo<small> character varying(255) <br/> String</small> | 
| Tracking Info |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).TrackingInfo<small> character varying(255) <br/> String</small> | 
| Rate Inquiry Message |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).RateInquiryMessage<small> character varying(2000) <br/> Text</small> | 
| Response Message |  |  | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).ShippingRespMessage<small> character varying(2000) <br/> Text</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).Description<small> character varying(255) <br/> String</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [m_package](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_package.html).Processed<small> character(1) <br/> Yes-No</small> | 


### Tab: MPS Lines

**[Created:** 06/12/2012 - **Updated:** 06/12/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: MPS Lines - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Package | Shipment Package | A Shipment can have one or more Packages.  A Package may be individually tracked. | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).M_Package_ID<small> numeric(10) <br/> Search</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).Description<small> character varying(255) <br/> String</small> | 
| Master Tracking No |  |  | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).MasterTrackingNo<small> character varying(255) <br/> String</small> | 
| Tracking No | Number to track the shipment |  | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).TrackingNo<small> character varying(255) <br/> String</small> | 
| Price | Price | The Price indicates the Price for a product or service. | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).Price<small> numeric <br/> Costs+Prices</small> | 
| Weight | Weight of a product | The Weight indicates the weight  of the product in the Weight UOM of the Tenant | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).Weight<small> numeric <br/> Quantity</small> | 
| UOM for Weight | Standard Unit of Measure for Weight | The Standard UOM for Weight indicates the UOM to use for products referenced by weight in a document. | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).C_UOM_Weight_ID<small> numeric(10) <br/> Table</small> | 
| Length |  |  | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).Length<small> numeric <br/> Quantity</small> | 
| UOM for Length | Standard Unit of Measure for Length | The Standard UOM for Length indicates the UOM to use for products referenced by length in a document. | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).C_UOM_Length_ID<small> numeric(10) <br/> Table</small> | 
| Width |  |  | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).Width<small> numeric <br/> Quantity</small> | 
| Height |  |  | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).Height<small> numeric <br/> Quantity</small> | 
| Create lines from | Process which will generate a new document lines based on an existing document | The Create From process will create a new document based on information in an existing document selected by the user. | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).CreateFrom<small> character(1) <br/> Button</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [m_packagemps](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packagemps.html).Processed<small> character(1) <br/> Yes-No</small> | 


### Tab: Package Lines

**[Created:** 06/12/2012 - **Updated:** 06/12/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 30: Package Lines - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_packageline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packageline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_packageline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packageline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Package MPS |  |  | [m_packageline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packageline.html).M_PackageMPS_ID<small> numeric(10) <br/> Search</small> | 
| Package | Shipment Package | A Shipment can have one or more Packages.  A Package may be individually tracked. | [m_packageline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packageline.html).M_Package_ID<small> numeric(10) <br/> Search</small> | 
| Shipment/Receipt Line | Line on Shipment or Receipt document | The Shipment/Receipt Line indicates a unique line in a Shipment/Receipt document | [m_packageline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packageline.html).M_InOutLine_ID<small> numeric(10) <br/> Table Direct</small> | 
| Quantity | Quantity | The Quantity indicates the number of a specific product or item for this document. | [m_packageline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packageline.html).Qty<small> numeric <br/> Quantity</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [m_packageline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packageline.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_packageline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_packageline.html).Description<small> character varying(255) <br/> String</small> | 


