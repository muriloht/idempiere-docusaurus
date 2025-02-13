# Window: Partner Relation

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**  
**Description:** Maintain Business Partner Relations  
**Help:** Business Partner Relation allow to maintain Third Party Relationship rules: who receives invoices for shipments or pays for invoices.  
![](/img/docs/manual/PartnerRelation-Window_iDempiere_v12.0.0.png)

### Tab: Relation

**[Created:** 19/02/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Business Partner Relation  
**Help:** Business Partner Relation allow to maintain Third Party Relationship rules: who receives invoices for shipments or pays for invoices.  If the Location of the Business partner is not defined, the rule applies to all location of that Business Partner  
**Tab Level:** 0

Table 10: Relation - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Business Partner | Identifies a Business Partner | A Business Partner is anyone with whom you transact.  This can include Vendor, Customer, Employee or Salesperson | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).C_BPartner_ID<small> numeric(10) <br/> Search</small> | 
| Partner Location | Identifies the (ship to) address for this Business Partner | The Partner address indicates the location of a Business Partner | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).C_BPartner_Location_ID<small> numeric(10) <br/> Table Direct</small> | 
| Related Partner | Related Business Partner | The related Business Partner Acts on behalf of the Business Partner - example the Related Partner pays invoices of the Business Partner - or we pay to the Related Partner for invoices received from the Business Partner | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).C_BPartnerRelation_ID<small> numeric(10) <br/> Search</small> | 
| Related Partner Location | Location of the related Business Partner |  | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).C_BPartnerRelation_Location_ID<small> numeric(10) <br/> Table</small> | 
| Ship Address | Business Partner Shipment Address | If the Ship Address is selected, the location is used to ship goods to a customer or receive goods from a vendor. | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).IsShipTo<small> character(1) <br/> Yes-No</small> | 
| Invoice Address | Business Partner Invoice/Bill Address | If the Invoice Address is selected, the location is used to send invoices to a customer or receive invoices from a vendor. | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).IsBillTo<small> character(1) <br/> Yes-No</small> | 
| Pay-From Address | Business Partner pays from that address and we&#x27;ll send dunning letters there | If the Pay-From Address is selected, this location is the address the Business Partner pays from and where dunning letters will be sent to. | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).IsPayFrom<small> character(1) <br/> Yes-No</small> | 
| Remit-To Address | Business Partner payment address | If the Remit-To Address is selected, the location is used to send payments to the vendor. | [c_bp_relation](https://idempiere-schemaspy.muriloht.com/adempiere/tables/c_bp_relation.html).IsRemitTo<small> character(1) <br/> Yes-No</small> | 


