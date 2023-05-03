import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';
import { SquareComponent } from '../square/square.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardComponent, SquareComponent ]
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
    component.squares = ['X', 'O', 'X', 'O', 'O', 'X', 'O', 'X', 'X'];
    const winner = component.calculateWinner();
    expect(winner).toEqual('X');
  });

  it('should reset game state on new game button click', () => {
    component.makeMove(0);
    component.makeMove(1);
    component.makeMove(3);
    const button = fixture.debugElement.nativeElement.querySelector('.board-page__button');
    button.click();
    expect(component.squares).toEqual(Array(9).fill(null));
    expect(component.winner).toBeNull();
    expect(component.xIsNext).toBeTrue();
  });

  it('should not update game state on move on a filled square', () => {
    component.makeMove(0);
    component.makeMove(0);
    expect(component.squares).toEqual(['X', null, null, null, null, null, null, null, null]);
    expect(component.xIsNext).toBeFalse();
  });

  it('should correctly identify a tie', () => {
    component.squares = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    const winner = component.calculateWinner();
    expect(winner).toBeNull();
  });

  it('should handle alternating moves by multiple players', () => {
    // Player X starts the game
    component.makeMove(0);
    expect(component.squares[0]).toEqual('X');
    expect(component.xIsNext).toBeFalse();
  
    // Player O makes the next move
    component.makeMove(1);
    expect(component.squares[1]).toEqual('O');
    expect(component.xIsNext).toBeTrue();
  
    // Player X makes the next move
    component.makeMove(2);
    expect(component.squares[2]).toEqual('X');
    expect(component.xIsNext).toBeFalse();
  
    // Player O makes the next move
    component.makeMove(3);
    expect(component.squares[3]).toEqual('O');
    expect(component.xIsNext).toBeTrue();
  
    // Player X makes the next move
    component.makeMove(4);
    expect(component.squares[4]).toEqual('X');
    expect(component.xIsNext).toBeFalse();
  
    // Player O makes the next move
    component.makeMove(5);
    expect(component.squares[5]).toEqual('O');
    expect(component.xIsNext).toBeTrue();
  
    // Player X makes the next move
    component.makeMove(6);
    expect(component.squares[6]).toEqual('X');
    expect(component.xIsNext).toBeFalse();
  
    // Player O makes the next move
    component.makeMove(7);
    expect(component.squares[7]).toEqual('O');
    expect(component.xIsNext).toBeTrue();
  
    // Player X makes the final move to win the game
    component.makeMove(8);
    expect(component.squares[8]).toEqual('X');
    expect(component.xIsNext).toBeFalse();
    expect(component.winner).toEqual('X');
  });
  
});
