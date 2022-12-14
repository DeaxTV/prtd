"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7108);




const ContextMenu = ({ content , children  })=>{
    let [hasBack, setHasBack] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    let [hasForward, setHasForward] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const contextListener = (e)=>{
            e.preventDefault();
            const menu = document.querySelector(".context-menu");
            const menuPosition = {
                x: e.pageX,
                y: e.pageY
            };
            const windowSize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            if (windowSize.width - menuPosition.x < menu.offsetWidth) {
                menu.style.left = `${windowSize.width - menu.offsetWidth - 24}px`;
            } else {
                menu.style.left = `${menuPosition.x}px`;
            }
            menu.style.top = `${menuPosition.y}px`;
            menu.style.display = "block";
        };
        const clickListener = (e)=>{
            const content = document.querySelector(".context-menu");
            content.style.display = "none";
        };
        document.addEventListener("contextmenu", contextListener);
        document.addEventListener("click", clickListener);
        return ()=>{
            document.removeEventListener("contextmenu", contextListener);
            document.removeEventListener("click", clickListener);
        };
    }, [
        content
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setHasBack(window.history.length > 1);
        setHasForward(window.history.length > 1);
    }, []);
    const event = {
        hasForward: hasForward,
        hasBack: hasBack,
        goBack: ()=>{
            window.history.back();
        },
        goForward: ()=>{
            window.history.forward();
        },
        refreshPage: ()=>{
            window.location.reload();
        },
        viewSource: ()=>{
            window.open("https://github.com/DeaxTV/deax.ml", "_blank");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    zIndex: 9999999,
                    display: "none"
                },
                className: "context-menu absolute bg-[#f8f8f8] dark:bg-[#080808] rounded-lg shadow-xl py-2 w-72 divide-y divide-gray-600/10 space-y-2",
                children: content(event)
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextMenu);
const Item = ({ icon , text , kbd , onClick , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: onClick,
        className: "flex flex-col text-sm",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex gap-2 w-full justify-between items-center hover:bg-gray-600/5 p-2 px-4 transition-all duration-200",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                        icon,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm",
                            children: text
                        })
                    ]
                }),
                kbd && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Key__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    keys: kbd
                })
            ]
        })
    });
};


/***/ }),

/***/ 6735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Global_Cursor)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/hooks/useMousePosition.js

const useMousePosition = ()=>{
    const { 0: mousePosition , 1: setMousePosition  } = (0,external_react_.useState)({
        x: null,
        y: null,
        delayX: null,
        delayY: null
    });
    (0,external_react_.useEffect)(()=>{
        const mouseMoveHandler = (event)=>{
            const { clientX , clientY  } = event;
            setMousePosition((options)=>({
                    ...options,
                    x: clientX,
                    y: clientY
                }));
            setTimeout(()=>{
                setMousePosition((options)=>({
                        ...options,
                        delayX: clientX,
                        delayY: clientY
                    }));
            }, 100);
        };
        document.addEventListener("mousemove", mouseMoveHandler);
        return ()=>{
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);
    return mousePosition;
};
/* harmony default export */ const hooks_useMousePosition = (useMousePosition);

;// CONCATENATED MODULE: ./src/components/Global/Cursor.jsx




const Cursor = ()=>{
    const { x , y , delayX , delayY  } = hooks_useMousePosition();
    let [isClicking, setIsClicking] = external_react_default().useState(false);
    let mouseRef = external_react_default().useRef(null);
    let dotRef = external_react_default().useRef(null);
    (0,external_react_.useEffect)(()=>{
        if (!mouseRef.current) return;
        if (!dotRef.current) return;
        let cursor = mouseRef.current;
        let cursorDot = dotRef.current;
        const mouseOut = (e)=>{
            cursor.style.opacity = 0;
        };
        const mouseOver = (e)=>{
            cursor.style.opacity = 1;
        };
        const onLink = (e)=>{
            cursorDot.style.transform = "scale(5)";
        };
        const offLink = (e)=>{
            cursorDot.style.transform = "scale(1)";
        };
        const click = (e)=>{
            setIsClicking(true);
            setTimeout(()=>{
                setIsClicking(false);
            }, 100);
        };
        document.addEventListener("mouseout", mouseOut);
        document.addEventListener("mouseover", mouseOver);
        document.addEventListener("click", click);
        return ()=>{
            window.removeEventListener("mouseout", mouseOut);
            window.removeEventListener("mouseover", mouseOver);
            window.removeEventListener("click", click);
        };
    }, [
        mouseRef
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `hidden lg:block fixed ring-2 ring-primary rounded-full w-10 h-10 bg-white/50 dark:bg-black/50 pointer-events-none`,
            style: {
                left: delayX - 16,
                top: delayY - 16,
                zIndex: 9999999999999,
                transition: "opacity 0.1s ease-in-out",
                opacity: 0
            },
            ref: mouseRef,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full flex justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-primary rounded-full w-2 h-2 fixed pointer-events-none",
                    style: {
                        left: x,
                        top: y
                    },
                    ref: dotRef
                })
            })
        })
    });
};
/* harmony default export */ const Global_Cursor = (Cursor);


/***/ }),

/***/ 7108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Key)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Key({ keys , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-gray-600/5 text-zinc-400 transition-all px-2 py-1 flex items-center justify-center duration-200 gap-2 rounded-lg text-xs",
            children: keys.map((keya, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    ...props,
                    children: keya
                }, index)).reduce((prev, curr)=>[
                    prev,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "+"
                    }, 1),
                    curr
                ])
        })
    });
};


/***/ }),

/***/ 9613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Global_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5329);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6420);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4587);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_clqu_config__WEBPACK_IMPORTED_MODULE_5__);






function Footer() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let { 0: heartColor , 1: setHeartColor  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("#4F3DFE");
    function randomColor() {
        let color = "#";
        let letters = "0123456789ABCDEF";
        for(let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-7xl mx-auto py-12 border-t border-gray-500/10",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col lg:flex-row items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-lg text-zinc-400",
                        children: [
                            "\xa9 2019 - ",
                            new Date().getFullYear(),
                            " ",
                            (_clqu_config__WEBPACK_IMPORTED_MODULE_5___default().name),
                            ". All rights reserved."
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-lg text-zinc-400 select-none",
                                children: [
                                    "Made with ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        onClick: ()=>{
                                            setHeartColor(randomColor());
                                        },
                                        className: "fas fa-heart",
                                        style: {
                                            color: heartColor,
                                            cursor: "pointer"
                                        }
                                    }),
                                    " by ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "",
                                        className: "text-zinc-400 hover:text-primary hover:dark:text-white",
                                        children: "deax"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-sm text-zinc-400 select-none",
                                children: [
                                    "Powered by ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://softwareer.net/",
                                        className: "text-zinc-400 hover:text-primary hover:dark:text-white",
                                        children: "Softwareer"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 605:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var components_Global_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5329);
/* harmony import */ var context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4987);
/* harmony import */ var hooks_useSWR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8961);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6420);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4587);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_clqu_config__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, hooks_useSWR__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, hooks_useSWR__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Navbar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    let { 0: isOpen , 1: setMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { data: $socials  } = (0,hooks_useSWR__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("/api/socials");
    const socials = $socials?.data;
    const { isTheme , toggleTheme  } = (0,context_theme__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .F)();
    const pages = [
        {
            link: "/",
            label: "Home",
            icon: {
                default: "fal fa-home",
                active: "fas fa-home"
            },
            active: router.pathname === "/"
        },
        {
            link: "/about",
            label: "About",
            icon: {
                default: "fal fa-user",
                active: "fas fa-user"
            },
            active: router.pathname === "/about"
        },
        {
            link: "/projects",
            label: "Projects",
            icon: {
                default: "fal fa-project-diagram",
                active: "fas fa-project-diagram"
            },
            active: router.pathname === "/projects"
        },
        {
            link: "/posts",
            label: "Posts",
            icon: {
                default: "fal fa-newspaper",
                active: "fas fa-newspaper"
            },
            active: router.pathname === "/posts"
        }
    ];
    const setIsOpen = (value)=>{
        if (value === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        setMenu(value);
    };
    const { 0: scrolled , 1: setScrolled  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
        currentScrollHeight: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        window.onscroll = ()=>{
            const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
            if (scrolled != newScrollHeight) {
                setScrolled({
                    currentScrollHeight: newScrollHeight
                });
            }
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    zIndex: 99
                },
                id: "header-clqu",
                className: `${scrolled?.currentScrollHeight > 70 && "!py-4 shadow-xl bg-white dark:bg-black"} fixed px-6 lg:px-36 py-12 w-full transition-all duration-200`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-7xl mx-auto py-12 w-full px-6 lg:px-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center gap-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "text-2xl font-bold transition-all duration-200",
                                        children: [
                                            (_clqu_config__WEBPACK_IMPORTED_MODULE_8___default().name),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "relative whitespace-nowrap text-primary",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        "aria-hidden": "true",
                                                        viewBox: "0 0 418 42",
                                                        className: "absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20",
                                                        preserveAspectRatio: "none",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "relative",
                                                        children: "."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        onClick: ()=>setIsOpen(true),
                                        className: "fas fa-bars text-2xl text-zinc-400 hover:text-black hover:dark:text-white cursor-pointer bg-gray-500/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>toggleTheme(),
                                        className: "text-2xl text-zinc-400 hover:text-black hover:dark:text-white cursor-pointer bg-gray-500/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200",
                                        children: isTheme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-moon"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-sun"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                show: isOpen,
                appear: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                        as: "div",
                        enter: "transition-all duration-200",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition-all duration-200",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        className: "fixed right-0 top-0 w-full h-full bg-black/50 z-[999]",
                        onClick: ()=>setIsOpen(false)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                        enter: "transition-all duration-500",
                        enterFrom: "opacity-0 translate-x-full",
                        enterTo: "opacity-100 translate-x-0",
                        leave: "transition-all duration-200",
                        leaveFrom: "opacity-100 translate-x-0",
                        leaveTo: "opacity-0 translate-x-full",
                        className: "fixed right-0 top-0 w-full lg:w-[30rem] h-full bg-[#f5f5f5] dark:bg-[#050505] lg:rounded-l-2xl p-6 z-[1000]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                zIndex: 999
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between w-full items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-2xl font-semibold",
                                            children: [
                                                (_clqu_config__WEBPACK_IMPORTED_MODULE_8___default().name),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "relative whitespace-nowrap text-primary",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            "aria-hidden": "true",
                                                            viewBox: "0 0 418 42",
                                                            className: "absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20",
                                                            preserveAspectRatio: "none",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "relative",
                                                            children: "."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            onClick: ()=>setIsOpen(false),
                                            className: "fa fa-times w-12 h-12 hover:bg-gray-500/5 text-xl flex items-center justify-center transition-all duration-200 rounded-lg "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-8 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs font-medium uppercase text-black/50 dark:text-white/10",
                                                    children: "Menu"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full h-0.5 bg-black/50 dark:bg-white/10"
                                                })
                                            ]
                                        }),
                                        pages.map((page, index)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: page.link,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    onClick: ()=>setIsOpen(false),
                                                    className: `flex items-center gap-4 text-xl transition-all duration-200 ${page.active ? "bg-gray-500/5 text-black dark:text-white font-semibold" : "hover:bg-gray-500/10 text-zinc-400 hover:text-black hover:dark:text-white"} px-4 py-3 rounded-lg`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: (page.active ? page.icon.active : page.icon.default) + " w-6"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: page.label
                                                        })
                                                    ]
                                                })
                                            }, index);
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-8 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs font-medium uppercase text-black/50 dark:text-white/10",
                                                    children: "Socials"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full h-0.5 bg-black/50 dark:bg-white/10"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                socials?.map((social, index)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: social.url,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `fab fa-${social.name} text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10`
                                                        })
                                                    }, index);
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/contact",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        onClick: ()=>setIsOpen(false),
                                                        className: "flex gap-2 px-4 items-center w-full h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-envelope text-2xl"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "Contact"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useTheme),
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);
const ThemeProvider = ({ children  })=>{
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let { 0: inStorage , 1: setInStorage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("dark");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inStorage === null) {
            let storedTheme = localStorage.getItem("theme");
            if (storedTheme) {
                setTheme(storedTheme);
            } else {
                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    setTheme("dark");
                } else {
                    setTheme("light");
                }
            }
            setInStorage(true);
        }
    }, [
        inStorage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (theme === "dark") {
            document?.documentElement.classList.add("dark");
        } else {
            document?.documentElement.classList.remove("dark");
        }
    }, [
        theme
    ]);
    const toggleTheme = ()=>{
        let newTheme = theme === "light" ? "dark" : "light";
        if (newTheme === "dark") {
            document?.documentElement.classList.add("dark");
        } else {
            document?.documentElement.classList.remove("dark");
        }
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };
    const changeTheme = (theme)=>{
        if (theme === "dark") {
            document?.documentElement.classList.add("dark");
        } else {
            document?.documentElement.classList.remove("dark");
        }
        setTheme(theme);
        localStorage.setItem("theme", theme);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            isTheme: theme,
            toggleTheme,
            setTheme: changeTheme
        },
        children: children
    });
};


/***/ }),

/***/ 2307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Static_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(605);
/* harmony import */ var context_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8762);
/* harmony import */ var context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Static_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9613);
/* harmony import */ var components_Global_Cursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6735);
/* harmony import */ var components_Global_ContextMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5765);
/* harmony import */ var components_Global_Key__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Static_Navbar__WEBPACK_IMPORTED_MODULE_1__]);
components_Static_Navbar__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context_theme__WEBPACK_IMPORTED_MODULE_3__/* .ThemeProvider */ .f, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context_page__WEBPACK_IMPORTED_MODULE_2__/* .PageProvider */ .Ti, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: "deax"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Global_Cursor__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Global_ContextMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            content: (event)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                event.hasBack && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Global_ContextMenu__WEBPACK_IMPORTED_MODULE_7__/* .Item */ .c, {
                                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-arrow-left"
                                                    }),
                                                    text: "Back",
                                                    kbd: [
                                                        "Alt",
                                                        "◀"
                                                    ],
                                                    onClick: event.goBack
                                                }),
                                                event.hasForward && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Global_ContextMenu__WEBPACK_IMPORTED_MODULE_7__/* .Item */ .c, {
                                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-arrow-right"
                                                    }),
                                                    text: "Forward",
                                                    kbd: [
                                                        "Alt",
                                                        "▶"
                                                    ],
                                                    onClick: event.goForward
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Global_ContextMenu__WEBPACK_IMPORTED_MODULE_7__/* .Item */ .c, {
                                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fa fa-redo"
                                                    }),
                                                    text: "Refresh",
                                                    kbd: [
                                                        "Ctrl",
                                                        "R"
                                                    ],
                                                    onClick: event.refreshPage
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Global_ContextMenu__WEBPACK_IMPORTED_MODULE_7__/* .Item */ .c, {
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-code"
                                                }),
                                                text: "View Source",
                                                onClick: event.viewSource
                                            })
                                        })
                                    ]
                                }),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Static_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                                    className: "min-h-[67vh] px-6 lg:px-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Static_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "color-layout layout-purple position-right-top"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "color-layout layout-blue position-left-bottom"
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [652,487,420,966], () => (__webpack_exec__(2307)));
module.exports = __webpack_exports__;

})();