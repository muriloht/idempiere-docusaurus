# Process: Deliver Assets 

**[Created:** 29/01/2003 - **Updated:** 17/02/2022 **]**  
**Description:** Deliver Customer Assets electronically  
**Help:** Send Mail to customers and attach new delivery (optional).  
**Class:** [org.compiere.process.AssetDelivery](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/AssetDelivery.html)

![](/img/docs/manual/DeliverAssets-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Asset Group | Group of Assets | The group of assets determines default accounts.  If an asset group is selected in the product category, assets are created when delivering the asset. | A_Asset_Group_ID<br/>Table Direct | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Search | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Search | 
| Asset | Asset used internally or by customers | An asset is either created by purchasing or by delivering a product.  An asset can be used internally or be a customer asset. | A_Asset_ID<br/>Search | 
| Guarantee Date | Date when guarantee expires | Date when the normal guarantee or availability expires | GuaranteeDate<br/>Date | 
| Expired Guarantee Mail | Send email to partners with expired guarantee |  | NoGuarantee_MailText_ID<br/>Table | 
| Attach Asset | Attach Asset to be delivered per email |  | AttachAsset<br/>Yes-No | 


