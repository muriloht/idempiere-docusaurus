# Window: Change Audit

**[Created:** 29/05/2003 - **Updated:** 02/01/2000 **]**  
**Description:** Audit of data changes  
**Help:** Log of data changes  
![](/img/docs/manual/ChangeAudit-Window_iDempiere_v12.0.0.png)

### Tab: Change Audit

**[Created:** 29/05/2003 - **Updated:** 24/09/2005 **]**   
**Description:** Log of data changes  
**Help:** Log of data changes  
**Tab Level:** 0

Table 10: Change Audit - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Session | User Session Online or Web | Online or Web Session Information | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).AD_Session_ID<small> numeric(10) <br/> Search</small> | 
| Transaction | Name of the transaction | Internal name of the transaction | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).TrxName<small> character varying(1000) <br/> String</small> | 
| Change Log | Log of data changes | Log of data changes | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).AD_ChangeLog_ID<small> numeric(10) <br/> ID</small> | 
| Updated | Date this record was updated | The Updated field indicates the date that this record was updated. | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).Updated<small> timestamp without time zone <br/> Date+Time</small> | 
| Updated By | User who updated this records | The Updated By field indicates the user who updated this record. | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).UpdatedBy<small> numeric(10) <br/> Search</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).Record_ID<small> numeric(10) <br/> Record ID</small> | 
| Column | Column in the table | Link to the database column of the table | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).AD_Column_ID<small> numeric(10) <br/> Search</small> | 
| Record UUID |  |  | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).Record_UU<small> character varying(36) <br/> Record UUID</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Customization | The change is a customization of the data dictionary and can be applied after Migration | The migration &quot;resets&quot; the system to the current/original setting.  If selected you can save the customization and re-apply it.  Please note that you need to check, if your customization has no negative side effect in the new release. | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).IsCustomization<small> character(1) <br/> Yes-No</small> | 
| Event Change Log | Type of Event in Change Log |  | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).EventChangeLog<small> character(1) <br/> List</small> | 
| Old Value | The old file data | Old data overwritten in the field | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).OldValue<small> character varying(4000) <br/> String</small> | 
| New Value | New field value | New data entered in the field | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).NewValue<small> character varying(4000) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).Description<small> character varying(255) <br/> String</small> | 
| Un-Do Changes | Undo changes | You can undo certain changes. | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).Undo<small> character(1) <br/> Button</small> | 
| Re-Do Changes | Reapply changes | You can reapply certain changes. | [ad_changelog](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_changelog.html).Redo<small> character(1) <br/> Button</small> | 


