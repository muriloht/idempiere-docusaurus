# Window: Report Column Set

**[Created:** 13/05/2001 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Financial Report Column Sets  
**Help:** The Report Column Set defines what data is printed in the columns of a report.  
![](/img/docs/manual/ReportColumnSet-Window_iDempiere_v12.0.0.png)

### Tab: Report Column Set

**[Created:** 13/05/2001 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Financial Report Column Sets  
**Help:** Column Sets are the combination of Columns to be included in a Financial Report  
**Tab Level:** 0

Table 10: Report Column Set - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_reportcolumnset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumnset.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_reportcolumnset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumnset.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_reportcolumnset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumnset.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_reportcolumnset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumnset.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_reportcolumnset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumnset.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Copy Columns | Copy Report Columns from other Column Set | Copy columns at the end of this Column Set. Please note that you need to re-set the calculation operands. | [pa_reportcolumnset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumnset.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Report Column

**[Created:** 13/05/2001 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Financial Report Column  
**Help:** A column represents a column in a Financial Report  
**Tab Level:** 1

Table 20: Report Column - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Report Column Set | Collection of Columns for Report | The Report Column Set identifies the columns used in a Report. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).PA_ReportColumnSet_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Printed | Indicates if this document / line is printed | The Printed checkbox indicates if this document or line will included when printing. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsPrinted<small> character(1) <br/> Yes-No</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Posting Type | The type of posted amount for the transaction | The Posting Type indicates the type of amount (Actual, Budget, Reservation, Commitment, Statistical) the transaction. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).PostingType<small> character(1) <br/> List</small> | 
| Budget | General Ledger Budget | The General Ledger Budget identifies a user defined budget.  These can be used in reporting as a comparison against your actual amounts. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).GL_Budget_ID<small> numeric(10) <br/> Table Direct</small> | 
| Amount Type | PA Amount Type for reporting | The amount type to report on: Quantity, Credit Only, Debit Only, Balance (expected sign) or Balance (accounted sign). &quot;Expected sign&quot; adjusts the sign of the result based on the Account Type and Expected Sign of each Account Element, whereas &quot;accounted sign&quot; always returns DR-CR. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).PAAmountType<small> character(1) <br/> List</small> | 
| Period Type | PA Period Type | The Period Type to report on: Period, Year, Total or Natural. Natural = Year for P &amp; L accounts, Total for Balance Sheet accounts. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).PAPeriodType<small> character(1) <br/> List</small> | 
| Column Type |  |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).ColumnType<small> character(1) <br/> List</small> | 
| Relative Period | Period offset (0 is current) |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).RelativePeriod<small> numeric(10) <br/> Number</small> | 
| Relative Period To | Period offset (0 is current) |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).RelativePeriodTo<small> numeric <br/> Number</small> | 
| Calculation |  |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).CalculationType<small> character(1) <br/> List</small> | 
| Operand 1 | First operand for calculation |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).Oper_1_ID<small> numeric(10) <br/> Table</small> | 
| Operand 2 | Second operand for calculation |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).Oper_2_ID<small> numeric(10) <br/> Table</small> | 
| Operand 2 Line Name | Name of the financial report line to take values from | When specify this identified the name of the financial report line to take values from for column Oper_2_ID. No validation at entry time, value will be zero if the name doesn&#x27;t match any line. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).Oper_2_LineName<small> character varying(512) <br/> String</small> | 
| Type | Element Type (account or user defined) | The Element Type indicates if this element is the Account element or is a User Defined element. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).ElementType<small> character(2) <br/> List</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).Org_ID<small> numeric(10) <br/> Table</small> | 
| Include Nulls in Org | Include nulls in the selection of the organization |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsOrg<small> character(1) <br/> Yes-No</small> | 
| Trx Organization | Performing or initiating organization | The organization which performs or initiates this transaction (for another organization).  The owning Organization may not be the transaction organization in a service bureau environment, with centralized services, and inter-organization transactions. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).AD_OrgTrx_ID<small> numeric(10) <br/> Table</small> | 
| Include Nulls in Org Trx | Include nulls in the selection of the organization transaction |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsOrgTrx<small> character(1) <br/> Yes-No</small> | 
| Account Element | Account Element | Account Elements can be natural accounts or user defined values. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).C_ElementValue_ID<small> numeric(10) <br/> Search</small> | 
| Include Nulls in Account | Include nulls in the selection of the account |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsElementValue<small> character(1) <br/> Yes-No</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Include Nulls in Product | Include nulls in the selection of the product |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsProduct<small> character(1) <br/> Yes-No</small> | 
| Campaign | Marketing Campaign | The Campaign defines a unique marketing program.  Projects can be associated with a pre defined Marketing Campaign.  You can then report based on a specific Campaign. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).C_Campaign_ID<small> numeric(10) <br/> Table Direct</small> | 
| Include Nulls in Campaign | Include nulls in the selection of the campaign |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsCampaign<small> character(1) <br/> Yes-No</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Include Nulls in BPartner | Include nulls in the selection of the business partner |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsBPartner<small> character(1) <br/> Yes-No</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
| Include Nulls in Project | Include nulls in the selection of the project |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsProject<small> character(1) <br/> Yes-No</small> | 
| Address | Location or Address | The Location / Address field defines the location of an entity. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).C_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Include Nulls in Location | Include nulls in the selection of the location |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsLocation<small> character(1) <br/> Yes-No</small> | 
| Sales Region | Sales coverage region | The Sales Region indicates a specific area of sales coverage. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).C_SalesRegion_ID<small> numeric(10) <br/> Table Direct</small> | 
| Include Nulls in Sales Region | Include nulls in the selection of the sales region |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsSalesRegion<small> character(1) <br/> Yes-No</small> | 
| Activity | Business Activity | Activities indicate tasks that are performed and used to utilize Activity based Costing | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).C_Activity_ID<small> numeric(10) <br/> Table Direct</small> | 
| Include Nulls in Activity | Include nulls in the selection of the activity |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsActivity<small> character(1) <br/> Yes-No</small> | 
| User Column 1 | User defined accounting Element | A user defined accounting element refers to an iDempiere table. This allows to use any table content as an accounting dimension (e.g. Project Task).  Note that User Elements are optional and are populated from the context of the document (i.e. not requested) | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).UserElement1_ID<small> numeric(10) <br/> ID</small> | 
| Include Nulls in User Element 1 | Include nulls in the selection of the user element 1 |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsUserElement1<small> character(1) <br/> Yes-No</small> | 
| User Column 2 | User defined accounting Element | A user defined accounting element refers to an iDempiere table. This allows to use any table content as an accounting dimension (e.g. Project Task).  Note that User Elements are optional and are populated from the context of the document (i.e. not requested) | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).UserElement2_ID<small> numeric(10) <br/> ID</small> | 
| Include Nulls in User Element 2 | Include nulls in the selection of the user element 2 |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsIncludeNullsUserElement2<small> character(1) <br/> Yes-No</small> | 
| Format Pattern | The pattern used to format a number or date. | A string complying with either Java SimpleDateFormat or DecimalFormat pattern syntax used to override the default presentation format of a date or number type field. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).FormatPattern<small> character varying(22) <br/> String</small> | 
| Allow Opposite Sign | Allow column values to be displayed with the opposite sign | Allows values to be displayed with the opposite sign to the calculated value if the &quot;Show Opposite Sign&quot; flag is set on the Report Line. Note that all report calculations are performed before the sign is reversed. | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).IsAllowOppositeSign<small> character(1) <br/> Yes-No</small> | 
| Multiplier | Type Multiplier (Credit = -1) |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).Multiplier<small> numeric <br/> Number</small> | 
| Round Factor |  |  | [pa_reportcolumn](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn.html).RoundFactor<small> numeric(10) <br/> Integer</small> | 


### Tab: Translation

**[Created:** 22/08/2019 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 30: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_reportcolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_reportcolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Report Column | Column in Report |  | [pa_reportcolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn_trl.html).PA_ReportColumn_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [pa_reportcolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_reportcolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn_trl.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_reportcolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_reportcolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [pa_reportcolumn_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportcolumn_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


