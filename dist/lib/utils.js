"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectConstantsInto = injectConstantsInto;
exports.isInheritedOf = isInheritedOf;
exports.isClass = isClass;
function injectConstantsInto(clazz, constants) {
  if (!Array.isArray(clazz)) clazz = [clazz];
  Object.keys(constants).forEach(function (key) {
    clazz.forEach(function (cls) {
      Object.defineProperty(cls.prototype, key, {
        value: constants[key],
        writable: false,
        enumerable: false,
        configurable: false
      });
    });
  });
}

function isInheritedOf(What, Of) {
  while (What) {
    What = Object.getPrototypeOf(What);
    if (What === Of) return true;
  }
  return false;
}

function isClass(value) {
  return typeof value === "function" && value.prototype.constructor === value;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdXRpbHMuanMiXSwibmFtZXMiOlsiaW5qZWN0Q29uc3RhbnRzSW50byIsImlzSW5oZXJpdGVkT2YiLCJpc0NsYXNzIiwiY2xhenoiLCJjb25zdGFudHMiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImRlZmluZVByb3BlcnR5IiwiY2xzIiwicHJvdG90eXBlIiwidmFsdWUiLCJ3cml0YWJsZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJXaGF0IiwiT2YiLCJnZXRQcm90b3R5cGVPZiIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztRQUNnQkEsbUIsR0FBQUEsbUI7UUFjQUMsYSxHQUFBQSxhO1FBUUFDLE8sR0FBQUEsTztBQXRCVCxTQUFTRixtQkFBVCxDQUE2QkcsS0FBN0IsRUFBb0NDLFNBQXBDLEVBQStDO0FBQ3BELE1BQUksQ0FBQ0MsTUFBTUMsT0FBTixDQUFjSCxLQUFkLENBQUwsRUFBMkJBLFFBQVEsQ0FBRUEsS0FBRixDQUFSO0FBQzNCSSxTQUFPQyxJQUFQLENBQVlKLFNBQVosRUFBdUJLLE9BQXZCLENBQStCLFVBQUNDLEdBQUQsRUFBUztBQUN0Q1AsVUFBTU0sT0FBTixDQUFjLGVBQU87QUFDbkJGLGFBQU9JLGNBQVAsQ0FBc0JDLElBQUlDLFNBQTFCLEVBQXFDSCxHQUFyQyxFQUEwQztBQUN4Q0ksZUFBT1YsVUFBVU0sR0FBVixDQURpQztBQUV4Q0ssa0JBQVUsS0FGOEI7QUFHeENDLG9CQUFZLEtBSDRCO0FBSXhDQyxzQkFBYztBQUowQixPQUExQztBQU1ELEtBUEQ7QUFRRCxHQVREO0FBVUQ7O0FBRU0sU0FBU2hCLGFBQVQsQ0FBdUJpQixJQUF2QixFQUE2QkMsRUFBN0IsRUFBaUM7QUFDdEMsU0FBT0QsSUFBUCxFQUFhO0FBQ1hBLFdBQU9YLE9BQU9hLGNBQVAsQ0FBc0JGLElBQXRCLENBQVA7QUFDQSxRQUFJQSxTQUFTQyxFQUFiLEVBQWlCLE9BQU8sSUFBUDtBQUNsQjtBQUNELFNBQU8sS0FBUDtBQUNEOztBQUVNLFNBQVNqQixPQUFULENBQWlCWSxLQUFqQixFQUF3QjtBQUM3QixTQUFPLE9BQU9BLEtBQVAsS0FBaUIsVUFBakIsSUFBK0JBLE1BQU1ELFNBQU4sQ0FBZ0JRLFdBQWhCLEtBQWdDUCxLQUF0RTtBQUNEIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RDb25zdGFudHNJbnRvKGNsYXp6LCBjb25zdGFudHMpIHtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkoY2xhenopKSBjbGF6eiA9IFsgY2xhenogXVxyXG4gIE9iamVjdC5rZXlzKGNvbnN0YW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICBjbGF6ei5mb3JFYWNoKGNscyA9PiB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbHMucHJvdG90eXBlLCBrZXksIHtcclxuICAgICAgICB2YWx1ZTogY29uc3RhbnRzW2tleV0sXHJcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0luaGVyaXRlZE9mKFdoYXQsIE9mKSB7XHJcbiAgd2hpbGUgKFdoYXQpIHtcclxuICAgIFdoYXQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoV2hhdClcclxuICAgIGlmIChXaGF0ID09PSBPZikgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0NsYXNzKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiICYmIHZhbHVlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9PT0gdmFsdWVcclxufVxyXG4iXX0=