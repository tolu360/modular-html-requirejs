require(["core"],function(){require(["jquery","modules/Carousel"],function(e,t){new t(e(".carousel"))})}),define("page/carousel",function(){}),!function(e){e.fn.pluginA=function(){}}(jQuery),define("plugins/jquery.pluginA",function(){}),!function(e){e.fn.pluginB=function(){}}(jQuery),define("plugins/jquery.pluginB",function(){}),define("modules/Carousel",["require","jquery","plugins/jquery.pluginA","plugins/jquery.pluginB"],function(e){e("jquery"),e("plugins/jquery.pluginA"),e("plugins/jquery.pluginB");var t=function(e){e.append("Carousel module loaded!")};return t.prototype={},t});