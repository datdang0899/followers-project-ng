import { TestBed } from '@angular/core/testing';
import { ZippyComponent } from './zippy.component';
describe('ZippyComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ZippyComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ZippyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=zippy.component.spec.js.map