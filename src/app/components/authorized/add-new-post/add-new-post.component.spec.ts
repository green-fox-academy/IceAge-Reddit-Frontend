import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GatewayService } from 'src/app/services/gateway.service';

import { AddNewPostComponent } from './add-new-post.component';

class MockDataService {}

class RouterTestingModule {}

describe('AddNewPostComponent', () => {
    let component: AddNewPostComponent;
    let fixture: ComponentFixture<AddNewPostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [AddNewPostComponent],
            providers: [
                HttpClient,
                { provide: GatewayService, useClass: MockDataService },
                { provide: Router, useClass: RouterTestingModule },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddNewPostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
