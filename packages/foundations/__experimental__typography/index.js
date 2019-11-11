'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var fontSizes = [12, 15, 17, 20, 24, 28, 34, 42, 50, 70];
var fonts = {
  headlineSerif: "GH Guardian Headline, Georgia, serif",
  bodySerif: "GuardianTextEgyptian, Georgia, serif",
  bodySans: "GuardianTextSans, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
};
var lineHeights = ["1.15em", "1.35em", "1.45em"];
var fontWeights = [300, 400, 500, 700]; // Arrays of colours should have pillar colors first

var fontSizesRem = fontSizes.map(function (fontSize) {
  return fontSize / 16;
});
var headlineSizes = {
  tiny: fontSizesRem[2],
  //17px
  // BEGIN SUGGESTED RANGE
  xxsmall: fontSizesRem[3],
  //20px
  xsmall: fontSizesRem[4],
  //24px
  small: fontSizesRem[5],
  //28px
  medium: fontSizesRem[6],
  //34px
  large: fontSizesRem[7],
  //42px
  xlarge: fontSizesRem[8],
  //50px
  // END SUGGESTED RANGE
  jumbo: fontSizesRem[9] //70px

};
var bodySizes = {
  small: fontSizesRem[1],
  //15px
  medium: fontSizesRem[2] //17px

};
var textSansSizes = {
  // BEGIN SUGGESTED RANGE
  xsmall: fontSizesRem[0],
  //12px
  small: fontSizesRem[1],
  //15px
  medium: fontSizesRem[2],
  //17px
  // END SUGGESTED RANGE
  large: fontSizesRem[3],
  //20px
  xlarge: fontSizesRem[4],
  //24px
  xxlarge: fontSizesRem[5] //28px
  // xxxlarge: fontSizesRem[6], //34px
  // xxxxlarge: fontSizesRem[7], //42px
  // xxxxxlarge: fontSizesRem[8], //50px
  // xxxxxxlarge: fontSizesRem[9], //70px

};
var fontSizeMapping = {
  headline: headlineSizes,
  body: bodySizes,
  textSans: textSansSizes
};
var fontMapping = {
  headline: fonts.headlineSerif,
  body: fonts.bodySerif,
  textSans: fonts.bodySans
};
var lineHeightMapping = {
  tight: lineHeights[0],
  regular: lineHeights[1],
  loose: lineHeights[2]
};
var fontWeightMapping = {
  headline: {
    light: {
      fontWeight: fontWeights[0],
      hasItalic: true
    },
    medium: {
      fontWeight: fontWeights[2],
      hasItalic: true
    },
    bold: {
      fontWeight: fontWeights[3],
      hasItalic: false
    }
  },
  body: {
    regular: {
      fontWeight: fontWeights[1],
      hasItalic: true
    },
    bold: {
      fontWeight: fontWeights[3],
      hasItalic: true
    }
  },
  textSans: {
    regular: {
      fontWeight: fontWeights[1],
      hasItalic: true
    },
    bold: {
      fontWeight: fontWeights[3],
      hasItalic: false
    }
  }
};

var fs = function fs(_ref) {
  var category = _ref.category,
      level = _ref.level,
      lineHeight = _ref.lineHeight,
      fontWeight = _ref.fontWeight;
  var fontFamilyValue = fontMapping[category];
  var fontSizeValue = fontSizeMapping[category][level];
  var lineHeightValue = lineHeightMapping[lineHeight];
  var fontWeightDefinition = fontWeightMapping[category][fontWeight];
  return "\n\tfont-family: ".concat(fontFamilyValue, ";\n\tfont-size: ").concat(fontSizeValue, "rem;\n\tline-height: ").concat(lineHeightValue, ";\n\t").concat(fontWeightDefinition ? "font-weight: ".concat(fontWeightDefinition.fontWeight) : "", ";\n\t");
};

var headline = Object.keys(headlineSizes).reduce(function (acc, key) {
  return Object.assign({}, acc, _defineProperty({}, key, function (options) {
    var defaultOptions = {
      lineHeight: "tight",
      fontWeight: "medium"
    };

    var _Object$assign = Object.assign(defaultOptions, options),
        lineHeight = _Object$assign.lineHeight,
        fontWeight = _Object$assign.fontWeight;

    return fs({
      category: "headline",
      level: key,
      lineHeight: lineHeight,
      fontWeight: fontWeight
    });
  }));
}, {});
var body = Object.keys(bodySizes).reduce(function (acc, key) {
  return Object.assign({}, acc, _defineProperty({}, key, function (options) {
    var defaultOptions = {
      lineHeight: "loose",
      fontWeight: "regular"
    };

    var _Object$assign3 = Object.assign(defaultOptions, options),
        lineHeight = _Object$assign3.lineHeight,
        fontWeight = _Object$assign3.fontWeight;

    return fs({
      category: "body",
      level: key,
      lineHeight: lineHeight,
      fontWeight: fontWeight
    });
  }));
}, {});
var textSans = Object.keys(textSansSizes).reduce(function (acc, key) {
  return Object.assign({}, acc, _defineProperty({}, key, function (options) {
    var defaultOptions = {
      lineHeight: "loose",
      fontWeight: "regular"
    };

    var _Object$assign5 = Object.assign(defaultOptions, options),
        lineHeight = _Object$assign5.lineHeight,
        fontWeight = _Object$assign5.fontWeight;

    return fs({
      category: "textSans",
      level: key,
      lineHeight: lineHeight,
      fontWeight: fontWeight
    });
  }));
}, {});
Object.freeze(headlineSizes);
Object.freeze(bodySizes);
Object.freeze(textSansSizes);

exports.body = body;
exports.bodySizes = bodySizes;
exports.headline = headline;
exports.headlineSizes = headlineSizes;
exports.textSans = textSans;
exports.textSansSizes = textSansSizes;
