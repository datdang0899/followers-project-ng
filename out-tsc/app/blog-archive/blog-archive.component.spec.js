import { TestBed } from '@angular/core/testing';
import { BlogArchiveComponent } from './blog-archive.component';
describe('BlogArchiveComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BlogArchiveComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(BlogArchiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=blog-archive.component.spec.js.map