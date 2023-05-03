import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct content', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.footer-page__github').textContent).toContain('Open sourced on Github');
    expect(compiled.querySelector('.footer-page__website').textContent).toContain('Katy Rosli');
  });

  it('should open Github link in new tab', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const githubLink = fixture.nativeElement.querySelector('.footer-page__github');
    expect(githubLink.target).toEqual('_blank');
    expect(githubLink.getAttribute('rel')).toEqual('noopener noreferrer');
  })

  it('should open website link in new tab', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const websiteLink = fixture.nativeElement.querySelector('.footer-page__website');
    expect(websiteLink.target).toEqual('_blank');
    expect(websiteLink.getAttribute('rel')).toEqual('noopener noreferrer');
  });
});
