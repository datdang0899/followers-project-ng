import { TestBed } from '@angular/core/testing';
import { TitleCaseComponent } from './title-case.component';
describe('TitleCaseComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TitleCaseComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(TitleCaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=title-case.component.spec.js.map