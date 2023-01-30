"use strict";

function _instanceof(left, right) {
	if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
		return !!right[Symbol.hasInstance](left)
	} else {
		return left instanceof right
	}
}
function _typeof(obj) {
	"@babel/helpers - typeof"
	return (
		(_typeof =
			"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
				? function (obj) {
						return typeof obj
				  }
				: function (obj) {
						return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
							? "symbol"
							: typeof obj
				  }),
		_typeof(obj)
	)
}
/*! For license information please see jibb_WebexXapi.js.LICENSE.txt */
!(function (t, e) {
	"object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) &&
	"object" == (typeof module === "undefined" ? "undefined" : _typeof(module))
		? (module.exports = e(require("xapi")))
		: "function" == typeof define && define.amd
		? define(["xapi"], e)
		: "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports))
		? (exports.JIBB = e(require("xapi")))
		: (t.JIBB = e(t.xapi))
})(global, function (t) {
	return (function () {
		"use strict"

		var e,
			r = {
				9491: function _(t) {
					t.exports = require("assert")
				},
				4300: function _(t) {
					t.exports = require("buffer")
				},
				2361: function _(t) {
					t.exports = require("events")
				},
				7147: function _(t) {
					t.exports = require("fs")
				},
				8188: function _(t) {
					t.exports = require("module")
				},
				2037: function _(t) {
					t.exports = require("os")
				},
				1017: function _(t) {
					t.exports = require("path")
				},
				2781: function _(t) {
					t.exports = require("stream")
				},
				1576: function _(t) {
					t.exports = require("string_decoder")
				},
				6224: function _(t) {
					t.exports = require("tty")
				},
				7310: function _(t) {
					t.exports = require("url")
				},
				3837: function _(t) {
					t.exports = require("util")
				},
				6144: function _(t) {
					t.exports = require("vm")
				},
				1267: function _(t) {
					t.exports = require("worker_threads")
				},
				8994: function _(e) {
					e.exports = t
				},
			},
			n = {}
		function o(t) {
			var e = n[t]
			if (void 0 !== e) return e.exports
			var i = (n[t] = {
				exports: {},
			})
			return r[t](i, i.exports, o), i.exports
		}
		;(o.m = r),
			(o.n = function (t) {
				var e =
					t && t.__esModule
						? function () {
								return t.default
						  }
						: function () {
								return t
						  }
				return (
					o.d(e, {
						a: e,
					}),
					e
				)
			}),
			(o.d = function (t, e) {
				for (var r in e)
					o.o(e, r) &&
						!o.o(t, r) &&
						Object.defineProperty(t, r, {
							enumerable: !0,
							get: e[r],
						})
			}),
			(o.f = {}),
			(o.e = function (t) {
				return Promise.all(
					Object.keys(o.f).reduce(function (e, r) {
						return o.f[r](t, e), e
					}, [])
				)
			}),
			(o.u = function (t) {
				return t + ".jibb_WebexXapi.js"
			}),
			(o.o = function (t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}),
			(o.r = function (t) {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, {
						value: "Module",
					}),
					Object.defineProperty(t, "__esModule", {
						value: !0,
					})
			}),
			(e = {
				179: 1,
			}),
			(o.f.require = function (t, r) {
				e[t] ||
					(function (t) {
						var r = t.modules,
							n = t.ids,
							i = t.runtime
						for (var a in r) o.o(r, a) && (o.m[a] = r[a])
						i && i(o)
						for (var c = 0; c < n.length; c++) e[n[c]] = 1
					})(require("./" + o.u(t)))
			})
		var i = {}
		return (
			(function () {
				o.d(i, {
					default: function _default() {
						return ze
					},
				})
				var t = {}
				o.r(t),
					o.d(t, {
						configure: function configure() {
							return $
						},
						generateAPIKey: function generateAPIKey() {
							return nt
						},
						generateCustomAuthPassword: function generateCustomAuthPassword() {
							return it
						},
						getUserClaims: function getUserClaims() {
							return V
						},
						getUserToken: function getUserToken() {
							return tt
						},
						logout: function logout() {
							return rt
						},
						setUserToken: function setUserToken() {
							return Q
						},
					})
				var e = {}
				o.r(e),
					o.d(e, {
						createMeeting: function createMeeting() {
							return Ut
						},
						createShare: function createShare() {
							return ce
						},
						createTemporaryShare: function createTemporaryShare() {
							return Bt
						},
						deleteMeeting: function deleteMeeting() {
							return Xt
						},
						deleteMeetingImages: function deleteMeetingImages() {
							return Ft
						},
						deleteShare: function deleteShare() {
							return he
						},
						endMeeting: function endMeeting() {
							return Wt
						},
						getIncomingShares: function getIncomingShares() {
							return se
						},
						getMeetingDetails: function getMeetingDetails() {
							return ee
						},
						getMeetingImage: function getMeetingImage() {
							return Ht
						},
						getMeetingImages: function getMeetingImages() {
							return qt
						},
						getMeetingList: function getMeetingList() {
							return Zt
						},
						getMeetingToken: function getMeetingToken() {
							return Qt
						},
						getMeetingTokenFromTempShareId: function getMeetingTokenFromTempShareId() {
							return Nt
						},
						getOutgoingShares: function getOutgoingShares() {
							return fe
						},
						isMeetingOwner: function isMeetingOwner() {
							return ie
						},
						startMeeting: function startMeeting() {
							return Jt
						},
						updateMeeting: function updateMeeting() {
							return ne
						},
						updateShare: function updateShare() {
							return ve
						},
					})
				var r = {}
				o.r(r),
					o.d(r, {
						getCameraList: function getCameraList() {
							return xe
						},
						getCameraPreview: function getCameraPreview() {
							return Le
						},
						getClientStatusList: function getClientStatusList() {
							return Ue
						},
						sendMessage: function sendMessage() {
							return Te
						},
						setRuntimeConfig: function setRuntimeConfig() {
							return Ce
						},
						startStream: function startStream() {
							return Ee
						},
						stopStream: function stopStream() {
							return Oe
						},
					})
				var n = {}
				function a(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
					}
				}
				o.r(n),
					o.d(n, {
						startRecording: function startRecording() {
							return De
						},
						stopRecording: function stopRecording() {
							return Ye
						},
						takeSnapshot: function takeSnapshot() {
							return Ke
						},
					})
				var c = new ((function () {
					function t() {
						!(function (t, e) {
							if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function")
						})(this, t),
							(this.apiBaseURL = "https://api.jibb.ai")
					}
					var e, r
					return (
						(e = t),
						(r = [
							{
								key: "setApiBaseURL",
								value: function value(t) {
									this.apiBaseURL = t
								},
							},
						]) && a(e.prototype, r),
						Object.defineProperty(e, "prototype", {
							writable: !1,
						}),
						t
					)
				})())()
				function u(t) {
					this.message = t
				}
				;(u.prototype = new Error()), (u.prototype.name = "InvalidCharacterError")
				var s =
					("undefined" != typeof window && window.atob && window.atob.bind(window)) ||
					function (t) {
						var e = String(t).replace(/=+$/, "")
						if (e.length % 4 == 1) throw new u("'atob' failed: The string to be decoded is not correctly encoded.")
						for (
							var r, n, o = 0, i = 0, a = "";
							(n = e.charAt(i++));
							~n && ((r = o % 4 ? 64 * r + n : n), o++ % 4)
								? (a += String.fromCharCode(255 & (r >> ((-2 * o) & 6))))
								: 0
						)
							n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n)
						return a
					}
				function p(t) {
					var e = t.replace(/-/g, "+").replace(/_/g, "/")
					switch (e.length % 4) {
						case 0:
							break
						case 2:
							e += "=="
							break
						case 3:
							e += "="
							break
						default:
							throw "Illegal base64url string!"
					}
					try {
						return (function (t) {
							return decodeURIComponent(
								s(t).replace(/(.)/g, function (t, e) {
									var r = e.charCodeAt(0).toString(16).toUpperCase()
									return r.length < 2 && (r = "0" + r), "%" + r
								})
							)
						})(e)
					} catch (t) {
						return s(e)
					}
				}
				function f(t) {
					this.message = t
				}
				;(f.prototype = new Error()), (f.prototype.name = "InvalidTokenError")
				function l(t) {
					return (
						(l =
							"function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator)
								? function (t) {
										return _typeof(t)
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: _typeof(t)
								  }),
						l(t)
					)
				}
				function h(t, e) {
					if ("function" != typeof e && null !== e)
						throw new TypeError("Super expression must either be null or a function")
					;(t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0,
						},
					})),
						Object.defineProperty(t, "prototype", {
							writable: !1,
						}),
						e && y(t, e)
				}
				function y(t, e) {
					return (
						(y = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (t, e) {
									return (t.__proto__ = e), t
							  }),
						y(t, e)
					)
				}
				function v(t) {
					var e = (function () {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1
						if (Reflect.construct.sham) return !1
						if ("function" == typeof Proxy) return !0
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
						} catch (t) {
							return !1
						}
					})()
					return function () {
						var r,
							n = m(t)
						if (e) {
							var o = m(this).constructor
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments)
						return d(this, r)
					}
				}
				function d(t, e) {
					if (e && ("object" === l(e) || "function" == typeof e)) return e
					if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined")
					return (function (t) {
						if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
						return t
					})(t)
				}
				function m(t) {
					return (
						(m = Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function (t) {
									return t.__proto__ || Object.getPrototypeOf(t)
							  }),
						m(t)
					)
				}
				function g(t, e) {
					if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function")
				}
				function w(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
					}
				}
				function b(t, e, r) {
					return (
						e && w(t.prototype, e),
						r && w(t, r),
						Object.defineProperty(t, "prototype", {
							writable: !1,
						}),
						t
					)
				}
				var x = "USER",
					j = "ADMIN",
					L = "SUPERADMIN",
					k = (function () {
						function t(e) {
							g(this, t),
								(this.token = e),
								(this.claims = (function (t, e) {
									if ("string" != typeof t) throw new f("Invalid token specified")
									var r = !0 === (e = e || {}).header ? 0 : 1
									try {
										return JSON.parse(p(t.split(".")[r]))
									} catch (t) {
										throw new f("Invalid token specified: " + t.message)
									}
								})(e)),
								(this.expiryTime = new Date(1e3 * this.claims.exp))
						}
						return (
							b(t, [
								{
									key: "getSecondsUntilExpiry",
									value: function value() {
										var t = this.expiryTime - Date.now()
										return t < 0 ? 0 : t
									},
								},
								{
									key: "getHoursUntilExpiry",
									value: function value() {
										var t = this.getSecondsUntilExpiry()
										return Math.floor(t / 3600)
									},
								},
								{
									key: "isExpired",
									value: function value() {
										return this.getSecondsUntilExpiry() <= 60
									},
								},
							]),
							t
						)
					})(),
					E = (function (t) {
						h(r, t)
						var e = v(r)
						function r(t) {
							var n
							return (
								g(this, r),
								((n = e.call(this, t)).owner = n.claims.data.owner),
								(n.meetindId = n.claims.data.meeting_id),
								(n.title = n.claims.data.title),
								(n.capacity = n.claims.data.capacity),
								(n.permission = n.claims.data.permission),
								(n.meetingType = n.claims.data.meeting_type),
								(n.isTemporary = n.claims.data.is_temporary),
								n
							)
						}
						return b(r)
					})(k),
					_ = (function (t) {
						h(r, t)
						var e = v(r)
						function r(t) {
							var n, o
							return (
								g(this, r),
								((o = e.call(this, t)).email = null === (n = o.claims.data) || void 0 === n ? void 0 : n.email),
								(o.userId = o.claims.sub),
								o
							)
						}
						return (
							b(r, [
								{
									key: "getUserId",
									value: function value() {
										return this.userId
									},
								},
							]),
							r
						)
					})(k),
					O = o(8994),
					S = o.n(O)
				function T(t) {
					return (
						(T =
							"function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator)
								? function (t) {
										return _typeof(t)
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: _typeof(t)
								  }),
						T(t)
					)
				}
				function P(t, e) {
					;(null == e || e > t.length) && (e = t.length)
					for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
					return n
				}
				function C() {
					C = function C() {
						return t
					}
					var t = {},
						e = Object.prototype,
						r = e.hasOwnProperty,
						n = "function" == typeof Symbol ? Symbol : {},
						o = n.iterator || "@@iterator",
						i = n.asyncIterator || "@@asyncIterator",
						a = n.toStringTag || "@@toStringTag"
					function c(t, e, r) {
						return (
							Object.defineProperty(t, e, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							}),
							t[e]
						)
					}
					try {
						c({}, "")
					} catch (t) {
						c = function c(t, e, r) {
							return (t[e] = r)
						}
					}
					function u(t, e, r, n) {
						var o = e && _instanceof(e.prototype, f) ? e : f,
							i = Object.create(o.prototype),
							a = new L(n || [])
						return (
							(i._invoke = (function (t, e, r) {
								var n = "suspendedStart"
								return function (o, i) {
									if ("executing" === n) throw new Error("Generator is already running")
									if ("completed" === n) {
										if ("throw" === o) throw i
										return {
											value: void 0,
											done: !0,
										}
									}
									for (r.method = o, r.arg = i; ; ) {
										var a = r.delegate
										if (a) {
											var c = b(a, r)
											if (c) {
												if (c === p) continue
												return c
											}
										}
										if ("next" === r.method) r.sent = r._sent = r.arg
										else if ("throw" === r.method) {
											if ("suspendedStart" === n) throw ((n = "completed"), r.arg)
											r.dispatchException(r.arg)
										} else "return" === r.method && r.abrupt("return", r.arg)
										n = "executing"
										var u = s(t, e, r)
										if ("normal" === u.type) {
											if (((n = r.done ? "completed" : "suspendedYield"), u.arg === p)) continue
											return {
												value: u.arg,
												done: r.done,
											}
										}
										"throw" === u.type && ((n = "completed"), (r.method = "throw"), (r.arg = u.arg))
									}
								}
							})(t, r, a)),
							i
						)
					}
					function s(t, e, r) {
						try {
							return {
								type: "normal",
								arg: t.call(e, r),
							}
						} catch (t) {
							return {
								type: "throw",
								arg: t,
							}
						}
					}
					t.wrap = u
					var p = {}
					function f() {}
					function l() {}
					function h() {}
					var y = {}
					c(y, o, function () {
						return this
					})
					var v = Object.getPrototypeOf,
						d = v && v(v(k([])))
					d && d !== e && r.call(d, o) && (y = d)
					var m = (h.prototype = f.prototype = Object.create(y))
					function g(t) {
						;["next", "throw", "return"].forEach(function (e) {
							c(t, e, function (t) {
								return this._invoke(e, t)
							})
						})
					}
					function w(t, e) {
						function n(o, i, a, c) {
							var u = s(t[o], t, i)
							if ("throw" !== u.type) {
								var p = u.arg,
									f = p.value
								return f && "object" == T(f) && r.call(f, "__await")
									? e.resolve(f.__await).then(
											function (t) {
												n("next", t, a, c)
											},
											function (t) {
												n("throw", t, a, c)
											}
									  )
									: e.resolve(f).then(
											function (t) {
												;(p.value = t), a(p)
											},
											function (t) {
												return n("throw", t, a, c)
											}
									  )
							}
							c(u.arg)
						}
						var o
						this._invoke = function (t, r) {
							function i() {
								return new e(function (e, o) {
									n(t, r, e, o)
								})
							}
							return (o = o ? o.then(i, i) : i())
						}
					}
					function b(t, e) {
						var r = t.iterator[e.method]
						if (void 0 === r) {
							if (((e.delegate = null), "throw" === e.method)) {
								if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), b(t, e), "throw" === e.method))
									return p
								;(e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
							}
							return p
						}
						var n = s(r, t.iterator, e.arg)
						if ("throw" === n.type) return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), p
						var o = n.arg
						return o
							? o.done
								? ((e[t.resultName] = o.value),
								  (e.next = t.nextLoc),
								  "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
								  (e.delegate = null),
								  p)
								: o
							: ((e.method = "throw"),
							  (e.arg = new TypeError("iterator result is not an object")),
							  (e.delegate = null),
							  p)
					}
					function x(t) {
						var e = {
							tryLoc: t[0],
						}
						1 in t && (e.catchLoc = t[1]),
							2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
							this.tryEntries.push(e)
					}
					function j(t) {
						var e = t.completion || {}
						;(e.type = "normal"), delete e.arg, (t.completion = e)
					}
					function L(t) {
						;(this.tryEntries = [
							{
								tryLoc: "root",
							},
						]),
							t.forEach(x, this),
							this.reset(!0)
					}
					function k(t) {
						if (t) {
							var e = t[o]
							if (e) return e.call(t)
							if ("function" == typeof t.next) return t
							if (!isNaN(t.length)) {
								var n = -1,
									i = function e() {
										for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e
										return (e.value = void 0), (e.done = !0), e
									}
								return (i.next = i)
							}
						}
						return {
							next: E,
						}
					}
					function E() {
						return {
							value: void 0,
							done: !0,
						}
					}
					return (
						(l.prototype = h),
						c(m, "constructor", h),
						c(h, "constructor", l),
						(l.displayName = c(h, a, "GeneratorFunction")),
						(t.isGeneratorFunction = function (t) {
							var e = "function" == typeof t && t.constructor
							return !!e && (e === l || "GeneratorFunction" === (e.displayName || e.name))
						}),
						(t.mark = function (t) {
							return (
								Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : ((t.__proto__ = h), c(t, a, "GeneratorFunction")),
								(t.prototype = Object.create(m)),
								t
							)
						}),
						(t.awrap = function (t) {
							return {
								__await: t,
							}
						}),
						g(w.prototype),
						c(w.prototype, i, function () {
							return this
						}),
						(t.AsyncIterator = w),
						(t.async = function (e, r, n, o, i) {
							void 0 === i && (i = Promise)
							var a = new w(u(e, r, n, o), i)
							return t.isGeneratorFunction(r)
								? a
								: a.next().then(function (t) {
										return t.done ? t.value : a.next()
								  })
						}),
						g(m),
						c(m, a, "Generator"),
						c(m, o, function () {
							return this
						}),
						c(m, "toString", function () {
							return "[object Generator]"
						}),
						(t.keys = function (t) {
							var e = []
							for (var r in t) e.push(r)
							return (
								e.reverse(),
								function r() {
									for (; e.length; ) {
										var n = e.pop()
										if (n in t) return (r.value = n), (r.done = !1), r
									}
									return (r.done = !0), r
								}
							)
						}),
						(t.values = k),
						(L.prototype = {
							constructor: L,
							reset: function reset(t) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = void 0),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = void 0),
									this.tryEntries.forEach(j),
									!t)
								)
									for (var e in this)
										"t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
							},
							stop: function stop() {
								this.done = !0
								var t = this.tryEntries[0].completion
								if ("throw" === t.type) throw t.arg
								return this.rval
							},
							dispatchException: function dispatchException(t) {
								if (this.done) throw t
								var e = this
								function n(r, n) {
									return (
										(a.type = "throw"), (a.arg = t), (e.next = r), n && ((e.method = "next"), (e.arg = void 0)), !!n
									)
								}
								for (var o = this.tryEntries.length - 1; o >= 0; --o) {
									var i = this.tryEntries[o],
										a = i.completion
									if ("root" === i.tryLoc) return n("end")
									if (i.tryLoc <= this.prev) {
										var c = r.call(i, "catchLoc"),
											u = r.call(i, "finallyLoc")
										if (c && u) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										} else if (c) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
										} else {
											if (!u) throw new Error("try statement without catch or finally")
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										}
									}
								}
							},
							abrupt: function abrupt(t, e) {
								for (var n = this.tryEntries.length - 1; n >= 0; --n) {
									var o = this.tryEntries[n]
									if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
										var i = o
										break
									}
								}
								i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null)
								var a = i ? i.completion : {}
								return (
									(a.type = t),
									(a.arg = e),
									i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a)
								)
							},
							complete: function complete(t, e) {
								if ("throw" === t.type) throw t.arg
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
										? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
										: "normal" === t.type && e && (this.next = e),
									p
								)
							},
							finish: function finish(t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), p
								}
							},
							catch: function _catch(t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.tryLoc === t) {
										var n = r.completion
										if ("throw" === n.type) {
											var o = n.arg
											j(r)
										}
										return o
									}
								}
								throw new Error("illegal catch attempt")
							},
							delegateYield: function delegateYield(t, e, r) {
								return (
									(this.delegate = {
										iterator: k(t),
										resultName: e,
										nextLoc: r,
									}),
									"next" === this.method && (this.arg = void 0),
									p
								)
							},
						}),
						t
					)
				}
				function R(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}
				function U(t) {
					return function () {
						var e = this,
							r = arguments
						return new Promise(function (n, o) {
							var i = t.apply(e, r)
							function a(t) {
								R(i, n, o, a, c, "next", t)
							}
							function c(t) {
								R(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						})
					}
				}
				function I(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
					}
				}
				function B(t, e) {
					!(function (t, e) {
						if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
					})(t, e),
						e.add(t)
				}
				function A(t, e, r) {
					if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance")
					return r
				}
				var N = new WeakSet(),
					G = new WeakSet(),
					F = (function () {
						function t() {
							!(function (t, e) {
								if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function")
							})(this, t),
								B(this, G),
								B(this, N)
						}
						var e, r, n, o, i, a, c
						return (
							(e = t),
							(r = [
								{
									key: "get",
									value:
										((c = U(
											C().mark(function t(e, r) {
												var n
												return C().wrap(
													function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(t.next = 2),
																		S().Command.HttpClient.Get({
																			Header: A(this, N, M).call(this, r),
																			Url: e,
																			ResultBody: "PlainText",
																		})
																	)
																case 2:
																	return (n = t.sent), t.abrupt("return", A(this, G, q).call(this, n))
																case 4:
																case "end":
																	return t.stop()
															}
													},
													t,
													this
												)
											})
										)),
										function (t, e) {
											return c.apply(this, arguments)
										}),
								},
								{
									key: "post",
									value:
										((a = U(
											C().mark(function t(e) {
												var r,
													n,
													o,
													i = arguments
												return C().wrap(
													function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(r = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
																		(n = i.length > 2 && void 0 !== i[2] ? i[2] : {}),
																		(t.next = 4),
																		S().Command.HttpClient.Post(
																			{
																				Header: A(this, N, M).call(this, n),
																				Url: e,
																				ResultBody: "PlainText",
																			},
																			JSON.stringify(r)
																		)
																	)
																case 4:
																	return (o = t.sent), t.abrupt("return", A(this, G, q).call(this, o))
																case 6:
																case "end":
																	return t.stop()
															}
													},
													t,
													this
												)
											})
										)),
										function (t) {
											return a.apply(this, arguments)
										}),
								},
								{
									key: "patch",
									value:
										((i = U(
											C().mark(function t(e) {
												var r,
													n,
													o,
													i = arguments
												return C().wrap(
													function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(r = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
																		(n = i.length > 2 && void 0 !== i[2] ? i[2] : {}),
																		(t.next = 4),
																		S().Command.HttpClient.Patch(
																			{
																				Header: A(this, N, M).call(this, n),
																				Url: e,
																				ResultBody: "PlainText",
																			},
																			JSON.stringify(r)
																		)
																	)
																case 4:
																	return (o = t.sent), t.abrupt("return", A(this, G, q).call(this, o))
																case 6:
																case "end":
																	return t.stop()
															}
													},
													t,
													this
												)
											})
										)),
										function (t) {
											return i.apply(this, arguments)
										}),
								},
								{
									key: "put",
									value:
										((o = U(
											C().mark(function t(e) {
												var r,
													n,
													o,
													i = arguments
												return C().wrap(
													function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(r = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
																		(n = i.length > 2 && void 0 !== i[2] ? i[2] : {}),
																		(t.next = 4),
																		S().Command.HttpClient.Put(
																			{
																				Header: A(this, N, M).call(this, n),
																				Url: e,
																				ResultBody: "PlainText",
																			},
																			JSON.stringify(r)
																		)
																	)
																case 4:
																	return (o = t.sent), t.abrupt("return", A(this, G, q).call(this, o))
																case 6:
																case "end":
																	return t.stop()
															}
													},
													t,
													this
												)
											})
										)),
										function (t) {
											return o.apply(this, arguments)
										}),
								},
								{
									key: "delete",
									value:
										((n = U(
											C().mark(function t(e) {
												var r,
													n,
													o = arguments
												return C().wrap(
													function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(r = o.length > 1 && void 0 !== o[1] ? o[1] : {}),
																		(t.next = 3),
																		S().Command.HttpClient.Delete({
																			Header: A(this, N, M).call(this, r),
																			Url: e,
																			ResultBody: "PlainText",
																		})
																	)
																case 3:
																	return (n = t.sent), t.abrupt("return", A(this, G, q).call(this, n))
																case 5:
																case "end":
																	return t.stop()
															}
													},
													t,
													this
												)
											})
										)),
										function (t) {
											return n.apply(this, arguments)
										}),
								},
							]),
							r && I(e.prototype, r),
							Object.defineProperty(e, "prototype", {
								writable: !1,
							}),
							t
						)
					})()
				function M(t) {
					for (var e = [], r = 0, n = Object.entries(t); r < n.length; r++) {
						var o =
								((c = n[r]),
								(u = 2),
								(function (t) {
									if (Array.isArray(t)) return t
								})(c) ||
									(function (t, e) {
										var r = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
										if (null != r) {
											var n,
												o,
												i = [],
												a = !0,
												c = !1
											try {
												for (
													r = r.call(t);
													!(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e);
													a = !0
												);
											} catch (t) {
												;(c = !0), (o = t)
											} finally {
												try {
													a || null == r.return || r.return()
												} finally {
													if (c) throw o
												}
											}
											return i
										}
									})(c, u) ||
									(function (t, e) {
										if (t) {
											if ("string" == typeof t) return P(t, e)
											var r = Object.prototype.toString.call(t).slice(8, -1)
											return (
												"Object" === r && t.constructor && (r = t.constructor.name),
												"Map" === r || "Set" === r
													? Array.from(t)
													: "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
													? P(t, e)
													: void 0
											)
										}
									})(c, u) ||
									(function () {
										throw new TypeError(
											"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
										)
									})()),
							i = o[0],
							a = o[1]
						e.push("".concat(i, ": ").concat(a))
					}
					var c, u
					return e
				}
				function q(t) {
					var e = t
					return (e.data = JSON.parse(e.Body)), delete e.Body, e
				}
				;(global.globalThis = {}), (global.globalThis.http = new F())
				var D = globalThis.http
				function H(t) {
					return (
						(H =
							"function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator)
								? function (t) {
										return _typeof(t)
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: _typeof(t)
								  }),
						H(t)
					)
				}
				function Y() {
					Y = function Y() {
						return t
					}
					var t = {},
						e = Object.prototype,
						r = e.hasOwnProperty,
						n = "function" == typeof Symbol ? Symbol : {},
						o = n.iterator || "@@iterator",
						i = n.asyncIterator || "@@asyncIterator",
						a = n.toStringTag || "@@toStringTag"
					function c(t, e, r) {
						return (
							Object.defineProperty(t, e, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							}),
							t[e]
						)
					}
					try {
						c({}, "")
					} catch (t) {
						c = function c(t, e, r) {
							return (t[e] = r)
						}
					}
					function u(t, e, r, n) {
						var o = e && _instanceof(e.prototype, f) ? e : f,
							i = Object.create(o.prototype),
							a = new L(n || [])
						return (
							(i._invoke = (function (t, e, r) {
								var n = "suspendedStart"
								return function (o, i) {
									if ("executing" === n) throw new Error("Generator is already running")
									if ("completed" === n) {
										if ("throw" === o) throw i
										return {
											value: void 0,
											done: !0,
										}
									}
									for (r.method = o, r.arg = i; ; ) {
										var a = r.delegate
										if (a) {
											var c = b(a, r)
											if (c) {
												if (c === p) continue
												return c
											}
										}
										if ("next" === r.method) r.sent = r._sent = r.arg
										else if ("throw" === r.method) {
											if ("suspendedStart" === n) throw ((n = "completed"), r.arg)
											r.dispatchException(r.arg)
										} else "return" === r.method && r.abrupt("return", r.arg)
										n = "executing"
										var u = s(t, e, r)
										if ("normal" === u.type) {
											if (((n = r.done ? "completed" : "suspendedYield"), u.arg === p)) continue
											return {
												value: u.arg,
												done: r.done,
											}
										}
										"throw" === u.type && ((n = "completed"), (r.method = "throw"), (r.arg = u.arg))
									}
								}
							})(t, r, a)),
							i
						)
					}
					function s(t, e, r) {
						try {
							return {
								type: "normal",
								arg: t.call(e, r),
							}
						} catch (t) {
							return {
								type: "throw",
								arg: t,
							}
						}
					}
					t.wrap = u
					var p = {}
					function f() {}
					function l() {}
					function h() {}
					var y = {}
					c(y, o, function () {
						return this
					})
					var v = Object.getPrototypeOf,
						d = v && v(v(k([])))
					d && d !== e && r.call(d, o) && (y = d)
					var m = (h.prototype = f.prototype = Object.create(y))
					function g(t) {
						;["next", "throw", "return"].forEach(function (e) {
							c(t, e, function (t) {
								return this._invoke(e, t)
							})
						})
					}
					function w(t, e) {
						function n(o, i, a, c) {
							var u = s(t[o], t, i)
							if ("throw" !== u.type) {
								var p = u.arg,
									f = p.value
								return f && "object" == H(f) && r.call(f, "__await")
									? e.resolve(f.__await).then(
											function (t) {
												n("next", t, a, c)
											},
											function (t) {
												n("throw", t, a, c)
											}
									  )
									: e.resolve(f).then(
											function (t) {
												;(p.value = t), a(p)
											},
											function (t) {
												return n("throw", t, a, c)
											}
									  )
							}
							c(u.arg)
						}
						var o
						this._invoke = function (t, r) {
							function i() {
								return new e(function (e, o) {
									n(t, r, e, o)
								})
							}
							return (o = o ? o.then(i, i) : i())
						}
					}
					function b(t, e) {
						var r = t.iterator[e.method]
						if (void 0 === r) {
							if (((e.delegate = null), "throw" === e.method)) {
								if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), b(t, e), "throw" === e.method))
									return p
								;(e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
							}
							return p
						}
						var n = s(r, t.iterator, e.arg)
						if ("throw" === n.type) return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), p
						var o = n.arg
						return o
							? o.done
								? ((e[t.resultName] = o.value),
								  (e.next = t.nextLoc),
								  "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
								  (e.delegate = null),
								  p)
								: o
							: ((e.method = "throw"),
							  (e.arg = new TypeError("iterator result is not an object")),
							  (e.delegate = null),
							  p)
					}
					function x(t) {
						var e = {
							tryLoc: t[0],
						}
						1 in t && (e.catchLoc = t[1]),
							2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
							this.tryEntries.push(e)
					}
					function j(t) {
						var e = t.completion || {}
						;(e.type = "normal"), delete e.arg, (t.completion = e)
					}
					function L(t) {
						;(this.tryEntries = [
							{
								tryLoc: "root",
							},
						]),
							t.forEach(x, this),
							this.reset(!0)
					}
					function k(t) {
						if (t) {
							var e = t[o]
							if (e) return e.call(t)
							if ("function" == typeof t.next) return t
							if (!isNaN(t.length)) {
								var n = -1,
									i = function e() {
										for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e
										return (e.value = void 0), (e.done = !0), e
									}
								return (i.next = i)
							}
						}
						return {
							next: E,
						}
					}
					function E() {
						return {
							value: void 0,
							done: !0,
						}
					}
					return (
						(l.prototype = h),
						c(m, "constructor", h),
						c(h, "constructor", l),
						(l.displayName = c(h, a, "GeneratorFunction")),
						(t.isGeneratorFunction = function (t) {
							var e = "function" == typeof t && t.constructor
							return !!e && (e === l || "GeneratorFunction" === (e.displayName || e.name))
						}),
						(t.mark = function (t) {
							return (
								Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : ((t.__proto__ = h), c(t, a, "GeneratorFunction")),
								(t.prototype = Object.create(m)),
								t
							)
						}),
						(t.awrap = function (t) {
							return {
								__await: t,
							}
						}),
						g(w.prototype),
						c(w.prototype, i, function () {
							return this
						}),
						(t.AsyncIterator = w),
						(t.async = function (e, r, n, o, i) {
							void 0 === i && (i = Promise)
							var a = new w(u(e, r, n, o), i)
							return t.isGeneratorFunction(r)
								? a
								: a.next().then(function (t) {
										return t.done ? t.value : a.next()
								  })
						}),
						g(m),
						c(m, a, "Generator"),
						c(m, o, function () {
							return this
						}),
						c(m, "toString", function () {
							return "[object Generator]"
						}),
						(t.keys = function (t) {
							var e = []
							for (var r in t) e.push(r)
							return (
								e.reverse(),
								function r() {
									for (; e.length; ) {
										var n = e.pop()
										if (n in t) return (r.value = n), (r.done = !1), r
									}
									return (r.done = !0), r
								}
							)
						}),
						(t.values = k),
						(L.prototype = {
							constructor: L,
							reset: function reset(t) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = void 0),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = void 0),
									this.tryEntries.forEach(j),
									!t)
								)
									for (var e in this)
										"t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
							},
							stop: function stop() {
								this.done = !0
								var t = this.tryEntries[0].completion
								if ("throw" === t.type) throw t.arg
								return this.rval
							},
							dispatchException: function dispatchException(t) {
								if (this.done) throw t
								var e = this
								function n(r, n) {
									return (
										(a.type = "throw"), (a.arg = t), (e.next = r), n && ((e.method = "next"), (e.arg = void 0)), !!n
									)
								}
								for (var o = this.tryEntries.length - 1; o >= 0; --o) {
									var i = this.tryEntries[o],
										a = i.completion
									if ("root" === i.tryLoc) return n("end")
									if (i.tryLoc <= this.prev) {
										var c = r.call(i, "catchLoc"),
											u = r.call(i, "finallyLoc")
										if (c && u) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										} else if (c) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
										} else {
											if (!u) throw new Error("try statement without catch or finally")
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										}
									}
								}
							},
							abrupt: function abrupt(t, e) {
								for (var n = this.tryEntries.length - 1; n >= 0; --n) {
									var o = this.tryEntries[n]
									if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
										var i = o
										break
									}
								}
								i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null)
								var a = i ? i.completion : {}
								return (
									(a.type = t),
									(a.arg = e),
									i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a)
								)
							},
							complete: function complete(t, e) {
								if ("throw" === t.type) throw t.arg
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
										? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
										: "normal" === t.type && e && (this.next = e),
									p
								)
							},
							finish: function finish(t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), p
								}
							},
							catch: function _catch(t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.tryLoc === t) {
										var n = r.completion
										if ("throw" === n.type) {
											var o = n.arg
											j(r)
										}
										return o
									}
								}
								throw new Error("illegal catch attempt")
							},
							delegateYield: function delegateYield(t, e, r) {
								return (
									(this.delegate = {
										iterator: k(t),
										resultName: e,
										nextLoc: r,
									}),
									"next" === this.method && (this.arg = void 0),
									p
								)
							},
						}),
						t
					)
				}
				function J(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}
				function K(t) {
					return function () {
						var e = this,
							r = arguments
						return new Promise(function (n, o) {
							var i = t.apply(e, r)
							function a(t) {
								J(i, n, o, a, c, "next", t)
							}
							function c(t) {
								J(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						})
					}
				}
				var W = new Map(),
					z = void 0,
					X = (function () {
						var t = K(
							Y().mark(function t() {
								return Y().wrap(function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												throw new Error("not implemented")
											case 1:
											case "end":
												return t.stop()
										}
								}, t)
							})
						)
						return function () {
							return t.apply(this, arguments)
						}
					})()
				function $(t) {
					var e = t.apiKey,
						r = t.getIdToken
					e && (z = e), r && (X = r), W.clear()
				}
				function Q(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x
					if (t) {
						var r = new _(t)
						r.isExpired() || W.set(e, r)
					}
				}
				function V() {
					return Z.apply(this, arguments)
				}
				function Z() {
					return (Z = K(
						Y().mark(function t() {
							return Y().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return t.abrupt(
												"return",
												tt().then(function (t) {
													return W.get(x)
												})
											)
										case 1:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function tt() {
					return et.apply(this, arguments)
				}
				function et() {
					return (
						(et = K(
							Y().mark(function t() {
								var e,
									r,
									n,
									o,
									i,
									a,
									c = arguments
								return Y().wrap(function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												if (
													((e = c.length > 0 && void 0 !== c[0] ? c[0] : {}),
													(r = e.minExpiry),
													(n = e.accessLevel),
													(r = r || 1800),
													(n = n || x),
													(o = W.get(n)),
													(i = !1),
													(a = o ? o.getSecondsUntilExpiry() : 0) < 60 ? ((o = void 0), (i = !0)) : a < r && (i = !0),
													!i)
												) {
													t.next = 11
													break
												}
												return t.abrupt(
													"return",
													ft(n)
														.then(function (t) {
															return Q(t, n), t
														})
														.catch(function (t) {
															if (o) return o.token
															throw new Error("unable to create user token")
														})
												)
											case 11:
												if (!o) {
													t.next = 15
													break
												}
												return t.abrupt("return", o.token)
											case 15:
												throw new Error("could not create user token")
											case 16:
											case "end":
												return t.stop()
										}
								}, t)
							})
						)),
						et.apply(this, arguments)
					)
				}
				function rt() {
					;(z = void 0), W.clear()
				}
				function nt() {
					return ot.apply(this, arguments)
				}
				function ot() {
					return (ot = K(
						Y().mark(function t() {
							var e, r
							return Y().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), tt()
										case 2:
											return (
												(t.t0 = t.sent),
												(e = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(t.next = 6),
												D.get("".concat(c.apiBaseURL, "/v1/auth/apikey"), e)
											)
										case 6:
											return (r = t.sent), t.abrupt("return", r.data.apiKey)
										case 8:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function it() {
					return at.apply(this, arguments)
				}
				function at() {
					return (at = K(
						Y().mark(function t() {
							var e, r
							return Y().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), X()
										case 2:
											return (
												(t.t0 = t.sent),
												(e = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-id-jwt": t.t0,
												}),
												(t.next = 6),
												D.get("".concat(c.apiBaseURL, "/v1/auth/custom"), e)
											)
										case 6:
											return (r = t.sent), t.abrupt("return", r.data.password)
										case 8:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function ct(t) {
					return ut.apply(this, arguments)
				}
				function ut() {
					return (ut = K(
						Y().mark(function t(e) {
							var r, n, o, i
							return Y().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											;(r = {
												"Content-Type": "application/json",
												Accept: "application/json",
											}),
												(n = {
													api_key: z,
												}),
												(t.t0 = e),
												(t.next = t.t0 === j ? 5 : t.t0 === L ? 7 : 9)
											break
										case 5:
											return (o = "".concat(c.apiBaseURL, "/v1/admin/auth/token")), t.abrupt("break", 11)
										case 7:
											return (o = "".concat(c.apiBaseURL, "/v1/superadmin/auth/token")), t.abrupt("break", 11)
										case 9:
											return (o = "".concat(c.apiBaseURL, "/v1/auth/token")), t.abrupt("break", 11)
										case 11:
											return (t.next = 13), D.post(o, n, r)
										case 13:
											return (i = t.sent), t.abrupt("return", i.data.token)
										case 15:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function st(t) {
					return pt.apply(this, arguments)
				}
				function pt() {
					return (pt = K(
						Y().mark(function t(e) {
							var r, n, o, i
							return Y().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), X()
										case 2:
											;(t.t0 = t.sent),
												(r = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-id-jwt": t.t0,
												}),
												(n = {}),
												(t.t1 = e),
												(t.next = t.t1 === j ? 8 : t.t1 === L ? 10 : 12)
											break
										case 8:
											return (o = "".concat(c.apiBaseURL, "/v1/admin/auth/token")), t.abrupt("break", 14)
										case 10:
											return (o = "".concat(c.apiBaseURL, "/v1/superadmin/auth/token")), t.abrupt("break", 14)
										case 12:
											return (o = "".concat(c.apiBaseURL, "/v1/auth/token")), t.abrupt("break", 14)
										case 14:
											return (t.next = 16), D.post(o, n, r)
										case 16:
											return (i = t.sent), t.abrupt("return", i.data.token)
										case 18:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function ft(t) {
					return lt.apply(this, arguments)
				}
				function lt() {
					return (lt = K(
						Y().mark(function t(e) {
							return Y().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											if (!z) {
												t.next = 2
												break
											}
											return t.abrupt("return", ct(e))
										case 2:
											return t.abrupt("return", st(e))
										case 3:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function ht(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
					}
				}
				var yt = new ((function () {
					function t() {
						!(function (t, e) {
							if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function")
						})(this, t)
					}
					var e, r
					return (
						(e = t),
						(r = [
							{
								key: "error",
								value: function value() {},
							},
							{
								key: "debug",
								value: function value() {},
							},
							{
								key: "warn",
								value: function value() {},
							},
							{
								key: "info",
								value: function value() {},
							},
							{
								key: "setLevel",
								value: function value() {},
							},
						]) && ht(e.prototype, r),
						Object.defineProperty(e, "prototype", {
							writable: !1,
						}),
						t
					)
				})())()
				function vt(t) {
					return (
						(vt =
							"function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator)
								? function (t) {
										return _typeof(t)
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: _typeof(t)
								  }),
						vt(t)
					)
				}
				function dt(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
					}
				}
				function mt(t, e, r) {
					return (
						e && dt(t.prototype, e),
						r && dt(t, r),
						Object.defineProperty(t, "prototype", {
							writable: !1,
						}),
						t
					)
				}
				function gt(t, e) {
					if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function")
				}
				function wt(t, e) {
					if ("function" != typeof e && null !== e)
						throw new TypeError("Super expression must either be null or a function")
					;(t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0,
						},
					})),
						Object.defineProperty(t, "prototype", {
							writable: !1,
						}),
						e && Et(t, e)
				}
				function bt(t) {
					var e = kt()
					return function () {
						var r,
							n = _t(t)
						if (e) {
							var o = _t(this).constructor
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments)
						return xt(this, r)
					}
				}
				function xt(t, e) {
					if (e && ("object" === vt(e) || "function" == typeof e)) return e
					if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined")
					return (function (t) {
						if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
						return t
					})(t)
				}
				function jt(t) {
					var e = "function" == typeof Map ? new Map() : void 0
					return (
						(jt = function jt(t) {
							if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))) return t
							var r
							if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function")
							if (void 0 !== e) {
								if (e.has(t)) return e.get(t)
								e.set(t, n)
							}
							function n() {
								return Lt(t, arguments, _t(this).constructor)
							}
							return (
								(n.prototype = Object.create(t.prototype, {
									constructor: {
										value: n,
										enumerable: !1,
										writable: !0,
										configurable: !0,
									},
								})),
								Et(n, t)
							)
						}),
						jt(t)
					)
				}
				function Lt(t, e, r) {
					return (
						(Lt = kt()
							? Reflect.construct.bind()
							: function (t, e, r) {
									var n = [null]
									n.push.apply(n, e)
									var o = new (Function.bind.apply(t, n))()
									return r && Et(o, r.prototype), o
							  }),
						Lt.apply(null, arguments)
					)
				}
				function kt() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1
					if (Reflect.construct.sham) return !1
					if ("function" == typeof Proxy) return !0
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
					} catch (t) {
						return !1
					}
				}
				function Et(t, e) {
					return (
						(Et = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (t, e) {
									return (t.__proto__ = e), t
							  }),
						Et(t, e)
					)
				}
				function _t(t) {
					return (
						(_t = Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function (t) {
									return t.__proto__ || Object.getPrototypeOf(t)
							  }),
						_t(t)
					)
				}
				var Ot = (function (t) {
						wt(r, t)
						var e = bt(r)
						function r(t) {
							var n
							return gt(this, r), ((n = e.call(this, t)).name = "NotFoundError"), n
						}
						return mt(r)
					})(jt(Error)),
					St =
						(Error,
						Error,
						Error,
						Error,
						(function (t) {
							wt(r, t)
							var e = bt(r)
							function r(t) {
								var n
								return gt(this, r), ((n = e.call(this, t)).name = "PermissionDeniedError"), n
							}
							return mt(r)
						})(jt(Error)))
				function Tt(t) {
					return (
						(Tt =
							"function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator)
								? function (t) {
										return _typeof(t)
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: _typeof(t)
								  }),
						Tt(t)
					)
				}
				function Pt() {
					Pt = function Pt() {
						return t
					}
					var t = {},
						e = Object.prototype,
						r = e.hasOwnProperty,
						n = "function" == typeof Symbol ? Symbol : {},
						o = n.iterator || "@@iterator",
						i = n.asyncIterator || "@@asyncIterator",
						a = n.toStringTag || "@@toStringTag"
					function c(t, e, r) {
						return (
							Object.defineProperty(t, e, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							}),
							t[e]
						)
					}
					try {
						c({}, "")
					} catch (t) {
						c = function c(t, e, r) {
							return (t[e] = r)
						}
					}
					function u(t, e, r, n) {
						var o = e && _instanceof(e.prototype, f) ? e : f,
							i = Object.create(o.prototype),
							a = new L(n || [])
						return (
							(i._invoke = (function (t, e, r) {
								var n = "suspendedStart"
								return function (o, i) {
									if ("executing" === n) throw new Error("Generator is already running")
									if ("completed" === n) {
										if ("throw" === o) throw i
										return {
											value: void 0,
											done: !0,
										}
									}
									for (r.method = o, r.arg = i; ; ) {
										var a = r.delegate
										if (a) {
											var c = b(a, r)
											if (c) {
												if (c === p) continue
												return c
											}
										}
										if ("next" === r.method) r.sent = r._sent = r.arg
										else if ("throw" === r.method) {
											if ("suspendedStart" === n) throw ((n = "completed"), r.arg)
											r.dispatchException(r.arg)
										} else "return" === r.method && r.abrupt("return", r.arg)
										n = "executing"
										var u = s(t, e, r)
										if ("normal" === u.type) {
											if (((n = r.done ? "completed" : "suspendedYield"), u.arg === p)) continue
											return {
												value: u.arg,
												done: r.done,
											}
										}
										"throw" === u.type && ((n = "completed"), (r.method = "throw"), (r.arg = u.arg))
									}
								}
							})(t, r, a)),
							i
						)
					}
					function s(t, e, r) {
						try {
							return {
								type: "normal",
								arg: t.call(e, r),
							}
						} catch (t) {
							return {
								type: "throw",
								arg: t,
							}
						}
					}
					t.wrap = u
					var p = {}
					function f() {}
					function l() {}
					function h() {}
					var y = {}
					c(y, o, function () {
						return this
					})
					var v = Object.getPrototypeOf,
						d = v && v(v(k([])))
					d && d !== e && r.call(d, o) && (y = d)
					var m = (h.prototype = f.prototype = Object.create(y))
					function g(t) {
						;["next", "throw", "return"].forEach(function (e) {
							c(t, e, function (t) {
								return this._invoke(e, t)
							})
						})
					}
					function w(t, e) {
						function n(o, i, a, c) {
							var u = s(t[o], t, i)
							if ("throw" !== u.type) {
								var p = u.arg,
									f = p.value
								return f && "object" == Tt(f) && r.call(f, "__await")
									? e.resolve(f.__await).then(
											function (t) {
												n("next", t, a, c)
											},
											function (t) {
												n("throw", t, a, c)
											}
									  )
									: e.resolve(f).then(
											function (t) {
												;(p.value = t), a(p)
											},
											function (t) {
												return n("throw", t, a, c)
											}
									  )
							}
							c(u.arg)
						}
						var o
						this._invoke = function (t, r) {
							function i() {
								return new e(function (e, o) {
									n(t, r, e, o)
								})
							}
							return (o = o ? o.then(i, i) : i())
						}
					}
					function b(t, e) {
						var r = t.iterator[e.method]
						if (void 0 === r) {
							if (((e.delegate = null), "throw" === e.method)) {
								if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), b(t, e), "throw" === e.method))
									return p
								;(e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
							}
							return p
						}
						var n = s(r, t.iterator, e.arg)
						if ("throw" === n.type) return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), p
						var o = n.arg
						return o
							? o.done
								? ((e[t.resultName] = o.value),
								  (e.next = t.nextLoc),
								  "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
								  (e.delegate = null),
								  p)
								: o
							: ((e.method = "throw"),
							  (e.arg = new TypeError("iterator result is not an object")),
							  (e.delegate = null),
							  p)
					}
					function x(t) {
						var e = {
							tryLoc: t[0],
						}
						1 in t && (e.catchLoc = t[1]),
							2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
							this.tryEntries.push(e)
					}
					function j(t) {
						var e = t.completion || {}
						;(e.type = "normal"), delete e.arg, (t.completion = e)
					}
					function L(t) {
						;(this.tryEntries = [
							{
								tryLoc: "root",
							},
						]),
							t.forEach(x, this),
							this.reset(!0)
					}
					function k(t) {
						if (t) {
							var e = t[o]
							if (e) return e.call(t)
							if ("function" == typeof t.next) return t
							if (!isNaN(t.length)) {
								var n = -1,
									i = function e() {
										for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e
										return (e.value = void 0), (e.done = !0), e
									}
								return (i.next = i)
							}
						}
						return {
							next: E,
						}
					}
					function E() {
						return {
							value: void 0,
							done: !0,
						}
					}
					return (
						(l.prototype = h),
						c(m, "constructor", h),
						c(h, "constructor", l),
						(l.displayName = c(h, a, "GeneratorFunction")),
						(t.isGeneratorFunction = function (t) {
							var e = "function" == typeof t && t.constructor
							return !!e && (e === l || "GeneratorFunction" === (e.displayName || e.name))
						}),
						(t.mark = function (t) {
							return (
								Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : ((t.__proto__ = h), c(t, a, "GeneratorFunction")),
								(t.prototype = Object.create(m)),
								t
							)
						}),
						(t.awrap = function (t) {
							return {
								__await: t,
							}
						}),
						g(w.prototype),
						c(w.prototype, i, function () {
							return this
						}),
						(t.AsyncIterator = w),
						(t.async = function (e, r, n, o, i) {
							void 0 === i && (i = Promise)
							var a = new w(u(e, r, n, o), i)
							return t.isGeneratorFunction(r)
								? a
								: a.next().then(function (t) {
										return t.done ? t.value : a.next()
								  })
						}),
						g(m),
						c(m, a, "Generator"),
						c(m, o, function () {
							return this
						}),
						c(m, "toString", function () {
							return "[object Generator]"
						}),
						(t.keys = function (t) {
							var e = []
							for (var r in t) e.push(r)
							return (
								e.reverse(),
								function r() {
									for (; e.length; ) {
										var n = e.pop()
										if (n in t) return (r.value = n), (r.done = !1), r
									}
									return (r.done = !0), r
								}
							)
						}),
						(t.values = k),
						(L.prototype = {
							constructor: L,
							reset: function reset(t) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = void 0),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = void 0),
									this.tryEntries.forEach(j),
									!t)
								)
									for (var e in this)
										"t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
							},
							stop: function stop() {
								this.done = !0
								var t = this.tryEntries[0].completion
								if ("throw" === t.type) throw t.arg
								return this.rval
							},
							dispatchException: function dispatchException(t) {
								if (this.done) throw t
								var e = this
								function n(r, n) {
									return (
										(a.type = "throw"), (a.arg = t), (e.next = r), n && ((e.method = "next"), (e.arg = void 0)), !!n
									)
								}
								for (var o = this.tryEntries.length - 1; o >= 0; --o) {
									var i = this.tryEntries[o],
										a = i.completion
									if ("root" === i.tryLoc) return n("end")
									if (i.tryLoc <= this.prev) {
										var c = r.call(i, "catchLoc"),
											u = r.call(i, "finallyLoc")
										if (c && u) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										} else if (c) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
										} else {
											if (!u) throw new Error("try statement without catch or finally")
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										}
									}
								}
							},
							abrupt: function abrupt(t, e) {
								for (var n = this.tryEntries.length - 1; n >= 0; --n) {
									var o = this.tryEntries[n]
									if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
										var i = o
										break
									}
								}
								i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null)
								var a = i ? i.completion : {}
								return (
									(a.type = t),
									(a.arg = e),
									i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a)
								)
							},
							complete: function complete(t, e) {
								if ("throw" === t.type) throw t.arg
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
										? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
										: "normal" === t.type && e && (this.next = e),
									p
								)
							},
							finish: function finish(t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), p
								}
							},
							catch: function _catch(t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.tryLoc === t) {
										var n = r.completion
										if ("throw" === n.type) {
											var o = n.arg
											j(r)
										}
										return o
									}
								}
								throw new Error("illegal catch attempt")
							},
							delegateYield: function delegateYield(t, e, r) {
								return (
									(this.delegate = {
										iterator: k(t),
										resultName: e,
										nextLoc: r,
									}),
									"next" === this.method && (this.arg = void 0),
									p
								)
							},
						}),
						t
					)
				}
				function Ct(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}
				function Rt(t) {
					return function () {
						var e = this,
							r = arguments
						return new Promise(function (n, o) {
							var i = t.apply(e, r)
							function a(t) {
								Ct(i, n, o, a, c, "next", t)
							}
							function c(t) {
								Ct(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						})
					}
				}
				function Ut(t) {
					return It.apply(this, arguments)
				}
				function It() {
					return (It = Rt(
						Pt().mark(function t(e) {
							var r, n, o, i, a, u, s
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.title), (n = e.isTemporary), (o = e.capacity), (i = e.meetingType), (t.next = 3), tt()
											)
										case 3:
											return (
												(t.t0 = t.sent),
												(a = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(u = {
													title: r || "",
													isTemporary: n || !1,
													capacity: o || 2,
													meetingType: i || 0,
												}),
												(t.next = 8),
												D.post("".concat(c.apiBaseURL, "/v1/meetings"), u, a)
											)
										case 8:
											return (s = t.sent), t.abrupt("return", s.data.meetingId)
										case 10:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Bt(t) {
					return At.apply(this, arguments)
				}
				function At() {
					return (At = Rt(
						Pt().mark(function t(e) {
							var r, n, o, i, a, u, s
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.meetingId), (n = e.permission), (o = e.expiry), (i = e.auxData), (t.next = 3), tt()
										case 3:
											return (
												(t.t0 = t.sent),
												(a = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(u = {
													permission: n,
													expiry: {
														seconds: o || 3600,
													},
													auxilary: i || {},
												}),
												(t.next = 8),
												D.post("".concat(c.apiBaseURL, "/v1/meetings/").concat(r, "/temp-shares"), u, a)
											)
										case 8:
											return (s = t.sent), t.abrupt("return", s.data.shareId)
										case 10:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Nt(t) {
					return Gt.apply(this, arguments)
				}
				function Gt() {
					return (Gt = Rt(
						Pt().mark(function t(e) {
							var r, n, o, i
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.meetingId),
												(n = e.shareId),
												(o = {
													"Content-Type": "application/json",
													Accept: "application/json",
												}),
												(t.next = 4),
												D.get("".concat(c.apiBaseURL, "/v1/meetings/").concat(r, "/temp-shares/").concat(n), o)
											)
										case 4:
											return (i = t.sent), t.abrupt("return", i.data.token)
										case 6:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Ft(t) {
					return Mt.apply(this, arguments)
				}
				function Mt() {
					return (Mt = Rt(
						Pt().mark(function t(e) {
							var r, n, o
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.meetingId), (n = e.mtoken), (t.next = 3), tt()
										case 3:
											return (
												(t.t0 = t.sent),
												(t.t1 = n),
												(o = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
													"x-jibb-meeting-jwt": t.t1,
												}),
												t.abrupt("return", D.delete("".concat(c.apiBaseURL, "/v1/meetings/").concat(r, "/images"), o))
											)
										case 7:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function qt(t) {
					return Dt.apply(this, arguments)
				}
				function Dt() {
					return (Dt = Rt(
						Pt().mark(function t(e) {
							var r, n, o, i
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.meetingId), (n = e.meetingToken), (t.next = 3), tt()
										case 3:
											return (
												(t.t0 = t.sent),
												(t.t1 = n),
												(o = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
													"x-jibb-meeting-jwt": t.t1,
												}),
												(t.next = 8),
												D.get("".concat(c.apiBaseURL, "/v1/meetings/").concat(r, "/images"), o)
											)
										case 8:
											return (i = t.sent), t.abrupt("return", i.data)
										case 10:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Ht(t) {
					return Yt.apply(this, arguments)
				}
				function Yt() {
					return (Yt = Rt(
						Pt().mark(function t(e) {
							var r, n, o, i, a
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.meetingId), (n = e.meetingToken), (o = e.imageId), (t.next = 3), tt()
										case 3:
											return (
												(t.t0 = t.sent),
												(t.t1 = n),
												(i = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
													"x-jibb-meeting-jwt": t.t1,
												}),
												(t.next = 8),
												D.get("".concat(c.apiBaseURL, "/v1/meetings/").concat(r, "/images/").concat(o), i)
											)
										case 8:
											return (a = t.sent), t.abrupt("return", a.data)
										case 10:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Jt(t) {
					return Kt.apply(this, arguments)
				}
				function Kt() {
					return (Kt = Rt(
						Pt().mark(function t(e) {
							var r, n, o, i, a
							return Pt().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (
													(r = e.meetingId),
													(n = e.meetingToken),
													(o = {
														"Content-Type": "application/json",
														Accept: "application/json",
														"x-jibb-meeting-jwt": n,
													}),
													(t.prev = 2),
													(i = {}),
													(t.next = 6),
													D.post("".concat(c.apiBaseURL, "/v1/meetings/").concat(r, "/actions/start"), i, o)
												)
											case 6:
												return t.abrupt("return", t.sent)
											case 9:
												if (
													((t.prev = 9),
													(t.t0 = t.catch(2)),
													404 !=
														(null === t.t0 || void 0 === t.t0 || null === (a = t.t0.response) || void 0 === a
															? void 0
															: a.status))
												) {
													t.next = 15
													break
												}
												throw new Ot()
											case 15:
												throw t.t0
											case 16:
											case "end":
												return t.stop()
										}
								},
								t,
								null,
								[[2, 9]]
							)
						})
					)).apply(this, arguments)
				}
				function Wt(t) {
					return zt.apply(this, arguments)
				}
				function zt() {
					return (zt = Rt(
						Pt().mark(function t(e) {
							var r, n, o, i
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.meetingId),
												(n = e.meetingToken),
												(o = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-meeting-jwt": n,
												}),
												(i = {}),
												t.abrupt(
													"return",
													D.post("".concat(c.apiBaseURL, "/v1/meetings/").concat(r, "/actions/end"), i, o)
												)
											)
										case 4:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Xt(t) {
					return $t.apply(this, arguments)
				}
				function $t() {
					return ($t = Rt(
						Pt().mark(function t(e) {
							var r
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), tt()
										case 2:
											return (
												(t.t0 = t.sent),
												(r = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												t.abrupt("return", D.delete("".concat(c.apiBaseURL, "/v1/meetings/").concat(e), r))
											)
										case 5:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Qt(t) {
					return Vt.apply(this, arguments)
				}
				function Vt() {
					return (Vt = Rt(
						Pt().mark(function t(e) {
							var r, n, o, i, a, u, s, p
							return Pt().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (
													(r = e.meetingId),
													(n = e.permission),
													(o = e.expiry),
													(i = void 0 === o ? 3600 : o),
													(t.prev = 1),
													(t.next = 4),
													tt()
												)
											case 4:
												;(a = t.sent), (t.next = 11)
												break
											case 7:
												throw (
													((t.prev = 7),
													(t.t0 = t.catch(1)),
													yt.error({
														err: t.t0,
													}),
													new St("user is not authenticated"))
												)
											case 11:
												return (
													(t.prev = 11),
													(u = {
														"Content-Type": "application/json",
														Accept: "application/json",
														"x-jibb-user-jwt": a,
													}),
													(t.next = 15),
													D.get(
														""
															.concat(c.apiBaseURL, "/v1/meetings/")
															.concat(r, "/token/")
															.concat(n, "?expiry.seconds=")
															.concat(i),
														u
													)
												)
											case 15:
												return (s = t.sent), t.abrupt("return", s.data.token)
											case 19:
												if (
													((t.prev = 19),
													(t.t1 = t.catch(11)),
													404 !=
														(null === t.t1 || void 0 === t.t1 || null === (p = t.t1.response) || void 0 === p
															? void 0
															: p.status))
												) {
													t.next = 25
													break
												}
												throw new Ot("meeting not found")
											case 25:
												throw t.t1
											case 26:
											case "end":
												return t.stop()
										}
								},
								t,
								null,
								[
									[1, 7],
									[11, 19],
								]
							)
						})
					)).apply(this, arguments)
				}
				function Zt(t) {
					return te.apply(this, arguments)
				}
				function te() {
					return (te = Rt(
						Pt().mark(function t(e) {
							var r, n
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), tt()
										case 2:
											return (
												(t.t0 = t.sent),
												(r = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												void 0 !== e && (r["x-jibb-pagination"] = JSON.stringify(e)),
												(t.next = 7),
												D.get("".concat(c.apiBaseURL, "/v1/meetings"), r)
											)
										case 7:
											return (
												(n = t.sent),
												(e = (e = n.headers["x-jibb-pagination"]) && JSON.parse(e)),
												t.abrupt("return", {
													meetings: n.data.meetings,
													pagination: e,
												})
											)
										case 11:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function ee(t) {
					return re.apply(this, arguments)
				}
				function re() {
					return (re = Rt(
						Pt().mark(function t(e) {
							var r, n
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), tt()
										case 2:
											return (
												(t.t0 = t.sent),
												(r = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(t.next = 6),
												D.get("".concat(c.apiBaseURL, "/v1/meetings/").concat(e), r)
											)
										case 6:
											return (n = t.sent), t.abrupt("return", n.data)
										case 8:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function ne(t) {
					return oe.apply(this, arguments)
				}
				function oe() {
					return (oe = Rt(
						Pt().mark(function t(e) {
							var r, n, o, i, a
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.meetingId), (n = e.title), (o = e.capacity), (t.next = 3), tt()
										case 3:
											return (
												(t.t0 = t.sent),
												(i = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(a = {}),
												n && (a.title = n),
												o && (a.capacity = o),
												t.abrupt("return", D.post("".concat(c.apiBaseURL, "/v1/meetings/").concat(r), a, i))
											)
										case 9:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function ie(t) {
					return ae.apply(this, arguments)
				}
				function ae() {
					return (ae = Rt(
						Pt().mark(function t(e) {
							var r, n
							return Pt().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (t.prev = 0), (r = new E(e)), (t.t0 = _), (t.next = 5), tt()
											case 5:
												return (t.t1 = t.sent), (n = new t.t0(t.t1)), t.abrupt("return", n.email === r.owner)
											case 10:
												return (t.prev = 10), (t.t2 = t.catch(0)), t.abrupt("return", !1)
											case 13:
											case "end":
												return t.stop()
										}
								},
								t,
								null,
								[[0, 10]]
							)
						})
					)).apply(this, arguments)
				}
				function ce(t) {
					return ue.apply(this, arguments)
				}
				function ue() {
					return (ue = Rt(
						Pt().mark(function t(e) {
							var r, n, o, i, a, u, s
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.email), (n = e.meetingId), (o = e.permission), (i = e.meetingToken), (t.next = 3), tt()
											)
										case 3:
											return (
												(t.t0 = t.sent),
												(t.t1 = i),
												(a = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
													"x-jibb-meeting-jwt": t.t1,
												}),
												(u = {
													email: r,
													permission: o,
												}),
												(t.next = 9),
												D.post("".concat(c.apiBaseURL, "/v1/meetings/").concat(n, "/shares"), u, a)
											)
										case 9:
											return (s = t.sent), t.abrupt("return", s.data)
										case 11:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function se() {
					return pe.apply(this, arguments)
				}
				function pe() {
					return (pe = Rt(
						Pt().mark(function t() {
							var e, r
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), tt()
										case 2:
											return (
												(t.t0 = t.sent),
												(e = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(t.next = 6),
												D.get("".concat(c.apiBaseURL, "/v1/meetings/shares?incoming=true"), e)
											)
										case 6:
											return (r = t.sent), t.abrupt("return", r.data.shares)
										case 8:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function fe() {
					return le.apply(this, arguments)
				}
				function le() {
					return (le = Rt(
						Pt().mark(function t() {
							var e, r
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), tt()
										case 2:
											return (
												(t.t0 = t.sent),
												(e = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(t.next = 6),
												D.get("".concat(c.apiBaseURL, "/v1/meetings/shares?outgoing=true"), e)
											)
										case 6:
											return (r = t.sent), t.abrupt("return", r.data.shares)
										case 8:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function he(t) {
					return ye.apply(this, arguments)
				}
				function ye() {
					return (ye = Rt(
						Pt().mark(function t(e) {
							var r
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), tt()
										case 2:
											return (
												(t.t0 = t.sent),
												(r = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												t.abrupt("return", D.delete("".concat(c.apiBaseURL, "/v1/meetings/shares/").concat(e), r))
											)
										case 5:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function ve(t) {
					return de.apply(this, arguments)
				}
				function de() {
					return (de = Rt(
						Pt().mark(function t(e) {
							var r, n, o, i
							return Pt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.shareId), (n = e.permission), (t.next = 3), tt()
										case 3:
											return (
												(t.t0 = t.sent),
												(o = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(i = {
													permission: n,
												}),
												t.abrupt("return", D.patch("".concat(c.apiBaseURL, "/v1/meetings/shares/").concat(r), i, o))
											)
										case 7:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function me(t) {
					return (
						(me =
							"function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator)
								? function (t) {
										return _typeof(t)
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: _typeof(t)
								  }),
						me(t)
					)
				}
				function ge() {
					ge = function ge() {
						return t
					}
					var t = {},
						e = Object.prototype,
						r = e.hasOwnProperty,
						n = "function" == typeof Symbol ? Symbol : {},
						o = n.iterator || "@@iterator",
						i = n.asyncIterator || "@@asyncIterator",
						a = n.toStringTag || "@@toStringTag"
					function c(t, e, r) {
						return (
							Object.defineProperty(t, e, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							}),
							t[e]
						)
					}
					try {
						c({}, "")
					} catch (t) {
						c = function c(t, e, r) {
							return (t[e] = r)
						}
					}
					function u(t, e, r, n) {
						var o = e && _instanceof(e.prototype, f) ? e : f,
							i = Object.create(o.prototype),
							a = new L(n || [])
						return (
							(i._invoke = (function (t, e, r) {
								var n = "suspendedStart"
								return function (o, i) {
									if ("executing" === n) throw new Error("Generator is already running")
									if ("completed" === n) {
										if ("throw" === o) throw i
										return {
											value: void 0,
											done: !0,
										}
									}
									for (r.method = o, r.arg = i; ; ) {
										var a = r.delegate
										if (a) {
											var c = b(a, r)
											if (c) {
												if (c === p) continue
												return c
											}
										}
										if ("next" === r.method) r.sent = r._sent = r.arg
										else if ("throw" === r.method) {
											if ("suspendedStart" === n) throw ((n = "completed"), r.arg)
											r.dispatchException(r.arg)
										} else "return" === r.method && r.abrupt("return", r.arg)
										n = "executing"
										var u = s(t, e, r)
										if ("normal" === u.type) {
											if (((n = r.done ? "completed" : "suspendedYield"), u.arg === p)) continue
											return {
												value: u.arg,
												done: r.done,
											}
										}
										"throw" === u.type && ((n = "completed"), (r.method = "throw"), (r.arg = u.arg))
									}
								}
							})(t, r, a)),
							i
						)
					}
					function s(t, e, r) {
						try {
							return {
								type: "normal",
								arg: t.call(e, r),
							}
						} catch (t) {
							return {
								type: "throw",
								arg: t,
							}
						}
					}
					t.wrap = u
					var p = {}
					function f() {}
					function l() {}
					function h() {}
					var y = {}
					c(y, o, function () {
						return this
					})
					var v = Object.getPrototypeOf,
						d = v && v(v(k([])))
					d && d !== e && r.call(d, o) && (y = d)
					var m = (h.prototype = f.prototype = Object.create(y))
					function g(t) {
						;["next", "throw", "return"].forEach(function (e) {
							c(t, e, function (t) {
								return this._invoke(e, t)
							})
						})
					}
					function w(t, e) {
						function n(o, i, a, c) {
							var u = s(t[o], t, i)
							if ("throw" !== u.type) {
								var p = u.arg,
									f = p.value
								return f && "object" == me(f) && r.call(f, "__await")
									? e.resolve(f.__await).then(
											function (t) {
												n("next", t, a, c)
											},
											function (t) {
												n("throw", t, a, c)
											}
									  )
									: e.resolve(f).then(
											function (t) {
												;(p.value = t), a(p)
											},
											function (t) {
												return n("throw", t, a, c)
											}
									  )
							}
							c(u.arg)
						}
						var o
						this._invoke = function (t, r) {
							function i() {
								return new e(function (e, o) {
									n(t, r, e, o)
								})
							}
							return (o = o ? o.then(i, i) : i())
						}
					}
					function b(t, e) {
						var r = t.iterator[e.method]
						if (void 0 === r) {
							if (((e.delegate = null), "throw" === e.method)) {
								if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), b(t, e), "throw" === e.method))
									return p
								;(e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
							}
							return p
						}
						var n = s(r, t.iterator, e.arg)
						if ("throw" === n.type) return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), p
						var o = n.arg
						return o
							? o.done
								? ((e[t.resultName] = o.value),
								  (e.next = t.nextLoc),
								  "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
								  (e.delegate = null),
								  p)
								: o
							: ((e.method = "throw"),
							  (e.arg = new TypeError("iterator result is not an object")),
							  (e.delegate = null),
							  p)
					}
					function x(t) {
						var e = {
							tryLoc: t[0],
						}
						1 in t && (e.catchLoc = t[1]),
							2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
							this.tryEntries.push(e)
					}
					function j(t) {
						var e = t.completion || {}
						;(e.type = "normal"), delete e.arg, (t.completion = e)
					}
					function L(t) {
						;(this.tryEntries = [
							{
								tryLoc: "root",
							},
						]),
							t.forEach(x, this),
							this.reset(!0)
					}
					function k(t) {
						if (t) {
							var e = t[o]
							if (e) return e.call(t)
							if ("function" == typeof t.next) return t
							if (!isNaN(t.length)) {
								var n = -1,
									i = function e() {
										for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e
										return (e.value = void 0), (e.done = !0), e
									}
								return (i.next = i)
							}
						}
						return {
							next: E,
						}
					}
					function E() {
						return {
							value: void 0,
							done: !0,
						}
					}
					return (
						(l.prototype = h),
						c(m, "constructor", h),
						c(h, "constructor", l),
						(l.displayName = c(h, a, "GeneratorFunction")),
						(t.isGeneratorFunction = function (t) {
							var e = "function" == typeof t && t.constructor
							return !!e && (e === l || "GeneratorFunction" === (e.displayName || e.name))
						}),
						(t.mark = function (t) {
							return (
								Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : ((t.__proto__ = h), c(t, a, "GeneratorFunction")),
								(t.prototype = Object.create(m)),
								t
							)
						}),
						(t.awrap = function (t) {
							return {
								__await: t,
							}
						}),
						g(w.prototype),
						c(w.prototype, i, function () {
							return this
						}),
						(t.AsyncIterator = w),
						(t.async = function (e, r, n, o, i) {
							void 0 === i && (i = Promise)
							var a = new w(u(e, r, n, o), i)
							return t.isGeneratorFunction(r)
								? a
								: a.next().then(function (t) {
										return t.done ? t.value : a.next()
								  })
						}),
						g(m),
						c(m, a, "Generator"),
						c(m, o, function () {
							return this
						}),
						c(m, "toString", function () {
							return "[object Generator]"
						}),
						(t.keys = function (t) {
							var e = []
							for (var r in t) e.push(r)
							return (
								e.reverse(),
								function r() {
									for (; e.length; ) {
										var n = e.pop()
										if (n in t) return (r.value = n), (r.done = !1), r
									}
									return (r.done = !0), r
								}
							)
						}),
						(t.values = k),
						(L.prototype = {
							constructor: L,
							reset: function reset(t) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = void 0),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = void 0),
									this.tryEntries.forEach(j),
									!t)
								)
									for (var e in this)
										"t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
							},
							stop: function stop() {
								this.done = !0
								var t = this.tryEntries[0].completion
								if ("throw" === t.type) throw t.arg
								return this.rval
							},
							dispatchException: function dispatchException(t) {
								if (this.done) throw t
								var e = this
								function n(r, n) {
									return (
										(a.type = "throw"), (a.arg = t), (e.next = r), n && ((e.method = "next"), (e.arg = void 0)), !!n
									)
								}
								for (var o = this.tryEntries.length - 1; o >= 0; --o) {
									var i = this.tryEntries[o],
										a = i.completion
									if ("root" === i.tryLoc) return n("end")
									if (i.tryLoc <= this.prev) {
										var c = r.call(i, "catchLoc"),
											u = r.call(i, "finallyLoc")
										if (c && u) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										} else if (c) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
										} else {
											if (!u) throw new Error("try statement without catch or finally")
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										}
									}
								}
							},
							abrupt: function abrupt(t, e) {
								for (var n = this.tryEntries.length - 1; n >= 0; --n) {
									var o = this.tryEntries[n]
									if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
										var i = o
										break
									}
								}
								i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null)
								var a = i ? i.completion : {}
								return (
									(a.type = t),
									(a.arg = e),
									i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a)
								)
							},
							complete: function complete(t, e) {
								if ("throw" === t.type) throw t.arg
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
										? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
										: "normal" === t.type && e && (this.next = e),
									p
								)
							},
							finish: function finish(t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), p
								}
							},
							catch: function _catch(t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.tryLoc === t) {
										var n = r.completion
										if ("throw" === n.type) {
											var o = n.arg
											j(r)
										}
										return o
									}
								}
								throw new Error("illegal catch attempt")
							},
							delegateYield: function delegateYield(t, e, r) {
								return (
									(this.delegate = {
										iterator: k(t),
										resultName: e,
										nextLoc: r,
									}),
									"next" === this.method && (this.arg = void 0),
									p
								)
							},
						}),
						t
					)
				}
				function we(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}
				function be(t) {
					return function () {
						var e = this,
							r = arguments
						return new Promise(function (n, o) {
							var i = t.apply(e, r)
							function a(t) {
								we(i, n, o, a, c, "next", t)
							}
							function c(t) {
								we(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						})
					}
				}
				function xe(t) {
					return je.apply(this, arguments)
				}
				function je() {
					return (je = be(
						ge().mark(function t(e) {
							var r
							return ge().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(t.t0 = D),
												(t.t1 = "".concat(c.apiBaseURL, "/v1/eventbus/clients/").concat(e, "/cameras")),
												(t.next = 4),
												Be()
											)
										case 4:
											return (t.t2 = t.sent), (t.next = 7), t.t0.get.call(t.t0, t.t1, t.t2)
										case 7:
											return (r = t.sent), t.abrupt("return", r.data.items)
										case 9:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Le(t) {
					return ke.apply(this, arguments)
				}
				function ke() {
					return (ke = be(
						ge().mark(function t(e) {
							var r, n, o, i
							return ge().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.cameraId),
												(n = e.clientId),
												(o = {
													source: {
														id: r,
													},
												}),
												(t.t0 = D),
												(t.t1 = "".concat(c.apiBaseURL, "/v1/eventbus/").concat(n, "/preview")),
												(t.t2 = o),
												(t.next = 7),
												Be()
											)
										case 7:
											return (t.t3 = t.sent), (t.next = 10), t.t0.post.call(t.t0, t.t1, t.t2, t.t3)
										case 10:
											return (i = t.sent), t.abrupt("return", i.data.image)
										case 12:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Ee(t) {
					return _e.apply(this, arguments)
				}
				function _e() {
					return (_e = be(
						ge().mark(function t(e) {
							var r, n, o, i, a, u, s, p, f, l, h, y, v, d
							return ge().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											if (
												((r = e.meetingToken),
												(n = e.surfaceType),
												(o = e.cameraId),
												(i = e.sipUri),
												(a = e.flipLeftRight),
												(u = e.flipUpDown),
												(s = e.rotation),
												(p = e.fixedCorners),
												(f = e.clientId),
												(l = e.customCorners),
												(h = e.enableColor),
												(y = e.enableEstimation),
												(v = {
													config: {
														surface_type: n,
													},
													runtime_config: Ne({
														fixedCorners: p,
														flipLeftRight: a,
														flipUpDown: u,
														rotation: s,
														customCorners: l,
														enableColor: h,
														enableEstimation: y,
													}),
													meeting_token: r,
												}),
												o || i)
											) {
												t.next = 4
												break
											}
											return t.abrupt(
												"return",
												Promise.reject("Invalid request: either sipUri or cameraId should be specified")
											)
										case 4:
											if (!o || !i) {
												t.next = 8
												break
											}
											return t.abrupt(
												"return",
												Promise.reject(
													"Invalid request: both sipUri (".concat(i, ") and cameraId (").concat(i, ") are specified")
												)
											)
										case 8:
											i
												? (v.sip_uri = i)
												: (v.camera = {
														id: o,
												  })
										case 9:
											return (
												(d = {
													start_request: v,
												}),
												(t.t0 = D),
												(t.t1 = "".concat(c.apiBaseURL, "/v1/eventbus/clients/").concat(f, "/start")),
												(t.t2 = d),
												(t.next = 15),
												Be()
											)
										case 15:
											return (t.t3 = t.sent), t.abrupt("return", t.t0.post.call(t.t0, t.t1, t.t2, t.t3))
										case 17:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Oe(t) {
					return Se.apply(this, arguments)
				}
				function Se() {
					return (Se = be(
						ge().mark(function t(e) {
							var r
							return ge().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = {}),
												(t.t0 = D),
												(t.t1 = "".concat(c.apiBaseURL, "/v1/eventbus/").concat(e, "/stop")),
												(t.t2 = r),
												(t.next = 6),
												Be()
											)
										case 6:
											return (t.t3 = t.sent), t.abrupt("return", t.t0.post.call(t.t0, t.t1, t.t2, t.t3))
										case 8:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Te(t) {
					return Pe.apply(this, arguments)
				}
				function Pe() {
					return (Pe = be(
						ge().mark(function t(e) {
							return ge().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(t.t0 = D), (t.t1 = "".concat(c.apiBaseURL, "/v1/eventbus")), (t.t2 = e), (t.next = 5), Be()
											)
										case 5:
											return (t.t3 = t.sent), t.abrupt("return", t.t0.post.call(t.t0, t.t1, t.t2, t.t3))
										case 7:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Ce(t) {
					return Re.apply(this, arguments)
				}
				function Re() {
					return (Re = be(
						ge().mark(function t(e) {
							var r, n, o, i, a, u, s, p, f
							return ge().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.flipLeftRight),
												(n = e.flipUpDown),
												(o = e.rotation),
												(i = e.fixedCorners),
												(a = e.customCorners),
												(u = e.clientId),
												(s = e.enableColor),
												(p = e.enableEstimation),
												(f = {
													runtime_config_request: {
														runtime_config: Ne({
															fixedCorners: i,
															flipLeftRight: r,
															flipUpDown: n,
															rotation: o,
															customCorners: a,
															enableColor: s,
															enableEstimation: p,
														}),
													},
												}),
												(t.t0 = D),
												(t.t1 = "".concat(c.apiBaseURL, "/v1/eventbus/").concat(u, "/runtime_config")),
												(t.t2 = f),
												(t.next = 7),
												Be()
											)
										case 7:
											return (t.t3 = t.sent), t.abrupt("return", t.t0.post.call(t.t0, t.t1, t.t2, t.t3))
										case 9:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Ue() {
					return Ie.apply(this, arguments)
				}
				function Ie() {
					return (Ie = be(
						ge().mark(function t() {
							var e
							return ge().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.t0 = D), (t.t1 = "".concat(c.apiBaseURL, "/v1/eventbus/clients")), (t.next = 4), Be()
										case 4:
											return (t.t2 = t.sent), (t.next = 7), t.t0.get.call(t.t0, t.t1, t.t2)
										case 7:
											return (e = t.sent), t.abrupt("return", e.data.clients)
										case 9:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Be() {
					return Ae.apply(this, arguments)
				}
				function Ae() {
					return (Ae = be(
						ge().mark(function t() {
							return ge().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), tt()
										case 2:
											return (
												(t.t0 = t.sent),
												t.abrupt("return", {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												})
											)
										case 4:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Ne(t) {
					var e = t.fixedCorners,
						r = t.flipLeftRight,
						n = t.flipUpDown,
						o = t.rotation,
						i = t.customCorners,
						a = t.enableColor,
						c = t.enableEstimation
					switch (o) {
						case 90:
							o = "1"
							break
						case 180:
						case -180:
							o = "2"
							break
						case -90:
						case 270:
							o = "3"
							break
						default:
							o = "0"
					}
					return {
						custom_corners: i || [],
						rotation: o,
						enable_color: a || !1,
						fixed_corners: e,
						enable_estimation: c || !1,
						flip_up_down: n || !1,
						flip_left_right: r || !1,
					}
				}
				function Ge(t) {
					return (
						(Ge =
							"function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator)
								? function (t) {
										return _typeof(t)
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: _typeof(t)
								  }),
						Ge(t)
					)
				}
				function Fe() {
					Fe = function Fe() {
						return t
					}
					var t = {},
						e = Object.prototype,
						r = e.hasOwnProperty,
						n = "function" == typeof Symbol ? Symbol : {},
						o = n.iterator || "@@iterator",
						i = n.asyncIterator || "@@asyncIterator",
						a = n.toStringTag || "@@toStringTag"
					function c(t, e, r) {
						return (
							Object.defineProperty(t, e, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0,
							}),
							t[e]
						)
					}
					try {
						c({}, "")
					} catch (t) {
						c = function c(t, e, r) {
							return (t[e] = r)
						}
					}
					function u(t, e, r, n) {
						var o = e && _instanceof(e.prototype, f) ? e : f,
							i = Object.create(o.prototype),
							a = new L(n || [])
						return (
							(i._invoke = (function (t, e, r) {
								var n = "suspendedStart"
								return function (o, i) {
									if ("executing" === n) throw new Error("Generator is already running")
									if ("completed" === n) {
										if ("throw" === o) throw i
										return {
											value: void 0,
											done: !0,
										}
									}
									for (r.method = o, r.arg = i; ; ) {
										var a = r.delegate
										if (a) {
											var c = b(a, r)
											if (c) {
												if (c === p) continue
												return c
											}
										}
										if ("next" === r.method) r.sent = r._sent = r.arg
										else if ("throw" === r.method) {
											if ("suspendedStart" === n) throw ((n = "completed"), r.arg)
											r.dispatchException(r.arg)
										} else "return" === r.method && r.abrupt("return", r.arg)
										n = "executing"
										var u = s(t, e, r)
										if ("normal" === u.type) {
											if (((n = r.done ? "completed" : "suspendedYield"), u.arg === p)) continue
											return {
												value: u.arg,
												done: r.done,
											}
										}
										"throw" === u.type && ((n = "completed"), (r.method = "throw"), (r.arg = u.arg))
									}
								}
							})(t, r, a)),
							i
						)
					}
					function s(t, e, r) {
						try {
							return {
								type: "normal",
								arg: t.call(e, r),
							}
						} catch (t) {
							return {
								type: "throw",
								arg: t,
							}
						}
					}
					t.wrap = u
					var p = {}
					function f() {}
					function l() {}
					function h() {}
					var y = {}
					c(y, o, function () {
						return this
					})
					var v = Object.getPrototypeOf,
						d = v && v(v(k([])))
					d && d !== e && r.call(d, o) && (y = d)
					var m = (h.prototype = f.prototype = Object.create(y))
					function g(t) {
						;["next", "throw", "return"].forEach(function (e) {
							c(t, e, function (t) {
								return this._invoke(e, t)
							})
						})
					}
					function w(t, e) {
						function n(o, i, a, c) {
							var u = s(t[o], t, i)
							if ("throw" !== u.type) {
								var p = u.arg,
									f = p.value
								return f && "object" == Ge(f) && r.call(f, "__await")
									? e.resolve(f.__await).then(
											function (t) {
												n("next", t, a, c)
											},
											function (t) {
												n("throw", t, a, c)
											}
									  )
									: e.resolve(f).then(
											function (t) {
												;(p.value = t), a(p)
											},
											function (t) {
												return n("throw", t, a, c)
											}
									  )
							}
							c(u.arg)
						}
						var o
						this._invoke = function (t, r) {
							function i() {
								return new e(function (e, o) {
									n(t, r, e, o)
								})
							}
							return (o = o ? o.then(i, i) : i())
						}
					}
					function b(t, e) {
						var r = t.iterator[e.method]
						if (void 0 === r) {
							if (((e.delegate = null), "throw" === e.method)) {
								if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), b(t, e), "throw" === e.method))
									return p
								;(e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
							}
							return p
						}
						var n = s(r, t.iterator, e.arg)
						if ("throw" === n.type) return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), p
						var o = n.arg
						return o
							? o.done
								? ((e[t.resultName] = o.value),
								  (e.next = t.nextLoc),
								  "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
								  (e.delegate = null),
								  p)
								: o
							: ((e.method = "throw"),
							  (e.arg = new TypeError("iterator result is not an object")),
							  (e.delegate = null),
							  p)
					}
					function x(t) {
						var e = {
							tryLoc: t[0],
						}
						1 in t && (e.catchLoc = t[1]),
							2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
							this.tryEntries.push(e)
					}
					function j(t) {
						var e = t.completion || {}
						;(e.type = "normal"), delete e.arg, (t.completion = e)
					}
					function L(t) {
						;(this.tryEntries = [
							{
								tryLoc: "root",
							},
						]),
							t.forEach(x, this),
							this.reset(!0)
					}
					function k(t) {
						if (t) {
							var e = t[o]
							if (e) return e.call(t)
							if ("function" == typeof t.next) return t
							if (!isNaN(t.length)) {
								var n = -1,
									i = function e() {
										for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e
										return (e.value = void 0), (e.done = !0), e
									}
								return (i.next = i)
							}
						}
						return {
							next: E,
						}
					}
					function E() {
						return {
							value: void 0,
							done: !0,
						}
					}
					return (
						(l.prototype = h),
						c(m, "constructor", h),
						c(h, "constructor", l),
						(l.displayName = c(h, a, "GeneratorFunction")),
						(t.isGeneratorFunction = function (t) {
							var e = "function" == typeof t && t.constructor
							return !!e && (e === l || "GeneratorFunction" === (e.displayName || e.name))
						}),
						(t.mark = function (t) {
							return (
								Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : ((t.__proto__ = h), c(t, a, "GeneratorFunction")),
								(t.prototype = Object.create(m)),
								t
							)
						}),
						(t.awrap = function (t) {
							return {
								__await: t,
							}
						}),
						g(w.prototype),
						c(w.prototype, i, function () {
							return this
						}),
						(t.AsyncIterator = w),
						(t.async = function (e, r, n, o, i) {
							void 0 === i && (i = Promise)
							var a = new w(u(e, r, n, o), i)
							return t.isGeneratorFunction(r)
								? a
								: a.next().then(function (t) {
										return t.done ? t.value : a.next()
								  })
						}),
						g(m),
						c(m, a, "Generator"),
						c(m, o, function () {
							return this
						}),
						c(m, "toString", function () {
							return "[object Generator]"
						}),
						(t.keys = function (t) {
							var e = []
							for (var r in t) e.push(r)
							return (
								e.reverse(),
								function r() {
									for (; e.length; ) {
										var n = e.pop()
										if (n in t) return (r.value = n), (r.done = !1), r
									}
									return (r.done = !0), r
								}
							)
						}),
						(t.values = k),
						(L.prototype = {
							constructor: L,
							reset: function reset(t) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = void 0),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = void 0),
									this.tryEntries.forEach(j),
									!t)
								)
									for (var e in this)
										"t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
							},
							stop: function stop() {
								this.done = !0
								var t = this.tryEntries[0].completion
								if ("throw" === t.type) throw t.arg
								return this.rval
							},
							dispatchException: function dispatchException(t) {
								if (this.done) throw t
								var e = this
								function n(r, n) {
									return (
										(a.type = "throw"), (a.arg = t), (e.next = r), n && ((e.method = "next"), (e.arg = void 0)), !!n
									)
								}
								for (var o = this.tryEntries.length - 1; o >= 0; --o) {
									var i = this.tryEntries[o],
										a = i.completion
									if ("root" === i.tryLoc) return n("end")
									if (i.tryLoc <= this.prev) {
										var c = r.call(i, "catchLoc"),
											u = r.call(i, "finallyLoc")
										if (c && u) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										} else if (c) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
										} else {
											if (!u) throw new Error("try statement without catch or finally")
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										}
									}
								}
							},
							abrupt: function abrupt(t, e) {
								for (var n = this.tryEntries.length - 1; n >= 0; --n) {
									var o = this.tryEntries[n]
									if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
										var i = o
										break
									}
								}
								i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null)
								var a = i ? i.completion : {}
								return (
									(a.type = t),
									(a.arg = e),
									i ? ((this.method = "next"), (this.next = i.finallyLoc), p) : this.complete(a)
								)
							},
							complete: function complete(t, e) {
								if ("throw" === t.type) throw t.arg
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
										? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
										: "normal" === t.type && e && (this.next = e),
									p
								)
							},
							finish: function finish(t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), p
								}
							},
							catch: function _catch(t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.tryLoc === t) {
										var n = r.completion
										if ("throw" === n.type) {
											var o = n.arg
											j(r)
										}
										return o
									}
								}
								throw new Error("illegal catch attempt")
							},
							delegateYield: function delegateYield(t, e, r) {
								return (
									(this.delegate = {
										iterator: k(t),
										resultName: e,
										nextLoc: r,
									}),
									"next" === this.method && (this.arg = void 0),
									p
								)
							},
						}),
						t
					)
				}
				function Me(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}
				function qe(t) {
					return function () {
						var e = this,
							r = arguments
						return new Promise(function (n, o) {
							var i = t.apply(e, r)
							function a(t) {
								Me(i, n, o, a, c, "next", t)
							}
							function c(t) {
								Me(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						})
					}
				}
				function De() {
					return He.apply(this, arguments)
				}
				function He() {
					return (
						(He = qe(
							Fe().mark(function t() {
								var e,
									r = arguments
								return Fe().wrap(function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (
													(e =
														r.length > 0 && void 0 !== r[0]
															? r[0]
															: {
																	meetingToken: meetingToken,
																	interval: interval,
																	sensivityLevel: sensivityLevel,
															  }),
													t.abrupt(
														"return",
														qe(
															Fe().mark(function t() {
																var r, n, o, i, a, u
																return Fe().wrap(function (t) {
																	for (;;)
																		switch ((t.prev = t.next)) {
																			case 0:
																				return (
																					(r = e.meetingToken),
																					(n = (null == e ? void 0 : e.interval) || 0),
																					(o = (null == e ? void 0 : e.sensivityLevel) || 0),
																					(t.next = 5),
																					tt()
																				)
																			case 5:
																				return (
																					(t.t0 = t.sent),
																					(t.t1 = r),
																					(i = {
																						"Content-Type": "application/json",
																						Accept: "application/json",
																						"x-jibb-user-jwt": t.t0,
																						"x-jibb-meeting-jwt": t.t1,
																					}),
																					(a = {
																						write_interval: n,
																						level: o,
																					}),
																					(t.next = 11),
																					D.post("".concat(c.apiBaseURL, "/v1/meetings/recordings/start"), a, i)
																				)
																			case 11:
																				return (u = t.sent), t.abrupt("return", u.data)
																			case 13:
																			case "end":
																				return t.stop()
																		}
																}, t)
															})
														)()
													)
												)
											case 2:
											case "end":
												return t.stop()
										}
								}, t)
							})
						)),
						He.apply(this, arguments)
					)
				}
				function Ye() {
					return Je.apply(this, arguments)
				}
				function Je() {
					return (Je = qe(
						Fe().mark(function t() {
							var e, r, n
							return Fe().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), tt()
										case 2:
											return (
												(t.t0 = t.sent),
												(e = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(r = {}),
												(t.next = 7),
												D.post("".concat(c.apiBaseURL, "/v1/meetings/recordings/stop"), r, e)
											)
										case 7:
											return (n = t.sent), t.abrupt("return", n.data)
										case 9:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Ke() {
					return We.apply(this, arguments)
				}
				function We() {
					return (We = qe(
						Fe().mark(function t() {
							var e, r, n
							return Fe().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), tt()
										case 2:
											return (
												(t.t0 = t.sent),
												(e = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(r = {}),
												(t.next = 7),
												D.post("".concat(c.apiBaseURL, "/v1/meetings/recordings/snapshot"), r, e)
											)
										case 7:
											return (n = t.sent), t.abrupt("return", n.data)
										case 9:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				Error, Error, Error, Error
				var ze = {
					Auth: t,
					Config: c,
					Meeting: e,
					EventBus: r,
					Recording: n,
				}
			})(),
			i.default
		)
	})()
})
