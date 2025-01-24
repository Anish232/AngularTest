import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "home",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Home.component.html",
  styleUrls: ["./Home.component.css"],
})
export class Home {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
