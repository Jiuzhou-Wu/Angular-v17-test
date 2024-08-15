import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeSquareComponent } from './tic-tac-toe-square.component';

describe('TicTacToeSquareComponent', () => {
  let component: TicTacToeSquareComponent;
  let fixture: ComponentFixture<TicTacToeSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicTacToeSquareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicTacToeSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
