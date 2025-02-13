# Window: Document Sequence

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain System and Document Sequences  
**Help:** The Sequence Window defines how document numbers will be sequenced.Change the way document numbers are generated. You may add a prefix or a suffix or change the current number.  
![](/img/docs/manual/DocumentSequence-Window_iDempiere_v12.0.0.png)

### Tab: Sequence

**[Created:** 19/06/1999 - **Updated:** 02/01/2000 **]**   
**Description:** Sequence Definition  
**Help:** The Sequence Tab defines the numeric sequencing to use for documents.  These can also include a alpha suffix and / or prefix.  
**Tab Level:** 0

Table 10: Sequence - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Auto numbering | Automatically assign the next number | The Auto Numbering checkbox indicates if the system will assign the next number automatically. | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).IsAutoSequence<small> character(1) <br/> Yes-No</small> | 
| Used for Record ID | The document number  will be used as the record key | The Used for Record ID checkbox indicates if the document id will be used as the key to the record | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).IsTableID<small> character(1) <br/> Yes-No</small> | 
| Value Format | Format of the value; Can contain fixed format elements, Variables: &quot;_lLoOaAcCa09&quot;, or ~regex | Validation elements:~regex - Validates a regular expression (Space) any character_Space (fixed character)lany Letter a..Z NO spaceLany Letter a..Z NO space converted to upper caseoany Letter a..Z or spaceOany Letter a..Z or space converted to upper caseaany Letters &amp; Digits NO spaceAany Letters &amp; Digits NO space converted to upper casecany Letters &amp; Digits or spaceCany Letters &amp; Digits or space converted to upper case0Digits 0..9 NO space9Digits 0..9 or spaceExample of format &quot;(000)_000-0000&quot; | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).VFormat<small> character varying(40) <br/> String</small> | 
| Increment | The number to increment the last document number by | The Increment indicates the number to increment the last document number by to arrive at the next sequence number | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).IncrementNo<small> numeric(10) <br/> Integer</small> | 
| Current Next | The next number to be used | The Current Next indicates the next number to use for this document | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).CurrentNext<small> numeric(10) <br/> Integer</small> | 
| Decimal Pattern | Java Decimal Pattern | Option Decimal pattern in Java notation. Examples: 0000 will format 23 to 0023 | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).DecimalPattern<small> character varying(40) <br/> String</small> | 
| Prefix | Prefix before the sequence number | The Prefix indicates the characters to print in front of the document number. | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).Prefix<small> character varying(255) <br/> String</small> | 
| Suffix | Suffix after the number | The Suffix indicates the characters to append to the document number. | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).Suffix<small> character varying(255) <br/> String</small> | 
| Organization level | This sequence can be defined for each organization |  | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).IsOrgLevelSequence<small> character(1) <br/> Yes-No</small> | 
| Org Column | Fully qualified Organization column (AD_Org_ID) | The Organization Column indicates the organization to be used in calculating this measurement. | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).OrgColumn<small> character varying(124) <br/> String</small> | 
| Restart sequence every Year | Restart the sequence with Start on every 1/1 | The Restart Sequence Every Year checkbox indicates that the documents sequencing should return to the starting number on the first day of the year. | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).StartNewYear<small> character(1) <br/> Yes-No</small> | 
| Date Column | Fully qualified date column | The Date Column indicates the date to be used when calculating this measurement | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).DateColumn<small> character varying(124) <br/> String</small> | 
| Restart sequence every month |  |  | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).StartNewMonth<small> character(1) <br/> Yes-No</small> | 
| Start No | Starting number/position | The Start Number indicates the starting position in the line or field number in the line | [ad_sequence](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence.html).StartNo<small> numeric(10) <br/> Integer</small> | 


### Tab: Sequence No

**[Created:** 15/03/2012 - **Updated:** 12/07/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 20: Sequence No - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_sequence_no](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence_no.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_sequence_no](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence_no.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Sequence | Document Sequence | The Sequence defines the numbering sequence to be used for documents. | [ad_sequence_no](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence_no.html).AD_Sequence_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_sequence_no](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence_no.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Year Month | YYYYMM |  | [ad_sequence_no](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence_no.html).CalendarYearMonth<small> character varying(6) <br/> String</small> | 
| Current Next | The next number to be used | The Current Next indicates the next number to use for this document | [ad_sequence_no](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_sequence_no.html).CurrentNext<small> numeric(10) <br/> Integer</small> | 


