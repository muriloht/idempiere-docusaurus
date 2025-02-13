# Window: Password Rule

**[Created:** 19/04/2012 - **Updated:** 19/04/2012 **]**  
**Description:**   
**Help:**   
![](/img/docs/manual/PasswordRule-Window_iDempiere_v12.0.0.png)

### Tab: Password Rule

**[Created:** 19/04/2012 - **Updated:** 19/04/2012 **]**   
**Description:**   
**Help:**   
**Tab Level:** 0

Table 10: Password Rule - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).Name<small> character varying(60) <br/> String</small> | 
| Minimum Length |  |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).MinLength<small> numeric(10) <br/> Integer</small> | 
| Maximum Length | Maximum Length of Data |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).MaxLength<small> numeric(10) <br/> Integer</small> | 
| Alphabetical Character | Require at least # alphabetical in passwords |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).AlphabeticalCharacter<small> numeric(10) <br/> Integer</small> | 
| Digit Character | Require at least # digit in passwords |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).DigitCharacter<small> numeric(10) <br/> Integer</small> | 
| Uppercase Character | Require at least # upper case char |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).UppercaseCharacter<small> numeric(10) <br/> Integer</small> | 
| Lowercase Character | Require at least # lower case char |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).LowercaseCharacter<small> numeric(10) <br/> Integer</small> | 
| Non Alpha Numeric Character | Require at least # non-alphanumeric char |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).NonAlphaNumericCharacter<small> numeric(10) <br/> Integer</small> | 
| Alphabetical Sequence | Length of alphabetical sequence to validate |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).AlphabeticalSequence<small> numeric(10) <br/> Integer</small> | 
| Numerical Sequence | Length of numerical sequence to validate |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).NumericalSequence<small> numeric(10) <br/> Integer</small> | 
| QWERTY Sequence | Length of QWERTY sequences to validate |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).QWERTYSequence<small> numeric(10) <br/> Integer</small> | 
| Repeat Character Regex | Length of repeated characters to validate |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).RepeatCharacterRegex<small> numeric(10) <br/> Integer</small> | 
| Days Reuse Password | Define number of day can reuse password | Each time change password, old password keep in historyExample this value = 60. user can&#x27;t reuse password in history has age &lt; 60 | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).Days_Reuse_Password<small> numeric(10) <br/> Integer</small> | 
| User Name Rule | Validate the password doesn&#x27;t contain user name (ignore case and match backwards) |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).IsUserNameRule<small> character(1) <br/> Yes-No</small> | 
| Whitespace | Whitespace validation |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).IsWhitespace<small> character(1) <br/> Yes-No</small> | 
| Using Dictionary |  |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).IsUsingDictionary<small> character(1) <br/> Yes-No</small> | 
| Match Backwards of Dictionary | Match dictionary words backwards |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).IsDictMatchBackwards<small> character(1) <br/> Yes-No</small> | 
| Path Dictionary |  |  | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).PathDictionary<small> character varying(255) <br/> FileName</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_passwordrule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_passwordrule.html).IsActive<small> character(1) <br/> Yes-No</small> | 


