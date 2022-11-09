import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DayPilot, DayPilotSchedulerComponent } from 'daypilot-pro-angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('timesheet')
  timesheet!: DayPilotSchedulerComponent;

  constructor() {}
  ngAfterViewInit(): void {
    const firstDay = this.timesheet.control.visibleStart().getDatePart();
    const businessStart = this.timesheet.control.businessBeginsHour || 9;
    const scrollToTarget = firstDay.addHours(businessStart);
    this.timesheet.control.scrollTo(scrollToTarget);
  }

  config: DayPilot.SchedulerConfig = {
    viewType: 'Days',
    timeHeaders: [{ groupBy: 'Hour' }, { groupBy: 'Cell', format: 'mm' }],
    scale: 'CellDuration',
    cellDuration: 15,
    startDate: '2022-11-04',
    showNonBusiness: false,
    businessBeginsHour: 8,
    businessEndsHour: 18,

    onTimeRangeSelected: async (args) => {
      const dp = args.control;
      const modal = await DayPilot.Modal.prompt('Create a new task:', 'Task 1');
      dp.clearSelection();
      if (modal.canceled) {
        return;
      }
      dp.events.add({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        resource: args.resource,
        text: modal.result,
      });
    },
    eventDeleteHandling: 'Update',
    onEventDeleted: (args) => {
      args.control.message('Event deleted: ' + args.e.text());
    },

    days: 7,
    rowHeaderColumns: [
      { text: 'Date' },
      { text: 'Day', width: 50 },
      { text: 'Hours', width: 50 },
    ],
    onBeforeRowHeaderRender: (args) => {
      const day = args.row.start.toString('ddd');
      args.row.columns[1].text = `${day}`;
      const duration = args.row.events.totalDuration();

      if (duration.totalSeconds() === 0) {
        return;
      }

      let hours = duration.toString('H:mm');
      if (duration.totalDays() >= 1) {
        hours =
          Math.floor(duration.totalHours()) + ':' + duration.toString('mm');
      }
      args.row.columns[2].text = `${hours}`;
      const max = DayPilot.Duration.ofHours(8);
      const pct =
        args.row.events.totalDuration().totalSeconds() / max.totalSeconds();
      args.row.columns[2].areas = [
        {
          bottom: 0,
          left: 0,
          width: 50,
          height: 4,
          backColor: '#ffe599',
        },
        {
          bottom: 0,
          left: 0,
          width: 50 * pct,
          height: 4,
          backColor: '#f1c232',
        },
      ];
    },

    onBeforeEventRender: (args) => {
      const duration = new DayPilot.Duration(args.data.start, args.data.end);
      args.data.areas = [
        {
          right: 2,
          top: 0,
          bottom: 0,
          width: 30,
          fontColor: '#999999',
          text: duration.toString('h:mm'),
          style: 'display: flex; align-items: center',
        },
      ];
    },
  };

  events: any[] = [
    {
      id: 1,
      start: '2022-11-08T09:15:00',
      end: '2022-11-08T11:00:00',
      text: 'GetSpace',
      employee: 'P1',
      barColor: '#6aa84f',
    },
    {
      id: 2,
      start: '2022-11-08T11:15:00',
      end: '2022-11-08T15:00:00',
      text: 'OHS',
      employee: 'P2',
      barColor: '#2058cf',
    },

    // ...
  ];

  ngOnInit(): void {}
}
