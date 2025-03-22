(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_72254018._.js", {

"[project]/src/app/todo/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/spin/index.js [app-client] (ecmascript) <export default as Spin>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TodoListPage() {
    _s();
    const { data, loading } = useFetchData(`https://jsonplaceholder.typicode.com/todos`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center flex-col w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold ",
                children: "TodoListPage"
            }, void 0, false, {
                fileName: "[project]/src/app/todo/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "m-auto w-full flex items-center justify-center my-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Spin$3e$__["Spin"], {
                    size: "large"
                }, void 0, false, {
                    fileName: "[project]/src/app/todo/page.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/todo/page.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid grid-cols-5 gap-2 ",
                children: data.map((i)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "border border-slate-300 rounded-xl hover:scale-105 transition-all 0.5s px-2 py-1 text-md font-bold cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: i.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/todo/page.tsx",
                            lineNumber: 34,
                            columnNumber: 15
                        }, this)
                    }, i.id, false, {
                        fileName: "[project]/src/app/todo/page.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/todo/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/todo/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(TodoListPage, "3LXfGnE6eGtOi8jihS5w14lasNg=", true);
_c = TodoListPage;
const __TURBOPACK__default__export__ = TodoListPage;
var _c;
__turbopack_context__.k.register(_c, "TodoListPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/throttle-debounce/esm/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* eslint-disable no-undefined,no-param-reassign,no-shadow */ /**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */ __turbopack_context__.s({
    "debounce": (()=>debounce),
    "throttle": (()=>throttle)
});
function throttle(delay, callback, options) {
    var _ref = options || {}, _ref$noTrailing = _ref.noTrailing, noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing, _ref$noLeading = _ref.noLeading, noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading, _ref$debounceMode = _ref.debounceMode, debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
    /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */ var timeoutID;
    var cancelled = false;
    // Keep track of the last time `callback` was executed.
    var lastExec = 0;
    // Function to clear existing timeout
    function clearExistingTimeout() {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
    }
    // Function to cancel next exec
    function cancel(options) {
        var _ref2 = options || {}, _ref2$upcomingOnly = _ref2.upcomingOnly, upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;
        clearExistingTimeout();
        cancelled = !upcomingOnly;
    }
    /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */ function wrapper() {
        for(var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++){
            arguments_[_key] = arguments[_key];
        }
        var self = this;
        var elapsed = Date.now() - lastExec;
        if (cancelled) {
            return;
        }
        // Execute `callback` and update the `lastExec` timestamp.
        function exec() {
            lastExec = Date.now();
            callback.apply(self, arguments_);
        }
        /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */ function clear() {
            timeoutID = undefined;
        }
        if (!noLeading && debounceMode && !timeoutID) {
            /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */ exec();
        }
        clearExistingTimeout();
        if (debounceMode === undefined && elapsed > delay) {
            if (noLeading) {
                /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */ lastExec = Date.now();
                if (!noTrailing) {
                    timeoutID = setTimeout(debounceMode ? clear : exec, delay);
                }
            } else {
                /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */ exec();
            }
        } else if (noTrailing !== true) {
            /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */ timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
        }
    }
    wrapper.cancel = cancel;
    // Return the wrapper function.
    return wrapper;
}
/* eslint-disable no-undefined */ /**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */ function debounce(delay, callback, options) {
    var _ref = options || {}, _ref$atBegin = _ref.atBegin, atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;
    return throttle(delay, callback, {
        debounceMode: atBegin !== false
    });
}
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/antd/es/spin/Indicator/Progress.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-client] (ecmascript)");
"use client";
;
;
;
const viewSize = 100;
const borderWidth = viewSize / 5;
const radius = viewSize / 2 - borderWidth / 2;
const circumference = radius * 2 * Math.PI;
const position = 50;
const CustomCircle = (props)=>{
    const { dotClassName, style, hasCircleCls } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("circle", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${dotClassName}-circle`, {
            [`${dotClassName}-circle-bg`]: hasCircleCls
        }),
        r: radius,
        cx: position,
        cy: position,
        strokeWidth: borderWidth,
        style: style
    });
};
const Progress = (_ref)=>{
    let { percent, prefixCls } = _ref;
    const dotClassName = `${prefixCls}-dot`;
    const holderClassName = `${dotClassName}-holder`;
    const hideClassName = `${holderClassName}-hidden`;
    const [render, setRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ==================== Visible =====================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Progress.useLayoutEffect": ()=>{
            if (percent !== 0) {
                setRender(true);
            }
        }
    }["Progress.useLayoutEffect"], [
        percent !== 0
    ]);
    // ==================== Progress ====================
    const safePtg = Math.max(Math.min(percent, 100), 0);
    // ===================== Render =====================
    if (!render) {
        return null;
    }
    const circleStyle = {
        strokeDashoffset: `${circumference / 4}`,
        strokeDasharray: `${circumference * safePtg / 100} ${circumference * (100 - safePtg) / 100}`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(holderClassName, `${dotClassName}-progress`, safePtg <= 0 && hideClassName)
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        viewBox: `0 0 ${viewSize} ${viewSize}`,
        // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": safePtg
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(CustomCircle, {
        dotClassName: dotClassName,
        hasCircleCls: true
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(CustomCircle, {
        dotClassName: dotClassName,
        style: circleStyle
    })));
};
const __TURBOPACK__default__export__ = Progress;
}}),
"[project]/node_modules/antd/es/spin/Indicator/Looper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Looper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/spin/Indicator/Progress.js [app-client] (ecmascript)");
"use client";
;
;
;
function Looper(props) {
    const { prefixCls, percent = 0 } = props;
    const dotClassName = `${prefixCls}-dot`;
    const holderClassName = `${dotClassName}-holder`;
    const hideClassName = `${holderClassName}-hidden`;
    // ===================== Render =====================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(holderClassName, percent > 0 && hideClassName)
    }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(dotClassName, `${prefixCls}-dot-spin`)
    }, [
        1,
        2,
        3,
        4
    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("i", {
            className: `${prefixCls}-dot-item`,
            key: i
        })))), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        percent: percent
    }));
}
}}),
"[project]/node_modules/antd/es/spin/Indicator/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Indicator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/_util/reactNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Looper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/spin/Indicator/Looper.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Indicator(props) {
    const { prefixCls, indicator, percent } = props;
    const dotClassName = `${prefixCls}-dot`;
    if (indicator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(indicator)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$reactNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(indicator, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(indicator.props.className, dotClassName),
            percent
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$Looper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        percent: percent
    });
}
}}),
"[project]/node_modules/antd/es/spin/style/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "prepareComponentToken": (()=>prepareComponentToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/cssinjs/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/cssinjs/es/Keyframes.js [app-client] (ecmascript) <export default as Keyframes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/theme/util/genStyleUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/cssinjs-utils/es/util/statistic.js [app-client] (ecmascript) <export merge as mergeToken>");
;
;
;
const antSpinMove = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antSpinMove', {
    to: {
        opacity: 1
    }
});
const antRotate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2f$es$2f$Keyframes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Keyframes$3e$__["Keyframes"]('antRotate', {
    to: {
        transform: 'rotate(405deg)'
    }
});
const genSpinStyle = (token)=>{
    const { componentCls, calc } = token;
    return {
        [componentCls]: Object.assign(Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetComponent"])(token)), {
            position: 'absolute',
            display: 'none',
            color: token.colorPrimary,
            fontSize: 0,
            textAlign: 'center',
            verticalAlign: 'middle',
            opacity: 0,
            transition: `transform ${token.motionDurationSlow} ${token.motionEaseInOutCirc}`,
            '&-spinning': {
                position: 'relative',
                display: 'inline-block',
                opacity: 1
            },
            [`${componentCls}-text`]: {
                fontSize: token.fontSize,
                paddingTop: calc(calc(token.dotSize).sub(token.fontSize)).div(2).add(2).equal()
            },
            '&-fullscreen': {
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                backgroundColor: token.colorBgMask,
                zIndex: token.zIndexPopupBase,
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                opacity: 0,
                visibility: 'hidden',
                transition: `all ${token.motionDurationMid}`,
                '&-show': {
                    opacity: 1,
                    visibility: 'visible'
                },
                [componentCls]: {
                    [`${componentCls}-dot-holder`]: {
                        color: token.colorWhite
                    },
                    [`${componentCls}-text`]: {
                        color: token.colorTextLightSolid
                    }
                }
            },
            '&-nested-loading': {
                position: 'relative',
                [`> div > ${componentCls}`]: {
                    position: 'absolute',
                    top: 0,
                    insetInlineStart: 0,
                    zIndex: 4,
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    maxHeight: token.contentHeight,
                    [`${componentCls}-dot`]: {
                        position: 'absolute',
                        top: '50%',
                        insetInlineStart: '50%',
                        margin: calc(token.dotSize).mul(-1).div(2).equal()
                    },
                    [`${componentCls}-text`]: {
                        position: 'absolute',
                        top: '50%',
                        width: '100%',
                        textShadow: `0 1px 2px ${token.colorBgContainer}` // FIXME: shadow
                    },
                    [`&${componentCls}-show-text ${componentCls}-dot`]: {
                        marginTop: calc(token.dotSize).div(2).mul(-1).sub(10).equal()
                    },
                    '&-sm': {
                        [`${componentCls}-dot`]: {
                            margin: calc(token.dotSizeSM).mul(-1).div(2).equal()
                        },
                        [`${componentCls}-text`]: {
                            paddingTop: calc(calc(token.dotSizeSM).sub(token.fontSize)).div(2).add(2).equal()
                        },
                        [`&${componentCls}-show-text ${componentCls}-dot`]: {
                            marginTop: calc(token.dotSizeSM).div(2).mul(-1).sub(10).equal()
                        }
                    },
                    '&-lg': {
                        [`${componentCls}-dot`]: {
                            margin: calc(token.dotSizeLG).mul(-1).div(2).equal()
                        },
                        [`${componentCls}-text`]: {
                            paddingTop: calc(calc(token.dotSizeLG).sub(token.fontSize)).div(2).add(2).equal()
                        },
                        [`&${componentCls}-show-text ${componentCls}-dot`]: {
                            marginTop: calc(token.dotSizeLG).div(2).mul(-1).sub(10).equal()
                        }
                    }
                },
                [`${componentCls}-container`]: {
                    position: 'relative',
                    transition: `opacity ${token.motionDurationSlow}`,
                    '&::after': {
                        position: 'absolute',
                        top: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        insetInlineStart: 0,
                        zIndex: 10,
                        width: '100%',
                        height: '100%',
                        background: token.colorBgContainer,
                        opacity: 0,
                        transition: `all ${token.motionDurationSlow}`,
                        content: '""',
                        pointerEvents: 'none'
                    }
                },
                [`${componentCls}-blur`]: {
                    clear: 'both',
                    opacity: 0.5,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    '&::after': {
                        opacity: 0.4,
                        pointerEvents: 'auto'
                    }
                }
            },
            // tip
            // ------------------------------
            '&-tip': {
                color: token.spinDotDefault
            },
            // holder
            // ------------------------------
            [`${componentCls}-dot-holder`]: {
                width: '1em',
                height: '1em',
                fontSize: token.dotSize,
                display: 'inline-block',
                transition: `transform ${token.motionDurationSlow} ease, opacity ${token.motionDurationSlow} ease`,
                transformOrigin: '50% 50%',
                lineHeight: 1,
                color: token.colorPrimary,
                '&-hidden': {
                    transform: 'scale(0.3)',
                    opacity: 0
                }
            },
            // progress
            // ------------------------------
            [`${componentCls}-dot-progress`]: {
                position: 'absolute',
                inset: 0
            },
            // dots
            // ------------------------------
            [`${componentCls}-dot`]: {
                position: 'relative',
                display: 'inline-block',
                fontSize: token.dotSize,
                width: '1em',
                height: '1em',
                '&-item': {
                    position: 'absolute',
                    display: 'block',
                    width: calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),
                    height: calc(token.dotSize).sub(calc(token.marginXXS).div(2)).div(2).equal(),
                    background: 'currentColor',
                    borderRadius: '100%',
                    transform: 'scale(0.75)',
                    transformOrigin: '50% 50%',
                    opacity: 0.3,
                    animationName: antSpinMove,
                    animationDuration: '1s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear',
                    animationDirection: 'alternate',
                    '&:nth-child(1)': {
                        top: 0,
                        insetInlineStart: 0,
                        animationDelay: '0s'
                    },
                    '&:nth-child(2)': {
                        top: 0,
                        insetInlineEnd: 0,
                        animationDelay: '0.4s'
                    },
                    '&:nth-child(3)': {
                        insetInlineEnd: 0,
                        bottom: 0,
                        animationDelay: '0.8s'
                    },
                    '&:nth-child(4)': {
                        bottom: 0,
                        insetInlineStart: 0,
                        animationDelay: '1.2s'
                    }
                },
                '&-spin': {
                    transform: 'rotate(45deg)',
                    animationName: antRotate,
                    animationDuration: '1.2s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear'
                },
                '&-circle': {
                    strokeLinecap: 'round',
                    transition: [
                        'stroke-dashoffset',
                        'stroke-dasharray',
                        'stroke',
                        'stroke-width',
                        'opacity'
                    ].map((item)=>`${item} ${token.motionDurationSlow} ease`).join(','),
                    fillOpacity: 0,
                    stroke: 'currentcolor'
                },
                '&-circle-bg': {
                    stroke: token.colorFillSecondary
                }
            },
            // small
            [`&-sm ${componentCls}-dot`]: {
                '&, &-holder': {
                    fontSize: token.dotSizeSM
                }
            },
            [`&-sm ${componentCls}-dot-holder`]: {
                i: {
                    width: calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal(),
                    height: calc(calc(token.dotSizeSM).sub(calc(token.marginXXS).div(2))).div(2).equal()
                }
            },
            // large
            [`&-lg ${componentCls}-dot`]: {
                '&, &-holder': {
                    fontSize: token.dotSizeLG
                }
            },
            [`&-lg ${componentCls}-dot-holder`]: {
                i: {
                    width: calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal(),
                    height: calc(calc(token.dotSizeLG).sub(token.marginXXS)).div(2).equal()
                }
            },
            [`&${componentCls}-show-text ${componentCls}-text`]: {
                display: 'block'
            }
        })
    };
};
const prepareComponentToken = (token)=>{
    const { controlHeightLG, controlHeight } = token;
    return {
        contentHeight: 400,
        dotSize: controlHeightLG / 2,
        dotSizeSM: controlHeightLG * 0.35,
        dotSizeLG: controlHeight
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$theme$2f$util$2f$genStyleUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genStyleHooks"])('Spin', (token)=>{
    const spinToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$cssinjs$2d$utils$2f$es$2f$util$2f$statistic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__merge__as__mergeToken$3e$__["mergeToken"])(token, {
        spinDotDefault: token.colorTextDescription
    });
    return [
        genSpinStyle(spinToken)
    ];
}, prepareComponentToken);
}}),
"[project]/node_modules/antd/es/spin/usePercent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>usePercent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const AUTO_INTERVAL = 200;
const STEP_BUCKETS = [
    [
        30,
        0.05
    ],
    [
        70,
        0.03
    ],
    [
        96,
        0.01
    ]
];
function usePercent(spinning, percent) {
    const [mockPercent, setMockPercent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const mockIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAuto = percent === 'auto';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePercent.useEffect": ()=>{
            if (isAuto && spinning) {
                setMockPercent(0);
                mockIntervalRef.current = setInterval({
                    "usePercent.useEffect": ()=>{
                        setMockPercent({
                            "usePercent.useEffect": (prev)=>{
                                const restPTG = 100 - prev;
                                for(let i = 0; i < STEP_BUCKETS.length; i += 1){
                                    const [limit, stepPtg] = STEP_BUCKETS[i];
                                    if (prev <= limit) {
                                        return prev + restPTG * stepPtg;
                                    }
                                }
                                return prev;
                            }
                        }["usePercent.useEffect"]);
                    }
                }["usePercent.useEffect"], AUTO_INTERVAL);
            }
            return ({
                "usePercent.useEffect": ()=>{
                    clearInterval(mockIntervalRef.current);
                }
            })["usePercent.useEffect"];
        }
    }["usePercent.useEffect"], [
        isAuto,
        spinning
    ]);
    return isAuto ? mockPercent : percent;
}
}}),
"[project]/node_modules/antd/es/spin/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$throttle$2d$debounce$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/throttle-debounce/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/_util/warning.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/config-provider/context.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/spin/Indicator/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/spin/style/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$usePercent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/spin/usePercent.js [app-client] (ecmascript)");
"use client";
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
;
;
;
;
;
const _SpinSizes = [
    'small',
    'default',
    'large'
];
// Render indicator
let defaultIndicator;
function shouldDelay(spinning, delay) {
    return !!spinning && !!delay && !Number.isNaN(Number(delay));
}
const Spin = (props)=>{
    var _a;
    const { prefixCls: customizePrefixCls, spinning: customSpinning = true, delay = 0, className, rootClassName, size = 'default', tip, wrapperClassName, style, children, fullscreen = false, indicator, percent } = props, restProps = __rest(props, [
        "prefixCls",
        "spinning",
        "delay",
        "className",
        "rootClassName",
        "size",
        "tip",
        "wrapperClassName",
        "style",
        "children",
        "fullscreen",
        "indicator",
        "percent"
    ]);
    const { getPrefixCls, direction, className: contextClassName, style: contextStyle, indicator: contextIndicator } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComponentConfig"])('spin');
    const prefixCls = getPrefixCls('spin', customizePrefixCls);
    const [wrapCSSVar, hashId, cssVarCls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$style$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls);
    const [spinning, setSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Spin.useState": ()=>customSpinning && !shouldDelay(customSpinning, delay)
    }["Spin.useState"]);
    const mergedPercent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$usePercent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(spinning, percent);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Spin.useEffect": ()=>{
            if (customSpinning) {
                const showSpinning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$throttle$2d$debounce$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debounce"])(delay, {
                    "Spin.useEffect.showSpinning": ()=>{
                        setSpinning(true);
                    }
                }["Spin.useEffect.showSpinning"]);
                showSpinning();
                return ({
                    "Spin.useEffect": ()=>{
                        var _a;
                        (_a = showSpinning === null || showSpinning === void 0 ? void 0 : showSpinning.cancel) === null || _a === void 0 ? void 0 : _a.call(showSpinning);
                    }
                })["Spin.useEffect"];
            }
            setSpinning(false);
        }
    }["Spin.useEffect"], [
        delay,
        customSpinning
    ]);
    const isNestedPattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Spin.useMemo[isNestedPattern]": ()=>typeof children !== 'undefined' && !fullscreen
    }["Spin.useMemo[isNestedPattern]"], [
        children,
        fullscreen
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        const warning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$_util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devUseWarning"])('Spin');
        ("TURBOPACK compile-time truthy", 1) ? warning(!tip || isNestedPattern || fullscreen, 'usage', '`tip` only work in nest or fullscreen pattern.') : ("TURBOPACK unreachable", undefined);
    }
    const spinClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefixCls, contextClassName, {
        [`${prefixCls}-sm`]: size === 'small',
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-spinning`]: spinning,
        [`${prefixCls}-show-text`]: !!tip,
        [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, !fullscreen && rootClassName, hashId, cssVarCls);
    const containerClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-container`, {
        [`${prefixCls}-blur`]: spinning
    });
    const mergedIndicator = (_a = indicator !== null && indicator !== void 0 ? indicator : contextIndicator) !== null && _a !== void 0 ? _a : defaultIndicator;
    const mergedStyle = Object.assign(Object.assign({}, contextStyle), style);
    const spinElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("div", Object.assign({}, restProps, {
        style: mergedStyle,
        className: spinClassName,
        "aria-live": "polite",
        "aria-busy": spinning
    }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$Indicator$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        indicator: mergedIndicator,
        percent: mergedPercent
    }), tip && (isNestedPattern || fullscreen) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("div", {
        className: `${prefixCls}-text`
    }, tip) : null);
    if (isNestedPattern) {
        return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("div", Object.assign({}, restProps, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-nested-loading`, wrapperClassName, hashId, cssVarCls)
        }), spinning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("div", {
            key: "loading"
        }, spinElement), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("div", {
            className: containerClassName,
            key: "container"
        }, children)));
    }
    if (fullscreen) {
        return wrapCSSVar(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${prefixCls}-fullscreen`, {
                [`${prefixCls}-fullscreen-show`]: spinning
            }, rootClassName, hashId, cssVarCls)
        }, spinElement));
    }
    return wrapCSSVar(spinElement);
};
Spin.setDefaultIndicator = (indicator)=>{
    defaultIndicator = indicator;
};
if ("TURBOPACK compile-time truthy", 1) {
    Spin.displayName = 'Spin';
}
const __TURBOPACK__default__export__ = Spin;
}}),
"[project]/node_modules/antd/es/spin/index.js [app-client] (ecmascript) <export default as Spin>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Spin": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$spin$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/spin/index.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_72254018._.js.map