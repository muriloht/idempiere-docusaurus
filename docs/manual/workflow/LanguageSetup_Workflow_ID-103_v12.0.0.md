# Workflow: Language Setup 

**[Created:** 10/09/2000 - **Updated:** 25/12/2005 **]**  
**Description:** Setup a new Language of the system and translate elements  
**Help:** Define a new language as a system language.

![](/img/docs/manual/LanguageSetup-Workflow_iDempiere_v12.0.0.png)

Table: Fields

| **Name** | **Description** | **Help** | **Type** | **Zoom** |
|----------|---------------|-----------|----------|----------|
| Language | Maintain Languages | The Language Window allows you to define multiple parallel language for users. This allows users to access the same data but have the windows, tabs and fields appear in different languages.If a language is a System Language, you can change the User Interface to this language (after translation).  Otherwise the language is only used for printing documents.For the language code, we suggest using the Java convention of country and language (e.g. fr_CN - Canadian French).Verify the translation creates missing translation records. Start this process after creating a new language. | User Window | Language | 
| System Elements | Translate System Elements | System Elements are used to centrally define field labels, description and help. When translating an Element, the appropriate information of Fields in Windows, Parameters and Reports are translated (overwritten) | User Window | Element | 
| Messages | Translate Messages | Translate the messages used in Windows, Forms and Processes | User Window | Message | 
| Reference | Translate References | References are used as prefedined selection lists.  You only need to translate the List Elements !! | User Window | Reference | 
| Window & Tab | Translate Windows and Tabs | Translate the Name, Description and Help for Windows and Tabs.  Most of the Fields are already translated, if they are centrally maintained. | User Window | Window, Tab and Field | 
| Form | Translate Forms | Forms are special Windows and you need to translate its name, description and Help. | User Window | Form | 
| Report & Process | Translate Reports and Processes | Translate the Name, Description and Help for Processes and Reports. You don&#x27;t need to translate the Parameters, if they are centrally maintained. | User Window | Report and Process | 
| Workflow | Translate Workflows | Translate Name, Description and Help of Workflows and their Nodes.  You only need to translate the List Elements !! | User Window | Workflow | 


