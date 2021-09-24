import { Component } from "@angular/core";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter {
  farentVal: string;
  celVal: string;

  convertCel($event) {
    this.celVal = $event;
    this.farentVal =($event * 9 / 5 + 32).toFixed(1);
  }

  convertFar($event) {
    this.farentVal = $event;
    this.celVal = (($event - 32) * 5 / 9).toFixed(1);
  }
}
