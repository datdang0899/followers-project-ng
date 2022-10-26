import { TestBed } from '@angular/core/testing';
import { NotfoundComponent } from './notfound.component';
describe('NotfoundComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NotfoundComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(NotfoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=notfound.component.spec.js.map