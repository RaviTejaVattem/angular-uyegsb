import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class App {
  selectedVal = null;
  name = 'Angular';
  set1 = ['Tyrannosaurus', 'Velociraptor', 'Deinonychus'];
  set2 = ['Diplodocus', 'Saltasaurus', 'Apatosaurus']
  logChange(event: any) {
    console.log(event);
    // console.log(event.target.value);
    // this.selectedVal = event.target.value;
  }
}

bootstrapApplication(App);
