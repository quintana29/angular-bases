import { Component } from '@angular/core';

@Component({
  selector: 'app-hereos-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames: string[] = ['Spiderman', 'Ironman', 'She Hulk', 'Thor'];
  public deletedHero?: string;


  removeLastHero(): void {
   this.deletedHero = this.heroesNames.pop();
}

}
