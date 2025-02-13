# Window: Address Transaction

**[Created:** 19/08/2013 - **Updated:** 19/08/2013 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/AddressTransaction-Window_iDempiere_v12.0.0.png)

### Tab: Address Transaction

**[Created:** 19/08/2013 - **Updated:** 19/08/2013 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Address Transaction - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Address | Location or Address | The Location / Address field defines the location of an entity. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).C_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Address 1 | Address line 1 for this location | The Address 1 identifies the address for an entity&#x27;s location | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).Address1<small> character varying(60) <br/> String</small> | 
| Address 2 | Address line 2 for this location | The Address 2 provides additional address information for an entity.  It can be used for building location, apartment number or similar information. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).Address2<small> character varying(60) <br/> String</small> | 
| Address 3 | Address Line 3 for the location | The Address 2 provides additional address information for an entity.  It can be used for building location, apartment number or similar information. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).Address3<small> character varying(60) <br/> String</small> | 
| Address 4 | Address Line 4 for the location | The Address 4 provides additional address information for an entity.  It can be used for building location, apartment number or similar information. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).Address4<small> character varying(60) <br/> String</small> | 
| City | Identifies a City | The City identifies a unique City for this Country or Region. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).City<small> character varying(60) <br/> String</small> | 
| Address 5 | Address Line 5 for the location | The Address 5 provides additional address information for an entity.  It can be used for building location, apartment number or similar information. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).Address5<small> character varying(60) <br/> String</small> | 
| Region |  |  | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).Region<small> character varying(60) <br/> String</small> | 
| ZIP | Postal code | The Postal Code or ZIP identifies the postal code for this entity&#x27;s address. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).Postal<small> character varying(10) <br/> String</small> | 
| Country |  |  | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).Country<small> character varying(60) <br/> String</small> | 
| Result | Result of the action taken | The Result indicates the result of any action taken on this request. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).Result<small> character varying(2000) <br/> Text</small> | 
| Valid | Element is valid | The element passed the validation check | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).IsValid<small> character(1) <br/> Yes-No</small> | 
| Address Validation |  |  | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).C_AddressValidation_ID<small> numeric(10) <br/> Table Direct</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).Processed<small> character(1) <br/> Yes-No</small> | 
| Comments | Comments or additional information | The Comments field allows for free form entry of additional information. | [c_addresstransaction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_addresstransaction.html).Comments<small> character varying(2000) <br/> Text</small> | 


