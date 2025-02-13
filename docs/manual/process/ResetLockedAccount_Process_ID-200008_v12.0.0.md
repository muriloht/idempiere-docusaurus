# Process: Reset Locked Account 

**[Created:** 03/09/2012 - **Updated:** 10/03/2022 **]**  
**Description:** Reset Locked Account for User  
**Help:** Select a locked user from the list to unlock it.  Alternatively you can run the process without selecting any user, in this case the process will unlock all locked users from the tenant applying accordingly the policies configured for &quot;max account lock&quot; and &quot;max inactive period&quot;.  
**Class:** [org.adempiere.process.ResetLockedAccount](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/adempiere/process/ResetLockedAccount.html)

![](/img/docs/manual/ResetLockedAccount-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | AD_User_ID<br/>Table Direct | 


