(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_da9e2c18._.js", {

"[project]/src/utils/number.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getRandomID": (()=>getRandomID)
});
function getRandomID() {
    return Math.floor(Math.random() * 4500);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/my-store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/number.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
;
const useGlobalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(()=>{
    const initialStudents = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])(),
            active: true,
            firstName: "Jaxangir",
            lastName: "Raxmarullayev",
            age: 0,
            gender: "male",
            group_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])()
        }
    ];
    const initialOrders = [
        {
            productID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])(),
            studentID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])(),
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])(),
            name: "Order",
            coutnt: 2,
            total_price: 1212,
            address: "Tashkent"
        }
    ];
    const initialCategories = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])(),
            active: true,
            name: "Categories",
            productCount: 0
        }
    ];
    const initialProduct = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])(),
            active: true,
            name: "Product",
            price: 0,
            categorieId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])()
        }
    ];
    const initialGroups = [
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])(),
            name: "guruh 1",
            isActive: false,
            studentCount: 0
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])(),
            name: "guruh 2",
            isActive: false,
            studentCount: 0
        },
        {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])(),
            name: "guruh 3",
            isActive: false,
            studentCount: 0
        }
    ];
    const storedStudents = ("TURBOPACK compile-time truthy", 1) ? JSON.parse(localStorage.getItem("students") || "[]") : ("TURBOPACK unreachable", undefined);
    const storedGroups = ("TURBOPACK compile-time truthy", 1) ? JSON.parse(localStorage.getItem("groups") || "[]") : ("TURBOPACK unreachable", undefined);
    const storedCategories = ("TURBOPACK compile-time truthy", 1) ? JSON.parse(localStorage.getItem("categories") || "[]") : ("TURBOPACK unreachable", undefined);
    const storedProducts = ("TURBOPACK compile-time truthy", 1) ? JSON.parse(localStorage.getItem("products") || "[]") : ("TURBOPACK unreachable", undefined);
    const storedOrders = ("TURBOPACK compile-time truthy", 1) ? JSON.parse(localStorage.getItem("orders") || "[]") : ("TURBOPACK unreachable", undefined);
    return {
        students: storedStudents.length > 0 ? storedStudents : initialStudents,
        groups: storedGroups.length > 0 ? storedGroups : initialGroups,
        categories: storedCategories.length > 0 ? storedCategories : initialCategories,
        products: storedProducts.length > 0 ? storedProducts : initialProduct,
        orders: storedOrders.length > 0 ? storedOrders : initialOrders
    };
});
const __TURBOPACK__default__export__ = useGlobalStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/orders/edits/EditOrders.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/my-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/drawer/index.js [app-client] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/form/index.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2d$number$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputNumber$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/input-number/index.js [app-client] (ecmascript) <export default as InputNumber>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/select/index.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/form/FormItem/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function EditOrders({ onCloseEdit, editOpen, EditStudent, setEditStudent }) {
    _s();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
            title: "Yangi student qo'shish",
            width: 500,
            onClose: onCloseEdit,
            open: editOpen,
            styles: {
                body: {
                    paddingBottom: 80
                }
            },
            extra: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {}, void 0, false, {
                fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                lineNumber: 24,
                columnNumber: 16
            }, void 0),
            destroyOnClose: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                initialValues: EditStudent,
                onFinish: (values)=>{
                    const localStudent = localStorage.getItem("orders");
                    const realStudents = localStudent ? JSON.parse(localStudent) : [];
                    const updatedStudents = realStudents.map((student)=>{
                        if (student.id === EditStudent.id) {
                            return {
                                ...student,
                                ...values
                            };
                        }
                        return student;
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setState({
                        orders: updatedStudents
                    });
                    localStorage.setItem("orders", JSON.stringify(updatedStudents));
                    onCloseEdit();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Nomi",
                        name: "name",
                        rules: [
                            {
                                required: true,
                                message: "Nomi kiritilmadi!!!"
                            }
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                            options: state.products.map((g)=>{
                                return {
                                    label: g.name,
                                    value: g.id
                                };
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Manzil",
                        name: "address",
                        rules: [
                            {
                                required: true,
                                message: "Manzil kiritilmadi!!!"
                            }
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {}, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Nechta",
                        name: "count",
                        rules: [
                            {
                                required: true,
                                message: "Nechaligi kiritilmadi!!!"
                            }
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2d$number$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputNumber$3e$__["InputNumber"], {}, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Mijoz",
                        name: "studentID",
                        rules: [
                            {
                                required: true,
                                message: "Mijozni tanlang!"
                            }
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                            options: state.students.map((g)=>{
                                return {
                                    label: g.firstName,
                                    value: g.id
                                };
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Mahsulot",
                        name: "productID",
                        rules: [
                            {
                                required: true,
                                message: "Mahsulotni tanlang!"
                            }
                        ],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                            options: state.categories.map((g)=>{
                                return {
                                    label: g.name,
                                    value: g.id
                                };
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "primary",
                            htmlType: "submit",
                            children: "Submit"
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(EditOrders, "EH1BHqOVvb4SEsfVedPMTNAa5Bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = EditOrders;
const __TURBOPACK__default__export__ = EditOrders;
var _c;
__turbopack_context__.k.register(_c, "EditOrders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/orders/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/my-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/table/index.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './edits/AddOrders'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './edits/DeleteOrders'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$orders$2f$edits$2f$EditOrders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/orders/edits/EditOrders.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function OrdersPage() {
    _s();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { orders, products, students, categories } = state;
    const [addOpen, setAddOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editOpen, setEditOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editOrder, setEditOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [deleteOrder, setDeleteOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const toggleAddDrawer = ()=>setAddOpen(!addOpen);
    const toggleEditDrawer = ()=>setEditOpen(!editOpen);
    const handleDeleteAll = ()=>{
        if (window.confirm("Hammasini o'chirishni tasdiqlaysizmi?")) {
            localStorage.removeItem("orders");
            alert("Hammasi o'chirildi!");
        }
    };
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrdersPage.useMemo[columns]": ()=>[
                {
                    title: "ID",
                    dataIndex: "id",
                    render: {
                        "OrdersPage.useMemo[columns]": (id, order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cursor-pointer",
                                onClick: {
                                    "OrdersPage.useMemo[columns]": ()=>{
                                        setEditOrder(order);
                                        toggleEditDrawer();
                                    }
                                }["OrdersPage.useMemo[columns]"],
                                children: id
                            }, void 0, false, {
                                fileName: "[project]/src/app/orders/page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                    }["OrdersPage.useMemo[columns]"]
                },
                {
                    title: "Nomi",
                    dataIndex: "name",
                    render: {
                        "OrdersPage.useMemo[columns]": (name, order)=>{
                            const product = products.find({
                                "OrdersPage.useMemo[columns].product": (i)=>i.id === order.productID
                            }["OrdersPage.useMemo[columns].product"]);
                            return product?.name || "Noma'lum";
                        }
                    }["OrdersPage.useMemo[columns]"]
                },
                {
                    title: "Narx",
                    render: {
                        "OrdersPage.useMemo[columns]": (order)=>{
                            const product = products.find({
                                "OrdersPage.useMemo[columns].product": (s)=>s.id === order.productID
                            }["OrdersPage.useMemo[columns].product"]);
                            return product ? product.price * order.count : 0;
                        }
                    }["OrdersPage.useMemo[columns]"]
                },
                {
                    title: "Mahsulot Soni",
                    dataIndex: "count"
                },
                {
                    title: "Manzil",
                    dataIndex: "address"
                },
                {
                    title: "Mijoz",
                    dataIndex: "studentID",
                    render: {
                        "OrdersPage.useMemo[columns]": (studentID)=>{
                            const student = students.find({
                                "OrdersPage.useMemo[columns].student": (s)=>s.id === studentID
                            }["OrdersPage.useMemo[columns].student"]);
                            return student ? student.firstName : "Noma'lum";
                        }
                    }["OrdersPage.useMemo[columns]"]
                },
                {
                    title: "Kategoriyasi",
                    dataIndex: "productID",
                    render: {
                        "OrdersPage.useMemo[columns]": (productID)=>{
                            const product = categories.find({
                                "OrdersPage.useMemo[columns].product": (p)=>p.id === productID
                            }["OrdersPage.useMemo[columns].product"]);
                            return product ? product.name : "Noma'lum";
                        }
                    }["OrdersPage.useMemo[columns]"]
                },
                {
                    title: "Delete",
                    render: {
                        "OrdersPage.useMemo[columns]": (text, order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeleteOrders, {
                                studentt: order,
                                setDeleteStudent: setDeleteOrder,
                                deleteStudent: deleteOrder
                            }, void 0, false, {
                                fileName: "[project]/src/app/orders/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                    }["OrdersPage.useMemo[columns]"]
                }
            ]
    }["OrdersPage.useMemo[columns]"], [
        products,
        students,
        categories
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        children: [
                            "Umumiy son: ",
                            orders.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        children: [
                            "Faollar: ",
                            orders.filter((item)=>item.active).length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        children: [
                            "Nofaollar: ",
                            orders.filter((item)=>!item.active).length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/orders/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col my-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddOrders, {
                        onClose: ()=>setAddOpen(false),
                        open: addOpen
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$orders$2f$edits$2f$EditOrders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        editOpen: editOpen,
                        onClose: ()=>setEditOpen(false),
                        EditStudent: editOrder,
                        setEditStudent: setEditOrder
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                        columns: columns,
                        dataSource: orders.map((order)=>({
                                ...order,
                                key: order.id
                            }))
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        color: "danger",
                        type: "text",
                        onClick: handleDeleteAll,
                        children: "Hammasini ochirish"
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/orders/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/orders/page.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(OrdersPage, "fIaMAaNMbWEmXdSSjRpR8yIZdSs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = OrdersPage;
const __TURBOPACK__default__export__ = OrdersPage;
var _c;
__turbopack_context__.k.register(_c, "OrdersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_da9e2c18._.js.map