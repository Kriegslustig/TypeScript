//// [awaitBindingElement12.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}
declare var a: number;
declare var o: { x: number; };
declare var aro: { x: number; }[];
declare var ar: number[];
declare var pa: Promise<number>;
declare var po: Promise<{x: number;}>;
declare var paro: Promise<{x:number;}[]>;
async function func([{ x }] = aro): Promise<void> {
}


//// [awaitBindingElement12.js]
function func(_a) {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(__generator(function (_state) {
            x = (_a === void 0 ? aro : _a)[0].x;
            return [2 /*return*/];
        })));
    });
    var x;
}
