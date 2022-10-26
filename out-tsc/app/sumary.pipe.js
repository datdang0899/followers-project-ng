import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SumaryPipe {
    transform(value, limit) {
        if (!value)
            return null;
        let actualLimit = limit ? limit : 50;
        return value.substring(0, actualLimit) + "...";
    }
}
SumaryPipe.ɵfac = function SumaryPipe_Factory(t) { return new (t || SumaryPipe)(); };
SumaryPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "sumary", type: SumaryPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SumaryPipe, [{
        type: Pipe,
        args: [{ name: 'sumary' }]
    }], null, null); })();
//# sourceMappingURL=sumary.pipe.js.map