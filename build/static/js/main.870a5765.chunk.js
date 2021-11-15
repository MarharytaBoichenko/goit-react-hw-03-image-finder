(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__gboaM"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}},15:function(e,t,a){e.exports={gallery__item:"ImageGalleryItem_gallery__item__2Ejrd",galleryItemImage:"ImageGalleryItem_galleryItemImage__3lhrt"}},16:function(e,t,a){e.exports={button:"Buton_button__1RuTa"}},21:function(e,t,a){},22:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=(a(21),a(10)),l=a(4),i=a(5),u=a(7),g=a(6),h=(a(22),a(9)),m=(a(23),a(24),a(14)),d=a.n(m),b=a(8),p=a.n(b),f=a(1),j=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.onChangeHandler=function(t){console.log(t.target.value),e.setState({query:t.target.value})},e.onFormSubmitHandler=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state),e.setState({query:""})):Object(h.b)("Enter your  query")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:p.a.searchbar,children:Object(f.jsxs)("form",{className:p.a.searchForm,onSubmit:this.onFormSubmitHandler,children:[Object(f.jsx)("button",{type:"submit",className:p.a.searchForm__button,children:Object(f.jsx)("span",{className:p.a.searchForm__buttonLabel,children:"Search"})}),Object(f.jsx)("input",{className:p.a.searchForm__input,type:"text",onChange:this.onChangeHandler,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query})]})})}}]),a}(n.Component),_=a(15),y=a.n(_);function v(e){var t=e.webformatURL,a=e.onModal,n=e.largeImageURL,r=e.tags;return Object(f.jsx)("img",{className:y.a.galleryItemImage,onClick:function(){return a(n)},src:t,alt:r})}var O=a(12),S=a.n(O);function x(e){var t=e.images,a=e.onImgClick;return Object(f.jsx)("ul",{className:S.a.gallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(f.jsx)("li",{className:S.a.gallery__item,children:Object(f.jsx)(v,{webformatURL:n,onModal:a,tags:o,largeImageURL:r})},t)}))})}var I=a(16),w=a.n(I);function k(e){var t=e.onClick;return Object(f.jsx)("button",{type:"button",onClick:t,className:w.a.button,children:"Load more"})}var L=a(13),F=a.n(L),q=document.querySelector("#modal-root");console.log(q);var U=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleBackdrop=function(t){console.log(t.target),console.log(t.currentTarget),t.target===t.currentTarget&&e.props.onClose()},e.onEscapeHandler=function(t){console.log(t.code),"Escape"===t.code&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscapeHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscapeHandler)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:F.a.overlay,onClick:this.handleBackdrop,children:Object(f.jsx)("div",{className:F.a.modal,children:Object(f.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),q)}}]),a}(n.Component),C=function(e){return e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}))};var R={fetchImages:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=23459903-45cdb2e5cfc763a2eaddc7311&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("Image ".concat(e," not found")))}))}},M=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",largeImageURL:"",showModal:!1,page:1,images:[],error:null,loading:!1},e.toggleModal=function(t){console.log("click  on list",t),e.setState((function(e){return{showModal:!e.showModal,largeImageURL:t}}))},e.handleSearchSubmit=function(t){console.log(t),e.setState({query:t.query})},e.onButtonHandler=function(t){console.log("click  on  button ");var a=e.state.query,n=e.state.page,r=R.fetchImages;e.setState({loading:!0}),r(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(C(t.hits))),page:e.page+1}})),window.scrollBy({top:window.innerHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally(e.setState({loading:!1}))},e}return Object(i.a)(a,[{key:"getSnapshotBeforeUpdate",value:function(e,t){return t.images.length<this.state.images.length?this.state.images.scrollHeight-this.state.images.scrollTop:null}},{key:"componentDidUpdate",value:function(e,t,a){var n=this,r=t.query,o=this.state.query,c=this.state.page;r!==o&&(console.log("\u0437\u0430\u043f\u0440\u043e\u0441 \u0456\u0437\u043c\u0435\u043d\u0456\u043b\u0441\u044f"),this.setState({loading:!0,page:1}),(0,R.fetchImages)(o,c).then((function(e){console.log(e),0!==e.hits.length?n.setState((function(t){return{images:Object(s.a)(C(e.hits)),page:t.page+1}})):Object(h.b)("No  images  found")})).catch((function(e){return n.setState({error:e})})).finally(this.setState({loading:!1})))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.images,n=e.query,r=e.largeImageURL,o=e.showModal;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(h.a,{}),Object(f.jsx)(j,{onSubmit:this.handleSearchSubmit}),t&&Object(f.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:"99"},children:Object(f.jsx)(d.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}),a.length>0&&Object(f.jsx)(x,{images:a,query:n,onImgClick:this.toggleModal}),o&&Object(f.jsx)(U,{largeImageURL:r,onClose:this.toggleModal}),a.length>11&&!t&&Object(f.jsx)(k,{onClick:this.onButtonHandler})]})}}]),a}(n.Component);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3O3yq",searchForm:"Searchbar_searchForm__1TIz5",searchForm__button:"Searchbar_searchForm__button__2MSMV",searchFor__button:"Searchbar_searchFor__button__1rQRp",searchForm__buttonLabel:"Searchbar_searchForm__buttonLabel__32T_J",searchForm__input:"Searchbar_searchForm__input__2NNNq"}}},[[46,1,2]]]);
//# sourceMappingURL=main.870a5765.chunk.js.map