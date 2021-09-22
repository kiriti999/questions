import { TestBed } from '@angular/core/testing';

import { GameBrowserService } from './game-browser.service';

describe('GameBrowserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameBrowserService = TestBed.get(GameBrowserService);
    expect(service).toBeTruthy();
  });
});
