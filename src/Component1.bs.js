// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Screenshot$ReactHooksTemplate = require("./screenshot.bs.js");

function str(prim) {
  return prim;
}

var foodImg = (require('./food.png'));

var helpImg = (require('./help.png'));

function selectedClasses(bool) {
  if (bool) {
    return "p-4 border shadow bg-yellow-100 justify-between flex flex-col";
  } else {
    return "p-4 border shadow justify-between flex flex-col ";
  }
}

function renderImage(image) {
  if (image) {
    return helpImg;
  } else {
    return foodImg;
  }
}

function renderForm(time, setTime, numbers, setNumbers, caption1, setCaption1, caption2, setCaption2, image, setImage, contact, setContact) {
  return React.createElement("div", undefined, React.createElement("label", {
                  className: "block mb-2 mt-4",
                  htmlFor: "caption1"
                }, "Select Image"), React.createElement("div", {
                  className: "w-full mt-4 w-full mt-4 flex px-10 justify-between text-center"
                }, React.createElement("div", {
                      className: image === /* Food */0 ? "p-4 border shadow bg-yellow-100 justify-between flex flex-col" : "p-4 border shadow justify-between flex flex-col ",
                      onClick: (function (param) {
                          return Curry._1(setImage, (function (param) {
                                        return /* Food */0;
                                      }));
                        })
                    }, React.createElement("img", {
                          src: foodImg
                        }), React.createElement("div", {
                          className: "text-xs pt-2 font-semibold"
                        }, "Request for Food")), React.createElement("div", {
                      className: (
                        image === /* Help */1 ? "p-4 border shadow bg-yellow-100 justify-between flex flex-col" : "p-4 border shadow justify-between flex flex-col "
                      ) + " ml-2",
                      onClick: (function (param) {
                          return Curry._1(setImage, (function (param) {
                                        return /* Help */1;
                                      }));
                        })
                    }, React.createElement("img", {
                          src: helpImg
                        }), React.createElement("div", {
                          className: "text-xs pt-2 font-semibold"
                        }, "Request for Help"))), React.createElement("div", {
                  className: "w-full mt-4"
                }, React.createElement("label", {
                      className: "block mb-2",
                      htmlFor: "caption1"
                    }, "Location"), React.createElement("input", {
                      className: "appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400",
                      id: "caption1",
                      placeholder: "waynadu melppadi",
                      value: caption1,
                      onChange: (function ($$event) {
                          return Curry._1(setCaption1, $$event.target.value);
                        })
                    })), React.createElement("div", {
                  className: "w-full mt-4"
                }, React.createElement("label", {
                      className: "block mb-2",
                      htmlFor: "caption1"
                    }, "Requirement"), React.createElement("input", {
                      className: "appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400",
                      id: "caption2",
                      placeholder: "Food for 100 people",
                      value: caption2,
                      onChange: (function ($$event) {
                          return Curry._1(setCaption2, $$event.target.value);
                        })
                    })), React.createElement("div", {
                  className: "w-full mt-4"
                }, React.createElement("label", {
                      className: "block mb-2",
                      htmlFor: "time"
                    }, "Message recieved at"), React.createElement("input", {
                      className: "appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400",
                      id: "time",
                      placeholder: "Friday 4 PM ",
                      value: time,
                      onChange: (function ($$event) {
                          return Curry._1(setTime, $$event.target.value);
                        })
                    })), React.createElement("div", {
                  className: "w-full mt-4"
                }, React.createElement("label", {
                      className: "block mb-2",
                      htmlFor: "numbers"
                    }, "Contact (Name and Number)"), React.createElement("input", {
                      className: "appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400",
                      id: "numbers",
                      placeholder: "John Doe 9998887770",
                      value: numbers,
                      onChange: (function ($$event) {
                          return Curry._1(setNumbers, $$event.target.value);
                        })
                    })), React.createElement("div", {
                  className: "w-full mt-4"
                }, React.createElement("label", {
                      className: "block mb-2",
                      htmlFor: "contact"
                    }, "Contact (Name and Number)"), React.createElement("input", {
                      className: "appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400",
                      id: "contact",
                      placeholder: "John Doe 9998887770",
                      value: contact,
                      onChange: (function ($$event) {
                          return Curry._1(setContact, $$event.target.value);
                        })
                    })));
}

function renderView(caption1, caption2, time, numbers, image, contact) {
  return React.createElement("div", {
              className: "flex flex-col w-full items-center justifycenter"
            }, React.createElement("div", {
                  className: "px-10"
                }, React.createElement("img", {
                      src: image ? helpImg : foodImg
                    })), React.createElement("div", {
                  className: "text-2xl font-semibold mt-2"
                }, caption1), React.createElement("div", {
                  className: "text-3xl font-bold text-red-600"
                }, caption2), React.createElement("div", {
                  className: "text-lg font-semibold"
                }, "Message recieved at " + time), React.createElement("div", {
                  className: "text-md mt-4"
                }, "Call for more info"), React.createElement("div", {
                  className: "text-2xl font-semibold"
                }, numbers), React.createElement("div", {
                  className: "text-2xl font-semibold"
                }, contact), React.createElement("div", {
                  className: "text-sm text-center w-full font-bold mt-5"
                }, React.createElement("div", undefined, "Visit the link to create similar poster"), React.createElement("a", {
                      className: "text-blue-600",
                      href: "./"
                    }, "poster.afterflood.in")));
}

function Component1(Props) {
  var match = React.useState((function () {
          return true;
        }));
  var setShowForm = match[1];
  var showForm = match[0];
  var match$1 = React.useState((function () {
          return "";
        }));
  var caption1 = match$1[0];
  var match$2 = React.useState((function () {
          return "";
        }));
  var caption2 = match$2[0];
  var match$3 = React.useState((function () {
          return "";
        }));
  var time = match$3[0];
  var match$4 = React.useState((function () {
          return /* Food */0;
        }));
  var image = match$4[0];
  var match$5 = React.useState((function () {
          return "";
        }));
  var numbers = match$5[0];
  var match$6 = React.useState((function () {
          return "";
        }));
  var contact = match$6[0];
  return React.createElement("div", {
              className: "mt-10 flex flex-col justify-center items-center bg-white mx-2"
            }, React.createElement("div", {
                  className: "text-2xl font-semibold"
                }, "Poster Creator"), React.createElement("div", {
                  className: "mt-2 bg-white max-w-xl w-full rounded-lg overflow-hidden shadow-2xl px-4 md:px-20 py-4 md:py-10",
                  id: "image-to-print"
                }, showForm ? React.createElement("div", undefined, renderForm(time, match$3[1], numbers, match$5[1], caption1, match$1[1], caption2, match$2[1], image, match$4[1], contact, match$6[1])) : React.createElement("div", undefined, renderView(caption1, caption2, time, numbers, image, contact))), React.createElement("div", {
                  className: "flex justify-between"
                }, React.createElement("div", {
                      className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4",
                      onClick: (function (param) {
                          return Curry._1(setShowForm, (function (form) {
                                        return !form;
                                      }));
                        })
                    }, "Generate Image"), showForm ? null : React.createElement(Screenshot$ReactHooksTemplate.make, {
                        elementId: "image-to-print"
                      })), React.createElement("a", {
                  className: "mt-4 font-black text-md text-blue-600 ",
                  href: "https://github.com/afterflood/image-generator",
                  target: "_blank"
                }, "Github"));
}

var make = Component1;

exports.str = str;
exports.foodImg = foodImg;
exports.helpImg = helpImg;
exports.selectedClasses = selectedClasses;
exports.renderImage = renderImage;
exports.renderForm = renderForm;
exports.renderView = renderView;
exports.make = make;
/* foodImg Not a pure module */
