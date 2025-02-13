# Window: Marketing Channel

**[Created:** 23/09/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Marketing  Channels  
**Help:** The Marketing Channel Window defines the different channels used in Marketing Campaigns  
![](/img/docs/manual/MarketingChannel-Window_iDempiere_v12.0.0.png)

### Tab: Channel

**[Created:** 23/09/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Distribution Channel  
**Help:** The Marketing Channel Tab defines the different methods or processes through which customers are obtained.  
**Tab Level:** 0

Table 10: Channel - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_channel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_channel.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_channel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_channel.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_channel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_channel.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_channel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_channel.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_channel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_channel.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Print Color | Color used for printing and display | Colors used for printing and display | [c_channel](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_channel.html).AD_PrintColor_ID<small> numeric(10) <br/> Table Direct</small> | 


