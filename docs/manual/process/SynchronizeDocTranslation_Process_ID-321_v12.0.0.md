# Process: Synchronize Doc Translation 

**[Created:** 10/03/2005 - **Updated:** 15/01/2024 **]**  
**Description:** Synchronize Document Translation  
**Help:** This applies to the tenant defined document translations, e.g. for UoM, Payment Terms, Product Info, etc.If the current tenant has multi-lingual documents enabled, then the main record is copied to the tenant language (defined in Tenant window).  BE CAREFUL as this option can potentially damage data you modified, it is recommended to take a backup and plan carefully what you&#x27;re doing if this is the first time running this process.If the current tenant has not multi-lingual documents enabled, the translations for documents are synchronized with the main record (i.e. it copies the content of the main record to the translation records).  This process is necessary when switching to a mono-lingual environment as there the terminology is maintained not in the translation records.  
**Class:** [org.compiere.process.TranslationDocSync](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/TranslationDocSync.html)

![](/img/docs/manual/SynchronizeDocTranslation-Process_iDempiere_v12.0.0.png)



