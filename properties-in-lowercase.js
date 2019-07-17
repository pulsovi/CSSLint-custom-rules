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
      if (event.property.text !== event.property.text.toLowerCase())
        reporter.error(
          "Properties should be in lowercase: " + event.property,
          event.property.line,
          event.property.col,
          rule
        );
      event.value.parts.forEach(function(part) {
        if (
          part.text != part.text.toLowerCase() &&
          event.property.text !== 'font-family'
        ) {
          reporter.report(
            "Properties should be in lowercase: " + part,
            part.line,
            part.col,
            rule
          );
        }
      });
    });
  }
});
