!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-openidconnect"]=t():e["react-openidconnect"]=t()}("undefined"!=typeof self?self:this,function(){return webpackJsonpreact_openidconnect([1],[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),a=n.n(s),c=n(4),u=n.n(c),d=n(7),l=(n.n(d),function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()),p=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.signin=n.signin.bind(n),n.onUserLoaded=n.onUserLoaded.bind(n),n.state={isAuthenticated:!1},n}return r(t,e),l(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.userManager=new d.UserManager(this.props.OidcSettings),this.userManager.events.addUserLoaded(this.onUserLoaded),this.userManager.events.addUserUnloaded(this.onUserUnloaded),this.userManager.getUser().then(function(t){null!==t&&void 0!==t?e.onUserLoaded(t):e.isSuccessfullyAuthenticated()&&e.userManager.signinRedirectCallback().then(function(){window.history.replaceState({},"","/")}).catch(function(e){console.log("Error signinRedirectCallback: ",e)})})}},{key:"isSuccessfullyAuthenticated",value:function(){return void 0!==this.props.checkAuthentication?this.props.checkAuthentication():window.location.href.includes("#id_token")}},{key:"onUserLoaded",value:function(e){this.setState({isAuthenticated:!0}),void 0!==this.props.userLoaded&&this.props.userLoaded(e)}},{key:"onUserUnloaded",value:function(){this.setState({isAuthenticated:!1}),void 0!==this.props.userUnLoaded&&this.props.userUnLoaded()}},{key:"signin",value:function(){this.userManager.signinRedirect().then(function(){console.log("signinRedirect ok")}).catch(function(e){console.log("signinRedirect error:",e)})}},{key:"render",value:function(){return this.state.isAuthenticated?this.props.children:a.a.createElement("div",{onClick:this.signin},this.props.renderNotAuthenticated())}}]),t}(s.Component);p.defaultProps={OidcSettings:{},userUnLoaded:null,userLoaded:null,renderNotAuthenticated:null,checkAuthentication:null},p.propTypes={OidcSettings:u.a.shape({authority:u.a.string.isRequired,client_id:u.a.string.isRequired,redirect_uri:u.a.string.isRequired,post_logout_redirect_uri:u.a.string.isRequired,response_type:u.a.string.isRequired,scope:u.a.string.isRequired}).isRequired,userLoaded:u.a.func,userUnLoaded:u.a.func,renderNotAuthenticated:u.a.func.isRequired,checkAuthentication:u.a.func},t.default=p}],[0])});