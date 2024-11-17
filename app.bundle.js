(function(){function r(s,l,u){function o(t,e){if(!l[t]){if(!s[t]){var a="function"==typeof require&&require
if(!e&&a)return a(t,!0)
if(f)return f(t,!0)
var i=new Error("Cannot find module '"+t+"'")
throw i.code="MODULE_NOT_FOUND",i}var n=l[t]={exports:{}}
s[t][0].call(n.exports,function(e){return o(s[t][1][e]||e)},n,n.exports,r,s,l,u)}return l[t].exports}for(var f="function"==typeof require&&require,e=0;e<u.length;e++)o(u[e])
return o}return r})()({1:[function(e,t,r){"use strict"
window.glov_build_version="1702144435110"
var a=false
function onLoad(){if(a)return
a=true
window.time_load_onload=Date.now()
e("../glov/client/bootstrap.js")
e("./main.js").main()
window.time_load_init=Date.now()}window.addEventListener("DOMContentLoaded",onLoad)
window.onload=onLoad},{"../glov/client/bootstrap.js":10,"./main.js":4}],2:[function(e,t,r){t.exports={font_size:8,imageW:128,imageH:128,spread:2,noFilter:1,channels:1,char_infos:[{c:32,xpad:4},{c:33,x0:92,y0:2,yoffs:1,xpad:1,w:1,h:5},{c:34,x0:42,y0:63,yoffs:1,xpad:1,w:3,h:2},{c:35,x0:98,y0:2,yoffs:1,xpad:1,w:5,h:5},{c:36,x0:38,y0:2,yoffs:1,xpad:1,w:4,h:6},{c:37,x0:108,y0:2,yoffs:1,xpad:1,w:5,h:5},{c:38,x0:118,y0:2,yoffs:1,xpad:1,w:5,h:5},{c:39,x0:50,y0:63,yoffs:1,xpad:1,w:1,h:2},{c:40,x0:2,y0:14,yoffs:1,xpad:1,w:2,h:5},{c:41,x0:9,y0:14,yoffs:1,xpad:1,w:2,h:5},{c:42,x0:2,y0:63,yoffs:1,xpad:1,w:3,h:3},{c:43,x0:10,y0:63,yoffs:2,xpad:1,w:3,h:3},{c:44,x0:56,y0:62,yoffs:5,xpad:1,w:2,h:2},{c:45,x0:87,y0:62,yoffs:3,xpad:1,w:3,h:1},{c:46,x0:95,y0:62,yoffs:5,xpad:1,w:1,h:1},{c:47,x0:16,y0:14,yoffs:1,xpad:1,w:5,h:5},{c:48,x0:26,y0:14,yoffs:1,xpad:1,w:4,h:5},{c:49,x0:35,y0:14,yoffs:1,xpad:1,w:2,h:5},{c:50,x0:42,y0:13,yoffs:1,xpad:1,w:4,h:5},{c:51,x0:51,y0:13,yoffs:1,xpad:1,w:4,h:5},{c:52,x0:60,y0:13,yoffs:1,xpad:1,w:4,h:5},{c:53,x0:69,y0:13,yoffs:1,xpad:1,w:4,h:5},{c:54,x0:78,y0:13,yoffs:1,xpad:1,w:4,h:5},{c:55,x0:87,y0:13,yoffs:1,xpad:1,w:4,h:5},{c:56,x0:96,y0:12,yoffs:1,xpad:1,w:4,h:5},{c:57,x0:105,y0:12,yoffs:1,xpad:1,w:4,h:5},{c:58,x0:18,y0:63,yoffs:2,xpad:1,w:1,h:3},{c:59,x0:117,y0:42,yoffs:2,xpad:1,w:1,h:4},{c:60,x0:114,y0:12,yoffs:1,xpad:1,w:3,h:5},{c:61,x0:24,y0:63,yoffs:2,xpad:1,w:3,h:3},{c:62,x0:122,y0:12,yoffs:1,xpad:1,w:3,h:5},{c:63,x0:2,y0:24,yoffs:1,xpad:1,w:4,h:5},{c:64,x0:11,y0:24,yoffs:1,xpad:1,w:5,h:5},{c:65,x0:21,y0:24,yoffs:1,xpad:1,w:4,h:5},{c:66,x0:30,y0:24,yoffs:1,xpad:1,w:4,h:5},{c:67,x0:39,y0:24,yoffs:1,xpad:1,w:3,h:5},{c:68,x0:47,y0:23,yoffs:1,xpad:1,w:4,h:5},{c:69,x0:56,y0:23,yoffs:1,xpad:1,w:3,h:5},{c:70,x0:64,y0:23,yoffs:1,xpad:1,w:3,h:5},{c:71,x0:72,y0:23,yoffs:1,xpad:1,w:4,h:5},{c:72,x0:81,y0:23,yoffs:1,xpad:1,w:4,h:5},{c:73,x0:90,y0:23,yoffs:1,xpad:1,w:3,h:5},{c:74,x0:98,y0:22,yoffs:1,xpad:1,w:4,h:5},{c:75,x0:107,y0:22,yoffs:1,xpad:1,w:4,h:5},{c:76,x0:116,y0:22,yoffs:1,xpad:1,w:3,h:5},{c:77,x0:2,y0:34,yoffs:1,xpad:1,w:5,h:5},{c:78,x0:12,y0:34,yoffs:1,xpad:1,w:4,h:5},{c:79,x0:26,y0:14,yoffs:1,xpad:1,w:4,h:5},{c:80,x0:21,y0:34,yoffs:1,xpad:1,w:4,h:5},{c:81,x0:47,y0:2,yoffs:1,xpad:1,w:4,h:6},{c:82,x0:30,y0:34,yoffs:1,xpad:1,w:4,h:5},{c:83,x0:39,y0:34,yoffs:1,xpad:1,w:4,h:5},{c:84,x0:48,y0:33,yoffs:1,xpad:1,w:3,h:5},{c:85,x0:56,y0:33,yoffs:1,xpad:1,w:4,h:5},{c:86,x0:65,y0:33,yoffs:1,xpad:1,w:4,h:5},{c:87,x0:74,y0:33,yoffs:1,xpad:1,w:5,h:5},{c:88,x0:84,y0:33,yoffs:1,xpad:1,w:4,h:5},{c:89,x0:93,y0:33,yoffs:1,xpad:1,w:4,h:5},{c:90,x0:102,y0:32,yoffs:1,xpad:1,w:3,h:5},{c:91,x0:110,y0:32,yoffs:1,xpad:1,w:2,h:5},{c:92,x0:117,y0:32,yoffs:1,xpad:1,w:5,h:5},{c:93,x0:2,y0:44,yoffs:1,xpad:1,w:2,h:5},{c:94,x0:63,y0:62,yoffs:1,xpad:1,w:3,h:2},{c:95,x0:101,y0:62,yoffs:5,xpad:1,w:4,h:1},{c:96,x0:71,y0:62,yoffs:1,xpad:1,w:2,h:2},{c:97,x0:2,y0:54,yoffs:2,xpad:1,w:4,h:4},{c:98,x0:9,y0:44,yoffs:1,xpad:1,w:4,h:5},{c:99,x0:11,y0:54,yoffs:2,xpad:1,w:3,h:4},{c:100,x0:18,y0:44,yoffs:1,xpad:1,w:4,h:5},{c:101,x0:19,y0:54,yoffs:2,xpad:1,w:4,h:4},{c:102,x0:27,y0:44,yoffs:1,xpad:1,w:3,h:5},{c:103,x0:56,y0:2,yoffs:2,xpad:1,w:4,h:6},{c:104,x0:35,y0:44,yoffs:1,xpad:1,w:4,h:5},{c:105,x0:44,y0:44,yoffs:1,xpad:1,w:1,h:5},{c:106,x0:2,y0:2,yoffs:1,xpad:1,w:2,h:7},{c:107,x0:50,y0:43,yoffs:1,xpad:1,w:4,h:5},{c:108,x0:59,y0:43,yoffs:1,xpad:1,w:1,h:5},{c:109,x0:28,y0:54,yoffs:2,xpad:1,w:5,h:4},{c:110,x0:38,y0:54,yoffs:2,xpad:1,w:4,h:4},{c:111,x0:47,y0:54,yoffs:2,xpad:1,w:4,h:4},{c:112,x0:65,y0:2,yoffs:2,xpad:1,w:4,h:6},{c:113,x0:74,y0:2,yoffs:2,xpad:1,w:4,h:6},{c:114,x0:56,y0:53,yoffs:2,xpad:1,w:3,h:4},{c:115,x0:64,y0:53,yoffs:2,xpad:1,w:4,h:4},{c:116,x0:65,y0:43,yoffs:1,xpad:1,w:3,h:5},{c:117,x0:73,y0:53,yoffs:2,xpad:1,w:4,h:4},{c:118,x0:82,y0:53,yoffs:2,xpad:1,w:4,h:4},{c:119,x0:91,y0:53,yoffs:2,xpad:1,w:5,h:4},{c:120,x0:101,y0:53,yoffs:2,xpad:1,w:3,h:4},{c:121,x0:83,y0:2,yoffs:2,xpad:1,w:4,h:6},{c:122,x0:109,y0:52,yoffs:2,xpad:1,w:4,h:4},{c:123,x0:73,y0:43,yoffs:1,xpad:1,w:3,h:5},{c:124,x0:59,y0:43,yoffs:1,xpad:1,w:1,h:5},{c:125,x0:81,y0:43,yoffs:1,xpad:1,w:3,h:5},{c:126,x0:78,y0:62,yoffs:1,xpad:1,w:4,h:2},{c:160,xpad:4},{c:181,x0:89,y0:43,yoffs:2,xpad:1,w:4,h:5},{c:916,x0:118,y0:51,yoffs:2,xpad:1,w:5,h:4},{c:9654,x0:98,y0:43,yoffs:1,xpad:1,w:4,h:5},{c:9660,x0:32,y0:63,yoffs:2,xpad:1,w:5,h:3},{c:9742,x0:9,y0:2,yoffs:1,xpad:1,w:10,h:7},{c:9743,x0:24,y0:2,yoffs:1,xpad:1,w:9,h:7},{c:65533,x0:107,y0:42,yoffs:2,xpad:1,w:5,h:5}]}},{}],3:[function(e,t,r){t.exports={font_size:16,imageW:512,imageH:256,spread:4,noFilter:1,channels:1,char_infos:[{c:1,x0:85,y0:49,yoffs:2,w:8,h:10},{c:2,x0:102,y0:49,yoffs:2,w:8,h:10},{c:3,x0:296,y0:106,yoffs:4,xpad:1,w:7,h:8},{c:4,x0:101,y0:126,yoffs:4,xpad:1,w:7,h:7},{c:5,x0:400,y0:85,yoffs:3,w:8,h:9},{c:6,x0:417,y0:84,yoffs:3,w:8,h:9},{c:7,x0:242,y0:140,yoffs:6,xpad:2,w:6,h:4},{c:8,x0:4,y0:4,w:8,h:16},{c:9,x0:499,y0:119,yoffs:5,xpad:1,w:7,h:6},{c:10,x0:21,y0:4,w:8,h:16},{c:11,x0:119,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:12,x0:135,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:13,x0:151,y0:49,yoffs:2,w:8,h:10},{c:14,x0:82,y0:29,yoffs:2,w:8,h:11},{c:15,x0:434,y0:84,yoffs:3,w:8,h:9},{c:16,x0:99,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:17,x0:115,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:18,x0:451,y0:84,yoffs:2,xpad:1,w:7,h:9},{c:19,x0:168,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:20,x0:184,y0:49,yoffs:2,w:8,h:10},{c:21,x0:478,y0:4,yoffs:1,xpad:1,w:7,h:12},{c:22,x0:257,y0:140,yoffs:8,xpad:1,w:7,h:4},{c:23,x0:201,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:24,x0:217,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:25,x0:233,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:26,x0:64,y0:143,yoffs:5,xpad:1,w:7,h:5},{c:27,x0:80,y0:143,yoffs:5,xpad:1,w:7,h:5},{c:28,x0:273,y0:140,yoffs:6,xpad:1,w:7,h:4},{c:29,x0:96,y0:143,yoffs:5,xpad:1,w:7,h:5},{c:30,x0:117,y0:124,yoffs:4,xpad:1,w:7,h:7},{c:31,x0:133,y0:124,yoffs:4,xpad:1,w:7,h:7},{c:32,xpad:8},{c:33,x0:249,y0:49,yoffs:2,xpad:2,w:6,h:10},{c:34,x0:289,y0:140,yoffs:1,xpad:1,w:7,h:4},{c:35,x0:467,y0:84,yoffs:3,xpad:1,w:7,h:9},{c:36,x0:364,y0:4,xpad:1,w:7,h:14},{c:37,x0:312,y0:106,yoffs:4,xpad:1,w:7,h:8},{c:38,x0:264,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:39,x0:305,y0:140,yoffs:1,xpad:4,w:4,h:4},{c:40,x0:280,y0:49,yoffs:2,xpad:2,w:6,h:10},{c:41,x0:295,y0:49,yoffs:2,xpad:2,w:6,h:10},{c:42,x0:112,y0:142,yoffs:5,w:8,h:5},{c:43,x0:129,y0:140,yoffs:5,xpad:1,w:7,h:5},{c:44,x0:318,y0:139,yoffs:9,xpad:3,w:5,h:4},{c:45,x0:454,y0:135,yoffs:7,xpad:1,w:7,h:1},{c:46,x0:410,y0:139,yoffs:10,xpad:3,w:5,h:2},{c:47,x0:328,y0:106,yoffs:4,xpad:1,w:7,h:8},{c:48,x0:310,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:49,x0:326,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:50,x0:342,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:51,x0:358,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:52,x0:374,y0:47,yoffs:2,xpad:1,w:7,h:10},{c:53,x0:390,y0:47,yoffs:2,xpad:1,w:7,h:10},{c:54,x0:406,y0:46,yoffs:2,xpad:1,w:7,h:10},{c:55,x0:422,y0:46,yoffs:2,xpad:1,w:7,h:10},{c:56,x0:438,y0:46,yoffs:2,xpad:1,w:7,h:10},{c:57,x0:454,y0:46,yoffs:2,xpad:1,w:7,h:10},{c:58,x0:149,y0:124,yoffs:4,xpad:3,w:5,h:7},{c:59,x0:344,y0:106,yoffs:4,xpad:3,w:5,h:8},{c:60,x0:483,y0:84,yoffs:3,xpad:1,w:7,h:9},{c:61,x0:332,y0:139,yoffs:5,xpad:1,w:7,h:4},{c:62,x0:499,y0:83,yoffs:3,xpad:1,w:7,h:9},{c:63,x0:470,y0:46,yoffs:2,xpad:1,w:7,h:10},{c:64,x0:4,y0:108,yoffs:3,xpad:1,w:7,h:9},{c:65,x0:486,y0:45,yoffs:2,xpad:1,w:7,h:10},{c:66,x0:4,y0:70,yoffs:2,xpad:1,w:7,h:10},{c:67,x0:20,y0:70,yoffs:2,xpad:1,w:7,h:10},{c:68,x0:36,y0:70,yoffs:2,xpad:1,w:7,h:10},{c:69,x0:52,y0:70,yoffs:2,xpad:1,w:7,h:10},{c:70,x0:68,y0:70,yoffs:2,xpad:1,w:7,h:10},{c:71,x0:84,y0:70,yoffs:2,xpad:1,w:7,h:10},{c:72,x0:100,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:73,x0:116,y0:68,yoffs:2,xpad:2,w:6,h:10},{c:74,x0:131,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:75,x0:147,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:76,x0:163,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:77,x0:179,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:78,x0:195,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:79,x0:211,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:80,x0:227,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:81,x0:494,y0:4,yoffs:2,xpad:1,w:7,h:12},{c:82,x0:243,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:83,x0:259,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:84,x0:275,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:85,x0:291,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:86,x0:307,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:87,x0:323,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:88,x0:339,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:89,x0:355,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:90,x0:371,y0:68,yoffs:2,xpad:1,w:7,h:10},{c:91,x0:387,y0:66,yoffs:2,xpad:2,w:6,h:10},{c:92,x0:20,y0:108,yoffs:3,xpad:1,w:7,h:9},{c:93,x0:402,y0:66,yoffs:2,xpad:2,w:6,h:10},{c:94,x0:348,y0:139,xpad:1,w:7,h:4},{c:95,x0:470,y0:135,yoffs:13,w:8,h:1},{c:96,x0:379,y0:139,xpad:3,w:5,h:3},{c:97,x0:163,y0:124,yoffs:5,xpad:1,w:7,h:7},{c:98,x0:417,y0:65,yoffs:2,xpad:1,w:7,h:10},{c:99,x0:179,y0:124,yoffs:5,xpad:1,w:7,h:7},{c:100,x0:433,y0:65,yoffs:2,xpad:1,w:7,h:10},{c:101,x0:195,y0:124,yoffs:5,xpad:1,w:7,h:7},{c:102,x0:449,y0:65,yoffs:2,xpad:2,w:6,h:10},{c:103,x0:464,y0:65,yoffs:5,xpad:1,w:7,h:10},{c:104,x0:480,y0:65,yoffs:2,xpad:1,w:7,h:10},{c:105,x0:496,y0:64,yoffs:2,xpad:2,w:6,h:10},{c:106,x0:397,y0:4,yoffs:2,xpad:1,w:7,h:13},{c:107,x0:4,y0:89,yoffs:2,xpad:1,w:7,h:10},{c:108,x0:20,y0:89,yoffs:2,xpad:2,w:6,h:10},{c:109,x0:211,y0:124,yoffs:5,xpad:1,w:7,h:7},{c:110,x0:227,y0:124,yoffs:5,xpad:1,w:7,h:7},{c:111,x0:243,y0:124,yoffs:5,xpad:1,w:7,h:7},{c:112,x0:35,y0:89,yoffs:5,xpad:1,w:7,h:10},{c:113,x0:51,y0:89,yoffs:5,xpad:1,w:7,h:10},{c:114,x0:259,y0:124,yoffs:5,xpad:1,w:7,h:7},{c:115,x0:275,y0:124,yoffs:5,xpad:1,w:7,h:7},{c:116,x0:67,y0:89,yoffs:2,xpad:1,w:7,h:10},{c:117,x0:291,y0:124,yoffs:5,xpad:1,w:7,h:7},{c:118,x0:307,y0:123,yoffs:5,xpad:1,w:7,h:7},{c:119,x0:323,y0:123,yoffs:5,xpad:1,w:7,h:7},{c:120,x0:339,y0:123,yoffs:5,xpad:1,w:7,h:7},{c:121,x0:83,y0:89,yoffs:5,xpad:1,w:7,h:10},{c:122,x0:355,y0:123,yoffs:5,xpad:1,w:7,h:7},{c:123,x0:99,y0:89,yoffs:2,xpad:1,w:7,h:10},{c:124,x0:115,y0:87,yoffs:2,xpad:3,w:5,h:10},{c:125,x0:129,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:126,x0:424,y0:136,yoffs:2,xpad:1,w:7,h:2},{c:127,x0:371,y0:123,yoffs:4,xpad:1,w:7,h:7},{c:160,xpad:8},{c:161,x0:145,y0:87,yoffs:2,xpad:2,w:6,h:10},{c:162,x0:131,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:163,x0:147,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:165,x0:160,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:167,x0:478,y0:4,yoffs:1,xpad:1,w:7,h:12},{c:170,x0:4,y0:143,yoffs:1,xpad:1,w:7,h:6},{c:171,x0:145,y0:140,yoffs:5,xpad:1,w:7,h:5},{c:172,x0:161,y0:140,yoffs:6,xpad:1,w:7,h:5},{c:176,x0:364,y0:139,yoffs:1,xpad:2,w:6,h:4},{c:177,x0:358,y0:106,yoffs:4,w:8,h:8},{c:178,x0:20,y0:143,yoffs:1,xpad:3,w:5,h:6},{c:181,x0:36,y0:108,yoffs:4,xpad:1,w:7,h:9},{c:182,x0:184,y0:49,yoffs:2,w:8,h:10},{c:183,x0:487,y0:135,yoffs:8,xpad:3,w:5,h:1},{c:186,x0:34,y0:143,yoffs:1,xpad:2,w:6,h:6},{c:187,x0:177,y0:140,yoffs:5,xpad:1,w:7,h:5},{c:188,x0:413,y0:4,yoffs:1,xpad:1,w:7,h:13},{c:189,x0:429,y0:4,yoffs:1,xpad:1,w:7,h:13},{c:191,x0:176,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:196,x0:163,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:197,x0:4,y0:29,xpad:1,w:7,h:12},{c:198,x0:192,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:199,x0:20,y0:29,yoffs:2,xpad:1,w:7,h:12},{c:201,x0:36,y0:29,xpad:1,w:7,h:12},{c:209,x0:52,y0:29,xpad:1,w:7,h:12},{c:214,x0:179,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:220,x0:195,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:223,x0:208,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:224,x0:211,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:225,x0:227,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:226,x0:243,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:228,x0:224,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:229,x0:259,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:230,x0:387,y0:123,yoffs:5,xpad:1,w:7,h:7},{c:231,x0:52,y0:108,yoffs:4,xpad:1,w:7,h:9},{c:232,x0:275,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:233,x0:291,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:234,x0:307,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:235,x0:240,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:236,x0:323,y0:29,yoffs:1,xpad:2,w:6,h:11},{c:237,x0:338,y0:29,yoffs:1,xpad:2,w:6,h:11},{c:238,x0:353,y0:29,yoffs:1,xpad:1,w:7,h:11},{c:239,x0:256,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:241,x0:272,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:242,x0:369,y0:27,yoffs:1,xpad:1,w:7,h:11},{c:243,x0:385,y0:27,yoffs:1,xpad:1,w:7,h:11},{c:244,x0:401,y0:26,yoffs:1,xpad:1,w:7,h:11},{c:246,x0:288,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:247,x0:403,y0:123,yoffs:4,xpad:1,w:7,h:7},{c:249,x0:417,y0:26,yoffs:1,xpad:1,w:7,h:11},{c:250,x0:433,y0:26,yoffs:1,xpad:1,w:7,h:11},{c:251,x0:449,y0:26,yoffs:1,xpad:1,w:7,h:11},{c:252,x0:304,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:255,x0:445,y0:4,yoffs:2,xpad:1,w:7,h:13},{c:402,x0:461,y0:4,yoffs:1,w:8,h:13},{c:915,x0:320,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:920,x0:68,y0:108,yoffs:3,xpad:1,w:7,h:9},{c:931,x0:84,y0:108,yoffs:3,xpad:1,w:7,h:9},{c:934,x0:100,y0:108,yoffs:3,xpad:1,w:7,h:9},{c:937,x0:336,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:945,x0:419,y0:120,yoffs:5,xpad:1,w:7,h:7},{c:948,x0:352,y0:87,yoffs:2,xpad:1,w:7,h:10},{c:949,x0:368,y0:87,yoffs:2,xpad:2,w:6,h:10},{c:960,x0:375,y0:106,yoffs:4,xpad:1,w:7,h:8},{c:963,x0:435,y0:119,yoffs:5,xpad:1,w:7,h:7},{c:964,x0:391,y0:106,yoffs:4,xpad:1,w:7,h:8},{c:966,x0:116,y0:106,yoffs:3,w:8,h:9},{c:8319,x0:49,y0:143,yoffs:1,xpad:2,w:6,h:6},{c:8359,x0:465,y0:26,yoffs:1,xpad:1,w:7,h:11},{c:8592,x0:80,y0:143,yoffs:5,xpad:1,w:7,h:5},{c:8593,x0:217,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:8594,x0:64,y0:143,yoffs:5,xpad:1,w:7,h:5},{c:8595,x0:233,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:8596,x0:96,y0:143,yoffs:5,xpad:1,w:7,h:5},{c:8597,x0:451,y0:84,yoffs:2,xpad:1,w:7,h:9},{c:8616,x0:201,y0:49,yoffs:2,xpad:1,w:7,h:10},{c:8729,x0:440,y0:135,yoffs:7,xpad:3,w:5,h:2},{c:8730,x0:481,y0:25,yoffs:1,w:8,h:11},{c:8734,x0:193,y0:140,yoffs:5,w:8,h:5},{c:8735,x0:273,y0:140,yoffs:6,xpad:1,w:7,h:4},{c:8745,x0:133,y0:106,yoffs:3,xpad:1,w:7,h:9},{c:8776,x0:210,y0:140,yoffs:5,xpad:1,w:7,h:5},{c:8801,x0:451,y0:119,yoffs:4,xpad:1,w:7,h:7},{c:8804,x0:149,y0:106,yoffs:3,xpad:1,w:7,h:9},{c:8805,x0:165,y0:106,yoffs:3,xpad:1,w:7,h:9},{c:8962,x0:371,y0:123,yoffs:4,xpad:1,w:7,h:7},{c:8976,x0:226,y0:140,yoffs:6,xpad:1,w:7,h:5},{c:8992,x0:380,y0:4,yoffs:2,w:8,h:14},{c:8993,x0:68,y0:29,xpad:3,w:5,h:12},{c:9472,x0:4,y0:158,yoffs:7,w:8,h:1},{c:9474,x0:38,y0:4,xpad:3,w:5,h:16},{c:9484,x0:181,y0:106,yoffs:7,w:8,h:9},{c:9488,x0:198,y0:106,yoffs:7,xpad:3,w:5,h:9},{c:9492,x0:407,y0:103,w:8,h:8},{c:9496,x0:424,y0:102,xpad:3,w:5,h:8},{c:9500,x0:52,y0:4,w:8,h:16},{c:9508,x0:69,y0:4,xpad:3,w:5,h:16},{c:9516,x0:212,y0:106,yoffs:7,w:8,h:9},{c:9524,x0:438,y0:102,w:8,h:8},{c:9532,x0:83,y0:4,w:8,h:16},{c:9552,x0:393,y0:139,yoffs:5,w:8,h:3},{c:9553,x0:100,y0:4,xpad:1,w:7,h:16},{c:9554,x0:498,y0:25,yoffs:5,w:8,h:11},{c:9555,x0:229,y0:106,yoffs:7,w:8,h:9},{c:9556,x0:4,y0:50,yoffs:5,w:8,h:11},{c:9557,x0:21,y0:50,yoffs:5,xpad:3,w:5,h:11},{c:9558,x0:246,y0:106,yoffs:7,xpad:1,w:7,h:9},{c:9559,x0:35,y0:50,yoffs:5,xpad:1,w:7,h:11},{c:9560,x0:455,y0:102,w:8,h:8},{c:9561,x0:472,y0:102,w:8,h:8},{c:9562,x0:489,y0:102,w:8,h:8},{c:9563,x0:4,y0:126,xpad:3,w:5,h:8},{c:9564,x0:18,y0:126,xpad:1,w:7,h:8},{c:9565,x0:34,y0:126,xpad:1,w:7,h:8},{c:9566,x0:116,y0:4,w:8,h:16},{c:9567,x0:133,y0:4,w:8,h:16},{c:9568,x0:150,y0:4,w:8,h:16},{c:9569,x0:167,y0:4,xpad:3,w:5,h:16},{c:9570,x0:181,y0:4,xpad:1,w:7,h:16},{c:9571,x0:197,y0:4,xpad:1,w:7,h:16},{c:9572,x0:51,y0:50,yoffs:5,w:8,h:11},{c:9573,x0:262,y0:106,yoffs:7,w:8,h:9},{c:9574,x0:68,y0:50,yoffs:5,w:8,h:11},{c:9575,x0:50,y0:126,w:8,h:8},{c:9576,x0:67,y0:126,w:8,h:8},{c:9577,x0:84,y0:126,w:8,h:8},{c:9578,x0:213,y0:4,w:8,h:16},{c:9579,x0:230,y0:4,w:8,h:16},{c:9580,x0:247,y0:4,w:8,h:16},{c:9600,x0:467,y0:119,w:8,h:7},{c:9604,x0:279,y0:106,yoffs:7,w:8,h:9},{c:9608,x0:264,y0:4,w:8,h:16},{c:9612,x0:281,y0:4,xpad:4,w:4,h:16},{c:9616,x0:294,y0:4,w:8,h:16},{c:9617,x0:311,y0:4,w:8,h:16},{c:9618,x0:328,y0:4,xpad:1,w:9,h:16},{c:9619,x0:346,y0:4,xpad:1,w:9,h:16},{c:9632,x0:484,y0:119,yoffs:4,xpad:2,w:6,h:7},{c:65533,x0:383,y0:87,yoffs:3,xpad:1,w:8,h:10}]}},{}],4:[function(t,e,r){"use strict"
r.game_width=r.game_height=r.TILE_SIZE=r.TICK_TIME=r.RESOURCE_FRAMES=r.MENU_BUTTON_W=r.MENU_BUTTON_H=void 0
r.main=main
r.sprites=void 0
var a,i,n,o,s,l,u,f,c,d,v,p,h,_,m,g,y,w
function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a))e[a]=r[a]}return e}).apply(this,arguments)}var b=t("../glov/client/local_storage.js")
b.setStoragePrefix("jsjam22");(0,t("../glov/common/platform.js").platformRegister)("itch",{devmode:"auto",reload:true,reload_updates:true})
var x=628
r.game_width=x
var S=384
r.game_height=S
var E=96
r.MENU_BUTTON_W=E
var T=22
r.MENU_BUTTON_H=T
var te=16
r.TILE_SIZE=te
var k=1
var C=2
var I=3
var P=4
var A=5
var R=6
var F=7
var D=8
var N=9
var O=10
var L=100
var re=((a={})[k]=9,a[R]=12,a[F]=13,a[P]=19,a[I]=20,a[A]=21,a[N]=22,a[C]=27,a[O]=28,a[L]=29,a[D]=30,a)
r.RESOURCE_FRAMES=re
var ae=1e3
r.TICK_TIME=ae
var U=t("assert")
var ie=t("../glov/client/camera2d.js")
var ne=t("../glov/client/engine.js")
var M=t("../glov/client/font.js"),j=M.style,B=M.styleAlpha
var oe=t("../glov/client/input.js")
var se=oe.KEYS
var le=Math.abs,ue=Math.floor,G=Math.max,z=Math.min,fe=Math.sin,ce=Math.random,de=Math.round,ve=Math.PI
var H=t("../glov/client/net.js")
var V=t("./particle_data.js")
var W=t("../glov/client/particles.js").preloadParticleData
var pe=t("../glov/client/pico8.js")
var q=t("../glov/common/rand_alea.js"),Y=q.mashString,K=q.randCreate
var J=t("../glov/client/scroll_area.js").scrollAreaCreate
var X=t("../glov/client/settings.js")
var Q=t("../glov/client/sound.js").soundPlayMusic
var $=t("../glov/client/sprites.js").createSprite
var ee=t("../glov/client/sprite_sets.js").spriteSetGet
var he=t("../glov/client/sprite_animation.js").createSpriteAnimation
var _e=t("../glov/client/transition.js")
var me=t("./transitioner.js").createTransitioner
var ge=t("../glov/client/ui.js")
var ye=t("../glov/common/util.js"),we=ye.clamp,be=ye.clone,xe=ye.lerp,Se=ye.easeInOut,Ee=(ye.easeIn,ye.easeOut),Te=ye.ridx
var Ae=t("../glov/common/vmath.js"),Re=Ae.vec2,ke=Ae.vec4,Ce=Ae.v4copy,Ie=Ae.v4set
var Pe=t("./main2"),Fe=Pe.main2init,De=Pe.setScore,Ne=Pe.stateHighScoresInternal,Oe=Pe.timeFormat,Le=Pe.updateHighScores
window.Z=window.Z||{}
Z.BACKGROUND=1
Z.BOARD=10
Z.WORKERS=20
Z.HELP=40
Z.UI=100
Z.PARTICLES=150
Z.FLOATERS=200
var Ue
var Me
var je=true
var Be=0
var Ge=1
var ze=5
var He=Ge
var Ve=ne.defines.PAUSE
var We={}
r.sprites=We
var qe
var Ye=ne.DEBUG&&false
var Ke=1
var Ze=8
var Je="test5"
var Xe=0
var Qe=1
var $e=2
var et=3
var tt=4
var rt=5
var at=6
var it=[{idle:{frames:[2,10],times:[500,500],times_random:[100,100]}},{idle:{frames:[3,11],times:[500,500],times_random:[400,400]}}]
var nt={idle:{frames:[5,6],times:[1e3,200],times_random:[5e3,100]}}
var ot={water:{frames:[48,49,50,51,52,53,54,55],times:250,times_random:100},wood:{frames:[56,57,58,59,60,61,62,63],times:250,times_random:100},metal:{frames:[36,37,38,39,44,45,46,47],times:[500,100,100,100,500,100,100,100],times_random:[500,0,0,0,500,0,0,0]}}
var st=((i={})[rt]=true,i)
var lt=((n={})[$e]=true,n[et]=true,n[rt]=true,n)
var ut=((o={})[Xe]=true,o[Qe]=true,o)
var ft=((s={})[rt]=2,s)
var ct=((l={})[$e]=true,l[et]=true,l[rt]=true,l)
var dt
var vt
var pt=ke(1,1,1,.8)
var ht=ke(1,1,1,.4)
var _t=ke(1,0,0,.5)
var mt=ge.makeColorSet([1,.5,1,1])
var gt=[1,0,-1,0]
var yt=[0,1,0,-1]
var wt=[[3,0],[0,3],[-3,0],[0,-3]]
var bt=[0,0,1,1]
var xt=[0,1,1,0]
function patternLoop(){var e=dt.range(2)
var t=e?6:4
var r=e?4:6
if(t>4&&r>4)if(dt.range(2))t=4
else r=4
var a=[]
for(var i=0;i<r;++i){var n=[]
for(var o=0;o<t;++o)if(!o||!i||o===t-1||i===r-1)n.push(1)
else n.push(0)
a.push(n)}a.w=t
a.h=r
return a}function patternBend(){var e=4+dt.range(3)
var t=4+dt.range(3)
if(e>4&&t>4)if(dt.range(2))e=4
else t=4
var r=dt.range(2)*(e-1)
var a=dt.range(2)*(t-1)
var i=[]
for(var n=0;n<t;++n){var o=[]
for(var s=0;s<e;++s)if(s===r||n===a)o.push(1)
else o.push(0)
i.push(o)}i.w=e
i.h=t
return i}var St=300
var Et=66
var Tt=750
function gameStateAddPattern(e,t,r,a){var i=e.board,n=e.workers,o=e.w
var s=[]
var l
for(var u=0;u<t.length;++u){var f=t[u]
for(var c=0;c<f.length;++c)if(f[c]){var d=[r+c,a+u]
if(!l)l=d
var v=i[a+u][r+c]
U(v.type===Xe||v.type===Qe)
v.type=tt
s.push(d)}}var p=St
var h={}
var _=[]
function fillRoad(e,t){var r=e+t*o
if(h[r])return
h[r]=true
var a=[e,t]
_.push(a)}fillRoad(l[0],l[1])
while(_.length){var m=_.pop()
r=m[0]
i[a=m[1]][r].road_fade=p
p+=Et
for(var g=0;g<gt.length;++g){var y
var w=r+gt[g]
var b=a+yt[g]
var x=null==(y=i[b])?void 0:y[w]
if(!x)continue
if(x.type===tt)fillRoad(w,b)}}var S=s[dt.range(s.length)]
n.push({x:S[0],y:S[1],dir:dt.range(4),worker_fade:Tt});++e.num_roads}function gameStateAddFirstLoop(e){var t=e.w,r=e.h,a=e.board
var i=patternLoop()
gameStateAddPattern(e,i,ue((t-i.w)/2),ue((r-i.h)/2))
var n={}
for(var o=0;o<a.length;++o){var s=a[o]
for(var l=0;l<s.length;++l)if(s[l].type===tt)for(var u=0;u<gt.length;++u){var f=l+gt[u]
var c=o+yt[u]
if(a[c][f].type===Xe||a[c][f].type===Qe)n[f+"_"+c]=[f,c]}}var d=Object.keys(n)
var v=n[d[dt.range(d.length)]]
a[v[1]][v[0]].type=et}var At=5
function gameStateCreate(e){var t
dt=K(Y(e))
var r=[]
var a=30
var i=24
for(var n=0;n<i;++n){var o=[]
for(var s=0;s<a;++s)o.push({x:s,y:n,type:Xe})
r.push(o)}for(var l=0;l<30;++l){var u=dt.range(a)
var f=r[dt.range(i)][u]
f.type=Qe
f.variation=dt.range(2)}var c={w:a,h:i,board:r,workers:[],tick_countdown:ae,num_ticks:0,resources:((t={})[P]=1,t),ever_output:{},ver:At,num_roads:0}
gameStateAddFirstLoop(c)
return c}function randomRoadPattern(e){if(1&e)return patternBend()
else return patternLoop()}function boardIsRoadDelta(e,t,r,a){t+=a[0]
r+=a[1]
if(t<0||t>=e[0].length||r<0||r>=e.length)return false
return e[r][t].type===tt}var Rt=1
var kt=[[-2,-1],[-2,0],[-2,1],[-1,-2],[-1,-1],[-1,0],[-1,1],[-1,2],[0,-2],[0,-1],[0,0],[0,1],[0,2],[1,-2],[1,-1],[1,0],[1,1],[1,2],[2,-1],[2,0],[2,1]]
function patternFits(e,t,r,a){var i=e.w,n=e.h,o=e.board
var s=t.w,l=t.h
if(r<Rt||a<Rt||r+s>i-Rt||a+l>n-Rt)return false
var u=0
for(var f=0;f<l;++f){var c=t[f]
var d=a+f
for(var v=0;v<s;++v)if(c[v]){var p=r+v
for(var h=0;h<kt.length;++h)if(boardIsRoadDelta(o,p,d,kt[h]))return false
for(var _=0;_<gt.length;++_)if(boardIsRoadDelta(o,p,d,wt[_])){u++
break}}}if(u<3)return false
return true}function gameStateAddRoad(e){var t=e.w,r=e.h,a=e.num_roads
for(var i=0;i<1e4;++i){var n=randomRoadPattern(a)
var o=dt.range(4)
var s=0===o?1:2===o?t-n.w-1:1+dt.range(t-n.w-2)
var l=1===o?1:3===o?r-n.h-1:1+dt.range(r-n.h-2)
var u=G(t,r)/2
for(var f=0;f<u;++f){if(patternFits(e,n,s,l)){gameStateAddPattern(e,n,s,l)
return}s+=gt[o]
l+=yt[o]}}ge.modalDialog({title:"Error",text:"Could not find any valid road placement",buttons:{OK:null}})}var Ct=[0,1,3,2]
function gameToJson(e){var t=be(e)
var r=t.board,a=t.workers,i=t.cursor
for(var n=0;n<r.length;++n){var o=r[n]
for(var s=0;s<o.length;++s)delete o[s].anim}for(var l=0;l<a.length;++l)delete a[l].anim
if(i)delete i.cell.anim
t.seed=dt.exportState()
return t}function saveGame(){b.setJSON("state",gameToJson(vt))}function hasSaveGame(){var e=b.getJSON("state")
return e&&e.ver===At}function loadGame(){var e=b.getJSON("state")
if(e&&e.ver===At)if((vt=e).seed)dt.importState(vt.seed)}function gameStateAddProgress(e){var f={}
var t=[]
var c=e.board,d=e.w,r=e.workers
function findRoad(e,t){var i=[]
var n=[]
function push(e,t){var r=e+t*d
if(f[r])return
var a=[e,t];(f[r]=i).push(a)
n.push(a)}push(e,t)
while(n.length){var r=n.pop()
e=r[0]
t=r[1]
for(var a=0;a<gt.length;++a){var o
var s=e+gt[a]
var l=t+yt[a]
var u=null==(o=c[l])?void 0:o[s]
if(!u)continue
if(u.type===tt)push(s,l)}}return i}for(var a=0;a<c.length;++a){var i=c[a]
for(var n=0;n<i.length;++n){var o=i[n]
if(f[n+a*d])continue
if(o.type===tt){var s=findRoad(n,a)
t.push(s)}}}for(var l=0;l<r.length;++l){var u=r[l]
var v=u.x,p=u.y
var h=f[v+p*d]
h.num_workers=(h.num_workers||0)+1
h.last_worker=u}var _=t.filter(function(e){return!(e.num_workers>1)})
if(_.length){var m=_[dt.range(_.length)].last_worker
var g=m.x,y=m.y,w=m.dir
for(var b=0;b<gt.length;++b){var x=g+gt[b]
var S=y+yt[b]
if(f[x+S*d]){for(var E=0;E<Ct.length;++E){var T=(w+Ct[E])%4
var A=g+gt[T]
var R=y+yt[T]
if(c[R][A].type===tt){if(A===x&&R===S)r.push({x:x,y:S,dir:(T+2)%4,worker_fade:Tt})
else r.push({x:x,y:S,dir:b,worker_fade:Tt})
break}}break}}}else gameStateAddRoad(e)
ge.playUISound("progress")
if(!ne.DEBUG)saveGame()}var It
function crazy(){if(!It&&window.CrazyGames){(It=window.CrazyGames.CrazySDK.getInstance()).init()
It.addEventListener("bannerRendered",function(e){console.log("Banner for container "+e.containerId+" has been\n        rendered!")})
It.addEventListener("bannerError",function(e){console.log("Banner render error: "+e.error)})}return It}function init(){crazy()
We.tiles=$({name:"tiles",ws:[te,te,te,te,te,te,te,te],hs:[te,te,te,te,te,te,te,te],size:Re(te,te)})
We.tiles_centered=$({name:"tiles",ws:[te,te,te,te,te,te,te,te],hs:[te,te,te,te,te,te,te,te],size:Re(te,te),origin:Re(.5,.5)})
We.tiles_2x=$({name:"tiles",ws:[te,te,te,te],hs:[te,te,te,te],size:Re(2*te,2*te)})
We.tiles_ui=$({name:"tiles_ui",ws:[te,te,te,te],hs:[te,te,te,te],size:Re(te,te)})
We.tiles_ui_centered=$({name:"tiles_ui",ws:[te,te,te,te],hs:[te,te,te,te],size:Re(te,te),origin:Re(.5,.5)})
We.title_text=$({name:"title_text"})
W(V)
Fe()
vt=gameStateCreate(Je)}function typeAt(e,t){var r
var a=null==(r=vt.board[t])?void 0:r[e]
return a&&a.type||Xe}function getCellFrame(e,t,r,a){var i=2===ft[e.type]?We.tiles_2x:We.tiles
var n=null
switch(e.type){case at:n=5
break
case tt:n=32
if(e.x){var o=typeAt(e.x,e.y-1)===tt
var s=typeAt(e.x,e.y+1)===tt
var l=typeAt(e.x-1,e.y)===tt
var u=typeAt(e.x+1,e.y)===tt
if(l&&s)n=34
else if(o&&u)n=41
else if(u&&s)n=33
else if(o&&l)n=42
else if(s&&o)n=40
else if(l&&u)n=32
else if(s)n=35
else if(o)n=43
else if(u)n=14
else if(l)n=15}break
case Qe:if(!e.anim){e.anim=he(it[e.variation])
e.anim.setState("idle")
e.anim.update(ue(1e3*ce()))}n=e.anim.getFrame(ne.frame_dt)
break
case $e:switch(e.resource){case k:if(!e.anim){e.anim=he(ot)
e.anim.setState("wood")
e.anim.update(ue(1e3*ce()))}n=e.anim.getFrame(ne.frame_dt)
break
case P:if(!e.anim){e.anim=he(ot)
e.anim.setState("water")
e.anim.update(ue(1e3*ce()))}n=e.anim.getFrame(ne.frame_dt)
break
case C:if(!e.anim){e.anim=he(ot)
e.anim.setState("metal")
e.anim.update(ue(1e3*ce()))}n=e.anim.getFrame(ne.frame_dt)
break
default:U(0)}break
case et:n=4
break
case rt:n=4
var f=e.input0,c=e.input1,d=e.output,v=e.rot
v=v||0
var p=[f,c,null,d]
for(var h=0;h<4;++h){var _=p[(h+4-v)%4]
if(null!==_)We.tiles.draw({x:t+bt[h]*te,y:r+xt[h]*te,z:a+.5,frame:re[_],color:ht})}}return{sprite:i,frame:n}}var Pt=[0,0,2*te,2*te]
var Ft=[0,2*te,2*te,0]
function drawCell(e,t,r,a,i){var n=getCellFrame(e,t,r,a=a||Z.BOARD),o=n.sprite,s=n.frame
if(null!==s){var l=e.rot||0
o.draw({x:t+Pt[l],y:r+Ft[l],z:a,frame:s,color:i,rot:l*-ve/2})}}var Dt=[{name:"Output",cell:{type:et},cost:((u={})[k]=5,u)},{name:"Tree",cell:{type:$e,resource:k},cost:((f={})[P]=1,f)},{name:"Mine",cell:{type:$e,resource:C},cost:((c={})[k]=3,c)},{name:"Craft fire",cell:{type:rt,input0:k,input1:C,output:I},cost:((d={})[C]=3,d)},{name:"Lake",cell:{type:$e,resource:P},cost:((v={})[I]=3,v)},{name:"Craft steam",cell:{type:rt,input0:I,input1:P,output:A},cost:((p={})[P]=3,p)},{name:"Craft gold",cell:{type:rt,input0:P,input1:C,output:R},cost:((h={})[A]=3,h)},{name:"Craft love",cell:{type:rt,input0:k,input1:P,output:F},cost:((_={})[R]=3,_)},{name:'Craft gold "paint"',cell:{type:rt,input0:I,input1:R,output:D},cost:((m={})[F]=3,m)},{name:"Craft gears",cell:{type:rt,input0:A,input1:k,output:N},cost:((g={})[D]=3,g)},{name:"Craft cow",cell:{type:rt,input0:N,input1:F,output:O},cost:((y={})[N]=3,y)},{name:"Craft harmless statue",cell:{type:rt,input0:D,input1:O,output:L},cost:((w={})[O]=3,w)},{name:"Debug",cell:{type:tt},cost:{},debug:true},{name:"Debug",cell:{type:at},cost:{},debug:true}]
function payCost(e,t){t=t||-1
var r=vt.resources
var a=e.cost
for(var i in a)r[i]=(r[i]||0)+t*a[i]}function sameShopItem(e,t){return e.cell.type===t.cell.type&&(e.cell.resource===t.cell.resource||!e.cell.resource&&!t.cell.resource)&&(e.cell.type!==rt||e.cell.output===t.cell.output)}function refundCursor(){if(vt.cursor){for(var e=0;e<Dt.length;++e){var t=Dt[e]
if(sameShopItem(vt.cursor,t)){payCost(t,1)
break}}vt.cursor=null}}var Nt=[]
function addFloater(e,t,r){Nt.push({x:e,y:t,start:ne.frame_timestamp,f:r})}var Ot=1e3
var Lt=16
var Ut=ke(1,1,1,1)
function updateFloaters(){for(var e=Nt.length-1;e>=0;--e){var t=Nt[e]
var r=t.x,a=t.y,i=t.start,n=t.f
var o=(ne.frame_timestamp-i)/Ot
if(o>=1){Te(Nt,e)
continue}o=Ee(o,2)
Ut[3]=1-o
n(r,a-o*Lt,Ut)}}var Mt=false
function youWin(){ge.modalDialog({text:"You win!\n\nCongratulations, you have successfully demonstrated your ingenuity and resourcefulness by creating a wonderful artifact that shall be respectfully admired by all.",buttons:{Yay:null}})
Mt=true
ne.setState(stateHighScores)}function outputResource(a,e,t,i){vt.resources[a]=(vt.resources[a]||0)+1
addFloater(e,t,function(e,t,r){We.tiles.draw({x:e,y:t-i,frame:re[a],color:r})})
if(!vt.ever_output[a]){vt.ever_output[a]=true
gameStateAddProgress(vt)
De({ticks:vt.num_ticks,tech:a})
if(a===L)youWin()}}var jt=j(null,{color:pe.font_colors[3]})
var Bt=j(jt,{color:pe.font_colors[2]})
var Gt=J({background_color:null,auto_hide:true})
function drawShop(e,t,r,a){var i=4
var n=22
var o=76
var s=e
var l=t
ge.drawRect2({x:s,y:l,w:r,h:a,color:pe.colors[15],z:Z.UI-1})
Gt.begin({x:s,y:l,w:r,h:a-(Ye?3*ge.button_height:0),z:Z.UI})
s=l=0
s+=i
l+=i
r-=2*i
a-=2*i
var u=vt.resources
for(var f=0;f<Dt.length;++f){var c=Dt[f%Dt.length]
if(c.debug&&!Ye)continue
var d=c.cost
var v=n
var p=void 0
var h=void 0
var _=void 0
if(c.cell.type===rt){var m=c.cell,g=m.input0,y=m.input1,w=m.output
p=" "
var b=s+3
var x=l+3
We.tiles.draw({x:b,y:x,z:Z.UI+1,frame:re[g]})
b+=te-4
We.tiles_ui.draw({x:b,y:x,z:Z.UI,frame:4})
b+=te-3
We.tiles.draw({x:b,y:x,z:Z.UI+1,frame:re[y]})
b+=te-2
We.tiles_ui.draw({x:b,y:x,z:Z.UI,frame:5})
b+=te-2
We.tiles.draw({x:b,y:x,z:Z.UI+1,frame:re[w]})
b+=te}else{var S=getCellFrame(c.cell,s+o/2-te,l+3,Z.UI)
h=S.sprite
_=S.frame}var E=false
var T=s+o+4
var A=34
for(var R in d){var k=u[R]||0
var C=d[R]
if(C>k)E=true
Ue.draw({style:E?Bt:jt,x:T,y:l,w:A,h:v,align:Ue.ALIGN.HRIGHT|Ue.ALIGN.HFIT|Ue.ALIGN.VCENTER,text:k+"/"+C})
T+=A+2
We.tiles.draw({x:T,y:l+(n-te)/2,frame:re[R]})
T+=te}var I=vt.cursor&&sameShopItem(vt.cursor,c)
if(I)E=false
if(ge.button({x:s,y:l,img:h,frame:_,text:p,h:v,w:o,colors:c.debug?mt:void 0,disabled:E})){refundCursor()
if(!I){vt.cursor=be(c)
delete vt.cursor.cell.anim
payCost(c)}}l+=v+i}Gt.end(l)
if(vt.cursor&&oe.click({x:e,y:t,w:r,h:a})){ge.playUISound("refund")
refundCursor()}if(Ye){if(ge.buttonText({x:s,y:t+a-2*ge.button_height-i,w:r/3,text:"+Prog",colors:mt}))gameStateAddProgress(vt)
if(ge.buttonText({x:s+r/3,y:t+a-2*ge.button_height-i,w:r/3,text:"+Res",colors:mt}))for(var P in re)vt.resources[P]=(vt.resources[P]||0)+25
if(ge.buttonText({x:s,y:t+a-ge.button_height,w:r/3,text:"New",colors:mt}))vt=gameStateCreate(String(ce()))
if(ge.buttonText({x:s+r/3,y:t+a-ge.button_height,w:r/3,text:"Save",colors:mt}))saveGame()}if(je||Ye&&ge.buttonText({x:s+2*r/3,y:t+a-ge.button_height,w:r/3,text:"Load",colors:mt})){je=false
loadGame()}}function resourceMatches(e,t,r){if(!e||e.type!==rt)return false
if(e[t]===r)return true
return false}function craftingInputAt(e,t,r){var a,i
var n=vt.board
var o=n[t][e]
if(resourceMatches(o,"input0",r)&&0===o.rot)return true
if(resourceMatches(o,"input1",r)&&3===o.rot)return true
if(resourceMatches(o=n[t][e-1],"input0",r)&&3===o.rot)return true
if(resourceMatches(o,"input1",r)&&2===o.rot)return true
if(resourceMatches(o=null==(a=n[t-1])?void 0:a[e-1],"input0",r)&&2===o.rot)return true
if(resourceMatches(o,"input1",r)&&1===o.rot)return true
if(resourceMatches(o=null==(i=n[t-1])?void 0:i[e],"input0",r)&&1===o.rot)return true
if(resourceMatches(o,"input1",r)&&0===o.rot)return true
return false}function isCrafter(e,t){if(!e||e.type!==rt)return false
return e.rot===t}function craftingOutputAt(e,t){var r,a
var i=vt.board
var n=i[t][e]
var o=n.resource
if(!o)return 0
if(isCrafter(n,1))return o
if(isCrafter(n=i[t][e-1],0))return o
if(isCrafter(n=null==(r=i[t-1])?void 0:r[e-1],3))return o
if(isCrafter(n=null==(a=i[t-1])?void 0:a[e],2))return o
return 0}function canPlace(e,t,r){var a=ft[e.type]||1
var i=vt.board
if(e.type===at)return i[r][t].type===tt
for(var n=0;n<a;++n)for(var o=0;o<a;++o){var s
var l=null==(s=i[r+n])?void 0:s[t+o]
if(!l)return false
if(!ut[l.type])return false}for(var u=-1;u<=0;++u)for(var f=-1;f<=0;++f){var c
var d=null==(c=i[r+u])?void 0:c[t+f]
if(d&&2===ft[d.type])return false}if(ct[e.type]){var v=false
for(var p=0;p<gt.length;++p)for(var h=0;h<a;++h){var _=gt[p]
if(_>0)_+=a-1
var m=yt[p]
if(m>0)m+=a-1
if(typeAt(t+_,r+m)===tt)v=true
if(2===a){if(_)m++
else _++
if(typeAt(t+_,r+m)===tt)v=true}}if(!v)return false}return true}function clearCell(e,t,r){var a=vt.board[t][e]
if(a.resource&&a.type!==$e)delete a.resource
var i=ft[a.type]||1
for(var n=0;n<i;++n)for(var o=0;o<i;++o)if(n||o)clearCell(e+n,t+o,r)
if(r)return
for(var s in a)delete a[s]
a.type=Xe}var zt=j(null,{color:pe.font_colors[0]})
var Ht=[]
var Vt=0
function drawTutorial(d,v,p,h){var e=""
var t=vt,r=t.ever_output,a=t.board,i=t.workers,n=t.cursor,o=t.resources
var s={}
for(var l=0;l<i.length;++l)s[i[l].resource]=true
var u={}
var f={}
var c={}
for(var _=0;_<a.length;++_){var m=a[_]
for(var g=0;g<m.length;++g){var y=m[g]
if(y.type===$e)u[y.resource]=true
else if(y.type===rt||y.type===Xe)c[y.resource]=true
else if(y.type===et)s[y.resource]=true
f[y.type]=true}}var w=oe.touch_mode?"Tap":"Click"
var b=oe.touch_mode?"long-press":"right-click"
if(!r[k]){if(!u[k])if(!n)e="HINT: Select the Tree on the left to start placing a source of raw wood."
else e=w+" next to a path to place it where a worker can gather from it."
if(!f[et])e="HINT: Re-build a market next to the path to continue."}if(!e&&!r[C]&&!u[C])if(!f[et])e="HINT: Re-build a market next to the path to continue."
else if((o[k]||0)<3&&(!n||n.cell.type!==$e||n.cell.resource!==C))e="Workers automatically pick up and drop off resources.\nWait until your workers have sold 3 wood.\nHINT: You can use the Fast-Forward button in the upper right if desired.\nHINT: If you "+b+" a structure you can pick it up to move or sell."
else e="Place some raw metal for your workers to gather."
if(!e&&!r[I]&&!f[rt])if((o[C]||0)<3&&(!n||n.cell.type!==rt))e="Wait until your workers have sold 3 metal.\nHINT: You may want to move structures with "+b+", or place an additional market.\nHINT: Every time a worker sells a new resource for the first time, you gain an additional worker.\nHINT: Every-other time you also gain an additional path."
else e="Next, place a fire maker.\nIMPORTANT: Workers must be able to get to both the 2 inputs and the 1 output.\nHINT: Place it in the center of a loop, or between two paths."
if(!e&&!r[I])if(!s[I]&&!c[I]&&(!c[k]||!c[C]))e="Have your workers load wood and metal into the fire maker.\nHINT: "+w+" the fire maker to rotate it.\nHINT: You may want to move structures with "+b+", or place additional resources."
if(!e&&!r[P]&&!u[P]&&(o[I]||0)<3)e="Next up: sell 3 fire!\nHINT: A worker must pick up the fire and deliver it to a market to sell.\nHINT: "+w+" the fire maker to rotate it.\nHINT: You may want to move structures with "+b+", or place additional resources and markets."
if(!e&&!Vt&&!vt.tut_completed){Vt=ne.frame_timestamp
vt.tut_completed=true}if(!e&&Vt&&ne.frame_timestamp-Vt<1e4)e="Great job!\nYou're on your own from here, go make something that will make your people proud!"
if(!Ht.length||Ht[Ht.length-1].text!==e)Ht.push({start_time:ne.frame_timestamp,text:e})
Ht[Ht.length-1].end_time=ne.frame_timestamp
function drawTutText(e,t,r){var a=36
var i=d+a
var n=p-2*a
var o=Ue.numLines(zt,n,0,ge.font_height,e)
var s=v+h-12-(o-1)*ge.font_height
var l=v+h
s=xe(Ee(t,2),l,s)
var u=n+8
var f={x:d+(p-u)/2,y:s-4,z:r,w:u,h:v+h-s+3+4,eat_clicks:false,peek:true}
var c=zt
if(oe.mouseOver(f)){f.color=[1,1,1,.5]
c=B(c,.5)}Ue.draw({x:i,y:s,z:r,w:n,align:Ue.ALIGN.HCENTER|Ue.ALIGN.HWRAP,text:e,style:c})
ge.panel(f)}var x=1e3
var S=Z.HELP+3
for(var E=Ht.length-1;E>=0;--E){var T=Ht[E]
var A=void 0
if(E===Ht.length-1){var R=ne.frame_timestamp-T.start_time
A=we(R/x,0,1)
if(T.text)drawTutText(T.text,A,S)}else{if((A=1-(ne.frame_timestamp-T.end_time)/x)<=0){Ht.splice(E,1)
continue}if(T.text)drawTutText(T.text,A,S)}S-=3}}var Wt=ke(1,1,1,1)
var qt=ke(1,1,1,.5)
function drawBoard(e,t,r,a){var i=ne.frame_dt
ge.drawRect2({x:e,y:t,w:r,h:a,color:pe.colors[11],z:Z.BACKGROUND})
drawTutorial(e,t,r,a)
var n=ge.button_height
if(ge.button({x:e+r-n,y:t,w:n,h:n,img:We.tiles_ui,frame:He===ze?9:He===Be?13:8,tooltip:"Toggle [F]ast-forward"+(Ve?(oe.touch_mode?"\n[Double-tap]":"\n[Space] or [Double-click]")+" to pause":""),no_bg:true}))if(Ve&&He!==Be&&ge.button_click.was_double_click)He=Be
else if(He!==Ge)He=Ge
else He=ze
if(oe.keyUpEdge(se.F)){ge.playUISound("button_click")
if(He!==Ge)He=Ge
else He=ze}if(Ve&&oe.keyUpEdge(se.SPACE)){ge.playUISound("button_click")
if(He!==Ge)He=Ge
else He=Be}if(ge.button({x:e+r-2*n-4,y:t,w:n,h:n,img:We.tiles_ui,frame:11,tooltip:"Save and Exit to Menu",no_bg:true})){saveGame()
ne.setState(stateMenu)
_e.queue(Z.TRANSITION_FINAL,_e.pixelate(500))}var o=vt,s=o.board,l=o.workers,u=o.cursor
if(u&&ge.button({x:e+r-n-2,y:t+a-n-2,w:n,h:n,img:We.tiles_ui,frame:3,tooltip:"[Esc] Refund item",max_dist:Infinity})){refundCursor()
u=null}if(u&&oe.keyUpEdge(se.ESC)){ge.playUISound("refund")
refundCursor()
u=null}Ue.draw({x:e+r-4,y:t+n,align:Ue.ALIGN.HRIGHT,text:Oe(vt.num_ticks)})
ie.push()
var f=ie.calcMap([],[e,t,e+r,t+a],[0,0,r,a])
ie.set(f[0],f[1],f[2],f[3])
var c=1-vt.tick_countdown/ae
var d=1
var v
var p
if(c<.5){v=Se(d=2*c,2)
p=Ee(d,2)}function drawCarried(e,t,r,a,i,n){var o=e.resource
if(!o)return
if(!n){var s={x:t,y:r,w:te,h:te}
if(oe.click(_extends({},s,{button:0}))){ge.playUISound("delete")
delete e.resource
return}if(oe.mouseOver(s))We.tiles_ui.draw({x:t,y:r-i,z:Z.UI,frame:0})}var l=e.resource_from
var u=i
if(void 0!==l&&d<1){t+=xe(p,gt[l]*te,0)
r+=xe(p,yt[l]*te,0)
u=xe(p,a,i)}We.tiles.draw({x:t,y:r-u,z:Z.WORKERS+1,frame:re[o]})}for(var h=0;h<s.length;++h){var _=s[h]
for(var m=0;m<_.length;++m){var g=_[m]
var y=m*te
var w=h*te
Wt[3]=1
if(g.road_fade)if(i>=g.road_fade)delete g.road_fade
else{g.road_fade-=i
var b=Se(we(1-g.road_fade/St,0,1),2)
Wt[3]=b}drawCell(g,y,w,Z.BOARD,Wt)
var x=ft[g.type]||1
var S={x:y,y:w,w:te*x,h:te*x}
if(g.type!==$e){var E=Ke
if(craftingOutputAt(m,h))E+=de(le(4*fe(.004*ne.frame_timestamp)))
drawCarried(g,y,w,Ze,E,g.type===et||g.type===rt||g.type===Xe)}if(u&&canPlace(u.cell,m,h)&&oe.click(_extends({},S,{button:0,max_dist:Infinity}))){ge.playUISound("place")
if(u.cell.type===at)vt.workers.push({x:m,y:h,dir:ue(4*ce()),worker_fade:Tt})
else{clearCell(m,h)
for(var T in u.cell)g[T]=u.cell[T]
g.rot=g.rot||0
g.x=m
g.y=h}if(!oe.keyDown(se.SHIFT))u=vt.cursor=null}else if(lt[g.type]&&(oe.click(_extends({},S,{button:2}))||oe.longPress(S))){ge.playUISound("pickup")
refundCursor()
u=vt.cursor={cell:be(g)}
delete vt.cursor.cell.anim
if(u.cell.type!==$e)delete u.cell.resource
delete u.cell.resource_from
clearCell(m,h)
g.type=Xe}}}for(var A=0;A<s.length;++A){var R=s[A]
for(var k=0;k<R.length;++k){var C=R[k]
if(st[C.type]){var I=k*te
var P=A*te
var F=ft[C.type]||1
if(oe.click({x:I,y:P,w:te*F,h:te*F,button:0})){ge.playUISound("rotate")
C.rot=(C.rot+1)%4
clearCell(k,A,true)}}}}for(var D=0;D<l.length;++D){var N=l[D]
if(N.worker_fade)if(i>=N.worker_fade)delete N.worker_fade
else N.worker_fade-=i
var O=N.x,L=N.y,U=N.lastx,M=N.lasty,j=N.worker_fade
var B=L
var G=1
if(void 0!==U&&d<1){O=xe(v,U,O)
B=L=xe(v,M,L)
var z=fe(v*ve)
G=1-.5*z
L+=-.5*z}O*=te
L*=te
B*=te
if(!N.anim){N.anim=he(nt)
N.anim.setState("idle")}var H=Wt[3]=1
if(j){var V=1-j/Tt
Wt[3]=Se(V,2)
H=1+4*(1-Ee(V,3))}We.tiles_centered.draw({x:O+te/2,y:L+te/2,z:Z.WORKERS,w:H,h:H,frame:N.anim.getFrame(i),color:Wt})
if(L!==B)We.tiles_centered.draw({x:O+te/2,y:B+te/2+4*(1-G),z:Z.WORKERS-.5,frame:7,color:qt,w:G,h:G,nozoom:true})
drawCarried(N,O,L,Ke,Ze)
var W={x:O,y:L,w:te,h:te}
if(!N.stunned&&oe.click(W)){ge.playUISound("stun")
N.stunned=2}if(N.stunned)We.tiles_ui_centered.draw({x:O+te/2,y:L+te/2,z:Z.WORKERS+5,frame:2,rot:.005*ne.frame_timestamp})}if(u&&oe.click({button:2})){ge.playUISound("refund")
refundCursor()
u=null}var q=false
if(oe.mouseOver({x:0,y:0,w:r,h:a})){var Y
var K=oe.mousePos()
var J=ue(K[0]/te)
var X=ue(K[1]/te)
if(null==(Y=s[X])?void 0:Y[J])if(u){q=true
if(canPlace(u.cell,J,X))drawCell(u.cell,J*te,X*te,Z.UI,pt)
else drawCell(u.cell,J*te,X*te,Z.UI,_t)}}updateFloaters()
qe.tick(i)
ie.pop()
if(u&&!q){var Q=oe.mousePos()
drawCell(u.cell,Q[0]-te/2,Q[1]-te/2,Z.UI+10,pt)}if(u){var $=vt.cursor.cell
if(st[$.type]){var ee=oe.mouseWheel()
if(ee<0)$.rot=(($.rot||0)+1)%4
else if(ee>0)$.rot=(($.rot||0)+3)%4}}}function getQuadCell(e,t,r){e+=bt[r%4]
t+=xt[r%4]
return vt.board[t][e]}function tickState(){var e=vt,t=e.board,r=e.workers,a=e.num_ticks
for(var i=0;i<t.length;++i){var n=t[i]
for(var o=0;o<n.length;++o){var s=n[o]
delete s.resource_from
if(s.type===et)if(s.resource){outputResource(s.resource,o*te,i*te,Ke)
ge.playUISound("sell")
delete s.resource}if(s.type===rt){var l=getQuadCell(o,i,3+s.rot)
var u=getQuadCell(o,i,0+s.rot)
var f=getQuadCell(o,i,1+s.rot)
if(!l.resource&&u.resource&&f.resource){l.resource=s.output
delete l.resource_from
delete u.resource
delete f.resource
qe.createSystem(V.defs.explosion,[(o+1)*te,(i+1)*te,Z.PARTICLES])
ge.playUISound("craft")
u.did_output_on=a
f.did_output_on=a
l.did_output_on=a}}}}for(var c=0;c<r.length;++c){var d=r[c]
var v=d.x,p=d.y,h=d.dir
delete d.lastx
delete d.resource_from
var _=false
if(d.stunned){--d.stunned
continue}if(!d.resource){for(var m=0;!_&&m<gt.length;++m){var g=v+gt[m]
var y=p+yt[m]
if(craftingOutputAt(g,y)&&t[y][g].did_output_on!==a){d.resource=craftingOutputAt(g,y)
delete t[y][g].resource
d.resource_from=m
_=true}}for(var w=0;!_&&w<gt.length;++w){var b=v+gt[w]
var x=p+yt[w]
if(typeAt(b,x)===$e){d.resource=t[x][b].resource
d.resource_from=w
_=true}}}if(d.resource){for(var S=0;!_&&S<gt.length;++S){var E=v+gt[S]
var T=p+yt[S]
if(craftingInputAt(E,T,d.resource)&&t[T][E].did_output_on!==a){var A=t[T][E]
if(!A.resource){A.resource=d.resource
delete d.resource
A.resource_from=(S+2)%4
_=true
break}}}for(var R=0;!_&&R<gt.length;++R){var k=v+gt[R]
var C=p+yt[R]
if(typeAt(k,C)===et){var I=t[C][k]
if(!I.resource){I.resource=d.resource
delete d.resource
I.resource_from=(R+2)%4
_=true
break}}}}for(var P=0;P<Ct.length;++P){var F=(h+Ct[P])%4
var D=v+gt[F]
var N=p+yt[F]
if(typeAt(D,N)===tt){d.lastx=v
d.lasty=p
v=d.x=D
p=d.y=N
d.dir=F
break}}}}function statePlay(e){var t
Ce(ne.border_clear_color,pe.colors[0]);(t=gl).clearColor.apply(t,pe.colors[0])
if(!He&&vt.tick_countdown>1)e=z(e,vt.tick_countdown-1)
else e*=He
if(e>=vt.tick_countdown){vt.tick_countdown=G(ae/2,ae-(e-vt.tick_countdown))
vt.num_ticks++
tickState()}else vt.tick_countdown-=e
var r=148
drawShop(0,0,r,S)
drawBoard(r,0,x-r,S)}var Yt=me({tracks:{menu_buttons:{in:{start:0,end:1e3},out:{}},title:{in:{start:0,end:1e3},out:{}},attribution:{in:{start:500,end:1100},out:{}},cow_walk:{in:{start:1e3,end:2e3,ease:"out"},out:{}}},interactable_at:100})
function stateHighScores(){var e
Ce(ne.border_clear_color,pe.colors[11]);(e=gl).clearColor.apply(e,pe.colors[11])
Ne()
var t=(x-E)/2
if(Mt){t-=E/2+4
if(ge.button({x:t,y:S-T-4,w:E,h:T,text:"Continue Playing"})){_e.queue(Z.TRANSITION_FINAL,_e.pixelate(500))
ne.setState(statePlay)}t+=E+4}if(ge.button({x:t,y:S-T-4,w:E,h:T,text:"Main Menu"})){_e.queue(Z.TRANSITION_FINAL,_e.fade(500))
ne.setState(stateMenu)}}var Kt=0
function stateMenu(){var e
Yt.update()
Ce(ne.border_clear_color,pe.colors[11]);(e=gl).clearColor.apply(e,pe.colors[11])
var t=Yt.getFadeColor("title")
if(t)We.title_text.draw({x:-6,y:0,w:x,h:S,z:Z.BACKGROUND,color:t})
var r=16
var a=S-r-4
var i=Yt.getFadeFont("attribution",j(null,{color:pe.font_colors[0]}))
if(i)Me.draw({x:0,w:x,y:a,align:Ue.ALIGN.HCENTER,text:"By Chris Benjaminsen and Jimb Esser",size:r,style:i})
var n=298
var o=10
var s=o*(te/2-1)
var l=0
var u=550+200*(1-Yt.getTrack("cow_walk"))
if(oe.mouseOver({x:u-s,y:n-s,w:2*s,h:2*s}))l=.2*fe(.005*ne.frame_timestamp)
Kt=xe(.1,Kt,l)
We.tiles_centered.draw({frame:re[L],x:u,y:n,z:Z.UI-1,w:o,h:o,rot:Kt})
var f=E
var c=T
var d=4
var v=hasSaveGame()
var p=v?3:2
a=ue(2*S/3)
u=(x-f*p+(p-1)*d)/2
t=Yt.getFadeButtonColor("menu_buttons")
if(v){if(ge.button({x:u,y:a,w:f,h:c,color:t,text:"Resume Game"})){loadGame()
ne.setState(statePlay)
_e.queue(Z.TRANSITION_FINAL,_e.pixelate(500))}u+=f+d}if(ge.button({x:u,y:a,w:f,h:c,color:t,text:v?"New Game":"Start Game"})){if(v)vt=gameStateCreate(String(ce()))
else vt=gameStateCreate(Je)
ne.setState(statePlay)
He=Ge
_e.queue(Z.TRANSITION_FINAL,_e.pixelate(500))}if(ge.button({x:u+=f+d,y:a,w:f,h:c,color:t,text:"High Scores"})){Le()
Mt=false
ne.setState(stateHighScores)
_e.queue(Z.TRANSITION_FINAL,_e.fade(500))}u+=f+d
a=S-(u=d)-c
if(ge.button({img:We.tiles_ui,frame:X.get("volume_sound")?6:7,x:u,y:a,w:c,h:c,color:t,no_bg:true}))X.set("volume_sound",1-X.get("volume_sound"))
u+=c+d
if(ge.button({img:We.tiles_ui,frame:X.get("volume_music")?14:15,x:u,y:a,w:c,h:c,color:t,no_bg:true})){X.set("volume_music",1-X.get("volume_music"))
if(X.get("volume_music"))Q("bg")}}function pumpMusic(){Q("bg")
setTimeout(pumpMusic,9e4)}function main(){if(ne.DEBUG)H.init({engine:ne})
var e="strict"
Me={info:t("./img/font/vga_8x16x1.json"),texture:"font/vga_8x16x1",h:16}
Ue={info:t("./img/font/04b03_8x1.json"),texture:"font/04b03_8x1",h:8}
if(!ne.startup({game_width:x,game_height:S,pixely:e,font:Ue,title_font:Me,viewport_postprocess:false,antialias:false,do_borders:true,show_fps:false,ui_sprites:_extends({},ee("pixely"),{button:{name:"button",ws:[4,14,4],hs:[22]},button_down:{name:"button_down",ws:[4,14,4],hs:[22]},button_disabled:{name:"button_disabled",ws:[4,14,4],hs:[22]},panel:{name:"panel",ws:[3,2,3],hs:[3,10,3]},collapsagories:null,collapsagories_rollover:null,collapsagories_shadow_down:null}),ui_sounds:{button_click:["upchord1","upchord2","upchord3"],place:["down1","down2","down3"],pickup:["upchord1","upchord2","upchord3"],rotate:["upchord1","upchord2","upchord3"],refund:["upchord1","upchord2","upchord3"],stun:"button_click",delete:"button_click",sell:["up1","up2","up3"],craft:["up1","up2","up3"],progress:"fanfare"}}))return
ge.scaleSizes(.6875)
ge.setFontHeight(Ue.h)
ge.setPanelPixelScale(1)
Ie(ge.color_panel,1,1,1,1)
Ue=ge.font
Me=ge.title_font
qe=ne.glov_particles
init()
pumpMusic()
ne.setState(ne.DEBUG?stateHighScores:stateMenu)}},{"../glov/client/camera2d.js":13,"../glov/client/engine.js":19,"../glov/client/font.js":25,"../glov/client/input.js":34,"../glov/client/local_storage.js":37,"../glov/client/net.js":41,"../glov/client/particles.js":42,"../glov/client/pico8.js":45,"../glov/client/scroll_area.js":53,"../glov/client/settings.js":54,"../glov/client/sound.js":59,"../glov/client/sprite_animation.js":61,"../glov/client/sprite_sets.js":62,"../glov/client/sprites.js":63,"../glov/client/transition.js":66,"../glov/client/ui.js":67,"../glov/common/platform.js":88,"../glov/common/rand_alea.js":89,"../glov/common/util.js":92,"../glov/common/vmath.js":94,"./img/font/04b03_8x1.json":2,"./img/font/vga_8x16x1.json":3,"./main2":5,"./particle_data.js":6,"./transitioner.js":7,assert:void 0}],5:[function(e,t,r){"use strict"
r.main2init=main2init
r.setScore=setScore
r.stateHighScoresInternal=stateHighScoresInternal
r.timeFormat=timeFormat
r.updateHighScores=updateHighScores
var a=e("../glov/client/font")
var o=a.ALIGN
var s=a.fontStyleColored
var l=e("../glov/client/pico8")
var i=e("../glov/client/score").scoreAlloc
var n=e("../glov/client/score_ui")
var u=n.drawCellDefault
var f=n.scoresDraw
var c=e("../glov/client/ui")
var d=c.drawLine
var v=c.uiGetTitleFont
var p=e("./main")
var h=e("./main")
var _=h.MENU_BUTTON_H
var m=h.RESOURCE_FRAMES
var g=h.TICK_TIME
var y=h.TILE_SIZE
var w=h.game_height
var b=h.game_width
var x=Math.floor,S=Math.max
function pad2(e){return("0"+e).slice(-2)}function timeFormat(e){var t=x(e*g/1e3)
return x(t/60)+":"+pad2(t%=60)}function encodeScore(e){var t=S(999999-e.ticks,0)
return 1e6*(e.tech||0)+t}function parseScore(e){var t=x(e/1e6)
return{ticks:999999-(e-=1e6*t),tech:t}}var E=[{name:"the"}]
var T
function setScore(e){T.setScore(0,e)}function updateHighScores(){T.getHighScores(0)}function drawCellTech(e){var t=e.value,r=e.x,a=e.y,i=e.z,n=e.w,o=e.h
if("number"===typeof t)p.sprites.tiles.draw({x:r+x((n-y)/2),y:a+x((o-y)/2),z:i,frame:m[t]})
else u(e)}var A=[{name:"",width:16,align:o.HFIT|o.HRIGHT|o.VCENTER},{name:"Name",width:60,align:o.HFIT|o.VCENTER},{name:"Tech",width:12,draw:drawCellTech},{name:"Time",width:18}]
var R=s(null,l.font_colors[1])
var k=s(null,l.font_colors[8])
var C=s(null,l.font_colors[5])
function myScoreToRow(e,t){e.push(t.tech,timeFormat(t.ticks))}function stateHighScoresInternal(){var e=280
var t=(b-e)/2
var r=0
var a=Z.UI+10
var i=8
var n=i
v().drawSizedAligned(s(null,l.font_colors[0]),t,r,a,2*i,o.HCENTERFIT,e,0,"HIGH SCORES")
d(t+130,r+=2*i+2,t+e-130,r,a,1,1,l.colors[5])
f({score_system:T,size:i,line_height:y+1,x:t,y:r+=4,z:a,width:e,height:w-(_+n)-r,level_index:0,columns:A,scoreToRow:myScoreToRow,style_score:R,style_me:k,style_header:C,color_line:l.colors[0],color_me_background:l.colors[1],allow_rename:true})}function main2init(){T=i({score_to_value:encodeScore,value_to_score:parseScore,level_defs:E,score_key:"JS22",asc:false,rel:20})
updateHighScores()}},{"../glov/client/font":25,"../glov/client/pico8":45,"../glov/client/score":51,"../glov/client/score_ui":52,"../glov/client/ui":67,"./main":4}],6:[function(e,t,r){"use strict"
r.defs=void 0
var a={};(r.defs=a).explosion={particles:{part0:{blend:"alpha",texture:"particles/circle8",color:[1,1,1,1],color_track:[{t:0,v:[1,1,1,0]},{t:.2,v:[1,1,1,1]},{t:.8,v:[1,1,1,1]},{t:1,v:[1,1,1,0]}],size:[[12,4],[12,4]],size_track:[{t:0,v:[1,1]},{t:.2,v:[2,2]},{t:.4,v:[1,1]},{t:1,v:[1.5,1.5]}],accel:[0,0,0],rot:[0,360],rot_vel:[10,2],lifespan:[500,0],kill_time_accel:5}},emitters:{part0:{particle:"part0",pos:[[-8,16],[-8,16],0],vel:[0,0,0],emit_rate:[15,0],emit_time:[0,500],emit_initial:10,max_parts:Infinity}},system_lifespan:1e3}},{}],7:[function(e,t,r){"use strict"
r.createTransitioner=createTransitioner
var o=e("assert")
var a=e("../glov/client/engine.js"),i=a.getFrameDt,n=a.getFrameIndex,s=a.postTick
var l=e("../glov/client/font.js")
var u=e("../glov/client/input.js")
var f=Math.max,c=Math.min
var d=e("../glov/common/util.js"),v=d.clamp,p=d.easeIn,h=d.easeOut,_=d.easeInOut,m=d.identity
var g=e("../glov/common/vmath.js"),y=g.unit_vec,w=g.v3copy,b=g.vec4
var x=null
var S="in"
var E="out"
var T={in:function _in(e){return p(e,2)},out:function out(e){return h(e,2)},inout:function inout(e){return _(e,2)}}
function Transitioner(e){this.last_frame_idx=null
this.mode=S
this.t=0
var i=this.tracks=e.tracks
var n=this.per_mode_data={};["in","out"].forEach(function(e){var t=n[e]={max_t:0}
for(var r in i){var a=i[r][e]
o(a)
t.max_t=f(t.max_t,a.end)
a.dur=a.end-a.start
a.easefn=a.easefn||T[a.ease]||m}})
this.p=0
this.interactable_at=e.interactable_at||this.per_mode_data.in.max_t
this.out_data=null}Transitioner.prototype.startFadeOut=function(){o(this.out_data)
this.mode=E
this.t=this.per_mode_data.out.max_t}
Transitioner.prototype.fadeOutQueued=function(){return Boolean(this.out_data)}
Transitioner.prototype.update=function(){var t=this
var e=i()
var r=n()
var a=r!==this.last_frame_idx+1
this.last_frame_idx=r
if(a)if(this.out_data)this.startFadeOut()
else{this.mode=S
this.t=0}if(this.mode===S){this.t+=e
this.p=this.t/this.per_mode_data.in.max_t
if(this.p>=1){this.mode=x
this.t=this.per_mode_data.in.max_t
this.p=1}}if(this.mode===x&&this.out_data)this.startFadeOut()
if(this.mode===E){o(this.out_data)
this.t-=e
this.p=this.t/this.per_mode_data.out.max_t
if(this.p<=0){this.t=0
this.p=0
if(!this.out_data.cb);else s({fn:function fn(){var e=t.out_data.cb
t.out_data=null
t.last_frame_idx=null
e()}})}}if(this.fadeOutQueued())u.eatAllInput()
else if(this.mode===S&&this.t<this.interactable_at)u.eatAllInput()}
Transitioner.prototype.getTrack=function(e){var t=this.mode
var r=this.tracks[e]
if(t===x)return 1
var a=(this.t-r[t].start)/r[t].dur
if(r[t].extrapolate)a=c(a,1)
else a=v(a,0,1)
return r[t].easefn(a)}
Transitioner.prototype.getFadeColor=function(e,t){var r=this.getTrack(e)
if(!r)return null
if(1===r)return t||y
var a=this.tracks[e]
var i=a.temp_color
if(!i)i=a.temp_color=b(1,1,1,1)
if(t){w(i,t)
i[3]=t[3]*r}else i[3]=r
return i}
var A=b(1,1,1,0)
Transitioner.prototype.getFadeButtonColor=function(e){var t=this.getTrack(e)
if(!t)return A
if(1===t)return null
var r=this.tracks[e]
var a=r.temp_color
if(!a)a=r.temp_color=b(1,1,1,1)
a[3]=t
return a}
Transitioner.prototype.getFadeFont=function(e,t){var r=this.getTrack(e)
if(!r)return null
if(1===r)return t
return l.styleAlpha(t,r)}
Transitioner.prototype.out=function(e){o(!this.out_data)
this.out_data={cb:e}}
Transitioner.prototype.out2=function(){var t=this
o(!this.out_data)
this.out_data={cb:null}
return function(e){o(t.out_data)
o(!t.out_data.cb)
t.out_data.cb=e}}
Transitioner.prototype.outbind=function(e){return this.out.bind(this,e)}
function createTransitioner(e){return new Transitioner(e)}},{"../glov/client/engine.js":19,"../glov/client/font.js":25,"../glov/client/input.js":34,"../glov/common/util.js":92,"../glov/common/vmath.js":94,assert:void 0}],8:[function(e,t,r){"use strict"
r.abTestGet=abTestGet
r.abTestGetMetrics=abTestGetMetrics
r.abTestGetMetricsAndPlatform=abTestGetMetricsAndPlatform
r.abTestRegister=abTestRegister
function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a))e[a]=r[a]}return e}).apply(this,arguments)}var a=e("assert")
var l=e("../common/rand_alea").mashString
var i=e("./client_config").platformGetID
var n=e("./local_storage")
var u=n.localStorageGet
var f=n.localStorageSet
var o=e("./net")
var s=o.netPostInit
var c=o.netSubs
var d=o.netUserId
var v=e("./wsclient").wsclientSetExtraParam
var p=Math.floor
var h="abtests_id"
var _="abtest."
function evaluateSplitGroup(e,t){var r=e.values,a=e.name
var i=""+_+e.name
var n=null
if(e.permanent){var o
var s=u(i)
if(s&&(e.values.includes(s)||null!=(o=e.allowed_values)&&o.includes(s)))n=s}if(!n)n=r[p(l(a+":"+t)/4294967296*r.length)]
e.value=n
null==e.cb||e.cb(e.value)
if("client"===e.scope)f(i,e.value)}var m={}
var g=""
var y=""
function abTestGetMetrics(){return g}function abTestGetMetricsAndPlatform(){return y}function updateMetricsString(){var e=[]
for(var t in m){var r=m[t]
if(r.metrics&&r.value)e.push(""+r.metrics+r.value)}g=e.join(",")
e.push(i())
y=e.join(",")}function updateWSClient(){var e=[]
for(var t in m){var r=m[t]
if("client"===r.scope&&r.metrics)e.push(""+r.metrics+r.value)}v("abt",e.join(","))}var w=null
function evaluatePerUserABTests(){a(w)
for(var e in m){var t=m[e]
if("user"!==t.scope)continue
evaluateSplitGroup(t,w)}updateMetricsString()}function abTestPostNetInit(){c().on("login",function(){w=d()
evaluatePerUserABTests()})
c().on("logout",function(){w=null})}var b
var x=false
function abTestStartup(){if(x)return
x=true
if(!(b=u(h)||"")){b="id"+Math.random()
f(h,b)}s(abTestPostNetInit)}function abTestRegister(e){abTestStartup()
var t=_extends({},e,{value:null})
if("client"===(m[t.name]=t).scope)evaluateSplitGroup(t,b)
if("client"===t.scope&&t.metrics){a(!c())
updateWSClient()
updateMetricsString()}if("user"===t.scope){a(!t.permanent)
a(!c()||!d())}}function abTestGet(e){var t=m[e]
a(t)
a(null!==t.value)
return t.value}},{"../common/rand_alea":89,"./client_config":14,"./local_storage":37,"./net":41,"./wsclient":73,assert:void 0}],9:[function(e,t,r){"use strict"
r.autoReset=void 0
r.autoResetEachFrame=autoResetEachFrame
var a=r.autoResetSkippedFrames=autoResetSkippedFrames
r.autoReset=a
var i=e("./engine")
var n=Object.create(null)
function autoResetSkippedFrames(e){var t=n[e]
n[e]=i.frame_index
return!(t>=i.frame_index-1)}function autoResetEachFrame(e){var t=n[e]
n[e]=i.frame_index
return t!==i.frame_index}},{"./engine":19}],10:[function(e,t,r){"use strict"
e("./polyfill.js")
var c=document.getElementById("debug")
window.onerror=function(e,t,r,a,i){var n=String(e)
if(n.startsWith("[object ")){try{n=JSON.stringify(e)}catch(e){}n=n.slice(0,600)}if("string"===typeof i)n=n+" "+i
if(t||r>0||a>0)n+="\n  at "+t+"("+r+":"+a+")"
var o=false
if(i&&i.stack){o=true
n=""+i.stack
if(i.message)if(-1===n.indexOf(i.message))n=i.message+"\n"+n
var s=document.location.origin||""
if(s){if("/"!==s.slice(-1))s+="/"
n=n.split(s).join("")}n=n.replace(/\[\d+\]<\/?/g,"").replace(/\/</g,"").replace(/<?\/<?/g,"/").replace(/\n\//g,"\n").replace(/\n([^ ])/g,"\n  $1")}if(-1===n.indexOf("Error:"))n="Error: "+n
if(i&&i.errortype)if("unhandledrejection"===i.errortype)n="Uncaught (in promise) "+n
if(i)try{if("object"===typeof i)for(var l in i)if("string"===typeof i[l]){var u=i[l]
if("errortype"!==l&&!(("stack"===l||"message"===l)&&o))n=n+"\n"+l+"="+u}}catch(e){}var f=true
if(window.glov_error_report)f=window.glov_error_report(n,t,r,a)
else if(!window.glov_error_early)window.glov_error_early={msg:n,file:t,line:r,col:a}
if(f)c.innerText=n+"\n\nPlease report this error to the developer, and then reload this page or restart the app."}
window.addEventListener("unhandledrejection",function(e){var t=e.reason
if(!t)return
if(!t||"object"!==typeof t)t={stack:t}
var r
if(e.reason&&e.reason.srcElement&&e.reason.srcElement.src)r=e.reason.srcElement.src
try{t.errortype=e.type}catch(e){}window.onerror(e.reason,r,0,0,t)})
window.debugmsg=function(e,t){if(t)c.innerText=e
else c.innerText+=e+"\n"}
window.profilerStart=window.profilerStop=window.profilerStopStart=function nop(){}},{"./polyfill.js":47}],11:[function(e,t,i){"use strict"
i.is_windows_phone=i.is_webkit=i.is_mac_osx=i.is_itch_app=i.is_ios_safari=i.is_ios=i.is_firefox=i.is_discrete_gpu=i.is_android=void 0
var r=window.navigator.userAgent
var n=r.match(/Mac OS X/)
i.is_mac_osx=n
var o=!window.MSStream&&r.match(/iPad|iPhone|iPod/)
i.is_ios=o
var a=r.match(/windows phone/i)
var s=!(i.is_windows_phone=a)&&r.match(/android/i)
i.is_android=s
var l=r.match(/WebKit/i)
i.is_webkit=l
var u=o&&l&&!r.match(/CriOS/i)
i.is_ios_safari=u
var f=r.match(/Firefox/i)
i.is_firefox=f
var c=-1!==String(window.location.protocol).indexOf("itch")
i.is_itch_app=c
var d=false
i.is_discrete_gpu=d
function init(){try{var e=document.createElement("canvas")
e.width=4
e.height=4
var t=e.getContext("webgl")
if(t){var r=t.getExtension("WEBGL_debug_renderer_info")
if(r){var a=t.getParameter(r.UNMASKED_RENDERER_WEBGL)
i.is_discrete_gpu=d=Boolean(a&&(a.match(/nvidia|radeon/i)||a.match(/apple gpu/i)&&n&&!o))}}}catch(e){}}init()},{}],12:[function(e,t,r){"use strict"
r.buildUIStartup=buildUIStartup
var A=e("./camera2d.js")
var a=e("./engine.js")
var i=a.renderNeeded
var n=e("./font.js")
var R=Math.min
var k=e("./scroll_area.js").scrollAreaCreate
var C=e("./ui.js")
var I=e("./ui.js").uiButtonHeight
var o=e("./net.js")
var s=e("../common/data_error.js"),l=s.dataErrorEx,P=s.dataErrorQueueClear,F=s.dataErrorQueueGet
var D=e("../common/util.js").plural
var u=e("../common/vmath.js").vec4
var N
var O
Z.BUILD_ERRORS=Z.BUILD_ERRORS||9900
function onGBState(e){N=e
i()}function onServerError(e){O=e
i()}function onDataErrors(e){for(var t=0;t<e.length;++t)l(e[t])
i()}var L=4
var U=u(0,0,0,1)
var M=n.styleColored(null,4280295679)
var j=n.styleColored(null,3722305023)
var B=n.styleColored(null,14540287)
var G=n.styleColored(null,539033599)
var z=u(1,1,1,1)
var H=/\u001b\[(?:[0-9;]*)[0-9A-ORZcf-nqry=><]/g
var V
function buildUITick(){var e=F()
if(!N&&!O&&!e.length)return
var t=A.x0()+L
var r=A.y0()+L
var a=Z.BUILD_ERRORS
var i=.75*A.w()
var n=C.font,o=C.title_font,s=C.font_height
var l=t
var u=r
var f=((null==N?void 0:N.error_count)||0)+(O?1:0)+e.length
var c=(null==N?void 0:N.warning_count)||0
o.drawSizedAligned(M,l,u,a,s,n.ALIGN.HCENTERFIT,i,0,f+" "+D(f,"error")+", "+c+" "+D(c,"warning"))
u+=s+1
C.drawLine(t+.3*i,u,t+.7*i,u,a,.5,true,z)
u+=L
if(!V)V=k({z:a,background_color:null,auto_hide:true})
var d=A.y1()-L-u
var v=u
V.begin({x:l,y:u,w:i,h:d})
var p=i-L-V.barWidth()
u=0
a=Z.UI
function printLine(e,t){t=t.replace(H,"")
u+=n.drawSizedWrapped(j,l,u,a,p,0,s,e+": "+t)}if(N)for(var h in N.tasks){var _=N.tasks[h]
l=0
n.drawSizedAligned(B,l,u,a,s,n.ALIGN.HLEFT,p,0,h+":")
u+=s
l+=s
var m=false
for(var g in _.jobs){var y=_.jobs[g]
var w=y.warnings,b=y.errors
if("all"!==g){if(g.startsWith("source:"))g=g.slice(7)
u+=n.drawSizedWrapped(G,l,u,a,p,0,s,g)}if(w)for(var x=0;x<w.length;++x){printLine("Warning",w[x])
m=true}if(b)for(var S=0;S<b.length;++S){printLine("Error",b[S])
m=true}}if(!m&&_.err)printLine("Error",_.err)
u+=L}if(O){l=0
n.drawSizedAligned(B,l,u,a,s,n.ALIGN.HLEFT,p,0,"Server Error:")
u+=s
l+=s
printLine("Server error",O)}for(var E=0;E<e.length;++E){var T=e[E].msg
l=0
printLine("Data error",T)}V.end(u)
u=v+R(d,u)
if(C.buttonText({x:t+i-I(),y:r,z:Z.BUILD_ERRORS+1,w:I(),text:"X"})){O=N=null
P()}C.panel({x:t-L,y:r-L,z:Z.BUILD_ERRORS-1,w:i+2*L,h:u-r+2*L,color:U})}function buildUIStartup(){if(o.client&&a.DEBUG){o.client.onMsg("gbstate",onGBState)
o.client.onMsg("server_error",onServerError)
o.client.onMsg("data_errors",onDataErrors)
o.subs.on("connect",function(){var e=o.client.pak("gbstate_enable")
e.writeBool(true)
e.send()})
a.addTickFunc(buildUITick)}}},{"../common/data_error.js":79,"../common/util.js":92,"../common/vmath.js":94,"./camera2d.js":13,"./engine.js":19,"./font.js":25,"./net.js":41,"./scroll_area.js":53,"./ui.js":67}],13:[function(e,t,l){"use strict"
l.calcMap=calcMap
l.canvasToVirtual=canvasToVirtual
l.clipTestRect=clipTestRect
l.data=void 0
l.domDeltaToVirtual=domDeltaToVirtual
l.domToCanvasRatio=domToCanvasRatio
l.domToVirtual=domToVirtual
l.h=h
l.hReal=hReal
l.htmlPos=htmlPos
l.htmlSize=htmlSize
l.pop=pop
l.push=push
l.render_viewport_w=l.render_viewport_h=l.render_offset_y_bottom=l.render_offset_x=void 0
l.safeAreaPadding=safeAreaPadding
l.screenAspect=screenAspect
l.set=set
l.setAspectFixed=setAspectFixed
l.setAspectFixed2=setAspectFixed2
l.setDOMFontPixelScale=setDOMFontPixelScale
l.setDOMMapped=setDOMMapped
l.setInputClipping=setInputClipping
l.setNormalized=setNormalized
l.setSafeAreaPadding=setSafeAreaPadding
l.setScreen=setScreen
l.shift=shift
l.startup=startup
l.tickCamera2D=tickCamera2D
l.transformX=transformX
l.transformY=transformY
l.virtualToCanvas=virtualToCanvas
l.virtualToDom=virtualToDom
l.virtualToDomPosParam=virtualToDomPosParam
l.virtualToFontSize=virtualToFontSize
l.w=w
l.wReal=wReal
l.x0=x0
l.x0Real=x0Real
l.x1=x1
l.x1Real=x1Real
l.xScale=xScale
l.y0=y0
l.y0Real=y0Real
l.y1=y1
l.y1Real=y1Real
l.yScale=yScale
l.zoom=zoom
var s=e("assert")
var _=e("./engine.js")
var r=Math.max,m=Math.round
var u=new Float32Array(4)
var v=new Float32Array(13)
l.data=v
var f
var c
var g
var y
var d
l.render_viewport_w=d
var p
l.render_viewport_h=p
var b
l.render_offset_x=b
var x
var S
l.render_offset_y_bottom=S
function reapply(){if(g){v[4]=g/(v[2]-v[0])
v[5]=y/(v[3]-v[1])
v[7]=(v[2]-v[0])/d
v[8]=(v[3]-v[1])/p}else{v[4]=f/(v[2]-v[0])
v[5]=c/(v[3]-v[1])}}function virtualToCanvas(e,t){e[0]=(t[0]-v[0])*v[4]
e[1]=(t[1]-v[1])*v[5]}function transformX(e){return(e-v[0])*v[4]}function transformY(e){return(e-v[1])*v[5]}function canvasToVirtual(e,t){e[0]=t[0]/v[4]+v[0]
e[1]=t[1]/v[5]+v[1]}function safeScreenWidth(){return r(1,f-u[0]-u[1])}function safeScreenHeight(){return r(1,c-u[2]-u[3])}function set(e,t,r,a,i){s(isFinite(e))
s(isFinite(t))
s(isFinite(r))
s(isFinite(a))
if(i||g){v[9]=v[0]=e
v[10]=v[1]=t
v[11]=v[2]=r
v[12]=v[3]=a}else{v[9]=e
v[10]=t
v[11]=r
v[12]=a
var n=(r-e)/safeScreenWidth()
var o=(a-t)/safeScreenHeight()
v[0]=e-u[0]*n
v[1]=t-u[2]*o
v[2]=r+u[1]*n
v[3]=a+u[3]*o}reapply()}function setSafeAreaPadding(e,t,r,a){u[0]=m(e)
u[1]=m(t)
u[2]=m(r)
u[3]=m(a)}function safeAreaPadding(){return u}var a=[]
function push(){a.push(v.slice(0))}function pop(){var e=a.pop()
for(var t=0;t<e.length;++t)v[t]=e[t]
reapply()}function domToCanvasRatio(){return v[6]}function screenAspect(){return safeScreenWidth()/safeScreenHeight()}function setAspectFixed(e,t){var r=g?1:_.pixel_aspect
var a=t/r/e
var i
var n
var o
if(g){n=g
o=y}else{n=safeScreenWidth()
o=safeScreenHeight()}if(a>(i=o/n)){var s=t/r/i
var l=n/s
var u=s-e
var f=m(u*l/2)/l
set(-f,0,e+(u-f),t,false)}else{var c=e*r*i
var d=o/c
var v=c-t
var p=m(v*d/2)/d
set(0,-p,e,t+(v-p),false)}}function setAspectFixed2(e,t){var r=g?1:_.pixel_aspect
var a=t/r/e
var i
if(g)i=y/g
else i=1/screenAspect()
if(a>i)set(0,0,e+(t/r/i-e),t,false)
else set(0,0,e,t+(e*r*i-t),false)}function zoom(e,t,r){var a=1/r
set(e-(e-v[0])*a,t-(t-v[1])*a,e+(v[2]-e)*a,t+(v[3]-t)*a,true)}function shift(e,t){set(v[0]+e,v[1]+t,v[2]+e,v[3]+t,true)}function calcMap(e,t,r){var a=v[11]-v[9]
var i=v[12]-v[10]
var n=(t[0]-v[9])/a
var o=(t[1]-v[10])/i
var s=(t[2]-v[9])/a
var l=(t[3]-v[10])/i
var u=s-n
var f=l-o
var c=r[2]-r[0]
var d=r[3]-r[1]
e[0]=r[0]-c/u*n
e[1]=r[1]-d/f*o
e[2]=r[2]+c/u*(1-s)
e[3]=r[3]+d/f*(1-l)
return e}function setNormalized(){set(0,0,1,1,true)}function setScreen(e){if(g)set(0,0,g,y)
else if(e)set(0,0,safeScreenWidth(),safeScreenHeight())
else set(0,0,safeScreenWidth()/_.dom_to_canvas_ratio,safeScreenHeight()/_.dom_to_canvas_ratio)}function setDOMMapped(){if(g)set(b,x,f-b,c-x,true)
else set(0,0,f/_.dom_to_canvas_ratio,c/_.dom_to_canvas_ratio,true)}function x0Real(){return v[0]}function y0Real(){return v[1]}function x1Real(){return v[2]}function y1Real(){return v[3]}function wReal(){return v[2]-v[0]}function hReal(){return v[3]-v[1]}function x0(){return v[9]}function y0(){return v[10]}function x1(){return v[11]}function y1(){return v[12]}function w(){return v[11]-v[9]}function h(){return v[12]-v[10]}function xScale(){return v[4]}function yScale(){return v[5]}function htmlPos(e,t){if(g)return[((e-v[0])/v[7]+b)/f*100,((t-v[1])/v[8]+x)/c*100]
else return[100*(e-v[0])/(v[2]-v[0]),100*(t-v[1])/(v[3]-v[1])]}function htmlSize(e,t){if(g)return[100*e/v[7]/f,100*t/v[8]/c]
else return[100*e/(v[2]-v[0]),100*t/(v[3]-v[1])]}var i
function setInputClipping(e){i=e}function domToVirtual(e,t){var r=true
if(i)if(t[0]<i[0]||t[0]>i[0]+i[2]||t[1]<i[1]||t[1]>i[1]+i[3])r=false
if(g){e[0]=(t[0]*v[6]-b)*v[7]+v[0]
e[1]=(t[1]*v[6]-x)*v[8]+v[1]}else{e[0]=t[0]*v[6]/v[4]+v[0]
e[1]=t[1]*v[6]/v[5]+v[1]}return r}function domDeltaToVirtual(e,t){if(g){e[0]=t[0]*v[6]*v[7]
e[1]=t[1]*v[6]*v[8]}else{e[0]=t[0]*v[6]/v[4]
e[1]=t[1]*v[6]/v[5]}}var n=new Float32Array(4)
function updateVirtualInputClipping(){domToVirtual(n,i)
if(g){n[2]=i[2]*v[6]*v[7]
n[3]=i[3]*v[6]*v[8]}else{n[2]=i[2]*v[6]/v[4]
n[3]=i[3]*v[6]/v[5]}}function virtualToDom(e,t){if(g){e[0]=(b+(t[0]-v[0])/v[7])/v[6]
e[1]=(x+(t[1]-v[1])/v[8])/v[6]}else{e[0]=(t[0]-v[0])*v[4]/v[6]
e[1]=(t[1]-v[1])*v[5]/v[6]}}var o=.84
function setDOMFontPixelScale(e){o=e}function virtualToFontSize(e){if(g)return e/(v[6]*v[8])*o
else return e*v[5]/v[6]*o}function virtualToDomPosParam(e,t){if(g){e.x=(b+(t.x-v[0])/v[7])/v[6]
e.w=t.w/v[7]/v[6]
e.y=(x+(t.y-v[1])/v[8])/v[6]
e.h=t.h/v[8]/v[6]}else{e.x=(t.x-v[0])*v[4]/v[6]
e.w=t.w*v[4]/v[6]
e.y=(t.y-v[1])*v[5]/v[6]
e.h=t.h*v[5]/v[6]}if(i){if(e.x<i[0]){e.w=r(0,e.w-(i[0]-e.x))
e.x=i[0]}if(e.y<i[1]){e.h=r(0,e.h-(i[1]-e.y))
e.y=i[1]}if(e.x>i[0]+i[2])e.w=0
if(e.y>i[1]+i[3])e.h=0}}function clipTestRect(e){if(!i)return true
updateVirtualInputClipping()
var t=n
if(e.x>t[0]+t[2]||e.x+e.w<t[0]||e.y>t[1]+t[3]||e.y+e.h<t[1])return false
if(e.x<t[0]){e.w-=t[0]-e.x
e.x=t[0]}if(e.y<t[1]){e.h-=t[1]-e.y
e.y=t[1]}if(e.x+e.w>t[0]+t[2])e.w=t[0]+t[2]-e.x
if(e.y+e.h>t[1]+t[3])e.h=t[1]+t[3]-e.y
return true}function tickCamera2D(){v[6]=_.dom_to_canvas_ratio
f=_.width
c=_.height
var e=[0,0,f,c]
if(_.render_width){g=_.render_width
y=_.render_height
var t=_.pixel_aspect
var r=y/t/g
var a=safeScreenWidth()
var i=safeScreenHeight()
var n=i/a
if(r>n){var o=(y/n-g*t)/2*i/y
l.render_offset_x=b=u[0]+m(o)
x=u[2]
l.render_offset_y_bottom=S=u[3]
l.render_viewport_w=d=m(a-2*o)
l.render_viewport_h=p=i}else{var s=(g*n-y/t)/2*a/g
l.render_offset_x=b=u[0]
x=u[2]+m(s)
l.render_offset_y_bottom=S=u[3]+m(s)
l.render_viewport_w=d=a
l.render_viewport_h=p=m(i-2*s)}e[2]=g
e[3]=y}else{g=y=0
l.render_offset_x=b=0
x=0
l.render_offset_y_bottom=S=0}reapply()
_.setViewport(e)}function startup(){f=_.width
c=_.height
set(0,0,_.width,_.height)
tickCamera2D()}},{"./engine.js":19,assert:void 0}],14:[function(e,t,r){"use strict"
r.PLATFORM=r.MODE_PRODUCTION=r.MODE_DEVELOPMENT=void 0
r.getAbilityChat=getAbilityChat
r.getAbilityReload=getAbilityReload
r.getAbilityReloadUpdates=getAbilityReloadUpdates
r.platformGetID=platformGetID
r.platformOverrideID=platformOverrideID
r.setAbilityChat=setAbilityChat
r.setAbilityReload=setAbilityReload
r.setAbilityReloadUpdates=setAbilityReloadUpdates
var a=e("assert")
var i=e("../common/platform")
var n=i.platformIsValid
var o=i.platformOverrideParameter
var s=i.platformParameter
a(n(window.conf_platform))
var l=window.conf_platform
var u=r.PLATFORM=l
function platformOverrideID(e){u=e}function platformGetID(){return u}var f=s(l,"devmode")
var c="on"===f||"auto"===f&&Boolean(String(document.location).match(/^https?:\/\/localhost/))
var d=!(r.MODE_DEVELOPMENT=c)
r.MODE_PRODUCTION=d
function getAbilityReload(){return s(platformGetID(),"reload")}function setAbilityReload(e){o("reload",s(platformGetID(),"reload")&&e)}function getAbilityReloadUpdates(){return s(platformGetID(),"reload_updates")}function setAbilityReloadUpdates(e){o("reload_updates",s(platformGetID(),"reload_updates")&&e)}var v=true
function getAbilityChat(){return v}function setAbilityChat(e){v=e}},{"../common/platform":88,assert:void 0}],15:[function(e,t,r){"use strict"
r.cmd_parse=void 0
r.resetSettings=resetSettings
r.safearea=void 0
var a=e("../common/cmd_parse.js")
var i=e("./local_storage.js")
var n=a.create({storage:i})
r.cmd_parse=n
var o=e("./engine.js")
var s=e("./error_report.js").errorReportDetailsString
var l=e("./fetch.js").fetchDelaySet
var u=e("./net.js")
var f=u.netClient,c=u.netDisconnected
var d=e("./shaders.js").SEMANTIC
var v=e("./textures.js").textureGetAll
var p=e("../common/wscommon.js"),h=p.netDelayGet,_=p.netDelaySet
window.cmd=function(e){n.handle(null,e,a.defaultHandler)}
function byteFormat(e){if(e>85e4)return(e/1048576).toFixed(2)+"MB"
if(e>850)return(e/1024).toFixed(2)+"KB"
return e+"B"}n.register({cmd:"texmem",help:"Displays texture memory usage",func:function func(e,t){var r=v()
var a=Object.keys(r);(a=a.filter(function(e){return r[e].gpu_mem>1024})).sort(function(e,t){return r[e].gpu_mem-r[t].gpu_mem})
t(null,a.map(function(e){return byteFormat(r[e].gpu_mem)+" "+e}).join("\n"))}})
n.register({cmd:"gpumem",help:"Displays GPU memory usage summary",func:function func(e,t){var r=o.perf_state.gpu_mem
t(null,byteFormat(r.geom)+" Geo\n"+byteFormat(r.tex)+" Tex\n"+byteFormat(r.geom+r.tex)+" Total")}})
function validDefine(e){if(d[e])return false
return e.match(/^[A-Z][A-Z0-9_]*$/)}n.register({cmd:"d",help:"Toggles a debug define",func:function func(e,t){if(!(e=e.toUpperCase().trim()))if(o.definesClearAll())return void t(null,"All debug defines cleared")
else return void t(null,"No debug defines active")
if(!validDefine(e))return void t("Invalid define specified")
o.defines[e]=!o.defines[e]
t(null,"D="+e+" now "+(o.defines[e]?"SET":"unset"))
o.definesChanged()}})
n.register({cmd:"renderer",help:"Displays current renderer",func:function func(e,t){t(null,"Renderer=WebGL"+(o.webgl2?2:1))}})
function cmdDesc(e){return"/"+e.cmd+" - "+e.help}n.register({cmd:"help",help:"Searches commands",func:function func(e,t){var r=n.autoComplete("",this&&this.access)
if(e){var a=n.canonical(e)
var i=e.toLowerCase()
r=r.filter(function(e){return-1!==e.cname.indexOf(a)||-1!==e.help.toLowerCase().indexOf(i)})}if(!r.length)return void t(null,'No commands found matching "'+e+'"')
t(null,r.map(cmdDesc).join("\n"))}})
var m=[-1,-1,-1,-1]
r.safearea=m
n.registerValue("safe_area",{label:"Safe Area",type:n.TYPE_STRING,usage:"Safe Area value: Use -1 for auto based on browser environment,\nor 0-25 for percentage of screen size\n  Usage: /safe_area [value]\n  Usage: /safe_area horizontal,vertical\n  Usage: /safe_area left,right,top,bottom",default_value:"-1",get:function get(){return-1===m[0]?"-1 (auto)":m.join(",")},set:function set(e){var t=(e=String(e)).split(",")
if(e&&1===t.length)m[0]=m[1]=m[2]=m[3]=Number(e)
else if(2===t.length){m[0]=m[1]=Number(t[0])
m[2]=m[3]=Number(t[1])}else if(4===t.length)for(var r=0;r<4;++r)m[r]=Number(t[r])
for(var a=0;a<4;++a)if(!isFinite(m[a]))m[a]=-1},store:true})
n.register({cmd:"webgl2_auto",help:"Resets WebGL2 auto-detection",func:function func(e,t){if(!i.getJSON("webgl2_disable"))return t(null,"WebGL2 is already being auto-detected")
i.setJSON("webgl2_disable",void 0)
return t(null,"WebGL2 was disabled, will attempt to use it again on the next load")}})
n.registerValue("postprocessing",{label:"Postprocessing",type:n.TYPE_INT,help:"Enables/disables postprocessing",get:function get(){return o.postprocessing?1:0},set:function set(e){return o.postprocessingAllow(e)}})
n.register({cmd:"net_delay",help:"Sets/shows network delay values",usage:"$HELP\n/net_delay time_base time_rand",func:function func(e,t){if(e){var r=e.split(" ")
_(Number(r[0]),Number(r[1])||0)
l(Number(r[0]),Number(r[1])||0)}var a=h()
t(null,"Client NetDelay: "+a[0]+"+"+a[1])}})
n.register({cmd:"error_report_details",help:"Shows details submitted with any error report",access_show:["hidden"],func:function func(e,t){t(null,s())}})
n.register({cmd:"disconnect",help:"Forcibly disconnect WebSocket connection (Note: will auto-reconnect)",prefix_usage_with_help:true,usage:"/disconnect [disconnnect_duration [disconnect_delay]]",func:function func(e,t){var r
var a=null==(r=f())?void 0:r.socket
if(!a)return void t("No socket")
if(c())return void t("Not connected")
var i=e.split(" ").map(Number)
var n=isFinite(i[0])?i[0]:0
var o=isFinite(i[1])?i[1]:0
f().retry_extra_delay=n
if(o)setTimeout(a.close.bind(a),o)
else a.close()
t()}})
function resetSettings(){var e=n.resetSettings()
if(o.definesClearAll())e.push("Debug defines cleared")
if(!e.length)return null
e.push("Please restart the app or reload to page for the new settings to take effect.")
return e.join("\n")}n.register({cmd:"reset_settings",help:"Resets all settings and options to their defaults (Note: requires an app restart)",func:function func(e,t){t(null,resetSettings()||"No stored settings to reset")}})},{"../common/cmd_parse.js":77,"../common/wscommon.js":96,"./engine.js":19,"./error_report.js":21,"./fetch.js":23,"./local_storage.js":37,"./net.js":41,"./shaders.js":56,"./textures.js":65}],16:[function(e,t,r){"use strict"
r.FACE_XYZ=r.FACE_XY=r.FACE_NONE=r.FACE_FRUSTUM=r.FACE_DEFAULT=r.FACE_CUSTOM=r.FACE_CAMERA=r.BUCKET_OPAQUE=r.BUCKET_DECAL=r.BUCKET_ALPHA=void 0
r.dynGeomAlloc=dynGeomAlloc
r.dynGeomDrawAlpha=dynGeomDrawAlpha
r.dynGeomDrawOpaque=dynGeomDrawOpaque
r.dynGeomLookAt=dynGeomLookAt
r.dynGeomQueueSprite=dynGeomQueueSprite
r.dynGeomSpriteSetup=dynGeomSpriteSetup
r.sprite3d_vshader=void 0
var a=1
r.BUCKET_OPAQUE=a
var i=2
r.BUCKET_DECAL=i
var u=3
r.BUCKET_ALPHA=u
var n=0
r.FACE_NONE=n
var f=1
r.FACE_XY=f
var c=2
r.FACE_XYZ=c
var o=4
r.FACE_FRUSTUM=o
var d=8
r.FACE_CAMERA=d
var v=f|o
r.FACE_DEFAULT=v
var p=16
r.FACE_CUSTOM=p
var h=12
var _=e("assert")
var s=e("gl-mat4/lookAt")
var l=e("../common/util.js"),m=l.log2,g=l.nextHighestPowerOfTwo
var y=e("../common/vmath.js"),w=y.mat4,x=y.v3addScale,b=y.v3copy,S=y.v3cross,E=y.v3iNormalize,T=y.v3scale,A=y.v3sub,R=y.vec3,k=y.zero_vec
var C=e("./cmds.js").cmd_parse
var I=e("./engine.js")
var P=I.engineStartupFunc,F=I.setGlobalMatrices
var D=e("./geom.js")
var N=Math.ceil,O=Math.max,L=Math.min
var U=e("./settings.js")
var M=e("./shaders.js"),j=M.SEMANTIC,B=M.shaderCreate,G=M.shadersBind,z=M.shadersPrelink
var H=e("./sprites.js")
var V=H.BLEND_ALPHA,W=H.blendModeReset,q=H.blendModeSet
var Y=e("./textures.js"),K=Y.textureCmpArray,Z=Y.textureBindArray
U.register({gl_polygon_offset_a:{default_value:.1,type:C.TYPE_FLOAT,range:[0,100],access_show:["sysadmin"]},gl_polygon_offset_b:{default_value:4,type:C.TYPE_FLOAT,range:[0,100],access_show:["sysadmin"]}})
var J
var X=w()
var Q
var $=0
var ee
var te
r.sprite3d_vshader=te
var re={}
var ae=[null,[],[],[]]
var ie=new Uint16Array([1,3,0,1,2,3])
var ne=new Uint16Array([1,3,0,1,2,3,0,3,1,3,2,1])
var oe=[]
function DynGeomData(){this.num_tris=0
this.tris=null
this.tri_pool_idx=0
this.num_verts=0
this.verts=null
this.vert_pool_idx=0
this.texs=null
this.shader=null
this.vshader=null
this.shader_params=null
this.blend=0
this.sort_z=0
this.uid=0}function dynGeomAlloc(){var e
if(oe.length)e=oe.pop()
else e=new DynGeomData
return e}DynGeomData.prototype.queue=function(e,t){_(isFinite(t))
_(this.texs)
_(this.shader)
_(this.vshader)
this.sort_z=t
this.uid=++$;++Q.dyn
ae[e].push(this)}
var se=new Array(15).join(",").split(",").map(function(){return[]})
se[0]=null
var le=new Array(15).join(",").split(",").map(function(){return[]})
le[0]=null
var ue=4096
var fe=se.map(function(e,t){return L(ue,1<<14-t)})
var ce=se.map(function(e,t){return L(ue,1<<17-t)})
DynGeomData.prototype.allocVerts=function(e){this.num_verts=e
var t=m(this.num_verts)
_(t>0)
this.vert_pool_idx=t
var r=se[this.vert_pool_idx]
if(r&&r.length)this.verts=r.pop()
else{var a=r?g(e):e
this.verts=new Float32Array(h*a)}}
DynGeomData.prototype.allocTris=function(e){this.num_tris=e
var t=m(this.num_tris)
_(t>0)
this.tri_pool_idx=t
var r=le[this.tri_pool_idx]
if(r&&r.length)this.tris=r.pop()
else{var a=r?g(e):e
this.tris=new Uint16Array(3*a)}}
DynGeomData.prototype.alloc=function(e,t){this.allocVerts(e)
this.allocTris(t)}
DynGeomData.prototype.allocQuad=function(e){this.allocVerts(4)
this.tris=e?ne:ie
this.num_tris=this.tris.length/3
this.tri_pool_idx=0}
DynGeomData.prototype.dispose=function(){var e=se[this.vert_pool_idx]
if(e&&e.length<fe[this.vert_pool_idx])e.push(this.verts)
this.verts=null
if((e=le[this.tri_pool_idx])&&e.length<ce[this.tri_pool_idx])e.push(this.tris)
this.tris=null
oe.push(this)}
var de=R()
var ve=R()
var pe=R()
var he=R()
var _e=R()
var me=R()
var ge=false
function dynGeomLookAt(e,t,r){ge=true
b(he,e)
b(ve,r)
T(de,ve,-1)
A(me,t,he)
E(me)
S(_e,me,ve)
E(_e)
S(pe,me,_e)
E(pe)
s(X,he,t,ve)
F(X)}var ye=R()
var we=R(1,0,0)
var be=R()
function dynGeomSpriteSetup(e){_(ge)
var t=e.pos,r=e.shader,a=e.shader_params,i=e.bucket,n=e.facing,o=e.vshader
i=i||u
r=r||ee
o=o||te
a=a||null
var s
var l
if((n=void 0===n?v:n)===p){s=e.face_right
l=e.face_down}else if(n&f){s=_e
l=de}else if(n&c){s=_e
l=pe}else{s=we
l=de}if(s===_e&&n&d){A(ye,t,he)
S(be,ye,ve)
s=E(be)}return{bucket:i,my_right:s,my_down:l,sort_z:J[2]*t[0]+J[6]*t[1]+J[10]*t[2]+J[14],shader:r,vshader:o,shader_params:a}}var xe=R()
function dynGeomQueueSprite(e,t){var r=dynGeomSpriteSetup(t),a=r.bucket,i=r.my_right,n=r.my_down,o=r.sort_z,s=r.shader,l=r.vshader,u=r.shader_params
var f=t.pos,c=t.offs,d=t.size,v=t.uvs,p=t.blend,h=t.color,_=t.doublesided
var m=dynGeomAlloc()
h=h||e.color
c=c||k
m.shader=s
m.vshader=l
m.shader_params=u
m.texs=e.texs
m.blend=p||V
_=_||false
var g=e.origin
var y=d[0],w=d[1]
x(xe,f,i,-g[0]*y+c[0])
x(xe,xe,n,-g[1]*w+c[1])
m.allocQuad(_)
var b=m.verts
b[0]=xe[0]
b[1]=xe[1]
b[2]=xe[2]
b[4]=h[0]
b[5]=h[1]
b[6]=h[2]
b[7]=h[3]
b[8]=v[0]
b[9]=v[1]
b[12]=xe[0]+n[0]*w
b[13]=xe[1]+n[1]*w
b[14]=xe[2]+n[2]*w
b[16]=h[0]
b[17]=h[1]
b[18]=h[2]
b[19]=h[3]
b[20]=v[0]
b[21]=v[3]
b[24]=xe[0]+i[0]*y+n[0]*w
b[25]=xe[1]+i[1]*y+n[1]*w
b[26]=xe[2]+i[2]*y+n[2]*w
b[28]=h[0]
b[29]=h[1]
b[30]=h[2]
b[31]=h[3]
b[32]=v[2]
b[33]=v[3]
b[36]=xe[0]+i[0]*y
b[37]=xe[1]+i[1]*y
b[38]=xe[2]+i[2]*y
b[40]=h[0]
b[41]=h[1]
b[42]=h[2]
b[43]=h[3]
b[44]=v[2]
b[45]=v[1]
m.queue(a,o)}var Se
var Ee
var Te
var Ae=0
var Re
var ke=0
var Ce=0
var Ie
var Pe
var Fe
var De=65532*h
var Ne=[]
function commit(){if(ke===Ce)return
Ne.push({state:Se,start:Ce,end:ke})
Ce=ke}function commitAndFlush(){commit()
if(!Ne.length)return
_(ke)
Ee.updateIndex(Re,ke)
var e=Ae/h
Ee.update(Te,e)
Ee.bind()
Q.tris+=ke/3
Q.verts+=e
for(var t=0;t<Ne.length;++t){var r=Ne[t]
var a=r.state,i=r.start,n=r.end
if(Pe!==a.shader||Fe!==a.vshader||a.shader_params){G(a.vshader,a.shader,a.shader_params||re)
Pe=a.shader
Fe=a.vshader}if(Ie)q(a.blend)
Z(a.texs);++Q.draw_calls_dyn
gl.drawElements(Ee.mode,n-i,gl.UNSIGNED_SHORT,2*i)}Ne.length=0
Ce=ke=Ae=0}function drawSetup(e){Ie=e
Fe=Pe=-1
if(!Ee){Ee=D.create([[j.POSITION,gl.FLOAT,4,false],[j.COLOR,gl.FLOAT,4,false],[j.TEXCOORD,gl.FLOAT,4,false]],[],[],D.TRIANGLES)
Te=new Float32Array(1024)
Re=new Uint16Array(1024)}}function drawElem(e){if(!Se||K(e.texs,Se.texs)||e.shader!==Se.shader||e.vshader!==Se.vshader||e.shader_params!==Se.shader_params||Ie&&e.blend!==Se.blend){commit()
Se=e}var t=e.num_verts*h
if(Ae+t>Te.length){commitAndFlush()
if(Te.length!==De){var r=Te.length/h/3
var a=L(O(t,3*N(1.25*r)*h),De)
Te=new Float32Array(a)}}var i=3*e.num_tris
if(ke+i>Re.length){commitAndFlush()
var n=Re.length/3
var o=O(e.tris.length,3*N(1.25*n))
Re=new Uint16Array(o)}var s=Ae/h
if(e.verts.length===t){Te.set(e.verts,Ae)
Ae+=t}else for(var l=0;l<t;++l)Te[Ae++]=e.verts[l]
for(var u=0;u<i;++u)Re[ke++]=s+e.tris[u]}function finishDraw(){commitAndFlush()
W()}function queueDraw(e,t,r,a){drawSetup(e)
for(var i=r;i<a;++i){var n=t[i]
drawElem(n)
n.dispose()}finishDraw()}function cmpOpaue(e,t){var r=e.vshader.id-t.vshader.id
if(r)return r
if(r=e.shader.id-t.shader.id)return r
if(r=K(e.texs,t.texs))return r
return e.uid-t.uid}function cmpAlpha(e,t){var r=t.sort_z-e.sort_z
if(r)return r
return e.uid-t.uid}function dynGeomDrawOpaque(){profilerStart("dynGeomDrawOpaque")
var e=ae[a]
if(e.length){e.sort(cmpOpaue)
queueDraw(false,e,0,e.length)
e.length=0}if((e=ae[i]).length){e.sort(cmpOpaue)
gl.enable(gl.BLEND)
gl.depthMask(false)
gl.enable(gl.POLYGON_OFFSET_FILL)
gl.polygonOffset(-U.gl_polygon_offset_a,-U.gl_polygon_offset_b)
queueDraw(true,e,0,e.length)
e.length=0
gl.disable(gl.POLYGON_OFFSET_FILL)
gl.depthMask(true)
gl.disable(gl.BLEND)}profilerStop("dynGeomDrawOpaque")}function dynGeomDrawAlpha(){profilerStart("dynGeomDrawAlpha")
_(!ae[a].length)
_(!ae[i].length)
var e=ae[u]
if(e.length){e.sort(cmpAlpha)
queueDraw(true,e,0,e.length)
e.length=0}profilerStop("dynGeomDrawAlpha")}function dynGeomStartup(){Q=D.stats
r.sprite3d_vshader=te=B("shaders/sprite3d.vp")
ee=H.sprite_fshader
z(te,ee)
J=I.mat_vp}P(dynGeomStartup)},{"../common/util.js":92,"../common/vmath.js":94,"./cmds.js":15,"./engine.js":19,"./geom.js":27,"./settings.js":54,"./shaders.js":56,"./sprites.js":63,"./textures.js":65,assert:void 0,"gl-mat4/lookAt":void 0}],17:[function(e,t,r){"use strict"
r.editBox=editBox
r.editBoxAnyActive=editBoxAnyActive
r.editBoxCreate=editBoxCreate
r.editBoxTick=editBoxTick
r.create=editBoxCreate
var n=e("assert")
var a=e("../common/util")
var o=a.clamp
var _=a.trimEnd
var J=e("../common/verify")
var X=e("../common/vmath").v2same
var Q=e("./camera2d")
var $=e("./engine")
var i=e("./input")
var ee=i.KEYS
var te=i.eatAllKeyboardInput
var re=i.inputClick
var ae=i.keyDownEdge
var s=i.keyUpEdge
var ie=i.mouseConsumeClicks
var l=i.pointerLockEnter
var u=i.pointerLockExit
var f=i.pointerLocked
var ne=e("./localization").getStringIfLocalizable
var c=e("./spot")
var d=c.spotFocusCheck
var v=c.spotFocusSteal
var oe=c.spotSuppressKBNav
var se=c.spotUnfocus
var p=c.spotlog
var h=e("./ui")
var le=h.drawLine
var ue=h.drawRect
var m=h.getUIElemData
var g=h.uiButtonWidth
var fe=h.uiGetDOMElem
var ce=h.uiGetDOMTabIndex
var de=h.uiGetFont
var y=h.uiTextHeight
var ve=false
var w
var b
var pe=[]
var x=[]
function editBoxTick(){var e=$.frame_index-1
for(var t=0;t<x.length;++t){var r=x[t]
if(r.last_frame<e)r.unrun()}x=pe
pe=[]}function setActive(e){w=e
b=$.frame_index}function editBoxAnyActive(){return w&&b>=$.frame_index-1}function formHook(e){e.preventDefault()
if(!editBoxAnyActive())return
w.submitted=true
w.updateText()
if(w.pointer_lock&&!w.text)l("edit_box_submit")}function charIdxToXY(e,t){t=o(t,0,e.length)
var r=e.split("\n")
var a=0
while(a<r.length){var i=r[a]
if(t<=i.length)return[t,a]
t-=i.length
n(t>0)
t--
a++}J(false)
return[0,a]}var S=0
var E=function(){function GlovUIEditBox(e){this.key="eb"+ ++S
this.x=0
this.y=0
this.z=Z.UI
this.w=g()
this.type="text"
this.font_height=y()
this.text=""
this.placeholder=""
this.max_len=0
this.zindex=null
this.uppercase=false
this.initial_focus=false
this.onetime_focus=false
this.auto_unfocus=false
this.focus_steal=false
this.initial_select=false
this.spellcheck=true
this.esc_clears=true
this.esc_unfocuses=true
this.multiline=0
this.enforce_multiline=true
this.suppress_up_down=false
this.autocomplete=false
this.sticky_focus=true
this.canvas_render=null
this.applyParams(e)
n.equal(typeof this.text,"string")
this.last_autocomplete=null
this.is_focused=false
this.elem=null
this.input=null
this.submitted=false
this.pointer_lock=false
this.last_frame=0
this.out={}
this.last_valid_state={sel_start:0,sel_end:0}
this.last_tab_index=-1
this.last_font_size=""
this.had_overflow=false}var e=GlovUIEditBox.prototype
e.applyParams=function applyParams(e){if(!e)return
for(var t in e)this[t]=e[t]
if(void 0===this.text)this.text=""
this.h=this.font_height}
e.getSelection=function getSelection(){return[charIdxToXY(this.text,this.input.selectionStart),charIdxToXY(this.text,this.input.selectionEnd)]}
e.updateText=function updateText(){var e=this.input
var t=e.value
if(t===this.text){this.last_valid_state.sel_start=e.selectionStart
this.last_valid_state.sel_end=e.selectionEnd
return}var r=this.multiline,a=this.enforce_multiline,i=this.max_len
var n=true
if(a&&r&&t.split("\n").length>r)if(_(t).split("\n").length<=r){while(t.split("\n").length>r)if(t[t.length-1].match(/\s/))t=t.slice(0,-1)
if(this.text===t)n=false
else{var o=e.selectionStart
var s=e.selectionEnd
e.value=t
e.selectionStart=o
e.selectionEnd=s}}else n=false
if(i>0){var l=r?t.split("\n"):[t]
for(var u=0;u<l.length;++u){var f=l[u]
if(f.length>i)if(_(f).length<=i){var c=l.slice(0,u+1).join("\n").length
l[u]=_(f)
var d=l.slice(0,u+1).join("\n").length
t=l.join("\n")
var v=e.selectionStart
var p=e.selectionEnd
var h=c-d
if(v>c)v-=h
else if(v>d)v=d
if(p>=c)p-=h
else if(p>d)p=d
e.value=t
e.selectionStart=v
e.selectionEnd=p}else n=false}}if(!n){this.had_overflow=true
e.value=this.text
e.selectionStart=this.last_valid_state.sel_start
e.selectionEnd=this.last_valid_state.sel_end}else{this.text=t
this.last_valid_state.sel_start=e.selectionStart
this.last_valid_state.sel_end=e.selectionEnd}}
e.getText=function getText(){return this.text}
e.hadOverflow=function hadOverflow(){var e=this.had_overflow
this.had_overflow=false
return e}
e.setText=function setText(e){e=String(e)
if(this.input&&this.input.value!==e)this.input.value=e
this.text=e}
e.focus=function focus(){if(this.input){this.input.focus()
setActive(this)}else this.onetime_focus=true
v(this)
this.is_focused=true
if(this.pointer_lock&&f())u()}
e.unfocus=function unfocus(){se()}
e.isFocused=function isFocused(){return this.is_focused}
e.updateFocus=function updateFocus(e){var t=this.is_focused
var r=d(this)
var a=r.focused
var i=this.input&&document.activeElement===this.input
if(t!==a){if(a&&!i&&this.input){p("GLOV focused, DOM not, focusing",this)
this.input.focus()}if(!a&&i){p("DOM focused, GLOV not, and changed, blurring",this)
this.input.blur()}}else if(i&&!a){p("DOM focused, GLOV not, stealing",this)
v(this)
a=true}else if(!i&&a)if(e){this.onetime_focus=true
p("GLOV focused, DOM not, new edit box, focusing",this)}else if(document.activeElement===$.canvas||document.activeElement===this.postspan){p("GLOV focused, DOM canvas focused, unfocusing",this)
se()}if(a){setActive(this)
var n=this.pointer_lock&&!this.text?{in_event_cb:l}:null
if((this.esc_clears||this.esc_unfocuses)&&s(ee.ESC,n))if(this.text&&this.esc_clears)this.setText("")
else{se()
if(this.input)this.input.blur()
a=false
this.canceled=true}}this.is_focused=a
return r}
e.run=function run(e){var t=this
this.applyParams(e)
var r=this.canvas_render,a=this.font_height,i=this.multiline,n=this.enforce_multiline,o=this.max_len
if(this.focus_steal){this.focus_steal=false
this.focus()}var s=false
if(!J(this.last_frame!==$.frame_index))return null
if(this.last_frame!==$.frame_index-1){this.submitted=false
s=true}this.last_frame=$.frame_index
this.canceled=false
var l=this.updateFocus(s),u=l.allow_focus,f=l.focused
if(f)oe(true,Boolean(i||this.suppress_up_down))
pe.push(this)
var c=u&&fe(this.elem,true)
if(c!==this.elem){this.last_tab_index=-1
this.last_font_size=""
if(c){if(!ve){ve=true
var d=document.getElementById("dynform")
if(d)d.addEventListener("submit",formHook,true)}c.textContent=""
var v=document.createElement(i?"textarea":"input")
var p=[]
if(r)p.push("canvas_render")
if(i&&o)p.push("fixed")
v.className=p.join(" ")
v.setAttribute("type",this.type)
v.setAttribute("placeholder",ne(this.placeholder))
if(o)if(i)v.setAttribute("cols",o)
else v.setAttribute("maxLength",o)
if(i)v.setAttribute("rows",i)
c.appendChild(v)
var h=document.createElement("span")
this.postspan=h
c.appendChild(h)
v.value=this.text
if(this.uppercase)v.style["text-transform"]="uppercase"
this.input=v
if(this.initial_focus||this.onetime_focus){v.focus()
setActive(this)
this.onetime_focus=false}if(this.initial_select)v.select()
if(i&&n||o){var _=function onChange(e){t.updateText()
return true}
v.addEventListener("keyup",_)
v.addEventListener("keydown",_)
v.addEventListener("change",_)}}else this.input=null
this.last_autocomplete=null
this.submitted=false
this.elem=c}else if(this.input)this.updateText()
if(c){var m=Q.htmlPos(this.x,this.y)
if(!this.spellcheck)c.spellcheck=false
c.style.left=m[0]+"%"
c.style.top=m[1]+"%"
var g=Q.htmlSize(this.w,0)
c.style.width=g[0]+"%"
var y=Q.virtualToFontSize(a).toFixed(8)+"px"
if(y!==this.last_font_size){this.last_font_size=y
var w=Q.virtualToFontSize(a)
var b=Math.floor(w)
var x=w/b
c.style.fontSize=b+"px"
var S="translate(-50%, -50%)\n                       scale("+x+")\n                       translate(50%, 50%)"
this.input.style.width=(1/x*100).toFixed(8)+"%"
c.style.transform=S}if(this.zindex)c.style["z-index"]=this.zindex
if(this.last_autocomplete!==this.autocomplete){this.last_autocomplete=this.autocomplete
this.input.setAttribute("autocomplete",this.autocomplete||"auto_off_"+Math.random())}var E=ce()
var T=ce()
if(E!==this.last_tab_index){this.last_tab_index=E
this.input.setAttribute("tabindex",E)
this.postspan.setAttribute("tabindex",T)}}else{this.last_tab_index=-1
this.last_font_size=""}if(f){if(this.auto_unfocus)if(re({peek:true}))se()
if(ae(ee.ENTER))this.submitted=true
te()}var A=this.text,R=this.x,k=this.y,C=this.z,I=this.w,P=this.h
ie({x:R,y:k,w:I,h:P})
if(r){var F=r.char_width,D=r.char_height,N=r.color_selection,O=r.color_caret,L=r.style_text
var U=de()
var M=A.split("\n")
if(f){var j=this.getSelection()
if(!X(j[0],j[1])){var B=j[0][1]
var G=j[1][1]
for(var z=B;z<=G;++z){var H=M[z]
var V=z===B?j[0][0]:0
var W=z===G?j[1][0]:H.length
ue(R+F*V-1,k+z*D,R+F*W,k+(z+1)*D,C+.75,N)}}else{var q=R+F*j[1][0]-1
le(q,k+D*j[1][1],q,k+D*(j[1][1]+1)-1,C+.5,1,1,O)}}for(var Y=0;Y<M.length;++Y){var K=M[Y]
U.draw({style:L,height:a,x:R,y:k+Y*D,z:C+.8,text:K})}}if(this.submitted){this.submitted=false
return this.SUBMIT}if(this.canceled){this.canceled=false
return this.CANCEL}return null}
e.unrun=function unrun(){this.elem=null
this.input=null}
return GlovUIEditBox}()
E.prototype.SUBMIT="submit"
E.prototype.CANCEL="cancel"
function editBoxCreate(e){return new E(e)}function editBox(e,t){var r=m("edit_box",e,editBoxCreate)
return{result:r.run(e),text:r.getText(),edit_box:r}}},{"../common/util":92,"../common/verify":93,"../common/vmath":94,"./camera2d":13,"./engine":19,"./input":34,"./localization":38,"./spot":60,"./ui":67,assert:void 0}],18:[function(e,t,r){"use strict"
r.additiveMatrix=additiveMatrix
r.applyColorMatrix=applyColorMatrix
r.applyCopy=applyCopy
r.applyGaussianBlur=applyGaussianBlur
r.applyPixelyExpand=applyPixelyExpand
r.brightnessAddMatrix=brightnessAddMatrix
r.brightnessScaleMatrix=brightnessScaleMatrix
r.clearAlpha=clearAlpha
r.contrastMatrix=contrastMatrix
r.effectsIsFinal=effectsIsFinal
r.effectsPassAdd=effectsPassAdd
r.effectsPassConsume=effectsPassConsume
r.effectsQueue=effectsQueue
r.effectsReset=effectsReset
r.effectsStartup=effectsStartup
r.effectsTopOfFrame=effectsTopOfFrame
r.grayScaleMatrix=grayScaleMatrix
r.hueMatrix=hueMatrix
r.negativeMatrix=negativeMatrix
r.registerShader=registerShader
r.saturationMatrix=saturationMatrix
r.sepiaMatrix=sepiaMatrix
function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a))e[a]=r[a]}return e}).apply(this,arguments)}var s=e("assert")
var f=e("./engine.js")
var c=f.renderWidth,d=f.renderHeight
var a=e("./framebuffer.js"),u=a.framebufferEnd,v=a.framebufferStart,i=a.framebufferTopOfFrame
var n=e("./geom.js")
var o=e("./shaders.js"),l=o.SEMANTIC,p=o.shaderCreate,h=o.shadersBind,_=o.shadersPrelink
var m=e("./sprites.js").spriteQueueFn
var g=e("./textures.js"),y=g.textureBindArray,w=g.textureWhite
var b=e("../common/vmath.js"),x=b.vec3,S=b.vec4,E=b.v4set
var T={vp_copy:{vp:"shaders/effects_copy.vp"},copy:{fp:"shaders/effects_copy.fp"},pixely_expand:{fp:"shaders/pixely_expand.fp"},gaussian_blur:{fp:"shaders/effects_gaussian_blur.fp"},color_matrix:{fp:"shaders/effects_color_matrix.fp"}}
function registerShader(e,t){T[e]=t}function getShader(e){var t=T[e]
if(!t.shader)if(t.fp)t.shader=p(t.fp)
else t.shader=p(t.vp)
return t.shader}var A=false
var R=S(2,2,-1,-1)
var k=S(1,1,0,0)
var C={clip_space:R,copy_uv_scale:k}
var I
var P
var F
var D
function startup(){A=true
D=n.create([[l.POSITION,gl.FLOAT,2,false]],new Float32Array([0,0,1,0,1,1,0,1]),null,n.QUADS)
I={clip_space:R,copy_uv_scale:k,colorMatrix:new Float32Array([0,0,0,0,0,0,0,0,0,0,0,0])}
P={clip_space:R,copy_uv_scale:k,sampleRadius:x(1,1,1),Gauss:new Float32Array([.93,.8,.7,.6,.5,.4,.3,.2,.1])}
F={clip_space:R,copy_uv_scale:k,orig_pixel_size:S()}}var N=0
function effectsPassAdd(){++N}function effectsPassConsume(){s(N);--N}function doEffect(e){effectsPassConsume()
e()}function effectsQueue(e,t){effectsPassAdd()
m(e,doEffect.bind(null,t))}function effectsTopOfFrame(){N=0
i()}function effectsReset(){s.equal(N,0)}function effectsIsFinal(){return!N}function grayScaleMatrix(e){e[0]=.2126
e[1]=.2126
e[2]=.2126
e[3]=.7152
e[4]=.7152
e[5]=.7152
e[6]=.0722
e[7]=.0722
e[8]=.0722
e[9]=e[10]=e[11]=0}function sepiaMatrix(e){e[0]=.393
e[1]=.349
e[2]=.272
e[3]=.769
e[4]=.686
e[5]=.534
e[6]=.189
e[7]=.168
e[8]=.131
e[9]=e[10]=e[11]=0}function negativeMatrix(e){e[0]=e[4]=e[8]=-1
e[1]=e[2]=e[3]=e[5]=e[6]=e[7]=0
e[9]=e[10]=e[11]=1}function saturationMatrix(e,t){var r=1-t
e[0]=.2126*r+t
e[1]=.2126*r
e[2]=.2126*r
e[3]=.7152*r
e[4]=.7152*r+t
e[5]=.7152*r
e[6]=.0722*r
e[7]=.0722*r
e[8]=.0722*r+t
e[9]=e[10]=e[11]=0}function hueMatrix(e,t){var r=Math.cos(t)
var a=Math.sin(t)
e[0]=.7874*r+-.3712362230889293*a+.2126
e[1]=-.2126*r+.20611404610069642*a+.2126
e[2]=-.2126*r+-.9485864922785551*a+.2126
e[3]=-.7152*r+-.4962902913954023*a+.7152
e[4]=.2848*r+.08105997779422341*a+.7152
e[5]=-.7152*r+.6584102469838492*a+.7152
e[6]=-.0722*r+.8675265144843316*a+.0722
e[7]=-.0722*r+-.28717402389491986*a+.0722
e[8]=.9278*r+.290176245294706*a+.0722
e[9]=e[10]=e[11]=0}function brightnessAddMatrix(e,t){e[0]=e[4]=e[8]=1
e[1]=e[2]=e[3]=e[5]=e[6]=e[7]=0
e[9]=e[10]=e[11]=t}function brightnessScaleMatrix(e,t){e[0]=e[4]=e[8]=t
e[1]=e[2]=e[3]=e[5]=e[6]=e[7]=0
e[9]=e[10]=e[11]=0}function additiveMatrix(e,t){e[0]=e[4]=e[8]=1
e[1]=e[2]=e[3]=e[5]=e[6]=e[7]=0
e[9]=t[0]
e[10]=t[1]
e[11]=t[2]}function contrastMatrix(e,t){e[0]=e[4]=e[8]=t
e[1]=e[2]=e[3]=e[5]=e[6]=e[7]=0
e[9]=e[10]=e[11]=.5*(1-t)}function applyEffect(e,t,r){var a=false!==e.final&&effectsIsFinal()||e.final
if(e.no_framebuffer){var i=f.viewport
var n=i[2]
var o=i[3]
r=r||o
R[0]=2*(t=t||n)/n
R[1]=2*r/o}else if(e.viewport){var s=e.viewport
var l=s[2]
var u=s[3]
r=r||u
R[0]=2*(t=t||l)/l
R[1]=2*r/u
v({clear:e.clear,clear_all:e.clear_all,clear_color:e.clear_color,viewport:s,final:a,need_depth:e.need_depth_begin})}else{R[0]=2
R[1]=2
t=t||c()
r=r||d()
v({width:t,height:r,final:a,need_depth:e.need_depth_begin})}h(getShader("vp_copy"),getShader(e.shader),e.params)
y(e.texs)
D.draw()}function applyCopy(e){if(!A)startup()
var t=e.source
if(!t)t=u({filter_linear:e.filter_linear,need_depth:e.need_depth})
e.shader=e.shader||"copy"
e.params=e.params?_extends({},C,e.params):C
if(Array.isArray(t))e.texs=t
else e.texs=[t]
applyEffect(e)}function applyPixelyExpand(e){if(!A)startup()
var t=e.source
s(!t)
if(!t)t=u({filter_linear:true})
var r=t.width
var a=t.height
var i=(e.hblur||.25)/r
P.sampleRadius[0]=i
P.sampleRadius[1]=0
P.sampleRadius[2]=1
applyEffect({shader:"gaussian_blur",params:P,texs:[t],final:false},r,a)
var n=u({filter_linear:true})
i=(e.vblur||.75)/a
P.sampleRadius[0]=0
P.sampleRadius[1]=i
P.sampleRadius[2]=1
applyEffect({shader:"gaussian_blur",params:P,texs:[n],final:false},r,a)
var o=u({filter_linear:true})
E(F.orig_pixel_size,t.width,t.height,1/t.width,1/t.height)
applyEffect({shader:"pixely_expand",params:F,texs:[t,n,o],clear:e.clear,clear_all:e.clear_all,clear_color:e.clear_color,viewport:e.viewport})}function applyGaussianBlur(e){if(!A)startup()
var t=u({filter_linear:true})
var r=e.max_size||512
var a=e.min_size||128
var i=t
var n=f.viewport
var o=r
while(o>n[2]||o>n[3])o/=2
while(o>a){applyEffect({shader:e.shader_copy||"copy",params:C,texs:[i],final:false},o,o)
i=u({filter_linear:true})
o/=2}var s=(e.blur||1)/o
P.sampleRadius[0]=s
P.sampleRadius[1]=0
P.sampleRadius[2]=e.glow||1
applyEffect({shader:"gaussian_blur",params:P,texs:[i],final:false},o,o)
var l=u({filter_linear:true})
P.sampleRadius[0]=0
P.sampleRadius[1]=s
P.sampleRadius[2]=e.glow||1
applyEffect({shader:"gaussian_blur",params:P,texs:[l]})
return true}function applyColorMatrix(e){if(!A)startup()
var t=u({filter_linear:true})
var r=e.colorMatrix
var a=I.colorMatrix
a[0]=r[0]
a[1]=r[3]
a[2]=r[6]
a[3]=r[9]
a[4]=r[1]
a[5]=r[4]
a[6]=r[7]
a[7]=r[10]
a[8]=r[2]
a[9]=r[5]
a[10]=r[8]
a[11]=r[11]
applyEffect({shader:"color_matrix",params:I,texs:[t]})
return true}function clearAlpha(){var e=gl.getParameter(gl.DEPTH_TEST)
if(e)gl.disable(gl.DEPTH_TEST)
gl.colorMask(false,false,false,true)
applyCopy({source:w(),no_framebuffer:true})
gl.colorMask(true,true,true,true)
if(e)gl.enable(gl.DEPTH_TEST)}function effectsStartup(e){e.forEach(function(e){_(getShader("vp_copy"),getShader(e))})}},{"../common/vmath.js":94,"./engine.js":19,"./framebuffer.js":26,"./geom.js":27,"./shaders.js":56,"./sprites.js":63,"./textures.js":65,assert:void 0}],19:[function(d,e,g){"use strict"
g.ZNEAR=g.ZFAR=g.PERF_HISTORY_SIZE=g.DEBUG=void 0
g.addTickFunc=addTickFunc
g.addViewSpaceGlobal=addViewSpaceGlobal
g.canvas=g.border_color=g.border_clear_color=g.app_state=g.antialias_unavailable=g.antialias=void 0
g.clearHad3DThisFrame=clearHad3DThisFrame
g.defineCausesReload=defineCausesReload
g.defineOnChange=defineOnChange
g.defines=void 0
g.definesChanged=definesChanged
g.definesClearAll=definesClearAll
g.dirtyRenderSet=dirtyRenderSet
g.disableRender=disableRender
g.dom_to_canvas_ratio=void 0
g.engineStartupFunc=engineStartupFunc
g.fixNatives=fixNatives
g.game_width=g.game_height=g.frame_timestamp=g.frame_index=g.frame_dt=g.fov_y=g.fov_x=g.font=void 0
g.getFrameDt=getFrameDt
g.getFrameDtActual=getFrameDtActual
g.getFrameIndex=getFrameIndex
g.getFrameTimestamp=getFrameTimestamp
g.getViewportPostprocess=getViewportPostprocess
g.glCheckError=glCheckError
g.hrtime=g.hrnow=g.height=g.had_3d_this_frame=g.glov_particles=void 0
g.isInBackground=isInBackground
g.light_dir_ws=g.light_diffuse=g.light_ambient=g.is_loading=void 0
g.loadPendingDelta=loadPendingDelta
g.loadsPending=loadsPending
g.mat_vp=g.mat_view=g.mat_projection=void 0
g.onEnterBackground=onEnterBackground
g.onExitBackground=onExitBackground
g.onLoadMetrics=onLoadMetrics
g.pixel_aspect=g.perf_state=void 0
g.postRender=postRender
g.postTick=postTick
g.postprocessing=void 0
g.postprocessingAllow=postprocessingAllow
g.preSpriteRender=preSpriteRender
g.projectionZBias=projectionZBias
g.releaseCanvas=releaseCanvas
g.reloadSafe=reloadSafe
g.removeTickFunc=removeTickFunc
g.renderHeight=renderHeight
g.renderNeeded=renderNeeded
g.renderWidth=renderWidth
g.render_width=g.render_height=void 0
g.resizing=resizing
g.setFOV=setFOV
g.setFonts=setFonts
g.setGameDims=setGameDims
g.setGlobalMatrices=setGlobalMatrices
g.setMatVP=setMatVP
g.setPixelyStrict=setPixelyStrict
g.setState=setState
g.setViewport=setViewport
g.setViewportPostprocess=setViewportPostprocess
g.setZRange=setZRange
g.setupProjection=setupProjection
g.start3DRendering=start3DRendering
g.startSpriteRendering=startSpriteRendering
g.startup=startup
g.stateActive=stateActive
g.updateMatrices=updateMatrices
g.width=g.webgl2=g.viewport=void 0
d("./bootstrap.js")
var v=d("./client_config.js").MODE_DEVELOPMENT
g.DEBUG=v
var p=[]
var h=(g.require=d)("assert")
var l=d("./browser.js").is_ios_safari
var _=d("./build_ui.js").buildUIStartup
var y=d("./camera2d.js")
var u=d("./cmds.js")
var m=d("../common/data_error.js").dataErrorQueueEnable
var w=d("./effects.js")
var t=w.effectsReset,b=w.effectsTopOfFrame,x=w.effectsIsFinal,S=w.effectsPassAdd,E=w.effectsPassConsume
var r=d("./error_report.js"),a=r.errorReportDisable,T=r.errorReportSetTimeAccum,n=r.errorReportSetDetails,A=r.glovErrorReportDisableSubmit,R=r.glovErrorReportSetCrashCB
var k=d("./font.js")
var C=k.fontTick
var i=d("./framebuffer.js"),I=i.framebufferStart,o=i.framebufferEndOfFrame
var s=d("./geom.js"),f=s.geomResetState,P=s.geomStartup
var F=d("./input.js")
var c=d("./input.js").inputAllowAllEvents
var D=d("./local_storage.js")
var N=d("gl-mat3/fromMat4")
var O=d("gl-mat4/copy")
var L=d("gl-mat4/invert")
var U=d("gl-mat4/multiply")
var M=d("gl-mat4/transpose")
var j=d("gl-mat4/perspective")
var B=Math.asin,G=Math.cos,z=Math.floor,H=Math.min,V=Math.max,W=Math.PI,q=Math.round,Y=Math.sin,K=Math.sqrt
var J=d("./models.js"),X=J.modelLoadCount,Q=J.modelStartup
var $=d("./perf.js")
var ee=d("./profiler.js"),te=ee.profilerFrameStart,re=ee.profilerGarbageEstimate
var ae=d("./profiler_ui.js").profilerUIStartup
var ie=d("../common/perfcounters.js").perfCounterTick
var ne=d("./settings.js")
var oe=d("./shaders.js")
var se=d("./shaders.js"),le=se.shadersAddGlobal,ue=se.shadersHandleDefinesChanged,fe=se.shadersStartup,ce=se.shadersResetState
var de=d("./shader_debug_ui.js").shaderDebugUIStartup
var ve=d("./sound.js"),pe=ve.soundLoading,he=ve.soundStartup,_e=ve.soundTick
var me=d("./spot.js").spotEndInput
var ge=d("./sprites.js"),ye=ge.blendModeReset,we=ge.spriteDraw,be=ge.spriteDrawReset,xe=ge.spriteStartup
var Se=d("./textures.js"),Ee=Se.textureBind,Te=Se.textureDefaultFilters,Ae=Se.textureError,Re=Se.textureLoadCount,ke=Se.textureResetState,Ce=Se.textureStartup,Ie=Se.textureTick
var Pe=d("./transition.js")
var Fe=d("./ui.js"),De=Fe.drawRect,Ne=Fe.internal,Oe=Ne.cleanupDOMElems,Le=Ne.uiEndFrame,Ue=Ne.uiSetFonts,Me=Ne.uiStartup,je=Ne.uiTick,Be=Fe.uiBindSounds
var Ge=d("./urlhash.js")
var ze=d("../common/util.js"),He=ze.callEach,Ve=ze.clamp,We=ze.nearSame,qe=ze.ridx
var Ye=d("../common/verify.js")
var Ke=d("../common/vmath.js"),Ze=Ke.mat3,Je=Ke.mat4,Xe=Ke.mat4isFinite,Qe=Ke.vec3,$e=Ke.vec4,et=Ke.v3mulMat4,tt=Ke.v3iNormalize,rt=Ke.v4copy,at=Ke.v4same,it=Ke.v4set
var nt=d("./webfs.js").webFSStartup
var ot=d("./words/profanity.js").profanityStartupLate
var st
g.canvas=st
var lt
g.webgl2=lt
var ut
g.glov_particles=ut
var ft
g.width=ft
var ct
g.height=ct
var dt
var vt
var pt=1
g.pixel_aspect=pt
var ht=window.devicePixelRatio||1
g.dom_to_canvas_ratio=ht
var _t
g.antialias=_t
var mt
g.antialias_unavailable=mt
var gt
g.game_width=gt
var yt
g.game_height=yt
var wt
var bt
g.render_width=bt
var xt
g.render_height=xt
var St=Ge.register({key:"D",type:Ge.TYPE_SET,change:definesChanged})
g.defines=St
Ge.register({key:"nocoop"})
var Et
g.ZFAR=Et
var Tt
g.ZNEAR=Tt
var At=1
g.fov_y=At
var Rt=1
g.fov_x=Rt
var kt=Je()
g.mat_projection=kt
var Ct=Je()
g.mat_view=Ct
var It=Je()
var Pt=Je()
g.mat_vp=Pt
var Ft=Je()
var Dt=Je()
var Nt=Je()
var Ot=Ze()
var Lt=Ze()
var Ut=Qe(.75,.75,.75)
g.light_diffuse=Ut
var Mt=Qe(.25,.25,.25)
g.light_ambient=Mt
var jt=Qe(-1,-2,-3)
g.light_dir_ws=jt
var Bt
g.font=Bt
var Gt=null
g.app_state=Gt
var zt=$e(0,0,0,1)
g.border_color=zt
var Ht=$e(0,0,0,1)
g.border_clear_color=Ht
var Vt=false
var Wt=false
var qt=3
function renderNeeded(e){qt=V(qt,e||3)}function disableRender(e){c(Vt=e)
if(Vt)Oe()}var Yt=[]
function addViewSpaceGlobal(e){var t=e+"_ws"
var r=oe.globals[t]
h(r)
h.equal(r.length,3)
var a=e+"_vs"
var i=Qe()
le(a,i)
Yt.push({vs:i,ws:r})}var Kt=Je()
function setGlobalMatrices(e){h(Xe(e))
O(Ct,e)
U(Pt,kt,Ct)
tt(jt)
for(var t=0;t<Yt.length;++t){var r=Yt[t]
et(r.vs,r.ws,Ct)}L(Kt,Ct)
N(Lt,Kt)}function setMatVP(e){h(Xe(e))
setupProjection(At,dt,vt,Tt,Et)
O(Ct,e)
U(Pt,kt,Ct)}function setFOV(e){var t=dt/vt
if(t>wt){g.fov_y=At=e
var r=Y(At/2)/G(At/2)*t
g.fov_x=Rt=2*B(r/K(r*r+1))}else{var a=Y(e/2)/G(e/2)*wt
g.fov_x=Rt=2*B(a/K(a*a+1))
var i=Y(Rt/2)/G(Rt/2)/t
g.fov_y=At=2*B(i/K(i*i+1))}}function setGameDims(e,t){g.game_width=gt=e
g.game_height=yt=t
wt=gt/yt}var Zt="5"
var Jt=D.get("glov_no_postprocessing")!==Zt
g.postprocessing=Jt
function postprocessingAllow(e){D.set("glov_no_postprocessing",e?void 0:Zt)
g.postprocessing=Jt=e}function glCheckError(){var e=gl.getError()
if(e){console.error(e)
throw new Error(e)}}function releaseCanvas(){try{if(gl){var e=gl.getExtension("WEBGL_lose_context")
if(e)e.loseContext()}}catch(e){}}function reloadSafe(){a()
releaseCanvas()
if(window.FBInstant)try{window.top.location.reload()}catch(e){try{document.location.reload()}catch(e){window.FBInstant.quit()}}else document.location.reload()}window.reloadSafe=reloadSafe
var Xt={}
function defineCausesReload(e){Xt[e]=St[e]}defineCausesReload("FORCEWEBGL2")
defineCausesReload("NOWEBGL2")
var Qt={}
function defineOnChange(e,t){(Qt[e]=Qt[e]||{value:St[e],cbs:[]}).cbs.push(t)}function definesChanged(){for(var e in Xt)if(St[e]!==Xt[e]){Ge.onURLChange(reloadSafe)
break}for(var t in Qt){var r=Qt[t]
if(St[t]!==r.value){r.value=St[t]
He(r.cbs)}}ue()}function definesClearAll(){var e=false
for(var t in St){St[t]=false
e=true}if(e)definesChanged()
return e}function normalizeRow(e,t){var r=e[t]*e[t]+e[t+1]*e[t+1]+e[t+2]*e[t+2]
if(r>0){r=1/K(r)
e[t]*=r
e[t+1]*=r
e[t+2]*=r}}function updateMatrices(e){O(It,e)
U(Ft,Ct,e)
U(Nt,kt,Ft)
O(Kt,e)
normalizeRow(Kt,0)
normalizeRow(Kt,4)
normalizeRow(Kt,8)
U(Dt,Ct,Kt)
L(Kt,Dt)
M(Kt,Kt)
N(Ot,Kt)}var $t=0
g.frame_timestamp=$t
function getFrameTimestamp(){return $t}var er=0
g.frame_index=er
function getFrameIndex(){return er}var tr=0
g.frame_dt=tr
function getFrameDt(){return tr}var rr=0
g.hrtime=rr
var ar=0
function getFrameDtActual(){return ar}var ir=null
var nr=true
g.is_loading=nr
function setState(e){if(nr)ir=e
else g.app_state=Gt=e
renderNeeded()}function stateActive(e){if(nr)return ir===e
else return Gt===e}var or=1e3
var sr=0
var lr=0
var ur=0
var fr=1e3
var cr=0
var dr=0
var vr=128
g.PERF_HISTORY_SIZE=vr
var pr=window.glov_perf_state={fpsgraph:{index:0,history:new Float32Array(2*vr)},gpu_mem:{tex:0,geom:0}}
var hr=(g.perf_state=pr).fpsgraph
$.addMetric({name:"fps",show_stat:"show_fps",show_graph:"fps_graph",labels:{"fps: ":function fps(){return(1e3/or).toFixed(1)},"ms/f: ":function msF(){return or.toFixed(0)},"cpu: ":function cpu(){return fr.toFixed(0)},"gc/f: ":function gcF(){return dr?dr.toFixed(1):""}},data:hr,line_scale_top:50,colors:[$e(1,.925,.153,1),$e(0,.894,.212,1)]},true)
var _r=true
var mr=false
var gr=0
function resizing(){return gr}var yr=[]
function addTickFunc(e){yr.push(e)}function removeTickFunc(e){var t=yr.indexOf(e)
if(-1!==t){yr.splice(t,1)
return true}return false}var wr=[]
function postTick(e){e.ticks=e.ticks||1
e.inactive=e.inactive||false
h.equal(typeof e.fn,"function")
wr.push(e)}var br=null
function preSpriteRender(e){if(!br)br=[]
br.push(e)}var xr=null
function postRender(e){if(!xr)xr=[]
xr.push(e)}function resetEffects(){t()
o()}function renderWidth(){return bt||ft}function renderHeight(){return xt||ct}var Sr=function(){var e=window.screen
if(!l||!e)return 0
return{"896,414":896/414,"812,375":812/375,"736,414":736/414,"716,414":736/414,"667,375":667/375,"647,375":667/375,"548,320":1.775}[V(e.availWidth,e.availHeight)+","+H(e.availWidth,e.availHeight)]||0}()
function safariTopSafeArea(e,t){if(Sr&&We(e/t,Sr,.001))return 50*(window.devicePixelRatio||1)
return 0}var Er
var Tr
var Ar
var Rr
var kr=false
var Cr=[0,0,0,0]
var Ir=[0,0,0,0]
function checkResize(){profilerStart("checkResize")
var e=window.visualViewport||{}
g.dom_to_canvas_ratio=ht=window.devicePixelRatio||1
g.dom_to_canvas_ratio=ht*=ne.render_scale_all
var t=e.width||window.innerWidth
var r=e.height||window.innerHeight
if(r!==Ar){Ar=r
if(document.body)document.body.style.height=r+"px"}var a=st.getBoundingClientRect()
var i=q(a.width*ht)||1
var n=q(a.height*ht)||1
if(-1===u.safearea[0]){if(Rr){var o=Rr.offsetWidth
var s=Rr.offsetHeight
if(o&&s)it(Cr,Rr.offsetLeft*ht,i-(o+Rr.offsetLeft)*ht,V(Rr.offsetTop*ht,safariTopSafeArea(t,r)*ne.render_scale_all),kr?0:n-(s+Rr.offsetTop)*ht)}}else it(Cr,i*Ve(u.safearea[0],0,25)/100,i*Ve(u.safearea[1],0,25)/100,n*Ve(u.safearea[2],0,25)/100,n*Ve(u.safearea[3],0,25)/100)
if(!at(Cr,Ir)){rt(Ir,Cr)
y.setSafeAreaPadding(Cr[0],Cr[1],Cr[2],Cr[3])
gr=V(gr,1)}if(i!==Er||n!==Tr){window.pixel_scale=ht
Er=st.width=i||1
Tr=st.height=n||1
g.width=ft=st.width
g.height=ct=st.height
gr=10
renderNeeded()}if(l&&(window.visualViewport||gr))window.scroll(0,0)
profilerStop("checkResize")}var Pr=$e(0,0,1,1)
g.viewport=Pr
function setViewport(e){rt(Pr,e)
gl.viewport(e[0],e[1],e[2],e[3])}var Fr=0
function requestFrame(e){var t=ne.max_fps
var r=t>=250?10:1
if(Fr>=r)return
if(St.SLOWLOAD&&nr)t=2
if(r>1)while(Fr<r){setTimeout(tick,1)
Fr++}else if(t&&t>ne.use_animation_frame){var a=V(0,q(1e3/t-(e||0)))
Fr++
setTimeout(tick,a)}else{Fr++
requestAnimationFrame(tick)}}var Dr
var Nr
g.had_3d_this_frame=Nr
function clearHad3DThisFrame(){g.had_3d_this_frame=Nr=false}function setupProjection(e,t,r,a,i){j(kt,e,t/r,a,i)
Dr=kt[10]}function setZRange(e,t){g.ZNEAR=Tt=e
g.ZFAR=Et=t
if(Nr)setupProjection(At,dt,vt,Tt,Et)}function set3DRenderResolution(e,t){dt=e
vt=t}var Or
var Lr
function start3DRendering(e){if((e=e||{}).width)set3DRenderResolution(e.width,e.height)
setFOV(e.fov||ne.fov*W/180)
g.had_3d_this_frame=Nr=true
if(!e.width&&Or&&!St.NOCOPY){Lr=true
S()}ye(true)
gl.enable(gl.BLEND)
gl.enable(gl.DEPTH_TEST)
gl.depthMask(true)
var t=dt
var r=vt
if(e.viewport){t=bt||ft
r=xt||ct}I({width:t,height:r,final:x(),need_depth:e.need_depth||true,clear:true,clear_all:void 0===e.clear_all?ne.render_scale_clear:e.clear_all,viewport:e.viewport})
setupProjection(At,dt,vt,Tt,Et)
gl.enable(gl.CULL_FACE)}function renderScaleFinish(){if(St.NOCOPY){gl.disable(gl.SCISSOR_TEST)
it(Pr,0,0,ft,ct)
gl.viewport(Pr[0],Pr[1],Pr[2],Pr[3])}else{E()
if(2===ne.render_scale_mode)w.applyPixelyExpand({final:x(),clear:false})
else w.applyCopy({filter_linear:0===ne.render_scale_mode})}}function startSpriteRendering(){gl.disable(gl.CULL_FACE)
ye(true)
gl.enable(gl.BLEND)
gl.disable(gl.DEPTH_TEST)
gl.depthMask(false)
be()}function projectionZBias(e,t){if(!e){kt[10]=Dr
return}var r=e/(t*(t+e))*.2
r=V(r,2e-7)
kt[10]=Dr+r}function fixNatives(e){var t=[]
for(var r in t){console[e?"log":"error"]('Found invasive enumerable property "'+r+'" on Array.prototype, removing...')
var a=t[r]
n("had_native_"+r,typeof a)
delete Array.prototype[r]
Object.defineProperty(Array.prototype,r,{value:a,enumerable:false})}for(var i in t)h(false,"Array.prototype has unremovable member "+i)}function resetState(){profilerStart("resetState")
profilerStart("textures")
ke()
profilerStopStart("shaders")
ce()
profilerStopStart("geom;gl")
f()
ye(true)
gl.enable(gl.BLEND)
gl.enable(gl.DEPTH_TEST)
gl.depthMask(true)
gl.enable(gl.CULL_FACE)
gl.depthFunc(gl.LEQUAL)
gl.disable(gl.SCISSOR_TEST)
gl.cullFace(gl.BACK)
gl.viewport(0,0,ft,ct)
profilerStop()
profilerStop("resetState")}var Ur=false
var Mr=[]
var jr=[]
function isInBackground(){return Ur}function onEnterBackground(e){Mr.push(e)}function onExitBackground(e){jr.push(e)}function dirtyRenderSet(e){Wt=e}var Br=window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now.bind(Date)
g.hrnow=Br
var Gr=0
var zr=0
var Hr=0
function tick(e){te()
profilerStart("tick")
profilerStart("top")
Fr--
if(qt)--qt
if(Wt&&!qt){resetEffects()
F.tickInputInactive()
ur=0
for(var t=wr.length-1;t>=0;--t)if(wr[t].inactive&&!--wr[t].ticks){wr[t].fn()
qe(wr,t)}requestFrame()
profilerStop()
return profilerStop("tick")}g.hrtime=rr=Br()
var r=rr-zr
zr=rr
var a=ne.max_fps
if(a&&a<=ne.use_animation_frame){var i=1e3/a-.1
if((Hr-=r)>0){requestFrame()
profilerStop("top")
return profilerStop("tick")}if((Hr+=i)<0)Hr=0}var n=q(rr)
if(!Gr)Gr=n
var o=H(V(ar=n-Gr,1),250)
g.frame_dt=tr=o
Gr=n
g.frame_timestamp=$t+=o
g.frame_index=++er
T($t)
fixNatives(false)
hr.history[hr.index%vr*2+1]=ar
hr.index++
hr.history[hr.index%vr*2+0]=0;++lr
cr+=ur
if(n-sr>1e3*ne.fps_window)if(!sr)sr=n
else{or=(n-sr)/lr
fr=cr/lr
cr=0
dr=re()/1024
lr=0
sr=n}ie(o)
b()
if(document.hidden||document.webkitHidden||Vt){resetEffects()
F.tickInputInactive()
ur=0
for(var s=wr.length-1;s>=0;--s)if(wr[s].inactive&&!--wr[s].ticks){wr[s].fn()
qe(wr,s)}requestFrame()
profilerStop()
return profilerStop("tick")}if(Ur){Ur=false
He(jr)}checkResize()
g.had_3d_this_frame=Nr=false
Lr=Or=false
if(bt){set3DRenderResolution(bt,xt)
S()}else{dt=V(1,q(ft*ne.render_scale))
vt=V(1,q(ct*ne.render_scale))
if(dt!==ft)Or=true}resetState()
Ee(0,Ae())
C()
y.tickCamera2D()
Pe.render(o)
y.setAspectFixed(gt,yt)
profilerStopStart("mid")
_e(o)
F.tickInput()
je(o)
if(gr){--gr
var l=[]
y.virtualToDom(l,[0,0])
var u=[]
y.virtualToDom(u,[gt-1,yt-1])
var f=[l[0],l[1],u[0],u[1]]
var c=f[3]-f[1]
var d=H(256,V(2,z(c/800*16)))
var v=document.getElementById("fullscreen")
if(v)v.style["font-size"]=d+"px"}if(_r){De(y.x0Real(),y.y0Real(),y.x1Real(),0,Z.BORDERS,zt)
De(y.x0Real(),yt,y.x1Real(),y.y1Real(),Z.BORDERS,zt)
De(y.x0Real(),0,0,yt,Z.BORDERS,zt)
De(gt,0,y.x1Real(),yt,Z.BORDERS,zt)}$.draw()
profilerStopStart("app_state")
for(var p=0;p<yr.length;++p)yr[p](o)
if(Gt)Gt(o)
profilerStopStart("bottom")
me()
ut.tick(o)
if(Nr){if(Lr)renderScaleFinish()}else if(bt)I({width:bt,height:xt,clear:true,clear_all:ne.render_scale_clear,final:x(),need_depth:false})
else I({width:ft,height:ct,clear:true,final:x(),need_depth:false})
if(br)He(br,br=null)
startSpriteRendering()
we()
Le()
if(xr)He(xr,xr=null)
if(bt){E()
var h=[y.render_offset_x,y.render_offset_y_bottom,y.render_viewport_w,y.render_viewport_h]
var _={clear:true,clear_all:true,clear_color:Ht,viewport:h}
if(mr)w.applyPixelyExpand(_)
else w.applyCopy(_)}F.endFrame()
resetEffects()
Ie()
for(var m=wr.length-1;m>=0;--m)if(!--wr[m].ticks){wr[m].fn()
qe(wr,m)}ur=Br()-n
hr.history[hr.index%vr*2+0]=ur
requestFrame(Br()-rr)
profilerStop("bottom")
return profilerStop("tick")}var Vr=false
function onBlur(e){Vr=true}function onFocus(e){Vr=false}function periodiclyRequestFrame(){requestFrame()
setTimeout(periodiclyRequestFrame,1e3)
if(!Ur&&Vr)if(q(Br())-Gr>400){Ur=true
He(Mr)}}function setPixelyStrict(e){if(e){g.render_width=bt=gt
g.render_height=xt=yt}else{g.render_width=bt=void 0
g.render_height=xt=void 0}}function getViewportPostprocess(){return mr}function setViewportPostprocess(e){mr=e}function setFonts(e,t){g.font=Bt=e
Ue(e,t)}function engineStartupFunc(e){p.push(e)}function startup(e){fixNatives(true)
h(window.glov_webfs,"Failed to load fsdata.js")
nt(window.glov_webfs,Ge.getURLBase())
g.canvas=st=document.getElementById("canvas")
Rr=document.getElementById("safearea")
if(false===e.error_report)A()
if(v)m(true)
if(v&&!window.spector)Object.defineProperty(Number.prototype,"length",{get:function get(){h(false,"Numbers do not have a length property")
return}})
kr=e.safearea_ignore_bottom||false
window.addEventListener("resize",checkResize,false)
checkResize()
var t=e.pixely&&"off"!==e.pixely
g.antialias=_t=e.antialias||!t&&false!==e.antialias
var r=e.high?"high-performance":"default"
var a=["webgl2","webgl","experimental-webgl"]
var i=St.NOWEBGL2
var n=D.getJSON("webgl2_disable")
if(n&&n.ua===navigator.userAgent&&n.ts>Date.now()-6048e5){console.log("Disabling WebGL2 because a previous run encountered a related error")
i=true}if(v&&!St.FORCEWEBGL2){var o=D.getJSON("run_count",0)+1
D.setJSON("run_count",o)
if(o%2)i=true}if(i)a.splice(0,1)
var s=[{antialias:_t,powerPreference:r,alpha:false},{powerPreference:r,alpha:false},{antialias:_t,alpha:false},{alpha:false},{}]
var l=false
g.webgl2=lt=false
for(var u=0;!l&&u<a.length;u+=1)for(var f=0;!l&&f<s.length;++f)try{window.gl=st.getContext(a[u],s[f])
if(window.gl){if("webgl2"===a[u])g.webgl2=lt=true
if(_t&&!s[f].antialias){g.antialias_unavailable=mt=true
g.antialias=_t=false}l=true
break}}catch(e){}if(!window.requestAnimationFrame)l=false
if(l)if(!fe({light_diffuse:Ut,light_dir_ws:jt,ambient:Mt,mat_m:It,mat_mv:Ft,mat_vp:Pt,mvp:Nt,mv_inv_trans:Ot,mat_inv_view:Lt,view:Ct,projection:kt}))l=false
if(!l){window.alert((window.gl?"Error initializing WebGL.\n":"Error initializing WebGL: your browser does not support WebGL or does not have it enabled.\n")+"Try completely closing and re-opening the app or browser.  If the problem persists, try restarting your device.")
document.getElementById("loading").style.visibility="hidden"
document.getElementById("nowebgl").style.visibility="visible"
return false}R(function(){setTimeout(requestFrame,1)})
var c=document.getElementById("nocanvas")
if(Ye(c))c.style.visibility="hidden"
console.log("Using WebGL"+(lt?2:1))
h(gl)
st.focus()
setGameDims(e.game_width||1280,e.game_height||960)
g.ZNEAR=Tt=e.znear||.7
g.ZFAR=Et=e.zfar||1e4
setPixelyStrict("strict"===e.pixely)
if(e.viewport_postprocess)mr=true
g.pixel_aspect=pt=e.pixel_aspect||1
gl.depthFunc(gl.LEQUAL)
gl.cullFace(gl.BACK)
gl.clearColor(0,.1,.2,1)
gl.pixelStorei(gl.UNPACK_ALIGNMENT,1)
Ce()
P()
addViewSpaceGlobal("light_dir")
y.startup()
xe()
F.startup(st,e)
Q()
window.addEventListener("blur",onBlur,false)
window.addEventListener("focus",onFocus,false)
g.glov_particles=ut=d("./particles.js").create()
if(t){Te(gl.NEAREST,gl.NEAREST)
ne.runTimeDefault("render_scale_mode",1)}else Te(gl.LINEAR_MIPMAP_LINEAR,gl.LINEAR)
h(e.font)
e.font=g.font=Bt=k.create(e.font.info,e.font.texture)
if(e.title_font)e.title_font=k.create(e.title_font.info,e.title_font.texture)
Me(e)
he(e.sound)
Be(e.ui_sounds)
_()
de()
ae()
He(p,p=null)
y.setAspectFixed(gt,yt)
if(e.state)setState(e.state)
if(void 0!==e.do_borders)_r=e.do_borders
if(void 0!==e.show_fps)ne.show_fps=e.show_fps
Wt=Boolean(e.dirty_render)
periodiclyRequestFrame()
return true}var Wr=0
function loadPendingDelta(e){Wr+=e}function loadsPending(){return Re()+pe()+X()+Wr}var qr=[]
function onLoadMetrics(e){qr.push(e)}onLoadMetrics(function(e){console.log(["Load time summary","  "+e.time_js_load+"ms JS load","  "+e.time_js_init+"ms JS init","  "+e.time_resource_load+"ms resource load",e.time_total+"ms total"].join("\n"))})
function loadingFinished(){var e=Date.now()
var t=window.time_load_onload-window.time_load_start
var r=window.time_load_init-window.time_load_onload
var a=e-window.time_load_init
var i=e-window.time_load_start
He(qr,null,{time_js_load:t,time_js_init:r,time_resource_load:a,time_total:i})
ot()}function loading(){var e=loadsPending()
var t=document.getElementById("loading_text")
if(t)t.innerText="Loading ("+e+")..."
renderNeeded()
if(!e){g.is_loading=nr=false
g.app_state=Gt=ir
postTick({ticks:2,fn:function fn(){loadingFinished()
renderNeeded()
var e=document.getElementById("loading")
if(e)e.style.visibility="hidden"}})}}g.app_state=Gt=loading
window.glov_engine=g},{"../common/data_error.js":79,"../common/perfcounters.js":87,"../common/util.js":92,"../common/verify.js":93,"../common/vmath.js":94,"./bootstrap.js":10,"./browser.js":11,"./build_ui.js":12,"./camera2d.js":13,"./client_config.js":14,"./cmds.js":15,"./effects.js":18,"./error_report.js":21,"./font.js":25,"./framebuffer.js":26,"./geom.js":27,"./input.js":34,"./local_storage.js":37,"./models.js":40,"./particles.js":42,"./perf.js":43,"./profiler.js":48,"./profiler_ui.js":49,"./settings.js":54,"./shader_debug_ui.js":55,"./shaders.js":56,"./sound.js":59,"./spot.js":60,"./sprites.js":63,"./textures.js":65,"./transition.js":66,"./ui.js":67,"./urlhash.js":69,"./webfs.js":71,"./words/profanity.js":72,assert:void 0,"gl-mat3/fromMat4":void 0,"gl-mat4/copy":void 0,"gl-mat4/invert":void 0,"gl-mat4/multiply":void 0,"gl-mat4/perspective":void 0,"gl-mat4/transpose":void 0}],20:[function(e,t,r){"use strict"
r.environmentsInit=environmentsInit
r.getAPIPath=getAPIPath
r.getCurrentEnvironment=getCurrentEnvironment
r.getExternalTextureURL=getExternalTextureURL
r.getLinkBase=getLinkBase
r.setCurrentEnvironment=setCurrentEnvironment
var l=e("assert")
var a=e("./client_config").setAbilityReloadUpdates
var i=e("./net").netForceDisconnect
var n=e("./urlhash")
var u={}
var f=null
var c=null
var o
var s
var d
function applyEnvironment(){o=f&&f.link_base||n.getURLBase()
s=f&&f.api_path||o+"api/"
d=o.replace("//localhost:","//127.0.0.1:")}applyEnvironment()
function getCurrentEnvironment(){return f}function setCurrentEnvironment(e){var t=f
if((f=e&&u[e]||c)!==t){applyEnvironment()
a(false)
i()}}function getLinkBase(){return o}function getAPIPath(){return s}function getExternalTextureURL(e){return e.match(/^.{2,7}:/)?e:""+d+e}function environmentsInit(e,r,t){u={}
var a=[]
for(var i=0,n=e.length;i<n;i++){var o=e[i]
var s=o.name
l(s.length>0)
u[s]=o
a.push(s)}f=c=t&&u[t]||null
applyEnvironment()
if(!a.some(function(e){return"default"===e.toLowerCase()}))a.push("default")
if(r){r.registerValue("environment",{type:r.TYPE_STRING,help:"Display or set the current client environment",usage:"Display the current client environment\n  Usage: /environment\nSet the current client environment ("+a.join(", ")+")\n  Usage: /environment <environment_name>",label:"Environment",get:function get(){return JSON.stringify(getCurrentEnvironment()||"default",null,2)},set:setCurrentEnvironment,access_show:["sysadmin"]})
r.register({cmd:"env",help:"Alias for /environment",access_show:["sysadmin"],func:function func(e,t){r.handle(this,"environment "+e,t)}})}}},{"./client_config":14,"./net":41,"./urlhash":69,assert:void 0}],21:[function(e,t,r){"use strict"
r.errorReportClear=errorReportClear
r.errorReportDetailsString=errorReportDetailsString
r.errorReportDisable=errorReportDisable
r.errorReportIgnoreUncaughtPromises=errorReportIgnoreUncaughtPromises
r.errorReportSetDetails=errorReportSetDetails
r.errorReportSetDynamicDetails=errorReportSetDynamicDetails
r.errorReportSetTimeAccum=errorReportSetTimeAccum
r.glovErrorReport=glovErrorReport
r.glovErrorReportDisableSubmit=glovErrorReportDisableSubmit
r.glovErrorReportSetCrashCB=glovErrorReportSetCrashCB
r.hasCrashed=hasCrashed
r.session_uid=void 0
var a=""+String(Date.now()).slice(-8)+String(Math.random()).slice(2,8)
r.session_uid=a
var i={}
var n={}
var l=e("./environments").getAPIPath
var o=e("./client_config").platformGetID
var u=e("./fetch").fetch
var f=false
function errorReportDisable(){f=true}var c=false
function errorReportIgnoreUncaughtPromises(){c=true}function errorReportSetDetails(e,t){if(t)i[e]=escape(String(t))
else delete i[e]}function errorReportSetDynamicDetails(e,t){n[e]=t}errorReportSetDetails("build","1702144435110")
errorReportSetDetails("sesuid",a)
errorReportSetDynamicDetails("platform",o)
var s=Date.now()
errorReportSetDetails("time_start",s)
errorReportSetDynamicDetails("url",function(){return escape(location.href)})
errorReportSetDynamicDetails("time_up",function(){return Date.now()-s})
var d=0
function errorReportSetTimeAccum(e){d=e}errorReportSetDynamicDetails("time_accum",function(){return d})
function getDynamicDetail(e){var t=n[e]()
if(!t&&0!==t)return""
return"&"+e+"="+t}function errorReportDetailsString(){return"&"+Object.keys(i).map(function(e){return e+"="+i[e]}).join("&")+Object.keys(n).map(getDynamicDetail).join("")}var v=0
var p=0
function hasCrashed(){return p>0}function errorReportClear(){v=0
window.debugmsg("",true)}var h=true
function glovErrorReportDisableSubmit(){h=false}var _=null
function glovErrorReportSetCrashCB(e){_=e}var m=new RegExp(["^Error: Script error\\.$","^Error: Script error\\.\n  at \\(0:0\\)$","^Error: null$","^Error: null\n  at null\\(null:null\\)$","avast_submit","vc_request_action","getElementsByTagName\\('video'\\)",'document\\.getElementById\\("search"\\)',"change_ua","chrome-extension","setConnectedRobot","Failed to (?:start|stop) the audio device","zaloJSV2","getCookie is not defined","originalPrompt","_AutofillCallbackHandler","sytaxError","bannerNight","privateSpecialRepair","__gCrWeb","\\$wrap is not","wsWhitelisted","#darkcss","chrome://userjs","worker-hammerhead","ammerhead-browser","hammerhead","isFeatureBroken","PureRead","uv\\.handler\\.js","dashawn\\.cf","clearTransInfo","firefoxSample","gourmetads","apstag","otBannerSdk\\.js","setOTDataLayer","otSDKStub","pubads_20","ima3\\.js","window\\.setDgResult","TranslateService","bdTransJSBridge","ciuvoSDK","stubScriptElement","chrome://internal","getElementById\\('items'\\)","closeModal"].join("|"))
function glovErrorReport(e,t,r,a,i){console.error(t)
if(_)_()
if(e){++p
var n=Date.now()
var o=n-v
v=n
if(f)return false
if(o<3e4)return false
if(t.match(m))return false}var s=l()
s+=(e?"errorReport":"errorLog")+"?cidx="+p+"&file="+escape(r)+"&line="+(a||0)+"&col="+(i||0)+"&msg="+escape(t)+errorReportDetailsString()
if(h){u({method:"POST",url:s},function(){})
if(window.gtag)window.gtag("event","exception",{description:t,fatal:e})}if(c&&t.match(/Uncaught \(in promise\)/))return false
return true}window.glov_error_report=glovErrorReport.bind(null,true)
var g=window.glov_error_early
if(g)window.glov_error_report(g.msg,g.file,g.line,g.col)},{"./client_config":14,"./environments":20,"./fetch":23}],22:[function(e,t,r){"use strict"
r.externalUsersAutoLoginFallbackProvider=externalUsersAutoLoginFallbackProvider
r.externalUsersAutoLoginProvider=externalUsersAutoLoginProvider
r.externalUsersCheckEmailVerified=externalUsersCheckEmailVerified
r.externalUsersCurrentUser=externalUsersCurrentUser
r.externalUsersEmailPassLoginProvider=externalUsersEmailPassLoginProvider
r.externalUsersEnabled=externalUsersEnabled
r.externalUsersFriends=externalUsersFriends
r.externalUsersLogIn=externalUsersLogIn
r.externalUsersLogOut=externalUsersLogOut
r.externalUsersLoggedIn=externalUsersLoggedIn
r.externalUsersPartyId=externalUsersPartyId
r.externalUsersSendEmailConfirmation=externalUsersSendEmailConfirmation
r.externalUsersSendRecoverEmail=externalUsersSendRecoverEmail
r.externalUsersSetup=externalUsersSetup
r.externalUsersSetupProvider=externalUsersSetupProvider
var a=e("assert")
var i=e("../common/external_users_common")
var n=i.ERR_INVALID_PROVIDER
var o=i.ERR_NOT_AVAILABLE
var s=i.ERR_UNAUTHORIZED
var l=e("./social").registerExternalUserInfoProvider
var u={getProvider:function getProvider(){a(false)},enabled:function enabled(){return false},loggedIn:function loggedIn(){return false},logIn:function logIn(e,t){t(n)},logOut:function logOut(){},getCurrentUser:function getCurrentUser(e){e(n)}}
var f={}
var c
var d
var v
function getClient(e){return f[e]||u}function externalUsersEnabled(e){var t=f[e]
return t&&t.enabled()||false}function externalUsersLoggedIn(e){var t=f[e]
return t&&t.loggedIn()||false}function externalUsersAutoLoginProvider(){return c}function externalUsersAutoLoginFallbackProvider(){return d}function externalUsersEmailPassLoginProvider(){return v}function externalUsersSendEmailConfirmation(e,t){a(v)
var r=getClient(v)
a(r.sendActivationEmail)
r.sendActivationEmail(e,t)}function externalUsersCheckEmailVerified(e){a(v)
var t=getClient(v)
a(t.checkEmailVerified)
t.checkEmailVerified(e)}function externalUsersSendRecoverEmail(e,t){a(v)
var r=getClient(v)
a(r.sendRecoverEmail)
r.sendRecoverEmail(e,t)}function externalUsersLogIn(e,t,r){getClient(e).logIn(t,r)}function externalUsersLogOut(e){if(e)getClient(e).logOut()
else for(var t in f)getClient(t).logOut()}function externalUsersCurrentUser(e,t){getClient(e).getCurrentUser(t)}function externalUsersFriends(e,t){var r=getClient(e)
if(r.getFriends)r.getFriends(t)
else t(o)}function externalUsersPartyId(e,t){var r=getClient(e)
if(r.getPartyId)r.getPartyId(t)
else t(o)}function externalUsersSetupProvider(t){var e=t.getProvider()
f[e]=t
l(e,function(e){if(t.loggedIn())t.getCurrentUser(e)
else e(s)},t.getFriends&&function(e){if(t.loggedIn())t.getFriends(e)
else e(s)})}function externalUsersSetup(e,t,r,a){c=t
d=r
v=a
e.forEach(externalUsersSetupProvider)}},{"../common/external_users_common":83,"./social":58,assert:void 0}],23:[function(e,t,r){"use strict"
r.ERR_TIMEOUT=r.ERR_CONNECTION=void 0
r.fetch=fetch
r.fetchDelaySet=fetchDelaySet
var p=e("assert")
var h=Math.random,_=Math.round
var m="ERR_CONNECTION"
r.ERR_CONNECTION=m
var g="ERR_TIMEOUT"
r.ERR_TIMEOUT=g
var y=0
var w=0
function fetchDelaySet(e,t){y=e
w=t}var a=/\/\/[^/]+\/([^?#]+)/
var i=/([^?#]+)/
function labelFromURL(e){var t=e.match(a)
if(t)return t[1]
return(t=e.match(i))?t[1]:e}function fetch(e,r){var a=false
var i
function done(e,t){if(a)return
a=true
if(i)clearTimeout(i)
r(e,t)}var t=e.method,n=e.url,o=e.response_type,s=e.label,l=e.body,u=e.headers,f=void 0===u?{}:u,c=e.timeout
t=t||"GET"
p(n)
s=s||labelFromURL(n)
var d=new XMLHttpRequest
d.open(t,n,true)
if(c){d.timeout=c
i=setTimeout(function(){i=setTimeout(function(){profilerStart("fetch_timeout:"+s)
done(g)
profilerStop()},c)},c)}if(o&&"json"!==o)d.responseType=o
for(var v in f)d.setRequestHeader(v,f[v])
d.onload=function(){profilerStart("fetch_onload:"+s)
if(0!==d.status&&d.status<200||d.status>=300){var e
if("arraybuffer"!==o)try{e=d.responseText}catch(e){}done(String(d.status),e||"")}else if("json"===o){var t
var r
try{t=d.responseText
r=JSON.parse(t)}catch(e){console.error("Received invalid JSON response from "+n+": "+(t||"<empty response>"))
done(e)
profilerStop()
return}done(null,r)}else if("arraybuffer"===o)if(d.response)done(null,d.response)
else done("empty response")
else done(null,d.responseText)
profilerStop()}
d.onabort=d.onerror=function(){profilerStart("fetch_onerror:"+s)
done(m)
profilerStop()}
d.ontimeout=function(){profilerStart("fetch_ontimeout:"+s)
done(g)
profilerStop()}
if(void 0!==l)if("object"===typeof l){d.setRequestHeader("Content-Type","application/json")
l=JSON.stringify(l)}else l=String(l)
if(y||w)setTimeout(d.send.bind(d,l),y+_(h()*w))
else d.send(l)}},{assert:void 0}],24:[function(e,t,r){"use strict"
r.filewatchMessageHandler=filewatchMessageHandler
r.filewatchOn=filewatchOn
r.filewatchStartup=filewatchStartup
r.filewatchTriggerChange=filewatchTriggerChange
var a=e("assert")
var n={}
var o=[]
function filewatchOn(e,t){if("."===e[0]){a(!n[e])
n[e]=t}else o.push([e,t])}var s
function filewatchMessageHandler(e){s=e}function onFileChange(e){console.log("FileWatch change: "+e)
var t=e.lastIndexOf(".")
var r=false
if(-1!==t){var a=e.slice(t)
if(n[a])if(false!==n[a](e))r=true}for(var i=0;i<o.length;++i)if(e.match(o[i][0]))if(false!==o[i][1](e))r=true
if(s&&r)s("Reloading: "+e)}function filewatchTriggerChange(e){onFileChange(e)}function filewatchStartup(e){e.onMsg("filewatch",onFileChange)}},{assert:void 0}],25:[function(e,t,r){"use strict"
r.ALIGN=void 0
r.fontCreate=fontCreate
r.fontSetDefaultSize=fontSetDefaultSize
r.fontSetReplacementChars=fontSetReplacementChars
r.fontStyle=fontStyle
r.fontStyleAlpha=fontStyleAlpha
r.fontStyleColored=fontStyleColored
r.fontTick=fontTick
r.glov_font_default_style=r.font_shaders=void 0
r.intColorFromVec4Color=intColorFromVec4Color
r.vec4ColorFromIntColor=vec4ColorFromIntColor
r.style=fontStyle
r.styleColored=fontStyleColored
r.styleAlpha=fontStyleAlpha
r.create=fontCreate
var A={HLEFT:0,HCENTER:1,HRIGHT:2,HMASK:3,VTOP:0,VCENTER:4,VBOTTOM:8,VMASK:12,HFIT:16,HWRAP:32,HCENTERFIT:17,HRIGHTFIT:18,HVCENTER:5,HVCENTERFIT:21}
r.ALIGN=A
var oe=e("assert")
var se=e("./camera2d.js")
var a=e("./camera2d.js"),le=a.transformX,ue=a.transformY
var fe=e("./engine.js")
var i=e("./geom.js")
var ce=e("./localization.js").getStringFromLocalizable
var de=Math.max,ve=Math.min,m=Math.round
var n=e("./shaders.js"),o=n.shaderCreate,s=n.shadersPrelink
var l=e("./sprites.js")
var pe=l.BLEND_ALPHA,he=l.BLEND_PREMULALPHA,_e=l.spriteChainedStart,me=l.spriteChainedStop,ge=l.spriteDataAlloc
var u=e("./textures.js").textureLoad
var f=e("../common/util.js").clamp
var c=e("../common/vmath.js"),d=c.v3scale,ye=c.v3set,v=c.vec4,p=c.v4copy,we=c.v4scale
var g=A.HMASK|A.HFIT
function GlovFontStyle(){this.color_vec4=new Float32Array([1,1,1,1])}GlovFontStyle.prototype.outline_width=0
GlovFontStyle.prototype.outline_color=0
GlovFontStyle.prototype.glow_xoffs=0
GlovFontStyle.prototype.glow_yoffs=0
GlovFontStyle.prototype.glow_inner=0
GlovFontStyle.prototype.glow_outer=0
GlovFontStyle.prototype.glow_color=0
GlovFontStyle.prototype.color=4294967295
var h={}
r.font_shaders=h
function intColorFromVec4Color(e){return(255*e[0]|0)<<24|(255*e[1]|0)<<16|(255*e[2]|0)<<8|255*e[3]|0}function vec4ColorFromIntColor(e,t){e[0]=(t>>24&255)/255
e[1]=(t>>16&255)/255
e[2]=(t>>8&255)/255
e[3]=(255&t)/255
return e}function vec4ColorFromIntColorPreMultiplied(e,t){var r=e[3]=(255&t)/255
e[0]=(t>>24&255)*(r*=1/255)
e[1]=(t>>16&255)*r
e[2]=(t>>8&255)*r}var _=new GlovFontStyle
r.glov_font_default_style=_
function fontStyle(e,t){var r=new GlovFontStyle
var a=r.color_vec4
if(e)for(var i in e)r[i]=e[i]
for(var n in t)r[n]=t[n]
r.color_vec4=a
vec4ColorFromIntColor(r.color_vec4,r.color)
return r}function fontStyleColored(e,t){return fontStyle(e,{color:t})}function colorAlpha(e,t){return 4294967040&e|f(m((255&e)*t),0,255)}function fontStyleAlpha(e,t){return fontStyle(e,{color:colorAlpha((e||_).color,t),outline_color:colorAlpha((e||_).outline_color,t),glow_color:colorAlpha((e||_).glow_color,t)})}var be=null
var y=false
var w=[]
var b=0
var x=[]
var S=0
var E=v()
var xe
var Se={}
function techParamsAlloc(){if(S===x.length)x.push({param0:v(),outline_color:v(),glow_color:v(),glow_params:v()})
be=x[S++]}function fontStartup(){if(be)return
xe=i.stats
techParamsAlloc()}function techParamsSet(e,t){var r=be[e]
if(!y)if(r[0]!==t[0]||r[1]!==t[1]||r[2]!==t[2]||r[3]!==t[3]){var a=be
techParamsAlloc()
p(be.param0,a.param0)
p(be.outline_color,a.outline_color)
p(be.glow_color,a.glow_color)
p(be.glow_params,a.glow_params)
xe.font_params++
y=true
r=be[e]}else return
if(y){r[0]=t[0]
r[1]=t[1]
r[2]=t[2]
r[3]=t[3]}}var T=["param0","outline_color","glow_color","glow_params"]
function sameTP(e){for(var t=0;t<4;++t){var r=T[t]
var a=be[r]
var i=e[r]
for(var n=0;n<4;++n)if(a[n]!==i[n])return false}return true}function techParamsGet(){if(!y)return be
y=false
for(var e=0;e<w.length;++e)if(sameTP(w[e])){if(be===x[S-1])S--
be=w[e]
if(b===e)b=(b+1)%4;--xe.font_params
return be}w[b]=be
b=(b+1)%4
return be}function GlovFont(e,t){oe(0!==e.font_size)
this.texture=u({url:"img/"+t+".png",filter_min:e.noFilter?gl.NEAREST:gl.LINEAR,filter_mag:e.noFilter?gl.NEAREST:gl.LINEAR,wrap_s:gl.CLAMP_TO_EDGE,wrap_t:gl.CLAMP_TO_EDGE})
this.textures=[this.texture]
this.integral=Boolean(e.noFilter)
this.font_info=e
this.font_size=e.font_size
this.inv_font_size=1/e.font_size
this.shader=h.font_aa
this.tex_w=e.imageW
this.tex_h=e.imageH
for(var r=0;r<e.char_infos.length;++r){var a=e.char_infos[r]
a.scale=1/(a.sc||1)
a.w=a.w||0}this.char_infos=[]
for(var i=0;i<e.char_infos.length;++i){var n=e.char_infos[i];(this.char_infos[e.char_infos[i].c]=n).xpad=n.xpad||0
n.yoffs=n.yoffs||0
n.w_pad_scale=(n.w+n.xpad)*n.scale}this.replacement_character=this.infoFromChar(65533)
if(!this.replacement_character)this.replacement_character=this.infoFromChar(63)
this.whitespace_character=this.infoFromChar(13)
this.default_style=new GlovFontStyle
this.applied_style=new GlovFontStyle
fontStartup()}GlovFont.prototype.drawSizedColor=function(e,t,r,a,i,n,o){return this.drawSized(fontStyleColored(e,n),t,r,a,i,o)}
GlovFont.prototype.drawSized=function(e,t,r,a,i,n){Se.style=e
Se.x=t
Se.y=r
Se.z=a
Se.xsc=i*this.inv_font_size
Se.ysc=i*this.inv_font_size
Se.text=n
return this.drawScaled()}
GlovFont.prototype.drawSizedAligned=function(e,t,r,a,i,n,o,s,l){profilerStart("drawSizedAligned")
l=ce(l)
if(n&A.HWRAP){var u=this.drawSizedAlignedWrapped(e,t,r,a,0,i,n&~A.HWRAP,o,s,l)
profilerStop("drawSizedAligned")
return u}var f=i
var c=i
if(n&g){var d=this.getStringWidth(e,f,l)
if(n&A.HFIT&&d>o){var v=o/d
f*=v
d=o
if(v<.5){if((n&A.VMASK)!==A.VCENTER&&(n&A.VMASK)!==A.VBOTTOM)r+=.5*(c-c*v*2)
c*=2*v}}switch(n&A.HMASK){case A.HCENTER:t+=.5*(o-d)
if(this.integral)t=m(t)
break
case A.HRIGHT:t+=o-d}}switch(n&A.VMASK){case A.VCENTER:r+=.5*(s-c)
if(this.integral)r=m(r)
break
case A.VBOTTOM:r+=s-c}var p=f*this.inv_font_size
var h=c*this.inv_font_size
Se.style=e
Se.x=t
Se.y=r
Se.z=a
Se.xsc=p
Se.ysc=h
Se.text=l
var _=this.drawScaled()
profilerStop("drawSizedAligned")
return _}
GlovFont.prototype.drawSizedAlignedWrapped=function(e,t,r,a,i,n,o,s,l,u){u=ce(u)
oe(s>0)
oe("string"!==typeof l)
var f=[]
var c=[]
f.length=this.wrapLines(e,s,i,n,u,o,function(e,t,r){c[t]=e
f[t]=r})
var d=0
var v=n*f.length
var p=o&A.VMASK
switch(p){case A.VCENTER:d=(l-v)/2
if(this.integral)d|=0
break
case A.VBOTTOM:d=l-v}o&=~A.VMASK
for(var h=0;h<f.length;++h){var _=f[h]
if(_&&_.trim())this.drawSizedAligned(e,t+c[h],r+d,a,n,o,s-c[h],0,_)
d+=n}return p===A.VBOTTOM?v:d}
GlovFont.prototype.drawSizedColorWrapped=function(e,t,r,a,i,n,o,s,l){return this.drawScaledWrapped(fontStyleColored(e,s),t,r,a,i,n,o*this.inv_font_size,o*this.inv_font_size,l)}
GlovFont.prototype.drawSizedWrapped=function(e,t,r,a,i,n,o,s){return this.drawScaledWrapped(e,t,r,a,i,n,o*this.inv_font_size,o*this.inv_font_size,s)}
var R=24
function fontSetDefaultSize(e){R=e}GlovFont.prototype.draw=function(e){var t=e.style,r=e.color,a=e.alpha,i=e.x,n=e.y,o=e.z,s=e.size,l=e.w,u=e.h,f=e.align,c=e.text,d=e.indent
if(r)t=fontStyleColored(t,r)
if(void 0!==a)t=fontStyleAlpha(t,a)
d=d||0
s=s||R
o=o||Z.UI
if(f){if(f&A.HWRAP)return this.drawSizedAlignedWrapped(t,i,n,o,d,s,f&~A.HWRAP,l,u,c)
return this.drawSizedAligned(t,i,n,o,s,f,l||0,u||0,c)}else return this.drawSized(t,i,n,o,s,c)}
GlovFont.prototype.wrapLines=function(e,t,r,a,i,n,o){oe("number"!==typeof e)
this.applyStyle(e)
return this.wrapLinesScaled(t,r,a*this.inv_font_size,i,n,o)}
GlovFont.prototype.numLines=function(e,t,r,a,i){return this.wrapLines(e,t,r,a,i,0)}
GlovFont.prototype.dims=function(e,t,r,a,i){var n=0
function lineCallback(e,t,r,a){n=de(n,a)}var o=this.wrapLines(e,t,r,a,i,0,lineCallback)
return{w:n,h:o*a,numlines:o}}
var k
GlovFont.prototype.infoFromChar=function(e){var t=this.char_infos[e]
if(t)return t
if(e>=9&&e<=13)return this.whitespace_character
if(k){var r=k[e]
if(r)if(t=this.char_infos[r])return t}return this.replacement_character}
GlovFont.prototype.getCharacterWidth=function(e,t,r){oe.equal(typeof r,"number")
this.applyStyle(e)
var a=this.infoFromChar(r)
var i=t*this.inv_font_size
var n=this.calcXAdvance(i)
if(a)return a.w_pad_scale*i+n
return 0}
GlovFont.prototype.getStringWidth=function(e,t,r){r=ce(r)
this.applyStyle(e)
var a=0
var i=t*this.inv_font_size
var n=this.calcXAdvance(i)
for(var o=0;o<r.length;++o){var s=r.charCodeAt(o)
var l=this.infoFromChar(s)
if(l)a+=l.w_pad_scale*i+n}return a}
GlovFont.prototype.getSpaceSize=function(e){var t=this.infoFromChar(32)
return(t?(t.w+t.xpad)*t.scale:this.font_size)*e}
function endsWord(e){return 32===e||0===e||10===e||9===e}GlovFont.prototype.wrapLinesScaled=function(e,t,r,a,i,n){a=ce(a)
oe("function"!==typeof i)
var o=a.length
var s=e-t
var l=i&A.HFIT
var u=this.calcXAdvance(r)
var f=this.getSpaceSize(r)+u
var c=0
var d=0
var v=0
var p=0
var h=-1
var _=0
var m=0
var g=0
var y=-1
var w=0
var b=0
function flushLine(){if(-1!==h&&n)n(v,b,a.slice(d,h),p)
b++
d=_
h=p=-1
m=v=t}do{var x=c<o?a.charCodeAt(c)||65533:0
if(endsWord(x))if(_!==c){var S=false
if(m+g<=e);else if(g>s&&!l){S=true
if(-1===y){if(-1!==h)flushLine()
c=d+1
g=s}else{c=y
g=w}}else if(-1!==h)flushLine()
m=p=m+g
g=0
_=h=c
y=-1
if(S)flushLine()
continue}else{_=c+1
m+=f
if(10===x)flushLine()}else{var E=this.infoFromChar(x)
if(E){var T=E.w_pad_scale*r+u
if(m+(g+=T)<=e){y=c+1
w=g}}}++c}while(c<=o)
if(-1!==h)flushLine()
return b}
GlovFont.prototype.drawScaledWrapped=function(e,i,n,t,r,a,o,s,l){var u=this
if(null===l||void 0===l)l="(null)"
oe(r>0)
this.applyStyle(e)
this.last_width=0
Se.style=e
Se.z=t
Se.xsc=o
Se.ysc=s
return this.wrapLinesScaled(r,a,o,l,0,function(e,t,r,a){Se.x=i+e
Se.y=n+u.font_size*s*t
Se.text=r
u.drawScaled()
u.last_width=de(u.last_width,a)})*this.font_size*s}
GlovFont.prototype.calcXAdvance=function(e){var t=this.font_size/32
var r=m(e*t*de(this.applied_style.outline_width-2,0))
return de(r,e*t*de(this.applied_style.glow_outer-this.applied_style.glow_xoffs-3,0))}
var Ee=v()
var Te=v()
var Ae=v()
var Re=v()
GlovFont.prototype.drawScaled=function(){var e=Se.style,t=Se.x,r=Se.y,a=Se.z,i=Se.xsc,n=Se.ysc,o=Se.text
profilerStart("drawScaled")
o=ce(o)
var s=t
oe(isFinite(s))
oe(isFinite(r))
oe(isFinite(a))
var l=this.font_info
r+=(l.y_offset||0)*n
var u=this.textures
if(null===o||void 0===o)o="(null)"
var f=o.length
if(0===i||0===n){profilerStop("drawScaled")
return 0}xe.font_calls++
this.applyStyle(e)
var c=fe.defines.NOPREMUL?pe:he
var d=.5*(i+n)
var v=.5*(i*se.data[4]+n*se.data[5])
var p=this.calcXAdvance(i)
var h=this.font_size/32
var _=0
var m=this.applied_style
var g=.5/l.spread
var y=g/v
var w=ye(Ee,1/y,-.5/y+.5,ve(0,-.5/y+.5+m.outline_width*h*v))
var b=de(0,m.outline_width*h*d)
var x=m.glow_outer*h
Ae[0]=de(x*i-m.glow_xoffs*h*i,b)
Ae[2]=de(x*i+m.glow_xoffs*h*i,b)
Ae[1]=de(x*n-m.glow_yoffs*h*n,b)
Ae[3]=de(x*n+m.glow_yoffs*h*n,b)
techParamsSet("param0",w)
var S=Te
if(m.glow_outer){S[2]=1/((m.glow_outer-m.glow_inner)*g*h)
S[3]=ve(0,-(.5-m.glow_outer*g*h)/((m.glow_outer-m.glow_inner)*g*h))}else S[2]=w[3]=0
we(Re,Ae,1/d)
for(var E=0;E<4;++E)if(Re[E]>l.spread){var T=l.spread/Re[E]
Ae[E]*=T
Re[E]*=T}var A=m.glow_xoffs<0?-1e-4:0
if(!A)_e()
var R=m.glow_xoffs||m.glow_yoffs
if(!R){S[0]=S[1]=0
techParamsSet("glow_params",S)
techParamsGet()}var k=i/d
var C=n/d
var I=ue(r)
var P=m.color_vec4
var F=this.shader
for(var D=0;D<f;D++){var N=o.charCodeAt(D)
if(9===N){var O=i*this.font_size*4
s=(1+((s-t)/O|0))*O+t}else{var L=this.infoFromChar(N)
if(L){var U=L.scale
var M=i*U
if(L.w){var j=n*U
var B=1/U
var G=this.tex_w
var z=this.tex_h
if(R&&U!==_){S[0]=-m.glow_xoffs*h*B/G
S[1]=-m.glow_yoffs*h*B/z
techParamsSet("glow_params",S)
if(!A){me()
_e()}techParamsGet()
_=U}var H=(L.x0-Re[0]*B)/G
var V=(L.x0+L.w+Re[2]*B)/G
var W=(L.y0-Re[1]*B)/z
var q=(L.y0+L.h+Re[3]*B)/z
var Y=L.w*M+(Ae[0]+Ae[2])*k
var K=L.h*j+(Ae[1]+Ae[3])*C
var Z=s-k*Ae[0]
var J=r-C*Ae[2]+L.yoffs*j
var X=J+K
var Q=Z+Y
var $=a+A*D
var ee=le(Z)
var te=ue(J)
var re=le(Q)
var ae=ue(X)
var ie=ge(u,F,be,c)
var ne=ie.data
ne[0]=ee
ne[1]=te
ne[2]=P[0]
ne[3]=P[1]
ne[4]=P[2]
ne[5]=P[3]
ne[6]=H
ne[7]=W
ne[8]=ee
ne[9]=ae
ne[10]=P[0]
ne[11]=P[1]
ne[12]=P[2]
ne[13]=P[3]
ne[14]=H
ne[15]=q
ne[16]=re
ne[17]=ae
ne[18]=P[0]
ne[19]=P[1]
ne[20]=P[2]
ne[21]=P[3]
ne[22]=V
ne[23]=q
ne[24]=re
ne[25]=te
ne[26]=P[0]
ne[27]=P[1]
ne[28]=P[2]
ne[29]=P[3]
ne[30]=V
ne[31]=W
ie.x=ee
ie.y=I
ie.queue($)}s+=(L.w+L.xpad)*M+p}}}if(!A)me()
profilerStop("drawScaled")
return s-t}
GlovFont.prototype.determineShader=function(){var e=this.applied_style.outline_width&&255&this.applied_style.outline_color
var t=this.applied_style.glow_outer>0&&255&this.applied_style.glow_color
if(e)if(t)this.shader=h.font_aa_outline_glow
else this.shader=h.font_aa_outline
else if(t)this.shader=h.font_aa_glow
else this.shader=h.font_aa}
GlovFont.prototype.applyStyle=function(e){if(!e)e=this.default_style
if(fe.defines.NOPREMUL){vec4ColorFromIntColor(E,e.outline_color)
techParamsSet("outline_color",E)
vec4ColorFromIntColor(E,e.glow_color)
techParamsSet("glow_color",E)}else{vec4ColorFromIntColorPreMultiplied(E,e.outline_color)
techParamsSet("outline_color",E)
vec4ColorFromIntColorPreMultiplied(E,e.glow_color)
techParamsSet("glow_color",E)}this.applied_style.outline_width=e.outline_width
this.applied_style.outline_color=e.outline_color
this.applied_style.glow_xoffs=e.glow_xoffs
this.applied_style.glow_yoffs=e.glow_yoffs
this.applied_style.glow_inner=e.glow_inner
this.applied_style.glow_outer=e.glow_outer
this.applied_style.glow_color=e.glow_color
this.applied_style.color=e.color
if(fe.defines.NOPREMUL)p(this.applied_style.color_vec4,e.color_vec4)
else{var t=this.applied_style.color_vec4[3]=e.color_vec4[3]
d(this.applied_style.color_vec4,e.color_vec4,t)}this.determineShader()}
GlovFont.prototype.ALIGN=A
GlovFont.prototype.style=fontStyle
GlovFont.prototype.styleAlpha=fontStyleAlpha
GlovFont.prototype.styleColored=fontStyleColored
function fontShadersInit(){if(h.font_aa)return
h.font_aa=o("shaders/font_aa.fp")
h.font_aa_glow=o("shaders/font_aa_glow.fp")
h.font_aa_outline=o("shaders/font_aa_outline.fp")
h.font_aa_outline_glow=o("shaders/font_aa_outline_glow.fp")
s(l.sprite_vshader,h.font_aa)
s(l.sprite_vshader,h.font_aa_glow)
s(l.sprite_vshader,h.font_aa_outline)
s(l.sprite_vshader,h.font_aa_outline_glow)}function fontCreate(e,t){fontShadersInit()
return new GlovFont(e,t)}function fontTick(){b=0
w.length=0
S=0
techParamsAlloc()}function fontSetReplacementChars(e){k=e}},{"../common/util.js":92,"../common/vmath.js":94,"./camera2d.js":13,"./engine.js":19,"./geom.js":27,"./localization.js":38,"./shaders.js":56,"./sprites.js":63,"./textures.js":65,assert:void 0}],26:[function(e,t,r){"use strict"
r.framebufferCapture=framebufferCapture
r.framebufferEnd=framebufferEnd
r.framebufferEndOfFrame=framebufferEndOfFrame
r.framebufferSkipRelease=framebufferSkipRelease
r.framebufferStart=framebufferStart
r.framebufferTopOfFrame=framebufferTopOfFrame
r.framebufferUpdateCanvasForCapture=framebufferUpdateCanvasForCapture
r.temporaryTextureClaim=temporaryTextureClaim
var c=e("assert")
var a=e("./browser.js").is_ios
var i=e("./cmds.js").cmd_parse
var n=e("./effects.js").applyCopy
var d=e("./engine.js")
var v=d.renderWidth,p=d.renderHeight
var o=e("./perf.js")
var h=e("./settings.js")
var s=e("./textures.js"),u=s.TEXTURE_FORMAT,l=s.textureCreateForCapture,f=s.textureCreateForDepthCapture
var _=0
var m=0
var g={}
var y={}
var w={}
var b=false
function resetFBOs(){b=true}var x=false
function framebufferSkipRelease(){x=true}var S=0
function getTemporaryTexture(e,t,r){var a=e+"_"+t
var i=r&&h.use_fbos
if(i)a+="_fbo"
var n=g[a]
if(!n)n=g[a]={list:[],idx:0}
if(n.idx>=n.list.length){var o=l("temp_"+a+"_"+ ++S)
if(i)o.allocFBO(e,t)
n.list.push(o)}return n.list[n.idx++]}function bindTemporaryDepthbuffer(e,t){var r=e+"_"+t
var a=y[r]
if(!a)a=y[r]={list:[],idx:0}
if(a.idx>=a.list.length){var i=gl.createRenderbuffer()
gl.bindRenderbuffer(gl.RENDERBUFFER,i)
var n
if(h.fbo_depth16){gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,e,t)
n=gl.DEPTH_ATTACHMENT}else{gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_STENCIL,e,t)
n=gl.DEPTH_STENCIL_ATTACHMENT}gl.bindRenderbuffer(gl.RENDERBUFFER,null)
a.list.push({depth_buffer:i,attachment:n})}var o=a.list[a.idx++],s=o.depth_buffer,l=o.attachment
gl.framebufferRenderbuffer(gl.FRAMEBUFFER,l,gl.RENDERBUFFER,s)}function bindTemporaryDepthbufferTexture(e,t){var r=e+"_"+t
var a=w[r]
if(!a)a=w[r]={list:[],idx:0}
if(a.idx>=a.list.length){var i=f("temp_"+r+"_"+ ++S,h.fbo_depth16?u.DEPTH16:u.DEPTH24)
i.allocDepth(e,t)
var n=h.fbo_depth16?gl.DEPTH_ATTACHMENT:gl.DEPTH_STENCIL_ATTACHMENT
a.list.push({tex:i,attachment:n})}var o=a.list[a.idx++],s=o.tex,l=o.attachment
gl.framebufferTexture2D(gl.FRAMEBUFFER,l,gl.TEXTURE_2D,s.handle,0)
return s}function temporaryTextureClaim(e){for(var t in g){var r=g[t]
var a=r.list.indexOf(e)
if(-1!==a){r.list.splice(a,1)
if(r.idx>a)--r.idx
return}}c(false)}function framebufferCaptureStart(e,t,r,a){c.equal(d.viewport[0],0)
c.equal(d.viewport[1],0)
if(!t){t=v()
r=p()}if(!e)e=getTemporaryTexture(t,r,a)
e.captureStart(t,r)
return e}function framebufferCapture(e,t,r,a,i){(e=framebufferCaptureStart(e,t,r,false)).captureEnd(a,i)
return e}var E
var T
function framebufferStart(e){c(!E)
c(!T)
var t=e.width,r=e.height,a=e.viewport,i=e.final,n=e.clear,o=e.need_depth,s=e.clear_all,l=e.clear_color,u=e.force_tex
if(!t){t=v()
r=p()}++m
T=null
if(u){c(a);(E=u).captureStart()}else if(!i){E=framebufferCaptureStart(null,t,r,true)
if(h.use_fbos)if(o)if("texture"===o)T=bindTemporaryDepthbufferTexture(t,r)
else bindTemporaryDepthbuffer(t,r)}if(l)gl.clearColor(l[0],l[1],l[2],l[3])
if(n&&s){gl.disable(gl.SCISSOR_TEST)
gl.clear(gl.COLOR_BUFFER_BIT|(o?gl.DEPTH_BUFFER_BIT:0))}var f
if(a){d.setViewport(a)
f=a[0]||a[1]||a[2]!==d.width||a[3]!==d.height
if(s)f=false}else{d.setViewport([0,0,t,r])
f=t!==d.width}if(f){gl.enable(gl.SCISSOR_TEST)
if(a)gl.scissor(a[0],a[1],a[2],a[3])
else gl.scissor(0,0,t,r)}else gl.disable(gl.SCISSOR_TEST)
if(n&&!s)gl.clear(gl.COLOR_BUFFER_BIT|(o?gl.DEPTH_BUFFER_BIT:0))}function framebufferEnd(e){c(E)
var t=e=e||{},r=t.filter_linear,a=t.wrap,i=t.need_depth
c.equal(Boolean(T),"texture"===i)
E.captureEnd(r,a)
var n
if(T)n=[E,T]
else n=E
T=E=null
return n}function framebufferTopOfFrame(){T=E=null}function framebufferEndOfFrame(){c(!E)
_=m
m=0
x=x&&!b
for(var e in g){var t=g[e]
if(b)t.idx=0
if(!x)while(t.list.length>t.idx)t.list.pop().destroy()
if(!t.list.length)delete g[e]
else t.idx=0}for(var r in y){var a=y[r]
if(b)a.idx=0
if(!x)while(a.list.length>a.idx){var i=a.list.pop().depth_buffer
gl.deleteRenderbuffer(i)}if(!a.list.length)delete y[r]
else a.idx=0}for(var n in w){var o=w[n]
if(b)o.idx=0
if(!x)while(o.list.length>o.idx)o.list.pop().tex.destroy()
if(!o.list.length)delete w[n]
else o.idx=0}x=b=false}function framebufferUpdateCanvasForCapture(){if(E&&h.use_fbos){var e=E
var t=d.viewport.slice(0)
framebufferEnd()
n({source:e,final:true,viewport:t})
framebufferStart({force_tex:e,viewport:t})
return e}else return{width:d.viewport[2],height:d.viewport[3]}}h.register({show_passes:{label:"Show Postprocessing Passes",default_value:0,type:i.TYPE_INT,range:[0,1]},use_fbos:{label:"Use Framebuffer Objects for postprocessing",default_value:a?1:0,type:i.TYPE_INT,range:[0,1],ver:1},fbo_depth16:{label:"Use 16-bit depth buffers for offscreen rendering",default_value:0,type:i.TYPE_INT,range:[0,1],on_change:resetFBOs},fbo_rgba:{label:"Use RGBA color buffers for offscreen rendering",default_value:0,type:i.TYPE_INT,range:[0,1],on_change:resetFBOs}})
b=false
o.addMetric({name:"passes",show_stat:"show_passes",labels:{"passes: ":function passes(){return _.toString()}}})},{"./browser.js":11,"./cmds.js":15,"./effects.js":18,"./engine.js":19,"./perf.js":43,"./settings.js":54,"./textures.js":65,assert:void 0}],27:[function(e,t,r){"use strict"
r.TRIANGLE_FAN=r.TRIANGLES=r.QUADS=void 0
r.geomCreate=geomCreate
r.geomCreateIndices=geomCreateIndices
r.geomCreateQuads=geomCreateQuads
r.geomResetState=geomResetState
r.geomStartup=geomStartup
r.stats=void 0
var c=e("assert")
var a=e("./cmds.js").cmd_parse
var o=e("./engine.js")
var i=e("./perf.js")
var n=e("./settings.js")
var s=e("./shaders.js").MAX_SEMANTIC
var l=Math.ceil,u=Math.max,f=Math.min
var d=4
r.TRIANGLES=d
var v=6
r.TRIANGLE_FAN=v
var p=7
r.QUADS=p
var h=65532
n.register({show_render_stats:{default_value:0,type:a.TYPE_INT,range:[0,1]}})
var _={draw_calls:0,draw_calls_geom:0,draw_calls_sprite:0,draw_calls_dyn:0,tris:0,verts:0,sprites:0,dyn:0,sprite_sort_elems:0,sprite_sort_cmps:0,font_calls:0,font_params:0}
r.stats=_
var m={}
var g={}
var y=function _loop(e){g[e+": "]=function(){return String(m[e])}}
for(var w in _)y(w)
i.addMetric({name:"render_stats",show_stat:"show_render_stats",show_all:true,labels:g})
var b={5120:1,5121:1,5122:2,5123:2,5126:4}
var x
var S=null
var E=null
var T
var A=0
function deleteBuffer(e){if(!e)return
if(S===e){gl.bindBuffer(gl.ARRAY_BUFFER,null)
S=null}if(E===e){gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null)
E=null}gl.deleteBuffer(e)}var R=0
function enableVertexAttribArray(e){if(e===R)return
var t=R&~e
var r=~R&e
R=e
if(t){var a=0
do{if(1&t)gl.disableVertexAttribArray(a)
a++
t>>=1}while(t)}if(r){var i=0
do{if(1&r)gl.enableVertexAttribArray(i)
i++
r>>=1}while(r)}}function getQuadIndexBuf(e){c(e<=h/4)
if(6*e>A){if(!T)T=gl.createBuffer()
else o.perf_state.gpu_mem.geom-=2*A
A=f(u(l(1.5*A),6*e),6*h/4)
if(E!==T){gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,T)
E=T}var t=new Uint16Array(A)
var r=0
for(var a=0;a<A;){t[a++]=r+1
t[a++]=r+3
t[a++]=r++
t[a++]=r++
t[a++]=r++
t[a++]=r++}gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,t,gl.STATIC_DRAW)
o.perf_state.gpu_mem.geom+=2*A}return T}function geomCreateIndices(e){var t={ibo:gl.createBuffer(),ibo_size:e.length}
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,t.ibo)
E=t.ibo
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,e,gl.STATIC_DRAW)
o.perf_state.gpu_mem.geom+=2*e.length
return t}function formatInfo(e){if(!e.info){var t=0
var r=0
var a=0
var i=0
for(var n=0;n<e.length;++n){var o=e[n]
var s=o[0]
var l=o[1]
var u=o[2]
a|=1<<s
var f=b[l]
c(f)
c(!i||f===i)
i=f
o[3]=o[3]||false
t+=u*(o[4]=f)
r+=u}e.info={stride:t,elem_count:r,used_attribs:a,common_byte_size:i}}return e.info}function Geom(e,t,r,a){this.mode=a||d
this.format=e
var i=this.format_info=formatInfo(e)
this.stride=i.stride
this.used_attribs=i.used_attribs
this.vert_count=t.length/this.format_info.elem_count
this.vert_gpu_mem=t.length*this.format_info.common_byte_size
if(t.length){this.vbo=gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER,this.vbo)
S=this.vbo
gl.bufferData(gl.ARRAY_BUFFER,t,gl.STATIC_DRAW)
o.perf_state.gpu_mem.geom+=this.vert_gpu_mem}this.orig_mode=a
if(r)if(r.ibo){this.ibo=r.ibo
this.ibo_owned=false
this.ibo_size=r.ibo_size}else if(r.length){this.ibo=gl.createBuffer()
this.ibo_owned=true
this.ibo_size=r.length
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibo)
E=this.ibo
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,r,gl.STATIC_DRAW)
o.perf_state.gpu_mem.geom+=2*r.length}else{this.ibo=null
this.ibo_owned=true
this.ibo_size=0}else if(a===p){c.equal(this.vert_count%4,0)
var n=this.vert_count/4
this.ibo=getQuadIndexBuf(n)
this.ibo_owned=false
this.ibo_size=6*n
this.mode=d}else if(a===v)this.mode=v
else{this.ibo=null
this.ibo_owned=false}this.updateTriCount()}function trianglesFromMode(e,t){if(e===d)return t/3
else if(e===v)return t-2
else{c(!t)
return 0}}Geom.prototype.updateTriCount=function(){var e=this.ibo?this.ibo_size:this.vert_count
this.tri_count=trianglesFromMode(this.mode,e)}
Geom.prototype.updateIndex=function(e,t){c.equal(this.ibo_owned,true)
if(t>this.ibo_size){if(x===this)x=null
o.perf_state.gpu_mem.geom-=2*this.ibo_size
deleteBuffer(this.ibo)
this.ibo_size=e.length
this.ibo=gl.createBuffer()
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibo)
E=this.ibo
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,e,gl.DYNAMIC_DRAW)
o.perf_state.gpu_mem.geom+=2*e.length}else{if(E!==this.ibo){gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibo)
E=this.ibo}gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER,0,e.subarray(0,t))}this.updateTriCount()}
Geom.prototype.updateSub=function(e,t){if(S!==this.vbo){gl.bindBuffer(gl.ARRAY_BUFFER,this.vbo)
S=this.vbo}gl.bufferSubData(gl.ARRAY_BUFFER,e,t)}
Geom.prototype.update=function(e,t){if(t>this.vert_count){if(x===this)x=null
o.perf_state.gpu_mem.geom-=this.vert_gpu_mem
deleteBuffer(this.vbo)
this.vert_count=e.length/this.format_info.elem_count
this.vert_gpu_mem=e.length*this.format_info.common_byte_size
this.vbo=gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER,this.vbo)
S=this.vbo
gl.bufferData(gl.ARRAY_BUFFER,e,gl.DYNAMIC_DRAW)
o.perf_state.gpu_mem.geom+=this.vert_gpu_mem}else{if(S!==this.vbo){gl.bindBuffer(gl.ARRAY_BUFFER,this.vbo)
S=this.vbo}gl.bufferSubData(gl.ARRAY_BUFFER,0,e.subarray(0,t*this.format_info.elem_count))}if(this.orig_mode===p){c.equal(this.ibo_owned,false)
var r=t/4
this.ibo=getQuadIndexBuf(r)
this.ibo_size=6*r}this.updateTriCount()}
Geom.prototype.dispose=function(){if(this.ibo_owned)deleteBuffer(this.ibo)
this.ibo=null
deleteBuffer(this.vbo)
this.vbo=null
o.perf_state.gpu_mem.geom-=this.vert_gpu_mem
this.vert_gpu_mem=0}
var k=function(){var e=[]
for(var t=0;t<16;++t)e.push({vbo:null,offset:0})
return e}()
function geomResetState(){E=x=null
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null)
S=null
gl.bindBuffer(gl.ARRAY_BUFFER,null)
for(var e=0;e<s;++e)gl.disableVertexAttribArray(e)
for(var t=R=0;t<k.length;++t)k[t].vbo=null
_.draw_calls=_.draw_calls_geom+_.draw_calls_sprite
for(var r in _){m[r]=_[r]
_[r]=0}}Geom.prototype.bind=function(){if(x!==this){var e=(x=this).vbo
var t=0
for(var r=0;r<this.format.length;++r){var a=this.format[r]
var i=a[2]
var n=a[4]
var o=a[0]
if(k[o].vbo===e);else{if(S!==e){gl.bindBuffer(gl.ARRAY_BUFFER,e)
S=e}var s=a[1]
var l=a[3]
gl.vertexAttribPointer(o,i,s,l,this.stride,t)
k[o].vbo=S}t+=i*n}enableVertexAttribArray(this.used_attribs)}if(this.ibo&&E!==this.ibo){gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.ibo)
E=this.ibo}}
Geom.prototype.draw=function(){this.bind();++_.draw_calls_geom
_.tris+=this.tri_count
_.verts+=this.vert_count
if(this.ibo)gl.drawElements(this.mode,this.ibo_size,gl.UNSIGNED_SHORT,0)
else gl.drawArrays(this.mode,0,this.vert_count)}
Geom.prototype.drawSub=function(e,t){c.equal(this.mode,d)
this.bind();++_.draw_calls_geom
if(this.ibo){_.tris+=t
_.verts+=2*t
gl.drawElements(this.mode,3*t,gl.UNSIGNED_SHORT,2*e)}else gl.drawArrays(this.mode,e,3*t)}
function GeomMultiQuads(e,t){var r=formatInfo(e).elem_count
var a=t.length/r
this.geoms=[]
for(var i=0;i<a;i+=h){var n=f(a-i,h)
var o=new Uint8Array(t.buffer,i*r,n*r)
this.geoms.push(new Geom(e,o,null,p))}}GeomMultiQuads.prototype.draw=function(){for(var e=0;e<this.geoms.length;++e)this.geoms[e].draw()}
GeomMultiQuads.prototype.drawSub=function(e,t){for(var r=0;r<this.geoms.length&&t;++r){var a=this.geoms[r]
var i=a.vert_count/4
if(e<6*i){var n=f(t,2*(i-e/6))
a.drawSub(e,n)
t-=n
e=0}else e-=6*i}}
GeomMultiQuads.prototype.dispose=function(){for(var e=0;e<this.geoms.length;++e)this.geoms[e].dispose()
this.geoms=null}
function geomCreate(e,t,r,a){return new Geom(e,t,r,a)}function geomCreateQuads(e,t,r){var a=formatInfo(e)
c(r||t instanceof Uint8Array)
if(t.length/a.elem_count>h)return new GeomMultiQuads(e,t)
return new Geom(e,t,null,p)}function geomStartup(){}r.createIndices=geomCreateIndices
r.create=geomCreate
r.createQuads=geomCreateQuads},{"./cmds.js":15,"./engine.js":19,"./perf.js":43,"./settings.js":54,"./shaders.js":56,assert:void 0}],28:[function(e,t,r){"use strict"
r.decode=decode
var n=new Array(128)
var o=String.fromCodePoint||String.fromCharCode
var s=[]
function decode(e){var t
var r
var a=e.length
for(var i=s.length=0;i<a;){if((r=e[i++])<=127)t=r
else if(r<=223)t=(31&r)<<6|63&e[i++]
else if(r<=239)t=(15&r)<<12|(63&e[i++])<<6|63&e[i++]
else if(String.fromCodePoint)t=(7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++]
else{t=63
i+=3}s.push(n[t]||(n[t]=o(t)))}return s.join("")}},{}],29:[function(e,t,r){"use strict"
r.ATTRIBUTE_TYPE_TO_COMPONENTS=r.ATTRIBUTE_COMPONENT_TYPE_TO_BYTE_SIZE=r.ATTRIBUTE_COMPONENT_TYPE_TO_ARRAY=void 0
r.getAccessorTypeFromSize=getAccessorTypeFromSize
var a=["SCALAR","VEC2","VEC3","VEC4"]
function getAccessorTypeFromSize(e){return a[e-1]||a[0]}var i={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16}
r.ATTRIBUTE_TYPE_TO_COMPONENTS=i
var n={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4}
r.ATTRIBUTE_COMPONENT_TYPE_TO_BYTE_SIZE=n
var o={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array}
r.ATTRIBUTE_COMPONENT_TYPE_TO_ARRAY=o},{}],30:[function(e,t,r){"use strict"
var d=e("assert")
var a=e("./unpack-glb-buffers.js").unpackGLBBuffers
var i=e("./unpack-binary-json.js").unpackBinaryJson
function padTo4Bytes(e){return e+3&-4}var v=e("./decode-utf8.js")
var n=e("./gltf-type-utils.js"),l=n.ATTRIBUTE_TYPE_TO_COMPONENTS,u=n.ATTRIBUTE_COMPONENT_TYPE_TO_BYTE_SIZE,f=n.ATTRIBUTE_COMPONENT_TYPE_TO_ARRAY
var p=1735152710
var h=12
var _=8
var m=1313821514
var g=5130562
var y=true
var w=false
function GLBParser(){this.binaryByteOffset=null
this.packedJson=null
this.json=null}function parseBinary(e){var t=new DataView(e.glbArrayBuffer)
var r=t.getUint32(0,w)
var a=t.getUint32(4,y)
var i=t.getUint32(8,y)
if(!(r===p))console.warn("Invalid GLB magic string")
d(2===a,"Invalid GLB version "+a+". Only .glb v2 supported")
d(i>20)
var n=t.getUint32(12,y)
var o=t.getUint32(16,y)
d(o===m||0===o,"JSON chunk format "+o)
var s=h+_
var l=new Uint8Array(e.glbArrayBuffer,s,n)
var u=v.decode(l)
e.json=JSON.parse(u)
var f=s+padTo4Bytes(n)
e.binaryByteOffset=f+_
var c=t.getUint32(f+4,y)
d(c===g||1===c,"BIN chunk format "+c)
return{arrayBuffer:e.glbArrayBuffer,binaryByteOffset:e.binaryByteOffset,json:e.json}}function parseInternal(e){var t=parseBinary(e)
e.packedJson=t.json
e.unpackedBuffers=a(e.glbArrayBuffer,e.json,e.binaryByteOffset)
e.json=i(e.json,e.unpackedBuffers)}GLBParser.prototype.parseSync=function(e){this.glbArrayBuffer=e
if(null===this.json&&null===this.binaryByteOffset)parseInternal(this)
return this}
GLBParser.prototype.parse=function(e){return this.parseSync(e)}
GLBParser.prototype.getApplicationData=function(e){return this.json[e]}
GLBParser.prototype.getJSON=function(){return this.json}
GLBParser.prototype.getArrayBuffer=function(){return this.glbArrayBuffer}
GLBParser.prototype.getBinaryByteOffset=function(){return this.binaryByteOffset}
GLBParser.prototype.getBufferView=function(e){var t=(e.byteOffset||0)+this.binaryByteOffset
return new Uint8Array(this.glbArrayBuffer,t,e.byteLength)}
GLBParser.prototype.getBuffer=function(e){var t=f[e.componentType]
var r=l[e.type]
var a=u[e.componentType]
var i=e.count*r
var n=e.count*r*a
var o=this.json.bufferViews[e.bufferView]
d(n>=0&&e.byteOffset+n<=o.byteLength)
var s=o.byteOffset+this.binaryByteOffset+e.byteOffset
return new t(this.glbArrayBuffer,s,i)}
GLBParser.prototype.getImageData=function(e){return{typedArray:this.getBufferView(e.bufferView),mimeType:e.mimeType||"image/jpeg"}}
GLBParser.prototype.getImage=function(e){var t=this.getBufferView(e.bufferView)
var r=e.mimeType||"image/jpeg"
var a=new Blob([t],{type:r})
var i=(window.URL||window.webkitURL).createObjectURL(a)
var n=new Image
n.src=i
return n};(t.exports=GLBParser).parse=function(e){return(new GLBParser).parse(e)}},{"./decode-utf8.js":28,"./gltf-type-utils.js":29,"./unpack-binary-json.js":31,"./unpack-glb-buffers.js":32,assert:void 0}],31:[function(e,t,r){"use strict"
r.unpackBinaryJson=unpackBinaryJson
function parseJSONPointer(e){if("string"===typeof e){if(0===e.indexOf("##/"))return e.slice(1)
var t=e.match(/#\/([a-z]+)\/([0-9]+)/)
if(t){var r=parseInt(t[2],10)
return[t[1],r]}if(t=e.match(/\$\$\$([0-9]+)/))return["accessors",parseInt(t[1],10)]}return null}function decodeJSONPointer(e,t){var r=parseJSONPointer(e)
if(r){var a=r[0]
var i=r[1]
var n=t[a]&&t[a][i]
if(n)return n
console.error("Invalid JSON pointer "+e+": #/"+a+"/"+i)}return null}function unpackJsonArraysRecursive(e,t,r,a){if(void 0===a)a={}
var i=e
var n=decodeJSONPointer(i,r)
if(n)return n
if(Array.isArray(i))return i.map(function(e){return unpackJsonArraysRecursive(e,t,r,a)})
if(null!==i&&"object"===typeof i){var o={}
for(var s in i)o[s]=unpackJsonArraysRecursive(i[s],t,r,a)
return o}return i}function unpackBinaryJson(e,t,r){if(void 0===r)r={}
return unpackJsonArraysRecursive(e,e,t,r)}},{}],32:[function(e,t,r){"use strict"
r.unpackGLBBuffers=unpackGLBBuffers
var d=e("assert")
var a=e("./gltf-type-utils.js"),s=a.ATTRIBUTE_TYPE_TO_COMPONENTS,l=a.ATTRIBUTE_COMPONENT_TYPE_TO_BYTE_SIZE,u=a.ATTRIBUTE_COMPONENT_TYPE_TO_ARRAY
function getArrayBufferAtOffset(e,t){var r=e.byteLength-t
var a=new ArrayBuffer(r)
var i=new Uint8Array(e)
var n=new Uint8Array(a)
for(var o=0;o<r;o++)n[o]=i[t+o]
return a}function getArrayTypeAndLength(e,t){var r=u[e.componentType]
var a=s[e.type]
var i=l[e.componentType]
var n=e.count*a
var o=e.count*a*i
d(o>=0&&o<=t.byteLength)
return{ArrayType:r,length:n,byteLength:o}}function unpackAccessors(e,t,r){var a=r.accessors||[]
var i=[]
for(var n=0;n<a.length;++n){var o=a[n]
d(o)
var s=t[o.bufferView]
if(s){var l=getArrayTypeAndLength(o,s),u=l.ArrayType,f=l.length
var c=new u(e,s.byteOffset,f)
c.accessor=o
i.push(c)}}return i}function unpackImages(e,t,r){var a=r.images||[]
var i=[]
for(var n=0;n<a.length;++n){var o=a[n]
d(o)
if(void 0===o.bufferView){i.push(null)
continue}var s=t[o.bufferView]
d(s)
var l=new Uint8Array(e,s.byteOffset,s.byteLength)
l.imate=o
i.push(l)}return i}function unpackGLBBuffers(e,t,r){if(r)e=getArrayBufferAtOffset(e,r)
var a=t.bufferViews||[]
for(var i=0;i<a.length;++i){var n=a[i]
d(n.byteLength>=0)}return{accessors:unpackAccessors(e,a,t),images:unpackImages(e,a,t)}}},{"./gltf-type-utils.js":29,assert:void 0}],33:[function(e,t,r){"use strict"
r.handle=handle
r.on=on
r.topOfFrame=topOfFrame
var u=e("assert")
var f={}
function topOfFrame(){f={}}function on(e,t,r){var a=f[e]=f[e]||[]
if("number"===typeof t)a[t]=r
else a.push([t,r])}function handle(e,t){var r=f[e]
if(!r)return
switch(e){case"keydown":case"keyup":if(r[t.keyCode])r[t.keyCode](e,t)
break
case"mouseup":case"mousedown":var a=t.pageX
var i=t.pageY
var n=t.button
for(var o=0;o<r.length;++o){var s=r[o]
var l=s[0]
if(a>=l.x&&a<l.x+l.w&&i>=l.y&&i<l.y+l.h&&(l.button<0||l.button===n)){s[1](e,t)
break}}break
default:u(false)}}},{assert:void 0}],34:[function(e,t,m){"use strict"
m.click=m.PAD=m.KEYS=void 0
m.debugGetMouseMoveX=debugGetMouseMoveX
m.drag=drag
m.dragDrop=dragDrop
m.dragOver=dragOver
m.eatAllInput=eatAllInput
m.eatAllKeyboardInput=eatAllKeyboardInput
m.endFrame=endFrame
m.fakeTouchEvent=fakeTouchEvent
m.handleTouches=handleTouches
m.inputAllowAllEvents=inputAllowAllEvents
m.inputClick=void 0
m.inputEatenMouse=inputEatenMouse
m.inputLastTime=inputLastTime
m.inputPadMode=inputPadMode
m.inputSetEventFilter=inputSetEventFilter
m.inputTouchMode=inputTouchMode
m.keyDown=keyDown
m.keyDownEdge=keyDownEdge
m.keyUpEdge=keyUpEdge
m.longPress=longPress
m.mouseButtonHadEdge=mouseButtonHadEdge
m.mouseButtonHadUpEdge=mouseButtonHadUpEdge
m.mouseConsumeClicks=mouseConsumeClicks
m.mouseDomPos=mouseDomPos
m.mouseDownAnywhere=mouseDownAnywhere
m.mouseDownEdge=mouseDownEdge
m.mouseDownMidClick=mouseDownMidClick
m.mouseDownOverBounds=mouseDownOverBounds
m.mouseMoved=mouseMoved
m.mouseOver=mouseOver
m.mouseOverCaptured=mouseOverCaptured
m.mousePos=mousePos
m.mousePosIsTouch=mousePosIsTouch
m.mouseUpEdge=mouseUpEdge
m.mouseWheel=mouseWheel
m.numTouches=numTouches
m.padButtonDown=padButtonDown
m.padButtonDownEdge=padButtonDownEdge
m.padButtonUpEdge=padButtonUpEdge
m.padGetAxes=padGetAxes
m.pad_mode=void 0
m.pointerLockEnter=pointerLockEnter
m.pointerLockExit=pointerLockExit
m.pointerLockJustEntered=pointerLockJustEntered
m.pointerLocked=pointerLocked
m.startup=startup
m.tickInput=tickInput
m.tickInputInactive=tickInputInactive
m.touch_mode=void 0
var r=e("./input_constants")
var u=e("assert")
var s=0
var g=0
var y=1
var l=2
var w=true
var a=true
var i=false
var n=mouseUpEdge
m.click=n
var o=mouseUpEdge
m.inputClick=o;(0,e("../common/util.js").deprecate)(m,"mouseDown","mouseDownAnywhere, mouseDownMidClick, mouseDownOverBounds")
var f=e("./input_constants")
var c=f.ANY
var d=f.POINTERLOCK
for(var v in r)if("default"!==v)m[v]=r[v]
var p={BACKSPACE:8,TAB:9,ENTER:13,RETURN:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,ESCAPE:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INS:45,DEL:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD0:96,NUMPAD1:97,NUMPAD2:98,NUMPAD3:99,NUMPAD4:100,NUMPAD5:101,NUMPAD6:102,NUMPAD7:103,NUMPAD8:104,NUMPAD9:105,NUMPAD_MULTIPLY:106,NUMPAD_ADD:107,NUMPAD_SUBTRACT:109,NUMPAD_DECIMAL_POINT:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,EQUALS:187,COMMA:188,MINUS:189,PERIOD:190,SLASH:191,TILDE:192}
m.KEYS=p
if("function"===typeof Proxy)m.KEYS=p=new Proxy(p,{get:function get(e,t){var r=e[t]
u(r)
return r}})
var h={A:0,SELECT:0,B:1,CANCEL:1,X:2,Y:3,LB:4,LEFT_BUMPER:4,RB:5,RIGHT_BUMPER:5,LT:6,LEFT_TRIGGER:6,RT:7,RIGHT_TRIGGER:7,BACK:8,START:9,LEFT_STICK:10,RIGHT_STICK:11,UP:12,DOWN:13,LEFT:14,RIGHT:15,ANALOG_UP:20,ANALOG_LEFT:21,ANALOG_DOWN:22,ANALOG_RIGHT:23,LSTICK_UP:20,LSTICK_LEFT:21,LSTICK_DOWN:22,LSTICK_RIGHT:23,RSTICK_UP:24,RSTICK_LEFT:25,RSTICK_DOWN:26,RSTICK_RIGHT:27}
m.PAD=h
var _=e("./browser.js"),b=_.is_firefox,x=_.is_mac_osx
var S=e("./camera2d.js")
var E=e("./cmds.js").cmd_parse
var T=e("./engine.js")
var A=e("./engine.js").renderNeeded
var R=e("./in_event.js")
var k=e("./local_storage.js")
var C=Math.abs,I=Math.max,P=Math.min,F=Math.sqrt
var D=e("./pointer_lock.js")
var N=e("./settings.js")
var O=e("./sound.js").soundResume
var L=e("./spot.js").spotMouseoverHook
var U=e("../common/util.js").empty
var M=e("../common/vmath.js"),j=M.vec2,B=M.v2add,G=M.v2copy,z=M.v2lengthSq,H=M.v2set,V=M.v2scale,W=M.v2sub
var q
var Y
var K={}
var Z=[]
var J=[]
var X=j()
var Q=j()
var $=false
var ee=false
var te=[]
var re=[]
var ae=0
var ie=2
var ne=false
var oe=false
var se={}
var le=true
var ue=k.getJSON("touch_mode",false)
var fe=!(m.touch_mode=ue)&&k.getJSON("pad_mode",false)
m.pad_mode=fe
E.registerValue("mouse_log",{type:E.TYPE_INT,range:[0,1],get:function get(){return i},set:function set(e){return i=e}})
function inputTouchMode(){return ue}function inputPadMode(){return fe}function inputEatenMouse(){return oe}function eventTimestamp(e){if(e&&e.timeStamp){if(e.timeStamp<1e12!==T.hrtime<1e12)return T.hrtime
return e.timeStamp}return T.hrtime}function TouchData(e,t,r,a){this.delta=j()
this.total=0
this.cur_pos=e.slice(0)
this.start_pos=e.slice(0)
this.touch=t
this.button=r
this.start_time=Date.now()
this.dispatched=false
this.dispatched_drag=false
this.dispatched_drag_over=false
this.was_double_click=false
this.up_edge=0
this.down_edge=0
this.state=y
this.down_time=0
this.origin_time=eventTimestamp(a)}TouchData.prototype.down=function(e,t){if(t)this.down_edge++
this.state=y
this.origin_time=eventTimestamp(e)}
var ce=.01
function timeDelta(e,t){var r=eventTimestamp(e)
return I(r-t,ce)}function KeyData(){this.down_edge=0
this.origin_time=0
this.down_time=0
this.up_edge=0
this.state=g}KeyData.prototype.keyUp=function(e){++this.up_edge
this.down_time+=timeDelta(e,this.origin_time)
this.state=g}
function setMouseToMid(){H(X,.5*T.width/S.domToCanvasRatio(),.5*T.height/S.domToCanvasRatio())}function pointerLocked(){return D.isLocked()}var de="m"+d
var ve=-1
function pointerLockEnter(e){D.enter(e)}function onPointerLockEnter(){if(ue)return
ve=T.frame_index
var e=se[de]
setMouseToMid()
if(e){G(e.start_pos,X)
e.state=y
e.origin_time=T.hrtime}else e=se[de]=new TouchData(X,false,d,null)
ae=ie}function pointerLockJustEntered(e){return T.frame_index<=ve+(e||1)}function pointerLockExit(){var e=se[de]
if(e){G(e.cur_pos,X)
e.state=g}D.exit()
ae=ie}var pe
var he={isTrusted:1,sourceCapabilities:1,path:1,currentTarget:1,view:1}
function eventlog(e){if(e===pe)return
var t=[]
for(var r in pe=e){var a=e[r]
if(!a||"function"===typeof a||r.toUpperCase()===r||he[r])continue
t.push(r+":"+(a.id||a))}console.log(T.frame_index+" "+e.type+" "+(pointerLocked()?"ptrlck":"unlckd")+" "+t.join(","))}var _e=false
function inputAllowAllEvents(e){_e=e}function isInputElement(e){return e&&("INPUT"===e.tagName||"TEXTAREA"===e.tagName||"LABEL"===e.tagName||"VIDEO"===e.tagName)}function letWheelEventThrough(e){return _e||isInputElement(e.target)}var me=function event_filter(){return false}
function inputSetEventFilter(e){me=e}function letEventThrough(e){if(!e.target||_e||e.glov_do_not_cancel)return true
return isInputElement(e.target)||String(e.target.className).includes("noglov")||me(e)}function ignored(e){if(!letEventThrough(e)){e.preventDefault()
e.stopPropagation()}}var ge=false
var ye=false
function beforeUnload(e){if(ye&&ge){pointerLockExit()
e.preventDefault()
e.returnValue="Are you sure you want to quit?"}else T.releaseCanvas()}function protectUnload(e){ye=e}var we=0
function inputLastTime(){return we}function onUserInput(){O()
we=Date.now()
A()}function releaseAllKeysDown(e){for(var t in K){var r=K[t]
if(r.state===y)r.keyUp(e)}}function onKeyUp(e){A()
protectUnload(e.ctrlKey)
var t=e.keyCode
if(!letEventThrough(e)){e.stopPropagation()
e.preventDefault()}if(t===p.ESC&&pointerLocked())pointerLockExit()
var r=K[t]
if(r&&r.state===y)if(x&&"Meta"===e.key)releaseAllKeysDown(e)
else r.keyUp(e)
R.handle("keyup",e)}function onKeyDown(e){protectUnload(e.ctrlKey)
var t=e.keyCode
if(!(letEventThrough(e)||t>=p.F5&&t<=p.F12||t===p.I&&(e.altKey&&e.metaKey||e.ctrlKey&&e.shiftKey)||t===p.R&&e.ctrlKey)){e.stopPropagation()
e.preventDefault()}onUserInput()
var r=K[t]
if(!r)r=K[t]=new KeyData
if(r.state!==y){++r.down_edge
r.state=y
r.origin_time=eventTimestamp(e)
R.handle("keydown",e)}}var be=0
function debugGetMouseMoveX(){var e=be
be=0
return e}var xe=false
var Se=false
var Ee=false
var Te=j()
var Ae=0
var Re=0
var ke=0
var Ce=0
function onMouseMove(e,t){A()
if(!letEventThrough(e)&&!t&&3!==e.button){e.preventDefault()
e.stopPropagation()
if(ue){k.setJSON("touch_mode",false)
m.touch_mode=ue=false}if(fe){k.setJSON("pad_mode",false)
m.pad_mode=fe=false}}xe=true
X[0]=e.pageX
X[1]=e.pageY
$=false
var r=e.movementX||e.mozMovementX||e.webkitMovementX||0
var a=e.movementY||e.mozMovementY||e.webkitMovementY||0
be+=r
var i=false
if(pointerLocked()){setMouseToMid()
if(r||a){var n=e.timeStamp||Date.now()
var o=C(r)
var s=C(a)
var l=o+s
if(l>200&&(l>3*Ae||n-Re>1e3))console.log("Ignoring mousemove with sudden large delta: "+r+","+a)
else if(b&&r===ke&&a===Ce&&o<2&&s<2);else{H(Te,r||0,a||0)
i=true}Ae=l
Re=n
ke=r
Ce=a}}else{W(Te,X,Q)
if(Te[0]||Te[1])i=true
G(Q,X)}if(i&&ae&&z(Te)>1e4)i=false
if(i)for(var u=d;u<te.length;++u)if(te[u]||u===d&&pointerLocked()){var f=se["m"+u]
if(f){B(f.delta,f.delta,Te)
f.total+=C(Te[0])+C(Te[1])
G(f.cur_pos,X)}}}function onMouseDown(e){if(i)eventlog(e)
onMouseMove(e)
onUserInput()
var t=letEventThrough(e)
var r=e.button
te[r]=true
var a="m"+r
if(se[a])G(se[a].start_pos,X)
else se[a]=new TouchData(X,false,r,e)
se[a].down(e,!t)
if(!t)R.handle("mousedown",e)
Se=true
if(window.focus)window.focus()}var Ie=[{timestamp:0,pos:j()},{timestamp:0,pos:j()}]
function registerMouseUpEdge(e,t){e.up_edge++
var r=Ie[0]
Ie[0]=Ie[1]
Ie[1]=r
G(r.pos,e.cur_pos)
r.timestamp=t}function onMouseUp(e){if(i)eventlog(e)
onMouseMove(e)
var t=letEventThrough(e)
var r=e.button
if(te[r]){var a=se["m"+r]
if(a){G(a.cur_pos,X)
if(!t)registerMouseUpEdge(a,eventTimestamp(e))
a.state=g
a.down_time+=timeDelta(e,a.origin_time)}delete te[r]}Ee=Se=true
if(!t)R.handle("mouseup",e)}function onWheel(e){A()
var t=xe
onMouseMove(e,true)
xe=t
var r=-e.deltaY||e.wheelDelta||-e.detail
re.push({pos:[e.pageX,e.pageY],delta:r>0?1:-1,dispatched:false})
if(!letWheelEventThrough(e)){e.stopPropagation()
e.preventDefault()}}var Pe=j()
var Fe=0
function onTouchChange(e){onUserInput()
if(!ue){k.set("touch_mode",true)
m.touch_mode=ue=true}if(fe){k.set("pad_mode",false)
m.pad_mode=fe=false}if(false!==e.cancelable)e.preventDefault()
var t=e.touches
var r={}
var a=t.length
var i=0
var n
for(var o=0;o<t.length;++o){var s=t[o]
try{if(!isFinite(s.pageX)||!isFinite(s.pageY)){--a
continue}}catch(e){--a
continue}if(!n)n=s
var l=se[s.identifier]
H(Pe,s.pageX,s.pageY)
if(!l){(l=se[s.identifier]=new TouchData(Pe,true,0,e)).down(e,true)
Se=true
R.handle("mousedown",s)}else{++i
W(Te,Pe,l.cur_pos)
B(l.delta,l.delta,Te)
l.total+=C(Te[0])+C(Te[1])
G(l.cur_pos,Pe)}r[s.identifier]=true
if(w&&1===a){G(X,Pe)
$=true}}var u
var f=[]
for(var c in se)if(!r[c]){var d=se[c]
if(d.touch&&d.state===y){++i
u=d
f.push(c)
R.handle("mouseup",{pageX:d.cur_pos[0],pageY:d.cur_pos[1]})
registerMouseUpEdge(d,eventTimestamp(e))
Ee=Se=true
d.state=g
d.down_time+=timeDelta(e,d.origin_time)
d.release=true}}for(var v=0;v<f.length;++v){var p=f[v]
var h=se[p]
var _="r"+ ++Fe
delete se[p]
se[_]=h}if(w)if(1===i&&0===a){delete te[0]
G(X,u.cur_pos)
$=true}else if(1===a){if(!i)te[0]=true
H(X,n.pageX,n.pageY)
$=true}else if(a>1)delete te[0]}function onBlurOrFocus(e){A()
protectUnload(false)
releaseAllKeysDown(e)}var De={}
function genAnalogMap(){if(a){De[h.LEFT]=[h.LSTICK_LEFT,h.RSTICK_LEFT]
De[h.RIGHT]=[h.LSTICK_RIGHT,h.RSTICK_RIGHT]
De[h.UP]=[h.LSTICK_UP,h.RSTICK_UP]
De[h.DOWN]=[h.LSTICK_DOWN,h.RSTICK_DOWN]}}var Ne=false
function handleTouches(e){e.addEventListener("touchstart",onTouchChange,Ne)
e.addEventListener("touchmove",onTouchChange,Ne)
e.addEventListener("touchend",onTouchChange,Ne)
e.addEventListener("touchcancel",onTouchChange,Ne)}function startup(e,t){Y=e
D.startup(Y,onPointerLockEnter)
if(void 0!==t.map_analog_to_dpad)a=t.map_analog_to_dpad
q=t.pad_to_touch
genAnalogMap()
try{var r=Object.defineProperty({},"passive",{get:function get(){Ne={passive:false}
return false}})
window.addEventListener("test",null,r)
window.removeEventListener("test",null,r)}catch(e){Ne=false}window.addEventListener("keydown",onKeyDown,false)
window.addEventListener("keyup",onKeyUp,false)
window.addEventListener("click",ignored,false)
window.addEventListener("contextmenu",ignored,false)
window.addEventListener("mousemove",onMouseMove,false)
window.addEventListener("mousedown",onMouseDown,false)
window.addEventListener("mouseup",onMouseUp,false)
if(window.WheelEvent)window.addEventListener("wheel",onWheel,Ne)
else{window.addEventListener("DOMMouseScroll",onWheel,false)
window.addEventListener("mousewheel",onWheel,false)}window.addEventListener("blur",onBlurOrFocus,false)
window.addEventListener("focus",onBlurOrFocus,false)
handleTouches(Y)
window.addEventListener("beforeunload",beforeUnload,false)}var Oe=.26
var Le=Oe*Oe
var Ue=2
var Me=.35
function getGamepadData(e){var t=J[e]
if(!t){t=J[e]={id:e,timestamp:0,sticks:new Array(Ue)}
for(var r=0;r<Ue;++r)t.sticks[r]=j()
Z[e]={}}return t}function updatePadState(e,t,r,a){if(r&&!t[a]){t[a]=l
onUserInput()
if(ue){k.set("touch_mode",false)
m.touch_mode=ue=false}if(!fe){k.setJSON("pad_mode",true)
m.pad_mode=fe=true}if(a===q){var i="g"+e.id
if(se[i]){setMouseToMid()
G(se[i].start_pos,X)}else se[i]=new TouchData(X,false,0,null)
se[i].down(null,true)}}else if(!r&&t[a]){t[a]=s
if(a===q){var n="g"+e.id
var o=se[n]
if(o){setMouseToMid()
G(o.cur_pos,X)
registerMouseUpEdge(o,T.hrtime)
o.state=g
o.down_time+=I(T.hrtime-o.origin_time,ce)}}}}function gamepadUpdate(){var e
try{e=navigator.gamepads||navigator.webkitGamepads||navigator.getGamepads&&navigator.getGamepads()||navigator.webkitGetGamepads&&navigator.webkitGetGamepads()}catch(e){}if(e){var t=e.length
for(var r=0;r<t;r++){var a=e[r]
if(!a)continue
var i=getGamepadData(r)
var n=Z[r]
if(i.timestamp<a.timestamp){var o=a.buttons
i.timestamp=a.timestamp
var s=o.length
for(var l=0;l<s;l++){var u=o[l]
if("object"===typeof u)u=u.value
updatePadState(i,n,u=u>.5,l)}}var f=a.axes
if(f.length>=2*Ue){for(var c=0;c<Ue;++c){var d=i.sticks[c]
H(d,f[2*c],-f[2*c+1])
var v=z(d)
if(v>Le){v=F(v)
V(d,d,1/v)
v=P(v,1)
V(d,d,v=(v-Oe)/(1-Oe))}else H(d,0,0)
if(c<=1&&void 0!==q){var p=se["g"+i.id]
if(p){V(Te,d,T.frame_dt)
B(p.delta,p.delta,Te)
p.total+=C(Te[0])+C(Te[1])
setMouseToMid()
G(p.cur_pos,X)}}}updatePadState(i,n,i.sticks[0][0]<-Me,h.LSTICK_LEFT)
updatePadState(i,n,i.sticks[0][0]>Me,h.LSTICK_RIGHT)
updatePadState(i,n,i.sticks[0][1]<-Me,h.LSTICK_DOWN)
updatePadState(i,n,i.sticks[0][1]>Me,h.LSTICK_UP)
updatePadState(i,n,i.sticks[1][0]<-Me,h.RSTICK_LEFT)
updatePadState(i,n,i.sticks[1][0]>Me,h.RSTICK_RIGHT)
updatePadState(i,n,i.sticks[1][1]<-Me,h.RSTICK_DOWN)
updatePadState(i,n,i.sticks[1][1]>Me,h.RSTICK_UP)}}}}function fakeTouchEvent(e){var t="faketouch"
var r=se[t]
if(r&&!e){setMouseToMid()
G(r.cur_pos,X)
registerMouseUpEdge(r,T.hrtime)
r.state=g
r.down_time+=I(T.hrtime-r.origin_time,ce)}else if(!r&&e){setMouseToMid()
se[t]=new TouchData(X,false,0,null)}}function tickInput(){if(ae)--ae
var e=T.hrtime
for(var t in K){var r=K[t]
if(r.state===y){r.down_time+=I(e-r.origin_time,ce)
r.origin_time=e}}for(var a in se){var i=se[a]
if(i.state===y){i.down_time+=I(e-i.origin_time,ce)
i.origin_time=e}}ee=false
gamepadUpdate()
R.topOfFrame()
ge=false
if(se[de]&&!pointerLocked())pointerLockExit()
le=U(se)}function endFrameTickMap(t){Object.keys(t).forEach(function(e){switch(t[e]){case l:t[e]=y
break
case s:delete t[e]}})}function endFrame(e){for(var t in K){var r=K[t]
if(r.state===g){K[t]=null
delete K[t]}else{r.up_edge=0
r.down_edge=0
r.down_time=0}}Z.forEach(endFrameTickMap)
if(!e){for(var a in se){var i=se[a]
if(i.state===g){se[a]=null
delete se[a]}else{i.delta[0]=i.delta[1]=0
i.dispatched=false
i.dispatched_drag=false
i.dispatched_drag_over=false
if(i.drag_payload_frame===T.frame_index-2)i.drag_payload=null
i.up_edge=0
i.down_edge=0
i.down_time=0}}re.length=0
Ee=Se=xe=oe=false}ne=false}function tickInputInactive(){R.topOfFrame()
ge=false
endFrame()}function eatAllInput(e){endFrame(e)
if(!e)oe=ee=true
ne=true}function eatAllKeyboardInput(){eatAllInput(true)}function mousePos(e){e=e||j()
S.domToVirtual(e,X)
return e}function mouseDomPos(){return X}function mouseMoved(){return xe}function mouseButtonHadEdge(){return Se}function mouseButtonHadUpEdge(){return Ee}var je={}
function mousePosParamUnique(e){var t=(e=e||je).mouse_pos_param
if(!t)t=e.mouse_pos_param={}
t.x=void 0===e.x?S.x0Real():e.x
t.y=void 0===e.y?S.y0Real():e.y
t.w=void 0===e.w?S.wReal():e.w
t.h=void 0===e.h?S.hReal():e.h
t.button=void 0===e.button?c:e.button
return t}var Be={}
function mousePosParam(e){Be.x=void 0===(e=e||{}).x?S.x0Real():e.x
Be.y=void 0===e.y?S.y0Real():e.y
Be.w=void 0===e.w?S.wReal():e.w
Be.h=void 0===e.h?S.hReal():e.h
Be.button=void 0===e.button?c:e.button
return Be}var Ge=j()
function checkPos(e,t){if(!S.domToVirtual(Ge,e))return false
return Ge[0]>=t.x&&(Infinity===t.w||Ge[0]<t.x+t.w)&&Ge[1]>=t.y&&(Infinity===t.h||Ge[1]<t.y+t.h)}function wasDoubleClick(e){if(T.hrtime-Ie[0].timestamp>N.double_click_time)return false
return checkPos(Ie[0].pos,e)}function mouseWheel(e){if(oe||!re.length)return 0
var t=mousePosParam(e=e||{})
var r=0
for(var a=0;a<re.length;++a){var i=re[a]
if(i.dispatched)continue
if(checkPos(i.pos,t)){r+=i.delta
i.dispatched=true}}return r}function mouseOverCaptured(){ee=true}function mouseOver(e){profilerStart("mouseOver")
var t=mousePosParamUnique(e=e||{})
L(t,e)
if(ee||pointerLocked()&&!e.allow_pointerlock){profilerStop("mouseOver")
return false}if(!e.peek&&!e.peek_touch)for(var r in se){var a=se[r]
if(checkPos(a.cur_pos,t)){a.down_edge=0
a.up_edge=0
if(!e||!e.drag_target)a.dispatched=true}}var i=false
if(checkPos(X,t)){if(!e.peek&&!e.peek_over)ee=true
i=true}profilerStop("mouseOver")
return i}function mouseDownAnywhere(e){if(oe)return false
if(void 0===e)e=c
for(var t in se){var r=se[t]
if(r.state!==y||!(e===c||e===r.button))continue
return true}return false}function mouseDownMidClick(e){if(oe||le)return false
var t=mousePosParam(e=e||{})
var r=t.button
var a=e.max_dist||50
for(var i in se){var n=se[i]
if(n.state!==y||!(r===c||r===n.button)||n.total>a)continue
if(checkPos(n.cur_pos,t))return true}return false}function mouseDownOverBounds(e){if(oe||le)return false
var t=mousePosParam(e=e||{})
var r=t.button
for(var a in se){var i=se[a]
if(i.state!==y||!(r===c||r===i.button))continue
if(checkPos(i.cur_pos,t))return true}return false}function mousePosIsTouch(){return $}function numTouches(){return Object.keys(se).length}function keyDown(e){if(e===p.CTRL)ge=true
if(ne)return 0
var t=K[e]
if(!t)return 0
if(t.state===y)u(t.down_time)
return t.down_time}function keyDownEdge(e,t){if(ne)return 0
if(t&&t.in_event_cb)R.on("keydown",e,t.in_event_cb)
var r=K[e]
if(!r)return 0
var a=r.down_edge
r.down_edge=0
return a}function keyUpEdge(e,t){if(ne)return 0
if(t&&t.in_event_cb)R.on("keyup",e,t.in_event_cb)
var r=K[e]
if(!r)return 0
var a=r.up_edge
r.up_edge=0
return a}function padGetAxes(e,t,r){u(t>=0&&t<Ue)
if(void 0===r){var a=j()
H(e,0,0)
for(var i=0;i<J.length;++i){padGetAxes(a,t,i)
B(e,e,a)}return}var n=getGamepadData(r).sticks
G(e,n[t])}function padButtonDownInternal(e,t,r){if(t[r])return T.frame_dt
return 0}function padButtonDownEdgeInternal(e,t,r){if(t[r]===l){t[r]=y
return 1}return 0}function padButtonUpEdgeInternal(e,t,r){if(t[r]===s){delete t[r]
return 1}return 0}function padButtonShared(e,t,r){u(void 0!==t)
var a=0
if(void 0===r){for(var i=0;i<Z.length;++i)a+=padButtonShared(e,t,i)
return a}if(oe)return 0
var n=J[r]
if(!n)return 0
var o=Z[r]
var s=De[t]
if(s)for(var l=0;l<s.length;++l)a+=e(n,o,s[l])||0
return a+e(n,o,t)}function padButtonDown(e,t){return padButtonShared(padButtonDownInternal,e,t)}function padButtonDownEdge(e,t){return padButtonShared(padButtonDownEdgeInternal,e,t)}function padButtonUpEdge(e,t){return padButtonShared(padButtonUpEdgeInternal,e,t)}var ze=j()
var He=j()
var Ve=j()
function mouseUpEdge(e){e=e||{}
if(oe||!e.in_event_cb&&le)return null
var t=mousePosParam(e)
var r=t.button
var a=e.max_dist||50
var i=false
for(var n in se){var o=se[n]
if(o.total>a){i=true
continue}if(!o.up_edge)continue
if(o.long_press_dispatched)continue
if(!(r===c||r===o.button))continue
if(checkPos(o.cur_pos,t)){if(!e.peek)o.up_edge=0
return{button:o.button,pos:Ge.slice(0),start_time:o.start_time,was_double_click:wasDoubleClick(t)}}}if(e.in_event_cb&&!ee&&!i){if(!e.phys)e.phys={}
e.phys.button="number"===typeof e.in_event_button?e.in_event_button:r
S.virtualToDomPosParam(e.phys,t)
R.on("mouseup",e.phys,e.in_event_cb)}return null}function mouseDownEdge(e){e=e||{}
if(oe||!e.in_event_cb&&le)return null
var t=mousePosParam(e)
var r=t.button
for(var a in se){var i=se[a]
if(!i.down_edge||!(r===c||r===i.button))continue
if(checkPos(i.cur_pos,t)){if(!e.peek)i.down_edge=0
return{button:i.button,pos:Ge.slice(0),start_time:i.start_time}}}if(e.in_event_cb&&!ee){if(!e.phys)e.phys={}
e.phys.button=r
S.virtualToDomPosParam(e.phys,t)
R.on("mousedown",e.phys,e.in_event_cb)}return null}function mouseConsumeClicks(e){if(le)return
var t=mousePosParam(e=e||{})
var r=t.button
for(var a in se){var i=se[a]
if(!(r===c||r===i.button)||i.dispatched_drag)continue
if(checkPos(i.start_pos,t)){i.down_edge=0
i.start_pos[0]=i.start_pos[1]=Infinity
i.total=Infinity}}}function drag(e){if(oe||le)return null
var t=mousePosParam(e=e||{})
var r=t.button
var a=e.min_dist||0
for(var i in se){var n=se[i]
if(!(r===c||r===n.button)||n.dispatched_drag||i===e.not_touch_id)continue
if(checkPos(n.start_pos,t)){S.domDeltaToVirtual(Ve,[n.total/2,n.total/2])
var o=Ve[0]+Ve[1]
if(o<a)continue
if(!e.peek)n.dispatched_drag=true
var s=n.down_edge
if(e.eat_clicks)n.down_edge=n.up_edge=0
if(e.payload){n.drag_payload=e.payload
n.drag_payload_frame=T.frame_index}S.domToVirtual(ze,n.start_pos)
S.domToVirtual(He,n.cur_pos)
S.domDeltaToVirtual(Ve,n.delta)
return{cur_pos:He,start_pos:ze,delta:Ve,total:o,button:n.button,touch:n.touch,start_time:n.start_time,is_down_edge:s,down_time:n.down_time,touch_id:i}}}return null}function longPress(e){if(oe||le)return null
var t=mousePosParam(e=e||{})
var r=t.button
var a=e.long_press_max_dist||50
var i=e.min_time||500
for(var n in se){var o=se[n]
if(!(r===c||r===o.button)||o.long_press_dispatched)continue
if(checkPos(o.start_pos,t)){S.domDeltaToVirtual(Ve,[o.total/2,o.total/2])
var s=Ve[0]+Ve[1]
if(s>a)continue
if(Date.now()-o.start_time<i)continue
if(!e.peek)o.long_press_dispatched=true
var l=o.down_edge
if(e.eat_clicks)o.down_edge=o.up_edge=0
S.domToVirtual(ze,o.start_pos)
S.domToVirtual(He,o.cur_pos)
S.domDeltaToVirtual(Ve,o.delta)
return{long_press:true,cur_pos:He,start_pos:ze,delta:Ve,total:s,button:o.button,touch:o.touch,start_time:o.start_time,is_down_edge:l,down_time:o.down_time}}}return null}function dragDrop(e){if(oe||le)return null
var t=mousePosParam(e=e||{})
var r=t.button
for(var a in se){var i=se[a]
if(!(r===c||r===i.button)||i.dispatched||!i.drag_payload)continue
if(!i.up_edge)continue
if(checkPos(i.cur_pos,t)){if(!e.peek){i.dispatched_drag_over=true
i.dispatched_drag=true
i.dispatched=true}return{drag_payload:i.drag_payload}}}return null}function dragOver(e){if(oe||le)return null
var t=mousePosParam(e=e||{})
var r=t.button
for(var a in se){var i=se[a]
if(!(r===c||r===i.button)||i.dispatched_drag_over||!i.drag_payload)continue
if(i.state!==y)continue
if(checkPos(i.cur_pos,t)){if(!e.peek)i.dispatched_drag_over=true
S.domToVirtual(He,i.cur_pos)
return{cur_pos:He,drag_payload:i.drag_payload}}}return null}},{"../common/util.js":92,"../common/vmath.js":94,"./browser.js":11,"./camera2d.js":13,"./cmds.js":15,"./engine.js":19,"./in_event.js":33,"./input_constants":35,"./local_storage.js":37,"./pointer_lock.js":46,"./settings.js":54,"./sound.js":59,"./spot.js":60,assert:void 0}],35:[function(e,t,r){"use strict"
r.POINTERLOCK=r.BUTTON_RIGHT=r.BUTTON_POINTERLOCK=r.BUTTON_MIDDLE=r.BUTTON_LEFT=r.BUTTON_ANY=r.ANY=void 0
var a=0
r.BUTTON_LEFT=a
var i=1
r.BUTTON_MIDDLE=i
var n=2
r.BUTTON_RIGHT=n
var o=-2
r.BUTTON_ANY=o
var s=-1
r.BUTTON_POINTERLOCK=s
var l=o
r.ANY=l
var u=s
r.POINTERLOCK=u},{}],36:[function(e,t,r){"use strict"
r.link=link
r.linkGetDefaultStyle=linkGetDefaultStyle
r.linkSetDefaultStyle=linkSetDefaultStyle
r.linkText=linkText
r.linkTick=linkTick
var w=e("assert")
var g=e("./engine.js")
var a=e("./font.js").fontStyle
var y=e("./camera2d.js")
var b=e("./in_event.js")
var x=e("./input.js")
var S=Math.abs
var i=e("./ui.js"),E=i.playUISound,T=i.uiGetDOMElem
var A=e("./ui.js")
var R=e("./uistyle.js").uiStyleCurrent
var k=e("./settings.js")
var n=e("./spot.js"),C=n.SPOT_DEFAULT_BUTTON,I=n.spot,P=n.spotFocusSteal,F=n.spotKey
var D=a(null,{color:1346437119,outline_width:1,outline_color:32})
var N=a(null,{color:65535,outline_width:1,outline_color:32})
function linkGetDefaultStyle(){return D}function linkSetDefaultStyle(e,t){D=e
N=t}var O={}
var L=/https?:\/\//
function preventFocus(e){e.preventDefault()
if(e.relatedTarget)e.relatedTarget.focus()
else e.currentTarget.blur()}function link(e){var t=e.x,r=e.y,a=e.w,i=e.h,n=e.url,o=e.internal,s=e.allow_modal
if(!n.match(L))n=document.location.protocol+"//"+n
var l=F(e)
var u=O[l]
if(!u)u=O[l]={clicked:false}
u.frame=g.frame_index
var f={x:t,y:r,w:a,h:i}
if(y.clipTestRect(f)&&!(k.shader_debug||k.show_profiler)){var c=T(u.elem,s)
if(c!==u.elem)if(u.elem=c){c.textContent=""
var d=document.createElement("a")
d.setAttribute("draggable",false)
d.textContent=" "
d.className="glovui_link noglov"
d.setAttribute("target","_blank")
d.setAttribute("href",n)
d.setAttribute("tabindex","-1")
d.addEventListener("focus",preventFocus)
u.url=n
if(o){var v
var p
x.handleTouches(d)
d.onmousedown=function(e){v=e.pageX
p=e.pageY}
d.onclick=function(e){e.preventDefault()
if(v)if(S(e.pageX-v)+S(e.pageY-p)>50)return
u.clicked=true
b.handle("mouseup",e)}}c.appendChild(d)
u.a_elem=d}if(c){if(n!==u.url){u.a_elem.setAttribute("href",n)
u.url=n}var h=y.htmlPos(f.x,f.y)
c.style.left=h[0]+"%"
c.style.top=h[1]+"%"
var _=y.htmlSize(f.w,f.h)
c.style.width=_[0]+"%"
c.style.height=_[1]+"%"}}var m=u.clicked
u.clicked=false
return m}function linkText(e){var t=e.style_link,r=e.style_link_hover,a=e.x,i=e.y,n=e.z,o=e.style,s=e.font_size,l=e.text,u=e.url,f=e.internal
l=l||u
n=n||Z.UI
o=o||R()
s=s||o.text_height
var c=A.font.getStringWidth(t||D,s,l)
var d=s
e.w=c
e.h=d
e.def=C
var v=I(e)
var p=v.focused?r||N:t||D
A.font.drawSized(p,a,i,n,s,l)
var h=1
A.drawLine(a,i+d-h,a+c,i+d-h,n-.5,h,1,p.color_vec4)
var _=link(e)
if(_){var m=void 0===e.sound_button?e.def.sound_button:e.sound_button
if(m)E(m)
P(e)}if(v.ret&&!f){var g=F(e)
var y=O[g]
w(y)
w(y.a_elem)
y.a_elem.click()}return _||v.ret}function linkTick(){for(var e in O)if(O[e].frame!==g.frame_index-1)delete O[e]}},{"./camera2d.js":13,"./engine.js":19,"./font.js":25,"./in_event.js":33,"./input.js":34,"./settings.js":54,"./spot.js":60,"./ui.js":67,"./uistyle.js":68,assert:void 0}],37:[function(e,t,r){"use strict"
r.getStoragePrefix=getStoragePrefix
r.localStorageClearAll=localStorageClearAll
r.localStorageExportAll=localStorageExportAll
r.localStorageGet=localStorageGet
r.localStorageGetJSON=localStorageGetJSON
r.localStorageImportAll=localStorageImportAll
r.localStorageSet=localStorageSet
r.localStorageSetJSON=localStorageSetJSON
r.setStoragePrefix=setStoragePrefix
var u=e("assert")
var f="demo"
var a=false
function setStoragePrefix(e){if(a)return
a=true
f=e}function getStoragePrefix(){u(a)
return f}var c=function(){try{localStorage.setItem("test","test")
localStorage.removeItem("test")
return localStorage}catch(e){return null}}()
var d={}
function localStorageGet(e){u(a)
var t=d[e=f+"_"+e]||c&&c.getItem(e)
if("undefined"===t)t=void 0
else if(null===t)t=void 0
return t}function localStorageSet(e,t){u(a)
e=f+"_"+e
if(void 0===t||null===t){if(c)c.removeItem(e)
delete d[e]}else{var r=String(t)
d[e]=r
try{if(c)c.setItem(e,r)}catch(e){}}}function localStorageSetJSON(e,t){localStorageSet(e,JSON.stringify(t))}function localStorageGetJSON(e,t){var r=localStorageGet(e)
if(void 0===r)return t
try{return JSON.parse(r)}catch(e){}return t}function localStorageClearAll(e){var t=new RegExp("^"+f+"_"+(e||""),"u")
if(c){var r=[]
for(var a=0;a<c.length;a++){var i=c.key(a)
u(i)
if(i.match(t))r.push(i)}for(var n=0;n<r.length;n++)c.removeItem(r[n])}for(var o in d)if(o.match(t))delete d[o]}function localStorageExportAll(e){var t={}
var r=new RegExp("^"+f+"_("+(e||"")+".*)")
if(c)for(var a=0;a<c.length;a++){var i=c.key(a)
u(i)
var n=i.match(r)
if(n){var o=c.getItem(i)
if(o&&"undefined"!==o)t[n[1]]=o}}for(var s in d){var l=s.match(r)
if(l)t[l[1]]=d[s]}return t}function localStorageImportAll(e){localStorageClearAll()
for(var t in e)localStorageSet(t,e[t])}r.get=localStorageGet
r.set=localStorageSet
r.setJSON=localStorageSetJSON
r.getJSON=localStorageGetJSON
r.clearAll=localStorageClearAll},{assert:void 0}],38:[function(e,t,r){"use strict"
r.getStringFromLocalizable=getStringFromLocalizable
r.getStringIfLocalizable=getStringIfLocalizable
function getStringFromLocalizable(e){return e&&e.toLocalString?e.toLocalString():e}function getStringIfLocalizable(e){return e&&e.toLocalString?e.toLocalString():e}},{}],39:[function(e,t,r){"use strict"
r.m43identity=m43identity
r.m43mul=m43mul
r.mat43=mat43
function mat43(){var e=new Float32Array(12)
e[0]=e[4]=e[8]=1
return e}function m43identity(e){e[0]=1
e[1]=0
e[2]=0
e[3]=0
e[4]=1
e[5]=0
e[6]=0
e[7]=0
e[8]=1
e[9]=0
e[10]=0
e[11]=0}function m43mul(e,t,r){var a=t[0]
var i=t[1]
var n=t[2]
var o=t[3]
var s=t[4]
var l=t[5]
var u=t[6]
var f=t[7]
var c=t[8]
var d=t[9]
var v=t[10]
var p=t[11]
var h=r[0]
var _=r[1]
var m=r[2]
var g=r[3]
var y=r[4]
var w=r[5]
var b=r[6]
var x=r[7]
var S=r[8]
e[0]=h*a+g*i+b*n
e[1]=_*a+y*i+x*n
e[2]=m*a+w*i+S*n
e[3]=h*o+g*s+b*l
e[4]=_*o+y*s+x*l
e[5]=m*o+w*s+S*l
e[6]=h*u+g*f+b*c
e[7]=_*u+y*f+x*c
e[8]=m*u+w*f+S*c
e[9]=h*d+g*v+b*p+r[9]
e[10]=_*d+y*v+x*p+r[10]
e[11]=m*d+w*v+S*p+r[11]
return e}},{}],40:[function(e,t,a){"use strict"
a.load_count=a.default_vshader=a.default_fshader=void 0
a.modelLoad=modelLoad
a.modelLoadCount=modelLoadCount
a.modelStartup=modelStartup
a.models=void 0
var D=e("assert")
var N=e("./geom.js")
var O=e("./glb/parser.js")
var L=e("./glb/gltf-type-utils.js").ATTRIBUTE_TYPE_TO_COMPONENTS
var l=e("./engine.js")
var i=e("./fetch.js").fetch
var r=e("./shaders.js"),U=r.SEMANTIC,n=r.shaderCreate,u=r.shadersBind,o=r.shadersPrelink
var s=e("./textures.js"),f=s.textureBind,M=s.textureLoad
var c=e("../common/vmath.js").vec4
var d=e("./webfs.js").webFSGetFile
var v=0
a.load_count=v
function modelLoadCount(){return v}var p={}
a.models=p
var h
a.default_vshader=h
var _
a.default_fshader=_
function initShaders(){a.default_vshader=h=n("shaders/default.vp")
a.default_fshader=_=n("shaders/default.fp")
o(h,_)}function Model(e){var t=(this.url=e).lastIndexOf("/")
if(-1!==t)this.base_url=e.slice(0,t+1)
else this.base_url=""}Model.prototype.load=function(){var r=this
a.load_count=++v
i({url:this.url,response_type:"arraybuffer"},function(e,t){a.load_count=--v
if(e)window.onerror("Model loading error","models.js",0,0,e)
else try{r.parse(t)}catch(e){window.onerror("Model loading error","models.js",0,0,e)}})}
var j={TANGENT:true}
Model.prototype.parse=function(e){var t=O.parse(e)
if(!t)return
var r=t.getJSON()
var a=[]
for(var i=0;i<r.meshes.length;++i){var n=r.meshes[i]
for(var o=0;o<n.primitives.length;++o){var s=n.primitives[o]
var l=r.materials[s.material]
var u=null
if(l){var f=(l.pbrMetallicRoughness||{}).baseColorTexture||{}
var c=r.textures&&r.textures[f.index]||{}
var d=r.samplers&&r.samplers[c.sampler]||{}
var v=r.images&&r.images[c.source]||{}
if(v.uri){var p={url:""+this.base_url+v.uri,filter_mag:d.magFilter,filter_min:d.minFilter,wrap_s:d.wrapS,wrap_t:d.wrapT}
u=M(p)}}var h=[]
var _=[]
var m=[]
var g=0
var y=0
for(var w in s.attributes){if(j[w])continue
D(void 0!==U[w])
var b=r.accessors[s.attributes[w]]
D.equal(b.componentType,5126)
var x=gl.FLOAT
var S=L[b.type]
D(S)
var E=b.count
if(!y)y=E
else D.equal(y,E)
h.push([U[w],x,S])
var T=t.getBuffer(b)
_.push(T)
m.push(0)
g+=T.length}var A=new Float32Array(g)
var R=0
for(var k=0;k<y;++k)for(var C=0;C<h.length;++C)for(var I=0;I<h[C][2];++I)A[R++]=_[C][m[C]++]
var P=r.accessors[s.indices]
D(P)
D.equal(P.type,"SCALAR")
var F=t.getBuffer(P)
if(5125===P.componentType){D(y<65535)
F=new Uint16Array(F)}else D.equal(P.componentType,5123)
a.push({geom:N.create(h,A,F,s.mode),texture:u})}}this.data={objs:a}}
var m={color:c(1,1,1,1)}
Model.prototype.draw=function(e){var t=e.mat,r=e.vshader,a=e.fshader,i=e.shader_params
D(t)
l.updateMatrices(t)
u(r||h,a||_,i||m)
var n=this.data.objs
for(var o=0;o<n.length;++o){var s=n[o]
if(s.texture)f(0,s.texture)
s.geom.draw()}}
Model.prototype.drawGeom=function(){var e=this.data.objs
for(var t=0;t<e.length;++t)e[t].geom.draw()}
function modelLoad(e){if(p[e])return p[e]
var t=p[e]=new Model(e)
t.data=p.box.data
t.load()
return t}function modelStartup(){initShaders();(p.box=new Model("box")).parse(d("models/box_textured_embed.glb").buffer)}a.load=modelLoad},{"../common/vmath.js":94,"./engine.js":19,"./fetch.js":23,"./geom.js":27,"./glb/gltf-type-utils.js":29,"./glb/parser.js":30,"./shaders.js":56,"./textures.js":65,"./webfs.js":71,assert:void 0}],41:[function(e,t,r){"use strict"
r.buildString=buildString
r.init=init
r.netClient=netClient
r.netClientId=netClientId
r.netDisconnected=netDisconnected
r.netDisconnectedRaw=netDisconnectedRaw
r.netForceDisconnect=netForceDisconnect
r.netPostInit=netPostInit
r.netSubs=netSubs
r.netUserId=netUserId
var a=e("../common/util.js").callEach
r.netBuildString=buildString
r.netInit=init
var i=e("./filewatch.js").filewatchStartup
var n=e("../common/packet.js").packetEnableDebug
var o=e("./subscription_manager.js")
var s=e("./wsclient.js")
var l=s.WSClient
var u
var f
var c=[]
function netPostInit(e){if(c)c.push(e)
else e()}function init(e){if((e=e||{}).ver)s.CURRENT_VERSION=e.ver
if(String(document.location).match(/^https?:\/\/localhost/))if(!e.no_packet_debug){console.log("PacketDebug: ON")
n(true)}u=new l(e.path,e.client_app);(f=o.create(u,e.cmd_parse)).auto_create_user=Boolean(e.auto_create_user)
f.no_auto_login=Boolean(e.no_auto_login)
f.allow_anon=Boolean(e.allow_anon)
window.subs=f
r.subs=f
r.client=u
a(c,c=null)
i(u)
if(e.engine){e.engine.addTickFunc(function(e){u.checkDisconnect()
f.tick(e)})
e.engine.onLoadMetrics(function(e){f.onceConnected(function(){u.send("load_metrics",e)})})}}var d=new Date(Number("1702144435110")).toISOString().replace("T"," ").slice(5,-8)
function buildString(){return s.CURRENT_VERSION?s.CURRENT_VERSION+" ("+d+")":d}function netDisconnectedRaw(){return!u||!u.connected||u.disconnected||!u.socket||1!==u.socket.readyState}function netDisconnected(){return netDisconnectedRaw()||f.logging_in}function netForceDisconnect(){var e
if(f)f.was_logged_in=false
null==u||(null==(e=u.socket)||(null==e.close||e.close()))}function netClient(){return u}function netClientId(){return u.id}function netUserId(){return f.getUserId()}function netSubs(){return f}},{"../common/packet.js":86,"../common/util.js":92,"./filewatch.js":24,"./subscription_manager.js":64,"./wsclient.js":73}],42:[function(e,t,r){"use strict"
r.create=create
r.preloadParticleData=preloadParticleData
var u=e("assert")
var a=e("../common/vmath.js"),i=a.vec2,p=a.v2copy,h=a.v2lerp,_=a.v2mul,l=a.vec3,n=a.vec4,s=a.v3add,m=a.v4copy,g=a.v4lerp,y=a.v4mul
var w=e("./sprites.js")
var f=e("./textures.js").textureLoad
var c={alpha:w.BLEND_ALPHA,additive:w.BLEND_ADDITIVE}
function preloadParticleData(e){for(var t in e.defs){var r=e.defs[t]
for(var a in r.particles){var i=r.particles[a]
f({url:"img/"+i.texture+".png"})}}}function normalizeValue(e){if(e instanceof Float32Array&&e.length>=2)return e
else if("number"===typeof e)return i(e,0)
else if(Array.isArray(e)||e instanceof Float32Array)return i(e[0]||0,e[1]||0)
else return u(false)}function normalizeValueVec(e,t){u(t)
u(Array.isArray(e)||e instanceof Float32Array)
var r=new Array(t)
for(var a=0;a<t;++a)r[a]=normalizeValue(e[a])
return r}function normalizeParticle(e,t){if(!e.normalized){var r=e.normalized={blend:c[e.blend]||w.BLEND_ALPHA,texture:f({url:e.texture?"img/"+e.texture+".png":"img/glov/util_circle.png"}),color:normalizeValueVec(e.color||[1,1,1,1],4),color_track:null,size:normalizeValueVec(e.size||[1,1],2),size_track:null,accel:normalizeValueVec(e.accel||[0,0,0],3),rot:normalizeValue(e.rot||0),rot_vel:normalizeValue(e.rot||0),lifespan:normalizeValue(e.lifespan||1e3),kill_time_accel:normalizeValue(e.kill_time_accel||1)}
u(r.kill_time_accel[0]>=1)
if(e.color_track&&e.color_track.length){u(e.color_track.length>1)
r.color_track=[]
for(var a=0;a<e.color_track.length;++a){var i=e.color_track[a]
u("number"===typeof i.t)
var n=new Float32Array(5)
n[0]=i.v[0]
n[1]=i.v[1]
n[2]=i.v[2]
n[3]=i.v[3]
n[4]=i.t
r.color_track.push(n)}}if(e.size_track&&e.size_track.length){u(e.size_track.length>1)
r.size_track=[]
for(var o=0;o<e.size_track.length;++o){var s=e.size_track[o]
u("number"===typeof s.t)
var l=new Float32Array(3)
l[0]=s.v[0]
l[1]=s.v[1]
l[2]=s.t
r.size_track.push(l)}}}return e.normalized}function findParticle(e,t){u(void 0!==e[t])
return e[t]}function normalizeEmitter(e,t){if(!e.normalized){e.normalized={part_idx:findParticle(t,e.particle),pos:normalizeValueVec(e.pos||[0,0,0],3),vel:normalizeValueVec(e.vel||[0,0,0],3),emit_rate:normalizeValue(e.emit_rate||10),emit_time:normalizeValueVec(e.emit_time||[0,Infinity],2),emit_initial:normalizeValue(e.emit_initial||1)}
var r=e.normalized.emit_rate[0]
var a=e.normalized.emit_rate[0]+e.normalized.emit_rate[1]
e.normalized.emit_rate[0]=1e3/a
e.normalized.emit_rate[1]=1e3/r
u(e.normalized.emit_rate[0]>1)}return e.normalized}function normalizeDef(e,t){if(!e.normalized){var r=e.normalized={system_lifespan:normalizeValue(e.system_lifespan||Infinity),particles:[],emitters:[]}
var a={}
for(var i in e.particles){a[i]=r.particles.length
r.particles.push(normalizeParticle(e.particles[i],t))}for(var n in e.emitters)r.emitters.push(normalizeEmitter(e.emitters[n],a))}return e.normalized}function instValue(e){return e[0]+Math.random()*e[1]}function instValueVec(e){var t=new Float32Array(e.length)
for(var r=0;r<e.length;++r)t[r]=instValue(e[r])
return t}var b=n()
var x=n()
var S=i()
var E=i()
var o=function(){function ParticleSystem(e,t,r){u(3===r.length)
this.parent=e
this.def=normalizeDef(t,e)
this.system_lifespan=instValue(this.def.system_lifespan)
u(this.system_lifespan>0)
this.age=0
this.kill_hard=false
this.kill_soft=false
this.pos=l(r[0],r[1],r[2])
this.part_sets=[]
for(var a=0;a<this.def.particles.length;++a){var i={def:this.def.particles[a],parts:[]}
this.part_sets.push(i)}this.emitters=[]
for(var n=0;n<this.def.emitters.length;++n){var o=this.def.emitters[n]
var s={def:o,emit_time:instValueVec(o.emit_time),countdown:0,started:false,stopped:false}
this.emitters.push(s)}}var e=ParticleSystem.prototype
e.tickParticle=function tickParticle(e,t){var r=e.def
e.age+=t
var a=e.age/e.lifespan
if(a>=1)return true
var i=t/1e3
e.pos[0]+=e.vel[0]*i
e.pos[1]+=e.vel[1]*i
e.pos[2]+=e.vel[2]*i
e.vel[0]+=e.accel[0]*i
e.vel[1]+=e.accel[1]*i
e.vel[2]+=e.accel[2]*i
m(b,e.color,b)
if(r.color_track)if(a<r.color_track[0][4])y(b,b,r.color_track[0])
else if(a>=r.color_track[r.color_track.length-1][4])y(b,b,r.color_track[r.color_track.length-1])
else for(var n=0;n<r.color_track.length-1;++n)if(a>=r.color_track[n][4]&&a<r.color_track[n+1][4]){var o=(a-r.color_track[n][4])/(r.color_track[n+1][4]-r.color_track[n][4])
g(x,o,r.color_track[n],r.color_track[n+1])
y(b,b,x)
break}p(S,e.size)
if(r.size_track)if(a<r.size_track[0][2])_(S,S,r.size_track[0])
else if(a>=r.size_track[r.size_track.length-1][2])_(S,S,r.size_track[r.size_track.length-1])
else for(var s=0;s<r.size_track.length-1;++s)if(a>=r.size_track[s][2]&&a<r.size_track[s+1][2]){var l=(a-r.size_track[s][2])/(r.size_track[s+1][2]-r.size_track[s][2])
h(E,l,r.size_track[s],r.size_track[s+1])
_(S,S,E)
break}var u=S[0]
var f=S[1]
var c=e.pos[0]-u/2
var d=e.pos[1]-f/2
var v=e.pos[2]
w.queueraw4color([r.texture],c,d,b,0,0,c,d+f,b,0,1,c+u,d+f,b,1,1,c+u,d,b,1,0,v,null,null,r.blend)
return false}
e.tickPartSet=function tickPartSet(e,t){var r=t.parts
for(var a=r.length-1;a>=0;--a){var i=r[a]
var n=this.kill_soft?e*i.kill_time_accel:e
if(this.tickParticle(i,n)){r[a]=r[r.length-1]
r.pop()}}}
e.emitParticle=function emitParticle(e,t){var r=t.def
var a=this.part_sets[r.part_idx]
var i=a.def
var n=instValueVec(r.pos,3)
s(n,n,this.pos)
var o={def:i,pos:n,color:instValueVec(i.color,4),size:instValueVec(i.size,4),vel:instValueVec(r.vel,3),accel:instValueVec(i.accel,3),rot:instValue(i.rot),rot_vel:instValue(i.rot_vel),lifespan:instValue(i.lifespan),kill_time_accel:instValue(i.kill_time_accel),age:0}
if(!this.tickParticle(o,e))a.parts.push(o)}
e.tickEmitter=function tickEmitter(e,t){var r=t.def
if(!t.started&&this.age>=t.emit_time[0]){t.started=true
e=this.age-t.emit_time[0]
var a=instValue(r.emit_initial)
for(var i=0;i<a;++i)this.emitParticle(e,t)
t.countdown=instValue(r.emit_rate)}if(t.started&&!t.stopped&&!this.kill_soft){var n=e
var o=e
if(this.age>=t.emit_time[1]){t.stopped=true
o-=this.age-t.emit_time[1]}while(o>=t.countdown){o-=t.countdown
n-=t.countdown
t.countdown=instValue(r.emit_rate)
this.emitParticle(n,t)}t.countdown-=o}}
e.tick=function tick(e){if(this.kill_hard)return true
for(var t=this.part_sets.length-1;t>=0;--t)this.tickPartSet(e,this.part_sets[t])
this.age+=e
for(var r=0;r<this.emitters.length;++r)this.tickEmitter(e,this.emitters[r])
return this.age>=this.system_lifespan}
e.shift=function shift(e){if(this.def.no_shift)return
this.pos[0]+=e[0]
this.pos[1]+=e[1]
this.pos[2]+=e[2]
for(var t=0;t<this.part_sets.length;++t){var r=this.part_sets[t].parts
for(var a=0;a<r.length;++a){var i=r[a]
i.pos[0]+=e[0]
i.pos[1]+=e[1]
i.pos[2]+=e[2]}}}
return ParticleSystem}()
var d=function(){function ParticleManager(){this.systems=[]}var e=ParticleManager.prototype
e.createSystem=function createSystem(e,t){var r=new o(this,e,t)
this.systems.push(r)
return r}
e.tick=function tick(e){for(var t=this.systems.length-1;t>=0;--t)if(this.systems[t].tick(e)){this.systems[t]=this.systems[this.systems.length-1]
this.systems.pop()}}
e.killAll=function killAll(){this.systems=[]}
e.shift=function shift(e){for(var t=0;t<this.systems.length;++t)this.systems[t].shift(e)}
return ParticleManager}()
function create(){return new d}},{"../common/vmath.js":94,"./sprites.js":63,"./textures.js":65,assert:void 0}],43:[function(e,t,r){"use strict"
r.addMetric=addMetric
r.draw=draw
r.friendlyBytes=friendlyBytes
r.perfGraphOverride=perfGraphOverride
r.perfSetAutoChannel=perfSetAutoChannel
r.perf_mem_counters=void 0
var n={}
r.perf_mem_counters=n
var C=e("./engine.js")
var I=[]
function addMetric(e,t){if(e.show_graph){e.num_lines=e.colors.length
e.history_size=e.data.history.length/e.num_lines}e.num_labels=Object.keys(e.labels).length
if(void 0===e.interactable)e.interactable=C.DEBUG&&(e.num_labels>1&&!e.show_all||e.show_graph)
if(t)I.splice(0,0,e)
else I.push(e)}var P=e("./camera2d.js")
var a=e("./cmds.js").cmd_parse
var F=e("./font.js")
var y=e("./input.js")
var D=Math.max
var i=e("./net.js"),o=i.netClient,s=i.netClientId,l=i.netDisconnected
var u=e("../common/perfcounters.js").perfCounterHistory
var N=e("./profiler_ui.js").profilerUI
var O=e("./settings.js")
var f=e("./sprites.js"),E=f.spriteChainedStart,T=f.spriteChainedStop
var L=e("./ui.js")
var U=e("./ui.js").uiTextHeight
var c=e("../common/vmath.js"),d=c.vec4,w=c.v3copy
e("./perf_net.js")
var M=2
var j=d(0,0,0,.5)
var b=d(0,0,0,.75)
var x=d()
O.register({show_metrics:{default_value:1,type:a.TYPE_INT,range:[0,1]},show_fps:{label:"Show FPS",default_value:C.DEBUG?1:0,type:a.TYPE_INT,enum_lookup:{OFF:0,ON:1,MSPF:2,CPU:3,GC:4}},fps_graph:{label:"FPS Graph",default_value:0,type:a.TYPE_INT,range:[0,1]},fps_window:{label:"FPS Time Window (seconds)",default_value:1,type:a.TYPE_FLOAT,range:[.001,120]},show_perf_counters:{default_value:0,type:a.TYPE_INT,range:[0,1]},show_perf_memory:{default_value:0,type:a.TYPE_INT,range:[0,1],access_run:["sysadmin"]},perf_provider:{default_value:"client",type:a.TYPE_STRING,usage:"Set the perf provider for /show_perf_counters and /show_perf_memory\n  CLIENT : show client values\n  AUTO : automatically determine appropriate server\n  user.1234 : use server hosting a particular worker",access_run:["sysadmin"]}})
a.register({cmd:"fps",help:"Toggles FPS display",func:function func(e,t){if(O.show_fps&&O.show_metrics||"0"===e)O.set("show_fps",0)
else{O.set("show_fps",1)
O.set("show_metrics",1)}t()}})
var B=F.style({outline_width:2,outline_color:128,color:4294967295})
function friendlyUnit(e,t){var r=0
while(r<e.length-1&&t>=e[r+1][0])r++
if(0===r)return t+" "+e[r][1]
return(t/e[r][0]).toFixed(2)+" "+e[r][1]}var v=[[1,"bytes"],[1024,"KB"],[1048576,"MB"],[1073741824,"GB"]]
var p=[[1,""],[1e3,"k"],[1e6,"m"],[1e9,"g"]]
function friendlyBytes(e){return friendlyUnit(v,e)}function friendlyCount(e){return friendlyUnit(p,e)}function showMetric(e,t){var r=C.font
var a=M
var i=U()
var n=O.render_scale_all<1?i/O.render_scale_all:i
var o=n*(t.width||2.5)
var s=P.x1Real()-o-a
var l=e
e+=a
var u=0
var f=t.show_all?Infinity:O[t.show_stat]
var c=false
var d=1
for(var v in t.labels){var p=t.labels[v]()
if(p){var h=B
if(p.alpha){d=p.alpha
p=p.value
h=F.styleAlpha(B,d)}var _=r.drawSizedAligned(h,s,e,Z.FPSMETER+3,n,F.ALIGN.HRIGHT,0,0,v)
u=D(u,_)
r.drawSizedAligned(h,s,e,Z.FPSMETER+3,n,F.ALIGN.HFIT,o,0,p)
e+=n
c=true}if(!--f)break}if(!c)return e-a
var m=j
var g={x:(s-=u+M)-a,y:l,w:o+u+M+2*a,h:(e+=a)-l}
if(t.interactable){if(y.mouseUpEdge(g))if(t.num_labels>1&&O[t.show_stat]<=1)O.set(t.show_stat,t.num_labels)
else if(t.show_graph&&!O[t.show_graph])O.set(t.show_graph,1)
else{if(t.show_graph)O.set(t.show_graph,0)
O.set(t.show_stat,1)}if(y.mouseOver(g))m=b}if(1!==d){x[3]=m[3]*d
m=w(x,m)}L.drawRect(g.x,g.y,g.x+g.w,e,Z.FPSMETER+2,m)
return e}function showMetricGraph(e,t){var r=C.game_height<300
var a=r?1:3
var i=r?0:1
var n=r?64:128
var o=t.history_size-1
var s=(a+i)*o
var l=P.x1Real()-s
var u=n+2*i
var f=Z.FPSMETER
E()
L.drawRect(l,e-u,l+s,e,f++,j)
l+=i
e-=i
var c=t.data.index
var d=n/t.line_scale_top
for(var v=0;v<o;v++){var p=(v+c+1)%t.history_size*t.num_lines
var h=t.data.history
var _=0
for(var m=0;m<t.num_lines;m++){var g=h[p+m]
var y=void 0
if(t.bars_stack){y=_
_+=g}else{var w=0
for(var b=0;b<t.num_lines;b++){if(b===m)continue
var x=h[p+b]
if((x<g||x===g&&b<m)&&x>w)w=x}y=w
_=g}var S=t.colors[m]
L.drawRect(l,e-_*d,l+a,e-y*d,f,S)}l+=a+i}f+=o
e-=n+i
T()
return e}function perfDefaultAutoChannel(){var e=s()
if(e)return"client."+e
return null}var h=perfDefaultAutoChannel
function perfSetAutoChannel(e){h=e}var _=1e4
var m=2500
var g={last_update:-Infinity,data:null}
function updatePerfProvider(){var e=_
var r={}
if(O.show_perf_counters)r.counters=1
if(O.show_perf_memory){r.memory=1
e=m}var t=O.perf_provider.toLowerCase()
if("client"===t){var a={source:"client"}
if(r.counters)a.counters=u()
if(r.memory)a.memory=n
return a}if(g.in_flight||l())return g.data
if(C.frame_timestamp-g.last_update<e)return g.data
var i
if("auto"===t)i=h()
else if(t.match(/^[^.]+\.[^.]+$/))i=t
if(i){g.in_flight=true
o().send("perf_fetch",{channel_id:i,fields:r},null,function(e,t){if(e)console.error("Error getting perf data: "+Object.keys(r)+": "+e)
g.data=t
g.last_update=C.frame_timestamp
g.in_flight=false})}return g.data}function perfMemObjToLines(e,t,r){for(var a in t){var i=t[a]
if(i&&"object"===typeof i)perfMemObjToLines(e,i,""+r+a+".")
else{if("number"===typeof i)if(a.endsWith("bytes")||r.includes("data_size"))i=friendlyBytes(i)
else i=friendlyCount(i)
e.push(""+r+a+": "+i)}}}var G=null
function perfGraphOverride(e){G=e}function draw(){P.push()
N()
P.setAspectFixed(C.game_width,C.game_height)
if(O.show_metrics){var e=P.y0Real()
var t=P.y1Real()
if(G){t=showMetricGraph(t,G)
t-=M}for(var r=0;r<I.length;++r){var a=I[r]
if(O[a.show_stat]){e=showMetric(e,a)
e+=M}if(!G&&O[a.show_graph]){t=showMetricGraph(t,a)
t-=M}}}if(O.show_perf_counters||O.show_perf_memory){var i=C.font
var n=updatePerfProvider()||{}
var o=P.y0Real()
var s=o
var l=U()
var u=O.render_scale_all<1?l/O.render_scale_all:l
var f=6*u
var c=P.x0Real()
var d=c+2*f
var v=d+f
var p=Z.FPSMETER+1
var h=c+f
if(n.source){i.drawSized(B,h,o,p,u,"Source: "+n.source)
o+=u}if(n.log){var _=.67*P.wReal()
v=D(v,h+_)
o+=i.drawSizedWrapped(B,h,o,p,_,20,u,n.log)+4}if(n.memory&&O.show_perf_memory){var m=[]
perfMemObjToLines(m,n.memory,"")
for(var g=0;g<m.length;++g){i.drawSized(B,d,o,p,u,m[g])
o+=u}}if(n.counters&&O.show_perf_counters){var y=n.counters||[]
var w={}
for(var b=0;b<y.length;++b){var x=y[b]
for(var S in x){w[S]=w[S]||[]
w[S][b]=x[S]}}var E=Object.keys(w)
E.sort()
for(var T=0;T<E.length;++T){var A=E[T]
var R=w[A]
i.drawSizedAligned(B,d-2*f,o,p,u,F.ALIGN.HRIGHT|F.ALIGN.HFIT,2*f,0,A+": ")
for(var k=0;k<R.length;++k)if(R[k])i.drawSizedAligned(B,d+f*k,o,p,u,F.ALIGN.HFIT,f,0,R[k]+" ")
v=D(v,d+f*R.length)
o+=u}}L.drawRect(c,s,v,o,p-.1,j)}P.pop()
G=null}},{"../common/perfcounters.js":87,"../common/vmath.js":94,"./camera2d.js":13,"./cmds.js":15,"./engine.js":19,"./font.js":25,"./input.js":34,"./net.js":41,"./perf_net.js":44,"./profiler_ui.js":49,"./settings.js":54,"./sprites.js":63,"./ui.js":67}],44:[function(e,t,r){"use strict"
r.registerPingProvider=registerPingProvider
var a=e("../common/wscommon")
var i=a.wsstats
var n=a.wsstats_out
var o=e("./cmds").cmd_parse
var s=e("./perf")
var l=e("./settings")
var u=Math.min
l.register({show_net:{default_value:0,type:o.TYPE_INT,enum_lookup:{OFF:0,ON:2}}})
var f={msgs:0,bytes:0,time:Date.now(),dm:0,db:0}
var c={msgs:0,bytes:0,time:Date.now(),dm:0,db:0}
function bandwidth(e,t){var r=Date.now()
if(r-t.time>1e3){t.dm=e.msgs-t.msgs
t.db=e.bytes-t.bytes
t.msgs=e.msgs
t.bytes=e.bytes
if(r-t.time>2e3)t.time=r
else t.time+=1e3}return(t.db/1024).toFixed(2)+" kb ("+t.dm+")"}s.addMetric({name:"net",show_stat:"show_net",width:5,labels:{"down: ":bandwidth.bind(null,i,f),"up: ":bandwidth.bind(null,n,c)}})
var d=0
function registerPingProvider(t){var e
var r=1===++d?"":""+d
l.register(((e={})["show_ping"+r]={default_value:0,type:o.TYPE_INT,range:[0,1]},e))
s.addMetric({name:"ping"+r,show_stat:"show_ping"+r,labels:{"ping: ":function ping(){var e=t()
if(!e||e.fade<.001)return""
return{value:""+e.ping.toFixed(1),alpha:u(1,3*e.fade)}}}})}},{"../common/wscommon":96,"./cmds":15,"./perf":43,"./settings":54}],45:[function(e,t,r){"use strict"
r.font_colors=r.colors=void 0
var a=e("../common/vmath.js").vec4
var i=[a(0,0,0,1),a(.114,.169,.326,1),a(.494,.145,.326,1),a(0,.529,.328,1),a(.671,.322,.212,1),a(.373,.341,.31,1),a(.761,.765,.78,1),a(1,.945,.91,1),a(1,0,.302,1),a(1,.639,0,1),a(1,.925,.153,1),a(0,.894,.212,1),a(.161,.678,1,1),a(.514,.463,.612,1),a(1,.467,.659,1),a(1,.8,.667,1)]
var n=(r.colors=i).map(function(e){return 255*e[0]<<24|255*e[1]<<16|255*e[2]<<8|255})
r.font_colors=n},{"../common/vmath.js":94}],46:[function(e,t,r){"use strict"
r.enter=enter
r.exit=exit
r.isLocked=isLocked
r.startup=startup
var a=e("../common/util.js").eatPossiblePromise
var i=false
var n
var o
function isLocked(){return i}function pointerLog(e){console.log("PointerLock: "+e)}function exit(){pointerLog("Lock exit requested")
i=false
a(document.exitPointerLock())}function enter(e){i=true
o()
pointerLog("Trying pointer lock in response to "+e)
a(n.requestPointerLock())}function onPointerLockChange(){if(document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement){pointerLog("Lock successful")
if(!i){pointerLog("User canceled lock")
a(document.exitPointerLock())}}else if(i){pointerLog("Lock lost")
i=false}}function onPointerLockError(e){pointerLog("Error")
i=false}function startup(e,t){o=t;(n=e).requestPointerLock=n.requestPointerLock||n.mozRequestPointerLock||n.webkitRequestPointerLock||function(){}
document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||function(){}
document.addEventListener("pointerlockchange",onPointerLockChange,false)
document.addEventListener("mozpointerlockchange",onPointerLockChange,false)
document.addEventListener("webkitpointerlockchange",onPointerLockChange,false)
document.addEventListener("pointerlockerror",onPointerLockError,false)
document.addEventListener("mozpointerlockerror",onPointerLockError,false)
document.addEventListener("webkitpointerlockerror",onPointerLockError,false)}},{"../common/util.js":92}],47:[function(e,t,r){"use strict"
var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array]
if(!Uint8Array.prototype.slice)a.forEach(function(n){Object.defineProperty(n.prototype,"slice",{value:function value(e,t){if(void 0===t)t=this.length
if(t<0)t=this.length-t
if((e=e||0)>=this.length)e=this.length-1
if(t>this.length)t=this.length
if(t<e)t=e
var r=t-e
var a=new n(r)
for(var i=0;i<r;++i)a[i]=this[e+i]
return a}})})
function cmpDefault(e,t){return e-t}var i={join:function join(e){return Array.prototype.join.call(this,e)},fill:function fill(e,t,r){if(void 0===r)r=this.length
for(var a=t||0;a<r;++a)this[a]=e
return this},sort:function sort(e){Array.prototype.sort.call(this,e||cmpDefault)}}
var n=function _loop(t){if(!Uint8Array.prototype[t])a.forEach(function(e){Object.defineProperty(e.prototype,t,{value:i[t]})})}
for(var o in i)n(o)
if(!String.prototype.endsWith){Object.defineProperty(String.prototype,"endsWith",{value:function value(e){return this.slice(-e.length)===e}})
Object.defineProperty(String.prototype,"startsWith",{value:function value(e){return this.slice(0,e.length)===e}})}if(!String.prototype.includes)Object.defineProperty(String.prototype,"includes",{value:function value(e,t){return-1!==this.indexOf(e,t)},configurable:true})
if(!Array.prototype.includes)Object.defineProperty(Array.prototype,"includes",{value:function value(e,t){for(var r=t=void 0===t?0:t<0?this.length+t:t;r<this.length;++r)if(this[r]===e)return true
return false}})
if(!Object.values)Object.values=function values(t){return Object.keys(t).map(function(e){return t[e]})}
if(!Object.entries)Object.entries=function entries(e){var t=Object.keys(e)
var r=new Array(t.length)
for(var a=t.length-1;a>=0;--a)r[a]=[t[a],e[t[a]]]
return r}
if(!Object.assign)Object.assign=function assign(e,t){for(var r=1;r<arguments.length;++r){var a=arguments[r]
for(var i in a)e[i]=a[i]}return e}
if(!Math.sign)Math.sign=function sign(e){return e<0?-1:e>0?1:0}
if("undefined"!==typeof window){if(!window.Intl)window.Intl={}
if(!window.Intl.NumberFormat){window.Intl.NumberFormat=function(){}
window.Intl.NumberFormat.prototype.format=function(e){return String(e)}}if(!window.Intl.DateTimeFormat){window.Intl.DateTimeFormat=function(){}
window.Intl.DateTimeFormat.prototype.format=function(e){return String(e)}}}},{}],48:[function(e,t,r){"use strict"
r.MEM_DEPTH_DEFAULT=r.HIST_TOT=r.HIST_SIZE=r.HIST_COMPONENTS=r.HAS_MEMSIZE=void 0
r.profilerAvgMem=profilerAvgMem
r.profilerAvgTime=profilerAvgTime
r.profilerChildCallCount=profilerChildCallCount
r.profilerDump=profilerDump
r.profilerExport=profilerExport
r.profilerFrameStart=profilerFrameStart
r.profilerGarbageEstimate=profilerGarbageEstimate
r.profilerHistoryIndex=profilerHistoryIndex
r.profilerImport=profilerImport
r.profilerMaxMem=profilerMaxMem
r.profilerMeasureBloat=profilerMeasureBloat
r.profilerMemDepthGet=profilerMemDepthGet
r.profilerMemDepthSet=profilerMemDepthSet
r.profilerNodeRoot=profilerNodeRoot
r.profilerNodeTick=profilerNodeTick
r.profilerPause=profilerPause
r.profilerPaused=profilerPaused
r.profilerWalkTree=profilerWalkTree
r.profilerWarning=profilerWarning
var h=Boolean(window.performance&&performance.memory&&performance.memory.usedJSHeapSize)
r.HAS_MEMSIZE=h
var _=128
r.HIST_SIZE=_
var m=3
r.HIST_COMPONENTS=m
var g=_*m
r.HIST_TOT=g
var a=2
r.MEM_DEPTH_DEFAULT=a
var l=e("assert")
var i=e("./engine.js")
var u=Math.floor,y=Math.max,f=Math.min,c=Math.round
var n=e("./local_storage.js"),o=n.localStorageGetJSON,s=n.localStorageSetJSON
var d=o("profiler_open_keys",{})
var v=0
function ProfilerEntry(e,t){this.parent=e
this.depth=e?e.depth+1:0
this.next=null
this.child=null
this.name=t
this.count=0
this.time=0
this.dmem=0
this.start_time=0
this.start_mem=0
this.history=new Float32Array(g)
this.id=++v
this.show_children=!(e&&e.parent)||d[this.getKey()]||false
this.color_override=null}ProfilerEntry.prototype.isEmpty=function(){for(var e=0;e<g;e+=m)if(this.history[e])return false
return true}
ProfilerEntry.prototype.toJSON=function(){var e=this.next,t=this.child
while(e&&e.isEmpty())e=e.next
while(t&&t.isEmpty())t=t.next
var r={i:this.name,h:Array.prototype.slice.call(this.history)}
if(e)r.n=e
if(t)r.c=t
return r}
function profilerEntryFromJSON(e,t){var r=new ProfilerEntry(e,t.i)
l.equal(t.h.length,r.history.length)
for(var a=0;a<t.h.length;++a)r.history[a]=t.h[a]
if(t.n)r.next=profilerEntryFromJSON(e,t.n)
if(t.c)r.child=profilerEntryFromJSON(r,t.c)
return r}ProfilerEntry.prototype.getKey=function(){if(!this.parent)return""
else return this.parent.getKey()+"."+this.name}
ProfilerEntry.prototype.toggleShowChildren=function(){this.show_children=!this.show_children
if(this.show_children)d[this.getKey()]=1
else delete d[this.getKey()]
s("profiler_open_keys",d)}
var w=new ProfilerEntry(null,"root")
var p=new ProfilerEntry(w,"GPU/idle")
w.child=p
var b=new ProfilerEntry(w,"tick")
p.next=b
var x=w
var S=null
var E=0
var T=false
var A=a
function memSizeChrome(){return performance.memory.usedJSHeapSize}function memSizeNop(){return 0}var R=h?memSizeChrome:memSizeNop
var k=10
function profilerChildCallCount(e,t,r){var a=e.child
var i=0
while(a){if(r){var n=0
var o=0
for(var s=0;s<g;s+=m)if(!t||a.history[s+2]){o++
n+=a.history[s]}if(o)i+=c(n/o)}else if(!t||a.history[E+2])i+=a.history[E]
i+=profilerChildCallCount(a,t,r)
a=a.next}return i}var C=1e3
function profilerWarning(){var e=profilerChildCallCount(w,false,true)
if(e>C)return"Warning: Too many per-frame profilerStart() calls ("+e+" > "+C+")"
else if(!h)return"To access memory profiling, run in Chrome"
else if(A>1&&k<10)return"For precise memory profiling, launch Chrome with --enable-precise-memory-info"
return""}function profilerNodeRoot(){return w}function profilerNodeTick(){return b}function profilerHistoryIndex(){return E}var I=[0,0]
var P=[0,0,0]
function profilerFrameStart(){w.count=1
var e=performance.now()
w.time=e-w.start_time
w.start_time=e
if(A>0){var t=R()
w.dmem=t-w.start_mem
w.start_mem=t}p.count=1
p.time=w.time
p.dmem=w.dmem
for(var r=w.child;r;r=r.next){if(r===p)continue
p.time-=r.time
p.dmem-=r.dmem
if(A>1)if(r.count)if(r.dmem)k++
else k-=5}var a=0
var i=0
for(var n=w.child;n;n=n.next)if(n.dmem<0)i-=n.dmem
else a+=n.dmem
if(a>i){I[0]+=a
P[0]++}else{I[1]+=i
P[1]++}if(x!==w){console.error("Profiler starting new frame but some section was not stopped",x&&x.name)
x=w}if(!T)E=(E+m)%g
var o=w
while(o){var s=true
if(!T){o.history[E]=o.count
o.history[E+1]=o.time
o.history[E+2]=o.dmem}o.count=0
o.time=0
o.dmem=0
do{if(s&&o.child)o=o.child
else if(o.next)o=o.next
else{s=false
if(o=o.parent)continue}break}while(true)}}function profilerStart(e){var t
if(S&&S.name===e)t=S
else if(S&&S.next&&S.next.name===e)t=S.next
else{var r=null
for(t=x.child;t;t=(r=t).next)if(t.name===e)break
if(!t)if(!r){l(!x.child)
t=new ProfilerEntry(x,e)
x.child=t}else if(S){(t=new ProfilerEntry(x,e)).next=S.next
S.next=t}else{t=new ProfilerEntry(x,e)
r.next=t}}l(t.parent===x);(x=t).start_time=performance.now()
if(t.depth<A)t.start_mem=R()
S=null}function profilerStop(e){if(e)l.equal(e,x.name)
x.time+=performance.now()-x.start_time
if(x.depth<A)x.dmem+=R()-x.start_mem
x.count++
x=(S=x).parent}function profilerStopStart(e){profilerStop(null)
profilerStart(e)}if(window.performance&&window.performance.now){window.profilerStart=profilerStart
window.profilerStop=profilerStop
window.profilerStopStart=profilerStopStart}function profilerPaused(){return T}function profilerPause(e){T=e}function profilerMemDepthGet(){return A}function profilerMemDepthSet(e){A=e}var F={time:0,mem:0}
var D={time:0,mem:0}
var N={inner:F,outer:D}
var O="profilerMeasureBloat"
var L="profilerMeasureBloat:child"
var U=10
function profilerMeasureBloat(){var e=A
if(A>=2)A=Infinity
profilerStart(O)
profilerStart(L)
profilerStopStart(L)
profilerStopStart(L)
profilerStopStart(L)
profilerStop(L)
profilerStop(O)
A=e
var t=null
for(t=x.child;t.name!==O;t=t.next);var r=t.child
l.equal(r.name,L)
F.time=Infinity
F.mem=0
D.time=Infinity
var a=D.mem=0
var i=(E-m*(U-1)+g)%g
for(var n=0;n<U;n++){var o=(i+n*m)%g
F.time=f(F.time,r.history[o+1])
D.time=f(D.time,t.history[o+1])
if(r.history[o+2]>0&&t.history[o+2]>0){F.mem+=r.history[o+2]
D.mem+=t.history[o+2];++a}}F.time/=4
D.time=y(0,D.time-F.time)/4
var s=F.mem/a/4
D.mem=a?y(0,u((D.mem/a-s)/4)):0
F.mem=a?y(0,u(s)):0
return N}function profilerGarbageEstimate(){var e
if(P[0]>P[1])e=I[0]/P[0]
else e=I[1]/P[1]
P[0]=P[1]=0
I[0]=I[1]=0
return e}function profilerWalkTree(e,t){var r=0
var a=e
while(a){var i=true
if(a!==e)if(!t(a,r))i=false
do{if(i&&a.child){r++
a=a.child}else if(a.next)a=a.next
else{r--
i=false
if(a=a.parent)continue}break}while(true)}}function profilerAvgTime(e){var t=0
for(var r=0;r<g;r+=m)if(e.history[r])t+=e.history[r+1]
return t/_}function profilerMaxMem(e){var t=0
for(var r=0;r<g;r+=m)if(e.history[r])t=y(t,e.history[r+2])
return t}function profilerAvgMem(e){var t=0
var r=0
for(var a=0;a<g;a+=m)if(e.history[a]){var i=e.history[a+2]
if(i>=0){t+=i
r++}}if(r)t/=r
return t}function profilerExport(){var e={history_index:E,root:w,mem_depth:h?A:0,device:{ua:window.navigator.userAgent,vendor:gl.getParameter(gl.VENDOR),renderer:gl.getParameter(gl.RENDERER),webgl:i.webgl2?2:1,width:i.width,height:i.height}}
var t=gl.getExtension("WEBGL_debug_renderer_info")
if(t){e.device.renderer_unmasked=gl.getParameter(t.UNMASKED_RENDERER_WEBGL)
e.device.vendor_unmasked=gl.getParameter(t.UNMASKED_VENDOR_WEBGL)}var r=JSON.stringify(e)
return r.replace(/\d\.\d\d\d\d+/g,function(e){e=e[5]>"4"?e.slice(0,4)+(Number(e[4])+1):e.slice(0,5)
while("0"===e.slice(-1)||"."===e.slice(-1))e=e.slice(0,-1)
return e})}function profilerImport(e){var t
try{t=JSON.parse(e)}catch(e){}if(!t)return null
t.root=profilerEntryFromJSON(null,t.root)
return t}function profilerDump(){l(x===w)
var v=["","","# PROFILER RESULTS"]
var p=profilerAvgTime(w)
profilerWalkTree(w,function(e,t){var r=0
var a=0
var i=0
var n=0
var o=0
for(var s=0;s<g;s+=m)if(e.history[s]){n++
a+=e.history[s]
r+=e.history[s+1]
i=y(i,e.history[s+1])
o=y(o,e.history[s+2])}if(!a)return true
var l=r/_/p
var u=r/n
var f=(a/n).toFixed(0)
var c=""
for(var d=1;d<t;++d)c+="* "
c+=(100*l).toFixed(0)+"% "+e.name+" "
c+=(1e3*u).toFixed(0)+" ("+f+") max:"+(1e3*i).toFixed(0)
if(h)c+=" dmem:"+o
v.push(c)
return true})
var e=profilerWarning()
if(e)v.push("",e)
v.push("","")
console.log(v.join("\n"))}window.profilerDump=profilerDump},{"./engine.js":19,"./local_storage.js":37,assert:void 0}],49:[function(e,t,r){"use strict"
r.profilerUI=profilerUI
r.profilerUIStartup=profilerUIStartup
var g=e("./camera2d.js")
var a=e("./cmds.js").cmd_parse
var F=e("./engine.js")
var i=e("./font.js").style
var D=e("./input.js")
var y=Math.floor,N=Math.max,O=Math.min,L=Math.round
var n=e("./net.js"),o=n.netClient,s=n.netDisconnected
var U=e("./ui.js")
var w=e("./ui.js").uiTextHeight
var l=e("./perf.js"),u=l.perfGraphOverride,M=l.friendlyBytes
var f=e("./profiler.js"),j=f.HIST_SIZE,B=f.HIST_COMPONENTS,G=f.HIST_TOT,b=f.HAS_MEMSIZE,x=f.MEM_DEPTH_DEFAULT,z=f.profilerAvgTime,S=f.profilerChildCallCount,c=f.profilerImport,E=f.profilerExport,T=f.profilerHistoryIndex,A=f.profilerAvgMem,R=f.profilerMaxMem,k=f.profilerMeasureBloat,C=f.profilerMemDepthGet,I=f.profilerMemDepthSet,d=f.profilerNodeTick,v=f.profilerNodeRoot,P=f.profilerPause,H=f.profilerPaused,V=f.profilerWalkTree,W=f.profilerWarning
var q=e("./settings.js")
var p=e("./sprites.js"),Y=p.spriteChainedStart,K=p.spriteChainedStop
var J=e("../common/util.js").lerp
var h=e("../common/vmath.js"),_=h.vec2,m=h.vec4
Z.PROFILER=Z.PROFILER||9950
var X=m(.5,.5,1,1)
var Q=null
var $
var ee
function useNewRoot(e){if($=(ee=e).child)$.color_override=X}function useSavedProfile(e){var t=c(e)
if(!t){U.modalDialog({title:"Error loading profile",text:e||"No data",buttons:{Ok:null}})
return}useNewRoot(t.root)
Q=t}function useLiveProfile(){useNewRoot(v())
Q=null}function profilerToggle(e,t){useLiveProfile()
if("1"===e)q.set("show_profiler",1)
else if("0"===e){q.set("show_profiler",0)
I(x)}else if(q.show_profiler)if(H())P(false)
else{q.set("show_profiler",0)
I(x)}else{q.set("show_profiler",1)
P(true)}if(t)t()}var te=F.DEBUG?void 0:["hidden"]
a.register({cmd:"profiler_toggle",help:"Show or toggle profiler visibility",access_show:te,func:profilerToggle})
var re=["% of user","% of parent","% of frame","% of mem"]
q.register({show_profiler:{default_value:0,type:a.TYPE_INT,range:[0,1],access_show:te},profiler_average:{default_value:1,type:a.TYPE_INT,range:[0,2],access_show:["hidden"]},profiler_relative:{default_value:1,type:a.TYPE_INT,range:[0,re.length-1],access_show:["hidden"]},profiler_interactable:{default_value:1,type:a.TYPE_INT,range:[0,1],access_show:["hidden"]},profiler_graph:{default_value:0,type:a.TYPE_INT,range:[0,1],access_show:["hidden"]},profiler_mem_depth:{default_value:x,type:a.TYPE_INT,range:[0,100],access_show:["hidden"]},profiler_hide_bloat:{default_value:1,type:a.TYPE_INT,range:[0,1],access_show:te}})
var ae
var ie
var ne=i(null,{color:4286545919})
var oe=i(null,{color:4294955263})
var se=i(null,{color:4294955263})
var le=i(null,{color:3506438143})
var ue=i(null,{color:3506426111})
var fe=i(null,{color:4294967295,outline_width:.8,outline_color:4294967295})
var ce=i(null,{color:4294967295,outline_width:1,outline_color:128})
var de=22
var ve=24
var pe=(ve-de)/2
var he
var _e
var me
var ge
var ye=Z.PROFILER
var we=Z.PROFILER+1
var be=Z.PROFILER+2
var xe=Z.PROFILER+3
var Se=Z.PROFILER+4
var Ee=Z.PROFILER+5
var Te=58
var Ae=56
var Re=120
var ke=["Profiler","µs (count)","max","GC / Δmem"]
var Ce=[400,Te+4+Ae,Te,Re]
var Ie=[]
var Pe
for(var Fe=Ie[0]=0;Fe<Ce.length;++Fe)Ie[Fe+1]=Ie[Fe]+Ce[Fe]+4
var De=Ie[Ce.length]
var Ne=Ie[Ce.length-1]
var Oe=m(0,.25,0,.85)
var Le=m(0,0,0,.85)
var Ue=m(.2,.2,.2,.85)
var Me=m(.3,.3,.3,.85)
var je=m(0,0,.5,.85)
var Be=m(.2,.2,.7,.85)
var Ge=m(0,0,.3,.85)
var ze=m(.2,.2,.4,.85)
var He=m(1,1,.5,1)
var Ve=m(0,0,0,.5)
var We=16
var qe=4096
var Ye
var Ke
var Ze
var Je
var Xe
var Qe
var $e
var et
var tt
var rt
var at={}
var it
var nt
var ot=0
var st={history_size:j,num_lines:2,data:{history:new Float32Array(2*j),index:0},line_scale_top:We,bars_stack:true,colors:[m(.5,1,.5,1),X]}
var lt
var ut={x:0,peek:true,h:ve}
function profilerShowEntryEarly(e,t){if(0===q.profiler_relative&&e===$)return false
var r=0
for(var a=0;a<G;a+=B)r+=e.history[a]
if(!r)return true
ut.y=ie
ut.w=tt
if(D.mouseOver(ut)){at[(it=e).id]=1
for(var i=e.parent;i;i=i.parent)at[i.id]=2}ie+=ve
if(!e.show_children)return false
return true}function hasActiveChildren(e){if(!(e=e.child))return false
while(e){for(var t=0;t<G;t+=B)if(e.history[t])return true
e=e.next}return false}function childMemCallCount(e,t){var r=e.child
var a=0
while(r){if(r.history[t+2])a+=r.history[t]
a+=childMemCallCount(r,t)
r=r.next}return a}function nodeMemValue(e,t){var r=e.history[t]
var a=e.history[t+2]
if(rt&&q.profiler_hide_bloat&&a>0)a=N(0,a-r*lt.inner.mem-childMemCallCount(e,t)*lt.outer.mem)
return a}var ft={x:0,h:ve}
function profilerShowEntry(e,t){if(0===q.profiler_relative&&e===$)return false
var r=0
var a=0
var i=0
var n=0
var o=Infinity
var s=-Infinity
var l=0
var u=0
for(var f=0;f<G;f+=B)if(e.history[f]){n++
a+=e.history[f]
r+=e.history[f+1]
i=N(i,e.history[f+1])
var c=nodeMemValue(e,f)
ot=N(ot,c)
o=O(o,c)
s=N(s,c)
if(c>=0){l+=c;++u}}if(!a)return true
if(u)l=L(l/u)
var d=1===at[e.id]
var v=2===at[e.id]
if(et){ft.y=ie
ft.w=tt
var p=D.click(ft)
if(p)if(1===p.button)e.parent.toggleShowChildren()
else e.toggleShowChildren()}profilerStart("bar graph")
Y()
var h=d?je:v?Ge:Le
var _=d?Be:v?ze:Ue
if(!F.defines.NORECTS)U.drawRect4Color(0,ie,tt,ie+ve,ye,h,h,_,_)
var m=Pe
var g=1+q.profiler_graph
var y=q.profiler_graph?qe:We
for(var w=0;w<j;++w){var b=e.history[($e+(w+1)*B)%G+g]
if(b>0){var x=b/y
var S=O(x*ve,ve)
if(x<1){He[0]=x
He[1]=1}else{He[0]=1
He[1]=N(0,2-x)}var E=e.color_override||He
if(!F.defines.NORECTS){var T=U.drawRect(m+w*ge,ie+ve-S,m+(w+1)*ge,ie+ve,we,E)
T.x=T.y=0}}}K()
profilerStop("bar graph")
ie+=pe
var A
if(hasActiveChildren(e))if(!e.show_children)A="▶"
else A="▼"
var R=0
if(1===q.profiler_relative){if(e.parent)if(Qe)R=r/j/z(e.parent)
else R=e.history[Je]?e.history[Je]/e.parent.history[Je]:0}else if(3===q.profiler_relative)if(2===Qe)R=s/Ke
else if(Qe)R=l/Ke
else R=e.history[Xe]/Ke
else if(Qe)R=r/j/Ye
else R=e.history[Je]/Ye
m=t*de
if(A)ae.drawSized(null,m-16,ie,be,de,A)
m+=2*de
ae.drawSizedAligned(se,m,ie+me,Se,_e,ae.ALIGN.HRIGHT,0,0,(100*R).toFixed(0)+"%")
ae.drawSized(ce,m+=4,ie,xe,de,e.name)
m=Ie[1]
var k=Qe?r/n:e.history[Je]
var C=Qe?(a/n).toFixed(0):e.history[Ze]
ae.drawSizedAligned(le,m,ie+me,Ee,_e,ae.ALIGN.HRIGHT,Te,0,(1e3*k).toFixed(0))
m+=Te+4
ae.drawSizedAligned(oe,m,ie+me,Se,_e,ae.ALIGN.HFIT,Ae,0,"("+C+")")
m=Ie[2]
var I=.25*i>r/n&&i>500
ae.drawSizedAligned(I?ne:le,m,ie+me,Ee,_e,ae.ALIGN.HRIGHT,Ce[2],0,(1e3*i).toFixed(0))
if(rt){m=Ie[3]
var P=2===Qe?s:Qe?l:nodeMemValue(e,Ze)
if(o<0){ae.drawSizedAligned(ne,m,ie+me,Ee,_e,ae.ALIGN.HLEFT|ae.ALIGN.HFIT,Re/2,0,""+M(-o))
ae.drawSizedAligned(ue,m+Re/2,ie+me,Ee,_e,ae.ALIGN.HRIGHT|ae.ALIGN.HFIT,Re/2,0,""+P)}else ae.drawSizedAligned(ue,m,ie+me,Ee,_e,ae.ALIGN.HRIGHT,Re,0,""+P)}ie+=de+pe
if(!e.show_children)return false
return true}function doZoomedGraph(){if(q.profiler_graph){st.line_scale_top=qe
if(!it)it=d()}else if(!it||it===$)st.line_scale_top=2*We
else st.line_scale_top=We
var e=1+q.profiler_graph
if(it){var t=it
for(var r=0;r<j;++r){st.data.history[2*r]=t.history[r*B+e]
st.data.history[2*r+1]=0}}else for(var a=0;a<j;++a){var i=a*B+e
st.data.history[2*a]=ee.history[i]-$.history[i]
st.data.history[2*a+1]=$.history[i]}st.data.index=$e/B
u(st)}var ct=140
var dt=48
var vt=24
var pt=_()
var ht={inner:{time:0,mem:0},outer:{time:0,mem:0}}
var _t
var mt
var gt
var yt
var wt
var bt
var xt
var St
var Et
var Tt
var At
var Rt
var kt
function buttonInit(){var e=Z.PROFILER+10
_t={x:tt,y:ie=0,z:e,w:ct,h:dt,font_height:vt}
mt={x:tt+ct,y:ie,z:e,w:dt,h:dt,font_height:vt,text:"X"}
gt={x:tt,y:ie+=dt,z:e,w:ct,h:dt,font_height:vt}
yt={x:tt,y:ie+=dt,z:e,w:ct,h:dt,font_height:vt}
wt={x:tt,y:ie+=dt,z:e,w:ct,h:dt,font_height:vt}
bt={x:tt,y:ie+=dt,z:e,w:ct,h:dt,font_height:vt}
ie+=dt
xt={x:tt,y:ie+=ve,z:e,w:ct/3,h:dt,font_height:vt,text:"-"}
St={x:tt+ct/3,y:ie,z:e,w:ct/3,h:dt,font_height:vt}
Et={x:tt+2*ct/3,y:ie,z:e,w:ct/3,h:dt,font_height:vt,text:"+"}
Tt={x:tt,y:ie+=dt,z:e,w:ct,h:dt,font_height:vt}
ie+=dt
At={x:tt,y:ie+=ve,z:e,w:ct/2,h:dt,font_height:vt,text:"save"}
Rt={x:tt+ct/2,y:ie,z:e,w:ct/2,h:dt,font_height:vt,text:"load"}}function profilerUIRun(){profilerStart("profilerUIRun")
profilerStart("top+buttons")
lt=ht
if(!Q&&q.profiler_hide_bloat)lt=k()
if(F.render_width){var e=de/w()
g.set(0,0,e*F.render_width,e*F.render_height)
he=1
ge=e}else{g.setScreen(true)
he=.9
ge=2}Pe=Ie[1]-j*ge
me=(de-(_e=de*he))/2
if(C()!==q.profiler_mem_depth)I(q.profiler_mem_depth)
if(Q){$e=Q.history_index
rt=Q.mem_depth>0}else{$e=T()
rt=b}tt=rt?De:Ne
if(!_t||tt!==kt){kt=tt
buttonInit()}var t=Z.PROFILER+10
ie=0
var r=tt
_t.text=q.profiler_interactable?"interactable":"overlay"
if(U.buttonText(_t))q.set("profiler_interactable",1-q.profiler_interactable)
if((et=q.profiler_interactable)&&U.buttonText(mt))q.set("show_profiler",0)
ie+=dt
var a=Q?"loaded":H()?"paused":"live"
if(et){gt.text=a
if(U.buttonText(gt))if(Q)useLiveProfile()
else P(!H())}else ae.drawSizedAligned(null,r,ie,t,de,ae.ALIGN.HVCENTERFIT,ct,dt,a)
ie+=dt
if(et){yt.text=re[q.profiler_relative]
if(U.buttonText(yt))q.set("profiler_relative",(q.profiler_relative+1)%re.length)}else ae.drawSizedAligned(null,r,ie,t,de,ae.ALIGN.HVCENTERFIT,ct,dt,re[q.profiler_relative])
ie+=dt
a=2===q.profiler_average?"max":q.profiler_average?"average":"last frame"
if(et){wt.text=a
if(U.buttonText(wt)){var i=b?3:2
q.set("profiler_average",(q.profiler_average+1)%i)}}else ae.drawSizedAligned(null,r,ie,t,de,ae.ALIGN.HVCENTERFIT,ct,dt,a)
ie+=dt
a=q.profiler_graph?"graph: mem":"graph: CPU"
if(et){bt.text=a
if(U.buttonText(bt))q.set("profiler_graph",1-q.profiler_graph)}else ae.drawSizedAligned(null,r,ie,t,de,ae.ALIGN.HVCENTERFIT,ct,dt,a)
ie+=dt
if(Q?true:b){var n=Q?Q.mem_depth:C()
ae.drawSizedAligned(null,r,ie,t,de,ae.ALIGN.HVCENTERFIT,ct,ve,"Mem Depth")
ie+=ve
a=""+(n||"OFF")
if(et){xt.disabled=Q||0===n
if(U.buttonText(xt)){I(n-1)
q.set("profiler_mem_depth",C())}St.disabled=Q
St.text=a
if(U.buttonText(St)){if(n===x)I(99)
else I(x)
q.set("profiler_mem_depth",C())}Et.disabled=Q
if(U.buttonText(Et)){I(n+1)
q.set("profiler_mem_depth",C())}}else ae.drawSizedAligned(null,r,ie,t,de,ae.ALIGN.HVCENTERFIT,ct,dt,a)}else ie+=ve
ie+=dt
a=1e3===q.max_fps?"max CPU":0===q.max_fps?"anim frame":"?"
if(et){Tt.text=a
if(U.buttonText(Tt))q.set("max_fps",0===q.max_fps?1e3:0)}else ae.drawSizedAligned(null,r,ie,t,de,ae.ALIGN.HVCENTERFIT,ct,dt,a)
ie+=dt
var o=S(ee,false,q.profiler_average)
ae.drawSizedAligned(null,r,ie,t,de,ae.ALIGN.HVCENTERFIT,ct,ve,o+" calls")
ie+=ve
if(et){At.disabled=Q
if(U.buttonText(At)){var s=document.createElement("a")
s.href="data:application/json,"+encodeURIComponent(E())
s.setAttribute("download","profile.json")
s.click()}if(U.buttonText(Rt)){var l=document.createElement("input")
l.setAttribute("type","file")
var u=new FileReader
u.onload=function(){if(2===u.readyState)useSavedProfile(u.error||u.result)}
l.onchange=function(){u.readAsText(l.files[0])}
l.click()}ie+=dt}U.drawRect(r,0,r+ct,ie,t-1,Le)
ie=0
ae.drawSizedAligned(fe,Ie[0],ie,t,de,ae.ALIGN.HLEFT,Ce[0],0,ke[0])
for(var f=1;f<ke.length-(rt?0:1);++f)ae.drawSizedAligned(fe,Ie[f],ie,t,de,ae.ALIGN.HCENTER,Ce[f],0,ke[f])
U.drawRect(0,ie,tt,ie+ve,t-1,Me)
var c=ie+=ve
it=null
nt=-1
if(et){at={}
V(ee,profilerShowEntryEarly)
if(it){if(Q||H()){var d=D.mousePos(pt)[0]-Pe
if((nt=y(d/ge))<0||nt>=j)nt=-1}for(var v=ot=0;v<G;v+=B)if(it.history[v])ot=N(ot,it.history[v+2])}}if(ot<.25*qe||ot>qe)qe=J(.1,qe,ot)
ot=0
Qe=q.profiler_average
Ze=$e
if(-1!==nt){Qe=false
Ze=(Ze-(j-nt-1)*B+G)%G}Je=Ze+1
Xe=Ze+2
if(Qe){if(0===q.profiler_relative){Ye=0
var p=ee.child
while(p){if(p!==$)Ye+=z(p)
p=p.next}Ye=N(Ye,.001)}else if(2===q.profiler_relative)Ye=z(ee)
else if(3===q.profiler_relative)if(2===Qe)Ke=R(ee)
else Ke=A(ee)}else if(0===q.profiler_relative){Ye=0
var h=ee.child
while(h){if(h!==$)Ye+=h.history[Je]
h=h.next}Ye=N(Ye,.001)}else if(2===q.profiler_relative)Ye=ee.history[Je]
else if(3===q.profiler_relative)if((Ke=ee.history[Xe])<0){var _=ee.child
Ke=0
while(_){Ke+=N(0,_.history[Xe])
_=_.next}}profilerStopStart("interface")
ie=c
V(ee,profilerShowEntry)
var m=!Q&&W()
if(m){ae.drawSizedAligned(ce,de,ie,xe,de,ae.ALIGN.HVCENTERFIT,tt-2*de,1.5*ve,m)
U.drawRect(0,ie,tt,ie+1.5*ve,xe-.5,Oe)}if(-1!==nt)U.drawRect(Pe+nt*ge,c,Pe+(nt+1)*ge,ie,we+.5,Ve)
if(et)D.mouseOver({x:0,y:0,w:tt,h:ie})
doZoomedGraph()
profilerStop()
profilerStop("profilerUIRun")}function profilerUIStartup(){ae=U.font
useLiveProfile()}function profilerUI(){if(F.DEBUG&&D.keyUpEdge(D.KEYS.F7))profilerToggle()
if(q.show_profiler)profilerUIRun()
if(F.DEBUG||q.show_profiler);}a.register({cmd:"profile",help:"Captures a performance profile for developer investigation",prefix_usage_with_help:true,usage:"Optionally delays for DELAY seconds before capturing the profile.\nUsage: /profile [DELAY]",func:function func(e,r){function doit(){var e=E()
if(s()){U.provideUserString("Profiler Snapshot",e)
r()}else o().send("profile",e,null,function(e,t){if(null!=t&&t.id){U.provideUserString("Profile submitted","ID="+t.id)
r(null,"Profile submitted with ID="+t.id)}else r(e,t)})}if(Number(e))setTimeout(doit,1e3*Number(e))
else doit()}})},{"../common/util.js":92,"../common/vmath.js":94,"./camera2d.js":13,"./cmds.js":15,"./engine.js":19,"./font.js":25,"./input.js":34,"./net.js":41,"./perf.js":43,"./profiler.js":48,"./settings.js":54,"./sprites.js":63,"./ui.js":67}],50:[function(e,t,r){"use strict"
r.randFastCreate=randFastCreate
r.randSimpleSpatial=randSimpleSpatial
function step2(e){e=e>>>0||22329833666
e^=e<<13
e^=e>>>17
e^=e<<5
e^=e<<13
return((e^=e>>>17)^e<<5)>>>0}function RandSeed2(e){this.seed=step2(e)}RandSeed2.prototype.reseed=function(e){this.seed=step2(e)}
RandSeed2.prototype.step=function(){var e=this.seed
e^=e<<13
e^=e>>>17
return(this.seed=(e^=e<<5)>>>0)-1}
RandSeed2.prototype.uint32=RandSeed2.prototype.step
RandSeed2.prototype.range=function(e){return this.step()*e*2.3283064376e-10|0}
RandSeed2.prototype.random=function(){return 2.3283064376e-10*this.step()}
RandSeed2.prototype.floatBetween=function(e,t){return e+(t-e)*this.random()}
function randFastCreate(e){return new RandSeed2(e)}var i=134775813
var n=1103515245
function randSimpleSpatial(e,t,r,a){return(((t^(r+=10327*a))*i^e+t)*(n*t<<16^n*r-i)>>>0)/4294967295}},{}],51:[function(e,t,r){"use strict"
r.scoreAlloc=scoreAlloc
r.scoreFormatName=scoreFormatName
r.scoreGetPlayerName=scoreGetPlayerName
r.scoreUpdatePlayerName=scoreUpdatePlayerName
var c=e("assert")
var a=e("../common/execute_with_retry").executeWithRetry
var i=e("../common/util")
var n=i.callEach
var o=i.nop
var s=e("./fetch").fetch
var l="ld.player_name"
var u="score.userid"
var f=3e5
var d=5e3
var v=""
var p=function(){try{localStorage.setItem("test","test")
localStorage.removeItem("test")
return localStorage}catch(e){return{}}}()
if(p[l])v=p[l]
var h="http://scores.dashingstrike.com"
if(-1!==window.location.host.indexOf("localhost")||-1!==window.location.host.indexOf("staging"))h="http://scores.staging.dashingstrike.com"
if(window.location.href.startsWith("https://"))h=h.replace(/^http:/,"https:")
function scoreGetPlayerName(){return v}function fetchJSON2(e,r){s({url:e,response_type:"json"},function(e,t){r(e,t)})}function fetchJSON2Timeout(e,t,r){s({url:e,response_type:"json",timeout:t},function(e,t){r(e,t)})}var _=null
var m=null
function withUserID(e){if(null===_&&p[u]){_=p[u]
console.log('Using existing ScoreAPI UserID: "'+_+'"')}if(null!==_)return e(_)
if(null!==m){m.push(e)
return}m=[e]
var t=h+"/api/useralloc"
function fetchUserID(r){fetchJSON2Timeout(t,2e4,function(e,t){if(e)return r(e)
c(t)
c(t.userid)
c.equal(typeof t.userid,"string")
r(null,t.userid)})}function done(e,t){c(!e)
c(t)
_=t
p[u]=t
console.log('Allocated new ScoreAPI UserID: "'+_+'"')
n(m,m=null,_)}a(fetchUserID,{max_retries:Infinity,inc_backoff_duration:250,max_backoff:3e4,log_prefix:"ScoreAPI UserID fetch"},done)}var g=function(){function ScoreSystemImpl(e){this.score_to_value=void 0
this.value_to_score=void 0
this.level_defs=void 0
this.asc=void 0
this.rel=void 0
this.num_names=void 0
this.SCORE_KEY=void 0
this.LS_KEY=void 0
this.high_scores={}
this.high_scores_raw={}
this.score_to_value=e.score_to_value
this.value_to_score=e.value_to_score
this.asc=e.asc
this.rel=e.rel||20
this.num_names=e.num_names||3
var t=[]
if("number"===typeof e.level_defs)for(var r=0;r<e.level_defs;++r)t.push({name:""})
else for(var a=0;a<e.level_defs.length;++a)t.push({name:e.level_defs[a].name||""})
this.level_defs=t
this.SCORE_KEY=e.score_key
this.LS_KEY=e.ls_key||this.SCORE_KEY.toLowerCase()
for(var i=0;i<t.length;++i){var n=t[i]
if(!n.name)if(1===t.length)n.name="the"
else n.name=String(i)
this.getScore(i)}}var e=ScoreSystemImpl.prototype
e.getHighScores=function getHighScores(e){this.refreshScores(e)
return this.high_scores[e]||null}
e.handleScoreResp=function handleScoreResp(e,t){this.high_scores_raw[e]=t
this.formatScoreResp(e)}
e.formatScoreResp=function formatScoreResp(e){var t=this.high_scores_raw[e]
c(t)
var r={total:t.total,my_rank:t.my_rank,list:[]}
var a=1
for(var i=0;i<t.list.length;++i){var n=t.list[i]
var o=n.n||[]
if("string"===typeof o)o=[o]
else o=o.slice(0)
var s=n.c||1
var l=n.r||a
if(l===t.my_rank){var u=scoreGetPlayerName()
if(u&&!o.includes(u)){o.unshift(u)
if(o.length>this.num_names)o.pop()}}if(!o.length)o.push("Anonymous")
var f=o.join(", ")
if(s>o.length)f+=(f?", ":"")+(s-o.length)+" "+(o.length?"others":"users")
r.list.push({score:this.value_to_score(n.s),names:o,names_str:f,count:s,rank:l})
a=l+s}this.high_scores[e]=r}
e.makeURL=function makeURL(e,t){c(_)
var r=h+"/api/"+e+"?v2&key="+this.SCORE_KEY+"."+t.name+"&userid="+_
if(this.rel)r+="&rel="+this.rel
if(3!==this.num_names)r+="&num_names="+this.num_names
if(this.asc)r+="&asc"
return r}
e.refreshScores=function refreshScores(r,a){var i=this
var n=this.level_defs[r]
if(!n)n=this.level_defs[r]={name:String(r)}
if(n.refresh_in_flight){null==a||a()
return}var e=Date.now()
if(!n.last_refresh_time||e-n.last_refresh_time>f);else{null==a||a()
return}n.last_refresh_time=e
n.refresh_in_flight=true
withUserID(function(){var e=i.makeURL("scoreget",n)
var t=n.local_score?i.score_to_value(n.local_score):null
if(t)e+="&score="+t
fetchJSON2(e,function(e,t){n.refresh_in_flight=false
if(!e)i.handleScoreResp(r,t)
null==a||a()})})}
e.forceRefreshScores=function forceRefreshScores(e,t){if(void 0===t)t=5e3
var r=this.level_defs[e]
if(r.last_refresh_time&&r.last_refresh_time<Date.now()-t)r.last_refresh_time=0
this.refreshScores(e)}
e.prefetchScores=function prefetchScores(e){this.refreshScores(e)}
e.submitScore=function submitScore(r,e,a,i){var n=this
var o=this.level_defs[r]
var s=this.score_to_value(e)
withUserID(function(){var e=n.makeURL("scoreset",o)
e+="&score="+s
if(v)e+="&name="+encodeURIComponent(v)
if(a){var t="&payload="+encodeURIComponent(a)
if(e.length+t.length>=2e3)t='&payload="truncated"'
e+=t}fetchJSON2(e,function(e,t){if(!e)n.handleScoreResp(r,t)
null==i||i(e||null)})})}
e.saveScore=function saveScore(e,t,r){var a=this
var i=this.level_defs[e]
var n=t
n.payload=r
i.local_score=n
var o=this.LS_KEY+".score_"+i.name
p[o]=JSON.stringify(n)
if(i.save_in_flight)return
var s=function doSubmit(){n=i.local_score
a.submitScore(e,n,n.payload,function(e){i.save_in_flight=false
if(!e)n.submitted=true
if(n===i.local_score){if(!e)p[o]=JSON.stringify(n)}else{i.save_in_flight=true
setTimeout(doSubmit,d)}})}
i.save_in_flight=true
s()}
e.hasScore=function hasScore(e){return Boolean(this.getScore(e))}
e.getScore=function getScore(e){var t=this.level_defs[e]
if(t.local_score)return t.local_score
var r=this.LS_KEY+".score_"+t.name
if(p[r]){var a=JSON.parse(p[r])
if(!a)return null
if(!(t.local_score=a).submitted)this.saveScore(e,a,a.payload)
return a}return null}
e.setScore=function setScore(e,t,r){var a
var i=this.level_defs[e]
var n=this.score_to_value(t)||0
var o=i.local_score&&this.score_to_value(i.local_score)||(this.asc?Infinity:0)
if(this.asc?n<o:n>o||n===o&&!(null!=(a=i.local_score)&&a.submitted))this.saveScore(e,t,r)}
e.onUpdatePlayerName=function onUpdatePlayerName(e){for(var t in this.high_scores_raw){var r=Number(t)
var a=this.high_scores_raw[r]
c(a)
if(a.my_rank){var i=1
for(var n=0;n<a.list.length;++n){var o=a.list[n]
var s=o.c||1
var l=o.r||i
if(l===a.my_rank){var u=o.n
if(u){if("string"===typeof u)u=[u]
var f=u.indexOf(e)
if(-1!==f){u.splice(f,1)
o.n=u}}}i=l+s}}this.formatScoreResp(r)}}
return ScoreSystemImpl}()
var y=[]
function scoreAlloc(e){withUserID(o)
var t=new g(e)
y.push(t)
return t}function scoreFormatName(e){return e.names_str}function scoreUpdatePlayerName(e){if(e)e=e.trim().slice(0,64)
if(e===v||!e)return
var a=v
p[l]=v=e
withUserID(function(e){var t=h+"/api/userrename?userid="+e+"&name="+encodeURIComponent(v)
s({url:t},function(e,t){if(e){if(t)try{e=JSON.parse(t).err||e}catch(e){}p[l]=v=a
alert('Error updating player name: "'+e+'"')}else for(var r=0;r<y.length;++r)y[r].onUpdatePlayerName(a)})})}},{"../common/execute_with_retry":82,"../common/util":92,"./fetch":23,assert:void 0}],52:[function(e,t,r){"use strict"
r.drawCellDefault=drawCellDefault
r.scoresDraw=scoresDraw
var te=e("assert")
var a=e("../common/util")
var m=a.clamp
var re=a.plural
var ae=e("./auto_reset").autoResetEachFrame
var g=e("./camera2d").clipTestRect
var ie=e("./edit_box").editBoxCreate
var ne=e("./engine").getFrameTimestamp
var oe=e("./font").ALIGN
var i=e("./score")
var se=i.scoreFormatName
var le=i.scoreGetPlayerName
var ue=i.scoreUpdatePlayerName
var fe=e("./scroll_area").scrollAreaCreate
var n=e("./sprites")
var y=n.spriteClipPop
var w=n.spriteClipPush
var ce=e("./ui")
var de=e("./ui").uiButtonHeight
var ve=Math.max,pe=Math.min,he=Math.round
var _e
var me
var ge
function getName(e){return e.name}function drawCellDefault(e){var t=e.value,r=e.x,a=e.y,i=e.z,n=e.w,o=e.h,s=e.size,l=e.column,u=e.use_style
e.header
var f=l.align
if(void 0===f)f=oe.HVCENTERFIT
var c=String(t)
_e.drawSizedAligned(u,r,a,i,s,f,n,o,c)}var ye=0
var b=1500
var x=1e3
var we=2*b+x
function drawCellScrolling(e){var t=e.value,r=e.x,a=e.y,i=e.z,n=e.w,o=e.h,s=e.size,l=e.column,u=e.use_style
e.header
var f=l.align
if(void 0===f)f=oe.VCENTER
f&=~oe.HFIT
var c=String(t)
var d=_e.getStringWidth(u,s,c)
if(d<=n)_e.drawSizedAligned(u,r,a,i,s,f,n,o,c)
else{var v=ne()-ye
var p=m((v-b)/x,0,1)*(d-n)
var h={x:r,y:a,w:n,h:o}
if(g(h)){w(i,h.x,h.y,h.w,h.h)
if(_e.integral)p=he(p)
var _=r-p
_e.drawSizedAligned(u,_,a,i,s,f,n,o,c)
y()}}}var be={name:"",width:1,align:oe.HVCENTER}
var xe=-1
var Se=0
var Ee=0
var Te=false
function scoresDraw(e){var t=e.score_system,o=e.x,s=e.y,l=e.z,r=e.width,a=e.height,i=e.level_index,u=e.size,f=e.line_height,c=e.columns,n=e.scoreToRow,d=e.style_score,v=e.style_me,p=e.style_header,h=e.color_me_background,_=e.color_line,m=e.allow_rename
te(1===h[3])
if(!_e)_e=ce.font
var g=ne()
if(xe!==i){ye=ne()
xe=i}if(g-ye>we)ye=g
if(ae("score_ui")){Se=Ee
Ee=0}var y=u
var w=y/2
var b=de()
var x=s+a-(b+y)
var S=t.getHighScores(i)
if(!S){_e.drawSizedAligned(d,o,s,l,u,oe.HVCENTERFIT,r,a,"Loading...")
return s+a}if(!ge)ge=fe({w:r,rate_scroll_click:f,background_color:null,auto_hide:true})
var E=r-ge.barWidth()
var T=0
for(var A=0;A<c.length;++A)T+=c[A].width
var R=[]
for(var k=0;k<c.length;++k){var C=c[k].width
R[k]=C*(E-w*(c.length-1))/T}function drawSet(e,t,r){var a=o
for(var i=0;i<e.length;++i){var n=c[i];(n.draw||(1===i?drawCellScrolling:drawCellDefault))({value:e[i],x:a,y:s,z:l,w:R[i],h:f,size:u,column:n,use_style:t,header:r})
a+=R[i]+w}s+=f}drawSet(c.map(getName),p,true)
s+=2
ce.drawLine(o,s,o+r,s,l,1,1,_)
var I=x-(s+=1)
ge.begin({x:o,y:s,h:I})
var P=he(ge.getScrollPos())
var F=P-2*f
var D=P+I+f
var N=P
var O=P+I-f+1
var L=s
var U=o
s=o=0
function drawScoreEntry(e,t,r){var a=[null===e?"--":"#"+t.rank,se(t)]
n(a,t.score)
drawSet(a,r,false)}var M=le()
var j=false
var B=S.list
var G=1
for(var z=0;z<B.length;++z){var H=B[z%B.length]
var V=H.rank-G
if(V){if(s>=F&&s<=D)drawCellScrolling({value:"... "+V+" "+re(V,"other")+" ...",x:o,y:s,z:l,w:E,h:f,size:u,column:be,use_style:d,header:false})
s+=f}var W=d
var q=false
if(H.rank===S.my_rank&&!j){W=v
q=j=true}if(q){var Y=s
if(s<N)s=N
else if(s>O)s=O
l+=20
ce.drawRect(o,s,o+r+1,s+f-1,l-1,h)
drawScoreEntry(z,H,W)
l-=20
s=Y+f}else if(s>=F&&s<=D)drawScoreEntry(z,H,W)
else s+=f
G=H.rank+H.count}var K=S.total+1-G
if(K){if(s>=F&&s<=D)drawCellScrolling({value:"... "+K+" "+re(K,"other")+" ...",x:o,y:s,z:l,w:E,h:f,size:u,column:be,use_style:d,header:false})
s+=f}if(!j&&t.getScore(i)){var Z=t.getScore(i)
var J=s
if(s<N)s=N
else if(s>O)s=O
l+=20
ce.drawRect(o,s,o+r+1,s+f-1,l-1,h)
drawScoreEntry(null,{names_str:M,names:[M],score:Z,rank:-1,count:1},v)
l-=20
s=J+f}var X=u/2
Ee=ve(Ee,s+=X/2)
ge.end(ve(Se,Ee))
o=U
s=L+pe(I,s)
s+=X/2
if(j&&m){if(!me)(me=ie({z:l,w:r/2,placeholder:"Anonymous"})).setText(M)
var Q=M.startsWith("Anonymous")||!M||Te
var $={x:o,y:s-.25*u,z:l,w:10*u,h:b,text:Te&&M===me.text?"Cancel":M?"Update Name":"Set Name"}
if(Q){$.x+=me.w+u
var ee=me.run({x:o,y:s})===me.SUBMIT
$.disabled=!me.text
if(ce.buttonText($)||ee)if(me.text){te("string"===typeof me.text)
ue(me.text)
Te=false}}else{$.text+="..."
if(ce.buttonText($))Te=true}s+=u}return s+=y}},{"../common/util":92,"./auto_reset":9,"./camera2d":13,"./edit_box":17,"./engine":19,"./font":25,"./score":51,"./scroll_area":53,"./sprites":63,"./ui":67,assert:void 0}],53:[function(e,t,r){"use strict"
r.scrollAreaCreate=scrollAreaCreate
r.scrollAreaSetPixelScale=scrollAreaSetPixelScale
function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a))e[a]=r[a]}return e}).apply(this,arguments)}var J=e("assert")
var a=e("../common/util")
var X=a.clamp
var i=a.merge
var n=e("../common/vmath")
var o=n.vec2
var s=n.vec4
var Q=e("./camera2d")
var $=e("./engine")
var ee=e("./engine").renderNeeded
var te=e("./input")
var l=e("./input")
var re=l.BUTTON_LEFT
var u=l.KEYS
var f=l.PAD
var c=e("./spot")
var ae=c.SPOT_DEFAULT_BUTTON
var ie=c.SPOT_STATE_DOWN
var ne=c.SPOT_STATE_FOCUSED
var oe=c.spot
var se=c.spotPadMode
var h=c.spotSubBegin
var le=c.spotSubEnd
var ue=c.spotUnfocus
var d=e("./sprites")
var fe=d.spriteClipPop
var _=d.spriteClipPush
var ce=e("./ui")
var v=e("./ui").uiTextHeight
var de=Math.abs,ve=Math.max,pe=Math.min,p=Math.round
var m=50
var he=180
function darken(e,t){return s(e[0]*t,e[1]*t,e[2]*t,e[3])}var g=1
function scrollAreaSetPixelScale(e){g=e}var _e=o()
var y=0
var w=function(){function ScrollAreaInternal(e){this.id="sa:"+ ++y
this.x=0
this.y=0
this.z=Z.UI
this.w=10
this.h=10
this.rate_scroll_click=v()
this.pixel_scale=g
this.top_pad=true
this.color=s(1,1,1,1)
this.background_color=s(.4,.4,.4,1)
this.auto_scroll=false
this.auto_hide=false
this.no_disable=false
this.focusable_elem=null
this.min_dist=void 0
this.disabled=false
this.rate_scroll_wheel=void 0
this.rollover_color=void 0
this.rollover_color_light=void 0
this.disabled_color=void 0
this.scroll_pos=0
this.overscroll=0
this.overscroll_delay=0
this.grabbed_pos=0
this.grabbed=false
this.consumed_click=false
this.drag_start=null
this.began=false
this.last_internal_h=0
this.last_frame=0
this.was_disabled=false
this.scrollbar_visible=false
this.last_max_value=0
this.ignore_this_fram_drag=false
this.applyParams(e=e||{})
this.rate_scroll_wheel=e.rate_scroll_wheel||2*this.rate_scroll_click
this.rollover_color=e.rollover_color||darken(this.color,.75)
this.rollover_color_light=e.rollover_color_light||darken(this.color,.95)
J(this.rollover_color_light!==this.color)
this.disabled_color=e.disabled_color||this.rollover_color}var e=ScrollAreaInternal.prototype
e.applyParams=function applyParams(e){if(!e)return
i(this,e)}
e.barWidth=function barWidth(){var e=this.pixel_scale
return ce.sprites.scrollbar_top.uidata.total_w*e}
e.isFocused=function isFocused(){J(false,"deprecated?")
return false}
e.consumedClick=function consumedClick(){return this.consumed_click}
e.isVisible=function isVisible(){return this.scrollbar_visible}
e.begin=function begin(e){this.applyParams(e)
var t=this.x,r=this.y,a=this.w,i=this.h,n=this.z,o=this.id
this.began=true
h({x:t,y:r,w:a,h:i,key:o})
_(n+.05,t,r,a-this.barWidth(),i)
var s=Q.x0()
var l=Q.x1()
var u=Q.y0()
var f=Q.y1()
var c=-(t-s)
var d=-(r-u)+this.getScrollPos()
var v=c+l-s
var p=d+f-u
Q.push()
Q.set(c,d,v,p)
this.ignore_this_fram_drag=false}
e.getScrollPos=function getScrollPos(){return p(this.scroll_pos+this.overscroll)}
e.clampScrollPos=function clampScrollPos(){var e=X(this.scroll_pos,0,this.last_max_value)
if(this.scroll_pos<0)this.overscroll=ve(this.scroll_pos,-m)
else if(this.scroll_pos>this.last_max_value)this.overscroll=pe(this.scroll_pos-this.last_max_value,m)
this.scroll_pos=e}
e.keyboardScroll=function keyboardScroll(){if(this.was_disabled)return
var e=false
var t=te.padButtonDown(f.RIGHT_TRIGGER)||te.padButtonDown(f.LEFT_TRIGGER)
if(te.keyDownEdge(u.PAGEDOWN)+(t?te.padButtonDownEdge(f.DOWN):0)){this.scroll_pos=pe(this.scroll_pos+this.h,this.scroll_pos===this.last_max_value?Infinity:this.last_max_value)
e=true}if(te.keyDownEdge(u.PAGEUP)+(t?te.padButtonDownEdge(f.UP):0)){this.scroll_pos=ve(this.scroll_pos-this.h,0===this.scroll_pos?-this.h:0)
e=true}if(e)this.clampScrollPos()}
e.end=function end(e){J(e>=0)
e=ve(e,1)
J(this.began)
this.began=false
this.consumed_click=false
var t=le()
Q.pop()
fe()
if(t&&se())this.scrollIntoFocus(t.y,t.y+t.h+1,this.h)
var r=ve(e-this.h+1,0)
if(this.scroll_pos>r){var a=this.scroll_pos-r
this.scroll_pos=ve(0,r)
if(this.overscroll<0)this.overscroll=pe(this.overscroll+a,0)}var i=this.scroll_pos===this.last_max_value
if(this.auto_scroll&&(this.last_frame!==$.getFrameIndex()-1||this.last_internal_h!==e&&i)){this.overscroll=ve(0,this.scroll_pos+this.overscroll-r)
this.scroll_pos=r}this.last_internal_h=e
this.last_frame=$.getFrameIndex()
if(this.overscroll){var n=$.getFrameDt()
if(n>=this.overscroll_delay){this.overscroll_delay=0
this.overscroll*=ve(1-.008*n,0)
if(de(this.overscroll)<.001)this.overscroll=0}else this.overscroll_delay-=n
ee()}var o=this.auto_hide,s=this.pixel_scale,l=this.rollover_color,u=this.rollover_color_light
var f=ce.sprites,c=f.scrollbar_top,d=f.scrollbar_bottom,v=f.scrollbar_trough,p=f.scrollbar_handle,h=f.scrollbar_handle_grabber
var _=c.uidata.total_w*s
var m=pe(c.uidata.total_h*s,this.h/3)
var g=this.top_pad?m:0
var y=this.x+this.w-_
var w=this.h/e
w=X(w,0,1)
var b=this.h>=e?0:this.scroll_pos/(e-this.h)
b=X(b,0,1)
J(isFinite(b))
var x=w*(this.h-2*g)
var S=p.uidata.total_h*s
var E=this.h-2*m
x=ve(x,pe(S,.75*E))
var T=this.y+g+b*(this.h-2*g-x)
var A=this.color
var R=this.color
var k=this.color
var C=this.color
var I=this.disabled
var P=false
if(!this.h)P=I=true
else if(1===w){P=true
if(this.no_disable)C=A=R=k=this.disabled_color
else I=true}var F=false
if(this.was_disabled=I){C=A=R=k=this.disabled_color
this.drag_start=null}else{var D=te.mouseWheel({x:this.x,y:this.y,w:this.w,h:this.h})
if(D){this.overscroll_delay=he
this.scroll_pos-=this.rate_scroll_wheel*D
if(t)ue()}var N={x:y,y:T,w:_,h:x,button:0,spot_debug_ignore:true}
var O=te.mouseDownEdge(N)
if(O){this.grabbed_pos=O.pos[1]-T
this.grabbed=true
k=u}if(this.grabbed)F=true
if(this.grabbed){var L=te.mouseUpEdge({button:0})
if(L){_e[1]=L.pos[1]
this.consumed_click=true}else if(!te.mouseDownAnywhere(0)){this.grabbed=false
this.consumed_click=true}else te.mousePos(_e)
if(this.grabbed){var U=_e[1]-(this.y+g)-this.grabbed_pos
var M=this.h-2*g-x
if(M>0){this.scroll_pos=(e-this.h)*U/M
J(isFinite(this.scroll_pos))}k=u}}if(te.mouseOver(N))if(k!==u)k=l
var j={x:y,y:this.y,w:_,h:m,button:re,pad_focusable:false,disabled:this.grabbed,disabled_focusable:false,def:ae}
var B=_extends({},j,{y:this.y+this.h-m})
var G=oe(j)
while(G.ret){--G.ret
F=true
this.scroll_pos-=this.rate_scroll_click
this.consumed_click=true}if(G.spot_state===ie)A=u
else if(G.spot_state===ne)A=l
G=oe(B)
while(G.ret){--G.ret
F=true
this.scroll_pos+=this.rate_scroll_click
this.consumed_click=true}if(G.spot_state===ie)R=u
else if(G.spot_state===ne)R=l
var z={key:"bar_"+this.id,x:y,y:this.y,w:_,h:this.h,button:re,sound_rollover:null,pad_focusable:false,def:ae}
var H=oe(z)
while(H.ret){--H.ret
this.consumed_click=F=true
if(H.pos)if(H.pos[1]>T+x/2)this.scroll_pos+=this.h
else this.scroll_pos-=this.h}var V=te.drag({x:this.x,y:this.y,w:this.w-_,h:this.h,button:0,min_dist:this.min_dist})
if(V&&!this.ignore_this_fram_drag){if(null===this.drag_start)this.drag_start=this.scroll_pos
this.scroll_pos=this.drag_start-V.cur_pos[1]+V.start_pos[1]
this.consumed_click=true}else this.drag_start=null
te.drag({x:this.x+this.w-_,y:this.y,w:_,h:this.h,button:0})}if(F&&this.focusable_elem)this.focusable_elem.focus()
this.last_max_value=r
this.clampScrollPos()
if(this.background_color)ce.drawRect(this.x,this.y,this.x+this.w,this.y+this.h,this.z,this.background_color)
if(I&&(o&&P||!this.h)){this.scrollbar_visible=false
return}this.scrollbar_visible=true
c.draw({x:y,y:this.y,z:this.z+.2,w:_,h:m,color:A})
d.draw({x:y,y:this.y+this.h-m,z:this.z+.2,w:_,h:m,color:R})
var W=m/2
var q=E+2*W
var Y=-W/s/v.uidata.total_h
var K=Y+q/s/v.uidata.total_h
v.draw({x:y,y:this.y+W,z:this.z+.1,w:_,h:q,uvs:[v.uvs[0],Y,v.uvs[2],K],color:C})
ce.drawVBox({x:y,y:T,z:this.z+.3,w:_,h:x},p,k)
var Z=h.uidata.total_h*s
h.draw({x:y,y:T+(x-Z)/2,z:this.z+.4,w:_,h:Z,color:k})}
e.scrollIntoFocus=function scrollIntoFocus(e,t,r){var a=this.scroll_pos
var i=false
if((e=ve(e,0))<this.scroll_pos){this.scroll_pos=e
i=true}if((t-=r)>this.scroll_pos){this.scroll_pos=t
i=true}if(i)this.overscroll=a-this.scroll_pos
this.ignore_this_fram_drag=true}
e.scrollToEnd=function scrollToEnd(){this.scroll_pos=this.last_max_value}
e.resetScroll=function resetScroll(){this.scroll_pos=0
this.overscroll=0}
return ScrollAreaInternal}()
function scrollAreaCreate(e){return new w(e)}},{"../common/util":92,"../common/vmath":94,"./camera2d":13,"./engine":19,"./input":34,"./spot":60,"./sprites":63,"./ui":67,assert:void 0}],54:[function(e,t,a){"use strict"
a.get=get
a.pop=pop
a.push=push
a.register=register
a.runTimeDefault=runTimeDefault
a.set=set
a.setAsync=setAsync
a.settingIsModified=settingIsModified
var i={}
a.true=true
var n=e("assert")
var o=e("../common/util.js").titleCase
var s=e("./cmds.js").cmd_parse
var r=e("./engine.js")
var l={}
function get(e){return a[e]}function set(e,t){if(a[e]!==t)s.handle(null,e+" "+t,null)}function setAsync(e,t){r.postTick({fn:set.bind(null,e,t)})}function runTimeDefault(e,t){n(!l[e])
if(!i[e])a[e]=t}function settingIsModified(e){return i[e]}var u=null
function push(e){n(!u)
u={}
for(var t in e){u[t]=a[t]
a[t]=e[t]
var r=l[t]
if(r)r(false)}}function pop(){n(u)
for(var e in u){a[e]=u[e]
var t=l[e]
if(t)t(false)}u=null}function register(r){Object.keys(r).forEach(function(t){var e=r[t]
a[t]=e.default_value
if(e.on_change)l[t]=e.on_change
s.registerValue(t,{type:e.type,label:e.label||o(t.replace(/_/g," ")),range:e.range,get:function get(){return a[t]},set:function set(e){i[t]=true
a[t]=e},store:false!==e.store,ver:e.ver,help:e.help,usage:e.usage,prefix_usage_with_help:e.prefix_usage_with_help,on_change:e.on_change,access_run:e.access_run,access_show:e.access_show,default_value:e.default_value,enum_lookup:e.enum_lookup})})}register({max_fps:{label:"Maximum frame rate (FPS)",prefix_usage_with_help:true,usage:"Display current maximum: /max_fps\nSet maximum FPS limit: /max_fps 30\nSet automatic by browser: /max_fps 0 (may be unresponsive)\nSet unlimited: /max_fps 1000 (may be unresponsive)\nDefault: /max_fps 60",default_value:60,type:s.TYPE_FLOAT,ver:2},use_animation_frame:{label:"Use requestAnimationFrame",help:"Use requestAnimationFrame for any max_fps values lower than this value.",prefix_usage_with_help:true,default_value:60,type:s.TYPE_INT,range:[0,240]},render_scale:{label:"Render Scale (3D)",default_value:1,type:s.TYPE_FLOAT,range:[.1,1]},render_scale_mode:{label:"Render Scale Mode",default_value:0,type:s.TYPE_INT,enum_lookup:{LINEAR:0,NEAREST:1,CRT:2}},render_scale_all:{label:"Render Scale (All)",default_value:1,type:s.TYPE_FLOAT,range:[.3333,4]},render_scale_clear:{label:"Render Scale Full Clear",default_value:1,type:s.TYPE_INT,range:[0,1]},fov:{default_value:60,type:s.TYPE_FLOAT,range:[1,100]},double_click_time:{default_value:500,type:s.TYPE_INT,range:[0,2500]}})},{"../common/util.js":92,"./cmds.js":15,"./engine.js":19,assert:void 0}],55:[function(e,t,r){"use strict"
r.shaderDebugUIStartup=shaderDebugUIStartup
var I=e("./camera2d.js")
var a=e("./cmds.js").cmd_parse
var i=e("./engine.js")
var n=e("./fetch.js").fetch
var P=e("./font.js")
var F=e("./input.js")
var D=Math.min
var N=e("./scroll_area.js").scrollAreaCreate
var O=e("./shaders.js").shadersGetDebug
var L=e("./settings.js")
var U=e("./ui.js")
var M=e("./ui.js").uiTextHeight
var o=e("../common/util.js").errorString
var s=e("../common/vmath.js").vec4
Z.SHADER_DEBUG=Z.SHADER_DEBUG||900
var l="http://localhost:3000/api/shaderstats"
var u={}
function getShaderStats(e,t,r){if(u[e])return u[e].data
if(r)return null
var a=u[e]={data:null}
n({url:l+"?stage="+t+"&text="+encodeURIComponent(e),response_type:"json"},function(e,t){if(e)a.data={err:"Fetch error: "+o(e)}
else a.data=t})
return a.data}var j=4
var B=P.styleColored(null,2156986367)
var G=P.styleColored(null,572662527)
var z=P.styleColored(null,3710001919)
var H=s(.4,.4,.4,1)
var V=s(1,1,1,1)
var W=s(.8,0,0,1)
var q=s(.4,.6,1,1)
var Y
var K
var J
function shaderDebugUITick(){var e=U.tooltip_pad
var t=I.x0()+e
var r=I.y0()+e
var n=Z.SHADER_DEBUG
var o=U.font,a=U.title_font
var s=M()
var i=20*s
var l=t
var u=r
var f=O()
a.drawSizedAligned(B,l,u,n,s,o.ALIGN.HCENTERFIT,i,0,"Shaders ("+f.length+")")
if(!Y){Y=N({z:n,background_color:null,auto_hide:true})
K=N({z:n,background_color:null,auto_hide:true})}var c=i-j-Y.barWidth()
var d=.3*c
var v=d/2
var p=c-d-j
o.draw({x:l+p+j,y:u+.5*s,z:n,w:v-1,color:1077952767,size:.5*s,text:"Ops",align:o.ALIGN.HCENTERFIT})
o.draw({x:l+p+j+v+1,y:u+.5*s,z:n,w:v-1,color:1077952767,size:.5*s,text:"Bytes",align:o.ALIGN.HCENTERFIT})
u+=s+1
U.drawLine(t+.3*i,u,t+.7*i,u,n,.5,true,H)
u+=j
var h=I.y1()-j-u
var _=u
Y.begin({x:l,y:u,w:i,h:h})
u=l=0
n=Z.UI
for(var m=0;m<f.length;++m){var g=f[m]
var y=g.filename.replace("shaders/","")
if(g.defines_arr.length)y+="("+g.defines_arr.join(",")+")"
if(U.buttonText({text:y,x:l,y:u,z:n,w:p,h:s,color:J===g?q:g.valid?void 0:W,align:P.ALIGN.HFIT}))if(J===g)J=void 0
else J=g
var w=getShaderStats(g.shader_source_text,g.type===gl.FRAGMENT_SHADER?"frag":"vert",false)
if(!w||w.err)o.draw({x:l+p+j,y:u,z:n,w:d,color:null!=w&&w.err?2147483903:2155905279,text:null!=w&&w.err?"ERR":"...",align:o.ALIGN.HCENTERFIT})
else{var b
var x=255
o.draw({x:l+p+j,y:u,z:n,w:v-1,color:x,text:""+(null==(b=w.spirv)?void 0:b.count_total),align:o.ALIGN.HCENTERFIT})
o.draw({x:l+p+j+v+1,y:u,z:n,w:v-1,color:x,text:w.bin_size.toLocaleString(),align:o.ALIGN.HCENTERFIT})}u+=s}Y.end(u)
u=_+D(h,u)
n=Z.SHADER_DEBUG
var S=s
if(U.buttonText({x:t+i-S,y:r,z:n+1,w:S,h:S,text:"X"}))L.set("shader_debug",0)
U.panel({x:t-e,y:r-e,z:n-1,w:i+2*e,h:u-r+2*e,color:V})
if(!J)return
var E=J
t+=i+2*e
i=I.x1()-j-t
l=t
u=r
o.draw({x:l,y:u,z:n,w:i,style:G,text:E.filename,align:o.ALIGN.HCENTERFIT})
u+=s+1
U.drawLine(t+.3*i,u,t+.7*i,u,n,.5,true,H)
_=u+=j
K.begin({x:l,y:u,w:i,h:h})
c=i-j-K.barWidth()
u=l=0
n=Z.UI
if(E.error_text)u+=o.draw({x:l,y:u,z:n,w:c,color:2147483903,style:G,text:E.error_text,align:o.ALIGN.HWRAP})
function flatten(e,t){for(var r in e){if("text"===r||"spirv_raw"===r)continue
var a=e[r]
var i=t?t+"."+r:r
if("object"===typeof a)flatten(a,i)
else{o.draw({x:l,y:u,z:n,w:c,style:G,text:i+": "+a,align:o.ALIGN.HFIT})
u+=s}}}var T=getShaderStats(E.shader_source_text,E.type===gl.FRAGMENT_SHADER?"frag":"vert")
if(!T)u+=o.draw({x:l,y:u,z:n,w:i,style:G,text:"Loading shader stats...",align:o.ALIGN.HWRAP})
else if(T.err)u+=o.draw({x:l,y:u,z:n,w:c,style:z,text:String(T.err),align:o.ALIGN.HWRAP})
else flatten(T)
var A=.5*s
if(null!=T&&T.text){u+=j
U.drawLine(l+.3*i,u,l+.7*i,u,n,.5,true,H)
u+=j/2
o.draw({x:l,y:u,z:n,w:i,style:G,text:"Analyzed Shader Source",align:o.ALIGN.HCENTERFIT})
u+=s+1
var R=o.draw({x:l,y:u,z:n,w:i,size:A,style:G,text:T.text,align:o.ALIGN.HWRAP})
if(F.click({x:l,y:u,w:i,h:R}))U.provideUserString("Analyzed shader source",T.text)
u+=R}if(null!=T&&T.spirv_raw){u+=j
U.drawLine(l+.3*i,u,l+.7*i,u,n,.5,true,H)
u+=j/2
o.draw({x:l,y:u,z:n,w:i,style:G,text:"SPIR-V Disassembly",align:o.ALIGN.HCENTERFIT})
u+=s+1
var k=o.draw({x:l,y:u,z:n,w:i,size:A,style:G,text:T.spirv_raw,align:o.ALIGN.HWRAP})
if(F.click({x:l,y:u,w:i,h:k}))U.provideUserString("SPIR-V Disassembly",T.spirv_raw)
u+=k}u+=j
U.drawLine(l+.3*i,u,l+.7*i,u,n,.5,true,H)
u+=j/2
o.draw({x:l,y:u,z:n,w:i,style:G,text:"Actual WebGL Shader Source",align:o.ALIGN.HCENTERFIT})
u+=s+1
var C=o.draw({x:l,y:u,z:n,w:i,size:A,style:G,text:E.shader_source_text,align:o.ALIGN.HWRAP})
if(F.click({x:l,y:u,w:i,h:C}))U.provideUserString("Used WebGL shader source",E.shader_source_text)
u+=C
K.end(u)
u=_+D(h,u)
n=Z.SHADER_DEBUG
U.panel({x:t-e,y:r-e,z:n-1,w:i+2*e,h:u-r+2*e,color:V})}function shaderDebugUIStartup(){L.register({shader_debug:{label:"Shader Debug",default_value:0,type:a.TYPE_INT,range:[0,1],access_show:["sysadmin"],on_change:function on_change(){i.removeTickFunc(shaderDebugUITick)
if(L.shader_debug)i.addTickFunc(shaderDebugUITick)}}})}},{"../common/util.js":92,"../common/vmath.js":94,"./camera2d.js":13,"./cmds.js":15,"./engine.js":19,"./fetch.js":23,"./font.js":25,"./input.js":34,"./scroll_area.js":53,"./settings.js":54,"./shaders.js":56,"./ui.js":67}],56:[function(e,t,r){"use strict"
r.SEMANTIC=r.MAX_SEMANTIC=void 0
r.addReservedDefine=addReservedDefine
r.globals=void 0
r.shaderCreate=shaderCreate
r.shadersAddGlobal=shadersAddGlobal
r.shadersBind=shadersBind
r.shadersGetDebug=shadersGetDebug
r.shadersHandleDefinesChanged=shadersHandleDefinesChanged
r.shadersPrelink=shadersPrelink
r.shadersRequirePrelink=shadersRequirePrelink
r.shadersResetState=shadersResetState
r.shadersSetGLErrorReportDetails=shadersSetGLErrorReportDetails
r.shadersSetInternalDefines=shadersSetInternalDefines
r.shadersStartup=shadersStartup
var a=5
r.MAX_SEMANTIC=a
var p={ATTR0:0,POSITION:0,ATTR1:1,COLOR:1,COLOR_0:1,ATTR2:2,TEXCOORD:2,TEXCOORD_0:2,ATTR3:3,NORMAL:3,ATTR4:4,TEXCOORD_1:4}
r.SEMANTIC=p
var h=e("assert")
var _=e("./engine.js")
var i=e("./error_report.js"),n=i.errorReportClear,o=i.errorReportSetDetails,s=i.errorReportSetDynamicDetails,l=i.glovErrorReport
var u=e("./filewatch.js").filewatchOn
var f=e("../common/util.js"),c=f.matchAll,m=f.nop
var d=e("./textures.js").textureUnloadDynamic
var v=e("./webfs.js").webFSGetFile
var g=0
var y=null
var w
r.globals=w
var b
var x
var S
var E
var T
var A=[]
var R=/attribute [^ ]+ ([^ ;]+);/g
var k=/uniform (?:(?:low|medium|high)p )?((?:(?:vec|mat)\d(?:x\d)?|float) [^ ;]+);/g
var C=/uniform sampler(?:2D|Cube) ([^ ;]+);/g
var I=/\n#include "([^"]+)"/g
var P={float:1,vec2:2,vec3:3,vec4:4,mat3:9,mat4:16}
function loadInclude(e){return'\n// from include "'+e+'":\n'+v(e,"text")+"\n"}function shadersResetState(){for(var e=0;e<A.length;++e){var t=A[e]
if(t.programs)for(var r in t.programs){var a=t.programs[r]
for(var i=0;i<a.uniforms.length;++i){var n=a.uniforms[i]
for(var o=0;o<n.size;++o)n.value[o]=NaN}}}y=null
gl.useProgram(null)}function shadersSetGLErrorReportDetails(){var e={max_fragment_uniform_vectors:gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),max_varying_vectors:gl.getParameter(gl.MAX_VARYING_VECTORS),max_vertex_attribs:gl.getParameter(gl.MAX_VERTEX_ATTRIBS),max_vertex_uniform_vectors:gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),vendor:gl.getParameter(gl.VENDOR),renderer:gl.getParameter(gl.RENDERER),webgl:_.webgl2?2:1}
var t=gl.getExtension("WEBGL_debug_renderer_info")
if(t){e.renderer_unmasked=gl.getParameter(t.UNMASKED_RENDERER_WEBGL)
e.vendor_unmasked=gl.getParameter(t.UNMASKED_VENDOR_WEBGL)}for(var r in e)o(r,e[r])}s("context_lost",function(){if(window.gl&&gl.isContextLost())return"1"
return""})
var F=null
var D
var N
var O=false
function reportShaderError(e,t){function doReport(){F=null
var e="Shader error(s):\n    "+D.join("\n    ")
D=null
if(!gl.isContextLost()){shadersSetGLErrorReportDetails()
O=true
if(!N)l(false,e,"shaders.js")
else h(false,e)}}if(!F){F=setTimeout(doReport,1e3)
D=[]
N=false}N=N||!e
D.push(t)}function parseIncludes(i,e){var n={}
e.replace(k,function(e,t){n[t]=true})
return e.replace(I,function(e,t){var r=i.split("/")
r.pop()
r.push(t)
var a=loadInclude(r=r.join("/"))
if(!a){console.error("Could not evaluate "+e)
return e}return a.replace(k,function(e,t){if(n[t])return"// [removed "+t+"]"
n[t]=true
return e})})}var L=["#version 300 es","#define WEBGL2"].join("\n")
var U=[L,"#define varying in","out lowp vec4 fragColor;","#define gl_FragColor fragColor","#define texture2D texture","#define textureCube texture",""].join("\n")
var M=[L,"#define varying out","#define attribute in",""].join("\n")
function Shader(e){var t=e.filename,r=e.defines,a=e.non_fatal
h.equal(typeof t,"string")
var i=t.endsWith(".fp")?gl.FRAGMENT_SHADER:t.endsWith(".vp")?gl.VERTEX_SHADER:0
h(i)
this.type=i
this.filename=t
this.non_fatal=a
this.defines_arr=r||[]
this.defines=this.defines_arr.map(function(e){return"#define "+e+"\n"}).join("")
this.shader=gl.createShader(i)
this.id=++g
if(i===gl.VERTEX_SHADER)this.programs={}
A.push(this)
this.compile()}function shadersGetDebug(){return A}function cleanShaderError(e){if(e)e=e.replace(/\0/g,"").trim()
return e}Shader.prototype.compile=function(){var e=this.type,t=this.filename
var r=""
var a=v(t,"text")
if(_.webgl2&&a.includes("#pragma WebGL2"))r=e===gl.VERTEX_SHADER?M:U
a=(a=parseIncludes(t,a=""+r+x+this.defines+a)).replace(/#pragma WebGL2?/g,"")
if(e===gl.VERTEX_SHADER){this.attributes=c(a,R)
this.attributes.forEach(function(e){return h(void 0!==p[e])})}else{this.samplers=c(a,C)
var i=[]
this.samplers.forEach(function(e){var t=Number(e.slice(-1))
h(!isNaN(t))
h(!i[t])
i[t]=true})}this.uniforms=c(a,k)
this.uniforms.forEach(function(e){var t=e.split(" ")[0]
h(P[t])})
this.shader_source_text=a
if(gl.isContextLost()){this.valid=false
var n=this.error_text="Context lost"
if(this.defines_arr.length)t+="("+this.defines_arr.join(",")+")"
console[this.non_fatal?"warn":"error"]("Error compiling "+t+": "+n)
return}gl.shaderSource(this.shader,a)
gl.compileShader(this.shader)
if(!gl.getShaderParameter(this.shader,gl.COMPILE_STATUS)){this.valid=false
var o=this.error_text=cleanShaderError(gl.getShaderInfoLog(this.shader))
if(this.defines_arr.length)t+="("+this.defines_arr.join(",")+")"
console[this.non_fatal?"warn":"error"]("Error compiling "+t+": "+o)
reportShaderError(this.non_fatal,t+": "+o)
console.log(a.split("\n").map(function(e,t){return t+1+": "+e}).join("\n"))}else{this.valid=true
if(this.error_text)delete this.error_text}}
function shaderCreate(e){if("object"===typeof e)return new Shader(e)
return new Shader({filename:e})}function uniformSetValue(e){switch(e.width){case 1:gl.uniform1fv(e.location,e.value)
break
case 2:gl.uniform2fv(e.location,e.value)
break
case 3:gl.uniform3fv(e.location,e.value)
break
case 4:gl.uniform4fv(e.location,e.value)
break
case 9:gl.uniformMatrix3fv(e.location,false,e.value)
break
case 16:gl.uniformMatrix4fv(e.location,false,e.value)}}var j=false
function shadersRequirePrelink(e){var t=j
j=e
return t}function link(e,t,r){h(!j)
var f=e.programs[t.id]={handle:gl.createProgram(),uniforms:null}
var a
if(!f.handle){a="gl.createProgram() returned "+f.handle
f.valid=false}else{gl.attachShader(f.handle,e.shader)
gl.attachShader(f.handle,t.shader)
for(var i=0;i<e.attributes.length;++i)gl.bindAttribLocation(f.handle,p[e.attributes[i]],e.attributes[i])
gl.linkProgram(f.handle)
f.valid=gl.getProgramParameter(f.handle,gl.LINK_STATUS)}if(!f.valid){a=a||cleanShaderError(gl.getProgramInfoLog(f.handle))
var n=true
if(gl.isContextLost()){a="(Context lost) "+a
n=false}console.error("Shader link error: "+a)
if(r&&(!_.DEBUG||r===m))r(a)
else if(n)reportShaderError(false,"Shader link error ("+e.filename+" & "+t.filename+"): "+a)
f.uniforms=[]
return f}gl.useProgram(f.handle)
y=f
var o=e.uniforms.slice(0)
for(var s=0;s<t.uniforms.length;++s){var l=t.uniforms[s]
if(-1===o.indexOf(l))o.push(l)}f.uniforms=o.map(function(e){var t=(e=e.split(" "))[0]
var r=e[1]
var a=1
var i=r.match(/([^[]+)\[(\d+)\]/)
if(i){r=i[1]
a=Number(i[2])}var n=gl.getUniformLocation(f.handle,r)
if(null===n)return null
var o=P[t]
var s=o*a
var l=w[r]
b[r]=true
var u={name:r,size:s,width:o,count:a,value:new Float32Array(s),location:n,glob:l}
uniformSetValue(u)
return u}).filter(function(e){return e})
for(var u=0;u<t.samplers.length;++u){var c=t.samplers[u]
var d=Number(c.slice(-1))
var v=gl.getUniformLocation(f.handle,c)
if(null!==v)gl.uniform1i(v,d)}return f}function autoLink(e,t,r){var a=e.programs[t.id]
if(!a)a=link(e,t,r)
if(!a.valid){if(!(a=link(e,S,m)).valid&&E)a=link(e,E,m)
if(!a.valid)a=link(T,S,m)
e.programs[t.id]=a}return a}function shadersBind(e,t,r){var a=e.programs[t.id]
if(!a)a=autoLink(e,t)
if(a!==y){y=a
gl.useProgram(a.handle)}for(var i=0;i<a.uniforms.length;++i){var n=a.uniforms[i]
var o=r[n.name]||n.glob
if(!o)continue
var s=false
for(var l=0;l<n.size;++l)if(o[l]!==n.value[l]){s=true
break}if(s){for(var u=0;u<n.size;++u)n.value[u]=o[u]
uniformSetValue(n)}}}function shadersPrelink(e,t,r,a){if(void 0===r)r={}
var i=autoLink(e,t,a)
if(i.valid)shadersBind(e,t,r)
return i.valid}var B={WEBGL2:1}
function addReservedDefine(e){B[e]=1}var G={}
function applyDefines(){x=Object.keys(_.defines).filter(function(e){return!B[e]}).concat(Object.keys(G)).map(function(e){return"#define "+e+"\n"}).join("")}function shaderReload(){shadersRequirePrelink(false)
if(A.length){if(O){n()
O=false}gl.useProgram(null)
for(var e=0;e<A.length;++e){var t=A[e].programs
if(t){for(var r in t)gl.deleteProgram(t[r].handle)
A[e].programs={}}}for(var a=0;a<A.length;++a)A[a].compile()
d()}}function shadersHandleDefinesChanged(){applyDefines()
shaderReload()}function shadersSetInternalDefines(e){for(var t in e)if(e[t])G[t]=e[t]
else delete G[t]
shadersHandleDefinesChanged()}function onShaderChange(e){shaderReload()}function shadersStartup(e){applyDefines()
r.globals=w=e
b={}
S=shaderCreate("shaders/error.fp")
if(_.webgl2)E=shaderCreate("shaders/error_gl2.fp")
T=shaderCreate("shaders/error.vp")
u(".fp",onShaderChange)
u(".vp",onShaderChange)
var t=S.valid&&T.valid
if(!t)clearTimeout(F)
return t}function shadersAddGlobal(e,t){h(!w[e])
h(!b[e])
w[e]=t
for(var r=0;r<t.length;++r)h(isFinite(t[r]))}r.create=shaderCreate
r.semantic=p
r.addGlobal=shadersAddGlobal
r.bind=shadersBind
r.prelink=shadersPrelink},{"../common/util.js":92,"./engine.js":19,"./error_report.js":21,"./filewatch.js":24,"./textures.js":65,"./webfs.js":71,assert:void 0}],57:[function(e,t,r){"use strict"
r.slider=slider
r.sliderIsDragging=sliderIsDragging
r.sliderIsFocused=sliderIsFocused
r.sliderSetDefaultShrink=sliderSetDefaultShrink
var a
function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a))e[a]=r[a]}return e}).apply(this,arguments)}var y=e("assert")
var w=Math.round,b=Math.max
var x=e("../common/util.js").clamp
var i=e("../common/vmath.js").vec4
var S=e("./input.js")
var n=e("./spot.js")
var o=n.SPOT_DEFAULT_BUTTON
var E=n.SPOT_NAV_LEFT
var T=n.SPOT_NAV_RIGHT
var A=n.spot
var s=e("./ui.js")
var R=s.Z_MIN_INC
var k=s.drawHBox
var C=s.playUISound
var I=s.uiButtonHeight
var P=s.uiButtonWidth
var F=e("./ui.js")
var D=_extends({},o,{sound_button:null,custom_nav:((a={})[T]=null,a[E]=null,a)})
var N=1
var O=1
var L=0
function sliderSetDefaultShrink(e,t,r){N=e
O=t
L=r||0}var U=i(1,1,1,1)
var M=i(.5,.5,.5,1)
var j=i(.75,.75,.75,1)
var B=false
var G=false
function sliderIsDragging(){return B}function sliderIsFocused(){return G}function slider(e,t){y("number"===typeof t.x)
y("number"===typeof t.y)
y(t.min<t.max)
t.z=t.z||Z.UI
t.w=t.w||P()
t.h=t.h||I()
t.max_dist=t.max_dist||Infinity
var r=t.vshrink||N
var a=t.handle_shrink||O
var i=t.disabled||false
var n=t.h*a
var o=F.sprites.slider_handle.uidata.wh[0]*n
var s=t.pad_focusable
B=false
var l=a-r+L
k({x:t.x+t.h*l/2,y:t.y+t.h*(1-r)/2,z:t.z,w:t.w-t.h*l,h:t.h*r},F.sprites.slider,t.color)
var u=w(b(F.sprites.slider.uidata.wh[0]*t.h*r,o)/2)
var f=t.w-2*u
var c=!i&&S.drag(t)
var d=Boolean(c)
t.def=D
if(d)t.focus_steal=true
t.pad_focusable=s
var v=A(t)
G=v.focused
if(v.ret&&v.pos){d=false
e=(v.pos[0]-(t.x+u))/f
e=t.min+(t.max-t.min)*x(e,0,1)
C("button_click")}else if(d){e=(c.cur_pos[0]-(t.x+u))/f
e=t.min+(t.max-t.min)*x(e,0,1)
S.mouseOver()
G=B=true}if(v.nav){C("button_click")
var p=t.step||(t.max-t.min)/16
if(v.nav===T)e=x(e+p,t.min,t.max)
else if(v.nav===E)e=x(e-p,t.min,t.max)}var h=x(e,t.min,t.max)
var _=t.x+u+f*(h-t.min)/(t.max-t.min)-o/2
var m=t.y+t.h/2-n/2
var g=U
if(d)g=M
else if(v.focused)g=j
F.sprites.slider_handle.draw({x:_,y:m,z:t.z+R,w:o,h:n,color:g,frame:0})
return e}},{"../common/util.js":92,"../common/vmath.js":94,"./input.js":34,"./spot.js":60,"./ui.js":67,assert:void 0}],58:[function(e,t,r){"use strict"
r.SOCIAL_ONLINE=r.SOCIAL_INVISIBLE=r.SOCIAL_AFK=void 0
r.friendAdd=friendAdd
r.friendBlock=friendBlock
r.friendIsBlocked=friendIsBlocked
r.friendRemove=friendRemove
r.friendUnblock=friendUnblock
r.friendsGet=friendsGet
r.getExternalCurrentUserInfos=getExternalCurrentUserInfos
r.getExternalFriendInfos=getExternalFriendInfos
r.getExternalUserInfos=getExternalUserInfos
r.getUserProfileImage=getUserProfileImage
r.isFriend=isFriend
r.registerExternalUserInfoProvider=registerExternalUserInfoProvider
r.richPresenceSet=richPresenceSet
r.setDefaultUserProfileImage=setDefaultUserProfileImage
r.socialInit=socialInit
r.socialPresenceStatusGet=socialPresenceStatusGet
r.socialPresenceStatusSet=socialPresenceStatusSet
var i=e("assert")
var a=e("./settings")
var n=e("../common/enums")
var o=n.PRESENCE_ACTIVE
var s=n.PRESENCE_INACTIVE
var l=n.PRESENCE_OFFLINE
var u=e("../common/friends_data").FriendStatus
var f=e("../common/util").deepEqual
var c=e("./abtest").abTestGetMetricsAndPlatform
var d=e("./cmds").cmd_parse
var v=e("./input")
var p=e("./net")
var h=p.netDisconnected
var _=p.netSubs
var m=e("./sprites").spriteCreate
var g=e("./textures").textureLoad
var y=6e4
var w=null
function friendsGet(){return null!=w?w:Object.create(null)}function isFriend(e){var t=null==w?void 0:w[e]
return(null==t?void 0:t.status)===u.Added||(null==t?void 0:t.status)===u.AddedAuto}function friendIsBlocked(e){var t=null==w?void 0:w[e]
return(null==t?void 0:t.status)===u.Blocked}function makeFriendCmdRequest(e,r,a){r=r.toLowerCase()
var i=_().loggedIn()
if(h())return void a("ERR_DISCONNECTED")
if(!i)return void a("ERR_NOT_LOGGED_IN")
_().getMyUserChannel().cmdParse(e+" "+r,function(e,t){if(e)return void a(e)
else if(i!==_().loggedIn()||!w)return void a("Invalid data")
if(t.friend)w[r]=t.friend
else delete w[r]
a(null,t.msg)})}function friendAdd(e,t){makeFriendCmdRequest("friend_add",e,t)}function friendRemove(e,t){makeFriendCmdRequest("friend_remove",e,t)}function friendBlock(e,t){makeFriendCmdRequest("friend_block",e,t)}function friendUnblock(e,t){makeFriendCmdRequest("friend_unblock",e,t)}d.register({cmd:"friend_add",help:"Add a friend",func:friendAdd})
d.register({cmd:"friend_remove",help:"Remove a friend",func:friendRemove})
d.register({cmd:"friend_block",help:"Block someone from seeing your rich presence, also removes from your friends list",func:friendBlock})
d.register({cmd:"friend_unblock",help:"Reset a user to allow seeing your rich presence again",func:friendUnblock})
d.register({cmd:"friend_list",help:"List all friends",func:function func(e,t){if(!w)return void t("Friends list not loaded")
t(null,Object.keys(w).filter(isFriend).join(",")||"You have no friends")}})
d.register({cmd:"friend_block_list",help:"List all blocked users",func:function func(e,t){if(!w)return void t("Friends list not loaded")
t(null,Object.keys(w).filter(friendIsBlocked).join(",")||"You have no blocked users")}})
var b=1
r.SOCIAL_ONLINE=b
var x=2
r.SOCIAL_AFK=x
var S=3
r.SOCIAL_INVISIBLE=S
a.register({social_presence:{default_value:b,type:d.TYPE_INT,range:[b,S],access_show:["hidden"]}})
function socialPresenceStatusGet(){return a.social_presence}function socialPresenceStatusSet(e){a.set("social_presence",e)}d.registerValue("invisible",{type:d.TYPE_INT,help:"Hide rich presence information from other users",label:"Invisible",range:[0,1],get:function get(){return a.social_presence===S?1:0},set:function set(e){return socialPresenceStatusSet(e?S:b)}})
d.registerValue("afk",{type:d.TYPE_INT,help:"Appear as idle to other users",label:"AFK",range:[0,1],get:function get(){return a.social_presence===x?1:0},set:function set(e){return socialPresenceStatusSet(e?x:b)}})
function onPresence(e){this.presence_data=e}var E=null
var T=false
function richPresenceSend(){if(!_().loggedIn()||!E||T)return
T=true
_().onceConnected(function(){T=false
if(!_().loggedIn()||!E)return
var e=_().getMyUserChannel().pak("presence_set")
e.writeInt(E.active)
e.writeAnsiString(E.state)
e.writeJSON(E.payload)
e.writeAnsiString(c())
e.send()})}function richPresenceSet(e,t,r){var a
switch(socialPresenceStatusGet()){case x:a=s
break
case S:a=l
break
default:a=!e||Date.now()-v.inputLastTime()>y?s:o}r=r||null
if(!E||a!==E.active||t!==E.state||!f(E.payload,r)){E={active:a,state:t,payload:r}
richPresenceSend()}}var A=Object.create(null)
var R=Object.create(null)
function getExternalCurrentUserInfos(){return A}function getExternalFriendInfos(e){return R[e]}function getExternalUserInfos(e){if(e===_().loggedIn())return getExternalCurrentUserInfos()
else return getExternalFriendInfos(e)}function setExternalCurrentUser(e,t){if(t)A[e]=t
else delete A[e]}function updateExternalFriendsOnServer(o,s,e){if(0===s.length&&0===e.length||h())return
var l=_().loggedIn()
var t=_().getMyUserChannel().pak("friend_auto_update")
t.writeAnsiString(o)
for(var r=0;r<s.length;++r)t.writeAnsiString(s[r].external_id)
t.writeAnsiString("")
for(var a=0;a<e.length;++a)t.writeAnsiString(e[a])
t.writeAnsiString("")
t.send(function(e,t){if(l!==_().loggedIn()||!w)return
else if(e)return
else if(!t)return
var i=Object.create(null)
for(var r in t){var a=w[r]=t[r]
if(a.ids){var n=a.ids[o]
i[n]=r}}s.forEach(function(e){var t=e.external_id
var r=i[t]
if(r){var a=R[r]
if(!a)a=R[r]=Object.create(null)
a[o]=e}})})}function setExternalFriends(i,e){var n=Object.create(null)
for(var t in w){var r
var a=null==(r=w[t].ids)?void 0:r[i]
if(a)n[a]=t}for(var o in R)delete R[o][i]
var s=[]
e.forEach(function(e){var t=e.external_id
var r=n[t]
if(r){var a=R[r]
if(!a)a=R[r]=Object.create(null)
a[i]=e
delete n[t]}else s.push(e)})
var l=[]
for(var u in n)l.push(u)
if(0!==s.length||0!==l.length)updateExternalFriendsOnServer(i,s,l)}function requestExternalCurrentUser(r,e){var a=_().loggedIn()
e(function(e,t){if(a!==_().loggedIn())return
else if(e||!t)return
setExternalCurrentUser(r,t)})}function requestExternalFriends(r,e){var a=_().loggedIn()
e(function(e,t){if(a!==_().loggedIn()||!w)return
else if(e||!t)return
setExternalFriends(r,t)})}var k={}
var C
function getUserProfileImage(e){var t=k[e]
if(t)return t
var r=null
var a=getExternalUserInfos(e)
if(a)for(var i in a)if(a[i]&&a[i].profile_picture_url){r=a[i].profile_picture_url
break}if(r){var n=g({url:r,filter_min:gl.LINEAR_MIPMAP_LINEAR,filter_mag:gl.LINEAR,soft_error:true,auto_unload:function auto_unload(){return delete k[e]}})
if(n&&n.loaded)return k[e]={img:m({tex:n})}}return C}function setDefaultUserProfileImage(e){C=e}var I={}
function registerExternalUserInfoProvider(e,t,r){if(t||r){var a
i(!w)
i(!(null!=(a=_())&&a.loggedIn()))
I[e]={get_current_user:t,get_friends:r}}else delete I[e]}function socialInit(){_().on("login",function(){var e=_().getMyUserChannel()
var o=_().loggedIn()
richPresenceSend()
w=null
if(h())return
e.pak("friend_list").send(function(e,t){if(e||o!==_().loggedIn())return
w=t
for(var r in I){var a=I[r],i=a.get_current_user,n=a.get_friends
if(i)requestExternalCurrentUser(r,i)
if(n)requestExternalFriends(r,n)}})})
_().on("logout",function(){w=null
A=Object.create(null)
R=Object.create(null)})
_().onChannelMsg("user","presence",onPresence)}},{"../common/enums":81,"../common/friends_data":84,"../common/util":92,"./abtest":8,"./cmds":15,"./input":34,"./net":41,"./settings":54,"./sprites":63,"./textures":65,assert:void 0}],59:[function(e,t,r){"use strict"
r.FADE_OUT=r.FADE_IN=r.FADE_DEFAULT=r.FADE=void 0
r.fadesCount=fadesCount
r.isPlaceholderSound=isPlaceholderSound
r.soundFindForReplacement=soundFindForReplacement
r.soundLoad=soundLoad
r.soundLoading=soundLoading
r.soundMusicPause=soundMusicPause
r.soundMusicResume=soundMusicResume
r.soundOnLoadFail=soundOnLoadFail
r.soundPause=soundPause
r.soundPlay=soundPlay
r.soundPlayMusic=soundPlayMusic
r.soundPlayStreaming=soundPlayStreaming
r.soundReplaceFromDataURL=soundReplaceFromDataURL
r.soundResume=soundResume
r.soundResumed=soundResumed
r.soundStartup=soundStartup
r.soundTick=soundTick
var a=0
r.FADE_DEFAULT=a
var u=1
r.FADE_OUT=u
var f=2
r.FADE_IN=f
var i=u+f
r.FADE=i
var m=e("assert")
var n=e("../common/util")
var g=n.callEach
var o=n.defaults
var y=n.ridx
var s=e("./browser")
var w=s.is_firefox
var b=s.is_itch_app
var l=e("./cmds").cmd_parse
var c=e("./engine")
var d=c.onEnterBackground
var v=c.onExitBackground
var p=e("./filewatch").filewatchOn
var h=e("./textures").textureCname
var x=e("./urlhash")
var _=e("@jimbly/howler/src/howler.core.js"),S=_.Howl,E=_.Howler
var T=e("./settings")
var A=Math.abs,R=Math.floor,k=Math.max,C=Math.min,I=Math.random
function isPlaceholderSound(e){return e.is_placeholder}var P={}
var F=[]
var D=0
var N={ext_list:["ogg","mp3"],fade_rate:.001,fade_music_in_bg:true}
var O
var L={}
var U=0
var M=[]
var j
function fadesCount(){return M.length}var B=1
var G=1
var z=1
var H=1
T.register({volume:{default_value:1,type:l.TYPE_FLOAT,range:[0,1]}})
T.register({volume_music:{default_value:1,type:l.TYPE_FLOAT,range:[0,1]}})
T.register({volume_sound:{default_value:1,type:l.TYPE_FLOAT,range:[0,1]}})
function musicVolume(){return T.volume*T.volume_music}function soundVolume(){return T.volume*T.volume_sound}var V={}
var W
function soundOnLoadFail(e){W=e}function soundFindForReplacement(e){if(P[e])return e
for(var t in P)if(h(t)===e)return t
return null}function soundReplaceFromDataURL(a,e){var t=P[a]
m(t)
var r=t.glov_load_opts
var i=r.loop
var n=new S({src:e,html5:false,loop:Boolean(i),volume:0,onload:function onload(){n.glov_load_opts=r
P[a]=n},onloaderror:function onloaderror(e,t,r){console.error("Error loading sound "+a+": "+t)}})}function soundLoad(e,t,r){if((t=t||{}).streaming&&(w||b))t.streaming=false
var a=t,n=a.streaming,o=a.loop
if(Array.isArray(e)){m(!r)
for(var i=0;i<e.length;++i)soundLoad(e[i],t)
return}var s="string"===typeof e?e:e.file
if(P[s]){if(r)r()
return}if(V[s]){if(r)V[s].push(r)
return}var l=[]
if(r)l.push(r)
V[s]=l
var u=s
var f=u.match(/^((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)\.(mp3|ogg|wav|webm)$/)
var c
if(f){u=f[1]
c=f[2]}var d="sounds/"+u
var v=[]
var p=""
if(t.for_reload)p="?rl="+Date.now()
if(c)v.push(""+x.getURLBase()+d+"."+c+p)
for(var h=0;h<O.ext_list.length;++h){var _=O.ext_list[h]
if(_!==c)v.push(""+x.getURLBase()+d+"."+_+p)}function tryLoad(a){if(a===v.length){console.error("Error loading sound "+u+": All fallbacks exhausted, giving up")
if(W)W(u)
g(l,delete V[s],"Error loading sound")
return}if(!n)++D
var i=false
var e=new S({src:v.slice(a),html5:Boolean(n),loop:Boolean(o),volume:0,onload:function onload(){if(!i){if(!n)--D
i=true
e.glov_load_opts=t
P[s]=e
g(l,delete V[s],null)}},onloaderror:function onloaderror(e,t,r){if(a===v.length-1)console.error("Error loading sound "+v[a]+": "+t)
else console.log("Error loading sound "+v[a]+": "+t+", trying fallback...")
if(!i){if(!n)--D
i=true
tryLoad(a+1)}}})}tryLoad(0)}function soundReload(e){var t=e.match(/^sounds\/([^.]+)\.\w+$/)
var r=t&&t[1]
if(!r)return
if(!P[r]){console.log("Reload trigged for non-existent sound: "+e)
return}var a=P[r].glov_load_opts
a.for_reload=true
delete P[r]
soundLoad(r,a)}function soundPause(){soundTick(B=G=0)}function soundResume(){G=1
E.manualUnlock()}function soundMusicPause(){H=0}var q=false
function soundMusicResume(){H=1
q=true}function soundFadeMusicInBackground(){var t=null
var r
function musicForceTick(){var e=Date.now()
soundTick(e-r)
r=e
t=setTimeout(musicForceTick,100)}d(function(){soundMusicPause()
r=Date.now()
if(!t)t=setTimeout(musicForceTick,100)})
v(function(){soundMusicResume()
if(t){clearTimeout(t)
t=null}})}function soundStartup(e){O=o(e||{},N)
j=[]
for(var t=0;t<2;++t)j.push({sound:null,id:0,current_volume:0,target_volume:0,sys_volume:0,need_play:false})
p(".mp3",soundReload)
p(".ogg",soundReload)
p(".wav",soundReload)
p(".webm",soundReload)
if(O.fade_music_in_bg)soundFadeMusicInBackground()}function soundResumed(){return!E.noAudio&&E.safeToPlay}function blendOverride(e,t,r){var a=.001*e
if(t<r)t=C(t+a,r)
else t=k(t-a,r)
return t}function soundTick(e){U+=e
if(B!==G)B=blendOverride(e,B,G)
if(z!==H)if(q)q=false
else z=blendOverride(e,z,H)
if(!soundResumed())return
for(var t=0;t<F.length;++t){var r=F[t],a=r.sound,i=r.play_volume,n=r.set_volume_when_played
if(!a.playing())y(F,t)
else if(n!==musicVolume()){a.volume(i)
F[t].set_volume_when_played=musicVolume()}}var o=e*O.fade_rate
for(var s=0;s<j.length;++s){var l=j[s]
if(!l.sound)continue
var u=T.volume*T.volume_music===0?0:l.target_volume
if(l.current_volume!==u){var f=u-l.current_volume
var c=C(A(f),o)
if(f<0)l.current_volume=k(u,l.current_volume-c)
else l.current_volume=C(u,l.current_volume+c)
if(!l.target_volume&&!l.current_volume){if(!l.need_play)l.sound.stop(l.id)
l.sound=null}}if(l.sound){var d=l.current_volume*musicVolume()*B*z
if(l.need_play){l.need_play=false
l.id=l.sound.play()
l.sys_volume=-1}if(l.sys_volume!==d){l.sound.volume(d,l.id)
l.sys_volume=d}}}for(var v=M.length-1;v>=0;--v){var p=M[v]
var h=p.target_volume-p.volume
var _=C(A(h),p.time?e/p.time:o)
if(h<0)p.volume=k(p.target_volume,p.volume-_)
else p.volume=C(p.target_volume,p.volume+_)
p.sound.volume(p.volume)
if(p.volume===p.target_volume){y(M,v)
if(!p.volume)p.sound.stop(p.id)}}}function soundPlay(e,t,r){t=t||1
if(T.volume*(r?T.volume_music:T.volume_sound)===0)return null
if(!soundResumed())return null
if(Array.isArray(e))e=e[R(I()*e.length)]
if("object"===typeof e){t*=e.volume||1
e=e.file}var a=P[e]
if(!a)return null
var i=L[e]||-9e9
if(U-i<45)return null
var n=r?musicVolume:soundVolume
var o=a.play(void 0,t*n()*B)
L[e]=U
var s={name:e,volume_current:t,stop:a.stop.bind(a,o),playing:a.playing.bind(a,o),location:function location(){var e=a.seek(o)
if("number"!==typeof e)return 0
return e},duration:a.duration.bind(a,o),volume:function volume(e){s.volume_current=e
a.volume(e*n()*B,o)},fade:function fade(e,t){var r={sound:s,volume:s.volume_current,target_volume:e,id:o,time:t,settingsVolume:n}
for(var a=0;a<M.length;++a)if(M[a].id===o){M[a]=r
return}M.push(r)}}
if(r)F.push({sound:s,play_volume:t,set_volume_when_played:musicVolume()})
return s}function soundPlayStreaming(t,r,a,i){if(T.volume*(a?T.volume_music:T.volume_sound)===0)return null
if(Array.isArray(t))t=t[R(I()*t.length)]
var n={name:t,is_placeholder:true}
soundLoad(t,{streaming:true,loop:false},function(e){if(!e){n=soundPlay(t,r,a)
if(i)i(n)}})
return n}function soundPlayMusic(o,s,l){if(T.volume*T.volume_music===0)return
if(void 0===s)s=1
l=l||a
soundLoad(o,{streaming:true,loop:true},function(e){var t=null
if(e);else{t=P[o]
m(t)
if(j[0].sound===t){j[0].target_volume=s
if(!l)if(!s){t.stop(j[0].id)
j[0].sound=null}else{var r=j[0].sys_volume=s*musicVolume()*B*z
t.volume(r,j[0].id)
if(!t.playing())t.play(void 0,r)}return}}if(j[0].current_volume)if(l&u){var a=j[1]
j[1]=j[0]
j[0]=a
j[1].target_volume=0}if(j[0].sound)j[0].sound.stop(j[0].id)
if(j[0].sound=t){j[0].target_volume=s
var i=l&f?0:s
j[0].current_volume=i
if(soundResumed()){var n=i*musicVolume()*B*z
j[0].id=t.play(void 0,n)
j[0].sys_volume=n
j[0].need_play=false}else j[0].need_play=true}else j[0].target_volume=j[0].current_volume=0})}function soundLoading(){return D}},{"../common/util":92,"./browser":11,"./cmds":15,"./engine":19,"./filewatch":24,"./settings":54,"./textures":65,"./urlhash":69,"@jimbly/howler/src/howler.core.js":void 0,assert:void 0}],60:[function(e,t,r){"use strict"
r.SPOT_STATE_REGULAR=r.SPOT_STATE_FOCUSED=r.SPOT_STATE_DOWN=r.SPOT_STATE_DISABLED=r.SPOT_NAV_UP=r.SPOT_NAV_RIGHT=r.SPOT_NAV_PREV=r.SPOT_NAV_NONE=r.SPOT_NAV_NEXT=r.SPOT_NAV_LEFT=r.SPOT_NAV_DOWN=r.SPOT_NAVTYPE_SIMPLE=r.SPOT_NAVTYPE_EXTENDED=r.SPOT_DEFAULT_LABEL=r.SPOT_DEFAULT_BUTTON_DRAW_ONLY=r.SPOT_DEFAULT_BUTTON_DISABLED=r.SPOT_DEFAULT_BUTTON=r.SPOT_DEFAULT=void 0
r.spot=spot
r.spotAsyncActivateButton=spotAsyncActivateButton
r.spotEndInput=spotEndInput
r.spotEndOfFrame=spotEndOfFrame
r.spotFocusCheck=spotFocusCheck
r.spotFocusSteal=spotFocusSteal
r.spotGet=spotGet
r.spotGetCurrentFocusKey=spotGetCurrentFocusKey
r.spotKey=spotKey
r.spotMouseoverHook=spotMouseoverHook
r.spotPadMode=spotPadMode
r.spotPadSuppressed=spotPadSuppressed
r.spotSetNavtype=spotSetNavtype
r.spotSetPadMode=spotSetPadMode
r.spotSubBegin=spotSubBegin
r.spotSubEnd=spotSubEnd
r.spotSubPop=spotSubPop
r.spotSubPush=spotSubPush
r.spotSuppressKBNav=spotSuppressKBNav
r.spotSuppressPad=spotSuppressPad
r.spotTopOfFrame=spotTopOfFrame
r.spotUnfocus=spotUnfocus
r.spotlog=spotlog
var a,i,n
function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a))e[a]=r[a]}return e}).apply(this,arguments)}var o=e("./input_constants").BUTTON_ANY
var s=0
r.SPOT_NAVTYPE_SIMPLE=s
var l=1
r.SPOT_NAVTYPE_EXTENDED=l
var k=0
r.SPOT_NAV_NONE=k
var I=1
r.SPOT_NAV_LEFT=I
var P=2
r.SPOT_NAV_UP=P
var F=3
r.SPOT_NAV_RIGHT=F
var D=4
r.SPOT_NAV_DOWN=D
var S=5
r.SPOT_NAV_NEXT=S
var E=6
r.SPOT_NAV_PREV=E
var T=7
var C=1
r.SPOT_STATE_REGULAR=C
var N=2
r.SPOT_STATE_DOWN=N
var O=3
r.SPOT_STATE_FOCUSED=O
var L=4
r.SPOT_STATE_DISABLED=L
var U={key:void 0,disabled:false,in_event_cb:null,drag_target:false,drag_over:false,button:o,is_button:false,button_long_press:false,pad_focusable:true,spatial_focus:true,auto_focus:false,long_press_focuses:true,sound_button:"button_click",sound_rollover:"rollover",touch_focuses:false,disabled_focusable:true,hotkey:null,hotkeys:null,hotpad:null,focus_steal:false,sticky_focus:false,custom_nav:null}
var u=_extends({},r.SPOT_DEFAULT=U,{is_button:true})
r.SPOT_DEFAULT_BUTTON=u
var f=_extends({},U,{disabled:true,sound_rollover:null})
r.SPOT_DEFAULT_BUTTON_DISABLED=f
var c=_extends({},U,{pad_focusable:false})
r.SPOT_DEFAULT_BUTTON_DRAW_ONLY=c
var d=_extends({},U,{sound_rollover:null,touch_focuses:true})
r.SPOT_DEFAULT_LABEL=d
var M=e("assert")
var j=Math.abs,B=Math.max
var v=e("../common/verify")
var p=e("./camera2d.js")
var h=e("./engine.js")
var _=e("./font.js").fontStyle
var m=e("./input.js")
var G=m.KEYS
var z=m.PAD
var H=m.dragDrop
var V=m.dragOver
var W=m.inputClick
var g=m.inputEatenMouse
var q=m.inputTouchMode
var y=m.keyDown
var Y=m.keyDownEdge
var K=m.longPress
var J=m.mouseButtonHadEdge
var w=m.mouseDomPos
var X=m.mouseDownAnywhere
var b=m.mouseDownEdge
var Q=m.mouseDownMidClick
var $=m.mouseMoved
var ee=m.mouseOver
var te=m.mousePosIsTouch
var re=m.padButtonDownEdge
var x=e("./settings.js")
var A=e("./ui.js")
var R=e("./ui.js")
var ae=R.drawLine
var ie=R.drawRect
var ne=R.drawTooltipBox
var oe=R.playUISound
var se=A.internal.checkHooks
var le=null
var ue=null
var fe=[]
var ce=null
var de=false
var ve=null
var pe={x:0,y:0,w:0,h:0}
var he=[]
var _e=[]
var me=[]
var ge=[]
var ye={}
var we={}
var be=false
var xe=false
var Se=null
function isSubRect(e){return e.is_sub_rect}function spotPadMode(){return be}function spotSetPadMode(e){be=e}function spotlog(){}function spotGet(e,t){var r=t?he:_e
var a=null
for(var i=0;i<r.length;++i){if(e===r[i].key)return r[i]
if(e===r[i].key_computed)a=r[i]}return a}function spotKey(e){if(e.key_computed)if(!h.defines.SPOT_DEBUG)return e.key_computed
profilerStart("spotKey")
var t=e.key||(le?le.key_computed:"")+"_"+e.x+"_"+e.y
if(e.key_computed)M.equal(e.key_computed,t)
else e.key_computed=t
profilerStop("spotKey")
return e.key_computed}function spotFocusSet(e,t,r,a){if(t&&(!$()||te()))return false
var i=e.def||U
var n=void 0===e.sound_rollover?i.sound_rollover:e.sound_rollover
var o=e.key_computed||spotKey(e)
var s=de&&!r&&t&&o!==ce
var l=s?ve:ce
if((n||!t)&&l!==o)oe(n||U.sound_rollover)
if(l!==o||be!==!t)spotlog("spotFocusSet",o,a,t?"":"pad_mode",s?"nonsticky":"")
be=!t
if(s)ve=o
else{ce=o
var u=void 0===e.sticky_focus?i.sticky_focus:e.sticky_focus
de=u
ve=null}M(e.dom_pos)
return true}function spotUnfocus(){spotlog("spotUnfocus")
ve=ce=null
be=de=false}var Ee=((a={})[I]={pads:[z.LEFT]},a[P]={pads:[z.UP]},a[F]={pads:[z.RIGHT]},a[D]={pads:[z.DOWN]},a[E]={shift_keys:[G.TAB],pads:[z.LEFT_BUMPER]},a[S]={pads:[z.RIGHT_BUMPER],unshift_keys:[G.TAB]},a)
var Te=((i={})[I]={keys:[G.LEFT],pads:Ee[I].pads},i[P]={keys:[G.UP],pads:Ee[P].pads},i[F]={keys:[G.RIGHT],pads:Ee[F].pads},i[D]={keys:[G.DOWN],pads:Ee[D].pads},i[E]=Ee[E],i[S]=Ee[S],i)
var Ae=((n={})[I]={keys:Te[I].keys.concat([G.A,G.NUMPAD4]),pads:Te[I].pads},n[P]={keys:Te[P].keys.concat([G.W,G.NUMPAD8]),pads:Te[P].pads},n[F]={keys:Te[F].keys.concat([G.D,G.NUMPAD6]),pads:Te[F].pads},n[D]={keys:Te[D].keys.concat([G.S,G.NUMPAD5,G.NUMPAD2]),pads:Te[D].pads},n[E]=Ee[E],n[S]=Ee[S],n)
function keyDownShifted(e){return y(G.SHIFT)&&Y(e)}function keyDownUnshifted(e){return!y(G.SHIFT)&&Y(e)}function compileSpotNavKeysEntry(e){var t=[]
if(e.keys)for(var r=0;r<e.keys.length;++r)t.push(Y.bind(null,e.keys[r]))
if(e.pads)for(var a=0;a<e.pads.length;++a)t.push(re.bind(null,e.pads[a]))
if(e.shift_keys)for(var i=0;i<e.shift_keys.length;++i)t.push(keyDownShifted.bind(null,e.shift_keys[i]))
if(e.unshift_keys)for(var n=0;n<e.unshift_keys.length;++n)t.push(keyDownUnshifted.bind(null,e.unshift_keys[n]))
return function(){for(var e=0;e<t.length;++e)if(t[e]())return true
return false}}function compileSpotNavKeys(e){var t
return(t={})[I]=compileSpotNavKeysEntry(e[I]),t[P]=compileSpotNavKeysEntry(e[P]),t[F]=compileSpotNavKeysEntry(e[F]),t[D]=compileSpotNavKeysEntry(e[D]),t[E]=compileSpotNavKeysEntry(e[E]),t[S]=compileSpotNavKeysEntry(e[S]),t}var Re=compileSpotNavKeys(Ee)
var ke=compileSpotNavKeys(Te)
var Ce=compileSpotNavKeys(Ae)
var Ie
var Pe
function spotSetNavtype(e){Pe=(Ie=e)===s?ke:Ce}spotSetNavtype(l)
function resetNavKeys(){Pe=Ie===s?ke:Ce}var Fe=false
function spotSuppressKBNav(e,t){Fe=true
M(e)
var r=Ie===s?ke:Ce
if(t){var a
Pe=((a={})[I]=Re[I],a[P]=Re[P],a[F]=Re[F],a[D]=Re[D],a[E]=r[E],a[S]=r[S],a)}else{var i
Pe=((i={})[I]=Re[I],i[P]=ke[P],i[F]=Re[F],i[D]=ke[D],i[E]=r[E],i[S]=r[S],i)}}var De=0
var Ne=1
var Oe=2
function findBestTargetInternal(e,t,r,a,i){var n=t.w/2
var o=t.h/2
var s=t.x+n
var l=t.y+o
var u=t.x
var f=t.x+t.w
var c=t.y
var d=t.y+t.h
var v=null
var p
for(var h=0;h<r.length;++h){var _=r[h]
if(!i(_))continue
var m=_.dom_pos
var g=void 0
if(a===De){var y=void 0
var w=m.x+m.w
var b=m.y+m.h
var x=u-w
var S=m.x-f
var E=c-b
var T=m.y-d
if(x>=-n&&b>c-x&&m.y<d+x){y=I
g=x+B(m.y-l,l-b,0)}else if(S>=-n&&b>c-S&&m.y<d+S){y=F
g=S+B(m.y-l,l-b,0)}else if(E>=-o&&w>=u-E&&m.x<=f+E){y=P
g=E+B(m.x-s,s-w,0)}else if(T>=-o&&w>=u-T&&m.x<=f+T){y=D
g=T+B(m.x-s,s-w,0)}if(void 0===y){var A=m.x+m.w/2-s
var R=m.y+m.h/2-l
g=j(A)+j(R)
if(j(A)>j(R))if(A>0)y=F
else y=I
else if(R>0)y=D
else y=P}if(y!==e)continue}else{var k=m.x+m.w/2-s
var C=m.y+m.h/2-l
g=j(k)+j(C)
if(a===Ne)if(k<=0&&e===F||k>=0&&e===I||C<=0&&e===D||C>=0&&e===P)continue}if(!v||g<p){v=_
p=g}}return v}var Le=1e-5
var Ue
function spotDebugList(e,t){if(!Ue)Ue=_(null,{color:255,outline_color:4294967244,outline_width:2})
for(var r=0;r<t.length;++r){var a=t[r]
var i=a.dom_pos
var n=void 0
if(isSubRect(a)){if(e)A.font.drawSizedAligned(Ue,i.x,i.y,Z.DEBUG,8,A.font.ALIGN.HVCENTERFIT,i.w,i.h,a.key_computed||"unknown")
continue}if(a.spot_debug_ignore)continue
if(a.only_mouseover)n=[1,.5,0,.5]
else{var o=a.def||U
if(!(void 0===a.pad_focusable?o.pad_focusable:a.pad_focusable))continue
if(!(void 0===a.spatial_focus?o.spatial_focus:a.spatial_focus))continue
for(var s=0;s<t.length;++s){if(r===s)continue
var l=t[s]
if(isSubRect(l))continue
if(l.sub_rect!==a.sub_rect)continue
var u=l.def||U
var f=void 0===l.pad_focusable?u.pad_focusable:l.pad_focusable
if(l.only_mouseover||!f)continue
if(!(void 0===l.spatial_focus?u.spatial_focus:l.spatial_focus))continue
var c=l.dom_pos
if(i.x<c.x+c.w-Le&&i.x+i.w>c.x+Le&&i.y<c.y+c.h-Le&&i.y+i.h>c.y+Le)n=[1,0,0,.5]}}if(!e&&!n)continue
ie(i.x,i.y,i.x+i.w,i.y+i.h,Z.DEBUG,n||[1,1,0,.5])
A.font.drawSizedAligned(Ue,i.x,i.y,Z.DEBUG,8,A.font.ALIGN.HVCENTERFIT,i.w,i.h,a.key_computed||"unknown")}}function spotDebug(){p.push()
p.setDOMMapped()
var e=y(G.SHIFT)
spotDebugList(e,_e)
if(be||e)for(var t=I;t<=D;++t){var r=me[t]
if(r){var a=pe
var i=r.dom_pos
var n=ge[t]
if(n){a=n.dom_pos
ae(a.x+a.w/2,a.y+a.h/2,i.x+i.w/2,i.y+i.h/2,Z.DEBUG,1,.95,[1,.5,0,1])
a=pe
i=n.dom_pos}ae(a.x+a.w/2,a.y+a.h/2,i.x+i.w/2,i.y+i.h/2,Z.DEBUG,1,.95,[1,1,0,1])}}p.pop()}var Me
var je
function filterMatchesSubrect(e){return e!==je&&e.sub_rect===Me}function overlaps(e,t){return e.x+e.w>t.x&&e.x<t.x+t.w&&e.y+e.h>t.y&&e.y<t.y+t.h}function contains(e,t){return t.x>=e.x&&t.x+t.w<=e.x+e.w&&t.y>=e.y&&t.y+t.h<=e.y+e.h}function filterInSubrectView(e){if(e.sub_rect!==Me)return false
return overlaps(e.dom_pos,Me.dom_pos)}function filterMatchesSubrectOrInVisibleChild(e){if(e===je)return false
if(e.sub_rect===Me)return true
if(e.sub_rect&&e.sub_rect.sub_rect===Me)return overlaps(e.dom_pos,e.sub_rect.dom_pos)
return false}var Be=[filterInSubrectView,filterMatchesSubrect]
function findBestWithinSubrect(e,t,r,a,i){Me=a
for(var n=0;n<Be.length;++n){var o=Be[n]
for(var s=0;s<=i;++s){var l=findBestTargetInternal(e,t,r,s,o)
if(l){M(!isSubRect(l))
return l}}}return null}function findBestTargetFromSubRect(e,t,r,a,i){Me=e
var n=findBestTargetInternal(t,r,a,i,filterMatchesSubrectOrInVisibleChild)
if(n)if(isSubRect(n))if(!(n=findBestWithinSubrect(t,r,a,ge[t]=n,i)))ge[t]=void 0
return n}function spotCalcNavTargets(){for(var e=1;e<T;++e){me[e]=void 0
ge[e]=void 0}var t
var r=[]
var a
var i
for(var n=0;n<_e.length;++n){var o=_e[n]
if(isSubRect(o)){if(!o.is_empty_sub_rect)r.push(o)}else if(o.key_computed===ce){if(!me[E]&&a)me[E]=a
t=o}else{var s=o.def||U
if(void 0===o.pad_focusable?s.pad_focusable:o.pad_focusable){if(!i)i=o
a=o
if(!me[S]&&t)me[S]=o
if(void 0===o.spatial_focus?s.spatial_focus:o.spatial_focus)r.push(o)}}}if(!me[E]&&a)me[E]=a
if(!me[S])me[S]=i
var l
var u
if(t){u=t.sub_rect
pe.x=t.dom_pos.x
pe.y=t.dom_pos.y
pe.w=t.dom_pos.w
pe.h=t.dom_pos.h
l=Ne}else{u=null
for(var f=0;f<_e.length;++f){var c=_e[f]
if(isSubRect(c))if(contains(c.dom_pos,pe))u=c}if(u)l=Ne
else l=Oe}for(var d=1;d<=D;++d)for(var v=0;v<=l;++v){je=null
var p=findBestTargetFromSubRect(u,d,pe,r,v)
if(p){me[d]=p
break}if(u)if(p=findBestTargetFromSubRect((je=u).sub_rect,d,pe,r,v)){me[d]=p
break}}if(t){var h=t.def||U
var _=void 0===t.custom_nav?h.custom_nav:t.custom_nav
if(_){var m
for(var g in _){var y=Number(g)
var w=_[y]
if(null===w||void 0===w)me[y]=w
else{if(!m){m={}
for(var b=0;b<_e.length;++b){var x=_e[b]
if(!isSubRect(x))m[x.key_computed]=x}}if(m[w])me[y]=m[w]}}}}}function spotTopOfFrame(){if($()){var e=w()
pe.x=e[0]
pe.y=e[1]
pe.w=0
pe.h=0}if(b({peek:true}))be=false
fe.length=0
le=null}function spotSuppressPad(){xe=true
if(be&&ce&&!de){spotUnfocus()
be=true}}function spotPadSuppressed(){return xe}function spotEndOfFrame(){spotCalcNavTargets()
we=ye
xe=false
he=_e
_e=[]
ye={}
Se=null
if(!Fe)resetNavKeys()
Fe=false}function frameSpotsPush(e){M(e.dom_pos)
v(isFinite(e.dom_pos.x))
v(isFinite(e.dom_pos.y))
v(isFinite(e.dom_pos.w))
v(isFinite(e.dom_pos.h))
e.sub_rect=le
_e.push(e)
if(le)le.is_empty_sub_rect=false}function spotEntirelyObscured(e){var t=e.dom_pos
for(var r=0;r<_e.length;++r){var a=_e[r]
if(isSubRect(a))continue
if(a.sub_rect!==le)continue
var i=a.dom_pos
if(i.x<=t.x&&i.x+i.w>=t.x+t.w&&i.y<=t.y&&i.y+i.h>=t.y+t.h)return true}return false}function spotSubPush(){fe.push([le,ue])
le=null}function spotSubPop(){var e=v(fe.pop())
le=e[0]
ue=e[1]}function spotSubBegin(e){M(e.key)
if(le)M(!le,"Recursive spot, parent:"+le.key+", self:"+e.key+", same="+(e===le))
spotKey(e)
var t=e
t.is_sub_rect=true
if(!t.dom_pos)t.dom_pos={}
p.virtualToDomPosParam(t.dom_pos,t)
if(!spotEntirelyObscured(t))frameSpotsPush(t);(le=t).is_empty_sub_rect=true
ue=null}function spotSubEnd(){M(le)
le=null
return ue}function spotMouseoverHook(e,t){if(g()||t.peek)return
if(t.key_computed)return
var r=e
if(!r.dom_pos)r.dom_pos={}
p.virtualToDomPosParam(r.dom_pos,r)
if(!spotEntirelyObscured(r)){var a=r
a.only_mouseover=true
a.pad_focusable=false
if(h.defines.SPOT_DEBUG)a.spot_debug_ignore=t.eat_clicks||t.spot_debug_ignore
frameSpotsPush(a)}}function keyCheck(e){if(xe)return false
return Pe[e]()}function spotFocusCheckNavButtonsFocused(e){for(var t=1;t<T;++t){var r=me[t]
if(void 0!==r&&keyCheck(t))if(r)spotFocusSet(r,false,false,"nav_focused")
else e.out.nav=t}}function spotFocusCheckNavButtonsUnfocused(e){for(var t=1;t<T;++t){var r=me[t]
if(r&&r.key_computed===e.key_computed&&keyCheck(t))spotFocusSet(r,false,false,"nav_unfocused")}}function spotFocusSetSilent(e){var t=spotKey(e)
var r=e.def||U
ce=t
var a=void 0===e.sticky_focus?r.sticky_focus:e.sticky_focus
de=a
ve=null}function spotGetCurrentFocusKey(){return[ce,de,ve].join(";")}function spotFocusSteal(e){spotlog("spotFocusSteal",spotKey(e),false)
be=true
spotFocusSetSilent(e)}function spotParamAddOut(e){if(!e.out)e.out={}}function spotParamAddPosCache(e){M(e.key_computed)
if(!e.dom_pos)e.dom_pos={}}function spotParamIsSpotInternal(e){}function spotFocusCheck(e){spotParamAddOut(e)
var t=e.out
t.focused=false
t.kb_focused=false
t.allow_focus=false
var r=spotKey(e)
var a=e.def||U
if(void 0===e.disabled?a.disabled:e.disabled)if(!(void 0===e.disabled_focusable?a.disabled_focusable:e.disabled_focusable))return t
if(void 0===e.focus_steal?a.focus_steal:e.focus_steal)spotFocusSetSilent(e)
if(ce===r)spotFocusCheckNavButtonsFocused(e)
else spotFocusCheckNavButtonsUnfocused(e)
var i=ce===r||ve===r
if(g()){if(ce===r){spotUnfocus()
i=false}if(ve===r){ve=null
i=false}}else{t.allow_focus=true
spotParamAddPosCache(e)
p.virtualToDomPosParam(e.dom_pos,e)
var n=void 0===e.auto_focus?a.auto_focus:e.auto_focus
if(!spotEntirelyObscured(e)||i&&de){frameSpotsPush(e)
if(n)if(!i&&!we[r]&&be){spotlog("auto_focus",r)
spotFocusSetSilent(e)
i=true}}if(n)ye[r]=e
if(le&&ce===r)ue=e}t.kb_focused=ce===r
t.focused=i
return t}function spotEndInput(){if(h.defines.SPOT_DEBUG)spotDebug()}function spotAsyncActivateButton(e){Se=e}var Ge={key:"",timestamp:0}
function spotSignalRet(e){var t=e.out
var r=e.key_computed
M(r)
t.double_click=r===Ge.key&&h.frame_timestamp-Ge.timestamp<x.double_click_time
Ge.key=r
Ge.timestamp=h.frame_timestamp
t.ret++}function spot(e){profilerStart("spot")
var t=e.def||U
var r=void 0===e.disabled?t.disabled:e.disabled
var a=void 0===e.is_button?t.is_button:e.is_button
var i=void 0===e.button_long_press?t.button_long_press:e.button_long_press
var n=void 0===e.in_event_cb?t.in_event_cb:e.in_event_cb
var o=void 0===e.drag_target?t.drag_target:e.drag_target
var s=void 0===e.drag_over?t.drag_over:e.drag_over
var l=void 0===e.touch_focuses?t.touch_focuses:e.touch_focuses
var u=void 0===e.focus_steal?t.focus_steal:e.focus_steal
var f=void 0===e.custom_nav?t.custom_nav:e.custom_nav
spotParamAddOut(e)
var c=e.out
c.focused=false
c.ret=0
if(i)c.long_press=false
if(o)c.drag_drop=null
if(f)c.nav=k
var d=C
var v=spotFocusCheck(e),p=v.focused,h=v.allow_focus,_=v.kb_focused
spotParamIsSpotInternal(e)
if(r)d=L
else{var m
var g
if(o&&(c.drag_drop=H(e))){spotFocusSet(e,true,true,"drag_drop")
spotSignalRet(e)
p=true}else if(i&&(g=K(e))||a&&(m=W(e))){if(g){c.long_press=g.long_press
c.button=g.button
c.pos=void 0}else{M(m)
c.button=m.button
c.pos=m.pos}if(te())if(l)if(!p){spotFocusSet(e,false,false,"touch_focus")
p=true}else{spotSignalRet(e)
spotUnfocus()
p=false}else{spotSignalRet(e)
spotUnfocus()
p=false}else{spotSignalRet(e)
spotFocusSet(e,true,true,"click")
p=true}}else if(!a&&l&&te()&&W(e)){spotFocusSet(e,false,false,"touch_focus")
p=true}else if(o&&V(e)){spotFocusSet(e,true,false,"drag_over")
p=true
if(X())d=N}else if(s&&V(e));}if(h&&q())if((void 0===e.long_press_focuses?t.long_press_focuses:e.long_press_focuses)&&K(e)){spotFocusSet(e,false,false,"long_press")
p=true}var y=ee(e)
if(p&&!u&&!y)if(J()){p=false
spotUnfocus()}else if($()){p=false
if(ce===e.key_computed)spotUnfocus()
else if(ve===e.key_computed)ve=null}if(y)if(h)if(spotFocusSet(e,true,false,"mouseover"))p=true
if(a&&y&&Q(e))if(!r)d=N
var w=false
if(p){if(d===C)d=O
if(a&&!r&&_&&!xe){var b=n?{in_event_cb:n}:null
if(Y(G.SPACE,b)||Y(G.RETURN,b)||re(z.A))w=true}}if(!r){var x=void 0===e.hotkey?t.hotkey:e.hotkey
var S=void 0===e.hotkeys?t.hotkeys:e.hotkeys
var E=void 0===e.hotpad?t.hotpad:e.hotpad
if(x||S){var T=n?{in_event_cb:n}:null
if(x&&Y(x,T))w=true
if(S)for(var A=0;A<S.length;++A)if(Y(S[A],T))w=true}if(E)if(re(E))w=true
if(Se===e.key_computed)w=true}if(w){spotSignalRet(e)
c.button=0
c.pos=null}c.focused=p
if(c.ret){d=N
var R=void 0===e.sound_button?t.sound_button:e.sound_button
if(R)oe(R)}if(c.focused&&e.tooltip)ne(e)
se(e,Boolean(c.ret))
c.spot_state=d
profilerStop("spot")
return c}},{"../common/verify":93,"./camera2d.js":13,"./engine.js":19,"./font.js":25,"./input.js":34,"./input_constants":35,"./settings.js":54,"./ui.js":67,assert:void 0}],61:[function(e,t,r){"use strict"
r.spriteAnimationCreate=spriteAnimationCreate
var a=e("assert")
var i=Math.floor,n=Math.random
var o=function(){function SpriteAnimationImpl(e){this.frame=0
this.time=0
this.frame_time=0
this.state=null
this.anim=null
this.anim_idx=0
this.data=void 0
if(e instanceof SpriteAnimationImpl){this.data=e.data
if(e.state)this.setState(e.state)}else{this.data=e
for(var t in this.data){var r=this.data[t]
if("number"===typeof r.frames)r.frames=[r.frames]
if("number"===typeof r.times){var a=new Array(r.frames.length)
for(var i=0;i<r.frames.length;++i)a[i]=r.times
r.times=a}if(r.times_random)if("number"===typeof r.times_random){var n=new Array(r.frames.length)
for(var o=0;o<r.frames.length;++o)n[o]=r.times_random
r.times_random=n}for(var s=r.total_time=0;s<r.times.length;++s)r.total_time+=r.times[s]
r.random_init_frame=r.random_init_frame||false
if(void 0===r.loop)r.loop=true}}}var e=SpriteAnimationImpl.prototype
e.clone=function clone(){return new SpriteAnimationImpl(this)}
e.setFrameIndex=function setFrameIndex(e){this.anim_idx=e
a(this.anim)
this.frame=this.anim.frames[e]
this.frame_time=this.anim.times[e]
if(this.anim.times_random)this.frame_time+=i(n()*this.anim.times_random[e])}
e.setState=function setState(e,t){if(e===this.state&&!t)return this
if(!this.data[e]){console.error("Tried to set anim state "+e+" which does not exist")
return this}this.state=e
this.anim=this.data[e]
if(this.anim.init_time)this.time=i(n()*this.anim.init_time)
else this.time=0
var r=0
if(this.anim.random_init_frame)r=i(n()*this.anim.frames.length)
this.setFrameIndex(r)
return this}
e.progress=function progress(){if(!this.anim)return 1
var e=this.time
for(var t=0;t<this.anim_idx;++t)e+=this.anim.times[t]
return e/this.anim.total_time}
e.update=function update(e){if(!this.anim)return
this.time+=e
if(this.time>this.frame_time){this.time-=this.frame_time
this.anim_idx++
if(this.anim_idx===this.anim.frames.length)if(this.anim.loop)this.anim_idx%=this.anim.frames.length
else if(this.anim.transition_to)this.setState(this.anim.transition_to)
else{this.anim=null
return}this.setFrameIndex(this.anim_idx)
if(this.time>=this.frame_time)this.time=this.frame_time-1}}
e.getFrame=function getFrame(e){if(void 0!==e)this.update(e)
return this.frame}
return SpriteAnimationImpl}()
function spriteAnimationCreate(e){return new o(e)}r.createSpriteAnimation=spriteAnimationCreate
r.create=spriteAnimationCreate},{assert:void 0}],62:[function(e,t,r){"use strict"
r.spriteSetGet=spriteSetGet
var a=e("assert")
var i={stone:{button:{name:"stone/button",ws:[32,64,32],hs:[128]},button_rollover:{name:"stone/button_rollover",ws:[32,64,32],hs:[128]},button_down:{name:"stone/button_down",ws:[32,64,32],hs:[128]},button_disabled:{name:"stone/button_disabled",ws:[32,64,32],hs:[128]}},pixely:{color_set_shades:[.8,.7,.4],slider_params:[1,1,.3],button:{name:"pixely/button",ws:[4,5,4],hs:[13]},button_rollover:null,button_down:{name:"pixely/button_down",ws:[4,5,4],hs:[13]},button_disabled:{name:"pixely/button_disabled",ws:[4,5,4],hs:[13]},panel:{name:"pixely/panel",ws:[3,2,3],hs:[3,10,3]},menu_entry:{name:"pixely/menu_entry",ws:[4,5,4],hs:[13]},menu_selected:{name:"pixely/menu_selected",ws:[4,5,4],hs:[13]},menu_down:{name:"pixely/menu_down",ws:[4,5,4],hs:[13]},menu_header:{name:"pixely/menu_header",ws:[4,5,12],hs:[13]},slider:{name:"pixely/slider",ws:[6,2,6],hs:[13]},slider_handle:{name:"pixely/slider_handle",ws:[9],hs:[13]},scrollbar_bottom:{name:"pixely/scrollbar_bottom",ws:[11],hs:[13]},scrollbar_trough:{name:"pixely/scrollbar_trough",ws:[11],hs:[8],wrap_t:true},scrollbar_top:{name:"pixely/scrollbar_top",ws:[11],hs:[13]},scrollbar_handle_grabber:{name:"pixely/scrollbar_handle_grabber",ws:[11],hs:[13]},scrollbar_handle:{name:"pixely/scrollbar_handle",ws:[11],hs:[3,7,3]},progress_bar:{name:"pixely/progress_bar",ws:[3,7,3],hs:[13]},progress_bar_trough:{name:"pixely/progress_bar_trough",ws:[3,7,3],hs:[13]},collapsagories:{name:"pixely/collapsagories",ws:[4,5,4],hs:[13]},collapsagories_rollover:{name:"pixely/collapsagories_rollover",ws:[4,5,4],hs:[13]},collapsagories_shadow_down:{name:"pixely/collapsagories_shadow_down",ws:[1,2,1],hs:[13]}}}
function spriteSetGet(e){a(i[e])
return i[e]}},{assert:void 0}],63:[function(e,t,r){"use strict"
r.BlendMode=r.BLEND_PREMULALPHA=r.BLEND_ALPHA=r.BLEND_ADDITIVE=void 0
r.blendModeReset=blendModeReset
r.blendModeSet=blendModeSet
r.buildRects=buildRects
r.queueSpriteData=queueSpriteData
r.queueraw=queueraw
r.queueraw4=queueraw4
r.queueraw4color=queueraw4color
r.queueraw4colorBuffer=queueraw4colorBuffer
r.queuesprite=queuesprite
r.spriteChainedStart=spriteChainedStart
r.spriteChainedStop=spriteChainedStop
r.spriteClip=spriteClip
r.spriteClipPause=spriteClipPause
r.spriteClipPop=spriteClipPop
r.spriteClipPush=spriteClipPush
r.spriteClipResume=spriteClipResume
r.spriteClipped=spriteClipped
r.spriteCreate=spriteCreate
r.spriteDataAlloc=spriteDataAlloc
r.spriteDraw=spriteDraw
r.spriteDrawPartial=spriteDrawPartial
r.spriteDrawReset=spriteDrawReset
r.spriteFlippedUVsApplyHFlip=spriteFlippedUVsApplyHFlip
r.spriteFlippedUVsRestore=spriteFlippedUVsRestore
r.spriteQueueFn=spriteQueueFn
r.spriteQueuePop=spriteQueuePop
r.spriteQueuePush=spriteQueuePush
r.spriteStartup=spriteStartup
r.sprite_vshader=r.sprite_fshader=void 0
function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a))e[a]=r[a]}return e}).apply(this,arguments)}r.createSprite=spriteCreate
r.create=spriteCreate
var a={BLEND_ALPHA:0,BLEND_ADDITIVE:1,BLEND_PREMULALPHA:2}
r.BlendMode=a
var i=0
r.BLEND_ALPHA=i
var n=1
r.BLEND_ADDITIVE=n
var o=2
r.BLEND_PREMULALPHA=o
var R=e("assert")
var k=e("./camera2d.js")
var s=e("./dyn_geom.js").dynGeomQueueSprite
var l=e("./engine.js")
var u=e("./geom.js")
var C=Math.cos,f=Math.max,c=Math.min,d=Math.round,I=Math.sin
var v=e("./textures.js"),p=v.textureCmpArray,h=v.textureBindArray,_=v.textureLoad,m=v.textureFilterKey
var g=e("./shaders.js"),y=g.SEMANTIC,w=g.shaderCreate,b=g.shadersBind,x=g.shadersPrelink
var S=e("../common/util.js"),E=S.deprecate,T=S.nextHighestPowerOfTwo
var A=e("../common/vmath.js"),P=A.vec2,F=A.vec4,D=A.v4set
E(r,"clip","spriteClip")
E(r,"clipped","spriteClipped")
E(r,"clipPush","spriteClipPush")
E(r,"clipPop","spriteClipPop")
E(r,"clipPause","spriteClipPause")
E(r,"clipResume","spriteClipResume")
E(r,"queuefn","spriteQueueFn")
E(r,"draw","spriteDraw")
E(r,"drawPartial","spriteDrawPartial")
var N
r.sprite_vshader=N
var O
r.sprite_fshader=O
var L
var U=F()
var M={clip_space:U}
var j=0
var B
var G=[]
var z=[]
var H=[]
function spriteQueuePush(e){R(H.length<10)
H.push(G)
G=e||[]}function spriteQueuePop(e){R(H.length)
R(e||!G.length)
G=H.pop()}function SpriteData(){this.data=new Float32Array(32)
this.texs=null
this.shader=null
this.shader_params=null
this.x=0
this.y=0
this.z=0
this.blend=0
this.uid=0
this.chained=false
this.next=null}SpriteData.prototype.queue=function(e){++B.sprites
if(!this.chained){this.z=e
this.uid=++j
G.push(this)}}
var V=false
var W=null
function spriteChainedStart(){V=true
W=null}function spriteChainedStop(){V=false
W=null}function spriteDataAlloc(e,t,r,a){var i
if(z.length)i=z.pop()
else i=new SpriteData
i.texs=e
if(V&&W){i.chained=true
W.next=i}else{i.chained=false
i.shader=t||null
if(r){r.clip_space=M.clip_space
i.shader_params=r}else i.shader_params=null
i.blend=a||0}if(V)W=i
return i}function cmpSprite(e,t){++B.sprite_sort_cmps
if(e.z!==t.z)return e.z-t.z
if(e.blend===n&&t.blend===n)return 0
if(e.y!==t.y)return e.y-t.y
if(e.x!==t.x)return e.x-t.x
return e.uid-t.uid}function spriteQueueFn(e,t){R(isFinite(e))
G.push({fn:t,x:0,y:0,z:e,uid:++j})}function queueraw4color(e,t,r,a,i,n,o,s,l,u,f,c,d,v,p,h,_,m,g,y,w,b,x,S,E){R(isFinite(b))
var T=spriteDataAlloc(e,x,S,E)
var A=T.data
A[0]=(t-k.data[0])*k.data[4]
A[1]=(r-k.data[1])*k.data[5]
A[2]=a[0]
A[3]=a[1]
A[4]=a[2]
A[5]=a[3]
A[6]=i
A[7]=n
A[8]=(o-k.data[0])*k.data[4]
A[9]=(s-k.data[1])*k.data[5]
A[10]=l[0]
A[11]=l[1]
A[12]=l[2]
A[13]=l[3]
A[14]=u
A[15]=f
A[16]=(c-k.data[0])*k.data[4]
A[17]=(d-k.data[1])*k.data[5]
A[18]=v[0]
A[19]=v[1]
A[20]=v[2]
A[21]=v[3]
A[22]=p
A[23]=h
A[24]=(_-k.data[0])*k.data[4]
A[25]=(m-k.data[1])*k.data[5]
A[26]=g[0]
A[27]=g[1]
A[28]=g[2]
A[29]=g[3]
A[30]=y
A[31]=w
T.x=A[0]
T.y=A[1]
T.queue(b)
return T}function queueraw4(e,t,r,a,i,n,o,s,l,u,f,c,d,v,p,h,_,m){return queueraw4color(e,t,r,p,f,c,a,i,p,f,v,n,o,p,d,v,s,l,p,d,c,u,h,_,m)}function queueSpriteData(e,t){R(isFinite(t))
var r=e.data
r[0]=(r[0]-k.data[0])*k.data[4]
r[1]=(r[1]-k.data[1])*k.data[5]
r[8]=(r[8]-k.data[0])*k.data[4]
r[9]=(r[9]-k.data[1])*k.data[5]
r[16]=(r[16]-k.data[0])*k.data[4]
r[17]=(r[17]-k.data[1])*k.data[5]
r[24]=(r[24]-k.data[0])*k.data[4]
r[25]=(r[25]-k.data[1])*k.data[5]
e.x=r[0]
e.y=r[1]
e.queue(t)
return e}function queueraw4colorBuffer(e,t,r,a,i,n){R(isFinite(r))
var o=spriteDataAlloc(e,a,i,n)
var s=o.data
for(var l=0;l<32;++l)s[l]=t[l]
queueSpriteData(o,r)
return o}function queueraw(e,t,r,a,i,n,o,s,l,u,f,c,d,v){return queueraw4color(e,t,r,f,o,s,t,r+n,f,o,u,t+i,r+n,f,l,u,t+i,r,f,l,s,a,c,d,v)}var q=F()
function fillUVs(e,t,r,a,i){var n=0
var o=0
if(!a&&!e.nozoom){var s=f((i[2]-i[0])*e.width/t,(i[3]-i[1])*e.height/r)
if(s<1){if(e.filter_mag===gl.LINEAR)n=o=.5
else if(e.filter_mag===gl.NEAREST)if(l.antialias)n=o=s/2
else n=o=.01*s}else if(s>1)n=o=.5+s/2
if(i[0]>i[2])n*=-1
if(i[1]>i[3])o*=-1}q[0]=i[0]+n/e.width
q[1]=i[1]+o/e.height
q[2]=i[2]-n/e.width
q[3]=i[3]-o/e.height}var Y={}
function queuesprite4colorObj(){var e=Y.rot,t=Y.z,r=Y.sprite,a=Y.color_ul,i=Y.color_ll,n=Y.color_lr,o=Y.color_ur
R(isFinite(t))
var s=spriteDataAlloc(r.texs,Y.shader,Y.shader_params,Y.blend)
var l=(Y.x-k.data[0])*k.data[4]
var u=(Y.y-k.data[1])*k.data[5]
var f=Y.w*k.data[4]
var c=Y.h*k.data[5]
if(Y.pixel_perfect){l|=0
u|=0
f|=0
c|=0}s.x=l
s.y=u
var d=s.data
if(!e){var v=l-r.origin[0]*f
var p=u-r.origin[1]*c
var h=v+f
var _=p+c
d[0]=v
d[1]=p
d[8]=v
d[9]=_
d[16]=h
d[17]=_
d[24]=h
d[25]=p}else{var m=r.origin[0]*f
var g=r.origin[1]*c
var y=C(e)
var w=I(e)
var b=l-y*m+w*g
var x=u-w*m-y*g
var S=y*c
var E=y*f
var T=w*c
var A=w*f
d[0]=b
d[1]=x
d[8]=b-T
d[9]=x+S
d[16]=b+E-T
d[17]=x+A+S
d[24]=b+E
d[25]=x+A}fillUVs(s.texs[0],f,c,Y.nozoom,Y.uvs)
d[2]=a[0]
d[3]=a[1]
d[4]=a[2]
d[5]=a[3]
d[6]=q[0]
d[7]=q[1]
d[10]=i[0]
d[11]=i[1]
d[12]=i[2]
d[13]=i[3]
d[14]=q[0]
d[15]=q[3]
d[18]=n[0]
d[19]=n[1]
d[20]=n[2]
d[21]=n[3]
d[22]=q[2]
d[23]=q[3]
d[26]=o[0]
d[27]=o[1]
d[28]=o[2]
d[29]=o[3]
d[30]=q[2]
d[31]=q[1]
s.queue(t)
return s}function queuesprite(e,t,r,a,i,n,o,s,l,u,f,c,d,v){R(!e.lazy_load)
l=l||e.color
Y.sprite=e
Y.x=t
Y.y=r
Y.z=a
Y.w=i
Y.h=n
Y.rot=o
Y.uvs=s
Y.color_ul=l
Y.color_ll=l
Y.color_lr=l
Y.color_ur=l
Y.shader=u
Y.shader_params=f
Y.nozoom=c
Y.pixel_perfect=d
Y.blend=v
return queuesprite4colorObj(Y)}var K=P()
var J=P()
function clipCoordsScissor(e,t,r,a){k.virtualToCanvas(K,[e,t])
K[0]=d(K[0])
K[1]=d(K[1])
k.virtualToCanvas(J,[e+r,t+a])
J[0]=d(J[0])-K[0]
J[1]=d(J[1])-K[1]
var i=l.render_height||l.height
return[K[0],i-(K[1]+J[1]),J[0],J[1]]}function clipCoordsDom(e,t,r,a){var i=F()
k.virtualToDom(i,[e+r,t+a])
i[2]=i[0]
i[3]=i[1]
k.virtualToDom(i,[e,t])
i[0]=d(i[0])
i[1]=d(i[1])
i[2]=d(i[2])-i[0]
i[3]=d(i[3])-i[1]
return i}var X=null
function scissorSet(e){if(!X)gl.enable(gl.SCISSOR_TEST)
gl.scissor(e[0],e[1],e[2],e[3])
X=e}function scisssorClear(){gl.disable(gl.SCISSOR_TEST)
X=null}function spriteClip(e,t,r,a,i,n){var o=clipCoordsScissor(r,a,i,n)
spriteQueueFn(e-.01,scissorSet.bind(null,o))
spriteQueueFn(t-.01,scisssorClear)}var Q=[]
function spriteClipped(){return Q.length>0}function spriteClipPush(e,t,r,a,i){R(Q.length<10)
var n=clipCoordsScissor(t,r,a,i)
var o=clipCoordsDom(t,r,a,i)
k.setInputClipping(o)
spriteQueuePush()
Q.push({z:e,scissor:n,dom_clip:o})}function spriteClipPop(){R(spriteClipped())
spriteQueueFn(Z.TOOLTIP-.1,scisssorClear)
var e=Q.pop(),t=e.z,r=e.scissor
var a=G
spriteQueuePop(true)
if(Q.length){var i=Q[Q.length-1].dom_clip
k.setInputClipping(i)}else k.setInputClipping(null)
spriteQueueFn(t,function(){var e=X
scissorSet(r)
spriteQueuePush()
G=a
spriteDraw()
spriteQueuePop()
if(e)scissorSet(e)})}var $
function spriteClipPause(){R(spriteClipped())
R(!$)
$=true
spriteQueuePush(H[0])
k.setInputClipping(null)
Q.push({dom_clip:null})}function spriteClipResume(){R(spriteClipped())
R($)
Q.pop()
$=false
R(spriteClipped())
var e=Q[Q.length-1].dom_clip
spriteQueuePop(true)
k.setInputClipping(e)}var ee
var te
var re
var ae=0
var ie=0
var ne=0
var oe
var se
var le=65532
var ue=[]
function commit(){if(ne===ie)return
ue.push({state:ee,start:ie,end:ne})
ie=ne}function blendModeSet(e){if(oe!==e)if((oe=e)===n)gl.blendFunc(gl.SRC_ALPHA,gl.ONE)
else if(oe===o)gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA)
else gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA)}function blendModeReset(e){if(oe!==i||e){gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA)
oe=i}}function commitAndFlush(){commit()
if(!ue.length)return
R(ne)
te.update(re,ne)
te.bind()
for(var e=0;e<ue.length;++e){var t=ue[e]
var r=t.state,a=t.start,i=t.end
if(se!==r.shader||r.shader_params){b(N,r.shader||O,r.shader_params||M)
se=r.shader}if(oe!==r.blend)blendModeSet(r.blend)
h(r.texs);++B.draw_calls_sprite
gl.drawElements(te.mode,3*(i-a)/2,gl.UNSIGNED_SHORT,3*a)}ue.length=0
ie=ne=0}function drawSetup(){if(l.defines.NOSPRITES)G.length=0
if(!G.length)return
U[0]=2/l.viewport[2]
U[1]=-2/l.viewport[3]
se=oe=-1
if(!te){te=u.create([[y.POSITION,gl.FLOAT,2,false],[y.COLOR,gl.FLOAT,4,false],[y.TEXCOORD,gl.FLOAT,2,false]],[],null,u.QUADS)
re=new Float32Array(1024)
ae=re.length/8}profilerStart("sort")
G.sort(cmpSprite)
B.sprite_sort_elems+=G.length
profilerStop("sort")
ee=null
R.equal(ne,0)
R.equal(ie,0)
R.equal(ue.length,0)}function growSpriteBuffer(){var e=c(1.25*ae+3&-4,le)
ae=e
re=new Float32Array(8*e)}function drawElem(e){var t=0
if(e.fn){commitAndFlush()
ee=null
e.fn()
oe=se=-1
R.equal(ne,0)
R.equal(ie,0)
R.equal(ue.length,0)
U[0]=2/l.viewport[2]
U[1]=-2/l.viewport[3]
t++}else{if(!ee||p(e.texs,ee.texs)||e.shader!==ee.shader||e.shader_params!==ee.shader_params||e.blend!==ee.blend){commit()
ee=e}do{if(ne+4>ae){commitAndFlush()
if(ae!==le)growSpriteBuffer()}var r=8*ne
ne+=4
re.set(e.data,r)
t++
z.push(e)
var a=e.next
e.next=null
e=a}while(e)}return t}function finishDraw(){commitAndFlush()
blendModeReset()}function spriteDrawReset(){X=null}function spriteDraw(){profilerStart("sprites:draw")
drawSetup()
profilerStart("drawElem")
for(var e=0;e<G.length;++e)drawElem(G[e])
profilerStop("drawElem")
G.length=0
finishDraw()
profilerStop("sprites:draw")}function spriteDrawPartial(e){profilerStart("sprites:drawPartial")
drawSetup()
profilerStart("drawElem")
for(var t=0;t<G.length;++t){var r=G[t]
if(r.z>e){G=G.slice(t)
break}drawElem(r)}profilerStop("drawElem")
finishDraw()
profilerStop("sprites:drawPartial")}function buildRects(e,t,r){var a=[]
var i=0
for(var n=0;n<e.length;++n)i+=e[n]
var o=0
for(var s=0;s<t.length;++s)o+=t[s]
var l
var u
if(!r||T(r.src_width)===r.width&&T(r.src_height)===r.height){l=T(i)
u=T(o)}else{l=i
u=o}var f=[]
for(var c=0;c<e.length;++c)f.push(e[c]/o)
var d=[]
for(var v=0;v<t.length;++v)d.push(t[v]/i)
var p=[]
var h=false
var _=0
for(var m=0;m<t.length;++m){var g=0
for(var y=0;y<e.length;++y){var w=F(g/l,_/u,(g+e[y])/l,(_+t[m])/u)
a.push(w)
var b=e[y]/t[m]
if(1!==b)h=true
p.push(b)
g+=e[y]}_+=t[m]}return{widths:e,heights:t,wh:f,hw:d,rects:a,aspect:h?p:null,total_w:i,total_h:o}}function flipRectHoriz(e){return F(e[0],e[3],e[2],e[1])}function spriteFlippedUVsApplyHFlip(e){if(!e.uidata.rects_orig)e.uidata.rects_orig=e.uidata.rects
if(!e.uidata.rects_flipped)e.uidata.rects_flipped=e.uidata.rects.map(flipRectHoriz)
e.uidata.rects=e.uidata.rects_flipped}function spriteFlippedUVsRestore(e){if(e.uidata.rects_orig)e.uidata.rects=e.uidata.rects_orig}function Sprite(t){var r=this
this.lazy_load=null
if(t.texs)this.texs=t.texs
else{var e=t.ext||".png"
this.texs=[]
if(t.tex){R(!t.lazy_load)
this.texs.push(t.tex)}else if(t.layers){R(t.name)
R(!t.lazy_load)
this.texs=[]
for(var a=0;a<t.layers;++a)this.texs.push(_({url:"img/"+t.name+"_"+a+e,filter_min:t.filter_min,filter_mag:t.filter_mag,wrap_s:t.wrap_s,wrap_t:t.wrap_t}))}else{var i
if(t.name)i={url:"img/"+t.name+e+"#"+m(t),filter_min:t.filter_min,filter_mag:t.filter_mag,wrap_s:t.wrap_s,wrap_t:t.wrap_t}
else{R(t.url)
i=t}if(t.lazy_load)this.lazy_load=i
else this.texs.push(_(i))}}this.origin=t.origin||P(0,0)
this.size=t.size||P(1,1)
this.color=t.color||F(1,1,1,1)
this.uvs=t.uvs||F(0,0,1,1)
if(t.ws)this.uidata=buildRects(t.ws,t.hs)
this.shader=t.shader||null
var n=function tex_on_load(e){if(!t.uvs){r.uvs[2]=e.src_width/e.width
r.uvs[3]=e.src_height/e.height}if(t.ws)r.uidata=buildRects(t.ws,t.hs,e)}
if(this.texs.length)this.texs[0].onLoad(n)
else this.tex_on_load=n}Sprite.prototype.lazyLoadInit=function(){var e=this
var t=_(_extends({},this.lazy_load,{auto_unload:function auto_unload(){e.texs=[]}}))
this.texs.push(t)
this.loaded_at=0
if(t.loaded)this.tex_on_load(t)
else t.onLoad(function(){e.loaded_at=l.frame_timestamp
e.tex_on_load(t)})}
Sprite.prototype.lazyLoad=function(){if(!this.texs.length)this.lazyLoadInit()
if(!this.texs[0].loaded)return 0
if(!this.loaded_at)return 1
var e=(l.frame_timestamp-this.loaded_at)/250
if(e>=1){this.loaded_at=0
return 1}return e}
var fe=F()
Sprite.prototype.draw=function(e){if(0===e.w||0===e.h)return null
var t=e.color||this.color
if(this.lazy_load){var r=this.lazyLoad()
if(!r)return null
if(1!==r)t=D(fe,t[0],t[1],t[2],t[3]*r)}var a=(e.w||1)*this.size[0]
var i=(e.h||1)*this.size[1]
var n="number"===typeof e.frame?this.uidata.rects[e.frame]:e.uvs||this.uvs
Y.sprite=this
Y.x=e.x
Y.y=e.y
Y.z=e.z||Z.UI
Y.w=a
Y.h=i
Y.rot=e.rot
Y.uvs=n
Y.color_ul=t
Y.color_ll=t
Y.color_lr=t
Y.color_ur=t
Y.shader=e.shader||this.shader
Y.shader_params=e.shader_params
Y.nozoom=e.nozoom
Y.pixel_perfect=e.pixel_perfect
Y.blend=e.blend
return queuesprite4colorObj(Y)}
Sprite.prototype.drawDualTint=function(e){e.shader=L
e.shader_params={color1:e.color1}
return this.draw(e)}
var ce=F()
var de=F()
var ve=F()
var pe=F()
Sprite.prototype.draw4Color=function(e){if(0===e.w||0===e.h)return null
Y.color_ul=e.color_ul
Y.color_ll=e.color_ll
Y.color_lr=e.color_lr
Y.color_ur=e.color_ur
if(this.lazy_load){var t=this.lazyLoad()
if(!t)return null
if(1!==t){Y.color_ul=D(ce,Y.color_ul[0],Y.color_ul[1],Y.color_ul[2],Y.color_ul[3]*t)
Y.color_ll=D(de,Y.color_ll[0],Y.color_ll[1],Y.color_ll[2],Y.color_ll[3]*t)
Y.color_ur=D(ve,Y.color_ur[0],Y.color_ur[1],Y.color_ur[2],Y.color_ur[3]*t)
Y.color_lr=D(pe,Y.color_lr[0],Y.color_lr[1],Y.color_lr[2],Y.color_lr[3]*t)}}var r=(e.w||1)*this.size[0]
var a=(e.h||1)*this.size[1]
var i="number"===typeof e.frame?this.uidata.rects[e.frame]:e.uvs||this.uvs
Y.sprite=this
Y.x=e.x
Y.y=e.y
Y.z=e.z||Z.UI
Y.w=r
Y.h=a
Y.rot=e.rot
Y.uvs=i
Y.shader=e.shader||this.shader
Y.shader_params=e.shader_params
Y.nozoom=e.nozoom
Y.pixel_perfect=e.pixel_perfect
Y.blend=e.blend
return queuesprite4colorObj(Y)}
Sprite.prototype.draw3D=function(e){if("number"===typeof e.frame)e.uvs=this.uidata.rects[e.frame]
else if(!e.uvs)e.uvs=this.uvs
s(this,e)}
function spriteCreate(e){return new Sprite(e)}function spriteStartup(){B=u.stats
U[2]=-1
U[3]=1
r.sprite_vshader=N=w("shaders/sprite.vp")
r.sprite_fshader=O=w("shaders/sprite.fp")
L=w("shaders/sprite_dual.fp")
x(N,O)
x(N,L)}},{"../common/util.js":92,"../common/vmath.js":94,"./camera2d.js":13,"./dyn_geom.js":16,"./engine.js":19,"./geom.js":27,"./shaders.js":56,"./textures.js":65,assert:void 0}],64:[function(e,t,r){"use strict"
r.create=create
var f=e("assert")
var a=e("./external_users_client")
var o=a.externalUsersAutoLoginFallbackProvider
var s=a.externalUsersAutoLoginProvider
var u=a.externalUsersCurrentUser
var i=a.externalUsersEmailPassLoginProvider
var l=a.externalUsersEnabled
var c=a.externalUsersLogIn
var d=a.externalUsersLogOut
var n=a.externalUsersSendEmailConfirmation
var v=e("../common/chunked_send")
var p=v.chunkedReceiverFinish
var h=v.chunkedReceiverFreeFile
var _=v.chunkedReceiverGetFile
var m=v.chunkedReceiverInit
var g=v.chunkedReceiverOnChunk
var y=v.chunkedReceiverStart
var w=e("../common/dot-prop")
var b=e("../common/external_users_common").ERR_NO_USER_ID
var x=e("../common/md5")
var S=e("../common/packet").isPacket
var E=e("../common/perfcounters").perfCounterAdd
var T=e("../common/tiny-events")
var A=e("../common/util")
var R=e("../common/util").cloneShallow
var k=e("./local_storage")
var C=e("./net")
var I=C.netDisconnected
var P=C.netDisconnectedRaw
var F=e("./walltime")
function ClientChannelWorker(e,t,r,a){T.call(this)
this.subs=e
var i=(this.channel_id=t).match(/^([^.]*)\.(.*)$/)
f(i)
this.channel_type=i[1]
this.channel_subid=i[2]
this.subscriptions=0
this.subscribe_failed=false
this.got_subscribe=false
this.immediate_subscribe=0
this.channel_data_ver=0
this.handlers=Object.create(r)
this.base_event_listeners=a
this.data={}}A.inherits(ClientChannelWorker,T)
ClientChannelWorker.prototype.getChannelID=function(){return this.channel_id}
ClientChannelWorker.prototype.emit=function(e){var t=arguments
T.prototype.emit.apply(this,t)
if(this.base_event_listeners){var r=this.base_event_listeners[e]
if(r)for(var a=0;a<r.length;++a)r[a].apply(this,Array.prototype.slice.call(t,1))}}
ClientChannelWorker.prototype.onSubscribe=function(e){f(this.subscriptions||this.autosubscribed)
this.on("subscribe",e)
if(this.got_subscribe)e(this.data)}
ClientChannelWorker.prototype.onceSubscribe=function(e){f(this.subscriptions||this.autosubscribed)
if(this.got_subscribe)e(this.data)
else this.once("subscribe",e)}
ClientChannelWorker.prototype.numSubscriptions=function(){return this.subscriptions}
ClientChannelWorker.prototype.isFullySubscribed=function(){return this.got_subscribe}
ClientChannelWorker.prototype.handleChannelData=function(e,t){var r=this
console.log("got channel_data("+this.channel_id+"):  "+JSON.stringify(e))
this.data=e;++this.channel_data_ver
this.emit("channel_data",this.data)
this.got_subscribe=true
this.emit("subscribe",this.data)
var a=this.channel_id.split(".")[0]
var i=this.subs.cmds_fetched_by_type
if(i&&!i[a]){i[a]=true
this.send("cmdparse","cmd_list",function(e,t){if(e){console.error("Error getting cmd_list for "+a)
delete i[a]}else r.subs.cmd_parse.addServerCommands(t)})}t()}
ClientChannelWorker.prototype.handleApplyChannelData=function(e,t){if(void 0===e.value)w.delete(this.data,e.key)
else w.set(this.data,e.key,e.value);++this.channel_data_ver
this.emit("channel_data",this.data,e.key,e.value)
t()}
ClientChannelWorker.prototype.handleBatchSet=function(e,t){for(var r=0;r<e.length;++r){var a=e[r],i=a[0],n=a[1]
if(void 0===n)w.delete(this.data.public,i)
else w.set(this.data.public,i,n);++this.channel_data_ver
this.emit("channel_data",this.data,"public."+i,n)}t()}
ClientChannelWorker.prototype.getChannelData=function(e,t){return w.get(this.data,e,t)}
ClientChannelWorker.prototype.setChannelData=function(e,t,r,a){if(!r)w.set(this.data,e,t)
var i=t&&t.q||void 0
var n=this.subs.client.pak("set_channel_data",this.channel_type+".set_channel_data")
n.writeAnsiString(this.channel_id)
n.writeBool(i)
n.writeAnsiString(e)
n.writeJSON(t)
n.send(a)}
ClientChannelWorker.prototype.removeMsgHandler=function(e,t){f(this.handlers[e]===t)
delete this.handlers[e]}
ClientChannelWorker.prototype.onMsg=function(e,t){f(!this.handlers[e]||this.handlers[e]===t)
this.handlers[e]=t}
ClientChannelWorker.prototype.pak=function(e){var t=this.subs.client.pak("channel_msg","cm:"+this.channel_type+"."+e)
t.writeAnsiString(this.channel_id)
t.writeAnsiString(e)
return t}
ClientChannelWorker.prototype.send=function(e,t,r,a){f(!r||"function"===typeof r)
f(!a)
this.subs.client.send("channel_msg",{channel_id:this.channel_id,msg:e,data:t},"cm:"+this.channel_type+"."+e,r)}
ClientChannelWorker.prototype.cmdParse=function(e,t){this.send("cmdparse",e,t)}
ClientChannelWorker.prototype.unsubscribe=function(){this.subs.unsubscribe(this.channel_id)}
function SubscriptionManager(e,t){T.call(this)
this.client=e
this.channels={}
this.logged_in=false
this.first_session=false
this.login_credentials=null
this.logged_in_email=null
this.logged_in_username=null
this.logged_in_display_name=null
this.was_logged_in=false
this.logging_in=false
this.logging_out=false
this.auto_create_user=false
this.allow_anon=false
this.no_auto_login=false
this.auto_login_error=void 0
if(this.cmd_parse=t)this.cmds_fetched_by_type={}
this.base_handlers={}
this.channel_handlers={}
this.channel_event_listeners={}
this.first_connect=true
this.server_time=0
this.server_time_interp=0
this.cack_data={}
e.onMsg("connect",this.handleConnect.bind(this))
e.onMsg("disconnect",this.handleDisconnect.bind(this))
e.onMsg("channel_msg",this.handleChannelMessage.bind(this))
e.onMsg("server_time",this.handleServerTime.bind(this))
e.onMsg("chat_broadcast",this.handleChatBroadcast.bind(this))
e.onMsg("restarting",this.handleRestarting.bind(this))
if(t)e.onMsg("csr_to_client",this.handleCSRToClient.bind(this))
this.chunked=null
e.onMsg("upload_start",this.handleUploadStart.bind(this))
e.onMsg("upload_chunk",this.handleUploadChunk.bind(this))
e.onMsg("upload_finish",this.handleUploadFinish.bind(this))
this.onChannelMsg(null,"channel_data",ClientChannelWorker.prototype.handleChannelData)
this.onChannelMsg(null,"apply_channel_data",ClientChannelWorker.prototype.handleApplyChannelData)
this.onChannelMsg(null,"batch_set",ClientChannelWorker.prototype.handleBatchSet)}A.inherits(SubscriptionManager,T)
SubscriptionManager.prototype.onceConnected=function(e){if(this.client.connected&&1===this.client.socket.readyState)return void e()
this.once("connect",e)}
SubscriptionManager.prototype.getBaseHandlers=function(e){var t=this.channel_handlers[e]
if(!t)t=this.channel_handlers[e]=Object.create(this.base_handlers)
return t}
SubscriptionManager.prototype.onChannelMsg=function(e,t,r){var a=e?this.getBaseHandlers(e):this.base_handlers
f(!a[t])
a[t]=r}
SubscriptionManager.prototype.onChannelEvent=function(e,t,r){var a=this.channel_event_listeners[e]
if(!a)a=this.channel_event_listeners[e]={}
if(!a[t])a[t]=[]
a[t].push(r)}
SubscriptionManager.prototype.handleChatBroadcast=function(e){console.error("["+e.src+"] "+e.msg)
this.emit("chat_broadcast",e)}
SubscriptionManager.prototype.handleRestarting=function(e){this.restarting=e
this.emit("restarting",e)}
SubscriptionManager.prototype.handleDisconnect=function(e){this.emit("disconnect",e)}
SubscriptionManager.prototype.sendResubscribe=function(){var e=this
f(!this.logging_in)
f(this.need_resub)
if(P())return
var t=function _loop(t){var r=e.channels[t]
if(r.subscriptions)e.client.send("subscribe",t,null,function(e){if(e){r.subscribe_failed=true
console.error("Error subscribing to "+t+": "+e)
r.emit("subscribe_fail",e)}})}
for(var r in this.channels)t(r)
this.emit("connect",this.need_resub.reconnect)
this.need_resub=null}
SubscriptionManager.prototype.handleConnect=function(e){var t=this
var r=false
if(this.first_connect)this.first_connect=false
else r=true
this.need_resub={reconnect:r}
this.restarting=Boolean(e.restarting)
this.cack_data=e
F.sync(e.time)
if(P())return
if(this.logging_in);else if(this.was_logged_in)this.loginRetry(function(e){if(e&&"ERR_FAILALL_DISCONNECT"===e);else if(e)t.auto_login_error=e})
else if(!this.no_auto_login){var a=s()
var i
if(a&&l(a))this.loginExternal({provider:a},function(e){if(e===b&&o()){t.loginExternal({provider:o(),external_login_data:R(t.login_credentials.external_login_data)},function(e){t.auto_login_error=e})
return}t.auto_login_error=e})
else if(k.get("name")&&k.get("password"))this.login(k.get("name"),k.get("password"),function(e){t.auto_login_error=e})
else if(i=k.get("login_external")){var n={provider:i}
this.loginInternal(n,function(e){if(e){t.auto_login_error=e
d(i)}})}}if(!this.logging_in&&this.need_resub)this.sendResubscribe()
this.fetchCmds()}
SubscriptionManager.prototype.fetchCmds=function(){var r=this
var e="client"
var t=this.cmds_fetched_by_type
if(t&&!t[e]){t[e]=true
this.client.send("cmd_parse_list_client",null,null,function(e,t){if(!e)r.cmd_parse.addServerCommands(t)})}}
SubscriptionManager.prototype.handleChannelMessage=function(e,t){f(S(e))
var r=e.readAnsiString()
var a=e.readAnsiString()
var i=e.readBool()
var n=i?e:e.readJSON()
if(!n||!n.q){var o
if(!i)o=JSON.stringify(n)
else if("function"===typeof n.contents)o=n.contents()
else o="(pak)"
console.log("got channel_msg("+r+") "+a+": "+o)}var s=this.getChannel(r)
var l=s.handlers[a]
if(!l){console.error("no handler for channel_msg("+r+") "+a+": "+JSON.stringify(n))
return}var u=r.split(".")[0]+"."+a
E("cm."+u)
profilerStart(u)
l.call(s,n,t)
profilerStop(u)}
SubscriptionManager.prototype.handleServerTime=function(e){this.server_time=e.readInt()
if(this.server_time<this.server_time_interp&&this.server_time>this.server_time_interp-250);else this.server_time_interp=this.server_time
F.sync(e.readInt())}
SubscriptionManager.prototype.getServerTime=function(){return this.server_time_interp}
SubscriptionManager.prototype.tick=function(e){this.server_time_interp+=e
if(!I())for(var t in this.channels){var r=this.channels[t]
if(r.immediate_subscribe)if(e>=r.immediate_subscribe){r.immediate_subscribe=0
this.unsubscribe(t)}else r.immediate_subscribe-=e}}
SubscriptionManager.prototype.onUploadProgress=function(e,t){var a=this
if(!this.upload_progress_cbs)this.upload_progress_cbs={}
f(!this.upload_progress_cbs[e])
this.upload_progress_cbs[e]=t
if(!this.chunked)this.chunked=m("client_receive",Infinity)
if(!this.chunked.on_progress)this.chunked.on_progress=function(e,t,r){if(a.upload_progress_cbs[r])a.upload_progress_cbs[r](e,t)}}
SubscriptionManager.prototype.handleUploadStart=function(e,t){if(!this.chunked)this.chunked=m("client_receive",Infinity)
y(this.chunked,e,t)}
SubscriptionManager.prototype.handleUploadChunk=function(e,t){g(this.chunked,e,t)}
SubscriptionManager.prototype.handleUploadFinish=function(e,t){p(this.chunked,e,t)}
SubscriptionManager.prototype.uploadGetFile=function(e){return _(this.chunked,e)}
SubscriptionManager.prototype.uploadFreeFile=function(e){return h(e)}
SubscriptionManager.prototype.subscribe=function(e){this.getChannel(e,true)}
SubscriptionManager.prototype.getChannel=function(t,e){var r=this.channels[t]
if(!r){var a=t.split(".")[0]
var i=this.getBaseHandlers(a)
var n=this.channel_event_listeners[a]
r=this.channels[t]=new ClientChannelWorker(this,t,i,n)}if(e){r.subscriptions++
if(!P()&&1===r.subscriptions){r.subscribe_failed=false
this.client.send("subscribe",t,null,function(e){if(e){r.subscribe_failed=true
console.error("Error subscribing to "+t+": "+e)
r.emit("subscribe_fail",e)}})}}return r}
SubscriptionManager.prototype.getUserId=function(){return this.loggedIn()}
SubscriptionManager.prototype.getDisplayName=function(){return this.logged_in_display_name}
SubscriptionManager.prototype.getLoginProvider=function(){return this.login_provider}
SubscriptionManager.prototype.getMyUserChannel=function(){var e=this.loggedIn()
if(!e)return null
var t=this.getChannel("user."+e)
if(!this.logging_out)t.autosubscribed=true
return t}
SubscriptionManager.prototype.unsubscribe=function(e){var t=this.channels[e]
f(t)
f(t.subscriptions)
t.subscriptions--
if(!t.subscriptions)t.got_subscribe=false
if(!P()&&!t.subscriptions&&!t.subscribe_failed)this.client.send("unsubscribe",e)}
SubscriptionManager.prototype.getChannelImmediate=function(e,t){t=t||6e4
var r=this.getChannel(e)
if(!r.immediate_subscribe)this.subscribe(e)
r.immediate_subscribe=t
return r}
SubscriptionManager.prototype.onLogin=function(e){this.on("login",e)
if(this.logged_in)return void e()}
SubscriptionManager.prototype.loggedIn=function(){return this.logging_out?false:this.logged_in?this.logged_in_username||"missing_name":false}
SubscriptionManager.prototype.userOnChannelData=function(e,t,r,a){if(e!==this.getUserId())return
if("public.display_name"===r)this.logged_in_display_name=a}
SubscriptionManager.prototype.handleLoginResponse=function(e,t,r){var a=this
this.logging_in=false
var i="login_fail"
if(!t){i="login"
this.first_session=Boolean(r.first_session)
this.logged_in_email=r.email
this.logged_in_username=r.user_id
this.logged_in_display_name=r.display_name
this.logged_in=true
this.was_logged_in=true
var n=this.getMyUserChannel()
n.onceSubscribe(function(){if(!a.did_master_subscribe){var e=n.getChannelData("public.permissions",{})
if(e.sysadmin)a.subscribe("master.master")
if(e.sysadmin||e.csr){a.did_master_subscribe=true
a.subscribe("global.global")}}})
if(!n.subs_added_user_on_channel_data){n.on("channel_data",this.userOnChannelData.bind(this,this.logged_in_username))
n.subs_added_user_on_channel_data=true}if(this.need_resub)this.sendResubscribe()}if(this.need_resub)this.sendResubscribe()
this.emit(i,t)
e(t)}
SubscriptionManager.prototype.loginRetry=function(e){this.loginInternal(this.login_credentials,e)}
SubscriptionManager.prototype.loginInternalExternalUsers=function(i,e,n){var o=this
var t=e.email,r=e.password,s=e.creation_display_name,l=e.external_login_data
return void c(i,{user_initiated:true,creation_display_name:s,email:t,password:r,external_login_data:l},function(e,a){o.login_credentials.external_login_data=a
if(e){k.set("login_external",o.login_provider=void 0)
o.serverLog("authentication_failed_"+i,{creation_mode:"string"===typeof s,email:t,passlen:r&&r.length,external_data:Boolean(l),err:e})
return void o.handleLoginResponse(n,e)}k.set("login_external",o.login_provider=i)
k.set("password",void 0)
u(i,function(e,t){if(e);if(P())return void o.handleLoginResponse(n,"ERR_DISCONNECTED")
var r={provider:i,validation_data:a.validation_data,display_name:(null==t?void 0:t.name)||""}
o.client.send("login_external",r,null,o.handleLoginResponse.bind(o,n))})})}
SubscriptionManager.prototype.sessionHashedPassword=function(){f(this.login_credentials.password)
return x(this.client.secret+this.login_credentials.password)}
SubscriptionManager.prototype.loginInternal=function(e,t){if(this.logging_in)return void t("Login already in progress")
this.logging_in=true
this.logged_in=false
if(void 0!==(this.login_credentials=e).creation_display_name){this.login_credentials=R(e)
delete this.login_credentials.creation_display_name}var r=e.provider
if(r)this.loginInternalExternalUsers(r,e,t)
else{var a=e.user_id
this.client.send("login",{user_id:a,password:this.sessionHashedPassword()},null,this.handleLoginResponse.bind(this,t))}}
SubscriptionManager.prototype.userCreateInternal=function(e,t){if(this.logging_in)return t("Login already in progress")
this.logging_in=true
this.logged_in=false
return this.client.send("user_create",e,null,this.handleLoginResponse.bind(this,t))}
function hashedPassword(e,t){var r=t.split("$$")
if(2===r.length&&"prehashed"===r[0]&&32===r[1].length)t=r[1]
else t=x(x(e.toLowerCase())+t)
return t}SubscriptionManager.prototype.login=function(r,a,i){var n=this
if(!(r=(r||"").trim()))return i("Missing username")
if(!(a=(a||"").trim()))return i("Missing password")
var e=hashedPassword(r,a)
if(e!==a)k.set("password","prehashed$$"+e)
var t={user_id:r,password:e}
if(!this.auto_create_user)return this.loginInternal(t,i)
return this.loginInternal(t,function(e,t){if(!e||"ERR_USER_NOT_FOUND"!==e)return void i(e,t)
n.userCreate({user_id:r,password:a,password_confirm:a,email:"autocreate@glovjs.org"},i)})}
SubscriptionManager.prototype.loginEmailPass=function(e,t){e={email:e.email,password:e.password,provider:i(),creation_display_name:e.creation_display_name}
return this.loginInternal(e,t)}
SubscriptionManager.prototype.loginExternal=function(e,t){return this.loginInternal(R(e),t)}
SubscriptionManager.prototype.sendActivationEmail=function(e,t){return n(e,t)}
SubscriptionManager.prototype.userCreate=function(e,t){e.user_id=(e.user_id||"").trim()
if(!e.user_id)return t("Missing username")
e.password=(e.password||"").trim()
if(!e.password)return t("Missing password")
e.password_confirm=(e.password_confirm||"").trim()
if(!this.auto_create_user&&!e.password_confirm)return t("Missing password confirmation")
e.email=(e.email||"").trim()
if(!this.auto_create_user&&!e.email)return t("Missing email")
e.display_name=(e.display_name||"").trim()
var r=hashedPassword(e.user_id,e.password)
if(r!==e.password)k.set("password","prehashed$$"+r)
if(r!==hashedPassword(e.user_id,e.password_confirm))return t("Passwords do not match")
this.login_credentials={user_id:e.user_id,password:r}
return this.userCreateInternal({display_name:e.display_name||e.user_id,user_id:e.user_id,email:e.email,password:r},t)}
SubscriptionManager.prototype.logout=function(){var t=this
f(this.logged_in)
f(!this.logging_in)
f(!this.logging_out)
if(this.did_master_subscribe){this.did_master_subscribe=false
var e=this.getMyUserChannel()
var r=e&&e.getChannelData("public.permissions",{})
if(r&&r.sysadmin)this.unsubscribe("master.master")
this.unsubscribe("global.global")}for(var a in this.channels){var i=this.channels[a]
if(i.immediate_subscribe){i.immediate_subscribe=0
this.unsubscribe(a)}f(!i.subscriptions,"Remaining active subscription for "+a)
if(i.autosubscribed)i.autosubscribed=false}this.logging_out=true
this.client.send("logout",null,null,function(e){t.logging_out=false
if(!e){k.set("password",void 0)
k.set("login_external",t.login_provider=void 0)
t.first_session=false
t.logged_in=false
t.logged_in_username=null
t.logged_in_display_name=null
t.was_logged_in=false
t.login_credentials=null
t.emit("logout")}})}
SubscriptionManager.prototype.isFirstSession=function(){return this.first_session}
SubscriptionManager.prototype.serverLog=function(e,t){var r=this
this.onceConnected(function(){r.client.send("log",{type:e,data:t})})}
SubscriptionManager.prototype.sendCmdParse=function(t,r){var a=this
this.onceConnected(function(){var e=a.client.pak("cmd_parse_auto")
e.writeString(t)
e.send(r)})}
SubscriptionManager.prototype.handleCSRToClient=function(e,r){var a=this
var t=e.readString()
var i=e.readJSON()
this.cmd_parse.handle({access:i},t,function(e,t){if(e&&a.cmd_parse.was_not_found)return r(null,{found:0,err:e})
return r(e,{found:1,resp:t})})}
function create(e,t){return new SubscriptionManager(e,t)}},{"../common/chunked_send":76,"../common/dot-prop":80,"../common/external_users_common":83,"../common/md5":85,"../common/packet":86,"../common/perfcounters":87,"../common/tiny-events":91,"../common/util":92,"./external_users_client":22,"./local_storage":37,"./net":41,"./walltime":70,assert:void 0}],65:[function(e,t,r){"use strict"
r.TEXTURE_FORMAT=void 0
r.textureBind=textureBind
r.textureBindArray=textureBindArray
r.textureCmpArray=textureCmpArray
r.textureCname=textureCname
r.textureCreateForCapture=textureCreateForCapture
r.textureCreateForDepthCapture=textureCreateForDepthCapture
r.textureDefaultFilters=textureDefaultFilters
r.textureError=textureError
r.textureFilterKey=textureFilterKey
r.textureFindForReplacement=textureFindForReplacement
r.textureGetAll=textureGetAll
r.textureIsArrayBound=textureIsArrayBound
r.textureLoad=textureLoad
r.textureLoadCount=textureLoadCount
r.textureResetState=textureResetState
r.textureStartup=textureStartup
r.textureSupportsDepth=textureSupportsDepth
r.textureTick=textureTick
r.textureUnloadDynamic=textureUnloadDynamic
r.textureWhite=textureWhite
var g=e("assert")
var a=e("glov-async")
var _=a.asyncParallel
var d=a.asyncSeries
var i=e("../common/texpack_common")
var m=i.FORMAT_PACK
var y=i.FORMAT_PNG
var w=i.TEXPACK_MAGIC
var n=e("../common/util")
var b=n.callEach
var o=n.callbackify
var x=n.isPowerOfTwo
var S=n.nextHighestPowerOfTwo
var s=n.ridx
var E=e("./engine")
var u=e("./fetch").fetch
var l=e("./filewatch").filewatchOn
var f=e("./local_storage")
var c=e("./settings")
var T=e("./shaders").shadersSetGLErrorReportDetails
var A=e("./urlhash")
var v=e("./webfs")
var R=v.webFSExists
var k=v.webFSGetFile
var C=Math.floor
var p=3e5
var h={}
var I=0
function textureLoadCount(){return I}var P=4
var F=0
var D
var N
var O
var L=[{target:"TEXTURE_CUBE_MAP_NEGATIVE_X",pos:[0,1]},{target:"TEXTURE_CUBE_MAP_POSITIVE_X",pos:[0,0]},{target:"TEXTURE_CUBE_MAP_NEGATIVE_Y",pos:[1,0]},{target:"TEXTURE_CUBE_MAP_POSITIVE_Y",pos:[1,1]},{target:"TEXTURE_CUBE_MAP_NEGATIVE_Z",pos:[2,0]},{target:"TEXTURE_CUBE_MAP_POSITIVE_Z",pos:[2,1]}]
var U={R8:{count:1},RGB8:{count:3},RGBA8:{count:4},DEPTH16:{count:1},DEPTH24:{count:1}}
r.TEXTURE_FORMAT=U
function textureDefaultFilters(e,t){N=e
O=t}var M=null
var j=[]
var B
var G
var z
function setUnit(e){if(e!==M){gl.activeTexture(gl.TEXTURE0+e)
M=e}}function bindHandle(e,t,r){if(j[e]!==r){setUnit(e)
gl.bindTexture(t,r)
j[e]=r}}function unbindAll(e){for(var t=0;t<j.length;++t){setUnit(t)
gl.bindTexture(e,e===gl.TEXTURE_2D?B:null)
j[t]=null}}function textureGetAll(){return h}function textureWhite(){return h.white}function textureError(){return h.error}function textureBind(e,t){t.last_use=z
bindHandle(e,t.target,t.eff_handle)}function textureBindArray(e){for(var t=0;t<e.length;++t){var r=e[t]
r.last_use=z
var a=r.eff_handle
if(j[t]!==a){if(t!==M){gl.activeTexture(gl.TEXTURE0+t)
M=t}gl.bindTexture(r.target,a)
j[t]=a}}}function textureCmpArray(e,t){var r=e.length-t.length
if(r)return r
for(var a=0;a<e.length;++a)if(r=e[a].id-t[a].id)return r
return 0}function textureIsArrayBound(e){for(var t=0;t<e.length;++t){var r=e[t].eff_handle
if(j[t]!==r)return false}return true}function textureResetState(){M=-1
if(E.webgl2)unbindAll(gl.TEXTURE_2D_ARRAY)
unbindAll(gl.TEXTURE_2D)
setUnit(0)}function textureCname(e){var t=e.lastIndexOf("/")
if(-1!==t)e=e.slice(t+1)
if(-1!==(t=e.indexOf(".")))e=e.slice(0,t)
return e.toLowerCase()}var H=[]
var V=0
function Texture(e){this.id=++V
this.name=e.name
this.cname=textureCname(this.name)
this.loaded=false
this.load_fail=false
this.target=e.target||gl.TEXTURE_2D
this.is_array=this.target===gl.TEXTURE_2D_ARRAY
this.is_cube=this.target===gl.TEXTURE_CUBE_MAP
this.packed_mips=Boolean(e.packed_mips)
if(this.packed_mips)g(this.is_array)
this.handle=gl.createTexture()
this.eff_handle=B
this.setSamplerState(e)
this.src_width=this.src_height=1
this.width=this.height=1
this.nozoom=e.nozoom||false
this.on_load=[]
this.gpu_mem=0
this.soft_error=e.soft_error||false
this.last_use=z
this.auto_unload=e.auto_unload||false
if(this.auto_unload)H.push(this)
this.format=e.format||U.RGBA8
if(e.data){var t=this.updateData(e.width,e.height,e.data)
if(t){T()
g(false,"Error loading "+e.name+": "+t)}}else{unbindAll(this.target)
if(e.url){this.format=U.RGBA8
this.url=e.url
this.loadURL(e.url)}}}Texture.prototype.updateGPUMem=function(){var e=this.width*this.height*this.format.count
if(this.mipmaps)e*=1.5
var t=e-this.gpu_mem
E.perf_state.gpu_mem.tex+=t
this.gpu_mem=t}
function bindForced(e){var t=e.target
setUnit(0)
j[0]=null
bindHandle(0,t,e.handle)}function textureFilterKey(e){return(e.filter_min||N)+1e4*(e.filter_mag||O)}Texture.prototype.setSamplerState=function(e){var t=this.target
bindForced(this)
this.filter_min=e.filter_min||N
this.filter_mag=e.filter_mag||O
gl.texParameteri(t,gl.TEXTURE_MIN_FILTER,this.filter_min)
gl.texParameteri(t,gl.TEXTURE_MAG_FILTER,this.filter_mag)
this.wrap_s=e.wrap_s||gl.REPEAT
this.wrap_t=e.wrap_t||gl.REPEAT
gl.texParameteri(t,gl.TEXTURE_WRAP_S,this.wrap_s)
gl.texParameteri(t,gl.TEXTURE_WRAP_T,this.wrap_t)
this.mipmaps=this.filter_min>=9984&&this.filter_min<=9987||e.force_mipmaps
if(F)if(this.mipmaps&&e.filter_mag!==gl.NEAREST)gl.texParameterf(gl.TEXTURE_2D,D,P)
else gl.texParameterf(gl.TEXTURE_2D,D,1)}
Texture.prototype.uploadPackedTexArrayWithMips=function uploadPackedTexArrayWithMips(e,t,r,a){var i
var n=0
var o=t
while(o>=1){var s=e[n]
g(s)
gl.texImage3D(this.target,n,this.format.internal_type,o,o,r,0,this.format.internal_type,this.format.gl_type,0===n?a:s)
if(gl.getError()){(i=i||document.createElement("canvas")).width=o
i.height=o*r
i.getContext("2d").drawImage(s,0,0)
gl.texImage3D(this.target,n,this.format.internal_type,o,o,r,0,this.format.internal_type,this.format.gl_type,i)}n++
o=C(o/2)}g(!e[n])}
Texture.prototype.updateData=function updateData(e,t,r,a){profilerStart("Texture:updateData")
g(!this.destroyed)
bindForced(this)
this.last_use=z
this.src_width=e
this.src_height=t
this.width=e
this.height=t
for(var i=0;i<10&&gl.getError();++i);var n=(!x(e)||!x(t))&&!this.is_array&&!this.is_cube&&!(!this.mipmaps&&this.wrap_s===gl.CLAMP_TO_EDGE&&this.wrap_t===gl.CLAMP_TO_EDGE)
if(n){this.width=S(e)
this.height=S(t)
gl.texImage2D(this.target,0,this.format.internal_type,this.width,this.height,0,this.format.internal_type,this.format.gl_type,null)}if(r instanceof Uint8Array){g(!a)
g(r.length>=e*t*this.format.count)
g(!this.is_cube)
if(this.is_array){var o=t/e
gl.texImage3D(this.target,0,this.format.internal_type,e,e,o,0,this.format.internal_type,this.format.gl_type,r)}else if(n)gl.texSubImage2D(this.target,0,0,0,e,t,this.format.internal_type,this.format.gl_type,r)
else gl.texImage2D(this.target,0,this.format.internal_type,e,t,0,this.format.internal_type,this.format.gl_type,r)}else{if(!r.width){profilerStop()
return"Missing width ("+r.width+') ("'+String(r).slice(0,100)+'")'}if(this.is_cube){g(!a)
g.equal(2*e,3*t)
var s=t/2
var l=document.createElement("canvas")
l.width=s
l.height=s
var u=l.getContext("2d")
for(var f=0;f<L.length;++f){var c=L[f]
u.drawImage(r,c.pos[0]*s,c.pos[1]*s,s,s,0,0,s,s)
gl.texImage2D(gl[c.target],0,this.format.internal_type,this.format.internal_type,this.format.gl_type,l)}}else if(this.is_array&&a){var d=a[0].width
g(a[0].height%d===0)
var v=a[0].height/d
this.uploadPackedTexArrayWithMips(a,d,v,r)}else if(this.is_array){g(!a)
var p=t/e
gl.texImage3D(this.target,0,this.format.internal_type,e,e,p,0,this.format.internal_type,this.format.gl_type,r)
if(gl.getError()){var h=document.createElement("canvas")
h.width=e
h.height=t
h.getContext("2d").drawImage(r,0,0)
gl.texImage3D(this.target,0,this.format.internal_type,e,e,p,0,this.format.internal_type,this.format.gl_type,h)}}else if(n){g(!a)
if(e!==this.width)gl.texSubImage2D(this.target,0,1,0,this.format.internal_type,this.format.gl_type,r)
if(t!==this.height)gl.texSubImage2D(this.target,0,0,1,this.format.internal_type,this.format.gl_type,r)
gl.texSubImage2D(this.target,0,0,0,this.format.internal_type,this.format.gl_type,r)}else{g(!a)
gl.texImage2D(this.target,0,this.format.internal_type,this.format.internal_type,this.format.gl_type,r)}}var _=null
var m=gl.getError()
if(m)_="GLError("+m+")"
if(!_&&this.mipmaps&&!a){gl.generateMipmap(this.target)
if(m=gl.getError())_="GLError("+m+")"}if(!_){this.updateGPUMem()
this.eff_handle=this.handle
this.loaded=true
b(this.on_load,this.on_load=null,this)}profilerStop()
return _}
Texture.prototype.onLoad=function(e){if(this.loaded)e(this)
else this.on_load.push(e)}
var W=o(window.createImageBitmap)
var q=4
Texture.prototype.loadURL=function loadURL(s,v){var p=this
g(!p.destroyed)
var h
var t=p.load_gen=(p.load_gen||0)+1
function tryLoad(r){profilerStart("Texture:tryLoad")
h=0
var e=s
if(!e.includes(":")){var t=e.lastIndexOf(".")
g(-1!==t)
var a=e.slice(0,t)
var i=a+".tflag"
if(R(i)){h=k(i,"jsobj")
g.equal(typeof h,"number")
if(h&m)e=a+".txp"}e=""+A.getURLBase()+e}var n=false
function done(e,t){profilerStart("Texture:onload")
if(!n){n=true
r(e,t)}profilerStop()}if(h&m){u({url:e,response_type:"arraybuffer"},done)
profilerStop()
return}var o=new Image
o.onload=function(){done(null,o)}
function fail(){done("error",null)}o.onerror=fail
o.crossOrigin="anonymous"
o.src=e
profilerStop()}function decodeTexturePack(s,t){g(s instanceof ArrayBuffer)
var e=new DataView(s)
var r=0
var a=e.getUint32(r,true)
r+=4
if(a!==w)return void t("TXP: Invalid header")
var i=e.getUint32(r,true)
if(i>32)return void t("TXP: Data out of bounds")
var n=e.getUint32(r+=4,true)
var l=[]
var o=[]
function decodeLevelPNG(e,t,r,a){var i=new Image
var n=new Uint8Array(s,t,r)
var o=URL.createObjectURL(new Blob([n],{type:"image/png"}))
i.onload=function(){URL.revokeObjectURL(o)
l[e]=i
a()}
i.onerror=function(){URL.revokeObjectURL(o)
a("img load error")}
i.src=o}var u=(r+=4)+4*i
for(var f=0;f<i;++f){var c=e.getUint32(r,true)
r+=4
if(n&y)o.push(decodeLevelPNG.bind(null,f,u,c))
else return void t("TXP: Unknown format "+n)
u+=c}if(u!==s.byteLength)if(u>s.byteLength)return void t("TXP: Unexpected end of file ("+u+" > "+s.byteLength+")")
else g(false,"TXP: Unexpected end of file ("+u+" != "+s.byteLength+")")
d(o,function(e){t(e,l[0],l)})}function prepImage(e,n,t){if(e||!n)return void t(e||"error",n)
if(h&m)return void decodeTexturePack(n,t)
if(v)n=v(p,n)
if(!(p.is_array&&p.packed_mips))return void t(null,n)
var o=[]
var r=[]
var a=n.width
var i=n.height
var s=2*a/3
g.equal(C(s),s)
var l=i/s
if(E.defines.ARRAYNOMIP){n.width=s
n.height=l*s
return void t(null,n)}function getLevel(r,e,t,a,i){W(n,e,t,a,a*l,{premultiplyAlpha:"none",colorSpaceConversion:"none"},function(e,t){if(e)return void i(e)
o[r]=t
i()})}var u=0
var f=s
var c=0
var d=0
while(f>=1){r.push(getLevel.bind(null,u,d,c,f))
if(d)c+=f*l
else d=f
f=C(f/2);++u}_(r,function(e){t(e,n,o)})}++I
var l=0
function handleLoad(e,o){if(p.load_gen!==t||p.destroyed){--I
return}prepImage(e,o,function(e,t,r){o=t
var a=""
if(e)a=e
else if(o){var i=p.updateData(o.width,o.height,o,r)
if(i){a=String(i)
if(p.is_array&&("GLError(1282)"===i||"GLError(1281)"===i)&&E.webgl2&&!E.DEBUG){f.setJSON("webgl2_disable",{ua:navigator.userAgent,ts:Date.now()})
console.error('Error loading array texture "'+s+'": '+a+", reloading without WebGL2..")
E.reloadSafe()
return}if(!p.for_reload)l=q}else{--I
return}}var n='Error loading texture "'+(s&&s.length>200?s.slice(0,200)+"...":s)+'": '+a
if(++l>q){--I
p.eff_handle=G
p.load_fail=true
console.error(n+": "+a+", retries failed")
if(p.soft_error)p.err="Load failed"
else{T()
g(false,n)}return}console.error(n+": "+a+", retrying... ")
setTimeout(tryLoad.bind(null,handleLoad),100*l*l)})}tryLoad(handleLoad)}
Texture.prototype.allocFBO=function(e,t){var r=c.fbo_rgba?gl.RGBA:gl.RGB
bindForced(this)
gl.texImage2D(this.target,0,r,e,t,0,r,gl.UNSIGNED_BYTE,null)
this.fbo=gl.createFramebuffer()
gl.bindFramebuffer(gl.FRAMEBUFFER,this.fbo)
gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.handle,0)
this.last_use=z
this.src_width=this.width=e
this.src_height=this.height=t
this.updateGPUMem()}
Texture.prototype.allocDepth=function(e,t){bindForced(this)
gl.texImage2D(gl.TEXTURE_2D,0,this.format.internal_type,e,t,0,this.format.format,this.format.gl_type,null)
this.last_use=z
this.src_width=this.width=e
this.src_height=this.height=t
this.updateGPUMem()}
Texture.prototype.captureStart=function(e,t){g(!this.capture)
this.capture={w:e,h:t}
if(this.fbo)gl.bindFramebuffer(gl.FRAMEBUFFER,this.fbo)
else{g(e)
g(t)}}
Texture.prototype.captureEnd=function(e,t){g(this.capture)
var r=this.capture
this.capture=null
if(this.fbo)gl.bindFramebuffer(gl.FRAMEBUFFER,null)
else this.copyTexImage(0,0,r.w,r.h)
var a=e?gl.LINEAR:gl.NEAREST
this.setSamplerState({filter_min:a,filter_mag:a,wrap_s:t?gl.REPEAT:gl.CLAMP_TO_EDGE,wrap_t:t?gl.REPEAT:gl.CLAMP_TO_EDGE})}
Texture.prototype.copyTexImage=function(e,t,r,a){g(!this.destroyed)
g(r&&a)
bindHandle(0,this.target,this.handle)
gl.copyTexImage2D(this.target,0,gl.RGB,e,t,r,a,0)
this.last_use=z
this.src_width=this.width=r
this.src_height=this.height=a
this.updateGPUMem()}
Texture.prototype.destroy=function(){if(this.destroyed)return
profilerStart("Texture:destroy")
g(this.name)
var e=this.auto_unload
if(e){this.auto_unload=null
var t=H.indexOf(this)
g(-1!==t)
s(H,t)}delete h[this.name]
unbindAll(this.target)
gl.deleteTexture(this.handle)
if(this.fbo){gl.bindFramebuffer(gl.FRAMEBUFFER,null)
gl.deleteFramebuffer(this.fbo)}this.width=this.height=0
this.updateGPUMem()
this.destroyed=true
if("function"===typeof e)e()
profilerStop("Texture:destroy")}
function create(e){g(e.name)
var t=new Texture(e)
return h[e.name]=t}var Y=0
function textureCreateForCapture(e,t){var r=e||"screen_temporary_tex_"+ ++Y
g(!h[r])
var a=create({filter_min:gl.NEAREST,filter_mag:gl.NEAREST,wrap_s:gl.CLAMP_TO_EDGE,wrap_t:gl.CLAMP_TO_EDGE,format:U.RGB8,name:r,auto_unload:t})
a.loaded=true
a.eff_handle=a.handle
return a}function textureCreateForDepthCapture(e,t){var r=e||"screen_temporary_tex_"+ ++Y
g(!h[r])
var a=create({filter_min:gl.NEAREST,filter_mag:gl.NEAREST,wrap_s:gl.CLAMP_TO_EDGE,wrap_t:gl.CLAMP_TO_EDGE,format:t,name:r})
a.loaded=true
a.eff_handle=a.handle
return a}function textureLoad(e){var t=e.name=e.name||e.url
g(t)
var r=h[t]
if(!r)r=create(e)
r.last_use=z
return r}function textureFindForReplacement(e){e=textureCname(e)
for(var t in h)if(h[t].cname===e)return h[t]
return null}var K=0
function textureTick(){z=E.frame_timestamp
var e=H.length
if(!e)return
if(K>=e)K=0
var t=H[K]
if(t.last_use<z-p){console.log("Unloading texture "+t.name)
t.destroy()}else++K}function textureUnloadDynamic(){while(H.length)H[0].destroy()}function removeHash(e){var t=e.indexOf("#")
if(-1===t)return e
return e.slice(0,t)}function textureReload(e){var t=false
var r=textureCname(e)
for(var a in h){var i=h[a]
if(i.cname===r&&i.url){i.for_reload=true
i.loadURL(removeHash(i.url)+"?rl="+Date.now())
t=true}}return t}var Z
function textureSupportsDepth(){return Z}function textureStartup(){N=gl.LINEAR_MIPMAP_LINEAR
O=gl.LINEAR
U.R8.internal_type=gl.LUMINANCE
U.R8.gl_type=gl.UNSIGNED_BYTE
U.RGB8.internal_type=gl.RGB
U.RGB8.gl_type=gl.UNSIGNED_BYTE
U.RGBA8.internal_type=gl.RGBA
U.RGBA8.gl_type=gl.UNSIGNED_BYTE
var e
if(E.webgl2){Z=true
e=gl.UNSIGNED_INT_24_8}else{var t=gl.getExtension("WEBGL_depth_texture")
if(t){e=t.UNSIGNED_INT_24_8_WEBGL
Z=true}}if(Z){U.DEPTH16.internal_type=E.webgl2?gl.DEPTH_COMPONENT16:gl.DEPTH_COMPONENT
U.DEPTH16.format=gl.DEPTH_COMPONENT
U.DEPTH16.gl_type=gl.UNSIGNED_SHORT
U.DEPTH24.internal_type=E.webgl2?gl.DEPTH24_STENCIL8:gl.DEPTH_STENCIL
U.DEPTH24.format=gl.DEPTH_STENCIL
U.DEPTH24.gl_type=e}var r=gl.getExtension("EXT_texture_filter_anisotropic")||gl.getExtension("MOZ_EXT_texture_filter_anisotropic")||gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic")
if(r){D=r.TEXTURE_MAX_ANISOTROPY_EXT
P=F=gl.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}G=textureLoad({name:"error",width:2,height:2,nozoom:true,format:U.RGBA8,filter_mag:gl.NEAREST,data:new Uint8Array([255,20,147,255,255,0,0,255,255,255,255,255,255,20,147,255])}).handle
B=textureLoad({name:"loading",width:2,height:2,nozoom:true,format:U.RGBA8,data:new Uint8Array([127,127,127,255,0,0,0,255,64,64,64,255,127,127,127,255])}).handle
textureLoad({name:"white",width:2,height:2,nozoom:true,format:U.RGBA8,data:new Uint8Array([255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255])})
textureLoad({name:"invisible",width:2,height:2,nozoom:true,format:U.RGBA8,data:new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])})
l(".png",textureReload)
l(".jpg",textureReload)
l(".txp",textureReload)}r.format=U
r.defaultFilters=textureDefaultFilters
r.texturesUnloadDynamic=textureUnloadDynamic
r.bind=textureBind
r.bindArray=textureBindArray
r.load=textureLoad
r.cmpTextureArray=textureCmpArray
r.isArrayBound=textureIsArrayBound
r.createForCapture=textureCreateForCapture
r.createForDepthCapture=textureCreateForDepthCapture
r.cname=textureCname
r.findTexForReplacement=textureFindForReplacement
r.textures=h},{"../common/texpack_common":90,"../common/util":92,"./engine":19,"./fetch":23,"./filewatch":24,"./local_storage":37,"./settings":54,"./shaders":56,"./urlhash":69,"./webfs":71,assert:void 0,"glov-async":void 0}],66:[function(e,t,r){"use strict"
r.REMOVE=r.IMMEDIATE=r.CONTINUE=void 0
r.active=active
r.fade=fade
r.pixelate=pixelate
r.queue=queue
r.randomTransition=randomTransition
r.render=render
r.splitScreen=splitScreen
r.wipe=wipe
var o=e("assert")
var a=e("../common/util")
var v=a.easeOut
var x=a.lerp
var s=e("../common/verify")
var i=e("../common/vmath")
var S=i.unit_vec
var p=i.vec4
var E=e("./camera2d")
var n=e("./effects")
var l=n.applyCopy
var u=n.effectsIsFinal
var f=n.effectsQueue
var c=e("./engine")
var d=e("./framebuffer")
var h=d.framebufferCapture
var _=d.framebufferEnd
var m=d.framebufferStart
var g=d.temporaryTextureClaim
var y=e("./shaders").shaderCreate
var T=e("./sprites")
var w=e("./textures").textureCreateForCapture
var b=e("./ui")
var A=Math.PI,R=Math.abs,k=Math.cos,C=Math.floor,I=Math.min,P=Math.pow,F=Math.random,D=Math.sin
var N=(0,Math.sqrt)(.5)
var O=A/4
var L=A/2
var U=[]
var M="immediate"
r.IMMEDIATE=M
var j="remove"
r.REMOVE=j
var B="continue"
r.CONTINUE=B
var G={transition_pixelate:{fp:"shaders/transition_pixelate.fp"}}
function getShader(e){var t=G[e]
if(!t.shader)t.shader=y(t.fp)
return t.shader}function GlovTransition(e,t){this.z=e
this.capture=null
this.func=t
this.accum_time=0}function transitionCapture(e){o(!e.capture)
e.capture=w()
h(e.capture)}function transitionCaptureFramebuffer(e){o(!e.capture)
e.capture=_()
g(e.capture)
if(e.capture.fbo)l({source:e.capture,final:u()})
else m({width:e.capture.width,height:e.capture.height,final:u()})}function queue(e,t){o(!c.had_3d_this_frame)
var r=false
if(e===M){r=true
e=Z.TRANSITION_FINAL}for(var a=0;a<U.length;++a){var i=U[a]
if(i.z===e)if(!s(i.capture))return false}var n=new GlovTransition(e,t)
U.push(n)
if(r)transitionCapture(n)
else f(e+Z.TRANSITION_RANGE,transitionCaptureFramebuffer.bind(null,n))
return true}function destroyTexture(e){profilerStart("transition:destroyTexture")
e.destroy()
profilerStop()}function render(e){e=I(e,100)
for(var t=0;t<U.length;++t){var r=U[t]
r.accum_time+=e
o(r.capture)
var a=t<U.length-1
if(r.func(r.z,r.capture,r.accum_time,a)===j){setTimeout(destroyTexture.bind(null,r.capture),0)
U.splice(t,1)
t--}}}function active(){return U.length}function glovTransitionFadeFunc(e,t,r,a,i){var n=I(a/e,1)
var o=1-v(n,2)
var s=p(1,1,1,o)
E.setNormalized()
T.queueraw4([r],0,0,0,1,1,1,1,0,t,0,1,1,0,s)
if(i||1===n)return j
return B}function glovTransitionWipeFunc(e,t,r,a,i,n){var o=I(i/e,1)
E.setNormalized()
var s=[[0,1],[1,0]]
var l=[{},{},{},{}]
for(var u=0;u<4;u++){var f=1===u||2===u?1:0
var c=u>=2?1:0
l[u].x=f
l[u].y=c}t-=A/2
while(t>A)t-=2*A
while(t<-A)t+=2*A
if(t>=-O&&t<=O){var d=2*o
var v=d-D(R(t))/N
if(t<0){l[0].x=v
l[3].x=d}else{l[0].x=d
l[3].x=v}l[1].x=l[2].x=2}else if(t>=L+O||t<=-L-O){var p=1-2*o
var h=p+D(R(t))/N
if(t<0){l[1].x=h
l[2].x=p}else{l[1].x=p
l[2].x=h}l[0].x=l[3].x=-1}else if(t>O&&t<=L+O){var _=2*o
var m=k(t)/N
var g=_-R(m)
if(m>0){l[0].y=_
l[1].y=g}else{l[0].y=g
l[1].y=_}l[2].y=l[3].y=2}else{var y=1-2*o
var w=k(t)/N
var b=y+R(w)
if(w>0){l[2].y=b
l[3].y=y}else{l[2].y=y
l[3].y=b}l[0].y=l[1].y=-1}l[0].u=x(l[0].x,s[0][0],s[1][0])
l[1].u=x(l[1].x,s[0][0],s[1][0])
l[2].u=x(l[2].x,s[0][0],s[1][0])
l[3].u=x(l[3].x,s[0][0],s[1][0])
l[0].v=x(l[0].y,s[0][1],s[1][1])
l[1].v=x(l[1].y,s[0][1],s[1][1])
l[2].v=x(l[2].y,s[0][1],s[1][1])
l[3].v=x(l[3].y,s[0][1],s[1][1])
T.queueraw4color([a],l[0].x,l[0].y,S,l[0].u,l[0].v,l[3].x,l[3].y,S,l[3].u,l[3].v,l[2].x,l[2].y,S,l[2].u,l[2].v,l[1].x,l[1].y,S,l[1].u,l[1].v,r)
if(n||1===o)return j
return B}function glovTransitionSplitScreenFunc(e,t,r,a,i,n,o){var s=p(1,1,1,1)
var l=v(I(n/e,1),2)
E.setNormalized()
var u=[[0,1],[1,0]]
var f=l
var c=u[0][1]+(u[1][1]-u[0][1])/2
if(r){T.queueraw([i],0,0,a,1-f,.5,0,u[0][1],u[1][0]*(1-l),c,S)
T.queueraw([i],0+f,.5,a,1-f,.5,u[1][0]*l,c,u[1][0],u[1][1],S)}else{T.queueraw([i],0-f,0,a,1,.5,u[0][0],u[0][1],u[1][0],c,S)
T.queueraw([i],0+f,.5,a,1,.5,u[0][0],c,u[1][0],u[1][1],S)}var d=I(4*l,1)
s[3]=d
b.drawRect(0,.5-(t*=d),1-f,.5,a+1,s)
b.drawRect(1-f-t,0,1-f,.5,a+1,s)
b.drawRect(f,.5,1,.5+t,a+1,s)
b.drawRect(f,.5,f+t,1,a+1,s)
if(o||1===l)return j
return B}var z=1
var H=[null]
function transitionPixelateCapture(){var e=_()
m({width:e.width,height:e.height,final:u()})
H[0]=e}function glovTransitionPixelateFunc(e,t,r,a,i){var n=c.width
var o=I(a/e,1)
E.setNormalized()
H[0]=r
if(o>.5)f(t,transitionPixelateCapture)
var s=P(2,C(2*(o>.5?1-o:o)*8.9))/1024*n*z
var l=p(r.width/s,r.height/s,s/r.width,s/r.height)
var u=p(.5/r.width,.5/r.height,(r.texSizeX-1)/r.width,(r.texSizeY-1)/r.height)
T.queueraw(H,0,0,t+1,1,1,0,1,1,0,S,getShader("transition_pixelate"),{param0:l,param1:u})
if(i||1===o)return j
return B}function fade(e){return glovTransitionFadeFunc.bind(null,e)}function wipe(e,t){return glovTransitionWipeFunc.bind(null,e,t)}function splitScreen(e,t,r){t/=E.w()
return glovTransitionSplitScreenFunc.bind(null,e,t,r)}function pixelate(e){return glovTransitionPixelateFunc.bind(null,e)}function randomTransition(e){e=e||1
switch(C(3*F())){case 0:return fade(500*e)
case 1:return splitScreen(250*e,2,false)
case 2:return pixelate(750*e)
case 3:return wipe(250*e,2*F()*A)
default:o(0)}return null}},{"../common/util":92,"../common/verify":93,"../common/vmath":94,"./camera2d":13,"./effects":18,"./engine":19,"./framebuffer":26,"./shaders":56,"./sprites":63,"./textures":65,"./ui":67,assert:void 0}],67:[function(e,t,s){"use strict"
s.Z_MIN_INC=s.Z=s.LINE_CAP_SQUARE=s.LINE_CAP_ROUND=s.LINE_ALIGN=void 0
s.addHook=addHook
s.button=button
s.buttonBackgroundDraw=buttonBackgroundDraw
s.buttonImage=buttonImage
s.buttonShared=buttonShared
s.buttonSpotBackgroundDraw=buttonSpotBackgroundDraw
s.buttonText=buttonText
s.buttonTextDraw=buttonTextDraw
s.buttonWasFocused=buttonWasFocused
s.button_mouseover=s.button_last_color=s.button_focused=s.button_click=void 0
s.colorSetMakeCustom=colorSetMakeCustom
s.colorSetSetShades=colorSetSetShades
s.color_panel=void 0
s.copyTextToClipboard=copyTextToClipboard
s.createEditBox=createEditBox
s.drawBox=drawBox
s.drawCircle=drawCircle
s.drawCone=drawCone
s.drawElipse=drawElipse
s.drawHBox=drawHBox
s.drawHollowCircle=drawHollowCircle
s.drawHollowRect=drawHollowRect
s.drawHollowRect2=drawHollowRect2
s.drawLine=drawLine
s.drawMultiPartBox=drawMultiPartBox
s.drawRect=drawRect
s.drawRect2=drawRect2
s.drawRect4Color=drawRect4Color
s.drawTooltip=drawTooltip
s.drawTooltipBox=drawTooltipBox
s.drawVBox=drawVBox
s.focusCanvas=focusCanvas
s.font=void 0
s.getUIElemData=getUIElemData
s.internal=void 0
s.isMenuUp=isMenuUp
s.label=label
s.loadUISprite=loadUISprite
s.loadUISprite2=loadUISprite2
s.makeColorSet=makeColorSet
s.menuUp=menuUp
s.menu_up=void 0
s.modalDialog=modalDialog
s.modalDialogClear=modalDialogClear
s.modalTextEntry=modalTextEntry
s.modal_y0=s.modal_width=s.modal_title_scale=s.modal_pad=s.modal_button_width=void 0
s.panel=panel
s.panel_pixel_scale=void 0
s.playUISound=playUISound
s.print=print
s.progressBar=progressBar
s.provideUserString=provideUserString
s.scaleSizes=scaleSizes
s.setButtonsDefaultLabels=setButtonsDefaultLabels
s.setFontHeight=setFontHeight
s.setFontStyles=setFontStyles
s.setModalSizes=setModalSizes
s.setPanelPixelScale=setPanelPixelScale
s.setProvideUserStringDefaultMessages=setProvideUserStringDefaultMessages
s.setTooltipWidth=setTooltipWidth
s.sprites=void 0
s.suppressNewDOMElemWarnings=suppressNewDOMElemWarnings
s.tooltip_width=s.tooltip_panel_pixel_scale=s.tooltip_pad=s.title_font=void 0
s.uiBindSounds=uiBindSounds
s.uiButtonHeight=uiButtonHeight
s.uiButtonWidth=uiButtonWidth
s.uiFontStyleDisabled=uiFontStyleDisabled
s.uiFontStyleFocused=uiFontStyleFocused
s.uiFontStyleModal=uiFontStyleModal
s.uiFontStyleNormal=uiFontStyleNormal
s.uiGetButtonRolloverColor=uiGetButtonRolloverColor
s.uiGetDOMElem=uiGetDOMElem
s.uiGetDOMTabIndex=uiGetDOMTabIndex
s.uiGetFont=uiGetFont
s.uiGetFontStyleFocused=uiGetFontStyleFocused
s.uiGetTitleFont=uiGetTitleFont
s.uiHandlingNav=uiHandlingNav
s.uiSetButtonColorSet=uiSetButtonColorSet
s.uiSetFontStyleFocused=uiSetFontStyleFocused
s.uiSetPanelColor=uiSetPanelColor
s.uiTextHeight=uiTextHeight
var r
function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a))e[a]=r[a]}return e}).apply(this,arguments)}window.Z=window.Z||{}
var G=window.Z
s.Z=G
var _=1e-5
s.Z_MIN_INC=_
G.BORDERS=G.BORDERS||90
G.UI=G.UI||100
G.MODAL=G.MODAL||1e3
G.TOOLTIP=G.TOOLTIP||2e3
G.DEBUG=G.DEBUG||9800
G.TRANSITION_FINAL=G.TRANSITION_FINAL||9900
G.TRANSITION_RANGE=G.TRANSITION_RANGE||10
G.FPSMETER=G.FPSMETER||1e4
var W=1
s.LINE_ALIGN=W
var q=2
s.LINE_CAP_SQUARE=q
var Y=4
s.LINE_CAP_ROUND=Y
var a={checkHooks:checkHooks,cleanupDOMElems:cleanupDOMElems,uiEndFrame:uiEndFrame,uiSetFonts:uiSetFonts,uiStartup:uiStartup,uiTick:uiTick,uiApplyStyle:uiApplyStyle}
s.internal=a
var x=e("assert")
var K=e("./camera2d.js")
var i=e("./edit_box.js"),o=i.editBoxCreate,l=i.editBoxTick
var n=e("./effects.js")
var u=n.effectsQueue
var Z=e("./engine.js")
var J=e("./font.js")
var m=J.ALIGN,f=J.fontSetDefaultSize,c=J.fontStyle,d=J.fontStyleColored
var z=e("./input.js")
var v=e("./link.js").linkTick
var g=e("./localization.js").getStringFromLocalizable
var X=Math.abs,p=Math.floor,S=Math.max,Q=Math.min,$=Math.round,ee=Math.sqrt
var h=e("./scroll_area.js").scrollAreaSetPixelScale
var y=e("./slider.js").sliderSetDefaultShrink
var w=e("./sound.js"),b=w.soundLoad,E=w.soundPlay
var T=e("./spot.js"),A=T.SPOT_DEFAULT_BUTTON,R=T.SPOT_DEFAULT_BUTTON_DRAW_ONLY,k=T.SPOT_DEFAULT_LABEL,C=T.SPOT_STATE_REGULAR,I=T.SPOT_STATE_DOWN,P=T.SPOT_STATE_FOCUSED,F=T.SPOT_STATE_DISABLED,D=T.spot,N=T.spotEndOfFrame,O=T.spotKey,L=T.spotPadMode,U=T.spotPadSuppressed,M=T.spotTopOfFrame,j=T.spotUnfocus
var te=e("./sprites.js")
var re=te.BLEND_PREMULALPHA,B=te.spriteClipped,H=te.spriteClipPause,V=te.spriteClipResume,ae=te.spriteChainedStart,ie=te.spriteChainedStop,ne=te.spriteCreate
var oe=e("./textures.js").TEXTURE_FORMAT
var se=e("./uistyle.js"),le=se.uiStyleDefault,ue=se.uiStyleModify,fe=se.uiStyleTopOfFrame
var ce=e("../common/util.js"),de=ce.clamp,ve=ce.clone,pe=ce.defaults,he=ce.deprecate,_e=ce.lerp,me=ce.merge
var ge=e("./mat43.js"),ye=ge.mat43,we=ge.m43identity,be=ge.m43mul
var xe=e("../common/vmath.js"),Se=xe.vec2,Ee=xe.vec4,Te=xe.v4copy,Ae=xe.v3scale,Re=xe.unit_vec
he(s,"slider_dragging","slider.js:sliderIsDragging()")
he(s,"slider_rollover","slider.js:sliderIsFocused()")
he(s,"setSliderDefaultShrink","slider.js:sliderSetDefaultShrink()")
he(s,"slider","slider.js:slider()")
he(s,"bindSounds","uiBindSounds")
he(s,"modal_font_style","uiFontStyleModal()")
he(s,"font_style_noraml","uiFontStyleNoraml()")
he(s,"font_style_focused","uiFontStyleFocused()")
he(s,"color_button","uiSetButtonColorSet()")
var ke=.75
var Ce
var Ie
var Pe
var Fe={blur:[.125,.865],saturation:[.5,.1],brightness:[1,1-ke],fallback_darken:Ee(0,0,0,ke),z:G.MODAL}
var De=Ee(1,1,1,1)
var Ne=[]
function applyColorSet(e){Ae(e.regular,e.color,De[0])
Ae(e.rollover,e.color,De[1])
Ae(e.down,e.color,De[2])
Ae(e.disabled,e.color,De[3])}function makeColorSet(e){var t={color:e,regular:Ee(),rollover:Ee(),down:Ee(),disabled:Ee()}
for(var r in t)t[r][3]=e[3]
Ne.push(t)
applyColorSet(t)
return t}function colorSetMakeCustom(e,t,r,a){return{regular:e,rollover:t,down:r,disabled:a}}var Oe=[]
function addHook(e,t){Oe.push({draw:e,click:t})}var Le={}
function getUIElemData(e,t,r){var a=O(t)
var i=Le[e]
if(!i)i=Le[e]={}
var n=i[a]
if(!n)n=i[a]=r?r(t):{}
n.frame_index=Z.frame_index
return n}function doBlurEffect(e){n.applyGaussianBlur({blur:e})}var Ue=ye()
var Me=ye()
function doDesaturateEffect(e,t){we(Ue)
n.saturationMatrix(Me,e)
be(Ue,Ue,Me)
n.brightnessScaleMatrix(Me,t)
be(Ue,Ue,Me)
n.applyColorMatrix({colorMatrix:Ue})}var je=100
s.modal_button_width=je
var Be=600
s.modal_width=Be
var Ge=200
s.modal_y0=Ge
var ze=1.2
s.modal_title_scale=ze
var He=16
s.modal_pad=He
var Ve=32/13
var We=s.panel_pixel_scale=Ve
s.tooltip_panel_pixel_scale=We
var qe=400
s.tooltip_width=qe
var Ye=8
s.tooltip_pad=Ye
var Ke
var Ze
var Je
var Xe
function setFontStyles(e,t,r,a){Ke=e||d(null,255)
Ze=t||c(Ke,{})
Xe=r||c(Ke,{})
Je=a||d(Ke,572662527)}setFontStyles()
function uiFontStyleNormal(){return Ke}function uiFontStyleFocused(){return Ze}function uiFontStyleDisabled(){return Xe}function uiFontStyleModal(){return Xe}function uiTextHeight(){return Pe.text_height}function uiButtonHeight(){return Pe.button_height}function uiButtonWidth(){return Pe.button_width}var Qe
s.font=Qe
var $e
s.title_font=$e
function uiGetFont(){return Qe}function uiGetTitleFont(){return $e}var et={}
s.sprites=et
var tt=makeColorSet([1,1,1,1])
function uiSetButtonColorSet(e){tt=e}function uiGetButtonRolloverColor(){return tt.rollover}var rt=Ee(1,1,.75,1)
s.color_panel=rt
var at={}
var it=false
s.button_mouseover=it
var nt=false
s.button_focused=nt
var ot=null
s.button_click=ot
function buttonWasFocused(){return nt}var st=null
var lt=false
s.menu_up=lt
var ut=me({},Fe)
var ft=0
var ct=[]
var dt=0
var vt
var pt
var ht={ok:"OK",cancel:"Cancel",yes:"Yes",no:"No"}
var _t="Text copied to clipboard!"
var mt="Copy to clipboard FAILED, please copy from below."
function colorSetSetShades(e,t,r){De[1]=e
De[2]=t
De[3]=r
for(var a=0;a<Ne.length;++a)applyColorSet(Ne[a])}function uiGetFontStyleFocused(){return Ze}function uiSetFontStyleFocused(e){Ze=e}function uiSetPanelColor(e){Te(rt,e)}function loadUISprite(e,t,r){var a=gl.CLAMP_TO_EDGE
var i=gl.CLAMP_TO_EDGE
et[e]=ne({name:"ui/"+e,ws:t,hs:r,wrap_s:a,wrap_t:i})}function loadUISprite2(e,t){if(null===t)return
var r=gl.CLAMP_TO_EDGE
var a=t.wrap_t?gl.REPEAT:gl.CLAMP_TO_EDGE
var i={ws:t.ws,hs:t.hs,wrap_s:r,wrap_t:a,layers:t.layers}
if(t.url)i.url=t.url
else i.name="ui/"+(t.name||e)
et[e]=ne(i)}function uiSetFonts(e,t){s.font=Qe=e
s.title_font=$e=t||Qe}function setButtonsDefaultLabels(e){for(var t in e)ht[t.toLowerCase()]=e[t]}function setProvideUserStringDefaultMessages(e,t){_t=e
mt=t}var gt={color_set_shades:[1,1,1],white:{url:"white"},button:{ws:[8,112,8],hs:[128]},button_rollover:{ws:[8,112,8],hs:[128]},button_down:{ws:[8,112,8],hs:[128]},button_disabled:{ws:[8,112,8],hs:[128]},panel:{ws:[32,64,32],hs:[32,64,32]},menu_entry:{ws:[8,112,8],hs:[128]},menu_selected:{ws:[8,112,8],hs:[128]},menu_down:{ws:[8,112,8],hs:[128]},menu_header:{ws:[8,112,136],hs:[128]},slider:{ws:[56,16,56],hs:[128]},slider_handle:{ws:[64],hs:[128]},scrollbar_bottom:{ws:[64],hs:[64]},scrollbar_trough:{ws:[64],hs:[8],wrap_t:true},scrollbar_top:{ws:[64],hs:[64]},scrollbar_handle_grabber:{ws:[64],hs:[64]},scrollbar_handle:{ws:[64],hs:[24,16,24]},progress_bar:{ws:[48,32,48],hs:[128]},progress_bar_trough:{ws:[48,32,48],hs:[128]},collapsagories:{ws:[4,8,4],hs:[64]},collapsagories_rollover:{ws:[4,8,4],hs:[64]},collapsagories_shadow_down:{ws:[4,8,4],hs:[64]},collapsagories_shadow_up:null}
function uiStartup(e){s.font=Qe=e.font
s.title_font=$e=e.title_font||Qe
Ce=z.KEYS
Ie=z.PAD
var t=_extends({},gt,e.ui_sprites)
for(var r in t){var a=t[r]
if("object"===typeof a&&!Array.isArray(a))loadUISprite2(r,a)}et.button_regular=et.button
if(t.color_set_shades)colorSetSetShades.apply(void 0,t.color_set_shades)
if(t.slider_params)y.apply(void 0,t.slider_params)
if(et.button_rollover&&1!==De[1])colorSetSetShades(1,De[2],De[3])
if(et.button_down&&1!==De[2])colorSetSetShades(De[1],1,De[3])
if(et.button_disabled&&1!==De[3])colorSetSetShades(De[1],De[2],1);(vt={ok:{key:[Ce.O],pad:[Ie.X],low_key:[Ce.ESC]},cancel:{key:[Ce.ESC],pad:[Ie.B,Ie.Y]}}).yes=ve(vt.ok)
vt.yes.key.push(Ce.Y)
vt.no=ve(vt.cancel)
vt.no.key.push(Ce.N)
if(void 0!==e.line_mode)pt=e.line_mode
else pt=W|Y
scaleSizes(1)}var yt
var wt=[0,0,0,0,0,0,0]
var bt=0
function suppressNewDOMElemWarnings(){bt=Z.frame_index+1}function uiGetDOMElem(e,t){if(st&&!t)return null
if(dt>=ct.length||!e){var r=document.createElement("div")
if(Z.DEBUG&&!Z.resizing()&&Z.frame_index>bt){wt[Z.frame_index%wt.length]=1
var a=0
for(var i=0;i<wt.length;++i)a+=wt[i]
x(a<wt.length,"Allocated new DOM elements for too many consecutive frames")}r.setAttribute("class","glovui_dynamic")
if(!yt)yt=document.getElementById("dynamic_text")
yt.appendChild(r)
ct.push(r)
e=r}if(ct[dt]!==e)for(var n=dt+1;n<ct.length;++n)if(ct[n]===e){ct[n]=ct[dt]
ct[dt]=e}var o=ct[dt]
dt++
return o}var xt=0
function uiGetDOMTabIndex(){return++xt}var St={button_click:"button_click",rollover:"rollover"}
function uiBindSounds(e){for(var t in at=pe(e||{},St))if(at[t])b(at[t])}var Et={nozoom:true}
function drawHBox(e,t,r){ae()
var a=t.uidata
var i=e.x
var n=[a.wh[0]*e.h,0,(a.wh[2]||0)*e.h]
if(e.no_min_width&&n[0]+n[2]>e.w){var o=e.w/(n[0]+n[2])
n[0]*=o
n[2]*=o}else n[1]=S(0,e.w-n[0]-n[2])
Et.y=e.y
Et.z=e.z
Et.h=e.h
Et.color=r
Et.color1=e.color1
Et.shader=null
for(var s=0;s<n.length;++s){var l=n[s]
if(l){Et.x=i
Et.w=l
Et.uvs=a.rects[s]
if(e.color1)t.drawDualTint(Et)
else t.draw(Et)}i+=l}ie()}function drawVBox(e,t,r){ae()
var a=t.uidata
var i=[a.hw[0]*e.w,0,(a.hw[2]||0)*e.w]
var n=e.y
i[1]=S(0,e.h-i[0]-i[2])
Et.x=e.x
Et.z=e.z
Et.w=e.w
Et.color=r
Et.shader=null
for(var o=0;o<i.length;++o){var s=i[o]
Et.y=n
Et.h=s
Et.uvs=a.rects[o]
t.draw(Et)
n+=s}ie()}function drawBox(e,t,r,a,i){ae()
var n=t.uidata
var o=r
var s=[n.widths[0]*o,0,n.widths[2]*o]
s[1]=S(0,e.w-s[0]-s[2])
var l=[n.heights[0]*o,0,n.heights[2]*o]
l[1]=S(0,e.h-l[0]-l[2])
var u=e.x
Et.z=e.z
Et.color=a
Et.shader=null
if(i)Et.color1=i
for(var f=0;f<s.length;++f){var c=s[f]
if(c){Et.x=u
Et.w=c
var d=e.y
for(var v=0;v<l.length;++v){var p=l[v]
if(p){Et.y=d
Et.h=p
Et.uvs=n.rects[3*v+f]
if(i)t.drawDualTint(Et)
else t.draw(Et)
d+=p}}u+=c}}ie()}function drawMultiPartBox(e,t,r,a,i){ae()
var n=r.uidata
var o=a
var s=[]
var l=0
var u=0
for(var f=0;f<n.widths.length;f++)if(t.widths[f]<0){s.push(n.widths[f]*o)
l+=n.widths[f]*o}else{s.push(0)
u+=t.widths[f]}x(1===u)
for(var c=0;c<n.widths.length;c++)if(t.widths[c]>=0)s[c]=S(0,(e.w-l)*t.widths[c])
var d=[]
var v=u=0
for(var p=0;p<n.heights.length;p++)if(t.heights[p]<0){d.push(n.heights[p]*o)
v+=n.heights[p]*o}else{d.push(0)
u+=t.heights[p]}x(1===u)
for(var h=0;h<n.heights.length;h++)if(t.heights[h]>=0)d[h]=S(0,(e.h-v)*t.heights[h])
var _=e.x
for(var m=0;m<s.length;++m){var g=s[m]
if(g){var y=e.y
for(var w=0;w<d.length;++w){var b=d[w]
if(b){r.draw({x:_,y:y,z:e.z,color:i,w:g,h:b,uvs:n.rects[w*s.length+m],nozoom:true})
y+=b}}_+=g}}ie()}function playUISound(e,t){profilerStart("playUISound")
if("select"===e)e="button_click"
if(at[e])E(at[e],t)
profilerStop("playUISound")}function focusCanvas(){j()}function uiHandlingNav(){return lt||!U()}function panel(e){x("number"===typeof e.x)
x("number"===typeof e.y)
x("number"===typeof e.w)
x("number"===typeof e.h)
e.z=e.z||G.UI-1
e.eat_clicks=void 0===e.eat_clicks?true:e.eat_clicks
var t=e.color||rt
drawBox(e,e.sprite||et.panel,e.pixel_scale||Ve,t)
if(e.eat_clicks)z.mouseOver(e)}function drawTooltip(e){var t=e.tooltip
if("function"===typeof t)if(!(t=t(e)))return
t=g(t)
x("number"===typeof e.x)
x("number"===typeof e.y)
x("string"===typeof t)
var r=B()
if(r)H()
var a=e.tooltip_width||qe
var i=e.z||G.TOOLTIP
var n=e.y
var o=e.tooltip_pad||Ye
var s=a-2*o
var l=Qe.dims(Xe,s,0,Pe.text_height,t)
var u=e.tooltip_above
var f=e.tooltip_right
if(!u&&e.tooltip_auto_above_offset)u=n+l.h+2*o>K.y1()
var c=e.x
var d=l.w+2*o
if(f&&e.tooltip_auto_right_offset)c+=e.tooltip_auto_right_offset-d
if(c+d>K.x1())c=K.x1()-d
if(u)n-=l.h+2*o+(e.tooltip_auto_above_offset||0)
var v=n+o
v+=Qe.drawSizedWrapped(Xe,c+o,v,i+1,s,0,Pe.text_height,t)
panel({x:c,y:n,z:i,w:d,h:(v+=o)-n,pixel_scale:e.pixel_scale||We,eat_clicks:false})
if(r)V()}function checkHooks(e,t){if(e.hook)for(var r=0;r<Oe.length;++r){if(t)Oe[r].click(e)
Oe[r].draw(e)}}function drawTooltipBox(e){var t=e.tooltip
if("function"===typeof t)if(!(t=t(e)))return
drawTooltip({x:e.x,y:e.y+e.h+2,tooltip_auto_above_offset:e.h+4,tooltip_above:e.tooltip_above,tooltip_auto_right_offset:e.w,tooltip_right:e.tooltip_right,tooltip:t,tooltip_width:e.tooltip_width})}function progressBar(e){drawHBox(e,et.progress_bar_trough,e.color_trough||e.color||Re)
var t=de(e.progress,0,1)
drawHBox({x:e.x+(e.centered?e.w*(1-t)*.5:0),y:e.y,z:(e.z||G.UI)+_,w:e.w*t,h:e.h,no_min_width:true},et.progress_bar,e.color||Re)
if(e.tooltip)D({x:e.x,y:e.y,w:e.w,h:e.h,tooltip:e.tooltip,def:k})}var Tt=((r={})[C]="regular",r[I]="down",r[P]="rollover",r[F]="disabled",r)
var At=_extends({},A,{disabled:true,disabled_focusable:false,sound_rollover:null})
function buttonShared(e){profilerStart("buttonShared")
e.z=e.z||G.UI
if(e.rollover_quiet)e.sound_rollover=null
var t
if(e.draw_only&&!e.draw_only_mouseover)t={ret:false,state:"regular",focused:false}
else{if(e.draw_only){x(!e.def||e.def===R)
e.def=R}else if(e.disabled&&!e.disabled_focusable)e.def=e.def||At
else e.def=e.def||A
if(e.sound)e.sound_button=e.sound;(t=D(e)).state=Tt[t.spot_state]
if(t.ret){s.button_click=ot=t
ot.was_double_click=t.double_click}}s.button_focused=nt=s.button_mouseover=it=t.focused
e.z+=e.z_bias&&e.z_bias[t.state]||0
profilerStop("buttonShared")
return t}var Rt
s.button_last_color=Rt
function buttonBackgroundDraw(e,t){profilerStart("buttonBackgroundDraw")
var r=e.colors||tt
var a=s.button_last_color=Rt=e.color||r[t]
if(!e.no_bg){var i=e.base_name||"button"
var n=et[i+"_"+t]
if(!n)n=et[i]
drawHBox(e,n,a)}profilerStop("buttonBackgroundDraw")}function buttonSpotBackgroundDraw(e,t){profilerStart("buttonSpotBackgroundDraw")
var r=Tt[t]
var a=e.colors||tt
var i=s.button_last_color=Rt=e.color||a[r]
if(!e.no_bg){var n=e.base_name||"button"
var o=et[n+"_"+r]
if(!o)o=et[n]
drawHBox(e,o,i)}profilerStop("buttonSpotBackgroundDraw")}function buttonTextDraw(e,t,r){profilerStart("buttonTextDraw")
buttonBackgroundDraw(e,t)
var a=Q(.25*e.font_height,.1*e.w)
var i="disabled"===t;(e.font||Qe).drawSizedAligned(i?e.font_style_disabled||Je:r?e.font_style_focused||Ze:e.font_style_normal||Ke,e.x+a,e.y,e.z+.1,e.font_height,e.align||J.ALIGN.HVCENTERFIT,e.w-2*a,e.h,e.text)
profilerStop("buttonTextDraw")}function buttonText(e){profilerStart("buttonText")
e.text=g(e.text)
x("number"===typeof e.x)
x("number"===typeof e.y)
x("string"===typeof e.text)
e.w=e.w||Pe.button_width
e.h=e.h||Pe.button_height
e.font_height=e.font_height||(e.style||Pe).text_height
var t=buttonShared(e)
var r=t.ret
buttonTextDraw(e,t.state,t.focused)
profilerStop("buttonText")
return r?t:null}function buttonImageDraw(e,t,r){profilerStart("buttonImageDraw")
var a=e.img_rect
var i=e.imgs&&e.imgs[t]||e.img
if("number"===typeof e.frame)a=i.uidata.rects[e.frame]
buttonBackgroundDraw(e,t)
var n=Rt
var o=i.origin
var s=i.size[0]
var l=i.size[1]
var u=s/l
if("number"===typeof e.frame)u=i.uidata.aspect?i.uidata.aspect[e.frame]:1
var f=e.w*e.shrink
var c=e.h*e.shrink*u
s=Q(f,c)
var d=(e.h-(l=s/u))/2
var v={x:e.x+(e.left_align?d:(e.w-s)/2)+o[0]*s,y:e.y+d+o[1]*l,z:e.z+(e.z_inc||_),color:e.img_color||e.color1&&e.color||n,color1:e.color1,w:s/i.size[0],h:l/i.size[1],uvs:a,rot:e.rotation}
if(e.flip){var p=v.x,h=v.w
v.x=p+h
v.w=-h}if(e.color1)i.drawDualTint(v)
else i.draw(v)
profilerStop("buttonImageDraw")}function buttonImage(e){profilerStart("buttonImage")
x("number"===typeof e.x)
x("number"===typeof e.y)
x(e.imgs||e.img&&e.img.draw)
e.z=e.z||G.UI
e.w=e.w||Pe.button_height
e.h=e.h||e.w||Pe.button_height
e.shrink=e.shrink||.75
var t=buttonShared(e)
var r=t.ret
buttonImageDraw(e,t.state,t.focused)
profilerStop("buttonImage")
return r?t:null}function button(e){if(e.img&&!e.text)return buttonImage(e)
else if(e.text&&!e.img)return buttonText(e)
profilerStart("button")
x("number"===typeof e.x)
x("number"===typeof e.y)
x(e.img&&e.img.draw)
e.z=e.z||G.UI
e.h=e.h||Pe.button_height
e.w=e.w||Pe.button_width
e.shrink=e.shrink||.75
e.left_align=true
e.font_height=e.font_height||(e.style||Pe).text_height
var t=buttonShared(e)
var r=t.ret,a=t.state,i=t.focused
buttonImageDraw(e,a,i)
var n=e.no_bg
var o=e.w
var s=e.x
e.no_bg=true
e.x+=e.h*e.shrink
e.w-=e.h*e.shrink
buttonTextDraw(e,a,i)
e.no_bg=n
e.w=o
e.x=s
profilerStop("button")
return r?t:null}function print(e,t,r,a,i){return Qe.drawSized(e,t,r,a,Pe.text_height,i)}function label(e){profilerStart("label")
var t=e.font_style,r=e.font_style_focused,a=e.x,i=e.y,n=e.align,o=e.w,s=e.h,l=e.text,u=e.tooltip,f=e.tooltip_above,c=e.tooltip_right
if(e.style)x(!e.style.color)
l=g(l)
var d=e.font||Qe
var v=e.z||G.UI
var p=e.style||Pe
var h=e.size||p.text_height
x(isFinite(a))
x(isFinite(i))
x.equal(typeof l,"string")
if(u){if(!o){o=d.getStringWidth(t,h,l)
if(n&m.HRIGHT)a-=o
else if(n&m.HCENTER)a-=o/2}if(!s){s=h
if(n&m.VBOTTOM)i-=s
else if(n&m.VCENTER)i-=s/2}x(isFinite(o))
x(isFinite(s))
if(D({x:a,y:i,w:o,h:s,tooltip:u,tooltip_width:e.tooltip_width,tooltip_above:f,tooltip_right:c,def:k}).focused&&L())if(r)t=r
else drawElipse(a-.25*o,i-.25*s,a+1.25*o,i+1.25*s,v-.001,.5,Re)}var _=0
if(l)if(n)_=d.drawSizedAligned(t,a,i,v,h,n,o,s,l)
else _=d.drawSized(t,a,i,v,h,l)
profilerStop("label")
return o||_}function modalDialog(e){e.title=g(e.title)
e.text=""+(g(e.text)||"")
x(!e.title||"string"===typeof e.title)
x(!e.text||"string"===typeof e.text)
x(!e.buttons||"object"===typeof e.buttons)
if(e.buttons)for(var t in e.buttons)if("object"!==typeof e.buttons[t])e.buttons[t]={cb:e.buttons[t]}
st=e}function modalDialogClear(){st=null}var kt=Se(24,24)
var Ct=Se()
function modalDialogRun(){K.domDeltaToVirtual(Ct,kt)
var e=false
var t=st.font_height||(st.style||Pe).text_height
var r=Pe.button_height
var a=He
var i=.5*He
var n=1
var o=true
var s
if(!st.no_fullscreen_zoom&&Ct[0]>.05*K.h()&&K.w()>2*K.h()){e=true
r=t
i=a=4
var l=K.h()
K.push()
for(s=1;;s++){K.setAspectFixed2(1,t*(ze+1+s)+4.5*a)
n=K.h()/l
if(!st.text)break
var u=K.x1()-K.x0()-2*a
if(Qe.numLines(Xe,u,0,t,st.text)<=s)break}}var f=st,c=f.buttons,d=f.click_anywhere
var v=Object.keys(c||{})
var p=K.x1()-K.x0()
var h=e?p:st.width||Be
var _=st.button_width||je
_=Q(_,2*h/3/v.length)
var m=h-2*a
var g=K.x0()+$((p-h)/2)
var y=g+a
var w=e?0:st.y0||Ge
var b=$(w+a)
if(st.title){if(e){$e.drawSizedAligned(Xe,y,b,G.MODAL,t*ze,J.ALIGN.HFIT,m,0,st.title)
b+=t*ze}else b+=$e.drawSizedWrapped(Xe,y,b,G.MODAL,m,0,t*ze,st.title)
b=$(b+1.5*i)}if(st.text||e){if(e){if(st.text)Qe.drawSizedAligned(Xe,y,b,G.MODAL,t,J.ALIGN.HWRAP,m,0,st.text)
b+=t*s}else b+=Qe.drawSizedWrapped(Xe,y,b,G.MODAL,m,0,t,st.text)
b=$(b+i)}var x=st.color||null
var S
if(st.tick){var E=h-2*a
if(e)E-=(a+_)*v.length
var T={x0:g,y0:w,x:y,y:b,modal_width:h,avail_width:E,font_height:t,fullscreen_mode:e}
S=st.tick(T)
b=T.y}y=g+h-(a+_)*v.length
var A=-1
for(var R=0;R<v.length;++R){var k=v[R]
var C=k.toLowerCase()
var I=c[k]=c[k]||{}
var P=vt[C]
var F=0
if(P){for(var D=0;D<P.key.length;++D){F+=z.keyUpEdge(P.key[D],I.in_event_cb)
if(P.key[D]===S)F++}for(var N=0;N<P.pad.length;++N)F+=z.padButtonUpEdge(P.pad[N])}if(d&&0===R&&z.click())++F
if(F)A=R
var O=I.label||ht[C]||k
if(button(pe({key:"md_"+k,x:y,y:b,z:G.MODAL,w:_,h:r,text:O,auto_focus:0===R,focus_steal:1===v.length&&!st.tick},I)))A=R
y=$(y+a+_)}if(-1===A)for(var L=0;L<v.length;++L){var U=v[L]
var M=vt[U.toLowerCase()]
if(M&&M.low_key)for(var j=0;j<M.low_key.length;++j)if(z.keyUpEdge(M.low_key[j],c[U].in_event_cb)||M.low_key[j]===S)A=L}if(-1!==A){var B=v[A]
playUISound("button_click")
st=null
if(c[B].cb)c[B].cb()
o=false}if(v.length>0)b+=r
b=$(b+i+a)
panel({x:g,y:w,z:G.MODAL-1,w:h,h:(e?K.y1():b)-w,pixel_scale:Ve*n,color:x})
if(z.pointerLocked()&&o)z.pointerLockExit()
z.eatAllInput()
if(e)K.pop()}function modalTextEntry(a){var i=o({initial_focus:true,spellcheck:false,initial_select:true,text:a.edit_text,max_len:a.max_len,esc_clears:false})
var e={}
for(var t in a.buttons){var r=a.buttons[t]
if(null!==r&&"object"===typeof r&&"cb"in r)r=a.buttons[t].cb
if("function"===typeof r)r=function(e){return function(){e(i.getText())}}(r)
e[t]=pe({cb:r},a.buttons[t])}a.buttons=e
a.text=""+(a.text||"")
var n=a.tick
a.tick=function(e){var t=i.run({x:e.x,y:e.y,w:e.avail_width||a.edit_w,font_height:e.font_height})
if(!e.fullscreen_mode)e.y+=e.font_height+He
var r
if(t===i.SUBMIT)r=Ce.O
else if(t===i.CANCEL)r=Ce.ESC
if(n)r=n(e)||r
return r}
modalDialog(a)}function createEditBox(e){return o(e)}var It=0
function isMenuUp(){return st||lt}function releaseOldUIElemData(){for(var e in Le){var t=Le[e]
var r=false
for(var a in t)if(t[a].frame_index<Z.frame_index-1)delete t[a]
else r=true
if(!r)delete Le[e]}}function uiTick(e){wt[Z.frame_index%wt.length]=0
releaseOldUIElemData()
l()
v()
xt=dt=0
var t=false
if(st||lt){var r=ut
if(!lt)r=Fe
ft+=e
if(Z.postprocessing&&!Z.defines.NOPP){var a=Q(ft/500,1)
if(a<1)Z.renderNeeded()
var i=_e(a,r.blur[0],r.blur[1])
if(i)u(r.z-2,doBlurEffect.bind(null,i))
var n=_e(a,r.saturation[0],r.saturation[1])
var o=_e(a,r.brightness[0],r.brightness[1])
if(1!==n||1!==o)u(r.z-1,doDesaturateEffect.bind(null,n,o))
t=true}else et.white.draw({x:K.x0Real(),y:K.y0Real(),z:r.z-2,color:r.fallback_darken,w:K.wReal(),h:K.hReal()})}else ft=0
s.menu_up=lt=false
if(!Z.is_loading&&Z.getFrameDtActual()>50&&t){if((It=(It||0)+1)>=6)Z.postprocessingAllow(false)}else if(It)It=0
M()
fe()
if(st)modalDialogRun()}function uiEndFrame(){N()
if(z.click({x:-Infinity,y:-Infinity,w:Infinity,h:Infinity}))j()
while(dt<ct.length){var e=ct.pop()
yt.removeChild(e)}}function cleanupDOMElems(){while(ct.length){var e=ct.pop()
yt.removeChild(e)}}function menuUp(e){me(ut,Fe)
if(e)me(ut,e)
s.menu_up=lt=true
z.eatAllInput()}function copyTextToClipboard(e){var t=document.createElement("textarea")
t.style.position="fixed"
t.style.top=0
t.style.left=0
t.style.width="2em"
t.style.height="2em"
t.style.border="none"
t.style.outline="none"
t.style.boxShadow="none"
t.style.background="transparent"
t.value=e
document.body.appendChild(t)
t.focus()
t.select()
var r=false
try{r=document.execCommand("copy")}catch(e){}document.body.removeChild(t)
return r}function provideUserString(e,t){var r=copyTextToClipboard(t)
modalTextEntry({edit_w:400,edit_text:t.replace(/[\n\r]/g," "),title:e,text:r?_t:mt,buttons:{ok:null}})}var Pt={}
function drawRect(e,t,r,a,i,n){var o=Q(e,r)
var s=Q(t,a)
var l=S(e,r)
var u=S(t,a)
Pt.x=o
Pt.y=s
Pt.z=i
Pt.w=l-o
Pt.h=u-s
Pt.color=n
return et.white.draw(Pt)}function drawRect2(e){return et.white.draw(e)}var Ft={}
function drawRect4Color(e,t,r,a,i,n,o,s,l){var u=Q(e,r)
var f=Q(t,a)
var c=S(e,r)
var d=S(t,a)
Ft.x=u
Ft.y=f
Ft.z=i
Ft.w=c-u
Ft.h=d-f
Ft.color_ul=n
Ft.color_ll=s
Ft.color_lr=l
Ft.color_ur=o
return et.white.draw4Color(Ft)}function spreadTechParams(e){e=Q(S(e,0),.99)
var t={param0:Ee(0,0,0,0)}
t.param0[0]=1/(1-e)
t.param0[1]=-.5*t.param0[0]+.5
return t}var Dt=Ee()
function premulAlphaColor(e){Dt[0]=e[0]*e[3]
Dt[1]=e[1]*e[3]
Dt[2]=e[2]*e[3]
Dt[3]=e[3]
return Dt}function drawElipseInternal(e,t,r,a,i,n,o,s,l,u,f,c,d){if(!d&&!Z.defines.NOPREMUL){d=re
c=premulAlphaColor(c)}te.queueraw(e.texs,t,r,n,a-t,i-r,s,l,u,f,c,J.font_shaders.font_aa,spreadTechParams(o),d)}function drawCircleInternal(e,t,r,a,i,n,o,s,l,u,f,c){drawElipseInternal(e,t-2*i+4*i*o,r-2*i+4*i*s,t-2*i+4*i*l,r-2*i+4*i*u,a,n,o,s,l,u,f,c)}function initCircleSprite(){var e=32
var t=new Uint8Array(e*e)
var r=(e-1)/2
for(var a=0;a<e;a++)for(var i=0;i<e;i++){var n=ee((a-r)*(a-r)+(i-r)*(i-r))/r
var o=de(1-n,0,1)
t[a+i*e]=255*o}et.circle=ne({url:"circle",width:e,height:e,format:oe.R8,data:t,filter_min:gl.LINEAR,filter_mag:gl.LINEAR,wrap_s:gl.CLAMP_TO_EDGE,wrap_t:gl.CLAMP_TO_EDGE,origin:Se(.5,.5)})}function drawElipse(e,t,r,a,i,n,o,s){if(!et.circle)initCircleSprite()
drawElipseInternal(et.circle,e,t,r,a,i,n,0,0,1,1,o,s)}function drawCircle(e,t,r,a,i,n,o){if(!et.circle)initCircleSprite()
drawCircleInternal(et.circle,e,t,r,a,i,0,0,1,1,n,o)}function drawHollowCircle(e,t,r,a,i,n,o){if(!et.hollow_circle){var s=128
var l=2
var u=new Uint8Array(s*s)
var f=(s-1)/2
for(var c=0;c<s;c++)for(var d=0;d<s;d++){var v=ee((c-f)*(c-f)+(d-f)*(d-f))/f
var p=de(1-v,0,1)
if(p>.5)p=1-p
p+=l/s
u[c+d*s]=255*p}et.hollow_circle=ne({url:"hollow_circle",width:s,height:s,format:oe.R8,data:u,filter_min:gl.LINEAR,filter_mag:gl.LINEAR,wrap_s:gl.CLAMP_TO_EDGE,wrap_t:gl.CLAMP_TO_EDGE,origin:Se(.5,.5)})}drawCircleInternal(et.hollow_circle,e,t,r,a,i,0,0,1,1,n,o)}var Nt=16
var Ot=16
var Lt=p((Ot-1)/2)
var Ut=.5/Ot
var Mt=1-1.5/Ot
var jt=.5/Nt
var Bt=(Lt+.5)/Nt
var Gt=1-Bt
var zt=1-.5/Nt
var Ht={param0:[0,0]}
function drawLine(e,t,r,a,i,n,o,s,l){if(void 0===l)l=pt
var u
if(!Z.defines.NOPREMUL){u=re
s=premulAlphaColor(s)}var f=l&Y?"line3":"line2"
if(!et[f]){var c=new Uint8Array(Nt*Ot)
var d=Lt
var v=Nt-1-Lt
if("line2"===f)for(var p=0;p<Ot;p++){var h=X((p-Lt)/Lt)
var _=$(255*de(1-h,0,1))
for(var m=0;m<Nt;m++){var g=$(255*de(h=m<d?m/Lt:m>=v?1-(m-v)/Lt:1,0,1))
c[m+p*Nt]=Q(g,_)}}else for(var y=0;y<Ot;y++){var w=X((y-Lt)/Lt)
for(var b=0;b<Nt;b++){var x=b<d?1-b/Lt:b>=v?(b-v)/Lt:0
var S=ee(x*x+w*w)
S=de(1-S,0,1)
c[b+y*Nt]=$(255*S)}}et[f]=ne({url:f,width:Nt,height:Ot,format:oe.R8,data:c,filter_min:gl.LINEAR,filter_mag:gl.LINEAR,wrap_s:gl.CLAMP_TO_EDGE,wrap_t:gl.CLAMP_TO_EDGE})}var E=et[f].texs
var T=.5*(K.data[4]+K.data[5])
var A=n*T
var R=A+4
var k=.5*R
var C=k*(1/T)
var I=r-e
var P=a-t
var F=ee(I*I+P*P)
var D=-(P/=F)*C
var N=(I/=F)*C
if(l&W){var O=(t-K.data[1])*K.data[5]
var L=($(O-k)+k-O)/K.data[5]
t+=L
a+=L
var U=(e-K.data[0])*K.data[4]
var M=($(U-k)+k-U)/K.data[4]
e+=M
r+=M}var j=1-(A+1)/R
var B=1/(1+o*(j+2/R-1)-j)
var G=-j*B
var z
if(Ht.param0[0]!==B||Ht.param0[1]!==G)Ht={param0:[B,G]}
z=Ht
te.queueraw4(E,r+D,a+N,r-D,a-N,e-D,t-N,e+D,t+N,i,Bt,Ut,Gt,Mt,s,J.font_shaders.font_aa,z,u)
if(l&(Y|q)){var H=I*n/2
var V=P*n/2
te.queueraw4(E,r-D,a-N,r+D,a+N,r+D+H,a+N+V,r-D+H,a-N+V,i,Gt,Mt,zt,Ut,s,J.font_shaders.font_aa,z,u)
te.queueraw4(E,e-D,t-N,e+D,t+N,e+D-H,t+N-V,e-D-H,t-N-V,i,Bt,Mt,jt,Ut,s,J.font_shaders.font_aa,z,u)}}function drawHollowRect(e,t,r,a,i,n,o,s,l){drawLine(e,t,r,t,i,n,o,s,l)
drawLine(r,t,r,a,i,n,o,s,l)
drawLine(r,a,e,a,i,n,o,s,l)
drawLine(e,a,e,t,i,n,o,s,l)}function drawHollowRect2(e){drawHollowRect(e.x,e.y,e.x+e.w,e.y+e.h,e.z||G.UI,e.line_width||1,e.precise||1,e.color||Re)}function drawCone(e,t,r,a,i,n,o,s,l){var u
if(!Z.defines.NOPREMUL){u=re
l=premulAlphaColor(l)}if(!et.cone){var f=32
var c=new Uint8Array(f*f)
var d=(f-1)/2
for(var v=0;v<f;v++)for(var p=0;p<f;p++){var h=0
var _=0
var m=0
if(v>d){h=(v-d)/d
_=X(p-d)/d
m=h*ee(h*h+_*_)}var g=de(1-m,0,1)
c[v+p*f]=255*g}et.cone=ne({url:"cone",width:f,height:f,format:oe.R8,data:c,filter_min:gl.LINEAR,filter_mag:gl.LINEAR,wrap_s:gl.CLAMP_TO_EDGE,wrap_t:gl.CLAMP_TO_EDGE,origin:Se(.5,.5)})}var y=r-e
var w=a-t
var b=ee(y*y+w*w)
var x=-(w/=b)
var S=y/=b
te.queueraw4(et.cone.texs,e-x*n,t-S*n,e+x*n,t+S*n,r+x*o,a+S*o,r-x*o,a-S*o,i,0,0,1,1,l,J.font_shaders.font_aa,spreadTechParams(s),u)}function setFontHeight(e){ue(le(),{text_height:e})}function uiApplyStyle(e){Pe=e
s.font_height=e.text_height
s.button_width=e.button_width
s.button_height=e.button_height
f(e.text_height)}function scaleSizes(e){var t=$(32*e)
var r=$(24*e)
var a=$(200*e)
s.modal_button_width=je=$(a/2)
s.modal_width=Be=$(600*e)
s.modal_y0=Ge=$(200*e)
s.modal_title_scale=ze=1.2
s.modal_pad=He=$(16*e)
s.tooltip_width=qe=$(400*e)
s.tooltip_pad=Ye=$(8*e)
s.panel_pixel_scale=Ve=t/et.panel.uidata.total_h
s.tooltip_panel_pixel_scale=We=Ve
h(t/et.button.uidata.total_h)
ue(le(),{text_height:r,button_width:a,button_height:t})}function setPanelPixelScale(e){s.tooltip_panel_pixel_scale=We=s.panel_pixel_scale=Ve=e}function setModalSizes(e,t,r,a,i){s.modal_button_width=je=e||$(Pe.button_width/2)
s.modal_width=Be=t||600
s.modal_y0=Ge=r||200
s.modal_title_scale=ze=a||1.2
s.modal_pad=He=i||He}function setTooltipWidth(e,t){s.tooltip_width=qe=e
s.tooltip_panel_pixel_scale=We=t
s.tooltip_pad=Ye=$(He/2*t)}},{"../common/util.js":92,"../common/vmath.js":94,"./camera2d.js":13,"./edit_box.js":17,"./effects.js":18,"./engine.js":19,"./font.js":25,"./input.js":34,"./link.js":36,"./localization.js":38,"./mat43.js":39,"./scroll_area.js":53,"./slider.js":57,"./sound.js":59,"./spot.js":60,"./sprites.js":63,"./textures.js":65,"./uistyle.js":68,assert:void 0}],68:[function(e,t,r){"use strict"
r.uiStyleAlloc=uiStyleAlloc
r.uiStyleCurrent=uiStyleCurrent
r.uiStyleDefault=uiStyleDefault
r.uiStyleModify=uiStyleModify
r.uiStylePop=uiStylePop
r.uiStylePush=uiStylePush
r.uiStyleSetCurrent=uiStyleSetCurrent
r.uiStyleTopOfFrame=uiStyleTopOfFrame
var d=e("assert")
var u=e("../common/util").tail
var a=e("../common/verify")
var f=e("./ui").internal.uiApplyStyle
var i={text_height:24,button_width:200,button_height:32}
var n
var c
var s=function UIStyleImpl(e){this.id_chain=void 0
this.text_height=void 0
this.button_width=void 0
this.button_height=void 0
this.id_chain=e}
var v=Object.create(null)
var l=0
v.default={def:i,deps:[]}
function uiStyleCompute(e){var t=e.id_chain
var r
var a
var i
for(var n=0;n<t.length;++n){var o=t[n]
var s=v[o]
d(s)
var l=s.def.text_height
if(void 0!==l)if("string"===typeof l){var u=l.match(/^(\d+)%$/)
d(u)
r*=Number(u[1])/100}else{d.equal(typeof l,"number")
r=l}if(void 0!==(l=s.def.button_width))if("string"===typeof l){var f=l.match(/^(\d+)%$/)
d(f)
a*=Number(f[1])/100}else{d.equal(typeof l,"number")
a=l}if(void 0!==(l=s.def.button_height))if("string"===typeof l){var c=l.match(/^(\d+)%$/)
d(c)
i*=Number(c[1])/100}else{d.equal(typeof l,"number")
i=l}if(0===n){d("number"===typeof r)
d("number"===typeof a)
d("number"===typeof i)}}e.text_height=r
e.button_width=a
e.button_height=i}function uiStyleModify(e,t){var r=u(e.id_chain)
d(r)
var a=v[r]
d(a)
var i=a.def
for(var n in t){var o=t[n]
if(void 0===o)delete i[n]
else i[n]=o}for(var s=0;s<a.deps.length;++s){var l=a.deps[s]
uiStyleCompute(l)
if(l===c)f(c)}}function uiStyleAlloc(){var e=[]
e.push("default")
for(var t=0;t<arguments.length;++t){var r=t<0||arguments.length<=t?void 0:arguments[t]
var a=void 0
if("string"===typeof r)d(v[a=r])
else{a="$"+ ++l+")"
v[a]={def:r,deps:[]}}e.push(a)}var i=new s(e)
uiStyleCompute(i)
for(var n=0;n<e.length;++n){var o=e[n]
v[o].deps.push(i)}return i}function uiStyleDefault(){return n}function uiStyleCurrent(){return c}function uiStyleSetCurrent(e){f(c=e)}uiStyleSetCurrent(n=uiStyleAlloc())
var o=[]
function uiStylePush(e){o.push(c)
uiStyleSetCurrent(e)}function uiStylePop(){var e=o.pop()
d(e)
uiStyleSetCurrent(e)}var p=false
function uiStyleTopOfFrame(){if(o.length){if(!p){p=true
a(!o.length,"Style stack push/pop mismatch")}o.length=0}}},{"../common/util":92,"../common/verify":93,"./ui":67,assert:void 0}],69:[function(e,t,r){"use strict"
r.TYPE_STRING=r.TYPE_SET=void 0
r.get=get
r.getURLBase=getURLBase
r.getURLPageBase=getURLPageBase
r.go=go
r.historyDeferUpdate=historyDeferUpdate
r.onChange=onChange
r.onURLChange=onURLChange
r.refreshTitle=refreshTitle
r.register=register
r.route=route
r.routeFixed=routeFixed
r.set=set
r.setMulti=setMulti
r.startup=startup
var u=e("assert")
var v=e("../common/util.js").callEach
var a=1e3
var m="set"
r.TYPE_SET=m
var i="string"
r.TYPE_STRING=i
var g={}
var y
var n=(document.location.href||"").match(/^[^#?]+/)[0]
var o=n.replace(/[^/]*$/,"")
var p=[]
function getURLBase(){return o}function getURLPageBase(){return n}function onChange(e){p.push(e)}function cmpNumKeys(e,t){var r=t.keys.length-e.keys.length
if(r)return r
for(var a=0;a<e.keys.length;++a)if(e.keys[a]<t.keys[a])return-1
else if(e.keys[a]>t.keys[a])return 1
u(false)
return 0}var w=/:(\w+)/g
var b=[]
function queryString(){var e=String(document.location)
if((e=e.slice(n.length)).includes("#"))e=e.slice(0,e.indexOf("#"))
return e}var f=/[^\w]\w+=([^&]+)/
function getValue(e,t){if(t.routes)for(var r=0;r<t.routes.length;++r){var a=t.routes[r]
var i=e.match(a.regex)
if(i){if(a.value)return a.value
return i[1+a.keys.indexOf(t.key)]}}var n=e.match(t.regex)||[]
if(t.type===m){var o={}
for(var s=0;s<n.length;++s){var l=n[s].match(f)
u(l)
o[l[1]]=1}return o}else return n[1]||t.def}var s=null
function goInternal(e){var t={}
for(var r in g){var a=g[r]
if(a.hides)if(getValue(e,a))for(var i in a.hides)t[i]=1}var n={}
for(var o in g){if(t[o])continue
var s=g[o]
var l=getValue(e,s)
if(s.type===m){for(var u in l)if(!s.value[u]){s.value[u]=1
n[o]=true}for(var f in s.value)if(!l[f]){delete s.value[f]
n[o]=true}}else if(l!==s.value){n[o]=true
s.value=l}}for(var c in n){var d=g[c]
if(d.change)d.change(d.value)}v(p)}var x
function toString(){x=""
var e=[]
var r={}
for(var t in g){var a=g[t]
if(a.hides&&a.value)for(var i in a.hides)r[i]=1}var n=""
e:for(var o=0;o<b.length;++o){var s=b[o]
var l=""
for(var u=0;u<s.keys.length;++u){var f=s.keys[u]
if(r[f])continue e
var c=g[f]
if(c.hide_values[c.value])continue e
if(!l&&c.title)l=c.title(c.value)}for(var d=0;d<s.keys.length;++d){var v=s.keys[d]
if(g[v].route_only)r[v]=true}n=s.route_string.replace(w,function(e,t){r[t]=true
return String(g[t].value)})
if(!x&&l)x=l
break}for(var p in g){if(r[p])continue
var h=g[p]
if(h.type===m)for(var _ in h.value)e.push(p+"="+_)
else if(!h.hide_values[h.value]){e.push(p+"="+h.value)
if(!x&&h.title)x=h.title(h.value)}}if(y)x=y(x)
x=String(x)
return n+(e.length?"?":"")+e.join("&")}function refreshTitle(){toString()
if(x&&x!==document.title)document.title=x}function periodicRefreshTitle(){profilerStart("periodicRefreshTitle")
refreshTitle()
setTimeout(periodicRefreshTitle,1e3)
profilerStop()}function onPopState(){var e=queryString()
goInternal(s=e)
refreshTitle()}var l
function onURLChange(e){l=e}var c=false
function historyDeferUpdate(e){c=e}var d=0
var h=false
var _=false
function updateHistoryCommit(){profilerStart("updateHistoryCommit")
if(c){setTimeout(updateHistoryCommit,1e3)
return void profilerStop()}h=false
d=Date.now()
var e=""
if(!n.endsWith("/")&&s&&!s.startsWith("?"))e="?"
var t=""+n+e+s
if(t.endsWith("?"))t=t.slice(0,-1)
try{if(_){_=false
window.history.pushState(void 0,x,t)}else window.history.replaceState(void 0,x,t)}catch(e){}if(x)document.title=x
if(l)l()
profilerStop()}function updateHistory(e){var t=toString()
if(s===t)return
_=_||e
s=t
if(h)return
var r=a
if(Date.now()-d>a)r=1
h=true
setTimeout(updateHistoryCommit,r)}function startup(e){u(!y)
if(!(y=e.title_transformer)&&(e.title_suffix||e.title_default)){var t=e.title_suffix,r=e.title_default
y=function title_transformer(e){if(t&&e)return e+" | "+t
return e||r||t}}updateHistory(false)
if(y){refreshTitle()
setTimeout(periodicRefreshTitle,1e3)}}function routeEx(e){var t=e.keys
for(var r=0;r<t.length;++r){var a=g[t[r]]
u(a)
a.routes=a.routes||[]
a.routes.push(e)
a.value=getValue(queryString(),a)}b.push(e)
b.sort(cmpNumKeys)}function route(e){var r=[]
var t=e.replace(w,function(e,t){r.push(t)
return"([^/&?]+)"})
routeEx({route_string:e,regex:new RegExp("^\\??"+t+"(?:$|\\?|#)"),keys:r})}function routeFixed(e,t){routeEx({route_string:e,regex:new RegExp("^\\??"+e+"(?:$|\\?|#)"),value:"1",keys:[t]})}function register(e){u(e.key)
u(!g[e.key])
e.type=e.type||i
var t="(?:[^\\w])"+e.key+"=([^&#]+)"
var r=""
if(e.type===m)r="g"
else{e.def=e.def||""
e.hide_values=e.hide_values||{}
e.hide_values[e.def]=true}e.regex=new RegExp(t,r);(g[e.key]=e).value=getValue(queryString(),e)
var a=e.value
if(e.type===m&&"function"===typeof Proxy)a=new Proxy(e.value,{set:function set(e,t,r){if(r)e[t]=1
else delete e[t]
updateHistory()
return true}})
if(!window.onpopstate)window.onpopstate=onPopState
return a}function set(e,t,r){var a=g[e]
u(a)
if(a.type===m){if(Boolean(a.value[t])!==Boolean(r)){a.value[t]=r?1:0
updateHistory(a.push)}}else if(a.value!==t){a.value=t
updateHistory(a.push)}}function setMulti(e){var t=false
var r=false
for(var a in e){var i=e[a]
var n=g[a]
u(n)
u(n.type!==m)
if(n.value!==i){n.value=i
t=true
r=r||n.push}}if(t)updateHistory(r)}function get(e){var t=g[e]
u(t)
return t.value}function go(e){goInternal(e)
updateHistory(true)}},{"../common/util.js":92,assert:void 0}],70:[function(e,t,r){"use strict"
var a=e("../common/util").msToSS2020
var i=Math.min
var n=0
function now(){return Date.now()+n}t.exports=r=now
r.now=now
var o=true
r.sync=function(e){if(o)n=e-Date.now()
else n=i(n,e-Date.now())}
r.seconds=function(){return a(now())}},{"../common/util":92}],71:[function(e,t,r){"use strict"
r.webFSAPI=webFSAPI
r.webFSApplyReload=webFSApplyReload
r.webFSExists=webFSExists
r.webFSGetData=webFSGetData
r.webFSGetFile=webFSGetFile
r.webFSGetFileNames=webFSGetFileNames
r.webFSOnReady=webFSOnReady
r.webFSReportUnused=webFSReportUnused
r.webFSSetToWorkerCB=webFSSetToWorkerCB
r.webFSStartup=webFSStartup
var s=e("assert")
var a=e("../common/util")
var i=a.callEach
var n=a.clone
var o=a.deepEqual
var l=e("./filewatch")
var u=l.filewatchOn
var f=l.filewatchTriggerChange
var c
var d={}
var v={}
var p=false
var h=[]
function webFSOnReady(e){if(c)e()
else h.push(e)}function decode(e){var t=e[0]
var r=e[1]
var a=new Uint8Array(t)
var i=0
var n=0
while(i<t){var o=r.charCodeAt(n++)
if(126===o)o=0
else if(27===o)o=r.charCodeAt(n++)
a[i++]=o}s.equal(n,r.length)
s.equal(i,t)
return a}function webFSGetFileNames(e){s(c)
var t=[]
for(var r in c)if(r.startsWith(e))t.push(r)
return t}function webFSGetFile(e,t){s(c)
var r=d[e]
if(r)return r
v[e]=true
var a=c[e]
s(a,"Error loading file: "+e)
if("jsobj"===t){s(!Array.isArray(a)||!(2===a.length&&"number"===typeof a[0]&&"string"===typeof a[1]))
r=p?n(a):a}else{s(Array.isArray(a))
if("text"===t)r=a[1]
else r=decode(a)}return d[e]=r}function webFSExists(e){s(c)
return Boolean(c[e])}function webFSReportUnused(e){e=e||/\.(fp|vp)$/
var t=0
for(var r in c)if(!v[r]&&!r.match(e)){console.warn("WebFS file bundled but unreferenced: "+r)
t+=c[r][0]}if(t)console.warn("WebFS wasting "+t+" bytes")}var _
function webFSSetToWorkerCB(e){_=e}function webFSGetData(){return c}function webFSApplyReload(e){var t=c
c=e
if(_)_(c)
d={}
v={}
for(var r in c){var a=t[r]
var i=c[r]
if(Array.isArray(a)){for(var n=0;n<i.length;++n)if(!a||i[n]!==a[n]){f(r)
break}}else if(!o(a,i))f(r)}}var m
function webFSReload(){p=true
window.glov_webfs=null
var e=document.createElement("script")
e.src=m+"fsdata.js?rl="+Date.now()
e.onload=function(){if(window.glov_webfs)webFSApplyReload(window.glov_webfs)}
document.head.appendChild(e)}function webFSStartup(e,t){c=e||{}
if(t){m=t
u("fsdata.js",webFSReload)}if(_)_(c)
i(h,h=null)}function webFSAPI(){return{getFileNames:webFSGetFileNames,getFile:webFSGetFile,filewatchOn:u}}},{"../common/util":92,"./filewatch":24,assert:void 0}],72:[function(e,t,r){"use strict"
r.profanityFilter=profanityFilter
r.profanityStartup=profanityStartup
r.profanityStartupLate=profanityStartupLate
var a=e("../font").fontSetReplacementChars
var i=e("../rand_fast").randFastCreate
var n=e("../urlhash").getURLBase
var o=e("../webfs").webFSGetFile
var s=e("../../common/rand_alea").mashString
var l=e("../../common/words/profanity_common")
var u=l.profanityCommonStartup
var f=l.profanityFilterCommon
var c=l.profanitySetReplacementChars
var d
function profanityStartup(){d=o("words/replacements.txt","text").split("\n").filter(function(e){return e})
u(o("words/filter.gkg","text"),o("words/exceptions.txt","text"))}function profanityStartupLate(){var e=document.createElement("script")
e.src=n()+"replacement_chars.min.js"
e.onload=function(){if(window.unicode_replacement_chars){c(window.unicode_replacement_chars)
a(window.unicode_replacement_chars)}}
document.getElementsByTagName("head")[0].appendChild(e)}var v=i()
var p
function randWord(){if(-1===p||1===d.length)p=v.range(d.length)
else{var e=v.range(d.length-1)
p=e<p?e:e+1}return d[p]}function profanityFilter(e){p=-1
v.seed=s(e)
return f(e,randWord)}},{"../../common/rand_alea":89,"../../common/words/profanity_common":95,"../font":25,"../rand_fast":50,"../urlhash":69,"../webfs":71}],73:[function(e,t,r){"use strict"
r.ERR_RESTARTING=r.ERR_CONNECTING=r.ERR_CLIENT_VERSION_OLD=r.ERR_CLIENT_VERSION_NEW=void 0
r.WSClient=WSClient
r.wsclientSetExtraParam=wsclientSetExtraParam
var a=e("./environments")
var u=a.getAPIPath
var f=a.setCurrentEnvironment
var o=e("../common/ack.js")
var i=o.ackInitReceiver
var n=e("../common/verify.js")
var c=e("assert")
var s=e("./error_report.js"),l=s.errorReportSetDetails,d=s.session_uid
var v=e("./fetch.js"),p=v.ERR_CONNECTION,h=v.fetch,_=v.fetchDelaySet
var m=Math.min,g=Math.random
var y=e("../common/perfcounters.js").perfCounterAdd
var w=e("./urlhash.js")
var b=e("../common/wscommon.js")
var x=b.netDelaySet,S=b.wsHandleMessage
var E=e("./client_config.js"),T=E.platformGetID,A=E.getAbilityReloadUpdates
var R="ERR_CONNECTING"
r.ERR_CONNECTING=R
var k="ERR_RESTARTING"
r.ERR_RESTARTING=k
var C="ERR_CLIENT_VERSION_NEW"
r.ERR_CLIENT_VERSION_NEW=C
var I="ERR_CLIENT_VERSION_OLD"
r.ERR_CLIENT_VERSION_OLD=I
r.CURRENT_VERSION=0
function WSClient(e,t){this.id=null
this.my_ids={}
this.handlers={}
this.socket=null
this.net_delayer=null
this.connected=false
this.disconnected=false
this.retry_scheduled=false
this.retry_count=0
this.retry_extra_delay=0
this.disconnect_time=Date.now()
this.last_receive_time=Date.now()
this.idle_counter=0
this.last_send_time=Date.now()
this.connect_error=R
this.update_available=false
this.client_app=t||"app"
i(this)
if(e)this.path=e
this.connect(false)
this.onMsg("cack",this.onConnectAck.bind(this))
this.onMsg("build",this.onBuildChange.bind(this))
this.onMsg("error",this.onError.bind(this))}WSClient.prototype.logPacketDispatch=function(e,t,r,a){y("ws."+a)}
WSClient.prototype.timeSinceDisconnect=function(){return Date.now()-this.disconnect_time}
function getVersionUrlParams(){return"plat="+T()+"&ver="+r.CURRENT_VERSION+"&build=1702144435110"}function jsonParseResponse(e){if(!e)return null
if("<"===e.trim()[0])return null
try{return JSON.parse(e)}catch(e){return null}}function whenServerReady(a){var i=0
function doit(){h({url:u()+"ready?"+getVersionUrlParams()},function(e,t){if(e){var r=jsonParseResponse(t)
if("ERR_CLIENT_VERSION_OLD"!==(null==r?void 0:r.status)){++i
setTimeout(doit,m(i*i*100,15e3)*(.75+.5*g()))
return}}a()})}doit()}WSClient.prototype.onBuildChange=function(e){if(e.app!==this.client_app)return
this.onBuildTimestamp(e.ver)}
WSClient.prototype.onBuildTimestamp=function(e){if("1702144435110"!==e)if(this.on_build_timestamp_mismatch)this.on_build_timestamp_mismatch()
else if(A()){console.error("App build mismatch (server: "+e+", client: 1702144435110), reloading")
whenServerReady(function(){if(window.reloadSafe)window.reloadSafe()
else document.location.reload()})}else console.warn("App build mismatch (server: "+e+", client: 1702144435110), ignoring")}
WSClient.prototype.onConnectAck=function(e,t){var r=this
r.connected=true
r.connect_error=null
r.disconnected=false
r.id=e.id
r.my_ids[e.id]=true
l("client_id",r.id)
r.secret=e.secret
if(e.build)r.onBuildTimestamp(e.build)
if(e.net_delay){x(e.net_delay[0],e.net_delay[1])
_(e.net_delay[0],e.net_delay[1])}c(r.handlers.connect)
e.client_id=r.id
r.handlers.connect(r,e)
t()}
WSClient.prototype.pak=function(e,t){return b.wsPak(e,null,this,t)}
WSClient.prototype.send=function(e,t,r,a){if(!n("function"!==typeof r)){a=r
r=null}b.sendMessage.call(this,e,t,r,a)}
WSClient.prototype.onError=function(e){console.error("WSClient Error")
console.error(e)
if(!(e instanceof Error))e=new Error(e)
throw e}
WSClient.prototype.onMsg=function(e,a){c.ok(!this.handlers[e])
this.handlers[e]=function wrappedCallback(e,t,r){return a(t,r)}}
WSClient.prototype.checkForNewAppBuild=function(){var r=this
if(!A())return
if(this.new_build_check_in_progress)return
this.new_build_check_in_progress=true
h({url:w.getURLBase()+"app.ver.json",response_type:"json"},function(e,t){r.new_build_check_in_progress=false
if(t&&t.ver)r.onBuildTimestamp(t.ver)
if(e&&e!==p)if(!r.delayed_recheck){r.delayed_recheck=true
setTimeout(function(){r.delayed_recheck=false
r.checkForNewAppBuild()},1e3)}})}
WSClient.prototype.retryConnection=function(){var e=this
c(!e.socket)
c(!e.retry_scheduled)
e.retry_scheduled=true;++e.retry_count
this.checkForNewAppBuild()
setTimeout(function(){c(e.retry_scheduled)
c(!e.socket)
e.retry_scheduled=false
e.connect(true)},m(e.retry_count*e.retry_count*100,15e3)*(.75+.5*g())+this.retry_extra_delay)
this.retry_extra_delay=0}
WSClient.prototype.checkDisconnect=function(){if(this.connected&&1!==this.socket.readyState){this.on_close()
c(!this.connected)}}
WSClient.prototype.connect=function(o){var s=this
var l=this
l.socket={readyState:0}
c(!this.ready_check_in_progress)
this.ready_check_in_progress=true
h({url:u()+"ready?"+getVersionUrlParams()},function(e,t){var r=jsonParseResponse(t)
var a=null==r?void 0:r.status
var i=null==r?void 0:r.redirect_environment
s.update_available=null==r?void 0:r.update_available
var n=s.update_available&&A()
c(s.ready_check_in_progress)
s.ready_check_in_progress=false
s.connect_error=R
if(!e&&!i&&!n){if(s.update_available);return void s.connectAfterReady(o)}console.log("Server not ready, err="+e+", response="+t)
if("ERR_RESTARTING"===a||"ERR_STARTUP"===a)l.connect_error=k
else if("ERR_CLIENT_VERSION_NEW"===a)l.connect_error=C
else if("ERR_CLIENT_VERSION_OLD"===a)l.connect_error=I
if(i)f(i)
l.socket=null
l.net_delayer=null
s.retryConnection()})}
var P=""
var F={}
function wsclientSetExtraParam(e,t){if(!t)delete F[e]
else F[e]=t
var r=[]
for(var a in F)r.push(a+"="+F[a])
if(r.length)P="&"+r.join("&")
else P=""}WSClient.prototype.connectAfterReady=function(e){var t=this
var r=t.path||u().replace(/^http/,"ws").replace(/api\/$/,"ws")
r=r+"?"+getVersionUrlParams()+(e&&t.id&&t.secret?"&reconnect="+t.id+"&secret="+t.secret:"")+"&sesuid="+d+P
var a=new WebSocket(r)
a.binaryType="arraybuffer"
t.socket=a
function guard(e){return function(){if(t.socket!==a)return
e.apply(void 0,arguments)}}function abort(e){t.socket=null
t.net_delayer=null
if(t.connected){t.disconnect_time=Date.now()
t.disconnected=true
l("disconnected",1)}t.connected=false
t.connect_error=R
if(!e)try{a.close()}catch(e){}t.handlers.disconnect()
o.failAll(t)}function retry(e){abort(e)
t.retryConnection()}var i=false
t.socket.addEventListener("error",guard(function(e){if(!i){console.log("WebSocket error during initial connection, retrying...",e)
retry()}else console.error("WebSocket error",e)}))
t.socket.addEventListener("message",guard(function(e){profilerStart("WS")
c(e.data instanceof ArrayBuffer)
S(t,new Uint8Array(e.data))
profilerStop("WS")}))
t.socket.addEventListener("open",guard(function(){console.log("WebSocket open")
i=true
t.retry_count=0}))
t.on_close=guard(function(){console.log("WebSocket close, retrying connection...")
retry(true)})
t.socket.addEventListener("close",t.on_close)
var n=guard(function(){if(Date.now()-t.last_send_time>=b.PING_TIME&&t.connected&&1===t.socket.readyState)t.send("ping")
setTimeout(n,b.PING_TIME/2)})
setTimeout(n,b.PING_TIME/2)}},{"../common/ack.js":74,"../common/perfcounters.js":87,"../common/verify.js":93,"../common/wscommon.js":96,"./client_config.js":14,"./environments":20,"./error_report.js":21,"./fetch.js":23,"./urlhash.js":69,assert:void 0}],74:[function(e,t,r){"use strict"
r.ackHandleMessage=ackHandleMessage
r.ackInitReceiver=ackInitReceiver
r.ackReadHeader=ackReadHeader
r.ackWrapPakFinish=ackWrapPakFinish
r.ackWrapPakPayload=ackWrapPakPayload
r.ackWrapPakStart=ackWrapPakStart
r.failAll=failAll
var b=e("assert")
var a=e("./packet.js").isPacket
var x=e("./perfcounters.js").perfCounterAddValue
function ackInitReceiver(e){e.last_pak_id=0
e.resp_cbs={}
e.responses_waiting=0}var S="ERR_FAILALL_DISCONNECT"
var o=8
var s=16
var l=32
function ackWrapPakStart(e,t,r,a){var i=0
e.ack_data={receiver:t,msg_dbg_name:a||r}
if("number"===typeof r){i|=o
e.writeInt(r)}else e.writeAnsiString(r)
var n=t?++t.last_pak_id:0
e.ack_data.resp_pak_id=n
e.ack_data.resp_pak_id_offs=e.getOffset()
e.writeInt(n)
e.ack_data.data_offs=e.getOffset()
e.ack_data.flags=i}function ackWrapPakPayload(e,t){if(a(t))e.appendRemaining(t)
else{e.ack_data.flags|=l
e.writeJSON(t)}}function ackWrapPakFinish(e,t,r){var a=e.ack_data.flags
var i=e.getOffset()
if(t){b.equal(e.ack_data.data_offs,i)
a|=s
e.writeString(String(t))
i=e.getOffset()}e.makeReadable()
var n=0
if(r&&false!==r.expecting_response){n=e.ack_data.resp_pak_id
b(n)
b(e.ack_data.receiver)
b(e.ack_data.msg_dbg_name)
var o="ack."+e.ack_data.msg_dbg_name
e.ack_data.receiver.resp_cbs[n]={func:r,ack_name:o}}else{e.seek(e.ack_data.resp_pak_id_offs)
e.zeroInt()
e.seek(i)}e.updateFlags(a)
delete e.ack_data
return n}function ackReadHeader(e){var t=e.getFlags()
var r=t&o?e.readInt():e.readAnsiString()
var a=e.readInt()
var i=t&s?e.readString():void 0
var n
if(t&l)n=e.readJSON()
else n=e
return{msg:r,err:i,data:n,pak_id:a}}function failAll(e,t){t=t||S
var r=e.resp_cbs
e.resp_cbs={}
e.responses_waiting=0
for(var a in r)r[a].func(t)}function ackHandleMessage(a,e,t,i,n,r,o){var s=t.getOffset()
var l=ackReadHeader(t),u=l.err,f=l.data,c=l.msg,d=l.pak_id
if(a.logPacketDispatch){x("net.recv_bytes.total",t.totalSize())
var v
if("number"===typeof c){var p=a.resp_cbs[c]
b(!p||p.ack_name)
if(p&&p.ack_name)v=p.ack_name
else v="ack"}else v=c
x("net.recv_bytes."+v,t.totalSize())
a.logPacketDispatch(e,t,s,v)}var h=Date.now()
var _=Boolean(d)
var m
if(_)m="pending"
var g=false
var y=h
if(o&&!o(a,c,f))return
function preSendResp(e){b(!g,"Response function called twice")
g=true
if(_){if(m){if("pending"!==m)clearTimeout(m)}else if(e===S);else(a.log?a:console).log("Response finally sent for "+c+" after "+((Date.now()-y)/1e3).toFixed(1)+"s")
a.responses_waiting--}}function respFunc(e,t,r){preSendResp(e)
if(!_){if(r){a.onError("Sending a response to a packet ("+c+") that did not expect one, but we are expecting a response")
return}if(e)i("error",null,e,null)
return}i(d,e,t,r)}respFunc.expecting_response=_
respFunc.pak=function(e){b(_)
var r=n(d,e)
var a=r.send
r.send=function(e,t){preSendResp(e)
a.call(r,e,t)}
return r}
if("number"===typeof c){var w=a.resp_cbs[c]
if(!w)return void a.onError("Received response to unknown packet with id "+c+" from "+e)
delete a.resp_cbs[c]
profilerStart("response")
w.func(u,f,respFunc)
profilerStop("response")}else{if(!c)return void a.onError("Received message with no .msg from "+e)
profilerStart(c)
r(c,f,respFunc)
profilerStop(c)}if(_){a.responses_waiting++
if(!g&&!respFunc.suppress_timeout)m=setTimeout(function(){m=null
if(!respFunc.suppress_timeout)(a.log?a:console).log("Response not sent for "+c+" from "+e+" after "+((Date.now()-y)/1e3).toFixed(1)+"s")},15e3)}}},{"./packet.js":86,"./perfcounters.js":87,assert:void 0}],75:[function(e,t,r){(function(n){(function(){"use strict"
var i=Math.floor
var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
var l="="
function encode(e,t,r){var a=e.u8
var i=""
var n
var o
for(n=0;n<r-2;n+=3){i+=s[a[o=t+n]>>2]
i+=s[((3&a[o])<<4)+(a[o+1]>>4)]
i+=s[((15&a[o+1])<<2)+(a[o+2]>>6)]
i+=s[63&a[o+2]]}if(r%3){i+=s[a[o=t+(n=r-r%3)]>>2]
if(r%3===2){i+=s[((3&a[o])<<4)+(a[o+1]>>4)]
i+=s[(15&a[o+1])<<2]
i+=l}else{i+=s[(3&a[o])<<4]
i+=l+l}}return i}function decodeNativeBrowser(e,t){var r=window.atob(e)
var a=r.length
var i=t(a)
var n=i.u8
for(var o=0;o<a;++o)n[o]=r.charCodeAt(o)
i.decode_size=a
return i}function encodeNativeNode(e,t,r){return n.from(e.buffer).toString("base64",t,t+r)}function decodeNativeNode(e,t){var r=t(3*(e.length>>2)+i(e.length%4/1.5))
var a=n.from(r.buffer)
r.decode_size=a.write(e,"base64")
return r}var e="undefined"!==typeof window
r.base64Decode=e?decodeNativeBrowser:decodeNativeNode
r.base64Encode=e?encode:encodeNativeNode
r.base64CharTable=s}).call(this)}).call(this,e("buffer").Buffer)},{buffer:void 0}],76:[function(e,t,r){"use strict"
r.MAX_CLIENT_UPLOAD_SIZE=void 0
r.chunkedReceiverCleanup=chunkedReceiverCleanup
r.chunkedReceiverFinish=chunkedReceiverFinish
r.chunkedReceiverFreeFile=chunkedReceiverFreeFile
r.chunkedReceiverGetFile=chunkedReceiverGetFile
r.chunkedReceiverInit=chunkedReceiverInit
r.chunkedReceiverOnChunk=chunkedReceiverOnChunk
r.chunkedReceiverStart=chunkedReceiverStart
r.chunkedSend=chunkedSend
var c=e("assert")
var a=e("glov-async"),d=a.asyncParallelLimit,o=a.asyncSeries
var v=e("./crc32.js")
var p=Math.ceil,h=Math.min
var i=e("./packet.js"),l=i.packetBufPoolAlloc,n=i.packetBufPoolFree
var s=2097152
r.MAX_CLIENT_UPLOAD_SIZE=s
var _=8092
function cleanupFile(e,t,r){var a=e.files[t]
if(a.dv){n(a.dv)
delete a.dv}e.buffer_size-=a.length
c(e.buffer_size>=0)
delete e.files[t]}function chunkedReceiverInit(e,t){return{name:e,max_buffer_size:t,last_file_id:0,buffer_size:0,files:{}}}function chunkedReceiverCleanup(e){if(!e||!e.files)return
for(var t in e.files)cleanupFile(e,t)}function chunkedReceiverFreeFile(e){var t=e.buffer,r=e.dv
c(t)
c(r)
n(r)
delete e.buffer}function chunkedReceiverGetFile(t,r){if(!t)return{err:"ERR_NOT_INITIALIZED"}
function err(e){console.error(t.name+": chunkedReceiverGetFile("+r+"): "+e)
return{err:e}}if(!t.files)return err("ERR_FILE_NOT_FOUND")
var e=t.files[r]
if(!e)return err("ERR_FILE_NOT_FOUND")
if(!e.finished){cleanupFile(t,r)
return err("ERR_UPLOAD_UNFINISHED")}var a=e.dv,i=e.mime_type,n=e.length
e.buffer=null
e.dv=null
cleanupFile(t,r)
return{dv:a,mime_type:i,buffer:new Uint8Array(a.buffer,a.byteOffset,n)}}function chunkedReceiverStart(e,t,r){c(e)
var a=t.readInt()
var i=t.readU32()
var n=t.readAnsiString()
var o=e.name+": chunkedReceiverStart length="+a+" crc="+i+" mime="+n
if(a>e.max_buffer_size){console.error(o+": ERR_TOO_LARGE")
return void r("ERR_TOO_LARGE")}if(e.buffer_size+a>e.max_buffer_size){console.error(o+": ERR_OUT_OF_SPACE")
return void r("ERR_OUT_OF_SPACE")}e.buffer_size+=a
var s=++e.last_file_id
console.log(o+" id="+s)
e.files[s]={length:a,crc:i,mime_type:n,total:0,dv:l(a)}
r(null,s)}function chunkedReceiverOnChunk(e,t,r){if(!e){t.pool()
return void r("ERR_NOT_INITED")}var a=t.readInt()
var i=t.readInt()
var n=t.readBuffer(false)
var o=e.name+": chunkedReceiverOnChunk id="+a+" offs="+i+" length="+n.length
var s=e.files&&e.files[a]
if(!s){console.error(o+": ERR_INVALID_FILE_ID")
return void r("ERR_INVALID_FILE_ID")}if(s.total+n.length>s.length){cleanupFile(e,a)
console.error(o+": ERR_BUFFER_OVERRUN")
return void r("ERR_BUFFER_OVERRUN")}console.debug(o)
s.total+=n.length
s.dv.u8.set(n,i)
if(e.on_progress)e.on_progress(s.total,s.length,s.mime_type,a)
r()}function chunkedReceiverFinish(e,t,r){var a=t.readInt()
if(!e)return void r("ERR_NOT_INITED")
var i=e.files&&e.files[a]
var n=e.name+": chunkedReceiverFinish id="+a
if(!i){console.error(n+": ERR_INVALID_FILE_ID")
return void r("ERR_INVALID_FILE_ID")}if(i.total!==i.length){cleanupFile(e,a)
console.error(n+": ERR_INCOMPLETE (total="+i.total+" length="+i.length+")")
return void r("ERR_INCOMPLETE")}var o=v(i.dv.u8,i.length)
if(o!==i.crc){cleanupFile(e,a)
console.error(n+": ERR_CRC_MISMATCH (expected="+i.crc+" actual="+o+")")
return void r("ERR_CRC_MISMATCH")}i.finished=true
r()}function chunkedSend(e,t){var s=e.client,l=e.buffer,a=e.mime_type,i=e.max_in_flight
c(l instanceof Uint8Array,"Invalid data type")
c(a,"Missing mime_type")
var u=l.length
c(u)
var n=v(l)
var f
o([function getID(r){var e=s.pak("upload_start")
e.writeInt(u)
e.writeU32(n)
e.writeAnsiString(a)
e.send(function(e,t){f=t
r(e)})},function streamFile(e){var n=p(u/_)
var o=false
function sendChunk(e,t){if(o)return void t()
c(e<n)
var r=s.pak("upload_chunk")
r.writeInt(f)
var a=e*_
r.writeInt(a)
var i=h(_,u-a)
r.writeBuffer(new Uint8Array(l.buffer,l.byteOffset+a,i))
r.send(function(e){if(e)o=true
t(e)})}var t=[]
for(var r=0;r<n;++r)t.push(sendChunk.bind(null,r))
d(t,i,e)},function finish(e){var t=s.pak("upload_finish")
t.writeInt(f)
t.send(e)}],function(e){t(e,f)})}},{"./crc32.js":78,"./packet.js":86,assert:void 0,"glov-async":void 0}],77:[function(e,t,r){"use strict"
r.TYPE_STRING=r.TYPE_INT=r.TYPE_FLOAT=void 0
r.canonical=canonical
r.create=create
r.defaultHandler=defaultHandler
var _=e("assert")
var m=e("./util.js").isInteger
var o=e("./perfcounters.js").perfCounterAdd
function canonical(e){return e.toLowerCase().replace(/[_.]/g,"")}var g=0
r.TYPE_INT=g
var y=1
r.TYPE_FLOAT=y
var a=2
r.TYPE_STRING=a
var i=["INTEGER","NUMBER","STRING"]
function defaultHandler(e,t){if(e)console.error(e,t)
else console.info(t)}function checkAccess(e,t,r){if(r){if(!e)return false
for(var a=0;a<r.length;++a){var i=r[a]
if(!e[i]){var n=false
for(var o in e){var s=t[o]
if(s&&s[i]){n=true
break}}if(!n)return false}}}return true}function formatUsage(e,t,r){return!e?void 0:r?t+"\n"+e:t?String(e).replace(/\$HELP/,t):String(e)}function CmdParse(e){this.cmds={}
this.cmds_for_complete=this.cmds
this.was_not_found=false
this.storage=e&&e.storage
this.default_handler=defaultHandler
this.last_access=null
this.register({cmd:"cmd_list",func:this.cmdList.bind(this),access_show:["hidden"]})
this.implied_access={sysadmin:{csr:true}}}CmdParse.prototype.cmdList=function(e,t){if(!this.cmd_list){var r=this.cmd_list={}
for(var a in this.cmds){var i=this.cmds[a]
var n=[]
if(i.access_show)n=n.concat(i.access_show)
if(i.access_run)n=n.concat(i.access_run)
if(-1!==n.indexOf("hidden"))continue
var o={name:i.name,help:String(i.help)}
if(i.usage)o.usage=formatUsage(i.usage,i.help,i.prefix_usage_with_help)
if(n.length)o.access_show=n
r[a]=o}}t(null,this.cmd_list)}
CmdParse.prototype.setDefaultHandler=function(e){_(this.default_handler===defaultHandler)
this.default_handler=e}
CmdParse.prototype.checkAccess=function(e){return checkAccess(this.last_access,this.implied_access,e)}
CmdParse.prototype.handle=function(e,t,r){r=r||this.default_handler
this.was_not_found=false
var a=t.match(/^([^\s]+)(?:\s+(.*))?$/)
if(!a){r("Missing command")
return true}var i=canonical(a[1])
var n=this.cmds[i]
this.last_access=e&&e.access
if(n&&!this.checkAccess(n.access_run)){r('Access denied: "'+a[1]+'"')
return false}if(!n){this.was_not_found=true
r('Unknown command: "'+a[1]+'"')
return this.was_not_found=false}o("cmd."+i)
n.fn.call(e,a[2]||"",r)
return true}
CmdParse.prototype.register=function(e){_.equal(typeof e,"object")
var t=e.cmd,r=e.func,a=e.help,i=e.usage,n=e.prefix_usage_with_help,o=e.access_show,s=e.access_run,l=e.store_data
_(t)
_(r,'Missing function for command "'+t+'"')
var u=String(a||"").toLowerCase()
if(u.includes("(admin)"))_(s&&s.includes("sysadmin"))
if(u.includes("(csr)"))_(s&&s.includes("csr"))
if(u.includes("(hidden)"))_(o&&o.length)
var f=canonical(t)
_(!this.cmds[f],'Duplicate commands registered as "'+f+'"')
this.cmds[f]={name:t,fn:r,help:a,usage:i,prefix_usage_with_help:n,access_show:o,access_run:s,store_data:l}}
function formatRangeValue(e,t){var r=String(t)
if(e===y&&!r.includes("."))r+=".00"
return r}function formatEnumValue(e,t){if(e)for(var r in e)if(e[r]===t)return r
return t}function lookupEnumValue(e,t){var r=e[t=t.toUpperCase()]
if("number"===typeof r)return r
var a=Number(t)
if(Object.values(e).includes(a))return a
for(var i in e)if(i.startsWith(t))return e[i]
return null}var n={OFF:0,ON:1}
var w="cmd_parse_"
CmdParse.prototype.registerValue=function(l,u){var f=this
_(i[u.type]||!u.set)
_(u.set||u.get)
var c=u.label||l
var d=u.store&&this.storage||false
var v=u.enum_lookup
if(v)_.equal(u.type,g)
var p=""+w+canonical(l)
if(u.ver)p+="_"+u.ver
var e
if(d){_(u.set)
e={store_key:p,param:u}
var t=this.storage.getJSON(p)
if(void 0!==t){if(u.range){t=Number(t)
if(!isFinite(t)||t<u.range[0]||t>u.range[1])t=void 0}if(void 0!==t){u.set(t)
if(u.on_change)u.on_change(true)}}}if(!v&&u.type===g&&u.range&&0===u.range[0]&&1===u.range[1])v=n
var h=i[u.type]
if(v)h=Object.keys(v).join("|")
var r=function fn(e,t){function value(){t(null,c+" = "+formatEnumValue(v,u.get()))}function usage(){t("Usage: /"+l+" "+h)}if(!e)if(u.get&&u.set){var r=[c+":"]
if(u.range&&!(v&&u.type===g))r.push("Valid range: ["+formatRangeValue(u.type,u.range[0])+"..."+formatRangeValue(u.type,u.range[1])+"]")
var a=u.get()
var i=u.range?a===u.range[0]?u.range[1]:u.range[0]:1
if(v)i=Object.keys(v)[0]
r.push("To change: /"+l+" "+h)
r.push("  example: /"+l+" "+i)
var n=u.default_value
if(void 0!==n)r.push("Default value = "+formatEnumValue(v,n))
r.push("Current value = "+formatEnumValue(v,a))
return t(null,r.join("\n"))}else if(u.get)return value()
else return usage()
if(!u.set)return t("Usage: /"+l)
var o=Number(e)
if(v)if(null===(o=lookupEnumValue(v,e)))return usage()
if(u.range)if(o<u.range[0])o=u.range[0]
else if(o>u.range[1])o=u.range[1]
var s=o
if(u.type===g){if(!m(o))return usage()
u.set(o)}else if(u.type===y){if(!isFinite(o))return usage()
u.set(o)}else{s=e
u.set(e)}if(d)f.storage.setJSON(p,s)
if(u.on_change)u.on_change(false)
if(u.get)return value()
else return t(null,c+" updated")}
this.register({cmd:l,func:r,help:u.help||(u.get&&u.set?'Set or display "'+c+'" value':u.set?'Set "'+c+'" value':'Display "'+c+'" value'),usage:u.usage||(u.get?'Display "'+c+'" value\n  Usage: /'+l+"\n":"")+(u.set?'Set "'+c+'" value\n  Usage: /'+l+" "+h:""),prefix_usage_with_help:u.prefix_usage_with_help,access_show:u.access_show,access_run:u.access_run,store_data:e})}
CmdParse.prototype.resetSettings=function(){var e=[]
var t=this.storage.localStorageExportAll(w)
var r=0
for(var a in t){var i=t[a]
var n=a.slice(w.length)
var o=void 0
var s=n.split("_")
n=s[0]
o=s[1]
var l=this.cmds[n]
if(!l){this.storage.set(a,void 0)
e.push('Cleared unknown setting "'+n+'" = '+i);++r}else{var u
var f=l.name,c=l.store_data
var d=null==c?void 0:null==(u=c.param)?void 0:u.default_value
if(c&&c.store_key!==a){this.storage.set(a,void 0)
e.push('Cleared old setting "'+f+" (v"+(o||0)+')"');++r}else if(void 0!==d)if(JSON.stringify(d)===i)this.storage.set(a,void 0)
else{this.storage.set(a,void 0)
e.push('Cleared setting "'+f+'" = '+i+" (default = "+d+")");++r}else{this.storage.set(a,void 0)
e.push('Cleared setting "'+f+'" = '+i);++r}}}if(e.length)e.push("Reset "+r+" setting(s)")
return e}
function cmpCmd(e,t){if(e.cname<t.cname)return-1
return 1}CmdParse.prototype.addServerCommands=function(e){var t=this.cmds_for_complete
if(this.cmds_for_complete===this.cmds){t=this.cmds_for_complete={}
for(var r in this.cmds)t[r]=this.cmds[r]}for(var a in e)if(!t[a])t[a]=e[a]}
CmdParse.prototype.autoComplete=function(e,t){var r=[]
var a=canonical((e=e.split(" "))[0])
this.last_access=t
for(var i in this.cmds_for_complete)if(1===e.length&&i.slice(0,a.length)===a||e.length>1&&i===a){var n=this.cmds_for_complete[i]
if(this.checkAccess(n.access_show)&&this.checkAccess(n.access_run))r.push({cname:i,cmd:n.name,help:String(n.help),usage:formatUsage(n.usage,n.help,n.prefix_usage_with_help)})}r.sort(cmpCmd)
return r}
CmdParse.prototype.canonical=canonical
CmdParse.prototype.TYPE_INT=g
CmdParse.prototype.TYPE_FLOAT=y
CmdParse.prototype.TYPE_STRING=a
function create(e){return new CmdParse(e)}},{"./perfcounters.js":87,"./util.js":92,assert:void 0}],78:[function(e,t,r){"use strict"
var i=new Array(256);(function(){for(var e=0;e<256;e++){var t=e
for(var r=0;r<8;r++)if(1&t)t=-306674912^t>>>1
else t>>>=1
i[e]=t}})()
function update_crc(e,t,r){for(var a=0;a<r;a++)e=i[255&(e^t[a])]^e>>>8
return e}function crc32(e,t){return(4294967295^update_crc(4294967295,e,t=t||e.length))>>>0}t.exports=crc32
t.exports.crc32=crc32},{}],79:[function(e,t,r){"use strict"
r.dataError=dataError
r.dataErrorEx=dataErrorEx
r.dataErrorOnError=dataErrorOnError
r.dataErrorQueueClear=dataErrorQueueClear
r.dataErrorQueueEnable=dataErrorQueueEnable
r.dataErrorQueueGet=dataErrorQueueGet
var a=e("assert")
var i=null
var n=false
var o=[]
var s=Object.create(null)
function dataErrorEx(e){if(!n)return
if(e.per_frame){if(s[e.msg])return
s[e.msg]=true}if(i)i(e)
o.push(e)
if(o.length>25){var t=o.splice(0,1)[0]
if(t.per_frame)delete s[t.msg]}}function dataError(e){dataErrorEx({msg:e})}function dataErrorQueueEnable(e){n=e}function dataErrorOnError(e){a(!i)
i=e}function dataErrorQueueGet(){return o}function dataErrorQueueClear(){o=[]
s=Object.create(null)}},{assert:void 0}],80:[function(e,t,r){"use strict"
r.dotPropDelete=dotPropDelete
r.dotPropGet=dotPropGet
r.dotPropHas=dotPropHas
r.dotPropSet=dotPropSet
var a=(0,e("./util.js").arrayToSet)(["__proto__","prototype","constructor"])
function isObject(e){var t=typeof e
return null!==e&&("object"===t||"function"===t)}function isValidPath(e){for(var t=0;t<e.length;++t)if(a[e[t]])return false
return true}function getPathSegments(e){var t=e.split(".")
var r=[]
for(var a=0;a<t.length;a++){var i=t[a]
while("\\"===i[i.length-1]&&void 0!==t[a+1]){i=i.slice(0,-1)+"."
i+=t[++a]}r.push(i)}if(!isValidPath(r))return[]
return r}function dotPropGet(e,t,r){if(!isObject(e)||"string"!==typeof t)return void 0===r?e:r
var a=getPathSegments(t)
if(0===a.length)return r
for(var i=0;i<a.length;i++)if(void 0===(e=e[a[i]])||null===e){if(i!==a.length-1)return r
break}return void 0===e?r:e}function dotPropSet(e,t,r){if(!isObject(e)||"string"!==typeof t)return e
var a=e
var i=getPathSegments(t)
for(var n=0;n<i.length;n++){var o=i[n]
if(n===i.length-1)e[o]=r
else if(!isObject(e[o]))e[o]={}
e=e[o]}return a}function dotPropDelete(e,t){if(!isObject(e)||"string"!==typeof t)return false
var r=getPathSegments(t)
for(var a=0;a<r.length;a++){var i=r[a]
if(a===r.length-1){delete e[i]
return true}if(!isObject(e=e[i]))return false}}function dotPropHas(e,t){if(!isObject(e)||"string"!==typeof t)return false
var r=getPathSegments(t)
if(0===r.length)return false
for(var a=0;a<r.length;a++)if(isObject(e)){if(!(r[a]in e))return false
e=e[r[a]]}else return false
return true}r.get=dotPropGet
r.set=dotPropSet
r.delete=dotPropDelete
r.has=dotPropHas},{"./util.js":92}],81:[function(e,t,r){"use strict"
r.PRESENCE_OFFLINE=r.PRESENCE_INACTIVE=r.PRESENCE_ACTIVE=void 0
r.getStringEnumValues=getStringEnumValues
r.isValidNumberEnumKey=isValidNumberEnumKey
r.isValidStringEnumKey=isValidStringEnumKey
r.isValidStringEnumValue=isValidStringEnumValue
var a=0
r.PRESENCE_OFFLINE=a
var i=1
r.PRESENCE_ACTIVE=i
var n=2
r.PRESENCE_INACTIVE=n
function getStringEnumValues(e){return Object.values(e)}function isValidNumberEnumKey(e,t){return"number"===typeof e[t]}function isValidStringEnumKey(e,t){return t in e}function isValidStringEnumValue(e,t){for(var r in e)if(e[r]===t)return true
return false}},{}],82:[function(e,t,r){"use strict"
r.executeWithRetry=executeWithRetry
r.setMetricsAdd=setMetricsAdd
var c=e("./perfcounters").perfCounterAdd
var a=Math.floor,d=Math.min,i=Math.random
var v
function setMetricsAdd(e){v=e}function randomNumber(e,t){return a(i()*(t-e+1))+e}function executeWithRetry(e,t,a){var i=t.max_retries
var n=t.inc_backoff_duration
var o=t.max_backoff
var s=t.log_prefix||"Log"
var l=t.quiet
var u=t.no_metrics
var f=0
function execute(){f++
e(function(e,t){if(!e){if(1!==f)console.info("[RETRY] "+s+" | ["+f+"] | Finally succeeded")
return a(null,t)}else{var r=(s.split(" | ")[0].replace(/ /g,"")||"unknown").toLowerCase()
if(f===i){(l?console.info:console.error)("[RETRY] "+s+" | [Retries exhausted] | "+e)
if(v&&!u)v("retry."+r+".fail",1)
return a(e)}if(v&&!u)v("retry."+r,1);(l?console.info:console.warn)("[RETRY] "+s+" | ["+f+"] | "+e)
c("retry."+s)
return setTimeout(execute,d(f*n,o)+randomNumber(100,300))}})}execute()}},{"./perfcounters":87}],83:[function(e,t,r){"use strict"
r.ERR_UNCONFIRMED_EMAIL=r.ERR_UNAUTHORIZED=r.ERR_SERVER=r.ERR_NO_USER_ID=r.ERR_NOT_AVAILABLE=r.ERR_INVALID_PROVIDER=r.ERR_INVALID_DATA=r.ERR_EMAIL_ALREADY_USED=void 0
var a="ERR_INVALID_DATA"
r.ERR_INVALID_DATA=a
var i="ERR_INVALID_PROVIDER"
r.ERR_INVALID_PROVIDER=i
var n="ERR_UNAUTHORIZED"
r.ERR_UNAUTHORIZED=n
var o="ERR_NO_USER_ID"
r.ERR_NO_USER_ID=o
var s="ERR_UNCONFIRMED_EMAIL"
r.ERR_UNCONFIRMED_EMAIL=s
var l="ERR_SERVER"
r.ERR_SERVER=l
var u="ERR_EMAIL_ALREADY_USED"
r.ERR_EMAIL_ALREADY_USED=u
var f="ERR_NOT_AVAILABLE"
r.ERR_NOT_AVAILABLE=f},{}],84:[function(e,t,r){"use strict"
r.FriendStatus=void 0
var a;(function(e){e[e["Added"]=1]="Added"
e[e["AddedAuto"]=2]="AddedAuto"
e[e["Removed"]=3]="Removed"
e[e["Blocked"]=4]="Blocked"})((r.FriendStatus=a)||(r.FriendStatus=a={}))},{}],85:[function(e,t,r){"use strict"
var R=e("assert")
function stringUtf8Encode(e){var t
var r
var a=[]
e=e.replace(/\r\n/g,"\n")
for(r=0;r<e.length;++r)if((t=e.charCodeAt(r))<128)a.push(String.fromCharCode(t))
else if(t>127&&t<2048){a.push(String.fromCharCode(t>>6|192))
a.push(String.fromCharCode(63&t|128))}else{a.push(String.fromCharCode(t>>12|224))
a.push(String.fromCharCode(t>>6&63|128))
a.push(String.fromCharCode(63&t|128))}return a.join("")}function rotateLeft(e,t){return e<<t|e>>>32-t}function addUnsigned(e,t){var r=2147483648&e
var a=2147483648&t
var i=1073741824&e
var n=1073741824&t
var o=(1073741823&e)+(1073741823&t)
if(i&n)return 2147483648^o^r^a
if(i|n)if(1073741824&o)return 3221225472^o^r^a
else return 1073741824^o^r^a
else return o^r^a}function F(e,t,r){return e&t|~e&r}function G(e,t,r){return e&r|t&~r}function H(e,t,r){return e^t^r}function I(e,t,r){return t^(e|~r)}function FF(e,t,r,a,i,n,o){e=addUnsigned(e,addUnsigned(addUnsigned(F(t,r,a),i),o))
return addUnsigned(rotateLeft(e,n),t)}function GG(e,t,r,a,i,n,o){e=addUnsigned(e,addUnsigned(addUnsigned(G(t,r,a),i),o))
return addUnsigned(rotateLeft(e,n),t)}function HH(e,t,r,a,i,n,o){e=addUnsigned(e,addUnsigned(addUnsigned(H(t,r,a),i),o))
return addUnsigned(rotateLeft(e,n),t)}function II(e,t,r,a,i,n,o){e=addUnsigned(e,addUnsigned(addUnsigned(I(t,r,a),i),o))
return addUnsigned(rotateLeft(e,n),t)}function convertToWordArray(e){var t=e.length
var r=t+8
var a=16*((r-r%64)/64+1)
var i=new Array(a-1)
var n=0
var o=0
while(o<t){n=o%4*8
i[(o-o%4)/4]|=e.charCodeAt(o)<<n
o++}i[(o-o%4)/4]|=128<<(n=o%4*8)
i[a-2]=t<<3
i[a-1]=t>>>29
return i}function wordToHex(e){var t=""
var r=""
var a
for(a=0;a<=3;a++)t+=(r="0"+(e>>>8*a&255).toString(16)).substr(r.length-2,2)
return t}t.exports=function md5(e){var t
var r
var a
var i
var n
var o
var s
var l
var u
var f=7
var c=12
var d=17
var v=22
var p=5
var h=9
var _=14
var m=20
var g=4
var y=11
var w=16
var b=23
var x=6
var S=10
var E=15
var T=21
var A
if("string"===typeof e)A=convertToWordArray(e=stringUtf8Encode(e))
else R(false)
n=1732584193
o=4023233417
s=2562383102
l=271733878
for(u=0;u<A.length;u+=16){n=FF(t=n,r=o,a=s,i=l,A[u],f,3614090360)
l=FF(l,n,o,s,A[u+1],c,3905402710)
s=FF(s,l,n,o,A[u+2],d,606105819)
o=FF(o,s,l,n,A[u+3],v,3250441966)
n=FF(n,o,s,l,A[u+4],f,4118548399)
l=FF(l,n,o,s,A[u+5],c,1200080426)
s=FF(s,l,n,o,A[u+6],d,2821735955)
o=FF(o,s,l,n,A[u+7],v,4249261313)
n=FF(n,o,s,l,A[u+8],f,1770035416)
l=FF(l,n,o,s,A[u+9],c,2336552879)
s=FF(s,l,n,o,A[u+10],d,4294925233)
o=FF(o,s,l,n,A[u+11],v,2304563134)
n=FF(n,o,s,l,A[u+12],f,1804603682)
l=FF(l,n,o,s,A[u+13],c,4254626195)
s=FF(s,l,n,o,A[u+14],d,2792965006)
n=GG(n,o=FF(o,s,l,n,A[u+15],v,1236535329),s,l,A[u+1],p,4129170786)
l=GG(l,n,o,s,A[u+6],h,3225465664)
s=GG(s,l,n,o,A[u+11],_,643717713)
o=GG(o,s,l,n,A[u],m,3921069994)
n=GG(n,o,s,l,A[u+5],p,3593408605)
l=GG(l,n,o,s,A[u+10],h,38016083)
s=GG(s,l,n,o,A[u+15],_,3634488961)
o=GG(o,s,l,n,A[u+4],m,3889429448)
n=GG(n,o,s,l,A[u+9],p,568446438)
l=GG(l,n,o,s,A[u+14],h,3275163606)
s=GG(s,l,n,o,A[u+3],_,4107603335)
o=GG(o,s,l,n,A[u+8],m,1163531501)
n=GG(n,o,s,l,A[u+13],p,2850285829)
l=GG(l,n,o,s,A[u+2],h,4243563512)
s=GG(s,l,n,o,A[u+7],_,1735328473)
n=HH(n,o=GG(o,s,l,n,A[u+12],m,2368359562),s,l,A[u+5],g,4294588738)
l=HH(l,n,o,s,A[u+8],y,2272392833)
s=HH(s,l,n,o,A[u+11],w,1839030562)
o=HH(o,s,l,n,A[u+14],b,4259657740)
n=HH(n,o,s,l,A[u+1],g,2763975236)
l=HH(l,n,o,s,A[u+4],y,1272893353)
s=HH(s,l,n,o,A[u+7],w,4139469664)
o=HH(o,s,l,n,A[u+10],b,3200236656)
n=HH(n,o,s,l,A[u+13],g,681279174)
l=HH(l,n,o,s,A[u],y,3936430074)
s=HH(s,l,n,o,A[u+3],w,3572445317)
o=HH(o,s,l,n,A[u+6],b,76029189)
n=HH(n,o,s,l,A[u+9],g,3654602809)
l=HH(l,n,o,s,A[u+12],y,3873151461)
s=HH(s,l,n,o,A[u+15],w,530742520)
n=II(n,o=HH(o,s,l,n,A[u+2],b,3299628645),s,l,A[u],x,4096336452)
l=II(l,n,o,s,A[u+7],S,1126891415)
s=II(s,l,n,o,A[u+14],E,2878612391)
o=II(o,s,l,n,A[u+5],T,4237533241)
n=II(n,o,s,l,A[u+12],x,1700485571)
l=II(l,n,o,s,A[u+3],S,2399980690)
s=II(s,l,n,o,A[u+10],E,4293915773)
o=II(o,s,l,n,A[u+1],T,2240044497)
n=II(n,o,s,l,A[u+8],x,1873313359)
l=II(l,n,o,s,A[u+15],S,4264355552)
s=II(s,l,n,o,A[u+6],E,2734768916)
o=II(o,s,l,n,A[u+13],T,1309151649)
n=II(n,o,s,l,A[u+4],x,4149444226)
l=II(l,n,o,s,A[u+11],S,3174756917)
s=II(s,l,n,o,A[u+2],E,718787259)
o=II(o,s,l,n,A[u+9],T,3951481745)
n=addUnsigned(n,t)
o=addUnsigned(o,r)
s=addUnsigned(s,a)
l=addUnsigned(l,i)}return(wordToHex(n)+wordToHex(o)+wordToHex(s)+wordToHex(l)).toLowerCase()}},{assert:void 0}],86:[function(k,e,C){(function(R){(function(){"use strict"
C.packetBufPoolAlloc=packetBufPoolAlloc
C.packetBufPoolFree=packetBufPoolFree
C.packetDefaultFlags=packetDefaultFlags
C.packetEnableDebug=packetEnableDebug
C.packetReadIntFromBuffer=packetReadIntFromBuffer
C.packetSizeAnsiString=packetSizeAnsiString
C.packetSizeInt=packetSizeInt
var i=C.PACKET_DEBUG=1
var e=C.PACKET_RESERVED1=2
var t=C.PACKET_RESERVED2=4
var l=i|e|t
var o=256
var u=k("assert")
var s=Math.max
var r=k("./util.js"),a=r.deprecate,n=r.isInteger,f=r.log2
var c=k("./base64.js"),d=c.base64Encode,v=c.base64Decode
a(C,"default_flags")
var p=[void 0,null,0,false,"",NaN]
var h=1024
var _="PKTERR_UNDERRUN"
var m=5e3
var g=5e3
var y=[0,10,10,20,20,20,20,20,20,20,5e3,20,20,20,20,20,20,10,10]
var w=[]
var b=[]
var x=y.map(function(){return[]})
function allocDataView(e){var t=f(e)
u(t)
if(t>=x.length)t=0
if(t){e=1<<t
if(x[t].length)return x[t].pop()}var r=new Uint8Array(e)
var a=new DataView(r.buffer)
a.u8=r
if(t)a.packet_pool_idx=t
return a}function wrapU8AsDataView(e){var t=new DataView(e.buffer,e.byteOffset,e.byteLength)
t.u8=e
return t}function utf8ByteLength(e){var t=e.length
var r=t
for(var a=0;a<t;++a){var i=e.charCodeAt(a)
if(i>127){++r
if(i>2047){++r
if(i>65535){++r
if(i>2097151){++r
if(i>67108863)++r}}}}}return r}function utf8WriteChar(e,t,r){if(r>1114111)r=65535
if(r<=127)e.u8[t++]=r
else if(r<=2047){e.u8[t++]=r>>6|192
e.u8[t++]=63&r|128}else if(r<=65535){e.u8[t++]=r>>12|224
e.u8[t++]=r>>6&63|128
e.u8[t++]=63&r|128}else if(r<=1114111){e.u8[t++]=r>>18|240
e.u8[t++]=r>>12&63|128
e.u8[t++]=r>>6&63|128
e.u8[t++]=63&r|128}else u(false)
return t}function poolBuf(e){u(e)
u(e.u8)
var t=e.packet_pool_idx
if(t){var r=x[t]
if(r.length<y[t])r.push(e)}}function packetBufPoolAlloc(e){return allocDataView(e)}function packetBufPoolFree(e){poolBuf(e)}var S=0
function packetDefaultFlags(){return S}function packetEnableDebug(e){if(e)S|=i}function Packet(e,t,r){this.reinit(e,t,r)}Packet.prototype.reinit=function(e,t,r){this.flags=e||0
this.has_flags=false
this.buf=null
this.buf_len=0
this.buf_offs=0
this.bufs=null
this.bsizes=null
this.readable=false
this.ref_count=1
this.pak_debug=r
if(t){this.fit(t,true)
this.buf_len=t}}
Packet.prototype.getRefCount=function(){return this.ref_count}
Packet.prototype.ref=function(){u(this.ref_count);++this.ref_count}
Packet.prototype.pool=function(){u(this.ref_count)
if(--this.ref_count)return
if(this.flags&o);else{if(this.buf)poolBuf(this.buf)
if(this.bufs)for(var e=0;e<this.bufs.length;++e)poolBuf(this.bufs[e])}if(w.length<m)w.push(this)
if(this.pak_debug)this.pak_debug.poolDebug()}
Packet.prototype.totalSize=function(){var e=0
if(this.readable)return this.buf_len
if(this.bsizes)for(var t=0;t<this.bsizes.length;++t)e+=this.bsizes[t]
return e+this.buf_offs}
Packet.prototype.setReadable=function(){u(this.buf)
u(!this.bufs)
u(!this.readable)
this.readable=true}
Packet.prototype.makeReadable=function(){u(this.buf)
u(!this.readable)
var e=this.totalSize()
this.readable=true
if(!this.bufs){this.buf_len=e
this.buf_offs=0
return}var t=allocDataView(e)
var r=t.u8
var a=0
for(var i=0;i<this.bufs.length;++i){var n=this.bsizes[i]
var o=this.bufs[i]
if(a+o.u8.length>e){u.equal(o.byteOffset,0)
r.set(new Uint8Array(o.buffer,0,n),a)}else r.set(o.u8,a)
a+=n
poolBuf(o)}u.equal(this.buf.byteOffset,0)
r.set(new Uint8Array(this.buf.buffer,this.buf.byteOffset,this.buf_offs),a)
poolBuf(this.buf)
u.equal(a+this.buf_offs,e)
this.bufs=this.bsizes=null
this.buf=t
this.buf_offs=0
this.buf_len=e}
Packet.prototype.flush=function(){var e=this.buf,t=this.buf_offs
if(!this.bufs){this.bufs=[e]
this.bsizes=[t]}else{this.bufs.push(e)
this.bsizes.push(t)}this.buf=null
this.buf_len=0
this.buf_offs=0}
Packet.prototype.fit=function(e,t){var r=this.buf,a=this.buf_len,i=this.buf_offs
var n=i+e
if(n<=a){if(!t)this.buf_offs=n
return i}u(!this.readable)
if(r)this.flush()
this.buf_len=a=s(h,e)
this.buf=allocDataView(a)
this.buf_offs=t?0:e
return 0}
Packet.prototype.advance=function(e){var t=this.buf_offs
var r=t+e
if((this.buf_offs=r)>this.buf_len)throw new Error(_)
if(r===this.buf_len)this.pool()
return t}
Packet.prototype.ended=function(){return this.buf_offs===this.buf_len}
Packet.prototype.writeU8=function(e){u(e>=0&&e<256)
var t=this.fit(1)
this.buf.u8[t]=e}
Packet.prototype.readU8=function(){return this.buf.u8[this.advance(1)]}
function packetSizeInt(e){u(n(e))
var t=e<0?1:0
if(t)e=-e
if(e<248){if(t)return 2
return 1}else if(e<65536)return 3
else if(e<4294967296)return 5
else return 9}Packet.prototype.writeInt=function(e){u(n(e))
var t=this.fit(9,true)
var r=this.buf
var a=e<0?1:0
if(a)e=-e
if(e<248){if(a)r.u8[t++]=255
r.u8[t++]=e}else if(e<65536){r.u8[t++]=248+a
r.setUint16(t,e,true)
t+=2}else if(e<4294967296){r.u8[t++]=250+a
r.setUint32(t,e,true)
t+=4}else{r.u8[t++]=252+a
var i=e>>>0
r.setUint32(t,i,true)
r.setUint32(t+=4,(e-i)/4294967296,true)
t+=4}this.buf_offs=t}
Packet.prototype.zeroInt=function(){var e=this.buf.u8[this.buf_offs]
if(e<248){this.buf.u8[this.buf_offs++]=0
return}this.buf_offs++
var t
switch(e){case 253:case 252:t=8
break
case 251:case 250:t=4
break
case 249:case 248:t=2
break
case 255:t=1
break
default:throw new Error("PKTERR_PACKED_INT")}while(t){--t
this.buf.u8[this.buf_offs++]=0}}
function packetReadIntFromBuffer(e,t,r){if(r-t<1)return null
var a=e[t++]
if(a<248)return{v:a,offs:t}
var i=1
switch(a){case 249:i=-1
case 248:if(r-t<2)return null
return{v:i*e.readUInt16LE(t),offs:t+=2}
case 251:i=-1
case 250:if(r-t<4)return null
return{v:i*e.readUInt32LE(t),offs:t+=4}
case 253:i=-1
case 252:if(r-t<8)return null
var n=e.readUInt32LE(t)
return{v:i*(4294967296*e.readUInt32LE(t+=4)+n),offs:t+=4}
case 255:if(r-t<1)return null
return{v:-e[t++],offs:t}
default:throw new Error("PKTERR_PACKED_INT")}}Packet.prototype.readInt=function(){var e=this.buf.u8[this.advance(1)]
if(e<248)return e
var t=1
switch(e){case 249:t=-1
case 248:return t*this.buf.getUint16(this.advance(2),true)
case 251:t=-1
case 250:return t*this.buf.getUint32(this.advance(4),true)
case 253:t=-1
case 252:var r=this.buf.getUint32(this.advance(4),true)
return t*(4294967296*this.buf.getUint32(this.advance(4),true)+r)
case 255:return-this.buf.u8[this.advance(1)]
default:throw new Error("PKTERR_PACKED_INT")}}
Packet.prototype.writeFloat=function(e){u.equal(typeof e,"number")
if(!e){this.buf.u8[this.fit(1)]=0
return}var t=this.fit(5,true)
this.buf.setFloat32(t,e,true)
if(this.buf.u8[t]<=1){this.buf.u8[t++]=1
this.buf.setFloat32(t,e,true)}this.buf_offs=t+4}
Packet.prototype.readFloat=function(){var e=this.advance(1)
var t=this.buf.u8[e]
if(!t)return 0
if(1===t)return this.buf.getFloat32(this.advance(4),true)
this.advance(3)
return this.buf.getFloat32(e,true)}
Packet.prototype.writeU32=function(e){u.equal(typeof e,"number")
this.buf.setUint32(this.fit(4),e,true)}
Packet.prototype.readU32=function(){return this.buf.getUint32(this.advance(4),true)}
Packet.prototype.writeString=function(e){u.equal(typeof e,"string")
var t=utf8ByteLength(e)
this.writeInt(t)
if(!t)return
var r=this.fit(t)
var a=this.buf
for(var i=0;i<e.length;++i){var n=e.charCodeAt(i)
if(n<=127)a.u8[r++]=n
else r=utf8WriteChar(a,r,n)}}
Packet.prototype.utf8ReadChar=function(e){var t=this.buf
if(e>=192&&e<224)return(31&e)<<6|63&t.u8[this.buf_offs++]
else if(e>=224&&e<240)return(15&e)<<12|(63&t.u8[this.buf_offs++])<<6|63&t.u8[this.buf_offs++]
else if(e>=240&&e<248)return(15&e)<<18|(63&t.u8[this.buf_offs++])<<12|(63&t.u8[this.buf_offs++])<<6|63&t.u8[this.buf_offs++]
else return 65533}
var E=[]
Packet.prototype.readString=function(){var e=this.readInt()
if(!e)return""
if(this.buf_offs+e>this.buf_len)throw new Error(_)
var t=this.buf
var r=this.buf_offs+e
var a
if(e>8192){a=""
while(this.buf_offs<r){var i=t.u8[this.buf_offs++]
if(i>127)i=this.utf8ReadChar(i)
a+=String.fromCharCode(i)}}else{E.length=e
var n=0
while(this.buf_offs<r){var o=t.u8[this.buf_offs++]
if(o>127)o=this.utf8ReadChar(o)
E[n++]=o}if(E.length!==n)E.length=n
a=String.fromCharCode.apply(void 0,E)}if(this.buf_offs===this.buf_len)this.pool()
return a}
Packet.prototype.writeAnsiString=function(e){u.equal(typeof e,"string")
var t=e.length
this.writeInt(t)
var r=this.fit(t)
var a=this.buf
for(var i=0;i<t;++i)a.u8[r++]=e.charCodeAt(i)}
Packet.prototype.readAnsiString=function(){var e=this.readInt()
if(!e)return""
var t=this.advance(e)
var r=this.buf
E.length=e
for(var a=0;a<e;++a)E[a]=r.u8[t++]
return String.fromCharCode.apply(void 0,E)}
function packetSizeAnsiString(e){return packetSizeInt(e.length)+e.length}Packet.prototype.writeJSON=function(e){if(!e){var t=p.indexOf(e)
u(-1!==t)
this.writeU8(t+1)
return}this.writeU8(0)
this.writeString(JSON.stringify(e))}
Packet.prototype.readJSON=function(){var e=this.readU8()
if(e){if(e-1>=p.length)throw new Error("PKTERR_JSON_HEADER")
return p[e-1]}var t=this.readString()
return JSON.parse(t)}
Packet.prototype.writeBuffer=function(e){this.writeInt(e.length)
if(e.length){var t=this.fit(e.length)
this.buf.u8.set(e,t)}}
var T=new Uint8Array(0)
Packet.prototype.readBuffer=function(e){var t=this.readInt()
if(!t)return T
var r=this.advance(t)
if(e)return this.buf.u8.slice(r,r+t)
else{var a=this.buf
return new Uint8Array(a.buffer,a.byteOffset+r,t)}}
Packet.prototype.appendBuffer=function(e){if(e.length){var t=this.fit(e.length)
this.buf.u8.set(e,t)}}
Packet.prototype.writeBool=function(e){this.writeU8(e?1:0)}
Packet.prototype.readBool=function(){return Boolean(this.readU8())}
Packet.prototype.append=function(e){u.equal(this.flags&l,e.flags&l)
if(e.bufs)for(var t=0;t<e.bufs.length;++t){var r=e.bufs[t]
var a=e.bsizes[t]
var i=this.fit(a)
if(a!==r.byteLength)this.buf.u8.set(new Uint8Array(r.buffer,r.byteOffset,a),i)
else this.buf.u8.set(r.u8,i)}if(e.buf){var n=e.buf
var o=e.readable?e.buf_len:e.buf_offs
var s=this.fit(o)
if(o!==n.byteLength)this.buf.u8.set(new Uint8Array(n.buffer,n.byteOffset,o),s)
else this.buf.u8.set(n.u8,s)}}
Packet.prototype.appendRemaining=function(e){u.equal(this.flags&l,e.flags&l)
u(e.readable)
u(!e.bufs)
u(e.buf)
u(e.buf_offs<=e.buf_len)
var t=e.buf_len-e.buf_offs
if(t){var r=this.fit(t)
this.buf.u8.set(new Uint8Array(e.buf.buffer,e.buf.byteOffset+e.buf_offs,t),r)}e.pool()}
Packet.prototype.toJSON=function(){var e={f:this.flags}
if(this.bufs){e.b=[]
for(var t=0;t<this.bufs.length;++t)e.b.push(d(this.bufs[t],0,this.bsizes[t]))}if(this.buf)if(this.readable)e.d=d(this.buf,0,this.buf_len)
else e.d=d(this.buf,0,this.buf_offs)
return e}
Packet.prototype.setBuffer=function(e,t){u(!this.buf)
u(!this.bufs)
u(this.flags&o)
u(e instanceof Uint8Array)
this.buf=wrapU8AsDataView(e)
this.buf_len=t
this.readable=true}
Packet.prototype.getBuffer=function(){u(this.buf)
u(!this.bufs)
return this.buf.u8}
Packet.prototype.getBufferLen=function(){u(this.buf)
u(!this.bufs)
return this.readable?this.buf_len:this.buf_offs}
Packet.prototype.getOffset=function(){if(this.readable)return this.buf_offs
return this.totalSize()}
Packet.prototype.seek=function(e){u(this.readable)
u(e>=0&&e<=this.buf_len)
this.buf_offs=e}
Packet.prototype.writeFlags=function(){u(!this.has_flags)
u.equal(this.buf_offs,0)
this.writeU8(this.flags)
this.has_flags=true}
Packet.prototype.updateFlags=function(e){u(this.has_flags)
u(!(e&l))
this.flags=this.flags&l|e;(this.bufs?this.bufs[0]:this.buf).u8[0]=this.flags}
Packet.prototype.readFlags=function(){var e=this.readU8()
u.equal(e,255&this.flags)
this.has_flags=true
return this.flags}
Packet.prototype.getFlags=function(){return this.flags}
Packet.prototype.getInternalFlags=function(){return this.flags&l}
Packet.prototype.contents=function(){return"pak("+this.totalSize()+"b)"}
function PacketDebug(e,t){this.reinit(e,t)}PacketDebug.prototype.reinit=function(e,t){var r=this
this.in_pool=false
if(w.length){this.pak=w.pop()
this.pak.reinit(e,t,this)}else this.pak=new Packet(e,t,this)
this.warned=false
this.pool_timer=setTimeout(function(){console.warn("Packet not pooled after 5s: "+r.contents())
r.warned=true},g)}
PacketDebug.prototype.poolDebug=function(){if(this.warned)console.warn("Packet pooled after timeout")
else clearTimeout(this.pool_timer)
u(!this.in_pool)
this.in_pool=true
if(b.length<m)b.push(this)}
var A=[null,"U8","U32","Int","Float","String","AnsiString","JSON","Bool","Buffer"]
A.forEach(function(r,a){if(!r)return
var e="write"+r
var t="read"+r
var i=Packet.prototype[e]
var n=Packet.prototype[t]
PacketDebug.prototype[e]=function(e){this.pak.writeU8(a)
i.call(this.pak,e)}
PacketDebug.prototype[t]=function(e){var t=this.pak.readU8()
if(t!==a)u(false,"PacketDebug error: Expected "+r+"("+a+"), found "+A[t]+"("+t+")")
return n.call(this.pak,e)}})
PacketDebug.prototype.zeroInt=function(){this.pak.writeU8(3)
this.pak.zeroInt()};["ended","getBuffer","getBufferLen","getFlags","getInternalFlags","getOffset","getRefCount","makeReadable","pool","readFlags","ref","seek","setBuffer","setReadable","toJSON","totalSize","updateFlags","writeFlags","appendBuffer"].forEach(function(e){var t=Packet.prototype[e]
PacketDebug.prototype[e]=function(){return t.apply(this.pak,arguments)}})
PacketDebug.prototype.append=function(e){u(e instanceof PacketDebug)
this.pak.append(e.pak)}
PacketDebug.prototype.appendRemaining=function(e){u(e instanceof PacketDebug)
this.pak.appendRemaining(e.pak)}
function format(e){switch(typeof e){case"object":if(e instanceof Uint8Array)return"u8<"+e.length+">"
return JSON.stringify(e)
default:return e}}PacketDebug.prototype.contents=function(){var e=this.pak
var t=e.getOffset()
var r=t
var a=["buf:"+e.buf_offs+"/"+e.buf_len]
if(e.bufs){e.makeReadable()
a.push("bufs")}else if(e.buf){if(e.readable)r=e.buf_len
e.buf_offs=0}else{a.push("empty")
r=-1}var i=e.ref_count
e.ref_count=2
try{if(!i)a.push("!ref_count=0!")
if(e.has_flags)a.push("flags:"+e.readU8())
while(e.buf_offs<r){var n=e.readU8()
var o=A[n]
if(!o){a.push("UnknownType:"+n)
break}var s=e["read"+o]()
a.push(o+":"+format(s))}}catch(e){a.push("Error dumping packet contents: "+e)}e.ref_count=i
e.buf_offs=t
return a.join(",")}
function packetCreate(e,t){if(void 0===e)e=S
var r=e&i?b:w
if(r.length){var a=r.pop()
a.reinit(e,t)
return a}if(e&i)return new PacketDebug(e,t)
return new Packet(e,t)}C.packetCreate=packetCreate
function packetFromBuffer(e,t,r){var a=e[0]
u.equal(typeof a,"number")
if(r){u(t)
u(e.buffer instanceof ArrayBuffer)
var i=packetCreate(a,t)
if(e.byteLength!==t)e=R.from(e.buffer,e.byteOffset,t)
i.getBuffer().set(e)
i.setReadable()
return i}else{u(e instanceof Uint8Array)
var n=packetCreate(a|o)
n.setBuffer(e,t||e.byteLength)
return n}}C.packetFromBuffer=packetFromBuffer
function packetFromJSON(e){var t=packetCreate(e.f)
var r=t.pak||t
function decode(e){return v(e,allocDataView)}if(e.b){r.bsizes=[]
r.bufs=[]
for(var a=0;a<e.b.length;++a){var i=decode(e.b[a])
r.bufs.push(i)
r.bsizes.push(i.decode_size)
delete i.decode_size}}if(e.d){r.buf=decode(e.d)
r.buf_len=r.buf.decode_size
delete r.buf.decode_size
r.buf_offs=0}return t}C.packetFromJSON=packetFromJSON
function isPacket(e){return e instanceof Packet||e instanceof PacketDebug}C.isPacket=isPacket}).call(this)}).call(this,k("buffer").Buffer)},{"./base64.js":75,"./util.js":92,assert:void 0,buffer:void 0}],87:[function(e,t,r){"use strict"
r.perfCounterAdd=perfCounterAdd
r.perfCounterAddValue=perfCounterAddValue
r.perfCounterHistory=perfCounterHistory
r.perfCounterTick=perfCounterTick
var a=1e4
var i=5
var n={time_start:Date.now()}
var o=[n]
var s=a
function perfCounterAdd(e){n[e]=(n[e]||0)+1}function perfCounterAddValue(e,t){n[e]=(n[e]||0)+t}function perfCounterTick(e,t){if((s-=e)<=0){s=a
if(o.length===i)o.splice(0,1)
var r=Date.now()
n.time_end=r
if(t)t(n);(n={}).time_start=r
o.push(n)}}function perfCounterHistory(){return o}},{}],88:[function(e,t,r){"use strict"
r.platformGetValidIDs=platformGetValidIDs
r.platformIsValid=platformIsValid
r.platformOverrideParameter=platformOverrideParameter
r.platformParameter=platformParameter
r.platformRegister=platformRegister
var i=e("assert")
var n=Object.create(null)
var a=false
function platformRegister(e,t){i(!a)
i(!n[e])
n[e]=t}function platformGetValidIDs(){return Object.keys(n)}function platformIsValid(e){a=true
return Boolean("string"===typeof e&&n[e])}var o=Object.create(null)
function platformParameter(e,t){var r=o[t]
if(void 0!==r)return r
var a=n[e]
i(a)
return a[t]}function platformOverrideParameter(e,t){o[e]=t}platformRegister("web",{devmode:"auto",reload:true,reload_updates:true})},{assert:void 0}],89:[function(e,t,r){"use strict"
r.mashI53=mashI53
r.mashString=mashString
r.randCreate=randCreate
r.shuffleArray=shuffleArray
function mashString(e){var t=4022871197
for(var r=0;r<e.length;r++){var a=.02519603282416938*(t+=e.charCodeAt(r))
a-=t=a>>>0
t=(a*=t)>>>0
t+=4294967296*(a-=t)}return t>>>0}function mashI53(e){var t=4022871197
while(e){var r=e%256
e=(e-r)/256
var a=.02519603282416938*(t+=r)
a-=t=a>>>0
t=(a*=t)>>>0
t+=4294967296*(a-=t)}return 2.3283064365386963e-10*(t>>>0)}function Mash(){this.n=3228327880}Mash.prototype.mash=function(e){var t=this.n+e
var r=.02519603282416938*t
r-=t=r>>>0
t=(r*=t)>>>0
return 2.3283064365386963e-10*((this.n=t+=4294967296*(r-=t))>>>0)}
function Alea(e){this.reseed(e)}Alea.prototype.reseed=function(e){this.c=1
var t=new Mash
this.s0=.3014581324532628
this.s1=.2643220406025648
this.s2=.7516536582261324
this.s0-=t.mash(e)
if(this.s0<0)this.s0+=1
this.s1-=t.mash(e)
if(this.s1<0)this.s1+=1
this.s2-=t.mash(e)
if(this.s2<0)this.s2+=1}
Alea.prototype.step=function(){var e=2091639*this.s0+2.3283064365386963e-10*this.c
this.s0=this.s1
this.s1=this.s2
return this.s2=e-(this.c=0|e)}
Alea.prototype.uint32=function(){return 4294967296*this.step()}
Alea.prototype.fract53=function(){return this.step()+11102230246251565e-32*(2097152*this.step()|0)}
Alea.prototype.random=Alea.prototype.step
Alea.prototype.range=function(e){return this.step()*e|0}
Alea.prototype.floatBetween=function(e,t){return e+(t-e)*this.random()}
Alea.prototype.exportState=function(){return[this.s0,this.s1,this.s2,this.c]}
Alea.prototype.importState=function(e){this.s0=e[0]
this.s1=e[1]
this.s2=e[2]
this.c=e[3]}
function randCreate(e){return new Alea(e)}function shuffleArray(e,t){for(var r=t.length-1;r>=1;--r){var a=e.range(r+1)
var i=t[r]
t[r]=t[a]
t[a]=i}}},{}],90:[function(e,t,r){"use strict"
r.FORMAT_PACK=1
r.FORMAT_PNG=2
r.TEXPACK_MAGIC=2403967826},{}],91:[function(e,t,r){"use strict"
var n=e("assert")
function EventEmitter(){this._listeners={}}t.exports=EventEmitter
Object.defineProperty(t.exports,"EventEmitter",{value:EventEmitter,enumerable:false})
function addListener(e,t,r,a){n("function"===typeof r)
var i=e._listeners[t]
if(!i)i=e._listeners[t]=[]
i.push({once:a,fn:r})}EventEmitter.prototype.hasListener=function(e,t){var r=this._listeners[e]
if(!r)return false
for(var a=0;a<r.length;++a)if(r[a].fn===t)return true
return false}
EventEmitter.prototype.on=function(e,t){addListener(this,e,t,0)
return this}
EventEmitter.prototype.once=function(e,t){addListener(this,e,t,1)
return this}
EventEmitter.prototype.removeListener=function(e,t){var r=this._listeners[e]
n(r)
for(var a=0;a<r.length;++a)if(r[a].fn===t){r.splice(a,1)
return this}n(false)
return this}
function filterNotOnce(e){return!e.once}EventEmitter.prototype.emit=function(e){var t=this._listeners[e]
if(!t)return false
var r=false
var a=false
for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o]
for(var s=0;s<t.length;++s){var l=t[s]
r=true
l.fn.apply(l,n)
if(l.once)a=true}if(a)this._listeners[e]=t.filter(filterNotOnce)
return r}},{assert:void 0}],92:[function(e,t,r){"use strict"
r.EMAIL_REGEX=void 0
r.arrayToSet=arrayToSet
r.callEach=callEach
r.callbackify=callbackify
r.clamp=clamp
r.cleanStringSplit=cleanStringSplit
r.cleanupStringArray=cleanupStringArray
r.clone=clone
r.cloneShallow=cloneShallow
r.dateToFileTimestamp=dateToFileTimestamp
r.dateToSafeLocaleString=dateToSafeLocaleString
r.deepAdd=deepAdd
r.deepEqual=deepEqual
r.defaults=defaults
r.defaultsDeep=defaultsDeep
r.deprecate=deprecate
r.easeIn=easeIn
r.easeInOut=easeInOut
r.easeOut=easeOut
r.eatPossiblePromise=eatPossiblePromise
r.empty=empty
r.errorString=errorString
r.fract=fract
r.has=has
r.identity=identity
r.inherits=inherits
r.isInteger=isInteger
r.isPowerOfTwo=isPowerOfTwo
r.lerp=lerp
r.lerpAngle=lerpAngle
r.lineCircleIntersect=lineCircleIntersect
r.lineLineIntersect=lineLineIntersect
r.log2=log2
r.logdata=logdata
r.map01=map01
r.matchAll=matchAll
r.merge=merge
r.mix=mix
r.mod=mod
r.msToSS2020=msToSS2020
r.msToTimeString=msToTimeString
r.nearSame=nearSame
r.nearSameAngle=nearSameAngle
r.nextHighestPowerOfTwo=nextHighestPowerOfTwo
r.nop=nop
r.objectToSet=objectToSet
r.once=once
r.plural=plural
r.randomNot=randomNot
r.removeSymbols=removeSymbols
r.ridx=ridx
r.round100=round100
r.round1000=round1000
r.sanitize=sanitize
r.secondsSince2020=secondsSince2020
r.secondsToFriendlyString=secondsToFriendlyString
r.shortAngleDist=shortAngleDist
r.sign=sign
r.tail=tail
r.titleCase=titleCase
r.toArray=toArray
r.toNumber=toNumber
r.trimEnd=trimEnd
r.unpromisify=unpromisify
var o=e("assert")
var a=Math.PI,c=Math.abs,s=Math.floor,i=Math.min,n=Math.max,l=Math.random,u=Math.round,f=Math.pow,d=Math.sqrt
var v=2*a
var p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
r.EMAIL_REGEX=p
function nop(){}function identity(e){return e}function once(e){var t=false
return function(){if(t)return
t=true
e.apply(void 0,arguments)}}function empty(e){for(var t in e)return false
return true}function easeInOut(e,t){var r=f(e,t)
return r/(r+f(1-e,t))}function easeIn(e,t){return 2*easeInOut(.5*e,t)}function easeOut(e,t){return 2*easeInOut(.5+.5*e,t)-1}function clone(e){if(!e)return e
return JSON.parse(JSON.stringify(e))}function merge(e,t){for(var r in t)e[r]=t[r]
return e}function has(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function defaults(e,t){for(var r in t)if(!has(e,r))e[r]=t[r]
return e}function defaultsDeep(e,t){for(var r in t)if(!has(e,r))e[r]=t[r]
else if("object"===typeof e[r])defaultsDeep(e[r],t[r])
return e}function cloneShallow(e){return merge({},e)}function deepEqual(e,t){if(Array.isArray(e)){if(!Array.isArray(t))return false
if(e.length!==t.length)return false
for(var r=0;r<e.length;++r)if(!deepEqual(e[r],t[r]))return false
return true}else if("object"===typeof e){if("object"!==typeof t)return false
if(!e||!t)return!e&&!t
for(var a in e)if(!deepEqual(e[a],t[a]))return false
for(var i in t)if(void 0!==t[i]&&void 0===e[i])return false
return true}return e===t}function deepAdd(e,t){o(e&&t)
for(var r in t){var a=t[r]
var i=e[r]
if("object"===typeof a){o(a)
var n=e[r]=i||{}
o.equal(typeof n,"object")
deepAdd(n,a)}else{if(!i)i=0
o("number"===typeof i)
o("number"===typeof a)
e[r]=(i||0)+a}}}function clamp(e,t,r){return i(n(t,e),r)}function lerp(e,t,r){return(1-e)*t+e*r}function shortAngleDist(e,t){var r=(t-e)%v
return 2*r%v-r}function lerpAngle(e,t,r){var a=t+shortAngleDist(t,r)*e
if(a<0)a+=v
return a}function mix(e,t,r){return(1-r)*e+r*t}function map01(e,t,r){return(e-t)/(r-t)}function sign(e){return e<0?-1:e>0?1:0}function mod(e,t){return(e%t+t)%t}function log2(e){for(var t=1,r=0;;t<<=1,++r)if(t>=e)return r}function ridx(e,t){e[t]=e[e.length-1]
e.pop()}function tail(e){if(!e.length)return null
return e[e.length-1]}function round100(e){return u(100*e)/100}function round1000(e){return u(1e3*e)/1e3}function fract(e){return e-s(e)}function nearSame(e,t,r){return c(t-e)<=r}function nearSameAngle(e,t,r){return c(shortAngleDist(e,t))<=r}function titleCase(e){return e.split(" ").map(function(e){return""+e[0].toUpperCase()+e.slice(1)}).join(" ")}var h=1e-5
function lineCircleIntersect(e,t,r,a){var i=[t[0]-e[0],t[1]-e[1]]
var n=i[0]*i[0]+i[1]*i[1]
var o=2*(i[0]*(e[0]-r[0])+i[1]*(e[1]-r[1]))
var s=r[0]*r[0]+r[1]*r[1]
s+=e[0]*e[0]+e[1]*e[1]
s-=2*(r[0]*e[0]+r[1]*e[1])
var l=o*o-4*n*(s-=a*a)
if(c(n)<h||l<0)return false
var u=(-o+d(l))/(2*n)
var f=(-o-d(l))/(2*n)
if(u>=0&&u<=1||f>=0&&f<=1)return true
return false}function lineLineIntersect(e,t,r,a){var i=(a[1]-r[1])*(t[0]-e[0])-(a[0]-r[0])*(t[1]-e[1])
var n=(a[0]-r[0])*(e[1]-r[1])-(a[1]-r[1])*(e[0]-r[0])
var o=(t[0]-e[0])*(e[1]-r[1])-(t[1]-e[1])*(e[0]-r[0])
if(0===i){if(!n&&!o)return true
return false}var s=n/i
var l=o/i
if(s<0||s>1||l<0||l>1)return false
return true}function inherits(e,t){o("function"===typeof t)
var r=e.prototype
e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
for(var a in r)e.prototype[a]=r[a]
for(var i in t)e[i]=t[i]}function isPowerOfTwo(e){return 0===(e&e-1)}function nextHighestPowerOfTwo(e){--e
for(var t=1;t<32;t<<=1)e|=e>>t
return e+1}function logdata(e){if(void 0===e)return""
var t=JSON.stringify(e)
if(t.length<120)return t
return t.slice(0,117)+"...("+t.length+")"}function isInteger(e){return"number"===typeof e&&isFinite(e)&&s(e)===e}function toNumber(e){return Number(e)}function randomNot(e,t,r){var a
var i=r-t
do{a=s(t+l()*i)}while(a===e)
return a}function toArray(e){return Array.prototype.slice.call(e)}function arrayToSet(e){var t=Object.create(null)
for(var r=0;r<e.length;++r)t[e[r]]=true
return t}function objectToSet(e){return merge(Object.create(null),e)}function matchAll(e,t){var r=[]
var a
do{if(a=t.exec(e))r.push(a[1])}while(a)
return r}function callEach(e,t){if(e&&e.length){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i]
for(var n=0;n<e.length;++n)e[n].apply(e,a)}}var _=/[\uD800-\uDFFF\x00-\x1F\x7F\u1D54\u1D55\u2000-\u200F\u205F-\u206F\uFE00]/g
function sanitize(e){return(e||"").replace(_,"")}function plural(e,t){return t+(1===e?"":"s")}function secondsToFriendlyString(e,t){var r=s(e/86400)
var a=s((e-=60*r*60*24)/3600)
var i=s((e-=60*a*60)/60)
e-=60*i
var n=[]
if(r){var o=s(r/365.25)
if(o){r-=s(365.25*o)
n.push(o+" "+plural(o,"year"))}n.push(r+" "+plural(r,"day"))}if(a)n.push(a+" "+plural(a,"hour"))
if(i||!n.length)n.push(i+" "+plural(i,"minute"))
if(t)n.push(e+" "+plural(e,"second"))
return n.join(", ")}function secondsSince2020(){return s(Date.now()/1e3)-1577836800}function dateToSafeLocaleString(t,r){var a
try{a=r?t.toLocaleDateString():t.toLocaleString()}catch(e){console.error(e,"(Using toString as fallback)")
a=r?t.toDateString():t.toString()}return a}function dateToFileTimestamp(e){function pad(e){return""+(e<10?0:"")+e}return e.getFullYear()+"-"+pad(e.getMonth()+1)+"-"+pad(e.getDate())+" "+pad(e.getHours())+"_"+pad(e.getMinutes())+"_"+pad(e.getSeconds())}function msToTimeString(e,t){var r=e%1e3
var a
var i
var n
n=(i=(a=e-r)-(a%=6e4))-(i%=36e5)
i/=6e4
return((n/=36e5)?n+":":"")+(n&&i<10?"0":"")+i+":"+((a/=1e3)<10?"0":"")+a+((t=t||{}).hide_ms?"":"."+(r<10?"00":r<100?"0":"")+r)}function removeSymbols(e){return e.replace(/[.,/\\@#£!$%^&*;:<>{}|?=\-+_`'"~[\]()]/g,"").replace(/\s{1,}/g," ")}var m=arrayToSet(["am","an","and","as","at","be","by","el","for","in","is","la","las","los","of","on","or","the","that","this","to","with"])
function cleanupStringArray(e){return e.filter(function(e){return e.length>1&&e.length<=32&&!m[e]})}function cleanStringSplit(e,t){return cleanupStringArray(removeSymbols(sanitize(e)).toLowerCase().split(t).map(function(e){return e.trim()}))}function eatPossiblePromise(e){if(e&&e.catch)e.catch(nop)}function errorString(e){var t=String(e)
if("[object Object]"===t)try{t=JSON.stringify(e)}catch(e){}if(e&&e.stack&&e.message)t=String(e.message)
return t.slice(0,600)}function deprecate(e,t,r){Object.defineProperty(e,t,{get:function get(){o(false,t+" is deprecated, use "+r+" instead")
return}})}var g="undefined"!==typeof process?process.nextTick:"undefined"!==typeof window&&window.setImmediate?window.setImmediate:function(e){return setTimeout(e,1)}
function callbackify(a){return function(){var t=this
var r=arguments[arguments.length-1]
o.equal(typeof r,"function")
var e=Array.prototype.slice.call(arguments,0,-1)
a.apply(this,e).then(function(e){if(r){g(r.bind(t,null,e))
r=null}}).catch(function(e){if(r){g(r.bind(t,e))
r=null}})}}function unpromisify(e){return function(){g(e.apply.bind(e,this,arguments))}}function msToSS2020(e){return s(e/1e3)-1577836800}var y=/\s/
function trimEnd(e){var t=e.length
while(t>0&&e[t-1].match(y))--t
return e.slice(0,t)}},{assert:void 0}],93:[function(e,t,r){"use strict"
var a=true
function verify(e,t){if(!e&&a)throw new Error("Assertion failed"+(t?": "+t:""))
return e}(function(e){e.ok=verify
function equal(e,t){if(e===t)return true
if(a)throw new Error('Assertion failed: "'+e+'"==="'+t+'"')
return false}e.equal=equal
function dothrow(e){a=e}e.dothrow=dothrow
function shouldThrow(){return a}e.shouldThrow=shouldThrow})(verify=verify||{})
t.exports=verify},{}],94:[function(e,t,r){"use strict"
r.identity_mat4=r.identity_mat3=r.half_vec=void 0
r.ivec2=ivec2
r.ivec3=ivec3
r.m4TransformVec3=m4TransformVec3
r.mat4=r.mat3=void 0
r.mat4isFinite=mat4isFinite
r.unit_vec=r.rovec4=r.rovec3=r.rovec2=r.rovec1=r.roivec3=r.roivec2=void 0
r.v2abs=v2abs
r.v2add=v2add
r.v2addScale=v2addScale
r.v2angle=v2angle
r.v2copy=v2copy
r.v2dist=v2dist
r.v2distSq=v2distSq
r.v2div=v2div
r.v2dot=v2dot
r.v2floor=v2floor
r.v2iFloor=v2iFloor
r.v2iNormalize=v2iNormalize
r.v2iRound=v2iRound
r.v2length=v2length
r.v2lengthSq=v2lengthSq
r.v2lerp=v2lerp
r.v2linePointDist=v2linePointDist
r.v2mul=v2mul
r.v2normalize=v2normalize
r.v2round=v2round
r.v2same=v2same
r.v2scale=v2scale
r.v2set=v2set
r.v2sub=v2sub
r.v3add=v3add
r.v3addScale=v3addScale
r.v3angle=v3angle
r.v3copy=v3copy
r.v3cross=v3cross
r.v3determinant=v3determinant
r.v3dist=v3dist
r.v3distSq=v3distSq
r.v3div=v3div
r.v3dot=v3dot
r.v3floor=v3floor
r.v3iAdd=v3iAdd
r.v3iAddScale=v3iAddScale
r.v3iFloor=v3iFloor
r.v3iMax=v3iMax
r.v3iMin=v3iMin
r.v3iMul=v3iMul
r.v3iNormalize=v3iNormalize
r.v3iRound=v3iRound
r.v3iScale=v3iScale
r.v3iSub=v3iSub
r.v3length=v3length
r.v3lengthSq=v3lengthSq
r.v3lerp=v3lerp
r.v3min=v3min
r.v3mul=v3mul
r.v3mulMat4=v3mulMat4
r.v3normalize=v3normalize
r.v3perspectiveProject=v3perspectiveProject
r.v3pow=v3pow
r.v3round=v3round
r.v3same=v3same
r.v3scale=v3scale
r.v3scaleFloor=v3scaleFloor
r.v3set=v3set
r.v3sub=v3sub
r.v3zero=v3zero
r.v4add=v4add
r.v4clone=v4clone
r.v4copy=v4copy
r.v4dot=v4dot
r.v4fromRGBA=v4fromRGBA
r.v4lerp=v4lerp
r.v4mul=v4mul
r.v4mulAdd=v4mulAdd
r.v4same=v4same
r.v4scale=v4scale
r.v4set=v4set
r.v4zero=v4zero
r.vec1=vec1
r.vec2=vec2
r.vec3=vec3
r.vec4=vec4
r.zero_vec=r.zaxis=r.yaxis=r.xaxis=void 0
var a=e("gl-mat3/create")
var i=e("gl-mat4/create")
var n=Math.abs,o=Math.acos,s=Math.max,l=Math.min,u=Math.floor,f=Math.pow,c=Math.round,d=Math.sqrt
var v=a
r.mat3=v
var p=i
r.mat4=p
function vec1(e){return new Float32Array([e||0])}var h=vec1
r.rovec1=h
function vec2(e,t){var r=new Float32Array(2)
if(e||t){r[0]=e
r[1]=t}return r}var _=vec2
r.rovec2=_
function ivec2(e,t){var r=new Int32Array(2)
if(e||t){r[0]=e
r[1]=t}return r}var m=ivec2
r.roivec2=m
function vec3(e,t,r){var a=new Float32Array(3)
if(e||t||r){a[0]=e
a[1]=t
a[2]=r}return a}var g=vec3
r.rovec3=g
function ivec3(e,t,r){var a=new Int32Array(3)
if(e||t||r){a[0]=e
a[1]=t
a[2]=r}return a}var y=ivec3
r.roivec3=y
function vec4(e,t,r,a){var i=new Float32Array(4)
if(e||t||r||a){i[0]=e
i[1]=t
i[2]=r
i[3]=a}return i}var w=vec4
r.rovec4=w
function frozenVec4(e,t,r,a){return w(e,t,r,a)}var b=frozenVec4(1,1,1,1)
r.unit_vec=b
var x=frozenVec4(.5,.5,.5,.5)
r.half_vec=x
var S=frozenVec4(0,0,0,0)
r.zero_vec=S
var E=v()
r.identity_mat3=E
var T=p()
r.identity_mat4=T
var A=frozenVec4(1,0,0,0)
r.xaxis=A
var R=frozenVec4(0,1,0,0)
r.yaxis=R
var k=frozenVec4(0,0,1,0)
r.zaxis=k
function v2abs(e,t){e[0]=n(t[0])
e[1]=n(t[1])
return e}function v2add(e,t,r){e[0]=t[0]+r[0]
e[1]=t[1]+r[1]
return e}function v2addScale(e,t,r,a){e[0]=t[0]+r[0]*a
e[1]=t[1]+r[1]*a
return e}function v2angle(e,t){var r=d((e[0]*e[0]+e[1]*e[1])*(t[0]*t[0]+t[1]*t[1]))
return o(l(s(r&&(e[0]*t[0]+e[1]*t[1])/r,-1),1))}function v2copy(e,t){e[0]=t[0]
e[1]=t[1]
return e}function v2dist(e,t){return d((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1]))}function v2distSq(e,t){return(e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])}function v2div(e,t,r){e[0]=t[0]/r[0]
e[1]=t[1]/r[1]
return e}function v2dot(e,t){return e[0]*t[0]+e[1]*t[1]}function v2floor(e,t){e[0]=u(t[0])
e[1]=u(t[1])
return e}function v2iFloor(e){e[0]=u(e[0])
e[1]=u(e[1])
return e}function v2lengthSq(e){return e[0]*e[0]+e[1]*e[1]}function v2length(e){return d(v2lengthSq(e))}function v2lerp(e,t,r,a){var i=1-t
e[0]=i*r[0]+t*a[0]
e[1]=i*r[1]+t*a[1]
return e}function v2mul(e,t,r){e[0]=t[0]*r[0]
e[1]=t[1]*r[1]
return e}function v2normalize(e,t){var r=t[0]*t[0]+t[1]*t[1]
if(r>0){r=1/d(r)
e[0]=t[0]*r
e[1]=t[1]*r}return e}function v2iNormalize(e){var t=e[0]*e[0]+e[1]*e[1]
if(t>0){t=1/d(t)
e[0]*=t
e[1]*=t}return e}function v2round(e,t){e[0]=c(t[0])
e[1]=c(t[1])
return e}function v2iRound(e){e[0]=c(e[0])
e[1]=c(e[1])
return e}function v2same(e,t){return e[0]===t[0]&&e[1]===t[1]}function v2scale(e,t,r){e[0]=t[0]*r
e[1]=t[1]*r
return e}function v2set(e,t,r){e[0]=t
e[1]=r
return e}function v2sub(e,t,r){e[0]=t[0]-r[0]
e[1]=t[1]-r[1]
return e}var C=vec2()
function v2linePointDist(e,t,r){v2sub(C,t,e)
var a=v2lengthSq(C)
if(!a)return v2dist(e,r)
var i=((r[0]-e[0])*C[0]+(r[1]-e[1])*C[1])/a
if(i<=0)return v2dist(e,r)
else if(i>=1)return v2dist(t,r)
v2addScale(C,e,C,i)
return v2dist(C,r)}function v3add(e,t,r){e[0]=t[0]+r[0]
e[1]=t[1]+r[1]
e[2]=t[2]+r[2]
return e}function v3iAdd(e,t){e[0]+=t[0]
e[1]+=t[1]
e[2]+=t[2]
return e}function v3addScale(e,t,r,a){e[0]=t[0]+r[0]*a
e[1]=t[1]+r[1]*a
e[2]=t[2]+r[2]*a
return e}function v3iAddScale(e,t,r){e[0]+=t[0]*r
e[1]+=t[1]*r
e[2]+=t[2]*r
return e}function v3angle(e,t){var r=d((e[0]*e[0]+e[1]*e[1]+e[2]*e[2])*(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]))
return o(l(s(r&&(e[0]*t[0]+e[1]*t[1]+e[2]*t[2])/r,-1),1))}function v3copy(e,t){e[0]=t[0]
e[1]=t[1]
e[2]=t[2]
return e}function v3cross(e,t,r){var a=t[0]
var i=t[1]
var n=t[2]
var o=r[0]
var s=r[1]
var l=r[2]
e[0]=i*l-n*s
e[1]=n*o-a*l
e[2]=a*s-i*o
return e}function v3determinant(e,t,r){var a=e[0]
var i=t[0]
var n=r[0]
var o=e[1]
var s=t[1]
var l=r[1]
var u=e[2]
var f=t[2]
var c=r[2]
return a*(c*s-l*f)+i*(-c*o+l*u)+n*(f*o-s*u)}function v3distSq(e,t){return(e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])+(e[2]-t[2])*(e[2]-t[2])}function v3dist(e,t){return d(v3distSq(e,t))}function v3div(e,t,r){e[0]=t[0]/r[0]
e[1]=t[1]/r[1]
e[2]=t[2]/r[2]
return e}function v3dot(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function v3iFloor(e){e[0]=u(e[0])
e[1]=u(e[1])
e[2]=u(e[2])
return e}function v3floor(e,t){e[0]=u(t[0])
e[1]=u(t[1])
e[2]=u(t[2])
return e}function v3lengthSq(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]}function v3length(e){return d(v3lengthSq(e))}function v3lerp(e,t,r,a){var i=1-t
e[0]=i*r[0]+t*a[0]
e[1]=i*r[1]+t*a[1]
e[2]=i*r[2]+t*a[2]
return e}function v3iMax(e,t){e[0]=s(e[0],t[0])
e[1]=s(e[1],t[1])
e[2]=s(e[2],t[2])
return e}function v3min(e,t,r){e[0]=l(t[0],r[0])
e[1]=l(t[1],r[1])
e[2]=l(t[2],r[2])
return e}function v3iMin(e,t){e[0]=l(e[0],t[0])
e[1]=l(e[1],t[1])
e[2]=l(e[2],t[2])
return e}function v3mul(e,t,r){e[0]=t[0]*r[0]
e[1]=t[1]*r[1]
e[2]=t[2]*r[2]
return e}function v3iMul(e,t){e[0]*=t[0]
e[1]*=t[1]
e[2]*=t[2]
return e}function v3mulMat4(e,t,r){var a=t[0]
var i=t[1]
var n=t[2]
e[0]=a*r[0]+i*r[4]+n*r[8]
e[1]=a*r[1]+i*r[5]+n*r[9]
e[2]=a*r[2]+i*r[6]+n*r[10]
return e}function m4TransformVec3(e,t,r){var a=t[0]
var i=t[1]
var n=t[2]
e[0]=a*r[0]+i*r[4]+n*r[8]+r[12]
e[1]=a*r[1]+i*r[5]+n*r[9]+r[13]
e[2]=a*r[2]+i*r[6]+n*r[10]+r[14]
return e}function v3normalize(e,t){var r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2]
if(r>0){r=1/d(r)
e[0]=t[0]*r
e[1]=t[1]*r
e[2]=t[2]*r}return e}function v3iNormalize(e){var t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2]
if(t>0){t=1/d(t)
e[0]*=t
e[1]*=t
e[2]*=t}return e}function v3perspectiveProject(e,t,r){var a=t[0]
var i=t[1]
var n=t[2]
var o=.5/(r[3]*a+r[7]*i+r[11]*n+r[15]||1e-5)
e[0]=(r[0]*a+r[4]*i+r[8]*n+r[12])*o+.5
e[1]=(r[1]*a+r[5]*i+r[9]*n+r[13])*-o+.5
e[2]=r[2]*a+r[6]*i+r[10]*n+r[14]
return e}function v3pow(e,t,r){e[0]=f(t[0],r)
e[1]=f(t[1],r)
e[2]=f(t[2],r)
return e}function v3round(e,t){e[0]=c(t[0])
e[1]=c(t[1])
e[2]=c(t[2])
return e}function v3iRound(e){e[0]=c(e[0])
e[1]=c(e[1])
e[2]=c(e[2])
return e}function v3same(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function v3scale(e,t,r){e[0]=t[0]*r
e[1]=t[1]*r
e[2]=t[2]*r
return e}function v3scaleFloor(e,t,r){e[0]=u(t[0]*r)
e[1]=u(t[1]*r)
e[2]=u(t[2]*r)
return e}function v3iScale(e,t){e[0]*=t
e[1]*=t
e[2]*=t
return e}function v3set(e,t,r,a){e[0]=t
e[1]=r
e[2]=a
return e}function v3sub(e,t,r){e[0]=t[0]-r[0]
e[1]=t[1]-r[1]
e[2]=t[2]-r[2]
return e}function v3iSub(e,t){e[0]-=t[0]
e[1]-=t[1]
e[2]-=t[2]
return e}function v3zero(e){e[0]=e[1]=e[2]=0
return e}function v4add(e,t,r){e[0]=t[0]+r[0]
e[1]=t[1]+r[1]
e[2]=t[2]+r[2]
e[3]=t[3]+r[3]
return e}function v4clone(e){return e.slice(0)}function v4copy(e,t){e[0]=t[0]
e[1]=t[1]
e[2]=t[2]
e[3]=t[3]
return e}function v4dot(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function v4fromRGBA(e){return vec4((e>>>24)/255,((16711680&e)>>16)/255,((65280&e)>>8)/255,(255&e)/255)}function v4lerp(e,t,r,a){var i=1-t
e[0]=i*r[0]+t*a[0]
e[1]=i*r[1]+t*a[1]
e[2]=i*r[2]+t*a[2]
e[3]=i*r[3]+t*a[3]
return e}function v4mul(e,t,r){e[0]=t[0]*r[0]
e[1]=t[1]*r[1]
e[2]=t[2]*r[2]
e[3]=t[3]*r[3]
return e}function v4mulAdd(e,t,r,a){e[0]=t[0]*r[0]+a[0]
e[1]=t[1]*r[1]+a[1]
e[2]=t[2]*r[2]+a[2]
e[3]=t[3]*r[3]+a[3]
return e}function v4same(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function v4scale(e,t,r){e[0]=t[0]*r
e[1]=t[1]*r
e[2]=t[2]*r
e[3]=t[3]*r
return e}function v4set(e,t,r,a,i){e[0]=t
e[1]=r
e[2]=a
e[3]=i
return e}function v4zero(e){e[0]=e[1]=e[2]=e[3]=0
return e}function mat4isFinite(e){return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(e[3])&&isFinite(e[4])&&isFinite(e[5])&&isFinite(e[6])&&isFinite(e[7])&&isFinite(e[8])&&isFinite(e[9])&&isFinite(e[10])&&isFinite(e[11])&&isFinite(e[12])&&isFinite(e[13])&&isFinite(e[14])&&isFinite(e[15])}},{"gl-mat3/create":void 0,"gl-mat4/create":void 0}],95:[function(e,t,r){"use strict"
r.isProfane=isProfane
r.isReserved=isReserved
r.profanityCommonStartup=profanityCommonStartup
r.profanityFilterCommon=profanityFilterCommon
r.profanitySetReplacementChars=profanitySetReplacementChars
r.reservedStartup=reservedStartup
var c=e("assert")
var d=Math.max
var v="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+"
var p="4bcd3fgh1jk1mn0pqr57uvwxy24bcd3fgh1jk1mn0pqr57uvwxy201234567897"
var a=/\S+/g
var h={}
var i={}
function cannonizeCharacter(e){e=i[e]||e
return h[e]||""}function canonize(e){return e.split("").map(cannonizeCharacter).join("")}function rot13(e){return e.split("").map(function(e){if((e=e.charCodeAt(0))>=97&&e<=122)e=97+(e-97+13)%26
else if(e>=65&&e<=90)e=65+(e-65+13)%26
return String.fromCharCode(e)}).join("")}var _={}
var o={}
var s=["","s","s","in","ing","er","ers","ed","y"]
var m=["","5","35","1n","1ng","3r","3r5","3d","y"]
var g=0
var y=false
function profanityCommonStartup(e,t){c(!y)
y=true
for(var r=0;r<v.length;++r)h[v[r]]=p[r]
var a=e.split("\n").filter(function(e){return e})
for(var i=0;i<a.length;++i){var n=rot13(a[i])
var o=n.length
n=canonize(n)
c.equal(o,n.length)
for(var s=0;s<m.length;++s){var l=n+m[s]
var u=_[l]
if(!u||u>s){g=d(g,l.length)
_[l]=s+1}}}a=t.split("\n").filter(function(e){return e})
for(var f=0;f<a.length;++f)delete _[canonize(a[f])]}function profanitySetReplacementChars(e){c(e)
for(var t in e){var r=e[t]
r=String.fromCharCode(r)
var a=String.fromCharCode(Number(t))
if(" "===r)if(""!==a.trim()){console.log("Invalid whitespace replacement character: "+t)
continue}i[a]=r}}var l=[]
function reservedStartup(e,t){var r=e.split("\n").filter(function(e){return e})
for(var a=0;a<r.length;++a){var i=canonize(r[a])
o[i]=1}for(var n=0;n<t.length;++n)l.push(canonize(t[n]))}var u
function filterWord(e){if(e.length>=g)return e
var t=e[0].toUpperCase()===e[0]
var r=canonize(e)
var a=_[r]
if(!a)return e;--a
var i=u()
if(t)i=i[0].toUpperCase()+i.slice(1)
var n=s[a]
if(i[i.length-1]===n[0])n=n.slice(1)
if(i.endsWith("e")&&"i"===n[0])i=i.slice(0,-1)
return i+n}var n
function checkWord(e){if(e.length>=g)return
if(_[canonize(e)])n=true}function profanityFilterCommon(e,t){c(y)
u=t
return e.replace(a,filterWord)}function isProfane(e){c(y)
n=false
e.replace(a,checkWord)
return n}var f
function checkReserved(e){e=canonize(e)
if(o[e])f=true
for(var t=0;t<l.length;++t)if(e.includes(l[t]))f=true}function isReserved(e){c(y)
f=false
e.replace(a,checkReserved)
var t=canonize(e.replace(/[\s_.]/g,""))
for(var r=0;r<l.length;++r)if(t.includes(l[r]))f=true
return f}},{assert:void 0}],96:[function(e,t,r){"use strict"
r.PING_TIME=r.CONNECTION_TIMEOUT=void 0
r.netDelayGet=netDelayGet
r.netDelaySet=netDelaySet
r.sendMessage=sendMessage
r.wsHandleMessage=wsHandleMessage
r.wsPak=wsPak
r.wsPakSendDest=wsPakSendDest
r.wsstats_out=r.wsstats=void 0
var i={msgs:0,bytes:0}
r.wsstats=i
var n={msgs:0,bytes:0}
r.wsstats_out=n
var a=e("./ack.js")
var f=e("assert")
var s=a.ackHandleMessage,c=a.ackReadHeader,o=a.ackWrapPakStart,l=a.ackWrapPakPayload,d=a.ackWrapPakFinish
var u=Math.random,v=Math.round
var p=e("./packet.js"),h=p.isPacket,_=p.packetCreate,m=p.packetDefaultFlags,g=p.packetFromBuffer
var y=e("./perfcounters.js").perfCounterAddValue
var w=6e4
var b=(r.CONNECTION_TIMEOUT=w)/2
r.PING_TIME=b
var x=28
var S=0
var E=0
function socketSendInternal(e,t,r){if(e.ws_server)e.socket.send(t,r.pool.bind(r))
else{e.socket.send(t)
r.pool()}}function netDelaySet(e,t){if(void 0===e){e=100
t=50}if(e)console.log("NetDelay: ON ("+e+"+"+t+")")
else console.log("NetDelay: Off")
S=e
E=t}function netDelayGet(){return[S,E]}function NetDelayer(e,t){this.client=e
this.head=null
this.tail=null
this.tick=this.tickFn.bind(this)}NetDelayer.prototype.send=function(e,t){var r=Date.now()
var a=v(S+E*u())
var i={buf:e,pak:t,time:r+a,next:null}
if(this.tail){this.tail.next=i
this.tail=i}else{this.head=this.tail=i
setTimeout(this.tick,a)}}
NetDelayer.prototype.tickFn=function(){var e=this.client
if(e.net_delayer!==this){while(this.head){var t=this.head
t.pak.pool()
this.head=t.next}this.tail=null
return}var r=Date.now()
do{var a=this.head
this.head=a.next
if(!this.head)this.tail=null
socketSendInternal(e,a.buf,a.pak)}while(this.head&&this.head.time<=r)
if(this.head)setTimeout(this.tick,this.head.time-r)}
function wsPakSendDest(e,t){if(!e.connected||1!==e.socket.readyState){console.warn("Attempting to send on a disconnected link (client_id:"+e.id+"), ignoring")
t.pool()
return}var r=t.getBuffer()
var a=t.getBufferLen()
if(a!==r.length)r=new Uint8Array(r.buffer,r.byteOffset,a)
y("net.send_bytes.total",r.length)
n.msgs++
n.bytes+=r.length
if(S){if(!e.net_delayer)e.net_delayer=new NetDelayer(e)
e.net_delayer.send(r,t)}else socketSendInternal(e,r,t)
e.last_send_time=Date.now()}function wsPakSendFinish(e,t,r){var a=e.ws_data,i=a.client,n=a.msg
delete e.ws_data
var o=d(e,t,r)
if(!i.connected||1!==i.socket.readyState){if("channel_msg"===n){e.seek(0)
e.readFlags()
var s=c(e)
var l
var u
if(h(s.data)){e.ref()
l=e.readAnsiString()
u=e.readAnsiString()
if(!e.ended())e.pool()}else{l=s.data.channel_id
u=s.data.msg}n="channel_msg:"+l+":"+u}if("number"!==typeof n){(i.log?i:console).log("Attempting to send msg="+n+" on a disconnected link, ignoring")
if(!i.log&&i.onError&&n)i.onError("Attempting to send msg="+n+" on a disconnected link")}if(o)delete i.resp_cbs[o]
e.pool()
return}f.equal(Boolean(r&&false!==r.expecting_response),Boolean(o))
wsPakSendDest(i,e)}function wsPakSend(e,t){if("function"===typeof e&&!t){t=e
e=null}wsPakSendFinish(this,e,t)}function wsPak(e,t,r,a){f("string"===typeof e||"number"===typeof e)
var i=_(t?t.getInternalFlags():m(),t?t.totalSize()+x:0)
i.writeFlags()
o(i,r,e,a)
i.ws_data={msg:e,client:r}
i.send=wsPakSend
return i}function sendMessageInternal(e,t,r,a,i,n){var o=wsPak(t,h(a)?a:null,e,i)
if(!r)l(o,a)
o.send(r,n)}function sendMessage(e,t,r,a){sendMessageInternal(this,e,null,t,r,a)}function wsHandleMessage(n,e,t){++i.msgs
var r=Date.now()
var o=n.id?"client "+n.id:"server"
if(!(e instanceof Uint8Array)){(n.log?n:console).log("Received incorrect WebSocket data type from "+o+" ("+typeof e+")")
if("string"===typeof e)(n.log?n:console).log("Invalid WebSocket data: "+JSON.stringify(e.slice(0,120)))
if(n.ws_server){if(!n.has_warned_about_text){n.has_warned_about_text=true
n.send("error","Server received non-binary WebSocket data.  Likely cause is a proxy, VPN or something else intercepting and modifying network traffic.")}return}return void n.onError("Invalid data received")}i.bytes+=e.length
var a=g(e,e.length,false)
a.readFlags()
n.last_receive_time=r
n.idle_counter=0
return void s(n,o,a,function sendFunc(e,t,r,a){if(a&&!a.expecting_response)a=null
sendMessageInternal(n,e,t,r,null,a)},function pakFunc(e,t){return wsPak(e,t,n)},function handleFunc(e,t,r){var a=n.handlers[e]
if(!a){var i="No handler for message "+JSON.stringify(e)+" from "+o
console.error(i,h(t)?t.contents():t)
if(n.onError)return n.onError(i)
return r(i)}return a(n,t,r)},t)}},{"./ack.js":74,"./packet.js":86,"./perfcounters.js":87,assert:void 0}]},{},[1])

//# sourceMappingURL=app.bundle.js.map
