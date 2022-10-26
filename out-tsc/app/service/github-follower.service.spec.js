import { TestBed } from '@angular/core/testing';
import { GithubFollowerService } from './github-follower.service';
describe('GithubFollowerService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GithubFollowerService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=github-follower.service.spec.js.map