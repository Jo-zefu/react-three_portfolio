import{g as b}from"./@react-three-Bs486YIj.js";var i,m;function v(){if(m)return i;m=1;function l(a,r,s){var e,n,u,f,o;r==null&&(r=100);function p(){var t=Date.now()-f;t<r&&t>=0?e=setTimeout(p,r-t):(e=null,s||(o=a.apply(u,n),u=n=null))}var c=function(){u=this,n=arguments,f=Date.now();var t=s&&!e;return e||(e=setTimeout(p,r)),t&&(o=a.apply(u,n),u=n=null),o};return c.clear=function(){e&&(clearTimeout(e),e=null)},c.flush=function(){e&&(o=a.apply(u,n),u=n=null,clearTimeout(e),e=null)},c}return l.debounce=l,i=l,i}var d=v();const g=b(d);export{g as c};
