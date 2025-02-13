# Process: Complete MFA Registration 

**[Created:** 30/05/2021 - **Updated:** 04/06/2021 **]**  
**Description:** Complete a registration for a multi-factor authentication mechanism  
**Help:**   
**Class:** [org.compiere.process.MFACompleteRegistration](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/MFACompleteRegistration.html)

![](/img/docs/manual/CompleteMFARegistration-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| MFA Registration |  |  | MFA_Registration_ID<br/>Table | 
| Validation Code |  |  | MFAValidationCode<br/>String | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | Name<br/>String | 
| Preferred |  |  | IsUserMFAPreferred<br/>Yes-No | 


