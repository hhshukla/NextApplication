exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 3151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CubeSlideData)
/* harmony export */ });
const CubeSlideData = [
    {
        title: "Your Choice ...",
        imageSrc: "./Image/CarImg-1.png"
    },
    {
        title: "Your Choice ...",
        imageSrc: "./Image/CarImg-2.png"
    },
    {
        title: "Your Choice ...",
        imageSrc: "./Image/CarImg-3.png"
    },
    {
        title: "Your Choice ...",
        imageSrc: "./Image/CarImg-1.png"
    }
];


/***/ }),

/***/ 210:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _CubeSlide_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3151);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7644);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_effect_cube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8240);
/* harmony import */ var swiper_css_effect_cube__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_cube__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5392);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2184);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper_modules__WEBPACK_IMPORTED_MODULE_7__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper_modules__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// Import Swiper React components


// Import Swiper styles



// import required modules

const CubeSlide = ({ title, imageSrc })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
            effect: "cube",
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            pagination: true,
            modules: [
                swiper_modules__WEBPACK_IMPORTED_MODULE_7__.EffectCube,
                swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Pagination
            ],
            className: "mySwiper",
            children: _CubeSlide_mock__WEBPACK_IMPORTED_MODULE_3__/* .CubeSlideData */ .Z.map((slide, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "./Image/bgCar.png",
                                alt: "bgCar",
                                className: "w-full"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute inset-0 pt-2 md:pt-20",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center items-center  w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: " text-md md:text-6xl text-orange-500 font-md font-ralewayBold",
                                        children: slide.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center items-center pt-8 md:pt-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: slide.imageSrc,
                                        alt: `Car${index + 1}`,
                                        className: "md:w-[425px]"
                                    })
                                })
                            ]
                        })
                    ]
                }, index))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CubeSlide);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8240:
/***/ (() => {



/***/ }),

/***/ 5392:
/***/ (() => {



/***/ }),

/***/ 7644:
/***/ (() => {



/***/ })

};
;