# Process: Convert passwords to hashes 

**[Created:** 29/06/2011 - **Updated:** 29/06/2011 **]**  
**Description:** Convert existing plain text/encrypted user passwords to one way hash  
**Help:** This process will overwrite existing user passwords with a salted SHA-512 hash of the password so that they cannot be recovered if your database is compromised.(Note: If your password column is currently encrypted, the hash will also be encrypted.)  
**Class:** [org.compiere.process.HashPasswords](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/compiere/process/HashPasswords.html)

![](/img/docs/manual/Convertpasswordstohashes-Process_iDempiere_v12.0.0.png)



