exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 5196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ ImageSliderData)
/* harmony export */ });
const ImageSliderData = {
    "MainTitle": "WHAT SAYS CUSTOMERS",
    "slides": [
        {
            "img": "./Image/client-img1.png",
            "title": "Hannery",
            "opinion": "It is a long established fact that a reader will be distracted by the readable content of a page"
        },
        {
            "img": "./Image/client-img2.png",
            "title": "Channery",
            "opinion": "It is a long established fact that a reader will be distracted by the readable content of a page"
        },
        {
            "img": "./Image/client-img1.png",
            "title": "Hannery",
            "opinion": "It is a long established fact that a reader will be distracted by the readable content of a page"
        },
        {
            "img": "./Image/client-img2.png",
            "title": "Channery",
            "opinion": "It is a long established fact that a reader will be distracted by the readable content of a page"
        }
    ]
};


/***/ }),

/***/ 7249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1598);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);






const ImageSlider = ({ MainTitle, slides })=>{
    const SampleNextArrow = ({ className, onClick })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${className} hidden md:block  cursor-pointer `,
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "./Image/right-arrow.png",
                alt: "rightArrow",
                className: "hidden md:block"
            })
        });
    };
    const SamplePrevArrow = ({ className, onClick })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${className}   cursor-pointer`,
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "./Image/left-arrow.png",
                alt: "leftArrow",
                className: "hidden md:block"
            })
        });
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: "0",
        autoplay: true,
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SampleNextArrow, {
            MainTitle: "",
            slides: "",
            className: [],
            onClick: undefined,
            img: "",
            title: ""
        }),
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SamplePrevArrow, {
            MainTitle: "",
            slides: "",
            className: [],
            onClick: undefined,
            img: "",
            title: ""
        }),
        responsive: [
            // {
            //   breakpoint: 1728,
            //   settings: {
            //     slidesToShow: 3,
            //     slidesToScroll: 3,
            //     infinite: true,
            //     dots: false,
            //   },
            // },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 428,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            }
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pt-[100px]  ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container mx-auto",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-6 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mb-10 text-5xl text-orange-500 font-md font-ralewayBold text-center",
                        children: MainTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                        ...settings,
                        children: slides.map((slide, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pt-[90px] relative w-full",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col justify-center items-center w-full px-2 md:px-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute top-0 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: slide.img,
                                                alt: `clientImg-${index}`,
                                                className: "mx-auto rounded-md"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center px-5 pb-[30px] shadow shadow-orange-500 w-full bg-orange-50",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-3xl font-md font-ralewayBold text-black mt-20",
                                                    children: slide.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-black text-base font-ralewayBold break-words pt-5  text-center",
                                                    children: slide.opinion
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "./img/quick-icon.png",
                                                alt: "",
                                                className: "mt-[50px]"
                                            })
                                        })
                                    ]
                                })
                            }, index))
                    })
                ]
            })
        })
    });
};
ImageSlider.propTypes = {
    MainTitle: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
    slides: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
        img: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,
        title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,
        opinion: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired
    }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSlider);


/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ })

};
;