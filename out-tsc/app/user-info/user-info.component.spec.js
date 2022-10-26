import { TestBed } from '@angular/core/testing';
import { UserInfoComponent } from './user-info.component';
describe('UserInfoComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserInfoComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(UserInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-info.component.spec.js.map