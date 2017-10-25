// define 'recipes' object
var recipes = {};

// returns a clone of 'object' by adding 'key' and 'value' (non-destructive)
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}
