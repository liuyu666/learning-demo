// import Showdown from 'showdown';
const Showdown  = require('showdown');
const converter = new Showdown.converter();

const html = converter.makeHtml('##hello markdown!');
console.log(html);