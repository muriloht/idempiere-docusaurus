# Process: Migrate Storage Provider 

**[Created:** 28/02/2020 - **Updated:** 10/03/2022 **]**  
**Description:** Migrate the storage provider for attachments, archives and/or images  
**Help:** WARNING: This process can be destructive, so please be sure that you have a backup of the database, as well as a backup of your old storage provider.The process migrates files between storage providers.Tenant: Optional, select a tenant to migrate, when empty it will migrate all tenants with the Actual Storage ProviderActual Storage Provider: Alternatively, you can define here the storage provider to migrateStorage Provider: The new storage provider to migrate the filesMigrate Attachment: Migrate the attachment filesMigrate Archive: Migate the archive filesMigrate Image: Migrate the image  filesMigrate Data: When unchecked, just the storage provider is changed in tenant, but the files are not migrated (they can be migrated in a future execution of this same process)Record ID Range: Optionally you can define a range of IDs for the records to migrate, so you can run this process in parallel to migrate the dataDelete old/existing files: If enabled, when a file is migrated the program tries to free space deleting the file from the previous storage provider.  Note that migrating from/to a DB storage provider is a destructive action that cannot be recovered, it implies deleting the old/existing files.In case of failure or timeout, the process can be launched again, it commits on every file migrated.  
**Class:** [org.idempiere.process.MigrateStorageProvider](https://jenkins.idempiere.org/job/iDempiere12Daily/ws/org.idempiere.javadoc/API/org/idempiere/process/MigrateStorageProvider.html)

![](/img/docs/manual/MigrateStorageProvider-Process_iDempiere_v12.0.0.png)

Table: Process Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | AD_AllClients_V_ID<br/>Table Direct | 
| Actual Storage Provider |  |  | Actual_StorageProvider_ID<br/>Table | 
| Storage Provider |  |  | AD_StorageProvider_ID<br/>Table Direct | 
| Migrate Attachment |  |  | IsMigrateAttachment<br/>Yes-No | 
| Migrate Archive |  |  | IsMigrateArchive<br/>Yes-No | 
| Migrate Image |  |  | IsMigrateImage<br/>Yes-No | 
| Migrate Data |  |  | IsMigrateData<br/>Yes-No | 
| Record ID | Direct internal record ID | The Record ID is the internal unique identifier of a record. Please note that zooming to the record may not be successful for Orders, Invoices and Shipment/Receipts as sometimes the Sales Order type is not known. | Record_ID<br/>Integer | 
| Delete old/existing files | Delete the records from the old storage provider after moved | WARNING!  This option cannot be rolled back!  Be cautious, take backups.  If not enabled, the system administrator can/must remove manually the old files from the previous storage provider later. | DeleteOld<br/>Yes-No | 


