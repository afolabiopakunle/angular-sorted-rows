import { Component, } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  companies = [
    {name: "Company Afolabi", category: "Finance", start: 1981, end: 2003},
    {name: "Company Afolake", category: "Retail", start: 1992, end: 2003},
    {name: "Company Omolola", category: "Auto", start: 1999, end: 2007},
    {name: "Company Olajumoke", category: "Retail", start: 1989, end: 2010},
    {name: "Company Olaotan", category: "Technology", start: 2009, end: 2014},
    {name: "Company Omodesire", category: "Finance", start: 1987, end: 2010},
    {name: "Company Ayomikun", category: "Auto", start: 1986, end: 1996},
    {name: "Company Ajibade", category: "Technology", start: 2011, end: 2016},
    {name: "Company Adenike", category: "Retail", start: 1981, end: 1989},
  ]
  
}
