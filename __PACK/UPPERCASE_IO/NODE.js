UPPERCASE_IO.MAIN=METHOD({run:function(e,n){"use strict";var s=require("less");e(SML_BRIDGE({rootPath:"./UPPERCASE_IO/view"}).requestListener),n({extension:"less",preprocessor:function(e,n){s.render(e,function(e,s){n({content:s.css,contentType:"text/css",version:CONFIG.version})})}})}});