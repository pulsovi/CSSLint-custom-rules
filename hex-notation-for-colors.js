/*
 * Rule: Colors should be in hexadecimal notation.
 */
/*global CSSLint*/
CSSLint.addRule({
  //rule informations
  id: "hex colors",
  name: "Require hex colors",
  desc: "Always use hex colors",
  browsers: "all",
  //initialization
  init: function(parser, reporter) {
    var rule = this;

    parser.addListener("property", function(event) {
      event.value.parts.forEach(function(part) {
        if (
          part.type == "color" &&
          part.text.charAt(0) != '#' &&
          part.text.indexOf('rgba')
        ) {
          reporter.report(
            "Colors should be in hexadecimal notation: " + part,
            event.line,
            event.col,
            rule
          );
        }
      });
    });
  }
});
