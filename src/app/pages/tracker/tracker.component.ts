import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CdTimerComponent } from 'angular-cd-timer';
import { DayPilot, DayPilotSchedulerComponent } from 'daypilot-pro-angular';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit, AfterViewInit {
  @ViewChild('basicTimer')
  basicTimer!: CdTimerComponent;

  autoStart = false;
  timeStarted = false;
  constructor() {}

  ngAfterViewInit(): void {
    console.log('Timer', this.basicTimer.reset());
  }

  ngOnInit(): void {}
  onStartEndTime() {
    if (this.timeStarted) {
      this.basicTimer.stop();
      this.timeStarted = false;
      console.log('Time is', this.basicTimer.get());
      return;
    }
    this.timeStarted = true;
    this.basicTimer.start();
  }
}
