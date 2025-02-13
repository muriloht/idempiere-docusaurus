# Window: Calendar Year and Period

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Calendars Years Periods  
**Help:** The Calendar Year and Periods defines the calendars that will be used for period control and reporting. You can also define non-standard calendars (e.g. business year from July to June).  
![](/img/docs/manual/CalendarYearandPeriod-Window_iDempiere_v12.0.0.png)

### Tab: Calendar

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define your calendar  
**Help:** The Calendar Tab defines each calendar that will be used by an Organization.  
**Tab Level:** 0

Table 10: Calendar - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_calendar](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_calendar.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_calendar](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_calendar.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_calendar](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_calendar.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_calendar](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_calendar.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_calendar](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_calendar.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Year

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define Calendar Year  
**Help:** The Year Window is used to define each year for the specified calendar.  
**Tab Level:** 1

Table 20: Year - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_year](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_year.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_year](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_year.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Calendar | Accounting Calendar Name | The Calendar uniquely identifies an accounting calendar.  Multiple calendars can be used.  For example you may need a standard calendar that runs from Jan 1 to Dec 31 and a fiscal calendar that runs from July 1 to June 30. | [c_year](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_year.html).C_Calendar_ID<small> numeric(10) <br/> Table Direct</small> | 
| Year | The Fiscal Year | The Year identifies the accounting year for a calendar. | [c_year](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_year.html).FiscalYear<small> character varying(10) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_year](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_year.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_year](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_year.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Create Periods  | Create 12 standard calendar periods. | Creates 12 calendar month long standard periods from the specified start date.  If no start date is specified, 1st of Jan will be used.  The period name will be generated from the start date of each period using the java SimpleDateFormat pattern provided. | [c_year](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_year.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Period

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define Calendar Periods  
**Help:** The Period Tab defines a Period No, Name and Start Date for each Calendar Year.  Each period begins on the defined Start Date and ends one day prior to the next period&#x27;s Start Date.  
**Tab Level:** 2

Table 30: Period - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_period](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_period.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_period](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_period.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Year | Calendar Year | The Year uniquely identifies an accounting year for a calendar. | [c_period](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_period.html).C_Year_ID<small> numeric(10) <br/> Table Direct</small> | 
| Period No | Unique Period Number | The Period No identifies a specific period for this year. Each period is defined by a start and end date.  Date ranges for a calendar and year cannot overlap. | [c_period](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_period.html).PeriodNo<small> numeric(10) <br/> Integer</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_period](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_period.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_period](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_period.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Start Date | First effective day (inclusive) | The Start Date indicates the first or starting date | [c_period](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_period.html).StartDate<small> timestamp without time zone <br/> Date</small> | 
| End Date | Last effective date (inclusive) | The End Date indicates the last date in this range. | [c_period](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_period.html).EndDate<small> timestamp without time zone <br/> Date</small> | 
| Period Type | Period Type | The Period Type indicates the type (Standard or Adjustment) of period. | [c_period](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_period.html).PeriodType<small> character(1) <br/> List</small> | 
| Open/Close All | Change Period Status for all Period Controls of this Period |  | [c_period](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_period.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Period Control

**[Created:** 26/09/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define Period Control  
**Help:** The Period Control Tab displays the status of a Period (Never Opened, Opened, Closed).  
**Tab Level:** 3

Table 40: Period Control - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_periodcontrol](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_periodcontrol.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_periodcontrol](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_periodcontrol.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Period | Period of the Calendar | The Period indicates an exclusive range of dates for a calendar. | [c_periodcontrol](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_periodcontrol.html).C_Period_ID<small> numeric(10) <br/> Table Direct</small> | 
| Document Base Type | Logical type of document | The Document Base Type identifies the base or starting point for a document.  Multiple document types may share a single document base type. | [c_periodcontrol](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_periodcontrol.html).DocBaseType<small> character(3) <br/> List</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_periodcontrol](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_periodcontrol.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Period Status | Current state of this period | The Period Status indicates the current status for this period.  For example &#x27;Closed&#x27;, &#x27;Open&#x27;, &#x27;Never Opened&#x27;. | [c_periodcontrol](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_periodcontrol.html).PeriodStatus<small> character(1) <br/> List</small> | 
| Period Action | Action taken for this period | The Period Action indicates the action to be taken for this period.  For example &#x27;Close Period&#x27; or &#x27;Open Period&#x27;. | [c_periodcontrol](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_periodcontrol.html).PeriodAction<small> character(1) <br/> List</small> | 
| Open/Close | Change Period Status |  | [c_periodcontrol](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_periodcontrol.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Non Business Day

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Define Non Business Days  
**Help:** The Non Business Days Tab defines those days to exclude when calculating the due date for given payment terms.  For example, if an invoice terms was Net 10 days and the Invoice Date was 2/17/2000 the due date would be 2/27/2000.  If 2/27/2000 was defined as a non business day then the due date  on the Invoice would be 2/28/2000.  
**Tab Level:** 1

Table 50: Non Business Day - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_nonbusinessday](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_nonbusinessday.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_nonbusinessday](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_nonbusinessday.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Calendar | Accounting Calendar Name | The Calendar uniquely identifies an accounting calendar.  Multiple calendars can be used.  For example you may need a standard calendar that runs from Jan 1 to Dec 31 and a fiscal calendar that runs from July 1 to June 30. | [c_nonbusinessday](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_nonbusinessday.html).C_Calendar_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_nonbusinessday](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_nonbusinessday.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_nonbusinessday](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_nonbusinessday.html).Name<small> character varying(60) <br/> String</small> | 
| Date | Date when business is not conducted | The Date field identifies a calendar date on which business will not be conducted. | [c_nonbusinessday](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_nonbusinessday.html).Date1<small> timestamp without time zone <br/> Date</small> | 
| Country | Country | The Country defines a Country.  Each Country must be defined before it can be used in any document. | [c_nonbusinessday](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_nonbusinessday.html).C_Country_ID<small> numeric(10) <br/> Table Direct</small> | 


