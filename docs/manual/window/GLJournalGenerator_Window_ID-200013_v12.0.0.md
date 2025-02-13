# Window: GL Journal Generator

**[Created:** 24/09/2012 - **Updated:** 03/06/2021 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/GLJournalGenerator-Window_iDempiere_v12.0.0.png)

### Tab: GL Journal Generator

**[Created:** 24/09/2012 - **Updated:** 24/09/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: GL Journal Generator - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).Help<small> character varying(2000) <br/> Text</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| GL Category | General Ledger Category | The General Ledger Category is an optional, user defined method of grouping journal lines. | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).GL_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| Posting Type | The type of posted amount for the transaction | The Posting Type indicates the type of amount (Actual, Budget, Reservation, Commitment, Statistical) the transaction. | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).PostingType<small> character(1) <br/> List</small> | 
| Accounting Schema | Rules for accounting | An Accounting Schema defines the rules used in accounting such as costing method, currency and calendar | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).C_AcctSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Account Adjust DR |  |  | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).C_ElementValueAdjustDR_ID<small> numeric(10) <br/> Search</small> | 
| Account Adjust CR |  |  | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).C_ElementValueAdjustCR_ID<small> numeric(10) <br/> Search</small> | 
| Generate GL Journal |  |  | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).GenerateGLJournal<small> character(1) <br/> Button</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [gl_journalgenerator](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgenerator.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Generator Line

**[Created:** 24/09/2012 - **Updated:** 24/09/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Generator Line - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| GL Journal Generator |  |  | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).GL_JournalGenerator_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).Help<small> character varying(2000) <br/> Text</small> | 
| Account DR |  |  | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).C_ElementValueDR_ID<small> numeric(10) <br/> Search</small> | 
| Account CR |  |  | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).C_ElementValueCR_ID<small> numeric(10) <br/> Search</small> | 
| Type of BP Dimension |  |  | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).BPDimensionType<small> character(1) <br/> List</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| BP Column |  |  | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).BPColumn<small> character varying(124) <br/> String</small> | 
| Same Product |  |  | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).IsSameProduct<small> character(1) <br/> Yes-No</small> | 
| Copy All Dimensions |  |  | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).IsCopyAllDimensions<small> character(1) <br/> Yes-No</small> | 
| Multiplier Amount | Multiplier Amount for generating commissions | The Multiplier Amount indicates the amount to multiply the total amount generated by this commission run by. | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).AmtMultiplier<small> numeric <br/> Number</small> | 
| Round Factor |  |  | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).RoundFactor<small> numeric(10) <br/> Integer</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [gl_journalgeneratorline](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorline.html).IsActive<small> character(1) <br/> Yes-No</small> | 


### Tab: Generator Source

**[Created:** 24/09/2012 - **Updated:** 24/09/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 30: Generator Source - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [gl_journalgeneratorsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorsource.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [gl_journalgeneratorsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorsource.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Generator Line |  |  | [gl_journalgeneratorsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorsource.html).GL_JournalGeneratorLine_ID<small> numeric(10) <br/> Table Direct</small> | 
| Account Element | Account Element | Account Elements can be natural accounts or user defined values. | [gl_journalgeneratorsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorsource.html).C_ElementValue_ID<small> numeric(10) <br/> Search</small> | 
| GL Category | General Ledger Category | The General Ledger Category is an optional, user defined method of grouping journal lines. | [gl_journalgeneratorsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorsource.html).GL_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| Multiplier Amount | Multiplier Amount for generating commissions | The Multiplier Amount indicates the amount to multiply the total amount generated by this commission run by. | [gl_journalgeneratorsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorsource.html).AmtMultiplier<small> numeric <br/> Number</small> | 
| Round Factor |  |  | [gl_journalgeneratorsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorsource.html).RoundFactor<small> numeric(10) <br/> Integer</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [gl_journalgeneratorsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorsource.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [gl_journalgeneratorsource](https://idempiere-schemaspy.muriloht.com/adempiere/tables/gl_journalgeneratorsource.html).IsActive<small> character(1) <br/> Yes-No</small> | 


