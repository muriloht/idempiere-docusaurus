# Window: System Image

**[Created:** 05/09/2001 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Images and Icons  
**Help:**   
![](/img/docs/manual/SystemImage-Window_iDempiere_v12.0.0.png)

### Tab: Image

**[Created:** 05/09/2001 - **Updated:** 02/01/2000 **]**   
**Description:** Image or Icon link  
**Help:**   
**Tab Level:** 0

Table 10: Image - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_image](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_image.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_image](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_image.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_image](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_image.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_image](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_image.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_image](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_image.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_image](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_image.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Image URL | URL of  image | URL of image; The image is not stored in the database, but retrieved at runtime. The image can be a gif, jpeg or png. | [ad_image](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_image.html).ImageURL<small> character varying(120) <br/> URL</small> | 
| Binary Data | Binary Data | The Binary field stores binary data. | [ad_image](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_image.html).BinaryData<small> bytea <br/> Binary</small> | 


