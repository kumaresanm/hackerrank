import { Component } from "@angular/core";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter {
  farentVal: number;
  celVal: number;

  convertCel($event) {
    this.farentVal = $event * 9 / 5 + 32;
  }

  convertFar($event) {
    this.celVal = ($event - 32) * 5 / 9;
  }
}
