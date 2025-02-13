# Window: Print Paper

**[Created:** 11/07/2002 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Print Paper  
**Help:** Printer Paper Size, Orientation and Margins  
![](/img/docs/manual/PrintPaper-Window_iDempiere_v12.0.0.png)

### Tab: Print Paper

**[Created:** 11/07/2002 - **Updated:** 18/01/2006 **]**   
**Description:** Maintain Print Paper  
**Help:** Printer Paper Size, Orientation and Margins. The Validation Code contains the Media Size name. The names of the media sizes correspond to those in the IPP 1.1 RFC 2911 - http://www.ietf.org/rfc/rfc2911.txt  If the name is not found, the SizeX/Y with the dimension is used. Size and dimension are ignored, if a valid media size name is used.  
**Tab Level:** 0

Table 10: Print Paper - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Landscape | Landscape orientation |  | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).IsLandscape<small> character(1) <br/> Yes-No</small> | 
| Validation code | Validation Code | The Validation Code displays the date, time and message of the error. | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).Code<small> character varying(2000) <br/> String</small> | 
| Dimension Units | Units of Dimension |  | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).DimensionUnits<small> character(1) <br/> List</small> | 
| Size X | X (horizontal) dimension size | Size of X (horizontal) dimension in Units | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).SizeX<small> numeric <br/> Number</small> | 
| Size Y | Y (vertical) dimension size | Size of Y (vertical) dimension in Units | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).SizeY<small> numeric <br/> Number</small> | 
| Top Margin | Top Space in 1/72 inch | Space on top of a page in 1/72 inch | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).MarginTop<small> numeric(10) <br/> Integer</small> | 
| Bottom Margin | Bottom Space in 1/72 inch | Space on bottom of a page in 1/72 inch | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).MarginBottom<small> numeric(10) <br/> Integer</small> | 
| Left Margin | Left Space in 1/72 inch | Space on left side of a page in 1/72 inch | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).MarginLeft<small> numeric(10) <br/> Integer</small> | 
| Right Margin | Right Space in 1/72 inch | Space on right side of a page in 1/72 inch | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).MarginRight<small> numeric(10) <br/> Integer</small> | 
| Set Print Format | Set for all Print Formats with same Landscape/Portrait |  | [ad_printpaper](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printpaper.html).Processing<small> character(1) <br/> Button</small> | 


