import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostService } from 'src/app/services/post.service';

import { FeedComponent } from './feed.component';

describe('FeedComponent', () => {

  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedComponent ],
      providers: [ PostService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});