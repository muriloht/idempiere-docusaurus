# Window: Print Font

**[Created:** 11/07/2002 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Print Font  
**Help:** Font used for printing  
![](/img/docs/manual/PrintFont-Window_iDempiere_v12.0.0.png)

### Tab: Print Font

**[Created:** 11/07/2002 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Print Font  
**Help:** Font used for printing  
**Tab Level:** 0

Table 10: Print Font - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_printfont](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printfont.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_printfont](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printfont.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_printfont](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printfont.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_printfont](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printfont.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [ad_printfont](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printfont.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Validation code | Validation Code | The Validation Code displays the date, time and message of the error. | [ad_printfont](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printfont.html).Code<small> character varying(2000) <br/> String</small> | 


