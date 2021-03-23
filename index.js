
function updateObjectWithKeyAndValue(object, key, value) {
<<<<<<< HEAD
  return Object.assign({}, object, {[key]: value});
=======
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
>>>>>>> 4f75f9df319ce03c19ba4ab84b0a3f91eeba6125
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
<<<<<<< HEAD
  return delete newObj[key];
}
function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
=======
  delete newObj.key;
  return newObj;
>>>>>>> 4f75f9df319ce03c19ba4ab84b0a3f91eeba6125
}
