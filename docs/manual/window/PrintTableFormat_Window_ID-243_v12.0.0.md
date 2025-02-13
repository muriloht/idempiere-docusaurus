# Window: Print Table Format

**[Created:** 24/08/2002 - **Updated:** 02/01/2000 **]**  
**Description:** Define Report Table Format  
**Help:** The Print Table Format lets you define how table header, etc. is printed. Please note that the Report Table FOrmat is cached to improve performance.  
![](/img/docs/manual/PrintTableFormat-Window_iDempiere_v12.0.0.png)

### Tab: Print Table Format

**[Created:** 24/08/2002 - **Updated:** 02/01/2000 **]**   
**Description:** Define Report Table Format  
**Help:** The Print Table Format lets you define how table header, etc. is printed. If you leave the entries empty, the default colors and fonts are used:Fonts are based on the Font used in the Report; Page Header and Table Header will be bold, the Function Font is Bold-Italic, the Footer Font is two points smaller, the Parameter Font is Italic.  
**Tab Level:** 0

Table 10: Print Table Format - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).IsDefault<small> character(1) <br/> Yes-No</small> | 
| Header Row Color | Foreground color if the table header row | Table header row foreground color | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).HdrTextFG_PrintColor_ID<small> numeric(10) <br/> Table</small> | 
| Header Row BG Color | Background color of header row | Table header row background color | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).HdrTextBG_PrintColor_ID<small> numeric(10) <br/> Table</small> | 
| Header Row Font | Header row Font | Font of the table header row | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).Hdr_PrintFont_ID<small> numeric(10) <br/> Table</small> | 
| Multi Line Header | Print column headers on multiple lines if necessary. | If selected, column header text will wrap onto the next line -- otherwise the text will be truncated. | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).IsMultiLineHeader<small> character(1) <br/> Yes-No</small> | 
| Paint Header Lines | Paint Lines over/under the Header Line | If selected, a line is painted above and below the header line using the stroke information | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).IsPaintHeaderLines<small> character(1) <br/> Yes-No</small> | 
| Header Line Color | Table header row line color | Color of the table header row lines | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).HdrLine_PrintColor_ID<small> numeric(10) <br/> Table</small> | 
| Header Stroke Type | Type of the Header Line Stroke | Type of the line printed | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).HdrStrokeType<small> character(1) <br/> List</small> | 
| Header Stroke | Width of the Header Line Stroke | The width of the header line stroke (line thickness) in Points. | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).HdrStroke<small> numeric <br/> Number</small> | 
| Paint Vertical Lines | Paint vertical lines | Paint vertical table lines | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).IsPaintVLines<small> character(1) <br/> Yes-No</small> | 
| Paint Horizontal Lines | Paint horizontal lines | Paint horizontal table lines | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).IsPaintHLines<small> character(1) <br/> Yes-No</small> | 
| Paint Boundary Lines | Paint table boundary lines | Paint lines around table | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).IsPaintBoundaryLines<small> character(1) <br/> Yes-No</small> | 
| Line Color | Table line color |  | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).Line_PrintColor_ID<small> numeric(10) <br/> Table</small> | 
| Line Stroke Type | Type of the Line Stroke | Type of the line printed | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).LineStrokeType<small> character(1) <br/> List</small> | 
| Line Stroke | Width of the Line Stroke | The width of the line stroke (line thickness) in Points. | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).LineStroke<small> numeric <br/> Number</small> | 
| Print Function Symbols | Print Symbols for Functions (Sum, Average, Count) | If selected, print symbols - otherwise print names of the function | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).IsPrintFunctionSymbols<small> character(1) <br/> Yes-No</small> | 
| Function Color | Function Foreground Color | Foreground color of a function row | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).FunctFG_PrintColor_ID<small> numeric(10) <br/> Table</small> | 
| Function BG Color | Function Background Color | Background color of a function row | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).FunctBG_PrintColor_ID<small> numeric(10) <br/> Table</small> | 
| Function Font | Function row Font | Font of the function row | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).Funct_PrintFont_ID<small> numeric(10) <br/> Table</small> | 
| Image attached | The image to be printed is attached to the record | The image to be printed is stored in the database as attachment to this record. The image can be a gif, jpeg or png. | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).ImageIsAttached<small> character(1) <br/> Yes-No</small> | 
| Image URL | URL of  image | URL of image; The image is not stored in the database, but retrieved at runtime. The image can be a gif, jpeg or png. | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).ImageURL<small> character varying(120) <br/> URL</small> | 
| Image | Image or Icon | Images and Icon can be used to display supported graphic formats (gif, jpg, png).You can either load the image (in the database) or point to a graphic via a URI (i.e. it can point to a resource, http address) | [ad_printtableformat](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_printtableformat.html).AD_Image_ID<small> numeric(10) <br/> Table Direct</small> | 


