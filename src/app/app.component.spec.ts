import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        BoardComponent,
        FooterComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tictactoe-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tictactoe-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page-header__title')?.textContent).toContain('Let\'s play Tic Tac Toe!');
  });

  it('should create a 3x3 grid of cels in the board component', () => {
    const boardComponent = fixture.debugElement.query(By.directive(BoardComponent)).componentInstance;
    expect(boardComponent.grid[0].length).toEqual(3);
    expect(boardComponent.grid[1].length).toEqual(3);
    expect(boardComponent.grid[2].length).toEqual(3);
  });

  it('should display the correct text in the footer component', () => {
    const footerDebugElement = fixture.debugElement.query(By.directive(FooterComponent));
    const footerComponent = footerDebugElement.nativeElement as HTMLElement;
    expect(footerComponent.textContent?.trim()).toEqual('Open Source by Github by Katy Rosli');
  });
});
