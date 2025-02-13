# Window: Accounting Dimensions

**[Created:** 16/06/2003 - **Updated:** 30/06/2021 **]**  
**Description:** Maintain Non-Account Dimension Trees  
**Help:** Maintain Trees of non account segment trees.  Account segment trees (as well as user defined dimensions) are mainatained in the Account Element window. Please note that you will not be able to create new entities in this window if you have not default set for all manfatory values!  
![](/img/docs/manual/AccountingDimensions-Window_iDempiere_v12.0.0.png)

### Tab: Organization Dimension

**[Created:** 16/06/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Organizationt Accounting Dimension Tree  
**Help:** Please note that you will not be able to create new entities in this window if you have not default set for all mandatory values!  
**Tab Level:** 0

Table 10: Organization Dimension - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [ad_org](https://idempiere-schemaspy.muriloht.com/adempiere/tables/ad_org.html).IsSummary<small> character(1) <br/> Yes-No</small> | 


### Tab: Sales Region Dimension

**[Created:** 16/06/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Sales Region Accounting Dimension Tree  
**Help:** Please note that you will not be able to create new entities in this window if you have not default set for all mandatory values!  
**Tab Level:** 0

Table 20: Sales Region Dimension - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [c_salesregion](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_salesregion.html).IsSummary<small> character(1) <br/> Yes-No</small> | 


### Tab: Activity Dimension

**[Created:** 16/06/2003 - **Updated:** 05/06/2013 **]**   
**Description:** Maintain Activity Accounting Dimension Tree  
**Help:** Please note that you will not be able to create new entities in this window if you have not default set for all mandatory values!  
**Tab Level:** 0

Table 30: Activity Dimension - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [c_activity](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_activity.html).IsSummary<small> character(1) <br/> Yes-No</small> | 


### Tab: Project Dimension

**[Created:** 16/06/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Project Accounting Dimension Tree  
**Help:** Please note that you will not be able to create new entities in this window if you have not default set for all mandatory values!  
**Tab Level:** 0

Table 40: Project Dimension - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).Description<small> character varying(255) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Set Project Type | Set Project Type and for Service Projects copy Phases and Tasks of Project Type into Project |  | [c_project](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_project.html).C_ProjectType_ID<small> numeric(10) <br/> Button</small> | 


### Tab: Business Partner Dimension

**[Created:** 16/06/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Business Partner Accounting Dimension Tree  
**Help:** Please note that you will not be able to create new entities in this window if you have not default set for all mandatory values!  
**Tab Level:** 0

Table 50: Business Partner Dimension - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Name<small> character varying(120) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Business Partner Group | Business Partner Group | The Business Partner Group provides a method of defining defaults to be used for individual Business Partners. | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).C_BP_Group_ID<small> numeric(10) <br/> Table Direct</small> | 
| Open Balance | Total Open Balance Amount in primary Accounting Currency | The Total Open Balance Amount is the calculated open item amount for Customer and Vendor activity.  If the Balance is below zero, we owe the Business Partner.  The amount is used for Credit Management.Invoices and Payment Allocations determine the Open Balance (i.e. not Orders or Payments). | [c_bpartner](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bpartner.html).TotalOpenBalance<small> numeric <br/> Amount</small> | 


### Tab: Product Dimension

**[Created:** 16/06/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Product Accounting Dimension Tree  
**Help:** Please note that you will not be able to create new entities in this window if you have not default set for all mandatory values!  
**Tab Level:** 0

Table 60: Product Dimension - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Value<small> character varying(510) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Name<small> character varying(255) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Product Category | Category of a Product | Identifies the category which this product belongs to.  Product categories are used for pricing and selection. | [m_product](https://idempiere-schemaspy.muriloht.com/adempiere/tables/m_product.html).M_Product_Category_ID<small> numeric(10) <br/> Table Direct</small> | 


### Tab: Campaign Dimension

**[Created:** 19/06/2003 - **Updated:** 02/01/2000 **]**   
**Description:** Maintain Marketing Campaign Accounting Dimension Tree  
**Help:** Please note that you will not be able to create new entities in this window if you have not default set for all mandatory values!  
**Tab Level:** 0

Table 70: Campaign Dimension - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_campaign](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_campaign.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_campaign](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_campaign.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Search Key | Search key for the record in the format required - must be unique | A search key allows you a fast method of finding a particular record.If you leave the search key empty, the system automatically creates a numeric number.  The document sequence used for this fallback number is defined in the &quot;Maintain Sequence&quot; window with the name &quot;DocumentNo_&quot;, where TableName is the actual name of the table (e.g. C_Order). | [c_campaign](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_campaign.html).Value<small> character varying(40) <br/> String</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_campaign](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_campaign.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_campaign](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_campaign.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_campaign](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_campaign.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Summary Level | This is a summary entity | A summary entity represents a branch in a tree rather than an end-node. Summary entities are used for reporting and do not have own values. | [c_campaign](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_campaign.html).IsSummary<small> character(1) <br/> Yes-No</small> | 
| Channel | Sales Channel | The Sales Channel identifies a channel (or method) of sales generation. | [c_campaign](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_campaign.html).C_Channel_ID<small> numeric(10) <br/> Table Direct</small> | 


