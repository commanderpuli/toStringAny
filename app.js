var toStringAny = function (val) {
  switch (typeof val) {
    case "number":
      return val.toString();
      break;
    case "string":
      return val;
      break;
    case "object":
      return JSON.stringify(val);
      break;
    case "boolean":
      return val.toString();
      break;
    case "function":
      return val.toString();
      break;
    case "symbol":
      return val.toString();
      break;
    case "bigint":
      return val.toString();
      break;
    case "undefined":
      console.error("Type Is Undefined -- ToString");
      return val;
      break;
  }
};
module.exports.toStringAny = toStringAny;
