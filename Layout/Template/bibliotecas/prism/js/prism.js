/* PrismJS 1.11.0
http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+apacheconf+php+python+scss+sql&plugins=line-highlight+line-numbers+file-highlight+toolbar+highlight-keywords+normalize-whitespace+keep-markup+show-language+copy-to-clipboard */
var _self =
    'undefined' != typeof window
        ? window
        : 'undefined' != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope
            ? self
            : {},
    Prism = (function () {
        var e = /\blang(?:uage)?-(\w+)\b/i,
            t = 0,
            n = (_self.Prism = {
                manual: _self.Prism && _self.Prism.manual,
                disableWorkerMessageHandler:
                    _self.Prism && _self.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function (e) {
                        return e instanceof r
                            ? new r(e.type, n.util.encode(e.content), e.alias)
                            : 'Array' === n.util.type(e)
                                ? e.map(n.util.encode)
                                : e
                                    .replace(/&/g, '&amp;')
                                    .replace(/</g, '&lt;')
                                    .replace(/\u00a0/g, ' ')
                    },
                    type: function (e) {
                        return Object.prototype.toString
                            .call(e)
                            .match(/\[object (\w+)\]/)[1]
                    },
                    objId: function (e) {
                        return (
                            e.__id || Object.defineProperty(e, '__id', { value: ++t }), e.__id
                        )
                    },
                    clone: function (e) {
                        var t = n.util.type(e)
                        switch (t) {
                            case 'Object':
                                var r = {}
                                for (var a in e)
                                    e.hasOwnProperty(a) && (r[a] = n.util.clone(e[a]))
                                return r
                            case 'Array':
                                return e.map(function (e) {
                                    return n.util.clone(e)
                                })
                        }
                        return e
                    },
                },
                languages: {
                    extend: function (e, t) {
                        var r = n.util.clone(n.languages[e])
                        for (var a in t) r[a] = t[a]
                        return r
                    },
                    insertBefore: function (e, t, r, a) {
                        a = a || n.languages
                        var l = a[e]
                        if (2 == arguments.length) {
                            r = arguments[1]
                            for (var i in r) r.hasOwnProperty(i) && (l[i] = r[i])
                            return l
                        }
                        var o = {}
                        for (var s in l)
                            if (l.hasOwnProperty(s)) {
                                if (s == t)
                                    for (var i in r) r.hasOwnProperty(i) && (o[i] = r[i])
                                o[s] = l[s]
                            }
                        return (
                            n.languages.DFS(n.languages, function (t, n) {
                                n === a[e] && t != e && (this[t] = o)
                            }),
                            (a[e] = o)
                        )
                    },
                    DFS: function (e, t, r, a) {
                        a = a || {}
                        for (var l in e)
                            e.hasOwnProperty(l) &&
                                (t.call(e, l, e[l], r || l),
                                    'Object' !== n.util.type(e[l]) || a[n.util.objId(e[l])]
                                        ? 'Array' !== n.util.type(e[l]) ||
                                        a[n.util.objId(e[l])] ||
                                        ((a[n.util.objId(e[l])] = !0),
                                            n.languages.DFS(e[l], t, l, a))
                                        : ((a[n.util.objId(e[l])] = !0),
                                            n.languages.DFS(e[l], t, null, a)))
                    },
                },
                plugins: {},
                highlightAll: function (e, t) {
                    n.highlightAllUnder(document, e, t)
                },
                highlightAllUnder: function (e, t, r) {
                    var a = {
                        callback: r,
                        selector:
                            'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                    }
                    n.hooks.run('before-highlightall', a)
                    for (
                        var l, i = a.elements || e.querySelectorAll(a.selector), o = 0;
                        (l = i[o++]);

                    )
                        n.highlightElement(l, t === !0, a.callback)
                },
                highlightElement: function (t, r, a) {
                    for (var l, i, o = t; o && !e.test(o.className);) o = o.parentNode
                    o &&
                        ((l = (o.className.match(e) || [, ''])[1].toLowerCase()),
                            (i = n.languages[l])),
                        (t.className =
                            t.className.replace(e, '').replace(/\s+/g, ' ') +
                            ' language-' +
                            l),
                        t.parentNode &&
                        ((o = t.parentNode),
                            /pre/i.test(o.nodeName) &&
                            (o.className =
                                o.className.replace(e, '').replace(/\s+/g, ' ') +
                                ' language-' +
                                l))
                    var s = t.textContent,
                        g = { element: t, language: l, grammar: i, code: s }
                    if ((n.hooks.run('before-sanity-check', g), !g.code || !g.grammar))
                        return (
                            g.code &&
                            (n.hooks.run('before-highlight', g),
                                (g.element.textContent = g.code),
                                n.hooks.run('after-highlight', g)),
                            n.hooks.run('complete', g),
                            void 0
                        )
                    if ((n.hooks.run('before-highlight', g), r && _self.Worker)) {
                        var u = new Worker(n.filename)
                            ; (u.onmessage = function (e) {
                                ; (g.highlightedCode = e.data),
                                    n.hooks.run('before-insert', g),
                                    (g.element.innerHTML = g.highlightedCode),
                                    a && a.call(g.element),
                                    n.hooks.run('after-highlight', g),
                                    n.hooks.run('complete', g)
                            }),
                                u.postMessage(
                                    JSON.stringify({
                                        language: g.language,
                                        code: g.code,
                                        immediateClose: !0,
                                    }),
                                )
                    } else
                        (g.highlightedCode = n.highlight(g.code, g.grammar, g.language)),
                            n.hooks.run('before-insert', g),
                            (g.element.innerHTML = g.highlightedCode),
                            a && a.call(t),
                            n.hooks.run('after-highlight', g),
                            n.hooks.run('complete', g)
                },
                highlight: function (e, t, a) {
                    var l = n.tokenize(e, t)
                    return r.stringify(n.util.encode(l), a)
                },
                matchGrammar: function (e, t, r, a, l, i, o) {
                    var s = n.Token
                    for (var g in r)
                        if (r.hasOwnProperty(g) && r[g]) {
                            if (g == o) return
                            var u = r[g]
                            u = 'Array' === n.util.type(u) ? u : [u]
                            for (var c = 0; c < u.length; ++c) {
                                var h = u[c],
                                    f = h.inside,
                                    d = !!h.lookbehind,
                                    m = !!h.greedy,
                                    p = 0,
                                    y = h.alias
                                if (m && !h.pattern.global) {
                                    var v = h.pattern.toString().match(/[imuy]*$/)[0]
                                    h.pattern = RegExp(h.pattern.source, v + 'g')
                                }
                                h = h.pattern || h
                                for (var b = a, k = l; b < t.length; k += t[b].length, ++b) {
                                    var w = t[b]
                                    if (t.length > e.length) return
                                    if (!(w instanceof s)) {
                                        h.lastIndex = 0
                                        var _ = h.exec(w),
                                            P = 1
                                        if (!_ && m && b != t.length - 1) {
                                            if (((h.lastIndex = k), (_ = h.exec(e)), !_)) break
                                            for (
                                                var A = _.index + (d ? _[1].length : 0),
                                                j = _.index + _[0].length,
                                                x = b,
                                                O = k,
                                                N = t.length;
                                                N > x && (j > O || (!t[x].type && !t[x - 1].greedy));
                                                ++x
                                            )
                                                (O += t[x].length), A >= O && (++b, (k = O))
                                            if (t[b] instanceof s || t[x - 1].greedy) continue
                                                ; (P = x - b), (w = e.slice(k, O)), (_.index -= k)
                                        }
                                        if (_) {
                                            d && (p = _[1].length)
                                            var A = _.index + p,
                                                _ = _[0].slice(p),
                                                j = A + _.length,
                                                S = w.slice(0, A),
                                                C = w.slice(j),
                                                M = [b, P]
                                            S && (++b, (k += S.length), M.push(S))
                                            var E = new s(g, f ? n.tokenize(_, f) : _, y, _, m)
                                            if (
                                                (M.push(E),
                                                    C && M.push(C),
                                                    Array.prototype.splice.apply(t, M),
                                                    1 != P && n.matchGrammar(e, t, r, b, k, !0, g),
                                                    i)
                                            )
                                                break
                                        } else if (i) break
                                    }
                                }
                            }
                        }
                },
                tokenize: function (e, t) {
                    var r = [e],
                        a = t.rest
                    if (a) {
                        for (var l in a) t[l] = a[l]
                        delete t.rest
                    }
                    return n.matchGrammar(e, r, t, 0, 0, !1), r
                },
                hooks: {
                    all: {},
                    add: function (e, t) {
                        var r = n.hooks.all
                            ; (r[e] = r[e] || []), r[e].push(t)
                    },
                    run: function (e, t) {
                        var r = n.hooks.all[e]
                        if (r && r.length) for (var a, l = 0; (a = r[l++]);) a(t)
                    },
                },
            }),
            r = (n.Token = function (e, t, n, r, a) {
                ; (this.type = e),
                    (this.content = t),
                    (this.alias = n),
                    (this.length = 0 | (r || '').length),
                    (this.greedy = !!a)
            })
        if (
            ((r.stringify = function (e, t, a) {
                if ('string' == typeof e) return e
                if ('Array' === n.util.type(e))
                    return e
                        .map(function (n) {
                            return r.stringify(n, t, e)
                        })
                        .join('')
                var l = {
                    type: e.type,
                    content: r.stringify(e.content, t, a),
                    tag: 'span',
                    classes: ['token', e.type],
                    attributes: {},
                    language: t,
                    parent: a,
                }
                if (e.alias) {
                    var i = 'Array' === n.util.type(e.alias) ? e.alias : [e.alias]
                    Array.prototype.push.apply(l.classes, i)
                }
                n.hooks.run('wrap', l)
                var o = Object.keys(l.attributes)
                    .map(function (e) {
                        return (
                            e + '="' + (l.attributes[e] || '').replace(/"/g, '&quot;') + '"'
                        )
                    })
                    .join(' ')
                return (
                    '<' +
                    l.tag +
                    ' class="' +
                    l.classes.join(' ') +
                    '"' +
                    (o ? ' ' + o : '') +
                    '>' +
                    l.content +
                    '</' +
                    l.tag +
                    '>'
                )
            }),
                !_self.document)
        )
            return _self.addEventListener
                ? (n.disableWorkerMessageHandler ||
                    _self.addEventListener(
                        'message',
                        function (e) {
                            var t = JSON.parse(e.data),
                                r = t.language,
                                a = t.code,
                                l = t.immediateClose
                            _self.postMessage(n.highlight(a, n.languages[r], r)),
                                l && _self.close()
                        },
                        !1,
                    ),
                    _self.Prism)
                : _self.Prism
        var a =
            document.currentScript ||
            [].slice.call(document.getElementsByTagName('script')).pop()
        return (
            a &&
            ((n.filename = a.src),
                n.manual ||
                a.hasAttribute('data-manual') ||
                ('loading' !== document.readyState
                    ? window.requestAnimationFrame
                        ? window.requestAnimationFrame(n.highlightAll)
                        : window.setTimeout(n.highlightAll, 16)
                    : document.addEventListener('DOMContentLoaded', n.highlightAll))),
            _self.Prism
        )
    })()
'undefined' != typeof module && module.exports && (module.exports = Prism),
    'undefined' != typeof global && (global.Prism = Prism)
    ; (Prism.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: /<!DOCTYPE[\s\S]+?>/i,
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
                },
                'attr-value': {
                    pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                    inside: {
                        punctuation: [/^=/, { pattern: /(^|[^\\])["']/, lookbehind: !0 }],
                    },
                },
                punctuation: /\/?>/,
                'attr-name': {
                    pattern: /[^\s>\/]+/,
                    inside: { namespace: /^[^\s>\/:]+:/ },
                },
            },
        },
        entity: /&#?[\da-z]{1,8};/i,
    }),
        (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
            Prism.languages.markup.entity),
        Prism.hooks.add('wrap', function (a) {
            'entity' === a.type &&
                (a.attributes.title = a.content.replace(/&amp;/, '&'))
        }),
        (Prism.languages.xml = Prism.languages.markup),
        (Prism.languages.html = Prism.languages.markup),
        (Prism.languages.mathml = Prism.languages.markup),
        (Prism.languages.svg = Prism.languages.markup)
    ; (Prism.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
            inside: { rule: /@[\w-]+/ },
        },
        url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
        selector: /[^{}\s][^{};]*?(?=\s*\{)/,
        string: {
            pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
        },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /\B!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:]/,
    }),
        (Prism.languages.css.atrule.inside.rest = Prism.util.clone(
            Prism.languages.css,
        )),
        Prism.languages.markup &&
        (Prism.languages.insertBefore('markup', 'tag', {
            style: {
                pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
                lookbehind: !0,
                inside: Prism.languages.css,
                alias: 'language-css',
                greedy: !0,
            },
        }),
            Prism.languages.insertBefore(
                'inside',
                'attr-value',
                {
                    'style-attr': {
                        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                        inside: {
                            'attr-name': {
                                pattern: /^\s*style/i,
                                inside: Prism.languages.markup.tag.inside,
                            },
                            punctuation: /^\s*=\s*['"]|['"]\s*$/,
                            'attr-value': { pattern: /.+/i, inside: Prism.languages.css },
                        },
                        alias: 'language-css',
                    },
                },
                Prism.languages.markup.tag,
            ))
Prism.languages.clike = {
    comment: [
        { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 },
    ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
    },
    'class-name': {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ },
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/,
}
    ; (Prism.languages.javascript = Prism.languages.extend('clike', {
        keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
        number: /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
        function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
        operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
    })),
        Prism.languages.insertBefore('javascript', 'keyword', {
            regex: {
                pattern: /(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
                lookbehind: !0,
                greedy: !0,
            },
            'function-variable': {
                pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
                alias: 'function',
            },
        }),
        Prism.languages.insertBefore('javascript', 'string', {
            'template-string': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                greedy: !0,
                inside: {
                    interpolation: {
                        pattern: /\$\{[^}]+\}/,
                        inside: {
                            'interpolation-punctuation': {
                                pattern: /^\$\{|\}$/,
                                alias: 'punctuation',
                            },
                            rest: Prism.languages.javascript,
                        },
                    },
                    string: /[\s\S]+/,
                },
            },
        }),
        Prism.languages.markup &&
        Prism.languages.insertBefore('markup', 'tag', {
            script: {
                pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                lookbehind: !0,
                inside: Prism.languages.javascript,
                alias: 'language-javascript',
                greedy: !0,
            },
        }),
        (Prism.languages.js = Prism.languages.javascript)
Prism.languages.apacheconf = {
    comment: /#.*/,
    'directive-inline': {
        pattern: /^(\s*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|AddAlt|AddAltByEncoding|AddAltByType|AddCharset|AddDefaultCharset|AddDescription|AddEncoding|AddHandler|AddIcon|AddIconByEncoding|AddIconByType|AddInputFilter|AddLanguage|AddModuleInfo|AddOutputFilter|AddOutputFilterByType|AddType|Alias|AliasMatch|Allow|AllowCONNECT|AllowEncodedSlashes|AllowMethods|AllowOverride|AllowOverrideList|Anonymous|Anonymous_LogEmail|Anonymous_MustGiveEmail|Anonymous_NoUserID|Anonymous_VerifyEmail|AsyncRequestWorkerFactor|AuthBasicAuthoritative|AuthBasicFake|AuthBasicProvider|AuthBasicUseDigestAlgorithm|AuthDBDUserPWQuery|AuthDBDUserRealmQuery|AuthDBMGroupFile|AuthDBMType|AuthDBMUserFile|AuthDigestAlgorithm|AuthDigestDomain|AuthDigestNonceLifetime|AuthDigestProvider|AuthDigestQop|AuthDigestShmemSize|AuthFormAuthoritative|AuthFormBody|AuthFormDisableNoStore|AuthFormFakeBasicAuth|AuthFormLocation|AuthFormLoginRequiredLocation|AuthFormLoginSuccessLocation|AuthFormLogoutLocation|AuthFormMethod|AuthFormMimetype|AuthFormPassword|AuthFormProvider|AuthFormSitePassphrase|AuthFormSize|AuthFormUsername|AuthGroupFile|AuthLDAPAuthorizePrefix|AuthLDAPBindAuthoritative|AuthLDAPBindDN|AuthLDAPBindPassword|AuthLDAPCharsetConfig|AuthLDAPCompareAsUser|AuthLDAPCompareDNOnServer|AuthLDAPDereferenceAliases|AuthLDAPGroupAttribute|AuthLDAPGroupAttributeIsDN|AuthLDAPInitialBindAsUser|AuthLDAPInitialBindPattern|AuthLDAPMaxSubGroupDepth|AuthLDAPRemoteUserAttribute|AuthLDAPRemoteUserIsDN|AuthLDAPSearchAsUser|AuthLDAPSubGroupAttribute|AuthLDAPSubGroupClass|AuthLDAPUrl|AuthMerging|AuthName|AuthnCacheContext|AuthnCacheEnable|AuthnCacheProvideFor|AuthnCacheSOCache|AuthnCacheTimeout|AuthnzFcgiCheckAuthnProvider|AuthnzFcgiDefineProvider|AuthType|AuthUserFile|AuthzDBDLoginToReferer|AuthzDBDQuery|AuthzDBDRedirectQuery|AuthzDBMType|AuthzSendForbiddenOnFailure|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|CacheDefaultExpire|CacheDetailHeader|CacheDirLength|CacheDirLevels|CacheDisable|CacheEnable|CacheFile|CacheHeader|CacheIgnoreCacheControl|CacheIgnoreHeaders|CacheIgnoreNoLastMod|CacheIgnoreQueryString|CacheIgnoreURLSessionIdentifiers|CacheKeyBaseURL|CacheLastModifiedFactor|CacheLock|CacheLockMaxAge|CacheLockPath|CacheMaxExpire|CacheMaxFileSize|CacheMinExpire|CacheMinFileSize|CacheNegotiatedDocs|CacheQuickHandler|CacheReadSize|CacheReadTime|CacheRoot|CacheSocache|CacheSocacheMaxSize|CacheSocacheMaxTime|CacheSocacheMinTime|CacheSocacheReadSize|CacheSocacheReadTime|CacheStaleOnError|CacheStoreExpired|CacheStoreNoStore|CacheStorePrivate|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|DeflateBufferSize|DeflateCompressionLevel|DeflateFilterNote|DeflateInflateLimitRequestBody|DeflateInflateRatioBurst|DeflateInflateRatioLimit|DeflateMemLevel|DeflateWindowSize|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|HeartbeatAddress|HeartbeatListen|HeartbeatMaxServers|HeartbeatStorage|HeartbeatStorage|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|IndexHeadInsert|IndexIgnore|IndexIgnoreReset|IndexOptions|IndexOrderDefault|IndexStyleSheet|InputSed|ISAPIAppendLogToErrors|ISAPIAppendLogToQuery|ISAPICacheFile|ISAPIFakeAsync|ISAPILogNotSupported|ISAPIReadAheadBuffer|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAPCacheEntries|LDAPCacheTTL|LDAPConnectionPoolTTL|LDAPConnectionTimeout|LDAPLibraryDebug|LDAPOpCacheEntries|LDAPOpCacheTTL|LDAPReferralHopLimit|LDAPReferrals|LDAPRetries|LDAPRetryDelay|LDAPSharedCacheFile|LDAPSharedCacheSize|LDAPTimeout|LDAPTrustedClientCert|LDAPTrustedGlobalCert|LDAPTrustedMode|LDAPVerifyServerCert|LimitInternalRecursion|LimitRequestBody|LimitRequestFields|LimitRequestFieldSize|LimitRequestLine|LimitXMLRequestBody|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|LuaHookAccessChecker|LuaHookAuthChecker|LuaHookCheckUserID|LuaHookFixups|LuaHookInsertFilter|LuaHookLog|LuaHookMapToStorage|LuaHookTranslateName|LuaHookTypeChecker|LuaInherit|LuaInputFilter|LuaMapHandler|LuaOutputFilter|LuaPackageCPath|LuaPackagePath|LuaQuickHandler|LuaRoot|LuaScope|MaxConnectionsPerChild|MaxKeepAliveRequests|MaxMemFree|MaxRangeOverlaps|MaxRangeReversals|MaxRanges|MaxRequestWorkers|MaxSpareServers|MaxSpareThreads|MaxThreads|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|ProxyAddHeaders|ProxyBadHeader|ProxyBlock|ProxyDomain|ProxyErrorOverride|ProxyExpressDBMFile|ProxyExpressDBMType|ProxyExpressEnable|ProxyFtpDirCharset|ProxyFtpEscapeWildcards|ProxyFtpListOnWildcard|ProxyHTMLBufSize|ProxyHTMLCharsetOut|ProxyHTMLDocType|ProxyHTMLEnable|ProxyHTMLEvents|ProxyHTMLExtended|ProxyHTMLFixups|ProxyHTMLInterp|ProxyHTMLLinks|ProxyHTMLMeta|ProxyHTMLStripComments|ProxyHTMLURLMap|ProxyIOBufferSize|ProxyMaxForwards|ProxyPass|ProxyPassInherit|ProxyPassInterpolateEnv|ProxyPassMatch|ProxyPassReverse|ProxyPassReverseCookieDomain|ProxyPassReverseCookiePath|ProxyPreserveHost|ProxyReceiveBufferSize|ProxyRemote|ProxyRemoteMatch|ProxyRequests|ProxySCGIInternalRedirect|ProxySCGISendfile|ProxySet|ProxySourceAddress|ProxyStatus|ProxyTimeout|ProxyVia|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIPHeader|RemoteIPInternalProxy|RemoteIPInternalProxyList|RemoteIPProxiesHeader|RemoteIPTrustedProxy|RemoteIPTrustedProxyList|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|RewriteBase|RewriteCond|RewriteEngine|RewriteMap|RewriteOptions|RewriteRule|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script|ScriptAlias|ScriptAliasMatch|ScriptInterpreterSource|ScriptLog|ScriptLogBuffer|ScriptLogLength|ScriptSock|SecureListen|SeeRequestTail|SendBufferSize|ServerAdmin|ServerAlias|ServerLimit|ServerName|ServerPath|ServerRoot|ServerSignature|ServerTokens|Session|SessionCookieName|SessionCookieName2|SessionCookieRemove|SessionCryptoCipher|SessionCryptoDriver|SessionCryptoPassphrase|SessionCryptoPassphraseFile|SessionDBDCookieName|SessionDBDCookieName2|SessionDBDCookieRemove|SessionDBDDeleteLabel|SessionDBDInsertLabel|SessionDBDPerUser|SessionDBDSelectLabel|SessionDBDUpdateLabel|SessionEnv|SessionExclude|SessionHeader|SessionInclude|SessionMaxAge|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSLCACertificateFile|SSLCACertificatePath|SSLCADNRequestFile|SSLCADNRequestPath|SSLCARevocationCheck|SSLCARevocationFile|SSLCARevocationPath|SSLCertificateChainFile|SSLCertificateFile|SSLCertificateKeyFile|SSLCipherSuite|SSLCompression|SSLCryptoDevice|SSLEngine|SSLFIPS|SSLHonorCipherOrder|SSLInsecureRenegotiation|SSLOCSPDefaultResponder|SSLOCSPEnable|SSLOCSPOverrideResponder|SSLOCSPResponderTimeout|SSLOCSPResponseMaxAge|SSLOCSPResponseTimeSkew|SSLOCSPUseRequestNonce|SSLOpenSSLConfCmd|SSLOptions|SSLPassPhraseDialog|SSLProtocol|SSLProxyCACertificateFile|SSLProxyCACertificatePath|SSLProxyCARevocationCheck|SSLProxyCARevocationFile|SSLProxyCARevocationPath|SSLProxyCheckPeerCN|SSLProxyCheckPeerExpire|SSLProxyCheckPeerName|SSLProxyCipherSuite|SSLProxyEngine|SSLProxyMachineCertificateChainFile|SSLProxyMachineCertificateFile|SSLProxyMachineCertificatePath|SSLProxyProtocol|SSLProxyVerify|SSLProxyVerifyDepth|SSLRandomSeed|SSLRenegBufferSize|SSLRequire|SSLRequireSSL|SSLSessionCache|SSLSessionCacheTimeout|SSLSessionTicketKeyFile|SSLSRPUnknownUserSeed|SSLSRPVerifierFile|SSLStaplingCache|SSLStaplingErrorCacheTimeout|SSLStaplingFakeTryLater|SSLStaplingForceURL|SSLStaplingResponderTimeout|SSLStaplingResponseMaxAge|SSLStaplingResponseTimeSkew|SSLStaplingReturnResponderErrors|SSLStaplingStandardCacheTimeout|SSLStrictSNIVHostCheck|SSLUserName|SSLUseStapling|SSLVerifyClient|SSLVerifyDepth|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|VirtualDocumentRoot|VirtualDocumentRootIP|VirtualScriptAlias|VirtualScriptAliasIP|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
        lookbehind: !0,
        alias: 'property',
    },
    'directive-block': {
        pattern: /<\/?\b(?:AuthnProviderAlias|AuthzProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|RequireAll|RequireAny|RequireNone|VirtualHost)\b *.*>/i,
        inside: {
            'directive-block': {
                pattern: /^<\/?\w+/,
                inside: { punctuation: /^<\/?/ },
                alias: 'tag',
            },
            'directive-block-parameter': {
                pattern: /.*[^>]/,
                inside: {
                    punctuation: /:/,
                    string: {
                        pattern: /("|').*\1/,
                        inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ },
                    },
                },
                alias: 'attr-value',
            },
            punctuation: />/,
        },
        alias: 'tag',
    },
    'directive-flags': { pattern: /\[(?:\w,?)+\]/, alias: 'keyword' },
    string: {
        pattern: /("|').*\1/,
        inside: { variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/ },
    },
    variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
    regex: /\^?.*\$|\^.*\$?/,
}
    ; (Prism.languages.php = Prism.languages.extend('clike', {
        string: { pattern: /(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
        keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
        constant: /\b[A-Z0-9_]{2,}\b/,
        comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
    })),
        Prism.languages.insertBefore('php', 'class-name', {
            'shell-comment': {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: 'comment',
            },
        }),
        Prism.languages.insertBefore('php', 'keyword', {
            delimiter: { pattern: /\?>|<\?(?:php|=)?/i, alias: 'important' },
            variable: /\$\w+\b/i,
            package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
            },
        }),
        Prism.languages.insertBefore('php', 'operator', {
            property: { pattern: /(->)[\w]+/, lookbehind: !0 },
        }),
        Prism.languages.markup &&
        (Prism.hooks.add('before-highlight', function (e) {
            'php' === e.language &&
                /(?:<\?php|<\?)/gi.test(e.code) &&
                ((e.tokenStack = []),
                    (e.backupCode = e.code),
                    (e.code = e.code.replace(/(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi, function (
                        a,
                    ) {
                        for (
                            var n = e.tokenStack.length;
                            -1 !== e.backupCode.indexOf('___PHP' + n + '___');

                        )
                            ++n
                        return (e.tokenStack[n] = a), '___PHP' + n + '___'
                    })),
                    (e.grammar = Prism.languages.markup))
        }),
            Prism.hooks.add('before-insert', function (e) {
                'php' === e.language &&
                    e.backupCode &&
                    ((e.code = e.backupCode), delete e.backupCode)
            }),
            Prism.hooks.add('after-highlight', function (e) {
                if ('php' === e.language && e.tokenStack) {
                    e.grammar = Prism.languages.php
                    for (var a = 0, n = Object.keys(e.tokenStack); a < n.length; ++a) {
                        var t = n[a],
                            r = e.tokenStack[t]
                        e.highlightedCode = e.highlightedCode.replace(
                            '___PHP' + t + '___',
                            '<span class="token php language-php">' +
                            Prism.highlight(r, e.grammar, 'php').replace(/\$/g, '$$$$') +
                            '</span>',
                        )
                    }
                    e.element.innerHTML = e.highlightedCode
                }
            }))
Prism.languages.python = {
    comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
    'triple-quoted-string': {
        pattern: /("""|''')[\s\S]+?\1/,
        greedy: !0,
        alias: 'string',
    },
    string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
    function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: !0,
    },
    'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
    keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:True|False|None)\b/,
    number: /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
    punctuation: /[{}[\];(),.:]/,
}
    ; (Prism.languages.scss = Prism.languages.extend('css', {
        comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
        atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
        },
        url: /(?:[-a-z]+-)*url(?=\()/i,
        selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
                parent: { pattern: /&/, alias: 'important' },
                placeholder: /%[-\w]+/,
                variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
        },
    })),
        Prism.languages.insertBefore('scss', 'atrule', {
            keyword: [
                /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
                { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
            ],
        }),
        (Prism.languages.scss.property = {
            pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
        }),
        Prism.languages.insertBefore('scss', 'important', {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        Prism.languages.insertBefore('scss', 'function', {
            placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
            statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
            boolean: /\b(?:true|false)\b/,
            null: /\bnull\b/,
            operator: {
                pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
                lookbehind: !0,
            },
        }),
        (Prism.languages.scss.atrule.inside.rest = Prism.util.clone(
            Prism.languages.scss,
        ))
Prism.languages.sql = {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
        lookbehind: !0,
    },
    string: {
        pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\])*\2/,
        greedy: !0,
        lookbehind: !0,
    },
    variable: /@[\w.$]+|@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    function: /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,
    boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
    number: /\b-?(?:0x)?\d*\.?[\da-f]+\b/,
    operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/,
}
!(function () {
    function e(e, t) {
        return Array.prototype.slice.call((t || document).querySelectorAll(e))
    }
    function t(e, t) {
        return (
            (t = ' ' + t + ' '),
            (' ' + e.className + ' ').replace(/[\n\t]/g, ' ').indexOf(t) > -1
        )
    }
    function n(e, n, i) {
        n = 'string' == typeof n ? n : e.getAttribute('data-line')
        for (
            var o,
            l = n.replace(/\s+/g, '').split(','),
            a = +e.getAttribute('data-line-offset') || 0,
            s = r() ? parseInt : parseFloat,
            d = s(getComputedStyle(e).lineHeight),
            u = t(e, 'line-numbers'),
            c = 0;
            (o = l[c++]);

        ) {
            var p = o.split('-'),
                m = +p[0],
                f = +p[1] || m,
                h =
                    e.querySelector('.line-highlight[data-range="' + o + '"]') ||
                    document.createElement('div')
            if (
                (h.setAttribute('aria-hidden', 'true'),
                    h.setAttribute('data-range', o),
                    (h.className = (i || '') + ' line-highlight'),
                    u && Prism.plugins.lineNumbers)
            ) {
                var g = Prism.plugins.lineNumbers.getLine(e, m),
                    y = Prism.plugins.lineNumbers.getLine(e, f)
                g && (h.style.top = g.offsetTop + 'px'),
                    y &&
                    (h.style.height = y.offsetTop - g.offsetTop + y.offsetHeight + 'px')
            } else
                h.setAttribute('data-start', m),
                    f > m && h.setAttribute('data-end', f),
                    (h.style.top = (m - a - 1) * d + 'px'),
                    (h.textContent = new Array(f - m + 2).join(' \n'))
            u ? e.appendChild(h) : (e.querySelector('code') || e).appendChild(h)
        }
    }
    function i() {
        var t = location.hash.slice(1)
        e('.temporary.line-highlight').forEach(function (e) {
            e.parentNode.removeChild(e)
        })
        var i = (t.match(/\.([\d,-]+)$/) || [, ''])[1]
        if (i && !document.getElementById(t)) {
            var r = t.slice(0, t.lastIndexOf('.')),
                o = document.getElementById(r)
            o &&
                (o.hasAttribute('data-line') || o.setAttribute('data-line', ''),
                    n(o, i, 'temporary '),
                    document.querySelector('.temporary.line-highlight').scrollIntoView())
        }
    }
    if (
        'undefined' != typeof self &&
        self.Prism &&
        self.document &&
        document.querySelector
    ) {
        var r = (function () {
            var e
            return function () {
                if ('undefined' == typeof e) {
                    var t = document.createElement('div')
                        ; (t.style.fontSize = '13px'),
                            (t.style.lineHeight = '1.5'),
                            (t.style.padding = 0),
                            (t.style.border = 0),
                            (t.innerHTML = '&nbsp;<br />&nbsp;'),
                            document.body.appendChild(t),
                            (e = 38 === t.offsetHeight),
                            document.body.removeChild(t)
                }
                return e
            }
        })(),
            o = 0
        Prism.hooks.add('before-sanity-check', function (t) {
            var n = t.element.parentNode,
                i = n && n.getAttribute('data-line')
            if (n && i && /pre/i.test(n.nodeName)) {
                var r = 0
                e('.line-highlight', n).forEach(function (e) {
                    ; (r += e.textContent.length), e.parentNode.removeChild(e)
                }),
                    r &&
                    /^( \n)+$/.test(t.code.slice(-r)) &&
                    (t.code = t.code.slice(0, -r))
            }
        }),
            Prism.hooks.add('complete', function l(e) {
                var r = e.element.parentNode,
                    a = r && r.getAttribute('data-line')
                if (r && a && /pre/i.test(r.nodeName)) {
                    clearTimeout(o)
                    var s = Prism.plugins.lineNumbers,
                        d = e.plugins && e.plugins.lineNumbers
                    t(r, 'line-numbers') && s && !d
                        ? Prism.hooks.add('line-numbers', l)
                        : (n(r, a), (o = setTimeout(i, 1)))
                }
            }),
            window.addEventListener('hashchange', i),
            window.addEventListener('resize', function () {
                var e = document.querySelectorAll('pre[data-line]')
                Array.prototype.forEach.call(e, function (e) {
                    n(e)
                })
            })
    }
})()
!(function () {
    if ('undefined' != typeof self && self.Prism && self.document) {
        var e = 'line-numbers',
            t = /\n(?!$)/g,
            n = function (e) {
                var n = r(e),
                    s = n['white-space']
                if ('pre-wrap' === s || 'pre-line' === s) {
                    var l = e.querySelector('code'),
                        i = e.querySelector('.line-numbers-rows'),
                        a = e.querySelector('.line-numbers-sizer'),
                        o = l.textContent.split(t)
                    a ||
                        ((a = document.createElement('span')),
                            (a.className = 'line-numbers-sizer'),
                            l.appendChild(a)),
                        (a.style.display = 'block'),
                        o.forEach(function (e, t) {
                            a.textContent = e || '\n'
                            var n = a.getBoundingClientRect().height
                            i.children[t].style.height = n + 'px'
                        }),
                        (a.textContent = ''),
                        (a.style.display = 'none')
                }
            },
            r = function (e) {
                return e
                    ? window.getComputedStyle
                        ? getComputedStyle(e)
                        : e.currentStyle || null
                    : null
            }
        window.addEventListener('resize', function () {
            Array.prototype.forEach.call(document.querySelectorAll('pre.' + e), n)
        }),
            Prism.hooks.add('complete', function (e) {
                if (e.code) {
                    var r = e.element.parentNode,
                        s = /\s*\bline-numbers\b\s*/
                    if (
                        r &&
                        /pre/i.test(r.nodeName) &&
                        (s.test(r.className) || s.test(e.element.className)) &&
                        !e.element.querySelector('.line-numbers-rows')
                    ) {
                        s.test(e.element.className) &&
                            (e.element.className = e.element.className.replace(s, ' ')),
                            s.test(r.className) || (r.className += ' line-numbers')
                        var l,
                            i = e.code.match(t),
                            a = i ? i.length + 1 : 1,
                            o = new Array(a + 1)
                            ; (o = o.join('<span></span>')),
                                (l = document.createElement('span')),
                                l.setAttribute('aria-hidden', 'true'),
                                (l.className = 'line-numbers-rows'),
                                (l.innerHTML = o),
                                r.hasAttribute('data-start') &&
                                (r.style.counterReset =
                                    'linenumber ' +
                                    (parseInt(r.getAttribute('data-start'), 10) - 1)),
                                e.element.appendChild(l),
                                n(r),
                                Prism.hooks.run('line-numbers', e)
                    }
                }
            }),
            Prism.hooks.add('line-numbers', function (e) {
                ; (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0)
            }),
            (Prism.plugins.lineNumbers = {
                getLine: function (t, n) {
                    if ('PRE' === t.tagName && t.classList.contains(e)) {
                        var r = t.querySelector('.line-numbers-rows'),
                            s = parseInt(t.getAttribute('data-start'), 10) || 1,
                            l = s + (r.children.length - 1)
                        s > n && (n = s), n > l && (n = l)
                        var i = n - s
                        return r.children[i]
                    }
                },
            })
    }
})()
!(function () {
    'undefined' != typeof self &&
        self.Prism &&
        self.document &&
        document.querySelector &&
        ((self.Prism.fileHighlight = function () {
            var e = {
                js: 'javascript',
                py: 'python',
                rb: 'ruby',
                ps1: 'powershell',
                psm1: 'powershell',
                sh: 'bash',
                bat: 'batch',
                h: 'c',
                tex: 'latex',
            }
            Array.prototype.slice
                .call(document.querySelectorAll('pre[data-src]'))
                .forEach(function (t) {
                    for (
                        var s,
                        a = t.getAttribute('data-src'),
                        n = t,
                        r = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
                        n && !r.test(n.className);

                    )
                        n = n.parentNode
                    if ((n && (s = (t.className.match(r) || [, ''])[1]), !s)) {
                        var o = (a.match(/\.(\w+)$/) || [, ''])[1]
                        s = e[o] || o
                    }
                    var l = document.createElement('code')
                        ; (l.className = 'language-' + s),
                            (t.textContent = ''),
                            (l.textContent = 'Loading…'),
                            t.appendChild(l)
                    var i = new XMLHttpRequest()
                    i.open('GET', a, !0),
                        (i.onreadystatechange = function () {
                            4 == i.readyState &&
                                (i.status < 400 && i.responseText
                                    ? ((l.textContent = i.responseText),
                                        Prism.highlightElement(l))
                                    : (l.textContent =
                                        i.status >= 400
                                            ? '✖ Error ' +
                                            i.status +
                                            ' while fetching file: ' +
                                            i.statusText
                                            : '✖ Error: File does not exist or is empty'))
                        }),
                        i.send(null)
                })
        }),
            document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight))
})()
!(function () {
    if ('undefined' != typeof self && self.Prism && self.document) {
        var t = [],
            e = {},
            n = function () { }
        Prism.plugins.toolbar = {}
        var a = (Prism.plugins.toolbar.registerButton = function (n, a) {
            var o
                ; (o =
                    'function' == typeof a
                        ? a
                        : function (t) {
                            var e
                            return (
                                'function' == typeof a.onClick
                                    ? ((e = document.createElement('button')),
                                        (e.type = 'button'),
                                        e.addEventListener('click', function () {
                                            a.onClick.call(this, t)
                                        }))
                                    : 'string' == typeof a.url
                                        ? ((e = document.createElement('a')), (e.href = a.url))
                                        : (e = document.createElement('span')),
                                (e.textContent = a.text),
                                e
                            )
                        }),
                    t.push((e[n] = o))
        }),
            o = (Prism.plugins.toolbar.hook = function (a) {
                var o = a.element.parentNode
                if (
                    o &&
                    /pre/i.test(o.nodeName) &&
                    !o.classList.contains('code-toolbar')
                ) {
                    o.classList.add('code-toolbar')
                    var r = document.createElement('div')
                    r.classList.add('toolbar'),
                        document.body.hasAttribute('data-toolbar-order') &&
                        (t = document.body
                            .getAttribute('data-toolbar-order')
                            .split(',')
                            .map(function (t) {
                                return e[t] || n
                            })),
                        t.forEach(function (t) {
                            var e = t(a)
                            if (e) {
                                var n = document.createElement('div')
                                n.classList.add('toolbar-item'),
                                    n.appendChild(e),
                                    r.appendChild(n)
                            }
                        }),
                        o.appendChild(r)
                }
            })
        a('label', function (t) {
            var e = t.element.parentNode
            if (e && /pre/i.test(e.nodeName) && e.hasAttribute('data-label')) {
                var n,
                    a,
                    o = e.getAttribute('data-label')
                try {
                    a = document.querySelector('template#' + o)
                } catch (r) { }
                return (
                    a
                        ? (n = a.content)
                        : (e.hasAttribute('data-url')
                            ? ((n = document.createElement('a')),
                                (n.href = e.getAttribute('data-url')))
                            : (n = document.createElement('span')),
                            (n.textContent = o)),
                    n
                )
            }
        }),
            Prism.hooks.add('complete', o)
    }
})()
!(function () {
    ; ('undefined' != typeof self && !self.Prism) ||
        ('undefined' != typeof global && !global.Prism) ||
        Prism.hooks.add('wrap', function (e) {
            'keyword' === e.type && e.classes.push('keyword-' + e.content)
        })
})()
!(function () {
    function e(e) {
        this.defaults = r({}, e)
    }
    function n(e) {
        return e.replace(/-(\w)/g, function (e, n) {
            return n.toUpperCase()
        })
    }
    function t(e) {
        for (var n = 0, t = 0; t < e.length; ++t)
            e.charCodeAt(t) == '	'.charCodeAt(0) && (n += 3)
        return e.length + n
    }
    var r =
        Object.assign ||
        function (e, n) {
            for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t])
            return e
        }
        ; (e.prototype = {
            setDefaults: function (e) {
                this.defaults = r(this.defaults, e)
            },
            normalize: function (e, t) {
                t = r(this.defaults, t)
                for (var i in t) {
                    var o = n(i)
                    'normalize' !== i &&
                        'setDefaults' !== o &&
                        t[i] &&
                        this[o] &&
                        (e = this[o].call(this, e, t[i]))
                }
                return e
            },
            leftTrim: function (e) {
                return e.replace(/^\s+/, '')
            },
            rightTrim: function (e) {
                return e.replace(/\s+$/, '')
            },
            tabsToSpaces: function (e, n) {
                return (n = 0 | n || 4), e.replace(/\t/g, new Array(++n).join(' '))
            },
            spacesToTabs: function (e, n) {
                return (n = 0 | n || 4), e.replace(new RegExp(' {' + n + '}', 'g'), '	')
            },
            removeTrailing: function (e) {
                return e.replace(/\s*?$/gm, '')
            },
            removeInitialLineFeed: function (e) {
                return e.replace(/^(?:\r?\n|\r)/, '')
            },
            removeIndent: function (e) {
                var n = e.match(/^[^\S\n\r]*(?=\S)/gm)
                return n && n[0].length
                    ? (n.sort(function (e, n) {
                        return e.length - n.length
                    }),
                        n[0].length ? e.replace(new RegExp('^' + n[0], 'gm'), '') : e)
                    : e
            },
            indent: function (e, n) {
                return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++n).join('	') + '$&')
            },
            breakLines: function (e, n) {
                n = n === !0 ? 80 : 0 | n || 80
                for (var r = e.split('\n'), i = 0; i < r.length; ++i)
                    if (!(t(r[i]) <= n)) {
                        for (var o = r[i].split(/(\s+)/g), a = 0, s = 0; s < o.length; ++s) {
                            var l = t(o[s])
                                ; (a += l), a > n && ((o[s] = '\n' + o[s]), (a = l))
                        }
                        r[i] = o.join('')
                    }
                return r.join('\n')
            },
        }),
            'undefined' != typeof module && module.exports && (module.exports = e),
            'undefined' != typeof Prism &&
            ((Prism.plugins.NormalizeWhitespace = new e({
                'remove-trailing': !0,
                'remove-indent': !0,
                'left-trim': !0,
                'right-trim': !0,
            })),
                Prism.hooks.add('before-sanity-check', function (e) {
                    var n = Prism.plugins.NormalizeWhitespace
                    if (!e.settings || e.settings['whitespace-normalization'] !== !1) {
                        if ((!e.element || !e.element.parentNode) && e.code)
                            return (e.code = n.normalize(e.code, e.settings)), void 0
                        var t = e.element.parentNode,
                            r = /\bno-whitespace-normalization\b/
                        if (
                            e.code &&
                            t &&
                            'pre' === t.nodeName.toLowerCase() &&
                            !r.test(t.className) &&
                            !r.test(e.element.className)
                        ) {
                            for (
                                var i = t.childNodes, o = '', a = '', s = !1, l = 0;
                                l < i.length;
                                ++l
                            ) {
                                var c = i[l]
                                c == e.element
                                    ? (s = !0)
                                    : '#text' === c.nodeName &&
                                    (s ? (a += c.nodeValue) : (o += c.nodeValue),
                                        t.removeChild(c),
                                        --l)
                            }
                            if (e.element.children.length && Prism.plugins.KeepMarkup) {
                                var u = o + e.element.innerHTML + a
                                    ; (e.element.innerHTML = n.normalize(u, e.settings)),
                                        (e.code = e.element.textContent)
                            } else
                                (e.code = o + e.code + a),
                                    (e.code = n.normalize(e.code, e.settings))
                        }
                    }
                }))
})()
!(function () {
    'undefined' != typeof self &&
        self.Prism &&
        self.document &&
        document.createRange &&
        ((Prism.plugins.KeepMarkup = !0),
            Prism.hooks.add('before-highlight', function (e) {
                if (e.element.children.length) {
                    var n = 0,
                        o = [],
                        t = function (e, d) {
                            var r = {}
                            d || ((r.clone = e.cloneNode(!1)), (r.posOpen = n), o.push(r))
                            for (var a = 0, s = e.childNodes.length; s > a; a++) {
                                var l = e.childNodes[a]
                                1 === l.nodeType ? t(l) : 3 === l.nodeType && (n += l.data.length)
                            }
                            d || (r.posClose = n)
                        }
                    t(e.element, !0), o && o.length && (e.keepMarkup = o)
                }
            }),
            Prism.hooks.add('after-highlight', function (e) {
                if (e.keepMarkup && e.keepMarkup.length) {
                    var n = function (e, o) {
                        for (var t = 0, d = e.childNodes.length; d > t; t++) {
                            var r = e.childNodes[t]
                            if (1 === r.nodeType) {
                                if (!n(r, o)) return !1
                            } else
                                3 === r.nodeType &&
                                    (!o.nodeStart &&
                                        o.pos + r.data.length > o.node.posOpen &&
                                        ((o.nodeStart = r),
                                            (o.nodeStartPos = o.node.posOpen - o.pos)),
                                        o.nodeStart &&
                                        o.pos + r.data.length >= o.node.posClose &&
                                        ((o.nodeEnd = r), (o.nodeEndPos = o.node.posClose - o.pos)),
                                        (o.pos += r.data.length))
                            if (o.nodeStart && o.nodeEnd) {
                                var a = document.createRange()
                                return (
                                    a.setStart(o.nodeStart, o.nodeStartPos),
                                    a.setEnd(o.nodeEnd, o.nodeEndPos),
                                    o.node.clone.appendChild(a.extractContents()),
                                    a.insertNode(o.node.clone),
                                    a.detach(),
                                    !1
                                )
                            }
                        }
                        return !0
                    }
                    e.keepMarkup.forEach(function (o) {
                        n(e.element, { node: o, pos: 0 })
                    }),
                        (e.highlightedCode = e.element.innerHTML)
                }
            }))
})()
!(function () {
    if ('undefined' != typeof self && self.Prism && self.document) {
        if (!Prism.plugins.toolbar)
            return (
                console.warn('Show Languages plugin loaded before Toolbar plugin.'),
                void 0
            )
        var e = {
            html: 'HTML',
            xml: 'XML',
            svg: 'SVG',
            mathml: 'MathML',
            css: 'CSS',
            clike: 'C-like',
            javascript: 'JavaScript',
            abap: 'ABAP',
            actionscript: 'ActionScript',
            apacheconf: 'Apache Configuration',
            apl: 'APL',
            applescript: 'AppleScript',
            asciidoc: 'AsciiDoc',
            asm6502: '6502 Assembly',
            aspnet: 'ASP.NET (C#)',
            autohotkey: 'AutoHotkey',
            autoit: 'AutoIt',
            basic: 'BASIC',
            csharp: 'C#',
            cpp: 'C++',
            coffeescript: 'CoffeeScript',
            csp: 'Content-Security-Policy',
            'css-extras': 'CSS Extras',
            django: 'Django/Jinja2',
            fsharp: 'F#',
            glsl: 'GLSL',
            graphql: 'GraphQL',
            http: 'HTTP',
            hpkp: 'HTTP Public-Key-Pins',
            hsts: 'HTTP Strict-Transport-Security',
            ichigojam: 'IchigoJam',
            inform7: 'Inform 7',
            json: 'JSON',
            latex: 'LaTeX',
            livescript: 'LiveScript',
            lolcode: 'LOLCODE',
            matlab: 'MATLAB',
            mel: 'MEL',
            n4js: 'N4JS',
            nasm: 'NASM',
            nginx: 'nginx',
            nsis: 'NSIS',
            objectivec: 'Objective-C',
            ocaml: 'OCaml',
            opencl: 'OpenCL',
            parigp: 'PARI/GP',
            php: 'PHP',
            'php-extras': 'PHP Extras',
            powershell: 'PowerShell',
            properties: '.properties',
            protobuf: 'Protocol Buffers',
            jsx: 'React JSX',
            tsx: 'React TSX',
            renpy: "Ren'py",
            rest: 'reST (reStructuredText)',
            sas: 'SAS',
            sass: 'Sass (Sass)',
            scss: 'Sass (Scss)',
            sql: 'SQL',
            typescript: 'TypeScript',
            vbnet: 'VB.Net',
            vhdl: 'VHDL',
            vim: 'vim',
            wiki: 'Wiki markup',
            xojo: 'Xojo (REALbasic)',
            yaml: 'YAML',
        }
        Prism.plugins.toolbar.registerButton('show-language', function (t) {
            var a = t.element.parentNode
            if (a && /pre/i.test(a.nodeName)) {
                var s =
                    a.getAttribute('data-language') ||
                    e[t.language] ||
                    t.language.substring(0, 1).toUpperCase() + t.language.substring(1),
                    i = document.createElement('span')
                return (i.textContent = s), i
            }
        })
    }
})()
!(function () {
    if ('undefined' != typeof self && self.Prism && self.document) {
        if (!Prism.plugins.toolbar)
            return (
                console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.'),
                void 0
            )
        var o = window.Clipboard || void 0
        o && /(native code)/.test(o.toString()) && (o = void 0),
            o || 'function' != typeof require || (o = require('clipboard'))
        var t = []
        if (!o) {
            var e = document.createElement('script'),
                n = document.querySelector('head')
                ; (e.onload = function () {
                    if ((o = window.Clipboard)) for (; t.length;) t.pop()()
                }),
                    (e.src =
                        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js'),
                    n.appendChild(e)
        }
        Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (e) {
            function n() {
                var t = new o(i, {
                    text: function () {
                        return e.code
                    },
                })
                t.on('success', function () {
                    ; (i.textContent = 'Copiado!'), r()
                }),
                    t.on('error', function () {
                        ; (i.textContent = 'Press Ctrl+C para copiar'), r()
                    })
            }
            function r() {
                setTimeout(function () {
                    i.textContent = 'Copiar'
                }, 5e3)
            }
            var i = document.createElement('a')
            return (i.textContent = 'Copiar'), o ? n() : t.push(n), i
        })
    }
})()
