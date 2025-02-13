# Window: Performance Benchmark

**[Created:** 26/12/2005 - **Updated:** 26/12/2005 **]**  
**Description:** Performance Benchmark  
**Help:** Data Series to compare internal performance with (e.g. stock price, ...)  
![](/img/docs/manual/PerformanceBenchmark-Window_iDempiere_v12.0.0.png)

### Tab: Benchmark

**[Created:** 26/12/2005 - **Updated:** 26/12/2005 **]**   
**Description:** Performance Benchmark  
**Help:** Data Series to compare internal performance with (e.g. stock price, ...)  
**Tab Level:** 0

Table 10: Benchmark - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_benchmark](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmark.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_benchmark](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmark.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_benchmark](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmark.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_benchmark](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmark.html).Description<small> character varying(255) <br/> String</small> | 
| Comment/Help | Comment or Hint | The Help field contains a hint, comment or help about the use of this item. | [pa_benchmark](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmark.html).Help<small> character varying(2000) <br/> Text</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_benchmark](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmark.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Accumulation Type | How to accumulate data on time axis | Sum adds the data points (e.g. stock volume) - Average is appropriate for e.g. Stock Price | [pa_benchmark](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmark.html).AccumulationType<small> character(1) <br/> List</small> | 


### Tab: Data

**[Created:** 26/12/2005 - **Updated:** 26/12/2005 **]**   
**Description:** Performance Benchmark Data Point  
**Help:** Data Series Point to compare internal performance with (e.g. stock price, ...)  
**Tab Level:** 1

Table 20: Data - Fields 

Table: Report Parameters
| **Name** | **Description** | **Help** | **Technical Info** |
|----------|---------------|-----------|--------------------|
| Tenant | Tenant for this installation. | A Tenant is a company or a legal entity. You cannot share data between Tenants. | [pa_benchmarkdata](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmarkdata.html).AD_Client_ID<small> numeric(10) <br/> Table Direct</small> | 
| Organization | Organizational entity within tenant | An organization is a unit of your tenant or legal entity - examples are store, department. You can share data between organizations. | [pa_benchmarkdata](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmarkdata.html).AD_Org_ID<small> numeric(10) <br/> Table Direct</small> | 
| Benchmark | Performance Benchmark | Data Series to compare internal performance with (e.g. stock price, ...) | [pa_benchmarkdata](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmarkdata.html).PA_Benchmark_ID<small> numeric(10) <br/> Table Direct</small> | 
| Name | Alphanumeric identifier of the entity | The name of an entity (record) is used as an default search option in addition to the search key. The name is up to 60 characters in length. | [pa_benchmarkdata](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmarkdata.html).Name<small> character varying(60) <br/> String</small> | 
| Description | Optional short description of the record | A description is limited to 255 characters. | [pa_benchmarkdata](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmarkdata.html).Description<small> character varying(255) <br/> String</small> | 
| Active | The record is active in the system | There are two methods of making records unavailable in the system: One is to delete the record, the other is to de-activate the record. A de-activated record is not available for selection, but available for reports.There are two reasons for de-activating and not deleting records:(1) The system requires the record for audit purposes.(2) The record is referenced by other records. E.g., you cannot delete a Business Partner, if there are invoices for this partner record existing. You de-activate the Business Partner and prevent that this record is used for future entries. | [pa_benchmarkdata](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmarkdata.html).IsActive<small> character(1) <br/> Yes-No</small> | 
| Date | Benchmark Date | Date of the Benchmark Data Point | [pa_benchmarkdata](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmarkdata.html).BenchmarkDate<small> timestamp without time zone <br/> Date+Time</small> | 
| Value | Benchmark Value | Value of the Benchmark Data Point | [pa_benchmarkdata](https://idempiere-schemaspy.muriloht.com/adempiere/tables/pa_benchmarkdata.html).BenchmarkValue<small> numeric <br/> Number</small> | 


