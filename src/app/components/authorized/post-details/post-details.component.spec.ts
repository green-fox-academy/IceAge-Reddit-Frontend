import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { GatewayService } from 'src/app/services/gateway.service';

import { PostDetailsComponent } from './post-details.component';

describe('PostDetailsComponent', () => {
    let component: PostDetailsComponent;
    let fixture: ComponentFixture<PostDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostDetailsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PostDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
