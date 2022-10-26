import { TestBed } from '@angular/core/testing';
import { ChangePasswordFormComponent } from './change-password-form.component';
describe('ChangePasswordFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChangePasswordFormComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ChangePasswordFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=change-password-form.component.spec.js.map