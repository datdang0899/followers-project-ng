import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class TitlecasePipe {
    transform(value) {
        if (!value)
            return null;
        let words = value.split(' ');
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (i > 0 && this.isPreposition(word)) {
                words[i] = word.toLowerCase();
            }
            else {
                words[i] = this.toTitleCase(word);
            }
        }
        return words.join(' ');
    }
    isPreposition(word) {
        let prepositions = ['of', 'the'];
        return prepositions.includes(word.toLowerCase());
    }
    toTitleCase(word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
}
TitlecasePipe.ɵfac = function TitlecasePipe_Factory(t) { return new (t || TitlecasePipe)(); };
TitlecasePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "titlecase", type: TitlecasePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitlecasePipe, [{
        type: Pipe,
        args: [{
                name: 'titlecase',
            }]
    }], null, null); })();
//# sourceMappingURL=titlecase.pipe.js.map