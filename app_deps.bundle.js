!function o(r,u,a){function i(n,e){if(!u[n]){if(!r[n]){var t="function"==typeof require&&require
if(!e&&t)return t(n,!0)
if(d)return d(n,!0)
throw(t=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",t}t=u[n]={exports:{}},r[n][0].call(t.exports,function(e){return i(r[n][1][e]||e)},t,t.exports,o,r,u,a)}return u[n].exports}for(var d="function"==typeof require&&require,e=0;e<a.length;e++)i(a[e])
return i}({1:[function(t,o,c){!function(r){!function(){"use strict"
!function(){function e(){this.init()}e.prototype={init:function(){var e=this||w
return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.safeToPlay=!1,e.autoUnlock=!0,e._setup(),e},volume:function(e){var n=this||w
if(e=parseFloat(e),n.ctx||l(),void 0!==e&&0<=e&&e<=1){if(n._volume=e,n._muted)return n
n.usingWebAudio&&n.masterGain.gain.setValueAtTime(e,w.ctx.currentTime)
for(var t=0;t<n._howls.length;t++)if(!n._howls[t]._webAudio)for(var o=n._howls[t]._getSoundIds(),r=0;r<o.length;r++){var u=n._howls[t]._soundById(o[r])
u&&u._node&&(u._node.volume=u._volume*e)}return n}return n._volume},mute:function(e){var n=this||w
n.ctx||l(),n._muted=e,n.usingWebAudio&&n.masterGain.gain.setValueAtTime(e?0:n._volume,w.ctx.currentTime)
for(var t=0;t<n._howls.length;t++)if(!n._howls[t]._webAudio)for(var o=n._howls[t]._getSoundIds(),r=0;r<o.length;r++){var u=n._howls[t]._soundById(o[r])
u&&u._node&&(u._node.muted=!!e||u._muted)}return n},stop:function(){for(var e=this||w,n=0;n<e._howls.length;n++)e._howls[n].stop()
return e},unload:function(){for(var e=this||w,n=e._howls.length-1;0<=n;n--)e._howls[n].unload()
return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,l()),e},codecs:function(e){return(this||w)._codecs[e.replace(/^x-/,"")]},_setup:function(){var n=this||w
if(n.state=n.ctx&&n.ctx.state||"suspended","running"===n.state&&(n.safeToPlay=!0),n._autoSuspend(),!n.usingWebAudio)if("undefined"!=typeof Audio)try{void 0===(new Audio).oncanplaythrough&&(n._canPlayEvent="canplay")}catch(e){n.noAudio=!0}else n.noAudio=!0
try{(new Audio).muted&&(n.noAudio=!0)}catch(e){}return n.noAudio||n._setupCodecs(),n},_setupCodecs:function(){var e=this||w,n=null
try{n="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!n||"function"!=typeof n.canPlayType)return e
var t=n.canPlayType("audio/mpeg;").replace(/^no$/,""),o=(o=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g))&&parseInt(o[0].split("/")[1],10)<33
return e._codecs={mp3:!(o||!t&&!n.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!n.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!n.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!n.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(n.canPlayType("audio/x-m4a;")||n.canPlayType("audio/m4a;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(n.canPlayType("audio/x-mp4;")||n.canPlayType("audio/mp4;")||n.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(n.canPlayType("audio/x-flac;")||n.canPlayType("audio/flac;")).replace(/^no$/,"")},e},manualUnlock:function(){var e=this||w
!e.noAudio&&e.unlockFunction&&e.unlockFunction()},_unlockAudio:function(){var d=this||w
d._audioUnlocked=!1,d.autoUnlock=!1,d.ctx&&(d._mobileUnloaded||44100===d.ctx.sampleRate||(d._mobileUnloaded=!0,d.unload())),d.ctx&&(d._scratchBuffer=d.ctx.createBuffer(1,1,22050))
var s=d.unlockFunction=function(e){for(;d._html5AudioPool.length<d.html5PoolSize;)try{var n=new Audio
n._unlocked=!0,d._releaseHtml5Audio(n)}catch(e){d.noAudio=!0
break}for(var t,o=0;o<d._howls.length;o++)if(!d._howls[o]._webAudio)for(var r=d._howls[o]._getSoundIds(),u=0;u<r.length;u++){var a=d._howls[o]._soundById(r[u])
a&&a._node&&!a._node._unlocked&&(a._node._unlocked=!0,a._node.load())}function i(){d._audioUnlocked=!0,d.safeToPlay=!0,d.unlockFunction=null,document.removeEventListener("touchstart",s,!0),document.removeEventListener("touchend",s,!0),document.removeEventListener("click",s,!0),document.removeEventListener("mousedown",s,!0),document.removeEventListener("keydown",s,!0)
for(var e=0;e<d._howls.length;e++)d._howls[e]._emit("unlock")}d._autoResume(),d.ctx?((t=d.ctx.createBufferSource()).buffer=d._scratchBuffer,t.connect(d.ctx.destination),void 0===t.start?t.noteOn(0):t.start(0),"function"==typeof d.ctx.resume&&d.ctx.resume(),t.onended=function(){t.disconnect(0),i()}):i()}
return document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",s,!0),document.addEventListener("click",s,!0),document.addEventListener("mousedown",s,!0),document.addEventListener("keydown",s,!0),d},_obtainHtml5Audio:function(){var e=this||w
return e._html5AudioPool.length?e._html5AudioPool.pop():new Audio},_releaseHtml5Audio:function(e){var n=this||w
return e._unlocked&&n._html5AudioPool.push(e),n},_autoSuspend:function(){var e=this
if(!e.autoSuspend||!e.ctx||void 0===e.ctx.suspend||!w.usingWebAudio)return e
for(var n=0;n<e._howls.length;n++)if(e._howls[n]._webAudio)for(var t=0;t<e._howls[n]._sounds.length;t++)if(!e._howls[n]._sounds[t]._paused)return e
return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e},_autoResume:function(){var n=this
return n.ctx&&void 0!==n.ctx.resume&&w.usingWebAudio&&("running"===n.state&&n._suspendTimer?(clearTimeout(n._suspendTimer),n._suspendTimer=null):"suspended"===n.state?(n.ctx.resume().then(function(){n.state="running"
for(var e=0;e<n._howls.length;e++)n._howls[e]._emit("resume")}),n._suspendTimer&&(clearTimeout(n._suspendTimer),n._suspendTimer=null)):"suspending"===n.state&&(n._resumeAfterSuspend=!0)),n}}
function n(e){e.src&&0!==e.src.length?this.init(e):console.error("An array of source files must be passed with any new Howl.")}var w=new e
n.prototype={init:function(e){var n=this
return w.ctx||l(),n._autoplay=e.autoplay||!1,n._format="string"!=typeof e.format?e.format:[e.format],n._html5=e.html5||!1,n._muted=e.mute||!1,n._loop=e.loop||!1,n._pool=e.pool||5,n._preload="boolean"!=typeof e.preload||e.preload,n._rate=e.rate||1,n._sprite=e.sprite||{},n._src="string"!=typeof e.src?e.src:[e.src],n._volume=void 0!==e.volume?e.volume:1,n._xhrWithCredentials=e.xhrWithCredentials||!1,n._xhrHeaders=e.xhrHeaders||null,n._duration=0,n._state="unloaded",n._sounds=[],n._endTimers={},n._queue=[],n._playLock=!1,n._onend=e.onend?[{fn:e.onend}]:[],n._onfade=e.onfade?[{fn:e.onfade}]:[],n._onload=e.onload?[{fn:e.onload}]:[],n._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],n._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],n._onpause=e.onpause?[{fn:e.onpause}]:[],n._onplay=e.onplay?[{fn:e.onplay}]:[],n._onstop=e.onstop?[{fn:e.onstop}]:[],n._onmute=e.onmute?[{fn:e.onmute}]:[],n._onvolume=e.onvolume?[{fn:e.onvolume}]:[],n._onrate=e.onrate?[{fn:e.onrate}]:[],n._onseek=e.onseek?[{fn:e.onseek}]:[],n._onunlock=e.onunlock?[{fn:e.onunlock}]:[],n._onresume=[],n._webAudio=w.usingWebAudio&&!n._html5,w.autoUnlock&&w._unlockAudio(),w._howls.push(n),n._autoplay&&n._queue.push({event:"play",action:function(){n.play()}}),n._preload&&n.load(),n},load:function(){var e=this,n=null
if(w.noAudio)return e._emit("loaderror",null,"No audio support."),e
"string"==typeof e._src&&(e._src=[e._src])
for(var t,o,r=0;r<e._src.length;r++){if(e._format&&e._format[r])t=e._format[r]
else{if("string"!=typeof(o=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.")
continue}t=(t=(t=/^data:audio\/([^;,]+);/i.exec(o))||/\.([^.]+)$/.exec(o.split("?",1)[0]))&&t[1].toLowerCase()}if(t||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),t&&w.codecs(t)){n=e._src[r]
break}}return n?(e._src=n,e._state="loading","https:"===window.location.protocol&&"http:"===n.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new u(e),e._webAudio&&i(e)):e._emit("loaderror",null,"No codec support for selected audio sources."),e},play:function(n,t,o){var r=this,u=null
if("number"==typeof n)u=n,n=null
else{if("string"==typeof n&&"loaded"===r._state&&!r._sprite[n])return null
if(void 0===n&&(n="__default",!r._playLock)){for(var a=0,i=0;i<r._sounds.length;i++)r._sounds[i]._paused&&!r._sounds[i]._ended&&(a++,u=r._sounds[i]._id)
1===a?n=null:u=null}}var d=u?r._soundById(u):r._inactiveSound()
if(!d)return null
if(u&&!n&&(n=d._sprite||"__default"),"loaded"!==r._state){d._sprite=n,d._ended=!1
var s=d._id
return r._queue.push({event:"play",action:function(){r.play(s)}}),s}if(u&&!d._paused)return o||r._loadQueue("play"),d._id
r._webAudio&&w._autoResume()
var _=Math.max(0,0<d._seek?d._seek:r._sprite[n][0]/1e3),l=Math.max(0,(r._sprite[n][0]+r._sprite[n][1])/1e3-_),c=1e3*l/Math.abs(d._rate)
c+=500
var f=r._sprite[n][0]/1e3,p=(r._sprite[n][0]+r._sprite[n][1])/1e3
d._sprite=n,d._ended=!1
var m=function(){d._paused=!1,d._seek=_,d._start=f,d._stop=p,d._loop=!(!d._loop&&!r._sprite[n][2])}
if(p<=_)return r._ended(d),null
var v,h,y="number"==typeof t?t:d._volume,g=d._node
return r._webAudio?(h=function(){r._playLock=!1,m(),r._refreshBuffer(d)
var e=d._muted||r._muted?0:y
g.gain.setValueAtTime(e,w.ctx.currentTime),d._playStart=w.ctx.currentTime,void 0===g.bufferSource.start?d._loop?g.bufferSource.noteGrainOn(0,_,86400):g.bufferSource.noteGrainOn(0,_,l):d._loop?g.bufferSource.start(0,_,86400):g.bufferSource.start(0,_,l),c!==1/0&&(r._endTimers[d._id]=setTimeout(r._ended.bind(r,d),c)),o||setTimeout(function(){r._emit("play",d._id),r._loadQueue()},0)},"running"===w.state?h():(r._playLock=!0,r.once("resume",h),r._clearTimer(d._id))):(v=function(){g.currentTime=_,g.muted=d._muted||r._muted||w._muted||g.muted,g.volume=y*w.volume(),g.playbackRate=d._rate
try{var e=g.play()
if(e&&"undefined"!=typeof Promise&&(e instanceof Promise||"function"==typeof e.then)?(r._playLock=!0,m(),e.then(function(){r._playLock=!1,g._unlocked=!0,o||(r._emit("play",d._id),r._loadQueue())}).catch(function(){r._playLock=!1,r._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),d._ended=!0,d._paused=!0})):o||(r._playLock=!1,m(),r._emit("play",d._id),r._loadQueue()),g.playbackRate=d._rate,g.paused)return void r._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.")
"__default"!==n||d._loop?r._endTimers[d._id]=setTimeout(r._ended.bind(r,d),c):(r._endTimers[d._id]=function(){r._ended(d),g.removeEventListener("ended",r._endTimers[d._id],!1)},g.addEventListener("ended",r._endTimers[d._id],!1))}catch(e){r._emit("playerror",d._id,e)}},"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===g.src&&(g.src=r._src,g.load()),h=window&&window.ejecta||!g.readyState&&w._navigator.isCocoonJS,3<=g.readyState||h?v():(r._playLock=!0,h=function e(){v(),g.removeEventListener(w._canPlayEvent,e,!1)},g.addEventListener(w._canPlayEvent,h,!1),r._clearTimer(d._id))),d._id},pause:function(e){var n=this
if("loaded"!==n._state||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n
for(var t=n._getSoundIds(e),o=0;o<t.length;o++){n._clearTimer(t[o])
var r=n._soundById(t[o])
if(r&&!r._paused&&(r._seek=n.seek(t[o]),r._rateSeek=0,r._paused=!0,n._stopFade(t[o]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue
void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause()
arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var t=this
if("loaded"!==t._state||t._playLock)return t._queue.push({event:"stop",action:function(){t.stop(e)}}),t
for(var o=t._getSoundIds(e),r=0;r<o.length;r++){t._clearTimer(o[r])
var u=t._soundById(o[r])
u&&(u._seek=u._start||0,u._rateSeek=0,u._paused=!0,u._ended=!0,t._stopFade(o[r]),u._node&&(t._webAudio?u._node.bufferSource&&(void 0===u._node.bufferSource.stop?u._node.bufferSource.noteOff(0):u._node.bufferSource.stop(0),t._cleanBuffer(u._node)):isNaN(u._node.duration)&&u._node.duration!==1/0||(u._node.currentTime=u._start||0,u._node.pause(),u._node.duration===1/0&&t._clearSound(u._node))),n||t._emit("stop",u._id))}return t},mute:function(e,n){var t=this
if("loaded"!==t._state||t._playLock)return t._queue.push({event:"mute",action:function(){t.mute(e,n)}}),t
if(void 0===n){if("boolean"!=typeof e)return t._muted
t._muted=e}for(var o=t._getSoundIds(n),r=0;r<o.length;r++){var u=t._soundById(o[r])
u&&(u._muted=e,u._interval&&t._stopFade(u._id),t._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,w.ctx.currentTime):u._node&&(u._node.muted=!!w._muted||e),t._emit("mute",u._id))}return t},volume:function(){var e,n,t=this,o=arguments
if(0===o.length)return t._volume
if(1===o.length||2===o.length&&void 0===o[1]?0<=t._getSoundIds().indexOf(o[0])?r=parseInt(o[0],10):e=parseFloat(o[0]):2<=o.length&&(e=parseFloat(o[0]),r=parseInt(o[1],10)),!(void 0!==e&&0<=e&&e<=1))return(n=r?t._soundById(r):t._sounds[0])?n._volume:0
if("loaded"!==t._state||t._playLock)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,o)}}),t
void 0===r&&(t._volume=e)
for(var r=t._getSoundIds(r),u=0;u<r.length;u++)(n=t._soundById(r[u]))&&(n._volume=e,o[2]||t._stopFade(r[u]),t._webAudio&&n._node&&!n._muted?n._node.gain.setValueAtTime(e,w.ctx.currentTime):n._node&&!n._muted&&(n._node.volume=e*w.volume()),t._emit("volume",n._id))
return t},fade:function(e,n,t,o){var r=this
if("loaded"!==r._state||r._playLock)return r._queue.push({event:"fade",action:function(){r.fade(e,n,t,o)}}),r
e=parseFloat(e),n=parseFloat(n),t=parseFloat(t),r.volume(e,o)
for(var u=r._getSoundIds(o),a=0;a<u.length;a++){var i,d,s=r._soundById(u[a])
s&&(o||r._stopFade(u[a]),r._webAudio&&!s._muted&&(d=(i=w.ctx.currentTime)+t/1e3,s._volume=e,s._node.gain.setValueAtTime(e,i),s._node.gain.linearRampToValueAtTime(n,d)),r._startFadeInterval(s,e,n,t,u[a],void 0===o))}return r},_startFadeInterval:function(n,t,o,r,e,u){var a=this,i=t,d=o-t,s=Math.abs(d/.01),s=Math.max(4,0<s?r/s:r),_=Date.now()
n._fadeTo=o,n._interval=setInterval(function(){var e=(Date.now()-_)/r
_=Date.now(),i+=d*e,i=Math.max(0,i),i=Math.min(1,i),i=Math.round(100*i)/100,a._webAudio?n._volume=i:a.volume(i,n._id,!0),u&&(a._volume=i),(o<t&&i<=o||t<o&&o<=i)&&(clearInterval(n._interval),n._interval=null,n._fadeTo=null,a.volume(o,n._id),a._emit("fade",n._id))},s)},_stopFade:function(e){var n=this,t=n._soundById(e)
return t&&t._interval&&(n._webAudio&&t._node.gain.cancelScheduledValues(w.ctx.currentTime),clearInterval(t._interval),t._interval=null,n.volume(t._fadeTo,e),t._fadeTo=null,n._emit("fade",e)),n},loop:function(){var e,n,t,o=this,r=arguments
if(0===r.length)return o._loop
if(1===r.length){if("boolean"!=typeof r[0])return!!(t=o._soundById(parseInt(r[0],10)))&&t._loop
o._loop=e=r[0]}else 2===r.length&&(e=r[0],n=parseInt(r[1],10))
for(var u=o._getSoundIds(n),a=0;a<u.length;a++)(t=o._soundById(u[a]))&&(t._loop=e,o._webAudio&&t._node&&t._node.bufferSource&&(t._node.bufferSource.loop=e)&&(t._node.bufferSource.loopStart=t._start||0,t._node.bufferSource.loopEnd=t._stop))
return o},rate:function(){var e,n=this,t=arguments
if(0===t.length?u=n._sounds[0]._id:1===t.length?0<=n._getSoundIds().indexOf(t[0])?u=parseInt(t[0],10):e=parseFloat(t[0]):2===t.length&&(e=parseFloat(t[0]),u=parseInt(t[1],10)),"number"!=typeof e)return((r=n._soundById(u))||n)._rate
if("loaded"!==n._state||n._playLock)return n._queue.push({event:"rate",action:function(){n.rate.apply(n,t)}}),n
void 0===u&&(n._rate=e)
for(var o,r,u=n._getSoundIds(u),a=0;a<u.length;a++)(r=n._soundById(u[a]))&&(n.playing(u[a])&&(r._rateSeek=n.seek(u[a]),r._playStart=n._webAudio?w.ctx.currentTime:r._playStart),r._rate=e,n._webAudio&&r._node&&r._node.bufferSource?r._node.bufferSource.playbackRate.setValueAtTime(e,w.ctx.currentTime):r._node&&(r._node.playbackRate=e),o=n.seek(u[a]),o=1e3*((n._sprite[r._sprite][0]+n._sprite[r._sprite][1])/1e3-o)/Math.abs(r._rate),!n._endTimers[u[a]]&&r._paused||(n._clearTimer(u[a]),n._endTimers[u[a]]=setTimeout(n._ended.bind(n,r),o)),n._emit("rate",r._id))
return n},seek:function(){var n,t,o=this,r=arguments
if(0===r.length?t=o._sounds[0]._id:1===r.length?0<=o._getSoundIds().indexOf(r[0])?t=parseInt(r[0],10):o._sounds.length&&(t=o._sounds[0]._id,n=parseFloat(r[0])):2===r.length&&(n=parseFloat(r[0]),t=parseInt(r[1],10)),void 0===t)return o
if("loaded"!==o._state||o._playLock)return o._queue.push({event:"seek",action:function(){o.seek.apply(o,r)}}),o
var u=o._soundById(t)
if(u){if(!("number"==typeof n&&0<=n)){if(o._webAudio){var a=o.playing(t)?w.ctx.currentTime-u._playStart:0,i=u._rateSeek?u._rateSeek-u._seek:0
return u._seek+(i+a*Math.abs(u._rate))}return u._node.currentTime}var d=o.playing(t)
d&&o.pause(t,!0),u._seek=n,u._ended=!1,o._clearTimer(t),o._webAudio||!u._node||isNaN(u._node.duration)||(u._node.currentTime=n)
var s=function(){o._emit("seek",t),d&&o.play(t,void 0,!0)}
d&&!o._webAudio?(u=function e(){o._playLock?setTimeout(e,0):s()},setTimeout(u,0)):s()}return o},playing:function(e){if("number"==typeof e)return!!(e=this._soundById(e))&&!e._paused
for(var n=0;n<this._sounds.length;n++)if(!this._sounds[n]._paused)return!0
return!1},duration:function(e){var n=this._duration
return(e=this._soundById(e))?this._sprite[e._sprite][1]/1e3:n},state:function(){return this._state},unload:function(){for(var e=this,n=e._sounds,t=0;t<n.length;t++)n[t]._paused||e.stop(n[t]._id),e._webAudio||(e._clearSound(n[t]._node),n[t]._node.removeEventListener("error",n[t]._errorFn,!1),n[t]._node.removeEventListener(w._canPlayEvent,n[t]._loadFn,!1),w._releaseHtml5Audio(n[t]._node)),delete n[t]._node,e._clearTimer(n[t]._id)
var o=w._howls.indexOf(e)
0<=o&&w._howls.splice(o,1)
for(var r=!0,t=0;t<w._howls.length;t++)if(w._howls[t]._src===e._src||0<=e._src.indexOf(w._howls[t]._src)){r=!1
break}return a&&r&&delete a[e._src],w.noAudio=!1,e._state="unloaded",e._sounds=[],null},on:function(e,n,t,o){e=this["_on"+e]
return"function"==typeof n&&e.push(o?{id:t,fn:n,once:o}:{id:t,fn:n}),this},off:function(e,n,t){var o=this,r=o["_on"+e],u=0
if("number"==typeof n&&(t=n,n=null),n||t)for(u=0;u<r.length;u++){var a=t===r[u].id
if(n===r[u].fn&&a||!n&&a){r.splice(u,1)
break}}else if(e)o["_on"+e]=[]
else for(var i=Object.keys(o),u=0;u<i.length;u++)0===i[u].indexOf("_on")&&Array.isArray(o[i[u]])&&(o[i[u]]=[])
return o},once:function(e,n,t){return this.on(e,n,t,1),this},_emit:function(e,n,t){for(var o=this,r=o["_on"+e],u=r.length-1;0<=u;u--)r[u].id&&r[u].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,t)}.bind(o,r[u].fn),0),r[u].once&&o.off(e,r[u].fn,r[u].id))
return o._loadQueue(e),o},_loadQueue:function(e){var n,t=this
return 0<t._queue.length&&((n=t._queue[0]).event===e&&(t._queue.shift(),t._loadQueue()),e||n.action()),t},_ended:function(e){var n=this,t=e._sprite
if(!n._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(n._ended.bind(n,e),100),n
var o=!(!e._loop&&!n._sprite[t][2])
return n._emit("end",e._id),!n._webAudio&&o&&n.stop(e._id,!0).play(e._id),n._webAudio&&o&&(n._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=w.ctx.currentTime,t=1e3*(e._stop-e._start)/Math.abs(e._rate),n._endTimers[e._id]=setTimeout(n._ended.bind(n,e),t)),n._webAudio&&!o&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,n._clearTimer(e._id),n._cleanBuffer(e._node),w._autoSuspend()),n._webAudio||o||n.stop(e._id,!0),n},_clearTimer:function(e){var n,t=this
return t._endTimers[e]&&("function"!=typeof t._endTimers[e]?clearTimeout(t._endTimers[e]):(n=t._soundById(e))&&n._node&&n._node.removeEventListener("ended",t._endTimers[e],!1),delete t._endTimers[e]),t},_soundById:function(e){for(var n=0;n<this._sounds.length;n++)if(e===this._sounds[n]._id)return this._sounds[n]
return null},_inactiveSound:function(){var e=this
e._drain()
for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset()
return new u(e)},_drain:function(){var e=this,n=e._pool,t=0,o=0
if(!(e._sounds.length<n)){for(o=0;o<e._sounds.length;o++)e._sounds[o]._ended&&t++
for(o=e._sounds.length-1;0<=o;o--){if(t<=n)return
e._sounds[o]._ended&&(e._webAudio&&e._sounds[o]._node&&e._sounds[o]._node.disconnect(0),e._sounds.splice(o,1),t--)}}},_getSoundIds:function(e){if(void 0!==e)return[e]
for(var n=[],t=0;t<this._sounds.length;t++)n.push(this._sounds[t]._id)
return n},_refreshBuffer:function(e){return e._node.bufferSource=w.ctx.createBufferSource(),e._node.bufferSource.buffer=a[this._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,w.ctx.currentTime),this},_cleanBuffer:function(e){var n=w._navigator&&0<=w._navigator.vendor.indexOf("Apple")
if(w._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),n))try{e.bufferSource.buffer=w._scratchBuffer}catch(e){}return e.bufferSource=null,this},_clearSound:function(e){/MSIE |Trident\//.test(w._navigator&&w._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}}
var u=function(e){this._parent=e,this.init()}
u.prototype={init:function(){var e=this,n=e._parent
return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._rate=n._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++w._counter,n._sounds.push(e),e.create(),e},create:function(){var e=this,n=e._parent,t=w._muted||e._muted||e._parent._muted?0:e._volume
return n._webAudio?(e._node=void 0===w.ctx.createGain?w.ctx.createGainNode():w.ctx.createGain(),e._node.gain.setValueAtTime(t,w.ctx.currentTime),e._node.paused=!0,e._node.connect(w.masterGain)):w.noAudio||(e._node=w._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(w._canPlayEvent,e._loadFn,!1),e._node.src=n._src,e._node.preload=n._html5?"metadata":"auto",e._node.volume=t*w.volume(),e._node.load()),e},reset:function(){var e=this,n=e._parent
return e._muted=n._muted,e._loop=n._loop,e._volume=n._volume,e._rate=n._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++w._counter,e},_errorListener:function(){var e=this
e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this._parent
e._duration=Math.ceil(10*this._node.duration)/10,0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue()),this._node.removeEventListener(w._canPlayEvent,this._loadFn,!1)}}
var a={},i=function(n){var e=n._src
if(a[e])return n._duration=a[e].duration,void _(n)
if(/^data:[^;]+;base64,/.test(e)){for(var t=atob(e.split(",")[1]),o=new Uint8Array(t.length),r=0;r<t.length;++r)o[r]=t.charCodeAt(r)
s(o.buffer,n)}else{var u=new XMLHttpRequest
u.open("GET",e,!0),u.withCredentials=n._xhrWithCredentials,u.responseType="arraybuffer",n._xhrHeaders&&Object.keys(n._xhrHeaders).forEach(function(e){u.setRequestHeader(e,n._xhrHeaders[e])}),u.onload=function(){var e=(u.status+"")[0]
"0"===e||"2"===e||"3"===e?s(u.response,n):n._emit("loaderror",null,"Failed loading audio file with status: "+u.status+".")},u.onerror=function(){n._webAudio&&(n._html5=!0,n._webAudio=!1,n._sounds=[],delete a[e],n.load())},d(u)}},d=function(n){try{n.send()}catch(e){n.onerror()}},s=function(e,n){function t(){n._emit("loaderror",null,"Decoding audio data failed.")}function o(e){e&&0<n._sounds.length?(a[n._src]=e,_(n,e)):t()}"undefined"!=typeof Promise&&1===w.ctx.decodeAudioData.length?w.ctx.decodeAudioData(e).then(o).catch(t):w.ctx.decodeAudioData(e,o,t)},_=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},l=function(){if(w.usingWebAudio){try{"undefined"!=typeof AudioContext?w.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?w.ctx=new webkitAudioContext:w.usingWebAudio=!1}catch(e){w.usingWebAudio=!1}w.ctx||(w.usingWebAudio=!1)
var e=/iP(hone|od|ad)/.test(w._navigator&&w._navigator.platform),n=(n=w._navigator&&w._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))?parseInt(n[1],10):null
e&&n&&n<9&&(n=/safari/.test(w._navigator&&w._navigator.userAgent.toLowerCase()),w._navigator&&!n&&(w.usingWebAudio=!1)),w.usingWebAudio&&(w.masterGain=void 0===w.ctx.createGain?w.ctx.createGainNode():w.ctx.createGain(),w.masterGain||(w.usingWebAudio=!1),w.masterGain.gain.setValueAtTime(w._muted?0:w._volume,w.ctx.currentTime),w.masterGain.connect(w.ctx.destination)),w._setup()}}
"function"==typeof define&&define.amd&&define([],function(){return{Howler:w,Howl:n}}),void 0!==c&&(c.Howler=w,c.Howl=n),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=w,window.Howl=n,window.Sound=u):void 0!==r&&(r.HowlerGlobal=e,r.Howler=w,r.Howl=n,r.Sound=u)}()}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,n,t){"use strict"
n.exports=function(){var e=new Float32Array(9)
return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}},{}],3:[function(e,n,t){"use strict"
n.exports=function(e,n){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[4],e[4]=n[5],e[5]=n[6],e[6]=n[8],e[7]=n[9],e[8]=n[10],e}},{}],4:[function(e,n,t){"use strict"
n.exports=function(e,n){return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}},{}],5:[function(e,n,t){"use strict"
n.exports=function(){var e=new Float32Array(16)
return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}},{}],6:[function(e,n,t){"use strict"
n.exports=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}},{}],7:[function(e,n,t){"use strict"
n.exports=function(e,n){var t=n[0],o=n[1],r=n[2],u=n[3],a=n[4],i=n[5],d=n[6],s=n[7],_=n[8],l=n[9],c=n[10],f=n[11],p=n[12],m=n[13],v=n[14],h=n[15],y=t*i-o*a,g=t*d-r*a,w=t*s-u*a,b=o*d-r*i,A=o*s-u*i,T=r*s-u*d,x=_*m-l*p,k=_*v-c*p,S=_*h-f*p,I=l*v-c*m,L=l*h-f*m,B=c*h-f*v
return(n=y*B-g*L+w*I+b*S-A*k+T*x)?(e[0]=(i*B-d*L+s*I)*(n=1/n),e[1]=(r*L-o*B-u*I)*n,e[2]=(m*T-v*A+h*b)*n,e[3]=(c*A-l*T-f*b)*n,e[4]=(d*S-a*B-s*k)*n,e[5]=(t*B-r*S+u*k)*n,e[6]=(v*w-p*T-h*g)*n,e[7]=(_*T-c*w+f*g)*n,e[8]=(a*L-i*S+s*x)*n,e[9]=(o*S-t*L-u*x)*n,e[10]=(p*A-m*w+h*y)*n,e[11]=(l*w-_*A-f*y)*n,e[12]=(i*k-a*I-d*x)*n,e[13]=(t*I-o*k+r*x)*n,e[14]=(m*g-p*b-v*y)*n,e[15]=(_*b-l*g+c*y)*n,e):null}},{}],8:[function(e,n,t){"use strict"
var p=e("./identity")
n.exports=function(e,n,t,o){var r,u=n[0],a=n[1],i=n[2],d=o[0],s=o[1],_=o[2],l=t[0],c=t[1],f=t[2]
if(Math.abs(u-l)<1e-6&&Math.abs(a-c)<1e-6&&Math.abs(i-f)<1e-6)return p(e)
r=u-l,n=a-c,o=i-f,l=s*(o*=t=1/Math.sqrt(r*r+n*n+o*o))-_*(n*=t),c=_*(r*=t)-d*o,f=d*n-s*r,(t=Math.sqrt(l*l+c*c+f*f))?(l*=t=1/t,c*=t,f*=t):f=c=l=0
_=n*f-o*c,d=o*l-r*f,s=r*c-n*l,(t=Math.sqrt(_*_+d*d+s*s))?(_*=t=1/t,d*=t,s*=t):s=d=_=0
return e[0]=l,e[1]=_,e[2]=r,e[3]=0,e[4]=c,e[5]=d,e[6]=n,e[7]=0,e[8]=f,e[9]=s,e[10]=o,e[11]=0,e[12]=-(l*u+c*a+f*i),e[13]=-(_*u+d*a+s*i),e[14]=-(r*u+n*a+o*i),e[15]=1,e}},{"./identity":6}],9:[function(e,n,t){"use strict"
n.exports=function(e,n,t){var o=n[0],r=n[1],u=n[2],a=n[3],i=n[4],d=n[5],s=n[6],_=n[7],l=n[8],c=n[9],f=n[10],p=n[11],m=n[12],v=n[13],h=n[14],y=n[15],g=t[0],w=t[1],b=t[2],n=t[3]
return e[0]=g*o+w*i+b*l+n*m,e[1]=g*r+w*d+b*c+n*v,e[2]=g*u+w*s+b*f+n*h,e[3]=g*a+w*_+b*p+n*y,g=t[4],w=t[5],b=t[6],n=t[7],e[4]=g*o+w*i+b*l+n*m,e[5]=g*r+w*d+b*c+n*v,e[6]=g*u+w*s+b*f+n*h,e[7]=g*a+w*_+b*p+n*y,g=t[8],w=t[9],b=t[10],n=t[11],e[8]=g*o+w*i+b*l+n*m,e[9]=g*r+w*d+b*c+n*v,e[10]=g*u+w*s+b*f+n*h,e[11]=g*a+w*_+b*p+n*y,g=t[12],w=t[13],b=t[14],n=t[15],e[12]=g*o+w*i+b*l+n*m,e[13]=g*r+w*d+b*c+n*v,e[14]=g*u+w*s+b*f+n*h,e[15]=g*a+w*_+b*p+n*y,e}},{}],10:[function(e,n,t){"use strict"
n.exports=function(e,n,t,o,r){var u=1/Math.tan(n/2),n=1/(o-r)
return e[0]=u/t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=u,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+o)*n,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*o*n,e[15]=0,e}},{}],11:[function(e,n,t){"use strict"
n.exports=function(e,n){var t,o,r,u,a,i
e===n?(t=n[1],o=n[2],r=n[3],u=n[6],a=n[7],i=n[11],e[1]=n[4],e[2]=n[8],e[3]=n[12],e[4]=t,e[6]=n[9],e[7]=n[13],e[8]=o,e[9]=u,e[11]=n[14],e[12]=r,e[13]=a,e[14]=i):(e[0]=n[0],e[1]=n[4],e[2]=n[8],e[3]=n[12],e[4]=n[1],e[5]=n[5],e[6]=n[9],e[7]=n[13],e[8]=n[2],e[9]=n[6],e[10]=n[10],e[11]=n[14],e[12]=n[3],e[13]=n[7],e[14]=n[11],e[15]=n[15])
return e}},{}],12:[function(e,n,t){"use strict"
var p=e("assert")
function o(n,t,o,r){p.equal(typeof t,"number"),p(Array.isArray(n)),p.equal(typeof o,"function"),p.equal(typeof r,"function")
var u=n.length,a=u,i=0,d=0,s=[],_=null,l=!1
function c(){for(l=!0;d!==u&&i<t;){var e=d++;++i,o(n[e],f.bind(null,e),e)}a||r(_,s),l=!1}function f(e,n,t){p.equal(s[e],void 0),s[e]=t,n&&(_=_||n),--i,--a,l||c()}c()}function r(e,n,t){o(e,n,function(e,n){e(n)},t)}t.series=function(e,o){var r=e.length
r?function n(t){e[t](function(e){return e?o(e):t<r-1?n(t+1):o()})}(0):o()},t.eachLimit=o,t.each=function(e,n,t){o(e,1/0,n,t)},t.eachSeries=function(e,n,t){o(e,1,n,t)},t.parallelLimit=r,t.parallel=function(e,n){r(e,1/0,n)},t.limiter=function(e){var t=e,o=null,r=null
function n(){var e
o?((o=(e=o).next)||(r=null),u(e)):++t}function u(e){e.cb?e.exec(function(){e.cb.apply(e,arguments),n()}):e.exec(n)}return function(e,n){n={exec:e,cb:n}
t?(--t,u(n)):o?(r.next=n,r=n):o=r=n}},Object.keys(t).forEach(function(e){t["async"+e[0].toUpperCase()+e.slice(1)]=t[e]})},{assert:15}],13:[function(e,n,t){"use strict"
e("../glov/client/require.js"),deps.assert=e("assert"),deps.buffer=e("buffer"),deps["glov-async"]=e("glov-async"),deps["gl-mat3/create"]=e("gl-mat3/create"),deps["gl-mat3/fromMat4"]=e("gl-mat3/fromMat4"),deps["gl-mat4/copy"]=e("gl-mat4/copy"),deps["gl-mat4/create"]=e("gl-mat4/create"),deps["gl-mat4/invert"]=e("gl-mat4/invert"),deps["gl-mat4/lookAt"]=e("gl-mat4/lookAt"),deps["gl-mat4/multiply"]=e("gl-mat4/multiply"),deps["gl-mat4/perspective"]=e("gl-mat4/perspective"),deps["gl-mat4/transpose"]=e("gl-mat4/transpose"),deps["@jimbly/howler/src/howler.core.js"]=e("@jimbly/howler/src/howler.core.js")},{"../glov/client/require.js":14,"@jimbly/howler/src/howler.core.js":1,assert:15,buffer:16,"gl-mat3/create":2,"gl-mat3/fromMat4":3,"gl-mat4/copy":4,"gl-mat4/create":5,"gl-mat4/invert":7,"gl-mat4/lookAt":8,"gl-mat4/multiply":9,"gl-mat4/perspective":10,"gl-mat4/transpose":11,"glov-async":12}],14:[function(e,n,t){"use strict"
var o="undefined"==typeof window?self:window,r=o.deps=o.deps||{}
o.require=function(e){if(!r[e])throw new Error("Cannot find module '"+e+"' (add it to deps.js or equivalent)")
return r[e]}},{}],15:[function(e,n,t){"use strict"
function o(e,n){if(!e)throw n=n||(void 0===e||!1===e?"":JSON.stringify(e)),new Error("Assertion failed"+(n?": "+n:""))}n.exports=o,n.exports.ok=o,n.exports.equal=function(e,n){if(e!==n)throw new Error('Assertion failed: "'+e+'"==="'+n+'"')}},{}],16:[function(e,n,t){"use strict"
t.__esModule=!0,t.Buffer=void 0
var o={};(t.Buffer=o).isBuffer=function(e){return!1}},{}]},{},[13])

//# sourceMappingURL=app_deps.bundle.js.map
