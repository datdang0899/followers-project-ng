import { TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
describe('CourseComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CourseComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=course.component.spec.js.map