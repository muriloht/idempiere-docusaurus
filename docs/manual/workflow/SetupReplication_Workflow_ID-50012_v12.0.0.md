# Workflow: Setup Replication 

**[Created:** 05/03/2008 - **Updated:** 17/02/2022 **]**  
**Description:** Setup of data replication  
**Help:** Data Replication allows you to synchronize data of remote instances with a central office.  All actions are initialized from the central office.Central System:- setup system with all organizations, roles, etc.- run the migration to make sure that it is up-to-date- export the central systemRemote System:- install the exact version as Central System- import data from Central System in the remote locationsCentral System:- Replication Strategy- Define Export Format- Config Export Processor- Start JMS Server** Enter Transactions **Remote System:- Config Import Processor

![](/img/docs/manual/SetupReplication-Workflow_iDempiere_v12.0.0.png)

Table: Fields

| **Name** | **Description** | **Help** | **Type** | **Zoom** |
|----------|---------------|-----------|----------|----------|
| Replication Strategy | Replication Strategy |  | User Window | Replication Strategy | 
| Export Format | Export Format |  | User Window | Export Format | 
| Export Processor Type | Export Processor Type |  | User Window | Export Processor Type | 
| Export Processor | Export Processor |  | User Window | Export Processor | 
| Import Processor Type | Import Processor Type |  | User Window | Import Processor Type | 
| Import Processor | Import Processor |  | User Window | Import Processor | 


