# Window: Performance Ratio

**[Created:** 26/12/2005 - **Updated:** 04/01/2006 **]**  
**Description:** Maintain Performance Ratios  
**Help:** Calculation instruction for a ratio  
![](/img/docs/manual/PerformanceRatio-Window_iDempiere_v12.0.0.png)

### Tab: Ratio

**[Created:** 26/12/2005 - **Updated:** 26/12/2005 **]**   
**Description:** Performance Ratio  
**Help:** Calculation instruction set  for a performance ratio  
**Tab Level:** 0

Table 10: Ratio - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_ratio](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratio.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_ratio](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratio.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_ratio](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratio.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_ratio](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratio.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_ratio](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratio.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [pa_ratio](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratio.html).Help<small> character varying(2000) <br/> Text</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [pa_ratio](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratio.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Element

**[Created:** 26/12/2005 - **Updated:** 26/12/2005 **]**   
**Description:** Performance Ratio Element  
**Help:** Individual calculation instruction for a ratio  
**Tab Level:** 1

Table 20: Element - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Ratio | Performance Ratio | Calculation instruction set  for a performance ratio | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).PA_Ratio_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Operand | Ratio Operand | Operand how data is calculated.  If it is the first in the series, &#x27;minus&#x27; will create a negative value, otherwise ignored. | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).RatioOperand<small> character(1) <br/> List</small> | 
| Element Type | Ratio Element Type | Type of data used for the calculation | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).RatioElementType<small> character(1) <br/> List</small> | 
| Measure Calculation | Calculation method for measuring performance | The Measure Calculation indicates the method of measuring performance. | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).PA_MeasureCalc_ID<small> numeric(10) <br/> Table Direct</small> | 
| Constant Value | Constant value |  | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).ConstantValue<small> numeric <br/> Number</small> | 
| Ratio Used | Performance Ratio Used | Existing Performance Ratio to be used in the calculation.  Make sure that the Ratio is not self-referencing (loop). | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).PA_RatioUsed_ID<small> numeric(10) <br/> Table</small> | 
| Account | Account used | The (natural) account used | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).Account_ID<small> numeric(10) <br/> Search</small> | 
| Posting Type | The type of posted amount for the transaction | The Posting Type indicates the type of amount (Actual, Budget, Reservation, Commitment, Statistical) the transaction. | [pa_ratioelement](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_ratioelement.html).PostingType<small> character(1) <br/> List</small> | 


