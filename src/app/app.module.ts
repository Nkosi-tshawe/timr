import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CdTimerModule } from 'angular-cd-timer';
import { DayPilotModule } from 'daypilot-pro-angular';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { TrackerComponent } from './pages/tracker/tracker.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    LeaveComponent,
    ReportingComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTabsModule,
    NzButtonModule,
    NzGridModule,
    NzDividerModule,
    NzTypographyModule,
    NzCardModule,
    CdTimerModule,
    DayPilotModule,
    NzAvatarModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
