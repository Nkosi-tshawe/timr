import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { TrackerComponent } from './pages/tracker/tracker.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/tracker' },
  { path: 'tracker', component: TrackerComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'report', component: ReportingComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
