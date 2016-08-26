angular.module("EventSquared").filter('categoryFilter', function() {
  return function(collection, category) {
    var newCollection = [];

    if(category && category.id) {
      for (var i = 0, len = collection.length; i < len; i++) {
        if(collection[i].categoryId === category.id) {
          newCollection.push(collection[i]);
        }
      }

      return newCollection;
    } else {
      return collection;
    }
  }
});
