import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render value as X when input value is X', () => {
    component.value = 'X';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button.x');
    expect(button).toBeTruthy();
    expect(button.textContent.trim()).toEqual('X');
  });

  it('should render value as O when input value is O', () => {
    component.value = 'O';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button.o');
    expect(button).toBeTruthy();
    expect(button.textContent.trim()).toEqual('O');
  });

  it('should not render value when input value is null', () => {
    component.value = null;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent.trim()).toEqual('');
  });
  
  it('should apply the "x" class when input value is "X"', () => {
    component.value = 'X';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button.x');
    expect(button).toBeTruthy();
  });
  
  it('should apply the "o" class when input value is "O"', () => {
    component.value = 'O';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button.o');
    expect(button).toBeTruthy();
  });
  
  it('should not apply the "x" or "o" class when input value is null', () => {
    component.value = null;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('x')).toBeFalse();
    expect(button.classList.contains('o')).toBeFalse();
  });
});
