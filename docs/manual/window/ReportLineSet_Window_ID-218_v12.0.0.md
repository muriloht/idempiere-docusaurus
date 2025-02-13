# Window: Report Line Set

**[Created:** 13/05/2001 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Financial Report Line Sets  
**Help:** The Line Set determines, which lines are printed in a Financial Report  
![](/img/docs/manual/ReportLineSet-Window_iDempiere_v12.0.0.png)

### Tab: Report Line Set

**[Created:** 13/05/2001 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Financial Report Line Set  
**Help:**   
**Tab Level:** 0

Table 10: Report Line Set - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_reportlineset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportlineset.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_reportlineset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportlineset.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_reportlineset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportlineset.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_reportlineset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportlineset.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_reportlineset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportlineset.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Copy Lines | Copy Report Lines from other Line Set | Copy lines at the end of this Line Set. Please note that you need to re-set the calculation operands. | [pa_reportlineset](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportlineset.html).Processing<small> character(1) <br/> Button</small> | 


### Tab: Report Line

**[Created:** 13/05/2001 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Financial Report Line  
**Help:**   
**Tab Level:** 1

Table 20: Report Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Report Line Set |  |  | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).PA_ReportLineSet_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Printed | Indicates if this document / line is printed | The Printed checkbox indicates if this document or line will included when printing. | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).IsPrinted<small> character(1) <br/> Yes-No</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Line Type |  |  | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).LineType<small> character(1) <br/> List</small> | 
| Calculation |  |  | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).CalculationType<small> character(1) <br/> List</small> | 
| Operand 1 | First operand for calculation |  | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).Oper_1_ID<small> numeric(10) <br/> Table</small> | 
| Operand 2 | Second operand for calculation |  | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).Oper_2_ID<small> numeric(10) <br/> Table</small> | 
| Inverse Operation for Debit/Credit Only Column | Apply inverse operation to debit or credit only column |  | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).IsInverseDebitCreditOnly<small> character(1) <br/> Yes-No</small> | 
| Posting Type | The type of posted amount for the transaction | The Posting Type indicates the type of amount (Actual, Budget, Reservation, Commitment, Statistical) the transaction. | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).PostingType<small> character(1) <br/> List</small> | 
| Budget | General Ledger Budget | The General Ledger Budget identifies a user defined budget.  These can be used in reporting as a comparison against your actual amounts. | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).GL_Budget_ID<small> numeric(10) <br/> Table Direct</small> | 
| Amount Type | PA Amount Type for reporting | The amount type to report on: Quantity, Credit Only, Debit Only, Balance (expected sign) or Balance (accounted sign). &quot;Expected sign&quot; adjusts the sign of the result based on the Account Type and Expected Sign of each Account Element, whereas &quot;accounted sign&quot; always returns DR-CR. | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).PAAmountType<small> character(1) <br/> List</small> | 
| Period Type | PA Period Type | The Period Type to report on: Period, Year, Total or Natural. Natural = Year for P &amp; L accounts, Total for Balance Sheet accounts. | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).PAPeriodType<small> character(1) <br/> List</small> | 
| Show Opposite Sign | Display values with the opposite sign | Displays values for a Report Line with the opposite sign to the calculated value. The &quot;Allow Opposite Sign&quot; flag on Report Column must also be set for this to take effect. Note that all report calculations are performed before the sign is reversed. | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).IsShowOppositeSign<small> character(1) <br/> Yes-No</small> | 
| Overline Stroke Type |  |  | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).OverlineStrokeType<small> character varying(3) <br/> List</small> | 
| Underline Stroke Type |  |  | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).UnderlineStrokeType<small> character varying(3) <br/> List</small> | 
| Multiplier | Type Multiplier (Credit = -1) |  | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).Multiplier<small> numeric <br/> Number</small> | 
| Round Factor |  |  | [pa_reportline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline.html).RoundFactor<small> numeric(10) <br/> Integer</small> | 


### Tab: Translation

**[Created:** 22/08/2019 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 25: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_reportline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_reportline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Report Line |  |  | [pa_reportline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline_trl.html).PA_ReportLine_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [pa_reportline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_reportline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline_trl.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_reportline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_reportline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [pa_reportline_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportline_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 


### Tab: Report Source

**[Created:** 13/05/2001 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Segment Values of Report Line Source  
**Help:**   
**Tab Level:** 2

Table 30: Report Source - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Report Line |  |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).PA_ReportLine_ID<small> numeric(10) <br/> Table Direct</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Type | Element Type (account or user defined) | The Element Type indicates if this element is the Account element or is a User Defined element. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).ElementType<small> character(2) <br/> List</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).Org_ID<small> numeric(10) <br/> Table</small> | 
| Include Nulls in Org | Include nulls in the selection of the organization |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsOrg<small> character(1) <br/> Yes-No</small> | 
| Trx Organization | Performing or initiating organization | The organization which performs or initiates this transaction (for another organization).  The owning Organization may not be the transaction organization in a service bureau environment, with centralized services, and inter-organization transactions. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).AD_OrgTrx_ID<small> numeric(10) <br/> Table</small> | 
| Include Nulls in Org Trx | Include nulls in the selection of the organization transaction |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsOrgTrx<small> character(1) <br/> Yes-No</small> | 
| Account Element | Account Element | Account Elements can be natural accounts or user defined values. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).C_ElementValue_ID<small> numeric(10) <br/> Search</small> | 
| Include Nulls in Account | Include nulls in the selection of the account |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsElementValue<small> character(1) <br/> Yes-No</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Include Nulls in BPartner | Include nulls in the selection of the business partner |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsBPartner<small> character(1) <br/> Yes-No</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Include Nulls in Product | Include nulls in the selection of the product |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsProduct<small> character(1) <br/> Yes-No</small> | 
| Address | Location or Address | The Location / Address field defines the location of an entity. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).C_Location_ID<small> numeric(10) <br/> Location (Address)</small> | 
| Include Nulls in Location | Include nulls in the selection of the location |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsLocation<small> character(1) <br/> Yes-No</small> | 
| Project | Financial Project | A Project allows you to track and control internal or external activities. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).C_Project_ID<small> numeric(10) <br/> Table Direct</small> | 
| Include Nulls in Project | Include nulls in the selection of the project |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsProject<small> character(1) <br/> Yes-No</small> | 
| Sales Region | Sales coverage region | The Sales Region indicates a specific area of sales coverage. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).C_SalesRegion_ID<small> numeric(10) <br/> Table Direct</small> | 
| Include Nulls in Sales Region | Include nulls in the selection of the sales region |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsSalesRegion<small> character(1) <br/> Yes-No</small> | 
| Activity | Business Activity | Activities indicate tasks that are performed and used to utilize Activity based Costing | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).C_Activity_ID<small> numeric(10) <br/> Table Direct</small> | 
| Include Nulls in Activity | Include nulls in the selection of the activity |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsActivity<small> character(1) <br/> Yes-No</small> | 
| Campaign | Marketing Campaign | The Campaign defines a unique marketing program.  Projects can be associated with a pre defined Marketing Campaign.  You can then report based on a specific Campaign. | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).C_Campaign_ID<small> numeric(10) <br/> Table Direct</small> | 
| Include Nulls in Campaign | Include nulls in the selection of the campaign |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsCampaign<small> character(1) <br/> Yes-No</small> | 
| User Column 1 | User defined accounting Element | A user defined accounting element refers to an iDempiere table. This allows to use any table content as an accounting dimension (e.g. Project Task).  Note that User Elements are optional and are populated from the context of the document (i.e. not requested) | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).UserElement1_ID<small> numeric(10) <br/> ID</small> | 
| Include Nulls in User Element 1 | Include nulls in the selection of the user element 1 |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsUserElement1<small> character(1) <br/> Yes-No</small> | 
| User Column 2 | User defined accounting Element | A user defined accounting element refers to an iDempiere table. This allows to use any table content as an accounting dimension (e.g. Project Task).  Note that User Elements are optional and are populated from the context of the document (i.e. not requested) | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).UserElement2_ID<small> numeric(10) <br/> ID</small> | 
| Include Nulls in User Element 2 | Include nulls in the selection of the user element 2 |  | [pa_reportsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_reportsource.html).IsIncludeNullsUserElement2<small> character(1) <br/> Yes-No</small> | 


