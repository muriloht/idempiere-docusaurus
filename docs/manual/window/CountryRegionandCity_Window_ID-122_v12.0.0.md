# Window: Country Region and City

**[Created:** 11/06/1999 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Countries Regions and Cities  
**Help:** The Countries, Regions and Cities Window defines the different entities that can be used in any address field.  It defines the format of the address as well as associating Regions with Countries and Cities with Regions or Countries. You would define Countries usually only on System level.  
![](/img/docs/manual/CountryRegionandCity-Window_iDempiere_v12.0.0.png)

### Tab: Country

**[Created:** 11/06/1999 - **Updated:** 24/02/2018 **]**   
**Description:** Define Country  
**Help:** The Country Tab defines any country in which you do business.  Values entered here are referenced in location records for Business Partners.  
**Tab Level:** 0

Table 10: Country - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| ISO Country Code | Upper-case two-letter alphanumeric ISO Country code according to ISO 3166-1 | The official list can be found at https://www.iso.org/obp/ui/#search | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).CountryCode<small> character(2) <br/> String</small> | 
| ISO Alpha-3 Code | ISO Alpha-3 country code - a three-letter code that represents a country name, which is usually more closely related to the country name | The official list can be found at https://www.iso.org/obp/ui/#search | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).ISOCountryCodeAlpha3<small> character varying(3) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).Description<small> character varying(255) <br/> String</small> | 
| M49 Code | Standard country codes for statistical use (M49) defined by the United Nations | The official list can be found at https://unstats.un.org/unsd/methodology/m49/ | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).M49Code<small> character varying(3) <br/> String</small> | 
| Allow Cities out of List | A flag to allow cities, currently not in the list, to be entered |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).AllowCitiesOutOfList<small> character(1) <br/> Yes-No</small> | 
| Country has Region | Country contains Regions | The Country has Region checkbox is selected if the Country being defined is divided into regions.  If this checkbox is selected, the Region Tab is accessible. | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).HasRegion<small> character(1) <br/> Yes-No</small> | 
| Region | Name of the Region | The Region Name defines the name that will print when this region is used in a document. | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).RegionName<small> character varying(60) <br/> String</small> | 
| Address Print Format | Format for printing this Address | The Address Print format defines the format to be used when this address prints.  The following notations are used: @C@=City  @P@=Postal  @A@=PostalAdd  @R@=Region | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).DisplaySequence<small> character varying(20) <br/> String</small> | 
| Reverse Address Lines | Print Address in reverse Order | If NOT selected the sequence is Address 1, Address 2, Address 3, Address 4, City/Region/Postal, Country.If selected the sequence is Country, City/Region/Postal, Address 4, Address 3, Address 2, Address 1.The sequence of City/Region/Postal is determined by the address format. | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).IsAddressLinesReverse<small> character(1) <br/> Yes-No</small> | 
| Capture Sequence |  | The Capture Sequence defines the fields to be used when capturing an address on this country.  The following notations are used: @CO@=Country, @C@=City, @P@=Postal, @A@=PostalAdd, @R@=Region, @A1@=Address 1 to @A4@=Address 4.  Country is always mandatory, add a bang ! to make another field mandatory, for example @C!@ makes city mandatory, @A1!@ makes Address 1 mandatory. | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).CaptureSequence<small> character varying(60) <br/> String</small> | 
| Local Address Format | Format for printing this Address locally | The optional Local Address Print format defines the format to be used when this address prints for the Country.  If defined, this format is used for printing the address for the country rather then the standard address format. The following notations are used: @C@=City  @P@=Postal  @A@=PostalAdd  @R@=Region | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).DisplaySequenceLocal<small> character varying(20) <br/> String</small> | 
| Reverse Local Address Lines | Print Local Address in reverse Order | If NOT selected the local sequence is Address 1, Address 2, Address 3, Address 4, City/Region/Postal, Country.If selected the local sequence is Country, City/Region/Postal, Address 4, Address 3, Address 2, Address 1.The sequence of City/Region/Postal is determined by the local address format. | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).IsAddressLinesLocalReverse<small> character(1) <br/> Yes-No</small> | 
| Postal Code Format | Format of the postal code; Can contain fixed format elements, Variables: &quot;_lLoOaAcCa09&quot; | Validation elements: (Space) any character_Space (fixed character)lany Letter a..Z NO spaceLany Letter a..Z NO space converted to upper caseoany Letter a..Z or spaceOany Letter a..Z or space converted to upper caseaany Letters &amp; Digits NO spaceAany Letters &amp; Digits NO space converted to upper casecany Letters &amp; Digits or spaceCany Letters &amp; Digits or space converted to upper case0Digits 0..9 NO space9Digits 0..9 or spaceExample of format &quot;(000)_000-0000&quot; | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).ExpressionPostal<small> character varying(20) <br/> String</small> | 
| Additional Postal code | Has Additional Postal Code | The Additional Postal Code checkbox indicates if this address uses an additional Postal Code.  If it is selected an additional field displays for entry of the additional Postal Code. | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).HasPostal_Add<small> character(1) <br/> Yes-No</small> | 
| Additional Postal Format | Format of the value; Can contain fixed format elements, Variables: &quot;_lLoOaAcCa09&quot; | Validation elements: (Space) any character_Space (fixed character)lany Letter a..Z NO spaceLany Letter a..Z NO space converted to upper caseoany Letter a..Z or spaceOany Letter a..Z or space converted to upper caseaany Letters &amp; Digits NO spaceAany Letters &amp; Digits NO space converted to upper casecany Letters &amp; Digits or spaceCany Letters &amp; Digits or space converted to upper case0Digits 0..9 NO space9Digits 0..9 or spaceExample of format &quot;(000)_000-0000&quot; | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).ExpressionPostal_Add<small> character varying(20) <br/> String</small> | 
| Phone Format | Format of the phone; Can contain fixed format elements, Variables: &quot;_lLoOaAcCa09&quot; | Validation elements: (Space) any character_Space (fixed character)lany Letter a..Z NO spaceLany Letter a..Z NO space converted to upper caseoany Letter a..Z or spaceOany Letter a..Z or space converted to upper caseaany Letters &amp; Digits NO spaceAany Letters &amp; Digits NO space converted to upper casecany Letters &amp; Digits or spaceCany Letters &amp; Digits or space converted to upper case0Digits 0..9 NO space9Digits 0..9 or spaceExample of format &quot;(000)_000-0000&quot; | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).ExpressionPhone<small> character varying(20) <br/> String</small> | 
| Media Size | Java Media Size | The Java Media Size. Example: &quot;MediaSize.ISO.A4&quot; (the package javax.print.attribute.standard is assumed). If you define your own media size, use the fully qualified name.If the pattern for your language is not correct, please create a iDempiere support request with the correct information | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).MediaSize<small> character varying(40) <br/> String</small> | 
| Bank Routing No Format | Format of the Bank Routing Number |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).ExpressionBankRoutingNo<small> character varying(20) <br/> String</small> | 
| Bank Account No Format | Format of the Bank Account |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).ExpressionBankAccountNo<small> character varying(20) <br/> String</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Currency | The Currency for this record | Indicates the Currency to be used when processing or reporting on this record | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).C_Currency_ID<small> numeric(10) <br/> Table Direct</small> | 
| Use Postcode Lookup | Does this country have a post code web service | Enable the IsPostcodeLookup if you wish to configure a post code lookup web service | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).IsPostcodeLookup<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Lookup URL | The URL of the web service that the plugin connects to in order to retrieve postcode data | Enter the URL of the web service that the plugin connects to in order to retrieve postcode data | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).LookupUrl<small> character varying(100) <br/> String</small> | 
| Lookup Tenant ID | The Client ID or Login submitted to the Lookup URL | Enter the Client ID or Login for your account provided by the post code web service provider | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).LookupClientID<small> character varying(50) <br/> String</small> | 
| Lookup Password | The password submitted to the Lookup URL | Enter the password for your account provided by the post code web service provider | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).LookupPassword<small> character varying(50) <br/> String</small> | 
| Lookup ClassName | The class name of the postcode lookup plugin | Enter the class name of the post code lookup plugin for your postcode web service provider | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).LookupClassName<small> character varying(255) <br/> String</small> | 
| Placeholder for Address 1 |  |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).PlaceholderAddress1<small> character varying(255) <br/> String</small> | 
| Placeholder for Address 2 |  |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).PlaceholderAddress2<small> character varying(255) <br/> String</small> | 
| Placeholder for Address 3 |  |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).PlaceholderAddress3<small> character varying(255) <br/> String</small> | 
| Placeholder for Address 4 |  |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).PlaceholderAddress4<small> character varying(255) <br/> String</small> | 
| Placeholder for Address 5 |  |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).PlaceholderAddress5<small> character varying(255) <br/> String</small> | 
| Placeholder for postal |  |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).PlaceholderPostal<small> character varying(255) <br/> String</small> | 
| Placeholder for additional zip |  |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).PlaceholderPostal_Add<small> character varying(255) <br/> String</small> | 
| Placeholder for city |  |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).PlaceholderCity<small> character varying(255) <br/> String</small> | 
| Placeholder for comments |  |  | [c_country](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country.html).PlaceholderComments<small> character varying(255) <br/> String</small> | 


### Tab: Region

**[Created:** 11/06/1999 - **Updated:** 24/02/2018 **]**   
**Description:** Define Regions  
**Help:** The Region Tab  defines a Region within a Country.  This tab is enabled only if the Has Region checkbox is selected for the Country.  
**Tab Level:** 1

Table 20: Region - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_region](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_region](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Country | Country | The Country defines a Country.  Each Country must be defined before it can be used in any document. | [c_region](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region.html).C_Country_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_region](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_region](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_region](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Default | Default value | The Default Checkbox indicates if this record will be used as a default value. | [c_region](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region.html).IsDefault<small> character(1) <br/> Yes-No</small> | 


### Tab: City

**[Created:** 26/09/1999 - **Updated:** 12/06/2013 **]**   
**Description:** Define Cities  
**Help:** The Cities Tab defines Cities within a Country or Region.  Cities entered here are not referenced when entering the address.  
**Tab Level:** 2

Table 30: City - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Country | Country | The Country defines a Country.  Each Country must be defined before it can be used in any document. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).C_Country_ID<small> numeric(10) <br/> Table Direct</small> | 
| Region | Identifies a geographical Region | The Region identifies a unique Region for this Country. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).C_Region_ID<small> numeric(10) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| ZIP | Postal code | The Postal Code or ZIP identifies the postal code for this entity&#x27;s address. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).Postal<small> character varying(10) <br/> String</small> | 
| Area Code | Phone Area Code | Phone Area Code | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).AreaCode<small> character varying(10) <br/> String</small> | 
| Locode | Location code - UN/LOCODE | UN/Locode is a combination of a 2-character country code and a 3-character location code, e.g. BEANR is known as the city of Antwerp (ANR) which is located in Belgium (BE).See: http://www.unece.org/cefact/locode/service/main.htm | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).Locode<small> character varying(10) <br/> String</small> | 
| Coordinates | Location coordinate | This column contains the geographical coordinates (latitude/longitude) of the location.In order to avoid unnecessary use of non-standard characters and space, the following standard presentation is used:0000N 00000W 0000S 00000E where the two last digits refer to minutes and the two or three first digits indicate the degrees | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).Coordinates<small> character varying(15) <br/> String</small> | 


### Tab: Translation

**[Created:** 21/03/2014 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 2

Table 33: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_region_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_region_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Region | Identifies a geographical Region | The Region identifies a unique Region for this Country. | [c_region_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region_trl.html).C_Region_ID<small> numeric(10) <br/> Search</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [c_region_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_region_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [c_region_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_region_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_region_trl.html).Name<small> character varying(60) <br/> String</small> | 


### Tab: City (Without Regions)

**[Created:** 13/06/2013 - **Updated:** 12/05/2022 **]**   
**Description:** Cities without Region  
**Help:**   
**Tab Level:** 1

Table 35: City (Without Regions) - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Country | Country | The Country defines a Country.  Each Country must be defined before it can be used in any document. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).C_Country_ID<small> numeric(10) <br/> Table Direct</small> | 
| Region | Identifies a geographical Region | The Region identifies a unique Region for this Country. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).C_Region_ID<small> numeric(10) <br/> Table</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| ZIP | Postal code | The Postal Code or ZIP identifies the postal code for this entity&#x27;s address. | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).Postal<small> character varying(10) <br/> String</small> | 
| Area Code | Phone Area Code | Phone Area Code | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).AreaCode<small> character varying(10) <br/> String</small> | 
| Locode | Location code - UN/LOCODE | UN/Locode is a combination of a 2-character country code and a 3-character location code, e.g. BEANR is known as the city of Antwerp (ANR) which is located in Belgium (BE).See: http://www.unece.org/cefact/locode/service/main.htm | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).Locode<small> character varying(10) <br/> String</small> | 
| Coordinates | Location coordinate | This column contains the geographical coordinates (latitude/longitude) of the location.In order to avoid unnecessary use of non-standard characters and space, the following standard presentation is used:0000N 00000W 0000S 00000E where the two last digits refer to minutes and the two or three first digits indicate the degrees | [c_city](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_city.html).Coordinates<small> character varying(15) <br/> String</small> | 


### Tab: Translation

**[Created:** 25/07/2003 - **Updated:** 27/10/2024 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 40: Translation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Country | Country | The Country defines a Country.  Each Country must be defined before it can be used in any document. | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).C_Country_ID<small> numeric(10) <br/> Table Direct</small> | 
| Language | Language for this entity | The Language identifies the language to use for display and formatting | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).AD_Language<small> character varying(6) <br/> Table</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Translated | This column is translated | The Translated checkbox indicates if this column is translated. | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).IsTranslated<small> character(1) <br/> Yes-No</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).Description<small> character varying(255) <br/> String</small> | 
| Region | Name of the Region | The Region Name defines the name that will print when this region is used in a document. | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).RegionName<small> character varying(60) <br/> String</small> | 
| Placeholder for Address 1 |  |  | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).PlaceholderAddress1<small> character varying(255) <br/> String</small> | 
| Placeholder for Address 2 |  |  | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).PlaceholderAddress2<small> character varying(255) <br/> String</small> | 
| Placeholder for Address 3 |  |  | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).PlaceholderAddress3<small> character varying(255) <br/> String</small> | 
| Placeholder for Address 4 |  |  | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).PlaceholderAddress4<small> character varying(255) <br/> String</small> | 
| Placeholder for Address 5 |  |  | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).PlaceholderAddress5<small> character varying(255) <br/> String</small> | 
| Placeholder for postal |  |  | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).PlaceholderPostal<small> character varying(255) <br/> String</small> | 
| Placeholder for additional zip |  |  | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).PlaceholderPostal_Add<small> character varying(255) <br/> String</small> | 
| Placeholder for city |  |  | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).PlaceholderCity<small> character varying(255) <br/> String</small> | 
| Placeholder for comments |  |  | [c_country_trl](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_country_trl.html).PlaceholderComments<small> character varying(255) <br/> String</small> | 


### Tab: Country Group

**[Created:** 07/08/2014 - **Updated:** 07/08/2014 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 50: Country Group - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_countrygroupcountry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_countrygroupcountry.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_countrygroupcountry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_countrygroupcountry.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Country | Country | The Country defines a Country.  Each Country must be defined before it can be used in any document. | [c_countrygroupcountry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_countrygroupcountry.html).C_Country_ID<small> numeric(10) <br/> Table Direct</small> | 
| Country Group |  |  | [c_countrygroupcountry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_countrygroupcountry.html).C_CountryGroup_ID<small> numeric(10) <br/> Table Direct</small> | 
| Date From | Starting date for a range | The Date From indicates the starting date of a range. | [c_countrygroupcountry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_countrygroupcountry.html).DateFrom<small> timestamp without time zone <br/> Date</small> | 
| Date To | End date of a date range | The Date To indicates the end date of a range (inclusive) | [c_countrygroupcountry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_countrygroupcountry.html).DateTo<small> timestamp without time zone <br/> Date</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_countrygroupcountry](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_countrygroupcountry.html).IsActive<small> character(1) <br/> Yes-No</small> | 


