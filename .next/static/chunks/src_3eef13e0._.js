(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_3eef13e0._.js", {

"[project]/src/utils/number.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getRandomID": (()=>getRandomID)
});
function getRandomID() {
    return Math.floor(Math.random() * 100000);
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
    const studentIdReal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])();
    const groupIdReal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])();
    const productIdReal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])();
    const cartegorieIdReal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])();
    const orderIdReal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])();
    const initialStudents = [
        {
            id: studentIdReal,
            active: true,
            firstName: "Jaxangir",
            lastName: "Raxmarullayev",
            age: 0,
            gender: "male",
            group_id: groupIdReal
        }
    ];
    const initialOrders = [
        {
            categorieId: cartegorieIdReal,
            productID: productIdReal,
            studentID: studentIdReal,
            id: orderIdReal,
            name: "Order",
            coutnt: 2,
            total_price: 1212,
            address: "Tashkent",
            status: "qabul_qilindi"
        }
    ];
    const initialCategories = [
        {
            id: cartegorieIdReal,
            active: true,
            name: "Categories",
            productCount: 0
        }
    ];
    const initialProduct = [
        {
            id: productIdReal,
            active: true,
            name: "Product",
            price: 0,
            categorieId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])()
        }
    ];
    const initialGroups = [
        {
            id: groupIdReal,
            name: "guruh 1",
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
        orders: storedOrders.length > 0 ? storedOrders : initialOrders,
        language: "uzbek"
    };
});
const __TURBOPACK__default__export__ = useGlobalStore;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/orders/edits/Addorders.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/my-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/number.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/PlusOutlined.js [app-client] (ecmascript) <export default as PlusOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/drawer/index.js [app-client] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/form/index.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2d$number$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputNumber$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/input-number/index.js [app-client] (ecmascript) <export default as InputNumber>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$radio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/radio/index.js [app-client] (ecmascript) <locals> <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/select/index.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/form/FormItem/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function AddOrders({ onClose, open, showDrawer, item }) {
    _s();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // const { data, loading }: any = useFetchData(
    //   `https://jsonplaceholder.typicode.com/todos`
    // );
    // console.log(data, loading);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                type: "primary",
                onClick: showDrawer,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$PlusOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusOutlined$3e$__["PlusOutlined"], {}, void 0, false, {
                    fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                    lineNumber: 31,
                    columnNumber: 57
                }, void 0),
                children: "Buyurtma qo'shish"
            }, void 0, false, {
                fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$drawer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
                title: "Yangi buyurtma qo'shish",
                width: 500,
                onClose: onClose,
                open: open,
                styles: {
                    body: {
                        paddingBottom: 80
                    }
                },
                extra: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {}, void 0, false, {
                    fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                    lineNumber: 44,
                    columnNumber: 16
                }, void 0),
                destroyOnClose: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
                    onFinish: (values)=>{
                        const new_students = state.orders.concat({
                            ...values,
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomID"])()
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setState({
                            orders: new_students
                        });
                        localStorage.setItem("orders", JSON.stringify(new_students));
                        onClose(false);
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Status",
                            name: "status",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$radio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Radio$3e$__["Radio"].Group, {
                                block: true,
                                options: [
                                    {
                                        label: "Qabul qiindi",
                                        value: "qabul_qilindi"
                                    },
                                    {
                                        label: "Yetkazilmoqda",
                                        value: "yetkazib_berilmoqda"
                                    },
                                    {
                                        label: "Tugallandi",
                                        value: "tugallandi"
                                    }
                                ],
                                defaultValue: "Apple",
                                optionType: "button",
                                buttonStyle: "solid"
                            }, void 0, false, {
                                fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                            lineNumber: 58,
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
                                fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                            lineNumber: 80,
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
                                fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                            lineNumber: 87,
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
                                fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                            lineNumber: 94,
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
                                options: state.products.map((g)=>{
                                    return {
                                        label: g.name,
                                        value: g.id
                                    };
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                type: "primary",
                                htmlType: "submit",
                                children: "Submit"
                            }, void 0, false, {
                                fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/orders/edits/Addorders.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AddOrders, "EH1BHqOVvb4SEsfVedPMTNAa5Bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = AddOrders;
const __TURBOPACK__default__export__ = AddOrders;
var _c;
__turbopack_context__.k.register(_c, "AddOrders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/orders/edits/Deleteorders.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/my-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DeleteFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeleteFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/DeleteFilled.js [app-client] (ecmascript) <export default as DeleteFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function DeleteOrders({ setDeleteStudent, deleteStudent, studentt }) {
    _s();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    function DeleteStudentFn() {
        const localStudent = JSON.parse(localStorage.getItem("orders") || "null");
        const newStudents = localStudent?.filter((i)=>{
            if (i.id !== studentt.id) {
                return i;
            }
        });
        localStorage.setItem("orders", JSON.stringify(newStudents));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setState({
            orders: newStudents
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
            type: "text",
            color: "danger",
            variant: "outlined",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DeleteFilled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeleteFilled$3e$__["DeleteFilled"], {}, void 0, false, {
                fileName: "[project]/src/app/orders/edits/Deleteorders.tsx",
                lineNumber: 27,
                columnNumber: 15
            }, void 0),
            onClick: ()=>{
                DeleteStudentFn();
            }
        }, void 0, false, {
            fileName: "[project]/src/app/orders/edits/Deleteorders.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/orders/edits/Deleteorders.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(DeleteOrders, "EH1BHqOVvb4SEsfVedPMTNAa5Bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = DeleteOrders;
const __TURBOPACK__default__export__ = DeleteOrders;
var _c;
__turbopack_context__.k.register(_c, "DeleteOrders");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$radio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/radio/index.js [app-client] (ecmascript) <locals> <export default as Radio>");
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
            title: "Buyurtmani  o'zgartirish",
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
                lineNumber: 34,
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
                        label: "Status",
                        name: "status",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$radio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Radio$3e$__["Radio"].Group, {
                            block: true,
                            options: [
                                {
                                    label: "Qabul qiindi",
                                    value: "qabul_qilindi"
                                },
                                {
                                    label: "Yetkazilmoqda",
                                    value: "yetkazib_berilmoqda"
                                },
                                {
                                    label: "Tugallandi",
                                    value: "tugallandi"
                                }
                            ],
                            defaultValue: "Apple",
                            optionType: "button",
                            buttonStyle: "solid"
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 57,
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
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 79,
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
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 86,
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
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
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
                            options: state.products.map((g)=>{
                                return {
                                    label: g.name,
                                    value: g.id
                                };
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$FormItem$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                            type: "primary",
                            htmlType: "submit",
                            children: "Submit"
                        }, void 0, false, {
                            fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/orders/edits/EditOrders.tsx",
            lineNumber: 24,
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
"[project]/src/constants/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// import { StudentTypes } from '@/types';
// export const studentsData: StudentTypes[] = [
//   {
//     key: '1',
//     name: 'John Doe',
//     age: 21,
//     gender: 'Male',
//     grade: 'A',
//     address: '123 Park St, City',
//   },
//   {
//     key: '2',
//     name: 'Jane Smith',
//     age: 20,
//     gender: 'Female',
//     grade: 'B',
//     address: '456 Elm Ave, Town',
//   },
//   {
//     key: '3',
//     name: 'Mike Johnson',
//     age: 22,
//     gender: 'Male',
//     grade: 'B+',
//     address: '789 Pine Rd, Village',
//   },
//   {
//     key: '4',
//     name: 'Emily Davis',
//     age: 19,
//     gender: 'Female',
//     grade: 'A-',
//     address: '101 Maple St, City',
//   },
//   {
//     key: '5',
//     name: 'David Wilson',
//     age: 23,
//     gender: 'Male',
//     grade: 'C+',
//     address: '222 Oak Dr, Town',
//   },
//   {
//     key: '6',
//     name: 'Sophia Brown',
//     age: 21,
//     gender: 'Female',
//     grade: 'A',
//     address: '333 Birch Ave, Village',
//   },
//   {
//     key: '7',
//     name: 'Liam Martinez',
//     age: 20,
//     gender: 'Male',
//     grade: 'B-',
//     address: '444 Cedar Rd, City',
//   },
//   {
//     key: '8',
//     name: 'Olivia Taylor',
//     age: 22,
//     gender: 'Female',
//     grade: 'A+',
//     address: '555 Spruce Ln, Town',
//   },
//   {
//     key: '9',
//     name: 'Noah Anderson',
//     age: 19,
//     gender: 'Male',
//     grade: 'B',
//     address: '666 Redwood St, Village',
//   },
//   {
//     key: '10',
//     name: 'Ava Thomas',
//     age: 21,
//     gender: 'Female',
//     grade: 'A-',
//     address: '777 Palm Ave, City',
//   },
//   {
//     key: '11',
//     name: 'James White',
//     age: 24,
//     gender: 'Male',
//     grade: 'C',
//     address: '888 Pinecone Dr, Town',
//   },
//   {
//     key: '12',
//     name: 'Mia Harris',
//     age: 20,
//     gender: 'Female',
//     grade: 'B+',
//     address: '999 Aspen Rd, Village',
//   },
//   {
//     key: '13',
//     name: 'Ethan Clark',
//     age: 22,
//     gender: 'Male',
//     grade: 'A',
//     address: '1001 Cherry St, City',
//   },
//   {
//     key: '14',
//     name: 'Charlotte Lewis',
//     age: 23,
//     gender: 'Female',
//     grade: 'A+',
//     address: '1112 Walnut Ave, Town',
//   },
//   {
//     key: '15',
//     name: 'Benjamin Scott',
//     age: 19,
//     gender: 'Male',
//     grade: 'B-',
//     address: '1213 Magnolia Ln, Village',
//   },
// ];
__turbopack_context__.s({
    "texts": (()=>texts)
});
const texts = {
    uzbek: {
        total: "Umumiy son",
        active: "Faollar",
        inactive: "Nofaollar",
        confirmDelete: "Hammasini o'chirishni tasdiqlaysizmi?",
        deleteAll: "Hammasini ochirish",
        id: "ID",
        name: "Nomi",
        price: "Narx",
        count: "Mahsulot Soni",
        address: "Manzil",
        status: "Status",
        customer: "Mijoz",
        delete: "O'chirish"
    },
    english: {
        total: "Total",
        active: "Active",
        inactive: "Inactive",
        confirmDelete: "Are you sure you want to delete everything?",
        deleteAll: "Delete All",
        id: "ID",
        name: "Name",
        price: "Price",
        count: "Product Count",
        address: "Address",
        status: "Status",
        customer: "Customer",
        delete: "Delete"
    },
    russian: {
        total: "Всего",
        active: "Активные",
        inactive: "Неактивные",
        confirmDelete: "Вы уверены, что хотите все удалить?",
        deleteAll: "Удалить все",
        id: "ID",
        name: "Имя",
        price: "Цена",
        count: "Количество продуктов",
        address: "Адрес",
        status: "Статус",
        customer: "Клиент",
        delete: "Удалить"
    }
};
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/select/index.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$orders$2f$edits$2f$Addorders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/orders/edits/Addorders.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$orders$2f$edits$2f$Deleteorders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/orders/edits/Deleteorders.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$orders$2f$edits$2f$EditOrders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/orders/edits/EditOrders.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const useFetchData = (url)=>{
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFetchData.useEffect": ()=>{
            setLoading(true);
            fetch(url).then({
                "useFetchData.useEffect": (res1)=>res1.json()
            }["useFetchData.useEffect"]).then({
                "useFetchData.useEffect": (data)=>{
                    setData(res);
                }
            }["useFetchData.useEffect"]).catch({
                "useFetchData.useEffect": (er)=>console.log(er)
            }["useFetchData.useEffect"]).finally({
                "useFetchData.useEffect": ()=>{
                    setLoading(false);
                }
            }["useFetchData.useEffect"]);
        }
    }["useFetchData.useEffect"], [
        url
    ]);
    return data, loading;
};
_s(useFetchData, "YP7e7Smzxlgf2d3MqLcgRZjo83U=");
async function testFetch() {
    const res1 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`https://jsonplaceholder.typicode.com/todos`);
    console.log(res1);
}
testFetch();
function OrdersPage() {
    _s1();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [AddOpen, setAddOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editOpen, setEditOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [EditOrder, setEditOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [deleteOrder, setDeleteOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const showDrawer = ()=>{
        setAddOpen(true);
    };
    const showDrawerEdit = ()=>{
        setEditOpen(true);
    };
    const onClose = ()=>{
        setAddOpen(false);
    };
    const onCloseEdit = ()=>{
        setEditOpen(false);
    };
    const changeLanguage = (value)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$my$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setState({
            language: value
        });
    };
    const language = state.language || "uzbek";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                defaultValue: language,
                style: {
                    width: 120,
                    marginBottom: 16
                },
                onChange: changeLanguage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                        value: "uzbek",
                        children: "O'zbekcha"
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                        value: "english",
                        children: "English"
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"].Option, {
                        value: "russian",
                        children: "Русский"
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/orders/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        children: [
                            "Umumiy son: ",
                            state.orders.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        children: [
                            "Faollar: ",
                            state.orders.filter((item)=>item.active).length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        children: [
                            "Nofaollar: ",
                            state.orders.filter((item)=>!item.active).length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/orders/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col my-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$orders$2f$edits$2f$Addorders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClose: onClose,
                        open: AddOpen,
                        showDrawer: showDrawer
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$orders$2f$edits$2f$EditOrders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        editOpen: editOpen,
                        showDrawerEdit: showDrawerEdit,
                        onCloseEdit: onCloseEdit,
                        EditStudent: EditOrder,
                        setEditStudent: setEditOrder
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                        columns: [
                            {
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texts"][language].id,
                                dataIndex: "id",
                                render: (id, order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cursor-pointer",
                                        onClick: ()=>{
                                            setEditOpen(true);
                                            setEditOrder(order);
                                        },
                                        children: id
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/orders/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, void 0)
                            },
                            {
                                title: "Nomi",
                                dataIndex: "name",
                                render: (name, order)=>{
                                    const product = state.products.find((i)=>i.id === order.productID);
                                    return product ? product.name : "Noma'lum";
                                }
                            },
                            {
                                title: "Narx",
                                render: (order)=>{
                                    const product = state.products.find((s)=>s.id === order.productID);
                                    return product ? product.price * order.count : 0;
                                }
                            },
                            {
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texts"][language].count,
                                dataIndex: "count"
                            },
                            {
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texts"][language].address,
                                dataIndex: "address"
                            },
                            {
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texts"][language].status,
                                dataIndex: "status"
                            },
                            {
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texts"][language].customer,
                                dataIndex: "studentID",
                                render: (studentID)=>{
                                    const student = state.students.find((s)=>s.id === studentID);
                                    return student ? student.firstName : "Noma'lum";
                                }
                            },
                            {
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texts"][language].delete,
                                dataIndex: "productID",
                                render: (productID, order)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$orders$2f$edits$2f$Deleteorders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        studentt: order,
                                        setDeleteStudent: setDeleteOrder,
                                        deleteStudent: deleteOrder
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/orders/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 19
                                    }, void 0);
                                }
                            }
                        ],
                        dataSource: state.orders.map((order)=>({
                                ...order,
                                key: order.id
                            }))
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                        color: "danger",
                        type: "text",
                        variant: "text",
                        onClick: ()=>{
                            if (window.confirm(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texts"][language].confirmDelete)) {
                                localStorage.removeItem("orders");
                                alert("Hammasi o'chirildi!");
                            }
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["texts"][language].deleteAll
                    }, void 0, false, {
                        fileName: "[project]/src/app/orders/page.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/orders/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/orders/page.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s1(OrdersPage, "uK3hYhLLppYbYvosL09n2QsY1F4=", false, function() {
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

//# sourceMappingURL=src_3eef13e0._.js.map