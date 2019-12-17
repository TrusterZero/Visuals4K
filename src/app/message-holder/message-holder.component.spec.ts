import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageHolderComponent } from './message-holder.component';

describe('MessageHolderComponent', () => {
  let component: MessageHolderComponent;
  let fixture: ComponentFixture<MessageHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
