# Window: Schedule

**[Created:** 18/09/2012 - **Updated:** 27/09/2012 **]**  
**Description:** Times for the scheduler  
**Help:**   
![](/img/docs/manual/Schedule-Window_iDempiere_v12.0.0.png)

### Tab: Schedule

**[Created:** 18/09/2012 - **Updated:** 18/09/2012 **]**   
**Description:** Schedule  
**Help:**   
**Tab Level:** 0

Table 10: Schedule - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).Description<small> character varying(225) <br/> String</small> | 
| Schedule Type | Type of schedule | Define the method how the next occurrence is calculated | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).ScheduleType<small> character(1) <br/> List</small> | 
| Frequency Type | Frequency of event | The frequency type is used for calculating the date of the next event. | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).FrequencyType<small> character(1) <br/> List</small> | 
| Cron Scheduling Pattern | Cron pattern to define when the process should be invoked. | Cron pattern to define when the process should be invoked. See http://www.sauronsoftware.it/projects/cron4j/api/it/sauronsoftware/cron4j/SchedulingPattern.htmlIf set, the time zone from tenant info is used. Otherwise, use the default JVM time zone at the server. | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).CronPattern<small> character varying(255) <br/> String</small> | 
| Frequency | Frequency of events | The frequency is used in conjunction with the frequency type in determining an event. Example: If the Frequency Type is Week and the Frequency is 2 - it is every two weeks. | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).Frequency<small> numeric(10) <br/> Integer</small> | 
| Run only on IP |  |  | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).RunOnlyOnIP<small> character varying(60) <br/> String</small> | 
| System Schedule | Schedule Just For System |  | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).IsSystemSchedule<small> character(1) <br/> Yes-No</small> | 
| Ignore Processing Time | Do not include processing time for the DateNextRun calculation | When this is selected, the previous DateNextRun is always use as the source for the next DateNextRun calculation. | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).IsIgnoreProcessingTime<small> character(1) <br/> Yes-No</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_schedule](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_schedule.html).IsActive<small> character varying(1) <br/> Yes-No</small> | 


