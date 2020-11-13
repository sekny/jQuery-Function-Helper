"use strict";

// Class Definition
var helper = function() {
    
    var _stripScript = function(html) {
        return html ? html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') : html;
		};

     
    // Public Functions
    return {
        removeScriptTag: function(html){_stripScript(html)}
    };
}();
