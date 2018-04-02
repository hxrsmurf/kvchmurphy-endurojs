define(["handlebars"], function(Handlebars) { return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- Copyright -->\n<div id=\"copyright\">\n	<div class=\"container\">	\n		<p>\n"
    + ((stack1 = container.invokePartial(partials.adsense,depth0,{"name":"adsense","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		</p>\n		<p>\n		Design: <a href=\"http://templated.co\">TEMPLATED</a> Images: <a href=\"http://unsplash.com\">Unsplash</a> (<a href=\"http://unsplash.com/cc0\">CC0</a>)\n		</p>\n		<p>\n		<a href=\"http://www.endurojs.com/\" target=\"_blank\"><img src=\"https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1484647615_made_with_enduro.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1484647615_made_with_enduro.png 1x, https://s3-eu-west-1.amazonaws.com/enduro.website/direct_uploads/1484647617_made_with_enduro@2x.png 2x\"></a>\n		</p>\n	</div>\n</div>\n";
},"usePartial":true,"useData":true}); });