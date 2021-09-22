import { Component, OnInit, OnChanges } from '@angular/core';
import { GameBrowserService } from '../../services/game-browser.service';
import { GameFilterPipe } from 'src/app/pipes/game-filter.pipe';
// import paginate = require('jw-paginate');

@Component({
  selector: 'app-game-browser',
  templateUrl: './game-browser.component.html',
  styleUrls: ['./game-browser.component.scss']
})
export class GameBrowserComponent implements OnInit, OnChanges {
  gameData: any[];
  searchText = '';

  constructor(private gameService: GameBrowserService, private gameFilter: GameFilterPipe) { }

  ngOnInit() {
    this.gameService.getGameData().subscribe(gameDate => {
      this.gameData = gameDate;
      console.log('gameDate ', gameDate);
    });
  }

  ngOnChanges() {
    this.gameData = this.gameFilter.transform(this.gameData, this.searchText);
  }

}
