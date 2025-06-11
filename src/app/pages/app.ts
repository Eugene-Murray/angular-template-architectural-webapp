import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../components/navbar/navbar";
import { LandingSection } from "../components/landing-section/landing-section";
import { About } from "../components/about/about";
import { Projects } from "../components/projects/projects";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, LandingSection, About, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-template-architectural-webapp';
}
