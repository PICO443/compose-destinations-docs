"use strict";(self.webpackChunkcompose_destinations_docs=self.webpackChunkcompose_destinations_docs||[]).push([[372],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6777:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={sidebar_position:1,slug:"/"},l="Overview",p={unversionedId:"overview",id:"overview",title:"Overview",description:"A KSP library that processes annotations and generates code that uses Official Jetpack Compose Navigation under the hood. It hides the complex, non-type-safe and boilerplate code you would have to write otherwise.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/raamcosta/compose-destinations-docs/edit/main/docusaurus/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Setup",permalink:"/setup"}},d=[{value:"Main features",id:"main-features",children:[],level:2},{value:"Materials",id:"materials",children:[],level:2},{value:"Basic Usage",id:"basic-usage",children:[{value:"1. Annotate your screen Composables with <code>@Destination</code>",id:"1-annotate-your-screen-composables-with-destination",children:[],level:3},{value:"2. Add navigation arguments to the function declaration",id:"2-add-navigation-arguments-to-the-function-declaration",children:[],level:3},{value:"3. Build the project",id:"3-build-the-project",children:[],level:3},{value:"4. Use the generated Destination invoke method to navigate to it",id:"4-use-the-generated-destination-invoke-method-to-navigate-to-it",children:[],level:3},{value:"5. Finally, add the NavHost call",id:"5-finally-add-the-navhost-call",children:[],level:3}],level:2}],m={toc:d};function c(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{width:"250",height:"250",src:"https://user-images.githubusercontent.com/80427734/147891822-5cd34c80-8dca-4d34-8278-2aa3bf36913f.png"})),(0,o.kt)("div",{style:{textAlign:"center",padding:30}}),(0,o.kt)("p",null,"A KSP library that processes annotations and generates code that uses Official Jetpack Compose Navigation under the hood. It hides the complex, non-type-safe and boilerplate code you would have to write otherwise.",(0,o.kt)("br",{parentName:"p"}),"\n","No need to learn a whole new framework to navigate - most APIs are either the same as with the Jetpack Components or inspired by them."),(0,o.kt)("h2",{id:"main-features"},"Main features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Typesafe navigation arguments"),(0,o.kt)("li",{parentName:"ul"},"Simple but configurable navigation graphs setup "),(0,o.kt)("li",{parentName:"ul"},"Navigating back with a result in a simple and type-safe way"),(0,o.kt)("li",{parentName:"ul"},"Getting the navigation arguments from the ",(0,o.kt)("inlineCode",{parentName:"li"},"SavedStateHandle")," (useful in ViewModels) and ",(0,o.kt)("inlineCode",{parentName:"li"},"NavBackStackEntry")," in a type-safe way."),(0,o.kt)("li",{parentName:"ul"},"Navigation animations through integration with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/accompanist/tree/main/navigation-animation"},"Accompanist Navigation-Animation")),(0,o.kt)("li",{parentName:"ul"},"Bottom sheet screens through integration with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/accompanist/tree/main/navigation-material"},"Accompanist Navigation-Material")),(0,o.kt)("li",{parentName:"ul"},"Easy deep linking to screens"),(0,o.kt)("li",{parentName:"ul"},"All you can do with Official Jetpack Compose Navigation but in a simpler safer way!")),(0,o.kt)("h2",{id:"materials"},"Materials"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Philipp Lackner's Youtube video ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Q3iZyW2etm4"},(0,o.kt)("em",{parentName:"a"},"Compose Navigation Just Got SO MUCH EASIER")," \ud83d\ude31")),(0,o.kt)("li",{parentName:"ul"},"Yanneck Rei\xdf's ",(0,o.kt)("a",{parentName:"li",href:"https://medium.com/codex/type-save-navigation-with-jetpack-compose-destinations-610514e85370"},(0,o.kt)("em",{parentName:"a"},"Type Safe Navigation With Jetpack Compose Destinations"))),(0,o.kt)("li",{parentName:"ul"},"Google Dev Expert Kenji Abe's ",(0,o.kt)("a",{parentName:"li",href:"https://star-zero.medium.com/navigation-compose%E3%82%92%E4%BE%BF%E5%88%A9%E3%81%AB%E3%81%97%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8B%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA-c2d0133b3e84"},(0,o.kt)("em",{parentName:"a"},"Navigation Compose\u3092\u4fbf\u5229\u306b\u3057\u3066\u304f\u308c\u308b\u30e9\u30a4\u30d6\u30e9\u30ea"))),(0,o.kt)("li",{parentName:"ul"},"Rafael Costa's ",(0,o.kt)("a",{parentName:"li",href:"https://proandroiddev.com/compose-destinations-simpler-and-safer-navigation-in-compose-with-no-compromises-74a59c6b727d"},(0,o.kt)("em",{parentName:"a"},"Compose Destinations: simpler and safer navigation in Compose with no compromises")))),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("h3",{id:"1-annotate-your-screen-composables-with-destination"},"1. Annotate your screen Composables with ",(0,o.kt)("inlineCode",{parentName:"h3"},"@Destination")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination\n@Composable\nfun ProfileScreen() { /*...*/ }\n")),(0,o.kt)("h3",{id:"2-add-navigation-arguments-to-the-function-declaration"},"2. Add navigation arguments to the function declaration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Parcelable"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Serializable")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Enum")," types are allowed with no additional setup!",(0,o.kt)("br",{parentName:"p"}),"\n","Besides, you can make any type a navigation argument type with a ",(0,o.kt)("a",{parentName:"p",href:"destination-arguments/navigation-arguments#custom-navigation-argument-types"},"one-time simple setup"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Destination\n@Composable\nfun ProfileScreen(\n   id: Int, // <-- required navigation argument\n   groupName: String?, // <-- optional navigation argument\n   isOwnUser: Boolean = false // <-- optional navigation argument\n) { /*...*/ }\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is an alternative way to define the destination arguments in case you don't need to use them\ninside the Composable (as is likely the case when using ViewModel). Read more ",(0,o.kt)("a",{parentName:"p",href:"destination-arguments/navigation-arguments#navigation-arguments-class-delegate"},"here"),"."))),(0,o.kt)("h3",{id:"3-build-the-project"},"3. Build the project"),(0,o.kt)("p",null,"Or ",(0,o.kt)("inlineCode",{parentName:"p"},"./gradlew kspDebugKotlin"),", which should be faster, to generate all the Destinations. With the above annotated composable, a ",(0,o.kt)("inlineCode",{parentName:"p"},"ProfileScreenDestination")," file (that we'll use in step 4) would be generated."),(0,o.kt)("h3",{id:"4-use-the-generated-destination-invoke-method-to-navigate-to-it"},"4. Use the generated Destination invoke method to navigate to it"),(0,o.kt)("p",null,"It will have the correct typed arguments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Destination\n@Composable\nfun SomeOtherScreen(\n   navigator: DestinationsNavigator\n) {\n   /*...*/\n   navigator.navigate(ProfileScreenDestination(id = 7, groupName = "Kotlin programmers"))\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"DestinationsNavigator is a wrapper interface to NavController that if declared as a parameter, will be provided for free by the library. NavController can also be provided in the exact same way, but it ties your composables to a specific implementation which will make it harder to test and preview. Read more ",(0,o.kt)("a",{parentName:"p",href:"navigation/basics"},"here")))),(0,o.kt)("h3",{id:"5-finally-add-the-navhost-call"},"5. Finally, add the NavHost call"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"DestinationsNavHost(navGraph = NavGraphs.root)\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"NavGraphs"),' is a generated file that describes your navigation graphs and their destinations. By default all destinations will belong to "root", but you can use the ',(0,o.kt)("inlineCode",{parentName:"p"},"navGraph")," argument of the annotation to have certain screens in nested navigation graphs."))),(0,o.kt)("p",null,"This call adds all annotated Composable functions as destinations of the Navigation Host."),(0,o.kt)("p",null,"That's it! No need to worry about routes, ",(0,o.kt)("inlineCode",{parentName:"p"},"NavType"),", bundles and strings. All that redundant and\nerror-prone code gets generated for you."))}c.isMDXComponent=!0}}]);