/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

/** Simple extension that adds a "File > Hello World" menu item. Inserts "Hello, world!" at cursor pos. */
define(function (require, exports, module) {
    "use strict";

    var AppInit = brackets.getModule("utils/AppInit"),
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

    //bind onscroll eventlietener to target
    var target = document.getElementsByClassName('content')[0];
    var fontSize = 12;

    // Function to run when the menu item is clicked
    function handleScroll(event) {
        if (event.shiftKey) {
            console.log(event);

            if (event.wheelDeltaY > 0 || event.wheelDeltaX > 0) {
                //increase font
                ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror { font-size: '" +(++fontSize) +"px !important'; line-height: '" +(fontSize+4) +"px !important' }");
            } else {
                //decrease font
                ExtensionUtils.addEmbeddedStyleSheet(".CodeMirror  { font-size: '" +((--fontSize > 8)?fontSize:8) +"px !important'; line-height: '" +(fontSize+4) +"px !important' }");
            }
        }
    }

    //Bracket has completely loaded, now we can implement the feature
    AppInit.appReady(function () {
        
        //bind onscroll eventlietener to target
        target.addEventListener("mousewheel", handleScroll);
    });

});