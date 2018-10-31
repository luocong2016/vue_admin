import { typeMap } from './constants';

const typeMap = {
  '[object Boolean]': 'boolean',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Function]': 'function',
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object RegExp]': 'regExp',
  '[object Undefined]': 'undefined',
  '[object Null]': 'null',
  '[object Object]': 'object'
};
const decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot': '"',
  '&amp': '&',
  '&#10': '\n',
  '&#9': '\t'
};
const { toString, hasOwnProperty } = Object.prototype;

export function isUndef(v) {
  return v === undefined || v === null;
}

export function isDef(v) {
  return v !== undefined && v !== null;
}

export function isTrue(v) {
  return v === true;
}

export function isFalse(v) {
  return v === false;
}

export function getType(v) {
  if (v instanceof Element) {
    return 'element';
  }

  return typeMap[toString.call(v)];
}

export function hasOwn (obj, key) {
  return hasOwnProperty .call(obj, key)
}
