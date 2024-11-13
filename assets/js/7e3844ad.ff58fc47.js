(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[92405],{29158:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var n=a(67294),r=a(13925),l=a(54236),o=a(40318),i=a(62290);const p=function(){var t=(0,o.Z)({componentName:"SearchBar",props:{platform:{value:"default",options:{default:"default",ios:"ios",android:"android"},type:i.n.Enum,description:"Defines the Platfrom."},clearIcon:{type:i.n.Object,value:""},searchIcon:{type:i.n.Object,value:""},cancelIcon:{type:i.n.Object,value:"",description:"Android Only"},containerStyle:{type:i.n.Object,value:"{}"},inputContainerStyle:{type:i.n.Object,value:"{}"},inputStyle:{type:i.n.Object,value:"{}"},leftIconContainerStyle:{type:i.n.Object,value:"{}"},rightIconContainerStyle:{type:i.n.Object,value:"{}"},lightTheme:{type:i.n.Boolean,value:!1,description:"Default (platform) only "},loadingProps:{type:i.n.Object,value:"{}"},onChangeText:{type:i.n.Function,value:"(newVal) => setValue(newVal)"},onClearText:{type:i.n.Function,value:"() => console.log(onClearText())"},placeholder:{type:i.n.String,value:"Type query here..."},placeholderTextColor:{type:i.n.String,value:"#888"},round:{type:i.n.Boolean,value:!1,description:"Default (platform) only "},showCancel:{type:i.n.Boolean,value:!1,description:"ios (platform) only "},showLoading:{type:i.n.Boolean,value:!1,description:"Shows loader"},underlineColorAndroid:{type:i.n.String,value:""},cancelButtonTitle:{type:i.n.String,value:"Cancel",description:"ios (platform) only "},cancelButtonProps:{type:i.n.Object,value:"{}",description:"ios (platform) only "},onCancel:{type:i.n.Function,value:"() => console.log(onCancel())"},value:{type:i.n.String,value:"",stateful:!0}},scope:{SearchBar:r.SearchBar},imports:{"@rneui/base":{named:["SearchBar"]}}});return n.createElement(n.Fragment,null,n.createElement(l.Z,{params:t}))}},37047:(t,e,a)=>{"use strict";a.d(e,{w:()=>p});var n=a(67294),r=a(35742),l=a(14330),o=a(98576),i=a(61720),p=function(){return n.createElement(r.Z,null,n.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},54236:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var n=a(87462),r=a(67294),l=a(91262),o=a(18421),i=a(77356),p=a(41652),d=a(24309),c=a(16042),m=a(20346),s=a(30650);const u=function(t){var e=t.params,a=t.containerStyle,u=void 0===a?{}:a;return r.createElement(l.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(m.X9.Provider,null,r.createElement(m.PK,{initialMetrics:s.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},r.createElement(o.Z,(0,n.Z)({},e.compilerProps,{minHeight:62,placeholder:i.Z}))),r.createElement(p.Z,{msg:e.errorProps.msg,isPopup:!0}),r.createElement(d.Z,e.knobProps),r.createElement(p.Z,e.errorProps),r.createElement(c.E,e.actions)))}))}},38886:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>k,toc:()=>N});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(37047),i=(a(74866),a(85162),["components"]),p={toc:[{value:"Default SearchBar",id:"default-searchbar",level:3},{value:"Platform specific SearchBar",id:"platform-specific-searchbar",level:3},{value:"Interaction methods",id:"interaction-methods",level:3},{value:'<a name="calling"></a> Calling methods on SearchBar',id:"-calling-methods-on-searchbar",level:4}]};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"default-searchbar"},"Default SearchBar"),(0,l.kt)("img",{src:"../../../img/searchbar.png",width:"300"}),(0,l.kt)("h3",{id:"platform-specific-searchbar"},"Platform specific SearchBar"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"iOS")),(0,l.kt)("img",{src:"https://user-images.githubusercontent.com/17592779/31585176-b124cdae-b1bd-11e7-809f-ba966cebc663.gif",width:"300"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Android")),(0,l.kt)("img",{src:"https://user-images.githubusercontent.com/17592779/31586716-f6e8ff9c-b1d4-11e7-918f-2a7e11d51b08.gif",width:"300"}),(0,l.kt)("h3",{id:"interaction-methods"},"Interaction methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focus"),(0,l.kt)("td",{parentName:"tr",align:null},"call focus on the textinput (",(0,l.kt)("a",{parentName:"td",href:"#calling"},"example"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blur"),(0,l.kt)("td",{parentName:"tr",align:null},"call blur on the textinput (",(0,l.kt)("a",{parentName:"td",href:"#calling"},"example"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clear"),(0,l.kt)("td",{parentName:"tr",align:null},"call clear on the textinput (",(0,l.kt)("a",{parentName:"td",href:"#calling"},"example"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cancel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"(Android and iOS SearchBars only)")," call cancel on the SearchBar (left arrow on Android, Cancel button on iOS). This will basically blur the input and hide the keyboard (",(0,l.kt)("a",{parentName:"td",href:"#calling"},"example"),")")))),(0,l.kt)("h4",{id:"-calling-methods-on-searchbar"},(0,l.kt)("a",{name:"calling"})," Calling methods on SearchBar"),(0,l.kt)("p",null,"Store a reference to the SearchBar in your component by using the ref prop\nprovided by React\n(",(0,l.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"see docs"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<SearchBar\n  ref={search => this.search = search}\n  ...\n/>\n")),(0,l.kt)("p",null,"You can then access SearchBar methods like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'this.search.focus();\nthis.search.blur();\nthis.search.clear();\nthis.search.cancel(); // Only available if `platform` props is "ios"\xa0| "android"\n')),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE SearchBar","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20SearchBar%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20SearchBarComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SwitchComponent%3A%20React.FunctionComponent%3CSearchBarComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bsearch%2C%20setSearch%5D%20%3D%20useState(%22%22)%3B%0A%0Aconst%20updateSearch%20%3D%20(search)%20%3D%3E%20%7B%0A%20%20setSearch(search)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%3CSearchBar%0A%20%20%20%20%20%20placeholder%3D%22Type%20Here...%22%0A%20%20%20%20%20%20onChangeText%3D%7BupdateSearch%7D%0A%20%20%20%20%20%20value%3D%7Bsearch%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Aview%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20SwitchComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var c=a(29158),m=["components"],s={id:"searchbar",title:"SearchBar"},u=void 0,k={unversionedId:"components/searchbar",id:"version-4.0.0-rc.6/components/searchbar",title:"SearchBar",description:"Import",source:"@site/versioned_docs/version-4.0.0-rc.6/components/SearchBar.mdx",sourceDirName:"components",slug:"/components/searchbar",permalink:"/docs/4.0.0-rc.6/components/searchbar",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/SearchBar.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"searchbar",title:"SearchBar"},sidebar:"docs",previous:{title:"PricingCard",permalink:"/docs/4.0.0-rc.6/components/pricingcard"},next:{title:"Slider",permalink:"/docs/4.0.0-rc.6/components/slider"}},g={},N=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],h={toc:N};function y(t){var e=t.components,a=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(o.w,{mdxType:"IconsStyle"}),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { SearchBar } from "@rneui/themed";\n')),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(d,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"input#props"},"Input")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cancelButtonProps")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cancelButtonTitle")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cancelIcon")),(0,l.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clearIcon")),(0,l.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Clear Icon")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inputContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for input container")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inputStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Input Style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftIconContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Left Icon Container Style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lightTheme")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"loadingProps")),(0,l.kt)("td",{parentName:"tr",align:null},"ActivityIndicatorProps"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ActivityIndicatorProps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onCancel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(() => any)")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"(() => any)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onClear")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"platform")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"android")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"ios")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightIconContainerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Right Icon Container Style")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"round")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"searchIcon")),(0,l.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Icon for search")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showCancel")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Show cancel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showLoading")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Show loading"))))),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)(c.Z,{mdxType:"Play"}))}y.isMDXComponent=!0},61720:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"},33770:()=>{},72950:()=>{},54882:()=>{}}]);