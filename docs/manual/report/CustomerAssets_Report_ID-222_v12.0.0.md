# Report: Customer Assets

**[Created:** 28/08/2003 - **Updated:** 17/02/2022 **]**  
**Description:** Report Customer Assets with Delivery Count  
**Help:** The report lists the assets of business partners with the total asset delivery count.  

![](/img/docs/manual/CustomerAssets-Report_iDempiere_v12.0.0.png)

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Asset Group | Group of Assets | The group of assets determines default accounts.  If an asset group is selected in the product category, assets are created when delivering the asset. | A_Asset_Group_ID<br/>Table Direct | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | C_BPartner_ID<br/>Search | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | AD_User_ID<br/>Search | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | M_Product_ID<br/>Search | 
| In Service Date | Date when Asset was put into service | The date when the asset was put into service - usually used as start date for depreciation. | AssetServiceDate<br/>Date | 
| Guarantee Date | Date when guarantee expires | Date when the normal guarantee or availability expires | GuaranteeDate<br/>Date | 


