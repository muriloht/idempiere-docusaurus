# Window: Resource Type

**[Created:** 15/06/2002 - **Updated:** 17/12/2007 **]**  
**Description:** Maintain Resource Types  
**Help:** Maintain Resource types and their principal availability. it is used to calculate the available time in a resource. It allows input of starting time and end time for the slot according to the working days.  
![](/img/docs/manual/ResourceType-Window_iDempiere_v12.0.0.png)

### Tab: Resource Type

**[Created:** 15/06/2002 - **Updated:** 17/12/2007 **]**   
**Description:** Maintain Resource Types  
**Help:** Maintain Resource types and their principal availability.  
**Tab Level:** 0

Table 10: Resource Type - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| UOM | Unit of Measure | The UOM defines a unique non monetary Unit of Measure | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).C_UOM_ID<small> numeric(10) <br/> Table Direct</small> | 
| Allow UoM Fractions | Allow Unit of Measure Fractions | If allowed, you can enter UoM Fractions | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).AllowUoMFractions<small> character(1) <br/> Yes-No</small> | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).M_Product_Category_ID<small> numeric(10) <br/> Table Direct</small> | 
| Tax Category | Tax Category | The Tax Category provides a method of grouping similar taxes.  For example, Sales Tax or Value Added Tax. | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).C_TaxCategory_ID<small> numeric(10) <br/> Table Direct</small> | 
| Single Assignment only | Only one assignment at a time (no double-booking or overlapping) | If selected, you can only have one assignment for the resource at a single point in time.   It is also  not possible to have overlapping assignments. | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).IsSingleAssignment<small> character(1) <br/> Yes-No</small> | 
| Time Slot | Resource has time slot availability | Resource is only available at certain times | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).IsTimeSlot<small> character(1) <br/> Yes-No</small> | 
| Slot Start | Time when timeslot starts | Starting time for time slots | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).TimeSlotStart<small> timestamp without time zone <br/> Time</small> | 
| Slot End | Time when timeslot ends | Ending time for time slots | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).TimeSlotEnd<small> timestamp without time zone <br/> Time</small> | 
| Day Slot | Resource has day slot availability | Resource is only available on certain days | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).IsDateSlot<small> character(1) <br/> Yes-No</small> | 
| Sunday | Available on Sundays |  | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).OnSunday<small> character(1) <br/> Yes-No</small> | 
| Monday | Available on Mondays |  | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).OnMonday<small> character(1) <br/> Yes-No</small> | 
| Tuesday | Available on Tuesdays |  | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).OnTuesday<small> character(1) <br/> Yes-No</small> | 
| Wednesday | Available on Wednesdays |  | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).OnWednesday<small> character(1) <br/> Yes-No</small> | 
| Thursday | Available on Thursdays |  | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).OnThursday<small> character(1) <br/> Yes-No</small> | 
| Friday | Available on Fridays |  | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).OnFriday<small> character(1) <br/> Yes-No</small> | 
| Saturday | Available on Saturday |  | [s_resourcetype](https://idempiere-schemaspy.muriloht.com/adempiere/tables/s_resourcetype.html).OnSaturday<small> character(1) <br/> Yes-No</small> | 


