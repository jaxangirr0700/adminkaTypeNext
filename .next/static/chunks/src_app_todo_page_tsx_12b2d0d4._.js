(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_todo_page_tsx_12b2d0d4._.js", {

"[project]/src/app/todo/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function useFetchData(url) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFetchData.useEffect": ()=>{
            fetch(url).then({
                "useFetchData.useEffect": (res)=>res.json()
            }["useFetchData.useEffect"]).then({
                "useFetchData.useEffect": (data)=>{
                    setData(data);
                }
            }["useFetchData.useEffect"]).catch({
                "useFetchData.useEffect": (er)=>{
                    console.log(er);
                }
            }["useFetchData.useEffect"]).finally({
                "useFetchData.useEffect": ()=>{
                    setLoading(true);
                }
            }["useFetchData.useEffect"]);
        }
    }["useFetchData.useEffect"], []);
    return {
        data,
        loading
    };
}
_s(useFetchData, "YP7e7Smzxlgf2d3MqLcgRZjo83U=");
function TodoListPage() {
    _s1();
    const { data, loading } = useFetchData(`https://jsonplaceholder.typicode.com/todos`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold ",
                children: "TodoListPage"
            }, void 0, false, {
                fileName: "[project]/src/app/todo/page.tsx",
                lineNumber: 38,
                columnNumber: 7
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
                            lineNumber: 47,
                            columnNumber: 15
                        }, this)
                    }, i.id, false, {
                        fileName: "[project]/src/app/todo/page.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/todo/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/todo/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s1(TodoListPage, "3LXfGnE6eGtOi8jihS5w14lasNg=", false, function() {
    return [
        useFetchData
    ];
});
_c = TodoListPage;
const __TURBOPACK__default__export__ = TodoListPage;
var _c;
__turbopack_context__.k.register(_c, "TodoListPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_todo_page_tsx_12b2d0d4._.js.map