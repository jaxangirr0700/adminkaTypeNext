module.exports = {

"[project]/.next-internal/server/app/students/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/constants/index.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "columns": (()=>columns),
    "sidebarItems": (()=>sidebarItems)
});
const sidebarItems = [
    {
        id: 1,
        label: 'Home',
        path: '/'
    },
    {
        id: 2,
        label: 'Students',
        path: '/students'
    },
    {
        id: 3,
        label: 'Groups',
        path: '/groups'
    }
];
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender'
    },
    {
        title: 'Grade',
        dataIndex: 'grade',
        key: 'grade'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    }
];
}}),
"[project]/src/constants/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "studentsData": (()=>studentsData)
});
const studentsData = [
    {
        key: '1',
        name: 'John Doe',
        age: 21,
        gender: 'Male',
        grade: 'A',
        address: '123 Park St, City'
    },
    {
        key: '2',
        name: 'Jane Smith',
        age: 20,
        gender: 'Female',
        grade: 'B',
        address: '456 Elm Ave, Town'
    },
    {
        key: '3',
        name: 'Mike Johnson',
        age: 22,
        gender: 'Male',
        grade: 'B+',
        address: '789 Pine Rd, Village'
    },
    {
        key: '4',
        name: 'Emily Davis',
        age: 19,
        gender: 'Female',
        grade: 'A-',
        address: '101 Maple St, City'
    },
    {
        key: '5',
        name: 'David Wilson',
        age: 23,
        gender: 'Male',
        grade: 'C+',
        address: '222 Oak Dr, Town'
    },
    {
        key: '6',
        name: 'Sophia Brown',
        age: 21,
        gender: 'Female',
        grade: 'A',
        address: '333 Birch Ave, Village'
    },
    {
        key: '7',
        name: 'Liam Martinez',
        age: 20,
        gender: 'Male',
        grade: 'B-',
        address: '444 Cedar Rd, City'
    },
    {
        key: '8',
        name: 'Olivia Taylor',
        age: 22,
        gender: 'Female',
        grade: 'A+',
        address: '555 Spruce Ln, Town'
    },
    {
        key: '9',
        name: 'Noah Anderson',
        age: 19,
        gender: 'Male',
        grade: 'B',
        address: '666 Redwood St, Village'
    },
    {
        key: '10',
        name: 'Ava Thomas',
        age: 21,
        gender: 'Female',
        grade: 'A-',
        address: '777 Palm Ave, City'
    },
    {
        key: '11',
        name: 'James White',
        age: 24,
        gender: 'Male',
        grade: 'C',
        address: '888 Pinecone Dr, Town'
    },
    {
        key: '12',
        name: 'Mia Harris',
        age: 20,
        gender: 'Female',
        grade: 'B+',
        address: '999 Aspen Rd, Village'
    },
    {
        key: '13',
        name: 'Ethan Clark',
        age: 22,
        gender: 'Male',
        grade: 'A',
        address: '1001 Cherry St, City'
    },
    {
        key: '14',
        name: 'Charlotte Lewis',
        age: 23,
        gender: 'Female',
        grade: 'A+',
        address: '1112 Walnut Ave, Town'
    },
    {
        key: '15',
        name: 'Benjamin Scott',
        age: 19,
        gender: 'Male',
        grade: 'B-',
        address: '1213 Magnolia Ln, Village'
    }
];
}}),
"[project]/src/app/students/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Students)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/index.js [app-rsc] (ecmascript)");
;
;
;
;
function Students() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full p-4 border-2 rounded-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-medium",
                        children: "Students"
                    }, void 0, false, {
                        fileName: "[project]/src/app/students/page.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                        type: "primary",
                        children: "Qo'shish"
                    }, void 0, false, {
                        fileName: "[project]/src/app/students/page.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/students/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
                dataSource: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["studentsData"],
                columns: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["columns"]
            }, void 0, false, {
                fileName: "[project]/src/app/students/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/students/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/students/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/students/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_355eb936._.js.map