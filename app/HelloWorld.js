define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, tslib_1, decorators_1, Widget, widget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const CSS = {
        base: "esri-hello-world",
        emphasis: "esri-hello-world--emphasis"
    };
    let HelloWorld = class HelloWorld extends Widget {
        constructor(params) {
            super(params);
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  firstName
            //----------------------------------
            this.firstName = "John";
            //----------------------------------
            //  lastName
            //----------------------------------
            this.lastName = "Smith";
            //----------------------------------
            //  emphasized
            //----------------------------------
            this.emphasized = false;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        render() {
            const greeting = this._getGreeting();
            const classes = {
                [CSS.emphasis]: this.emphasized
            };
            return (widget_1.tsx("div", { class: this.classes(CSS.base, classes) }, greeting));
        }
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        _getGreeting() {
            return `Hello, my name is ${this.firstName} ${this.lastName}!`;
        }
    };
    tslib_1.__decorate([
        decorators_1.property(),
        widget_1.renderable()
    ], HelloWorld.prototype, "firstName", void 0);
    tslib_1.__decorate([
        decorators_1.property(),
        widget_1.renderable()
    ], HelloWorld.prototype, "lastName", void 0);
    tslib_1.__decorate([
        decorators_1.property(),
        widget_1.renderable()
    ], HelloWorld.prototype, "emphasized", void 0);
    HelloWorld = tslib_1.__decorate([
        decorators_1.subclass("esri.widgets.HelloWorld")
    ], HelloWorld);
    exports.default = HelloWorld;
});
//# sourceMappingURL=HelloWorld.js.map