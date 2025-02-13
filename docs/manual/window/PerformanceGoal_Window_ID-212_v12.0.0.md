# Window: Performance Goal

**[Created:** 24/04/2001 - **Updated:** 31/12/2005 **]**  
**Description:** Define Performance Goals  
**Help:** The Performance Goal Window allows you to define performance goals or all, a role or a user  
![](/img/docs/manual/PerformanceGoal-Window_iDempiere_v12.0.0.png)

### Tab: Performance Goal

**[Created:** 24/04/2001 - **Updated:** 28/03/2013 **]**   
**Description:** Performance Goal  
**Help:** The Performance Goal Tab defines specific goals for performance.  
**Tab Level:** 0

Table 10: Performance Goal - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).Description<small> character varying(255) <br/> String</small> | 
| Note | Optional additional user defined information | The Note field allows for optional entry of user defined information regarding this record | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).Note<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Role | Responsibility Role | The Role determines security and access a user who has this Role will have in the System. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).AD_Role_ID<small> numeric(10) <br/> Table Direct</small> | 
| User/Contact | User within the system - Internal or Business Partner Contact | The User identifies a unique user in the system. This could be an internal user or a business partner contact | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).AD_User_ID<small> numeric(10) <br/> Search</small> | 
| Sequence | Method of ordering records; lowest number comes first | The Sequence indicates the order of records | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).SeqNo<small> numeric(10) <br/> Integer</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Color Schema | Performance Color Schema | Visual representation of performance by color.  The Schema has often three levels (e.g. red-yellow-green).  iDempiere supports two levels (e.g. red-green) or four levels (e.g. gray-bronce-silver-gold).  Note that Measures without a goal are represented white.  The percentages could be between 0 and unlimited (i.e. above 100%). | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).PA_ColorSchema_ID<small> numeric(10) <br/> Table Direct</small> | 
| Parent Goal | Parent Goal | You can create a hierarchy of goals by linking the sub-goals to the summary goal.The measures are automatically rolled up | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).PA_GoalParent_ID<small> numeric(10) <br/> Table</small> | 
| Measure Target | Target value for measure | The Measure Target indicates the target or goal for this measure.  It is used as in comparing against the actual measures | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).MeasureTarget<small> numeric <br/> Number</small> | 
| Measure | Concrete Performance Measurement | The Measure identifies a concrete, measurable indicator of performance.  For example, sales dollars, prospects contacted. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).PA_Measure_ID<small> numeric(10) <br/> Table Direct</small> | 
| Date From | Starting date for a range | The Date From indicates the starting date of a range. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).DateFrom<small> timestamp without time zone <br/> Date+Time</small> | 
| Date To | End date of a date range | The Date To indicates the end date of a range (inclusive) | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).DateTo<small> timestamp without time zone <br/> Date+Time</small> | 
| Measure Scope | Performance Measure Scope | The scope of the goal can be broken down for initial display. Example: Scope is Year, Display is Month - the goal is entered as a yearly number, the display divides the goal by 12 | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).MeasureScope<small> character(1) <br/> List</small> | 
| Measure Display | Measure Scope initially displayed |  | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).MeasureDisplay<small> character(1) <br/> List</small> | 
| Chart Type | Type of chart to render |  | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).ChartType<small> character varying(2) <br/> List</small> | 
| Measure Actual | Actual value that has been measured. | The Measure Actual indicates the actual measured value. The measured values are used in determining if a performance goal has been met | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).MeasureActual<small> numeric <br/> Number</small> | 
| Date Last Run | Date the process was last run. | The Date Last Run indicates the last time that a process was run. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).DateLastRun<small> timestamp without time zone <br/> Date+Time</small> | 
| Performance Goal | Target achievement from 0..1 | The Goal Performance indicates the target achievement from 0 to 1. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).GoalPerformance<small> numeric <br/> Number</small> | 
| Relative Weight | Relative weight of this step (0 = ignored) | The relative weight allows you to adjust the project cycle report based on probabilities.  For example, if you have a 1:10 chance in closing a contract when it is in the prospect stage and a 1:2 chance when it is in the contract stage, you may put a weight of 0.1 and 0.5 on those steps. This allows sales funnels or measures of completion of your project. | [pa_goal](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goal.html).RelativeWeight<small> numeric <br/> Number</small> | 


### Tab: Restriction

**[Created:** 23/12/2005 - **Updated:** 28/03/2013 **]**   
**Description:** Performance Goal Restriction  
**Help:** Restriction of the performance measure to the Organization, Business Partner or Product defined.Example: The performance is only measured for HQThe measure must support the data, otherwise it is ignored.  
**Tab Level:** 1

Table 20: Restriction - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_goalrestriction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goalrestriction.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_goalrestriction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goalrestriction.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Goal | Performance Goal | The Performance Goal indicates what this users performance will be measured against. | [pa_goalrestriction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goalrestriction.html).PA_Goal_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_goalrestriction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goalrestriction.html).Name<small> character varying(60) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_goalrestriction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goalrestriction.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Restriction Type | Goal Restriction Type | Enter one or more records per Goal Restriction Type (e.g. Org o1, o2) | [pa_goalrestriction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goalrestriction.html).GoalRestrictionType<small> character(1) <br/> List</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. | [pa_goalrestriction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goalrestriction.html).Org_ID<small> numeric(10) <br/> Table</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [pa_goalrestriction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goalrestriction.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | [pa_goalrestriction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goalrestriction.html).C_BP_Group_ID<small> numeric(10) <br/> Table Direct</small> | 
| Product | Product, Service, Item | Identifies an item which is either purchased or sold in this organization. | [pa_goalrestriction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goalrestriction.html).M_Product_ID<small> numeric(10) <br/> Search</small> | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | [pa_goalrestriction](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_goalrestriction.html).M_Product_Category_ID<small> numeric(10) <br/> Table Direct</small> | 


