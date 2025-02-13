# Window: Preference

**[Created:** 29/06/1999 - **Updated:** 10/03/2022 **]**  
**Description:** Maintain System Tenant Org and User Preferences  
**Help:** System Admin use only.  
![](/img/docs/manual/Preference-Window_iDempiere_v12.0.0.png)

### Tab: Preference

**[Created:** 29/06/1999 - **Updated:** 02/09/2023 **]**   
**Description:** Maintain System Tenant Org and User Preferences  
**Help:**   
**Tab Level:** 0

Table 10: Preference - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_preference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_preference.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_preference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_preference.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ad_preference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_preference.html).Value<small> character varying(60) <br/> String</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [ad_preference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_preference.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Preference For | Type of preference, it can window, info window or parameter process |  | [ad_preference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_preference.html).PreferenceFor<small> character(1) <br/> List</small> | 
| Attribute |  |  | [ad_preference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_preference.html).Attribute<small> character varying(60) <br/> String</small> | 
| Window | Data entry or display window | The Window field identifies a unique Window in the system. | [ad_preference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_preference.html).AD_Window_ID<small> numeric(10) <br/> Table Direct</small> | 
| Process | Process or Report | The Process field identifies a unique Process or Report in the system. | [ad_preference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_preference.html).AD_Process_ID<small> numeric(10) <br/> Table Direct</small> | 
| Info Window | Info and search/select Window | The Info window is used to search and select records as well as display information relevant to the selection. | [ad_preference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_preference.html).AD_InfoWindow_ID<small> numeric(10) <br/> Table Direct</small> | 
| Special Form | Special Form | The Special Form field identifies a unique Special Form in the system. | [ad_preference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_preference.html).AD_Form_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_preference](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_preference.html).IsActive<small> character(1) <br/> Yes-No</small> | 


