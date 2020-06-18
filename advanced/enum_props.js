import Gitalk from '/_gitalk.js';
import Ga from '/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "TypeScript 入门教程",
        "sidebar": [
            "README.md",
            {
                "link": "introduction/README.md",
                "children": [
                    "introduction/what-is-typescript.md",
                    "introduction/get-typescript.md",
                    "introduction/hello-typescript.md"
                ]
            },
            {
                "link": "basics/README.md",
                "children": [
                    "basics/primitive-data-types.md",
                    "basics/any.md",
                    "basics/type-inference.md",
                    "basics/union-types.md",
                    "basics/type-of-object-interfaces.md",
                    "basics/type-of-array.md",
                    "basics/type-of-function.md",
                    "basics/type-assertion.md",
                    "basics/declaration-files.md",
                    "basics/built-in-objects.md"
                ]
            },
            {
                "link": "advanced/README.md",
                "children": [
                    "advanced/type-aliases.md",
                    "advanced/string-literal-types.md",
                    "advanced/tuple.md",
                    "advanced/enum.md",
                    "advanced/class.md",
                    "advanced/class-and-interfaces.md",
                    "advanced/generics.md",
                    "advanced/declaration-merging.md",
                    "advanced/further-reading.md"
                ]
            },
            {
                "link": "engineering/README.md",
                "children": [
                    "engineering/lint.md",
                    "engineering/compiler-options.md"
                ]
            },
            "thanks/README.md"
        ],
        "nav": [
            {
                "text": "GitHub",
                "link": "https://github.com/xcatliu/typescript-tutorial"
            },
            {
                "text": "赞助作者",
                "link": "https://github.com/xcatliu/typescript-tutorial"
            },
            {
                "text": "本网站使用 Pagic 构建",
                "link": "https://github.com/xcatliu/pagic"
            }
        ],
        "gitalk": {
            "clientID": "29aa4941759fc887ed4f",
            "clientSecret": "33e355efdf3a1959624506a5d88311145208471b",
            "repo": "typescript-tutorial",
            "owner": "xcatliu",
            "admin": [
                "xcatliu"
            ]
        },
        "ga": {
            "id": "UA-45256157-14"
        }
    },
    'pagePath': "advanced/enum.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "advanced/enum.html",
    'title': "枚举",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>枚举</h1>\n<p>枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。</p>\n<h2 id="%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">简单的例子<a class="anchor" href="#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">§</a></h2>\n<p>枚举使用 <code>enum</code> 关键字来定义：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">enum</span> <span class="token maybe-class-name">Days</span> <span class="token punctuation">{</span><span class="token maybe-class-name">Sun</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Mon</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Tue</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Wed</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Thu</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Fri</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Sat</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>枚举成员会被赋值为从 <code>0</code> 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">enum</span> <span class="token maybe-class-name">Days</span> <span class="token punctuation">{</span><span class="token maybe-class-name">Sun</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Mon</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Tue</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Wed</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Thu</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Fri</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Sat</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sun"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Mon"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Tue"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sat"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"Sun"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"Mon"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"Tue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"Sat"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre>\n<p>事实上，上面的例子会被编译为：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token maybe-class-name">Days</span><span class="token punctuation">;</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token maybe-class-name">Days</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sun"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Sun"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Mon"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Mon"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Tue"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Tue"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Wed"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Wed"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Thu"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Thu"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Fri"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Fri"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sat"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Sat"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token maybe-class-name">Days</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h2 id="%E6%89%8B%E5%8A%A8%E8%B5%8B%E5%80%BC">手动赋值<a class="anchor" href="#%E6%89%8B%E5%8A%A8%E8%B5%8B%E5%80%BC">§</a></h2>\n<p>我们也可以给枚举项手动赋值：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">enum</span> <span class="token maybe-class-name">Days</span> <span class="token punctuation">{</span><span class="token maybe-class-name">Sun</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Mon</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Tue</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Wed</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Thu</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Fri</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Sat</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sun"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Mon"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Tue"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sat"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre>\n<p>上面的例子中，未手动赋值的枚举项会接着上一个枚举项递增。</p>\n<p>如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">enum</span> <span class="token maybe-class-name">Days</span> <span class="token punctuation">{</span><span class="token maybe-class-name">Sun</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Mon</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Tue</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Wed</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Thu</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Fri</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Sat</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sun"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Wed"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"Sun"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"Wed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre>\n<p>上面的例子中，递增到 <code>3</code> 的时候与前面的 <code>Sun</code> 的取值重复了，但是 TypeScript 并没有报错，导致 <code>Days[3]</code> 的值先是 <code>&quot;Sun&quot;</code>，而后又被 <code>&quot;Wed&quot;</code> 覆盖了。编译的结果是：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token maybe-class-name">Days</span><span class="token punctuation">;</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token maybe-class-name">Days</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sun"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Sun"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Mon"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Mon"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Tue"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Tue"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Wed"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Wed"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Thu"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Thu"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Fri"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Fri"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sat"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Sat"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token maybe-class-name">Days</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>所以使用的时候需要注意，最好不要出现这种覆盖的情况。</p>\n<p>手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查 (编译出的 js 仍然是可用的)：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">enum</span> <span class="token maybe-class-name">Days</span> <span class="token punctuation">{</span><span class="token maybe-class-name">Sun</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Mon</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Tue</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Wed</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Thu</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Fri</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Sat</span> <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token string">"S"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> <span class="token maybe-class-name">Days</span><span class="token punctuation">;</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token maybe-class-name">Days</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sun"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Sun"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Mon"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Mon"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Tue"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Tue"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Wed"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Wed"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Thu"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Thu"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Fri"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Fri"</span><span class="token punctuation">;</span>\n    <span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sat"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"S"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Sat"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token maybe-class-name">Days</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>当然，手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 <code>1</code>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">enum</span> <span class="token maybe-class-name">Days</span> <span class="token punctuation">{</span><span class="token maybe-class-name">Sun</span> <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Mon</span> <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Tue</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Wed</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Thu</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Fri</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Sat</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sun"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Mon"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Tue"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token maybe-class-name">Days</span><span class="token punctuation">[</span><span class="token string">"Sat"</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">6.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre>\n<h2 id="%E5%B8%B8%E6%95%B0%E9%A1%B9%E5%92%8C%E8%AE%A1%E7%AE%97%E6%89%80%E5%BE%97%E9%A1%B9">常数项和计算所得项<a class="anchor" href="#%E5%B8%B8%E6%95%B0%E9%A1%B9%E5%92%8C%E8%AE%A1%E7%AE%97%E6%89%80%E5%BE%97%E9%A1%B9">§</a></h2>\n<p>枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。</p>\n<p>前面我们所举的例子都是常数项，一个典型的计算所得项的例子：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">enum</span> <span class="token maybe-class-name">Color</span> <span class="token punctuation">{</span><span class="token maybe-class-name">Red</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Green</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Blue</span> <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>上面的例子中，<code>&quot;blue&quot;.length</code> 就是一个计算所得项。</p>\n<p>上面的例子不会报错，但是<strong>如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错</strong>：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">enum</span> <span class="token maybe-class-name">Color</span> <span class="token punctuation">{</span><span class="token maybe-class-name">Red</span> <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Green</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Blue</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(1,33): error TS1061: Enum member must have initializer.</span>\n<span class="token comment">// index.ts(1,40): error TS1061: Enum member must have initializer.</span>\n</code></pre>\n<p>下面是常数项和计算所得项的完整定义，部分引用自<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Enums.html">中文手册 - 枚举</a>：</p>\n<p>当满足以下条件时，枚举成员被当作是常数：</p>\n<ul>\n<li>不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值为上一个枚举成员的值加 <code>1</code>。但第一个枚举元素是个例外。如果它没有初始化方法，那么它的初始值为 <code>0</code>。</li>\n<li>枚举成员使用常数枚举表达式初始化。常数枚举表达式是 TypeScript 表达式的子集，它可以在编译阶段求值。当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：\n<ul>\n<li>数字字面量</li>\n<li>引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的）如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用</li>\n<li>带括号的常数枚举表达式</li>\n<li><code>+</code>, <code>-</code>, <code>~</code> 一元运算符应用于常数枚举表达式</li>\n<li><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code>, <code>&gt;&gt;&gt;</code>, <code>&amp;</code>, <code>|</code>, <code>^</code> 二元运算符，常数枚举表达式做为其一个操作对象。若常数枚举表达式求值后为 NaN 或 Infinity，则会在编译阶段报错</li>\n</ul>\n</li>\n</ul>\n<p>所有其它情况的枚举成员被当作是需要计算得出的值。</p>\n<h2 id="%E5%B8%B8%E6%95%B0%E6%9E%9A%E4%B8%BE">常数枚举<a class="anchor" href="#%E5%B8%B8%E6%95%B0%E6%9E%9A%E4%B8%BE">§</a></h2>\n<p>常数枚举是使用 <code>const enum</code> 定义的枚举类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> <span class="token keyword">enum</span> <span class="token maybe-class-name">Directions</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Up</span><span class="token punctuation">,</span>\n    <span class="token maybe-class-name">Down</span><span class="token punctuation">,</span>\n    <span class="token maybe-class-name">Left</span><span class="token punctuation">,</span>\n    <span class="token maybe-class-name">Right</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Up</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Down</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Left</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Right</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<p>常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。</p>\n<p>上例的编译结果是：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token comment">/* Up */</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* Down */</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token comment">/* Left */</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token comment">/* Right */</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<p>假如包含了计算成员，则会在编译阶段报错：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> <span class="token keyword">enum</span> <span class="token maybe-class-name">Color</span> <span class="token punctuation">{</span><span class="token maybe-class-name">Red</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Green</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Blue</span> <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(1,38): error TS2474: In \'const\' enum declarations member initializer must be constant expression.</span>\n</code></pre>\n<h2 id="%E5%A4%96%E9%83%A8%E6%9E%9A%E4%B8%BE">外部枚举<a class="anchor" href="#%E5%A4%96%E9%83%A8%E6%9E%9A%E4%B8%BE">§</a></h2>\n<p>外部枚举（Ambient Enums）是使用 <code>declare enum</code> 定义的枚举类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">declare</span> <span class="token keyword">enum</span> <span class="token maybe-class-name">Directions</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Up</span><span class="token punctuation">,</span>\n    <span class="token maybe-class-name">Down</span><span class="token punctuation">,</span>\n    <span class="token maybe-class-name">Left</span><span class="token punctuation">,</span>\n    <span class="token maybe-class-name">Right</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Up</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Down</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Left</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Right</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<p>之前提到过，<code>declare</code> 定义的类型只会用于编译时的检查，编译结果中会被删除。</p>\n<p>上例的编译结果是：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Up</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Down</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Left</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Right</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<p>外部枚举与声明语句一样，常出现在声明文件中。</p>\n<p>同时使用 <code>declare</code> 和 <code>const</code> 也是可以的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token keyword">enum</span> <span class="token maybe-class-name">Directions</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">Up</span><span class="token punctuation">,</span>\n    <span class="token maybe-class-name">Down</span><span class="token punctuation">,</span>\n    <span class="token maybe-class-name">Left</span><span class="token punctuation">,</span>\n    <span class="token maybe-class-name">Right</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Up</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Down</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Left</span></span><span class="token punctuation">,</span> <span class="token maybe-class-name">Directions</span><span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">Right</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<p>编译结果：</p>\n<pre class="language-js"><code class="language-js"><span class="token keyword">var</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token comment">/* Up */</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* Down */</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token comment">/* Left */</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token comment">/* Right */</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n<blockquote>\n<p>TypeScript 的枚举类型的概念<a href="https://msdn.microsoft.com/zh-cn/library/sbbt4032.aspx">来源于 C#</a>。</p>\n</blockquote>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/enums.html">Enums</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Enums.html">中文版</a>）</li>\n<li><a href="https://msdn.microsoft.com/zh-cn/library/sbbt4032.aspx">C# Enum</a></li>\n</ul>\n<hr>\n<ul>\n<li><a href="tuple.html">上一章：元组</a></li>\n<li><a href="class.html">下一章：类</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90">简单的例子</a></li><li><a href="#%E6%89%8B%E5%8A%A8%E8%B5%8B%E5%80%BC">手动赋值</a></li><li><a href="#%E5%B8%B8%E6%95%B0%E9%A1%B9%E5%92%8C%E8%AE%A1%E7%AE%97%E6%89%80%E5%BE%97%E9%A1%B9">常数项和计算所得项</a></li><li><a href="#%E5%B8%B8%E6%95%B0%E6%9E%9A%E4%B8%BE">常数枚举</a></li><li><a href="#%E5%A4%96%E9%83%A8%E6%9E%9A%E4%B8%BE">外部枚举</a></li><li><a href="#%E5%8F%82%E8%80%83">参考</a></li></ol></nav>'
        } }),
    'sidebar': [
        {
            "text": "TypeScript 入门教程",
            "link": "index.html"
        },
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "text": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html"
                },
                {
                    "text": "安装 TypeScript",
                    "link": "introduction/get-typescript.html"
                },
                {
                    "text": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html"
                }
            ],
            "text": "简介"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "text": "原始数据类型",
                    "link": "basics/primitive-data-types.html"
                },
                {
                    "text": "任意值",
                    "link": "basics/any.html"
                },
                {
                    "text": "类型推论",
                    "link": "basics/type-inference.html"
                },
                {
                    "text": "联合类型",
                    "link": "basics/union-types.html"
                },
                {
                    "text": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html"
                },
                {
                    "text": "数组的类型",
                    "link": "basics/type-of-array.html"
                },
                {
                    "text": "函数的类型",
                    "link": "basics/type-of-function.html"
                },
                {
                    "text": "类型断言",
                    "link": "basics/type-assertion.html"
                },
                {
                    "text": "声明文件",
                    "link": "basics/declaration-files.html"
                },
                {
                    "text": "内置对象",
                    "link": "basics/built-in-objects.html"
                }
            ],
            "text": "基础"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "text": "类型别名",
                    "link": "advanced/type-aliases.html"
                },
                {
                    "text": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html"
                },
                {
                    "text": "元组",
                    "link": "advanced/tuple.html"
                },
                {
                    "text": "枚举",
                    "link": "advanced/enum.html"
                },
                {
                    "text": "类",
                    "link": "advanced/class.html"
                },
                {
                    "text": "类与接口",
                    "link": "advanced/class-and-interfaces.html"
                },
                {
                    "text": "泛型",
                    "link": "advanced/generics.html"
                },
                {
                    "text": "声明合并",
                    "link": "advanced/declaration-merging.html"
                },
                {
                    "text": "扩展阅读",
                    "link": "advanced/further-reading.html"
                }
            ],
            "text": "进阶"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "text": "代码检查",
                    "link": "engineering/lint.html"
                },
                {
                    "text": "编译选项",
                    "link": "engineering/compiler-options.html"
                }
            ],
            "text": "工程"
        },
        {
            "text": "感谢",
            "link": "thanks/index.html"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "advanced/enum.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u679A\u4E3E" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
