import { TestBed } from '@angular/core/testing';
import { GithubFollowerComponent } from './github-follower.component';
describe('GithubFollowerComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GithubFollowerComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(GithubFollowerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=github-follower.component.spec.js.map