import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize game state correctly on new game', () => {
    component.newGame();
    expect(component.squares).toEqual(Array(9).fill(null));
    expect(component.winner).toBeNull();
    expect(component.xIsNext).toBeTrue();
  });

  it('should update game state correctly on move', () => {
    const idx = 0;
    component.makeMove(idx);
    expect(component.squares[idx]).toEqual('X');
    expect(component.xIsNext).toBeFalse();
  });

  it('should correctly identify winner', () => {
    component.squares = ['X', 'O', 'X', 'O', 'O', 'X', null, null, null];
    const winner = component.calculateWinner();
    expect(winner).toEqual('X');
  });
});
