import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplication2RegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterSampleApplication2CountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterSampleApplication2LocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterSampleApplication2DepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterSampleApplication2TaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterSampleApplication2EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterSampleApplication2JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterSampleApplication2JobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterSampleApplication2RegionMySuffixModule,
        JhipsterSampleApplication2CountryMySuffixModule,
        JhipsterSampleApplication2LocationMySuffixModule,
        JhipsterSampleApplication2DepartmentMySuffixModule,
        JhipsterSampleApplication2TaskMySuffixModule,
        JhipsterSampleApplication2EmployeeMySuffixModule,
        JhipsterSampleApplication2JobMySuffixModule,
        JhipsterSampleApplication2JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplication2EntityModule {}
