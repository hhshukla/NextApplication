exports.id = 989;
exports.ids = [989];
exports.modules = {

/***/ 7459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/MainHeader/MainHeader.tsx



const MainHeader = ({ menuItems, logoSrc })=>{
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_.useState)(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "bg-gray-500 py-4 px-2",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-around items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: logoSrc,
                                alt: "logo",
                                className: "py-[.3125rem] w-20"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "lg:hidden",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "block text-orange-600 text-xl px-3 py-1 focus:outline-none bg-white rounded-[3px] ",
                                onClick: toggleMenu,
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/img/download.svg",
                                    alt: "toggle navbar",
                                    className: "w-10"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "hidden lg:block",
                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                className: "flex",
                                children: menuItems?.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.path,
                                            className: "text-white font-medium font-sans hover:text-orange-500 mr-14",
                                            children: item.label
                                        })
                                    }, index))
                            })
                        })
                    ]
                }),
                isMenuOpen && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: "mt-2 text-center",
                        children: menuItems.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "text-mainWhite py-2 px-4 transition duration-1000 hover:text-primary1 cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: item.path,
                                    children: item.label
                                })
                            }, index))
                    })
                })
            ]
        })
    });
};
// MainHeader.propTypes = {
//   menuItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       path: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   logoSrc: PropTypes.string.isRequired,
// };
/* harmony default export */ const MainHeader_MainHeader = (MainHeader);

;// CONCATENATED MODULE: ./src/components/MainHeader/MainHeader.mock.ts
const MainHeaderData = {
    logoSrc: "./Image/images.png",
    menuItems: [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "About",
            path: "/about"
        },
        {
            label: "Services",
            path: "/services"
        },
        {
            label: "Vehicle",
            path: "/vehicle"
        },
        {
            label: "Clients",
            path: "/clients"
        },
        {
            label: "Contact",
            path: "/contact"
        }
    ]
};

;// CONCATENATED MODULE: ./src/components/Layouts/layout.tsx



const Layout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(MainHeader_MainHeader, {
                ...MainHeaderData
            }),
            children
        ]
    });
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/_app.tsx



function App({ Component, pageProps }) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(layout, {
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;