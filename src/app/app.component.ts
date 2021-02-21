import { Component } from '@angular/core';
import {Bridge} from './bridge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bridge';

  currentBridge: Bridge ;

  handleBridgeChange(bridge: Bridge) : void {
    console.log('handleBridgeChange', bridge);
    this.currentBridge = bridge;
    console.log("current bridge", this.currentBridge);
  }
}
