import { TestBed } from '@angular/core/testing';
import { StarComponent } from './star.component';
describe('StarComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [StarComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(StarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=star.component.spec.js.map