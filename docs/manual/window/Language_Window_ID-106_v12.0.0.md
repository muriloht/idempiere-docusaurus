# Window: Language

**[Created:** 21/05/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Languages  
**Help:** The Language Window allows you to define multiple parallel language for users. This allows users to access the same data but have the windows, tabs and fields appear in different languages.If a language is a System Language, you can change the User Interface to this language (after translation).  Otherwise the language is only used for printing documents.For the language code, we suggest using the Java convention of country and language (e.g. fr_CN - Canadian French).Verify the translation creates missing translation records. Start this process after creating a new language.  
![](/img/docs/manual/Language-Window_iDempiere_v12.0.0.png)

### Tab: Language

**[Created:** 21/05/1999 - **Updated:** 02/01/2000 **]**   
**Description:** System and User Languages  
**Help:** If you want to add an additional User Interface language, select &quot;System Language&quot;. Otherwise, the system allows you to just translate elements for printing documents.  
**Tab Level:** 0

Table 10: Language - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).AD_Language<small> character varying(6) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).Name<small> character varying(60) <br/> String</small> | 
| Print Text | The label text to be printed on a document or correspondence. | The Label to be printed indicates the name that will be printed on a document or correspondence. The max length is 2000 characters. | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).PrintName<small> character varying(60) <br/> String</small> | 
| ISO Language Code | Lower-case two-letter ISO-3166 code - http://www.ics.uci.edu/pub/ietf/http/related/iso639.txt | The ISO Language Code indicates the standard ISO code for a language in lower case.  Information can be found at http://www.ics.uci.edu/pub/ietf/http/related/iso639.txt | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).LanguageISO<small> character(2) <br/> String</small> | 
| ISO Country Code | Upper-case two-letter alphanumeric ISO Country code according to ISO 3166-1 | The official list can be found at https://www.iso.org/obp/ui/#search | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).CountryCode<small> character(2) <br/> String</small> | 
| System Language | The screens, etc. are maintained in this Language | Select, if you want to have translated screens available in this language.  Please notify your system administrator to run the language maintenance scripts to enable the use of this language.  If the language is not supplied, you can translate the terms yourself. | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).IsSystemLanguage<small> character(1) <br/> Yes-No</small> | 
| Login Locale |  |  | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).IsLoginLocale<small> character(1) <br/> Yes-No</small> | 
| Base Language | The system information is maintained in this language |  | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).IsBaseLanguage<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Date Pattern | Java Date Pattern | Option Date pattern in Java notation. Examples: dd.MM.yyyy - dd/MM/yyyyIf the pattern for your language is not correct, please create a iDempiere support request with the correct information | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).DatePattern<small> character varying(20) <br/> String</small> | 
| Time Pattern | Java Time Pattern | Option Time pattern in Java notation. Examples: &quot;hh:mm:ss aaa z&quot; - &quot;HH:mm:ss&quot;If the pattern for your language is not correct, please create a iDempiere support request with the correct information | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).TimePattern<small> character varying(20) <br/> String</small> | 
| Print Paper | Printer paper definition | Printer Paper Size, Orientation and Margins | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).AD_PrintPaper_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language Maintenance | Maintain language translation in system | You can Add Missing Translation entries (required after activating an additional System Language) - Delete Translation Records - or Re-Create the translation Records (first delete and add missing entries).Note that Adding the Missing Translation records creates them by copying the System Language (English).  You would apply the Language Pack after that process.  Run Synchronize Terminology after importing the translation. | [ad_language](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_language.html).Processing<small> character(1) <br/> Button</small> | 


