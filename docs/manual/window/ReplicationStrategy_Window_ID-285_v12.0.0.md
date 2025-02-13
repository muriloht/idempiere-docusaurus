# Window: Replication Strategy

**[Created:** 19/06/2003 - **Updated:** 15/01/2024 **]**  
**Description:** Maintain Data Replication Strategy  
**Help:** The Data Replication Strategy determines which tables and how they are replicated. Note that the migration does not synchronize Application Dictionary items.  
![](/img/docs/manual/ReplicationStrategy-Window_iDempiere_v12.0.0.png)

### Tab: Replication Strategy

**[Created:** 19/06/2003 - **Updated:** 15/01/2024 **]**   
**Description:** Data Replication Strategy  
**Help:** The Data Replication Strategy determines which tables and how they are replicated. Note that the migration does not synchronize Application Dictionary items.  
**Tab Level:** 0

Table 10: Replication Strategy - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_replicationstrategy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationstrategy.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_replicationstrategy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationstrategy.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ad_replicationstrategy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationstrategy.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_replicationstrategy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationstrategy.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_replicationstrategy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationstrategy.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [ad_replicationstrategy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationstrategy.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_replicationstrategy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationstrategy.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_replicationstrategy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationstrategy.html).EntityType<small> character varying(40) <br/> Table</small> | 
| Export Processor |  |  | [ad_replicationstrategy](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationstrategy.html).EXP_Processor_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Replication Table

**[Created:** 19/06/2003 - **Updated:** 05/03/2008 **]**   
**Description:** Data Replication Strategy Table Info  
**Help:** Determines how the table is replicated. You have full access to Local tables, Reference tables are on Remote systems and are read-only. The data of Merge tables on Remote systems is copied to the central system.  
**Tab Level:** 1

Table 20: Replication Table - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_replicationtable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationtable.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_replicationtable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationtable.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Replication Strategy | Data Replication Strategy | The Data Replication Strategy determines what and how tables are replicated | [ad_replicationtable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationtable.html).AD_ReplicationStrategy_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_replicationtable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationtable.html).AD_Table_ID<small> numeric(10) <br/> Table Direct</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_replicationtable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationtable.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_replicationtable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationtable.html).Description<small> character varying(255) <br/> String</small> | 
| Replication Type | Type of Data Replication | The Type of data Replication determines the direction of the data replication.  Reference means that the data in this system is read only -&gt; Local means that the data in this system is not replicated to other systems - Merge means that the data in this system is synchronized with the other system | [ad_replicationtable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationtable.html).ReplicationType<small> character(1) <br/> List</small> | 
| Entity Type | Dictionary Entity Type; Determines ownership and synchronization | The Entity Types &quot;Dictionary&quot;, &quot;iDempiere&quot; and &quot;Application&quot; might be automatically synchronized and customizations deleted or overwritten.  For customizations, copy the entity and select &quot;User&quot;! | [ad_replicationtable](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationtable.html).EntityType<small> character varying(40) <br/> Table</small> | 


### Tab: Replication Document

**[Created:** 05/03/2008 - **Updated:** 05/03/2008 **]**   
**Description:**   
**Help:**   
**Tab Level:** 1

Table 30: Replication Document - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_replicationdocument](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationdocument.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [ad_replicationdocument](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationdocument.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Replication Strategy | Data Replication Strategy | The Data Replication Strategy determines what and how tables are replicated | [ad_replicationdocument](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationdocument.html).AD_ReplicationStrategy_ID<small> numeric(10) <br/> ID</small> | 
| Document Type | Document type or rules | The Document Type determines document sequence and processing rules | [ad_replicationdocument](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationdocument.html).C_DocType_ID<small> numeric(10) <br/> Table Direct</small> | 
| Table | Database Table information | The Database Table provides the information of the table definition | [ad_replicationdocument](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationdocument.html).AD_Table_ID<small> numeric(10) <br/> Search</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_replicationdocument](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationdocument.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_replicationdocument](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationdocument.html).Description<small> character varying(255) <br/> String</small> | 
| Replication Type | Type of Data Replication | The Type of data Replication determines the direction of the data replication.  Reference means that the data in this system is read only -&gt; Local means that the data in this system is not replicated to other systems - Merge means that the data in this system is synchronized with the other system | [ad_replicationdocument](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_replicationdocument.html).ReplicationType<small> character(1) <br/> List</small> | 


