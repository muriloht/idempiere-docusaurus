# Window: Import Confirmations

**[Created:** 02/07/2004 - **Updated:** 02/01/2000 **]**  
**Description:** Import Receipt/Shipment Confirmation Lines  
**Help:** Import Confirmation data of existing Receipt/Shipment Confirmations  
![](/img/docs/manual/ImportConfirmations-Window_iDempiere_v12.0.0.png)

### Tab: Confirmation Lines

**[Created:** 02/07/2004 - **Updated:** 02/01/2000 **]**   
**Description:** Import Receipt/Shipment Confirmation Lines  
**Help:** Import Confirmation data of existing Receipt/Shipment Confirmations  
**Tab Level:** 0

Table 10: Confirmation Lines - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Imported | Has this import been processed | The Imported check box indicates if this import has been processed. | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).I_IsImported<small> character(1) <br/> Yes-No</small> | 
| Ship/Receipt Confirmation Import Line | Material Shipment or Receipt Confirmation Import Line | Import Confirmation Line Details | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).I_InOutLineConfirm_ID<small> numeric(10) <br/> ID</small> | 
| Import Error Message | Messages generated from import process | The Import Error Message displays any error messages generated during the import process. | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).I_ErrorMsg<small> character varying(2000) <br/> String</small> | 
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Ship/Receipt Confirmation Line | Material Shipment or Receipt Confirmation Line | Confirmation details | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).M_InOutLineConfirm_ID<small> numeric(10) <br/> Search</small> | 
| Confirmation No | Confirmation Number |  | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).ConfirmationNo<small> character varying(20) <br/> String</small> | 
| Confirmed Quantity | Confirmation of a received quantity | Confirmation of a received quantity | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).ConfirmedQty<small> numeric <br/> Quantity</small> | 
| Scrapped Quantity | The Quantity scrapped due to QA issues |  | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).ScrappedQty<small> numeric <br/> Quantity</small> | 
| Difference | Difference Quantity |  | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).DifferenceQty<small> numeric <br/> Quantity</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).Description<small> character varying(255) <br/> String</small> | 
| Import Confirmations | Import Confirmations | The Parameters are default values for null import record values, they do not overwrite any data. | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).Processing<small> character(1) <br/> Button</small> | 
| Processed | The document has been processed | The Processed checkbox indicates that a document has been processed. | [i_inoutlineconfirm](https://idempiere-schemaspy.muriloht.com/adempiere/tables/i_inoutlineconfirm.html).Processed<small> character(1) <br/> Yes-No</small> | 


