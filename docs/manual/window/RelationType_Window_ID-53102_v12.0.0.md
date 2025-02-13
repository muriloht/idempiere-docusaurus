# Window: Relation Type

**[Created:** 13/11/2009 - **Updated:** 13/11/2009 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/RelationType-Window_iDempiere_v12.0.0.png)

### Tab: Relation Type

**[Created:** 13/11/2009 - **Updated:** 13/11/2009 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Relation Type - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).Description<small> character varying(255) <br/> String</small> | 
| Directed | Tells whether one &quot;sees&quot; the other end of the relation from each end or just from the source |  | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).IsDirected<small> character(1) <br/> Yes-No</small> | 
| Type | Type of Validation (SQL, Java Script, Java Language) | The Type indicates the type of validation that will occur.  This can be SQL, Java Script or Java Language. | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).Type<small> character(1) <br/> List</small> | 
| Source Reference |  |  | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).AD_Reference_Source_ID<small> numeric(10) <br/> Table</small> | 
| Source Role | If set, this role will be used as label for the zoom destination instead of the destinations&#x27;s window name |  | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).Role_Source<small> character varying(50) <br/> List</small> | 
| Target Reference |  |  | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).AD_Reference_Target_ID<small> numeric(10) <br/> Table</small> | 
| Target Role | If set, this role will be used as label for the zoom destination instead of the destinations&#x27;s window name |  | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).Role_Target<small> character varying(50) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_relationtype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_relationtype.html).EntityType<small> character varying(40) <br/> Table</small> | 


