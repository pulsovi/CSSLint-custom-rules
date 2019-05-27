/**
 * properties should be lowercase
 */
CSSLint.addRule({
  //rule information
  id: "lowercase-properties",
  name: "use only lowercase properties",
  desc: "Properties should be in lowercase.",
  browsers: "All",
  //initialization
  init: function(parser, reporter) {
    var rule = this;

    parser.addListener("property", function(event) {
      event.value.parts.forEach(function(part) {
        if (part.text != part.text.toLowerCase()) {
          reporter.report(
            "Properties should be in lowercase: " + part,
            event.line,
            event.col,
            rule
          );
        }
      });
    });
  }
});
