import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrl: './cards-section.component.scss',
})
export class CardsSectionComponent {
  title = ['2D Demo', '3D Demo', 'Webinar', 'Customers'];
  conteudo = [
    'View a demo of an interactive parts catalogue created with Components Engine to discover the software funtionalities.',
    'The spare parts software Components Engine allows you to create 3D interactive parts catalogs. View our online demo.',
  ];
}
