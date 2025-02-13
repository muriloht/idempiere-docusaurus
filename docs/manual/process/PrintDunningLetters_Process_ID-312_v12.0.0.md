# Process: Print Dunning Letters 

**[Created:** 30/11/2004 - **Updated:** 15/01/2024 **]**  
**Description:** Print Dunning letters to paper or send PDF  
**Help:** (Re)Print Dunning Letters or send them as PDF attachments to the Business Partner Contact with a valid EMail address.  
**Class:** [org.compiere.process.DunningPrint](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/DunningPrint.html)

![](/img/docs/manual/PrintDunningLetters-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| EMail PDF | Email Document PDF files to Business Partner |  | EMailPDF<br/>Yes-No | 
| Mail Template | Text templates for mailings | The Mail Template indicates the mail template for return messages. Mail text can include variables.  The priority of parsing is User/Contact, Business Partner and then the underlying business object (like Request, Dunning, Workflow object).So, @Name@ would resolve into the User name (if user is defined defined), then Business Partner name (if business partner is defined) and then the Name of the business object if it has a Name.For Multi-Lingual systems, the template is translated based on the Business Partner&#x27;s language selection. | R_MailText_ID<br/>Table Direct | 
| Dunning Run | Dunning Run |  | C_DunningRun_ID<br/>Table Direct | 
| Only If BP has Balance | Include only if Business Partner has outstanding Balance |  | IsOnlyIfBPBalance<br/>Yes-No | 
| Print Unprocessed Entries Only | Print the unprocessed (unprinted) entries of the dunning run only. | Print the unprocessed (unprinted) entries of the dunning run only. This allows you to reprint only certain dunning entries. | PrintUnprocessedOnly<br/>Yes-No | 


