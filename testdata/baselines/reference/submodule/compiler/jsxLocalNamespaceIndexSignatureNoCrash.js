//// [tests/cases/compiler/jsxLocalNamespaceIndexSignatureNoCrash.tsx] ////

//// [index.tsx]
export class X {
    static jsx() {
        return document.createElement('p');
    }
}

export namespace X {
    export namespace JSX {
        export type IntrinsicElements = {
            [other: string]: any;
        };
    }
}

function A() {
    return (<p>Hello</p>);
}

//// [index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.X = void 0;
class X {
    static jsx() {
        return document.createElement('p');
    }
}
exports.X = X;
function A() {
    return (X.jsx("p", null, "Hello"));
}
