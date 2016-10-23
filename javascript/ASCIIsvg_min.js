/* ASCIIsvg.js
Ver 1.2.7 Oct 13, 2005 (c) Peter Jipsen http://www.chapman.edu/~jipsen
Modified for IMathas by David Lippman */
!function(){function chop(t,e){return null==e&&(e=0),Math.floor(t*Math.pow(10,e))/Math.pow(10,e)}function ran(t,e,i){return null==i&&(i=0),chop((e+Math.pow(10,-i)-t)*Math.random()+t,i)}function myCreateElementXHTML(t){return isOldIE?document.createElement(t):document.createElementNS("http://www.w3.org/1999/xhtml",t)}function isSVGavailable(){if(null!=(ver=navigator.userAgent.toLowerCase().match(/webkit\/(\d+)/))&&ver[1]>531)return null;if(navigator.product&&"Gecko"==navigator.product){var rv=navigator.userAgent.toLowerCase().match(/rv:\s*([\d\.]+)/);return null!=rv&&(rv=rv[1].split("."),rv.length<3&&(rv[2]=0),rv.length<2&&(rv[1]=0)),null!=rv&&1e4*rv[0]+100*rv[1]+1*rv[2]>=10800?null:1}if("Microsoft"!=navigator.appName.slice(0,9))return 1;if(version=parseFloat(navigator.appVersion.split("MSIE")[1]),version>=9)return null;try{var oSVG=eval("new ActiveXObject('Adobe.SVGCtl.3');");return null}catch(e){return 1}}function less(t,e){return e>t}function setText(t,e){var i=document.getElementById(e);null!=i&&(0!=i.childNodes.length?i.childNodes[0].nodeValue=t:i.appendChild(document.createTextNode(t)))}function myCreateElementSVG(t){return isOldIE?doc.createElement(t):doc.createElementNS("http://www.w3.org/2000/svg",t)}function getX(){return(doc.getElementById("pointerpos").getAttribute("cx")-origin[0])/xunitlength}function getY(){return(height-origin[1]-doc.getElementById("pointerpos").getAttribute("cy"))/yunitlength}function mousemove_listener(t){null!=svgpicture.getAttribute("xbase")&&(pointerpos.cx.baseVal.value=t.clientX-svgpicture.getAttribute("xbase")),null!=svgpicture.getAttribute("ybase")&&(pointerpos.cy.baseVal.value=t.clientY-svgpicture.getAttribute("ybase"))}function top_listener(t){svgpicture.setAttribute("ybase",t.clientY)}function bottom_listener(t){svgpicture.setAttribute("ybase",t.clientY-height+1)}function left_listener(t){svgpicture.setAttribute("xbase",t.clientX)}function right_listener(t){svgpicture.setAttribute("xbase",t.clientX-width+1)}function switchTo(t){picture=document.getElementById(t),width=picture.getAttribute("width")-0,height=picture.getAttribute("height")-0,strokewidth="1",stroke="black",fill="none",marker="none","EMBED"!=picture.nodeName&&"embed"!=picture.nodeName||!isOldIE?(picture.setAttribute("onmousemove","updateCoords"+(t.slice(t.length-1)-1)+"()"),svgpicture=picture,doc=document):(svgpicture=picture.getSVGDocument().getElementById("root"),doc=picture.getSVGDocument()),xunitlength=svgpicture.getAttribute("xunitlength")-0,yunitlength=svgpicture.getAttribute("yunitlength")-0,xmin=svgpicture.getAttribute("xmin")-0,xmax=svgpicture.getAttribute("xmax")-0,ymin=svgpicture.getAttribute("ymin")-0,ymax=svgpicture.getAttribute("ymax")-0,origin=[svgpicture.getAttribute("ox")-0,svgpicture.getAttribute("oy")-0]}function updatePicture(obj){var src=document.getElementById("string"==typeof obj?obj:"picture"+(obj+1)+"input").value;xmin=null,xmax=null,ymin=null,ymax=null,xscl=null,xgrid=null,yscl=null,ygrid=null,initialized=!1,switchTo("string"==typeof obj?obj.slice(0,8):"picture"+(obj+1)),src=src.replace(/plot\(\x20*([^\"f\[][^\n\r]+?)\,/g,'plot("$1",'),src=src.replace(/plot\(\x20*([^\"f\[][^\n\r]+)\)/g,'plot("$1")'),src=src.replace(/([0-9])([a-zA-Z])/g,"$1*$2"),src=src.replace(/\)([\(0-9a-zA-Z])/g,")*$1");try{with(Math)eval(src)}catch(err){alert(err+"\n"+src)}}function showHideCode(t){for(var e=t.nextSibling;null!=e&&"BUTTON"!=e.nodeName&&"button"!=e.nodeName;)e=e.nextSibling;for("none"==e.style.display?e.style.display="":e.style.display="none";null!=e&&"TEXTAREA"!=e.nodeName&&"textarea"!=e.nodeName;)e=e.previousSibling;"none"==e.style.display?e.style.display="":e.style.display="none"}function hideCode(){}function showcode(){}function nobutton(){}function setBorder(t,e,i,n){border=null==n?new Array(t,t,t,t):new Array(t,e,i,n)}function initPicture(x_min,x_max,y_min,y_max){if(null!=x_min&&(xmin=x_min),null!=x_max&&(xmax=x_max),null!=y_min&&(ymin=y_min),null!=y_max&&(ymax=y_max),null==xmin&&(xmin=-5),null==xmax&&(xmax=5),"number"!=typeof xmin||"number"!=typeof xmax||xmin>=xmax?alert("Picture requires at least two numbers: xmin < xmax"):null!=y_max&&("number"!=typeof y_min||"number"!=typeof y_max||y_min>=y_max)?alert("initPicture(xmin,xmax,ymin,ymax) requires numbers ymin < ymax"):(width=picture.getAttribute("width"),null!=width&&""!=width||(width=defaultwidth),height=picture.getAttribute("height"),null!=height&&""!=height||(height=defaultheight),xunitlength=(width-border[0]-border[2])/(xmax-xmin),yunitlength=xunitlength,null==ymin?(origin=[-xmin*xunitlength+border[0],height/2],ymin=-(height-border[1]-border[3])/(2*yunitlength),ymax=-ymin):(null!=ymax?yunitlength=(height-border[1]-border[3])/(ymax-ymin):ymax=(height-border[1]-border[3])/yunitlength+ymin,origin=[-xmin*xunitlength+border[0],-ymin*yunitlength+border[1]]),winxmin=Math.max(border[0]-5,0),winxmax=Math.min(width-border[2]+5,width),winymin=Math.max(border[3]-5,0),winymax=Math.min(height-border[1]+5,height)),initialized)for(;svgpicture.lastChild;)svgpicture.removeChild(svgpicture.lastChild);else{if(strokewidth="1",strokedasharray=null,stroke="black",fill="none",fontstyle="italic",fontfamily="times",fontsize="16",fontweight="normal",fontstroke="black",fontfill="black",fontbackground="none",marker="none",initialized=!0,isOldIE){for(svgpicture=picture.getSVGDocument().getElementById("root");svgpicture.childNodes.length()>5;)svgpicture.removeChild(svgpicture.lastChild);svgpicture.setAttribute("width",width),svgpicture.setAttribute("height",height),doc=picture.getSVGDocument()}else{var qnode=document.createElementNS("http://www.w3.org/2000/svg","svg"),picid=picture.getAttribute("id");picture.setAttribute("id",picid+"-embed"),qnode.setAttribute("id",picid),qnode.setAttribute("style","display:inline; "+picture.getAttribute("style")),qnode.setAttribute("width",picture.getAttribute("width")),qnode.setAttribute("height",picture.getAttribute("height")),qnode.setAttribute("alt",picture.getAttribute("alt")),null!=picture.parentNode?(picture.parentNode.insertBefore(qnode,picture),picture.style.display="none",picture.removeAttribute("sscr"),picture.removeAttribute("script")):svgpicture.parentNode.replaceChild(qnode,svgpicture),svgpicture=qnode,doc=document,pointerpos=doc.getElementById("pointerpos"),null==pointerpos&&(pointerpos=myCreateElementSVG("circle"),pointerpos.setAttribute("id","pointerpos"),pointerpos.setAttribute("cx",0),pointerpos.setAttribute("cy",0),pointerpos.setAttribute("r",.5),pointerpos.setAttribute("fill","red"),svgpicture.appendChild(pointerpos))}if(!isOldIE&&null!=picture.getAttribute("onmousemove")){svgpicture.addEventListener("mousemove",mousemove_listener,!0);var st=picture.getAttribute("onmousemove");svgpicture.addEventListener("mousemove",eval(st.slice(0,st.indexOf("("))),!0),node=myCreateElementSVG("polyline"),node.setAttribute("points","0,0 "+width+",0"),node.setAttribute("style","stroke:white; stroke-width:3"),node.addEventListener("mousemove",top_listener,!0),svgpicture.appendChild(node),node=myCreateElementSVG("polyline"),node.setAttribute("points","0,"+height+" "+width+","+height),node.setAttribute("style","stroke:white; stroke-width:3"),node.addEventListener("mousemove",bottom_listener,!0),svgpicture.appendChild(node),node=myCreateElementSVG("polyline"),node.setAttribute("points","0,0 0,"+height),node.setAttribute("style","stroke:white; stroke-width:3"),node.addEventListener("mousemove",left_listener,!0),svgpicture.appendChild(node),node=myCreateElementSVG("polyline"),node.setAttribute("points",width-1+",0 "+(width-1)+","+height),node.setAttribute("style","stroke:white; stroke-width:3"),node.addEventListener("mousemove",right_listener,!0),svgpicture.appendChild(node)}border=defaultborder}svgpicture.setAttribute("height",height),svgpicture.style.height=height+"px",svgpicture.setAttribute("width",width),svgpicture.style.width=width+"px",svgpicture.setAttribute("xunitlength",xunitlength),svgpicture.setAttribute("yunitlength",yunitlength),svgpicture.setAttribute("xmin",xmin),svgpicture.setAttribute("xmax",xmax),svgpicture.setAttribute("ymin",ymin),svgpicture.setAttribute("ymax",ymax),svgpicture.setAttribute("ox",origin[0]),svgpicture.setAttribute("oy",origin[1]);var node=myCreateElementSVG("rect");node.setAttribute("x","0"),node.setAttribute("y","0"),node.setAttribute("width",width),node.setAttribute("height",height),node.setAttribute("style","stroke-width:1;fill:white"),svgpicture.appendChild(node)}function line(t,e,i){var n;null!=i&&(n=doc.getElementById(i)),null==n&&(n=myCreateElementSVG("path"),n.setAttribute("id",i),svgpicture.appendChild(n)),n.setAttribute("d","M"+(t[0]*xunitlength+origin[0])+","+(height-t[1]*yunitlength-origin[1])+" "+(e[0]*xunitlength+origin[0])+","+(height-e[1]*yunitlength-origin[1])),n.setAttribute("stroke-width",strokewidth),null!=strokedasharray&&n.setAttribute("stroke-dasharray",strokedasharray),n.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(n.setAttribute("fill",fill.substring(5)),n.setAttribute("fill-opacity",fillopacity)):n.setAttribute("fill",fill),"dot"==marker||"arrowdot"==marker?(ASdot(t,4,markerstroke,markerfill),"arrowdot"==marker&&arrowhead(t,e),ASdot(e,4,markerstroke,markerfill)):"arrow"==marker&&arrowhead(t,e)}function path(t,e,i){null==i&&(i="");var n,r,o;if(null!=e&&(n=doc.getElementById(e)),null==n&&(n=myCreateElementSVG("path"),n.setAttribute("id",e),svgpicture.appendChild(n)),"string"==typeof t)r=t;else for(r="M",r+=t[0][0]*xunitlength+origin[0]+","+(height-t[0][1]*yunitlength-origin[1])+" "+i,o=1;o<t.length;o++)r+=t[o][0]*xunitlength+origin[0]+","+(height-t[o][1]*yunitlength-origin[1])+" ";if(n.setAttribute("d",r),n.setAttribute("stroke-width",strokewidth),null!=strokedasharray&&n.setAttribute("stroke-dasharray",strokedasharray),n.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(n.setAttribute("fill",fill.substring(5)),n.setAttribute("fill-opacity",fillopacity)):n.setAttribute("fill",fill),"dot"==marker||"arrowdot"==marker)for(o=0;o<t.length;o++)("C"!=i&&"T"!=i||1!=o&&2!=o)&&ASdot(t[o],4,markerstroke,markerfill)}function curve(t,e){path(t,e,"T")}function circle(t,e,i){var n;null!=i&&(n=doc.getElementById(i)),null==n&&(n=myCreateElementSVG("circle"),n.setAttribute("id",i),svgpicture.appendChild(n)),n.setAttribute("cx",t[0]*xunitlength+origin[0]),n.setAttribute("cy",height-t[1]*yunitlength-origin[1]),n.setAttribute("r",e*xunitlength),n.setAttribute("stroke-width",strokewidth),n.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(n.setAttribute("fill",fill.substring(5)),n.setAttribute("fill-opacity",fillopacity)):n.setAttribute("fill",fill)}function loop(t,e,i){null==e&&(e=[1,0]),path([t,[t[0]+e[0],t[1]+e[1]],[t[0]-e[1],t[1]+e[0]],t],i,"C"),"arrow"!=marker&&"arrowdot"!=marker||arrowhead([t[0]+Math.cos(1.4)*e[0]-Math.sin(1.4)*e[1],t[1]+Math.sin(1.4)*e[0]+Math.cos(1.4)*e[1]],t)}function sector(t,e,i,n,r){var o;null!=r&&(o=doc.getElementById(r)),null==o&&(o=myCreateElementSVG("path"),o.setAttribute("id",r),svgpicture.appendChild(o));var l=0;Math.abs(n-i)>3.142&&(l=1);var s=0;i>n&&(s=1);var u=[t[0]+e*Math.cos(i),t[1]+e*Math.sin(i)],a=[t[0]+e*Math.cos(n),t[1]+e*Math.sin(n)],d="M"+(t[0]*xunitlength+origin[0])+","+(height-t[1]*yunitlength-origin[1])+" L"+(u[0]*xunitlength+origin[0])+","+(height-u[1]*yunitlength-origin[1])+" A"+e*xunitlength+","+e*yunitlength+" 0 "+l+","+s+" "+(a[0]*xunitlength+origin[0])+","+(height-a[1]*yunitlength-origin[1])+" z";o.setAttribute("d",d),o.setAttribute("stroke-width",strokewidth),o.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(o.setAttribute("fill",fill.substring(5)),o.setAttribute("fill-opacity",fillopacity)):o.setAttribute("fill",fill)}function arc(t,e,i,n){var r,o;null!=n&&(r=doc.getElementById(n)),null==i&&(o=[e[0]-t[0],e[1]-t[1]],i=Math.sqrt(o[0]*o[0]+o[1]*o[1])),null==r&&(r=myCreateElementSVG("path"),r.setAttribute("id",n),svgpicture.appendChild(r)),r.setAttribute("d","M"+(t[0]*xunitlength+origin[0])+","+(height-t[1]*yunitlength-origin[1])+" A"+i*xunitlength+","+i*yunitlength+" 0 0,0 "+(e[0]*xunitlength+origin[0])+","+(height-e[1]*yunitlength-origin[1])),r.setAttribute("stroke-width",strokewidth),r.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(r.setAttribute("fill",fill.substring(5)),r.setAttribute("fill-opacity",fillopacity)):r.setAttribute("fill",fill),"arrow"==marker||"arrowdot"==marker?(u=[(e[1]-t[1])/4,(t[0]-e[0])/4],o=[(e[0]-t[0])/2,(e[1]-t[1])/2],o=[t[0]+o[0]+u[0],t[1]+o[1]+u[1]]):o=[t[0],t[1]],"dot"==marker||"arrowdot"==marker?(ASdot(t,4,markerstroke,markerfill),"arrowdot"==marker&&arrowhead(o,e),ASdot(e,4,markerstroke,markerfill)):"arrow"==marker&&arrowhead(o,e)}function ellipse(t,e,i,n){var r;null!=n&&(r=doc.getElementById(n)),null==r&&(r=myCreateElementSVG("ellipse"),r.setAttribute("id",n),svgpicture.appendChild(r)),r.setAttribute("cx",t[0]*xunitlength+origin[0]),r.setAttribute("cy",height-t[1]*yunitlength-origin[1]),r.setAttribute("rx",e*xunitlength),r.setAttribute("ry",i*yunitlength),r.setAttribute("stroke-width",strokewidth),r.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(r.setAttribute("fill",fill.substring(5)),r.setAttribute("fill-opacity",fillopacity)):r.setAttribute("fill",fill)}function rect(t,e,i,n,r){var o;null!=i&&(o=doc.getElementById(i)),null==o&&(o=myCreateElementSVG("rect"),o.setAttribute("id",i),svgpicture.appendChild(o)),o.setAttribute("x",Math.min(t[0],e[0])*xunitlength+origin[0]),o.setAttribute("y",height-Math.max(e[1],t[1])*yunitlength-origin[1]),o.setAttribute("width",Math.abs(e[0]-t[0])*xunitlength),o.setAttribute("height",Math.abs(e[1]-t[1])*yunitlength),null!=n&&o.setAttribute("rx",n*xunitlength),null!=r&&o.setAttribute("ry",r*yunitlength),o.setAttribute("stroke-width",strokewidth),o.setAttribute("stroke",stroke),"trans"==fill.substr(0,5)?(o.setAttribute("fill",fill.substring(5)),o.setAttribute("fill-opacity",fillopacity)):o.setAttribute("fill",fill)}function text(t,e,i,n){t[0]=t[0]*xunitlength+origin[0],t[1]=t[1]*yunitlength+origin[1],textabs(t,e,i,n)}function textabs(t,e,i,n,r,o){n=null==n?0:(360-n)%360;var l="middle",s=0,u=0;if(270==n){var u=0,s=fontsize/3;null!=i&&(i.match(/left/)&&(s=-fontsize/2-2),i.match(/right/)&&(s=1*fontsize+2),i.match(/above/)&&(l="start",u=-fontsize/2-2),i.match(/below/)&&(l="end",u=fontsize/2+2))}if(90==n){var u=0,s=-fontsize/3;null!=i&&(i.match(/left/)&&(s=-fontsize-2),i.match(/right/)&&(s=fontsize/2+2),i.match(/above/)&&(l="end",u=-fontsize/2-2),i.match(/below/)&&(l="start",u=fontsize/2+2))}if(0==n){var s=0,u=fontsize/3;null!=i&&(i.match(/above/)&&(u=-fontsize/3-2),i.match(/below/)&&(u=1*fontsize+2),i.match(/right/)&&(l="start",s=fontsize/3+2),i.match(/left/)&&(l="end",s=-fontsize/3-2))}var a;if(null!=r&&(a=doc.getElementById(r)),null==a&&(a=myCreateElementSVG("text"),a.setAttribute("id",r),svgpicture.appendChild(a),a.appendChild(doc.createTextNode(e))),a.lastChild.nodeValue=e,a.setAttribute("x",t[0]+s),a.setAttribute("y",height-t[1]+u),0!=n&&a.setAttribute("transform","rotate("+n+" "+(t[0]+s)+" "+(height-t[1]+u)+")"),a.setAttribute("font-style",null!=o?o:fontstyle),a.setAttribute("font-family",fontfamily),a.setAttribute("font-size",fontsize),a.setAttribute("font-weight",fontweight),a.setAttribute("text-anchor",l),"none"!=fontfill&&a.setAttribute("fill",fontfill),a.setAttribute("stroke-width","0px"),"none"!=fontbackground)try{var d=a.getBBox(),h=myCreateElementSVG("rect");h.setAttribute("fill",fontbackground),h.setAttribute("stroke-width","0px"),h.setAttribute("x",d.x-2),h.setAttribute("y",d.y-1),h.setAttribute("width",d.width+4),h.setAttribute("height",d.height+2),0!=n&&h.setAttribute("transform","rotate("+n+" "+(t[0]+s)+" "+(height-t[1]+u)+")"),svgpicture.insertBefore(h,a)}catch(c){}return t}function ASdot(t,e,i,n){null==i&&(i=stroke),null==n&&(n=fill);var r=myCreateElementSVG("circle");r.setAttribute("cx",t[0]*xunitlength+origin[0]),r.setAttribute("cy",height-t[1]*yunitlength-origin[1]),r.setAttribute("r",e),r.setAttribute("stroke-width",strokewidth),r.setAttribute("stroke",i),r.setAttribute("fill",n),svgpicture.appendChild(r)}function dot(t,e,i,n,r){var o,l=t[0]*xunitlength+origin[0],s=height-t[1]*yunitlength-origin[1];null!=r&&(o=doc.getElementById(r)),"+"==e||"-"==e||"|"==e?(null==o&&(o=myCreateElementSVG("path"),o.setAttribute("id",r),svgpicture.appendChild(o)),"+"==e?(o.setAttribute("d"," M "+(l-ticklength)+" "+s+" L "+(l+ticklength)+" "+s+" M "+l+" "+(s-ticklength)+" L "+l+" "+(s+ticklength)),o.setAttribute("stroke-width",.5),o.setAttribute("stroke",axesstroke)):("-"==e?o.setAttribute("d"," M "+(l-ticklength)+" "+s+" L "+(l+ticklength)+" "+s):o.setAttribute("d"," M "+l+" "+(s-ticklength)+" L "+l+" "+(s+ticklength)),o.setAttribute("stroke-width",strokewidth),o.setAttribute("stroke",stroke))):(null==o&&(o=myCreateElementSVG("circle"),o.setAttribute("id",r),svgpicture.appendChild(o)),o.setAttribute("cx",l),o.setAttribute("cy",s),o.setAttribute("r",dotradius),o.setAttribute("stroke-width",strokewidth),o.setAttribute("stroke",stroke),o.setAttribute("fill","open"==e?"white":stroke)),null!=i&&text(t,i,null==n?"below":n,null==r?r:r+"label")}function arrowhead(t,e){var i,n=[t[0]*xunitlength+origin[0],height-t[1]*yunitlength-origin[1]],r=[e[0]*xunitlength+origin[0],height-e[1]*yunitlength-origin[1]],o=[r[0]-n[0],r[1]-n[1]],l=Math.sqrt(o[0]*o[0]+o[1]*o[1]);if(l>1e-8){o=[o[0]/l,o[1]/l],i=[-o[1],o[0]];var s=myCreateElementSVG("path");s.setAttribute("d","M "+(r[0]-15*o[0]-4*i[0])+" "+(r[1]-15*o[1]-4*i[1])+" L "+(r[0]-3*o[0])+" "+(r[1]-3*o[1])+" L "+(r[0]-15*o[0]+4*i[0])+" "+(r[1]-15*o[1]+4*i[1])+" z"),s.setAttribute("stroke-width",markerstrokewidth),s.setAttribute("stroke",stroke),s.setAttribute("fill",stroke),svgpicture.appendChild(s)}}function chopZ(t){var e=t.indexOf(".");if(-1==e)return t;for(var i=t.length-1;i>e&&"0"==t.charAt(i);i--);return i==e&&i--,t.slice(0,i+1)}function grid(t,e){axes(t,e,null,t,e)}function noaxes(){initialized||initPicture()}function axes(dx,dy,labels,gdx,gdy,dox,doy,smallticks){var x,y,ldx,ldy,lx,ly,lxp,lyp,pnode,st;initialized||initPicture(),"string"==typeof dx&&(labels=dx,dx=null),"string"==typeof dy&&(gdx=dy,dy=null),null!=xscl&&(dx=xscl,gdx=xscl,labels=dx),null!=yscl&&(dy=yscl,gdy=yscl),null!=xtick&&(dx=xtick),null!=ytick&&(dy=ytick),null==dox&&(dox=!0),null==doy&&(doy=!0);var fqonlyx=!1,fqonlyy=!1;if("fq"==dox&&(fqonlyx=!0),"fq"==doy&&(fqonlyy=!0),dox="off"!=dox&&0!=dox,doy="off"!=doy&&0!=doy,null!=gdx&&gdx>0&&(xmax-xmin)/gdx>width&&(gdx=xmax-xmin),null!=gdy&&gdy>0&&(ymax-ymin)/gdy>height&&(gdy=ymax-ymin),(xmax-xmin)/dx>width&&(dx=xmax-xmin),(ymax-ymin)/dy>height&&(dy=ymax-ymin),dx=null==dx?xunitlength:dx*xunitlength,dy=null==dy?dx:dy*yunitlength,fontsize=Math.floor(Math.min(Math.abs(dx)/1.5,Math.abs(dy)/1.5,16)),ticklength=fontsize/4,null!=xgrid&&(gdx=xgrid),null!=ygrid&&(gdy=ygrid),null!=gdx&&gdx>0){if(null!=smallticks&&1==smallticks)var gridymin=origin[1]+.7*ticklength,gridymax=origin[1]-.7*ticklength,gridxmin=origin[0]-.7*ticklength,gridxmax=origin[0]+.7*ticklength;else var gridymin=winymin,gridymax=winymax,gridxmin=winxmin,gridxmax=winxmax;if(gdx="string"==typeof gdx?dx:gdx*xunitlength,gdy=null==gdy?dy:gdy*yunitlength,pnode=myCreateElementSVG("path"),st="",dox&&gdx>0){for(x=origin[0];x<=winxmax;x+=gdx)x>=winxmin&&(st+=" M"+x+","+gridymin+" "+x+","+(fqonlyy?height-origin[1]:gridymax));if(!fqonlyx)for(x=origin[0]-gdx;x>=winxmin;x-=gdx)x<=winxmax&&(st+=" M"+x+","+gridymin+" "+x+","+(fqonlyy?height-origin[1]:gridymax))}if(doy&&gdy>0){if(!fqonlyy)for(y=height-origin[1];y<=winymax;y+=gdy)y>=winymin&&(st+=" M"+(fqonlyx?origin[0]:gridxmin)+","+y+" "+gridxmax+","+y);for(y=height-origin[1]-gdy;y>=winymin;y-=gdy)y<=winymax&&(st+=" M"+(fqonlyx?origin[0]:gridxmin)+","+y+" "+gridxmax+","+y)}pnode.setAttribute("d",st),pnode.setAttribute("stroke-width",.5),pnode.setAttribute("stroke",gridstroke),pnode.setAttribute("fill",fill),svgpicture.appendChild(pnode)}if(pnode=myCreateElementSVG("path"),dox&&(st="M"+(fqonlyx?origin[0]:winxmin)+","+(height-origin[1])+" "+winxmax+","+(height-origin[1])),doy&&(st+=" M"+origin[0]+","+winymin+" "+origin[0]+","+(fqonlyy?height-origin[1]:winymax)),dox&&dx>0){for(x=origin[0];x<winxmax;x+=dx)x>=winymin&&(st+=" M"+x+","+(height-origin[1]+ticklength)+" "+x+","+(height-origin[1]-ticklength));if(!fqonlyx)for(x=origin[0]-dx;x>winxmin;x-=dx)x<=winxmax&&(st+=" M"+x+","+(height-origin[1]+ticklength)+" "+x+","+(height-origin[1]-ticklength))}if(doy&&dy>0){if(!fqonlyy)for(y=height-origin[1];y<winymax;y+=dy)y>=winymin&&(st+=" M"+(origin[0]+ticklength)+","+y+" "+(origin[0]-ticklength)+","+y);for(y=height-origin[1]-dy;y>winymin;y-=dy)y<=winymax&&(st+=" M"+(origin[0]+ticklength)+","+y+" "+(origin[0]-ticklength)+","+y)}if(null!=labels)with(Math){ldx=dx/xunitlength,ldy=dy/yunitlength,lx=xmin>0||0>xmax?xmin:0,ly=ymin>0||0>ymax?ymin:0,lxp=0==ly?"below":"above",lyp=0==lx?"left":"right";var ddx=floor(1.1-log(ldx)/log(10))+1,ddy=floor(1.1-log(ldy)/log(10))+1;if(0>ddy&&(ddy=0),0>ddx&&(ddx=0),dox&&dx>0){for(x=doy?ldx:0;xmax>=x;x+=ldx)x>=xmin&&text([x,ly],chopZ(x.toFixed(ddx)),lxp);if(!fqonlyx)for(x=-ldx;x>=xmin;x-=ldx)xmax>=x&&text([x,ly],chopZ(x.toFixed(ddx)),lxp)}if(doy&&dy>0){for(y=dox?ldy:0;ymax>=y;y+=ldy)y>=ymin&&text([lx,y],chopZ(y.toFixed(ddy)),lyp);if(!fqonlyy)for(y=-ldy;y>=ymin;y-=ldy)ymax>=y&&text([lx,y],chopZ(y.toFixed(ddy)),lyp)}}pnode.setAttribute("d",st),pnode.setAttribute("stroke-width",.5),pnode.setAttribute("stroke",axesstroke),pnode.setAttribute("fill",fill),svgpicture.appendChild(pnode)}function slopefield(fun,dx,dy){var g=fun;"string"==typeof fun&&eval("g = function(x,y){ with(Math) return "+mathjs(fun)+" }");var gxy,x,y,u,v,dz;null==dx&&(dx=1),null==dy&&(dy=1),dz=Math.sqrt(dx*dx+dy*dy)/6;var x_min=Math.ceil(xmin/dx),y_min=Math.ceil(ymin/dy);for(x=x_min;xmax>=x;x+=dx)for(y=y_min;ymax>=y;y+=dy)gxy=g(x,y),isNaN(gxy)||("Infinity"==Math.abs(gxy)?(u=0,v=dz):(u=dz/Math.sqrt(1+gxy*gxy),v=gxy*u),line([x-u,y-v],[x+u,y+v]))}function drawPictures(){drawPics()}function parseShortScript(sscript,gw,gh){null==sscript&&(sscript=picture.sscr,initialized=!1);var sa=sscript.split(",");if(gw&&gh&&(sa[9]=gw,sa[10]=gh,sscript=sa.join(","),picture.setAttribute("sscr",sscript)),picture.setAttribute("width",sa[9]),picture.setAttribute("height",sa[10]),picture.style.width=sa[9]+"px",picture.style.height=sa[10]+"px",sa.length>10){commands="setBorder(5);",commands+="width="+sa[9]+"; height="+sa[10]+";",commands+="initPicture("+sa[0]+","+sa[1]+","+sa[2]+","+sa[3]+");",commands+="axes("+sa[4]+","+sa[5]+","+sa[6]+","+sa[7]+","+sa[8]+");";for(var inx=11,varlet="",eqnlist="Graphs on the window x="+sa[0]+" to "+sa[1]+" and y="+sa[2]+" to "+sa[3]+": ";sa.length>inx+9;)commands+='stroke="'+sa[inx+7]+'";',eqnlist+=sa[inx+7]+" ",commands+='strokewidth="'+sa[inx+8]+'";',""!=sa[inx+9]&&(commands+='strokedasharray="'+sa[inx+9].replace(/\s+/g,",")+'";',"2"==sa[inx+9]?eqnlist+="dotted ":"5"==sa[inx+9]?eqnlist+="dashed ":"5 2"==sa[inx+9]?eqnlist+="tight dashed ":"7 3 2 3"==sa[inx+9]&&(eqnlist+="dash-dot ")),"slope"==sa[inx]?(eqnlist+="slopefield where dy/dx="+sa[inx+1]+". ",commands+='slopefield("'+sa[inx+1]+'",'+sa[inx+2]+","+sa[inx+2]+");"):"label"==sa[inx]?(eqnlist+="label with text "+sa[inx+1]+" at the point ("+sa[inx+5]+","+sa[inx+6]+"). ",commands+="text(["+sa[inx+5]+","+sa[inx+6]+'],"'+sa[inx+1]+'");'):("func"==sa[inx]?(eqnlist+="graph of y="+sa[inx+1],eqn='"'+sa[inx+1]+'"',varlet="x"):"polar"==sa[inx]?(eqnlist+="polar graph of r="+sa[inx+1],eqn='["cos(t)*('+sa[inx+1]+')","sin(t)*('+sa[inx+1]+')"]',varlet="r"):"param"==sa[inx]&&(eqnlist+="parametric graph of x(t)="+sa[inx+1]+", y(t)="+sa[inx+2],eqn='["'+sa[inx+1]+'","'+sa[inx+2]+'"]',varlet="t"),"number"==typeof eval(sa[inx+5])?(commands+="plot("+eqn+","+sa[inx+5]+","+sa[inx+6]+",null,null,"+sa[inx+3]+","+sa[inx+4]+");",eqnlist+=" from "+varlet+"="+sa[inx+5]+" ",1==sa[inx+3]?eqnlist+="with an arrow ":2==sa[inx+3]?eqnlist+="with an open dot ":3==sa[inx+3]&&(eqnlist+="with a closed dot "),eqnlist+="to "+varlet+"="+sa[inx+6]+" ",1==sa[inx+4]?eqnlist+="with an arrow ":2==sa[inx+4]?eqnlist+="with an open dot ":3==sa[inx+4]&&(eqnlist+="with a closed dot ")):commands+="plot("+eqn+",null,null,null,null,"+sa[inx+3]+","+sa[inx+4]+");",eqnlist+=". "),inx+=10;picture.setAttribute("alt",eqnlist);try{eval(commands)}catch(e){setTimeout(function(){parseShortScript(sscript,gw,gh)},100)}return commands}}function drawPics(){var index,nd;if(pictures=document.getElementsByTagName("embed"),!ASnoSVG&&isOldIE)try{for(var i=0;i<pictures.length;i++)if((""!=pictures[i].getAttribute("sscr")||""!=pictures[i].getAttribute("script"))&&null==pictures[i].getSVGDocument().getElementById("root"))return void setTimeout(drawPics,100)}catch(e){return void setTimeout(drawPics,100)}var len=pictures.length,sscr,src;for(index=len-1;index>=0;index--)if(picture=pictures[index],ASnoSVG)sscr=picture.hasAttribute("data-sscr")?picture.getAttribute("data-sscr"):picture.getAttribute("sscr"),null!=sscr&&""!=sscr&&(n=document.createElement("img"),n.setAttribute("style",picture.getAttribute("style")),n.setAttribute("src",AScgiloc+"?sscr="+encodeURIComponent(sscr)),pn=picture.parentNode,pn.replaceChild(n,picture));else if(initialized=!1,sscr=picture.hasAttribute("data-sscr")?picture.getAttribute("data-sscr"):picture.getAttribute("sscr"),null!=sscr&&""!=sscr)try{parseShortScript(sscr)}catch(e){}else if(src=picture.hasAttribute("data-script")?picture.getAttribute("data-script"):picture.getAttribute("script"),null!=src&&""!=src)try{with(Math)eval(src)}catch(err){alert(err+"\n"+src)}}function plot(fun,x_min,x_max,points,id,min_type,max_type){var pth=[],f=function(t){return t},g=fun,name=null;"string"==typeof fun?eval("g = function(x){ with(Math) return "+mathjs(fun)+" }"):"object"==typeof fun&&(eval("f = function(t){ with(Math) return "+mathjs(fun[0])+" }"),eval("g = function(t){ with(Math) return "+mathjs(fun[1])+" }")),"string"==typeof x_min?(name=x_min,x_min=xmin):name=id;var min=null==x_min?xmin:x_min,max=null==x_max?xmax:x_max;if(min>=max)return null;var inc=max-min-1e-6*(max-min);inc=null==points?inc/200:inc/points;for(var gt,t=min;max>=t;t+=inc)gt=g(t),isNaN(gt)||"Infinity"==Math.abs(gt)||(pth.length>0&&Math.abs(gt-pth[pth.length-1][1])>ymax-ymin?(pth.length>1&&path(pth,name),pth.length=0):pth[pth.length]=[f(t),gt]);return pth.length>1&&path(pth,name),1==min_type?arrowhead(pth[1],pth[0]):2==min_type?dot(pth[0],"open"):3==min_type&&dot(pth[0],"closed"),1==max_type?arrowhead(pth[pth.length-2],pth[pth.length-1]):2==max_type?dot(pth[pth.length-1],"open"):3==max_type&&dot(pth[pth.length-1],"closed"),p}function updateCoords(t){switchTo("picture"+(t+1));var e=getX(),i=getY();(xmax-e)*xunitlength>6*fontsize||(i-ymin)*yunitlength>2*fontsize?text([xmax,ymin],"("+e.toFixed(2)+", "+i.toFixed(2)+")","aboveleft","AScoord"+t,""):text([xmax,ymin]," ","aboveleft","AScoord"+t,"")}function updateCoords0(){updateCoords(0)}function updateCoords1(){updateCoords(1)}function updateCoords2(){updateCoords(2)}function updateCoords3(){updateCoords(3)}function updateCoords4(){updateCoords(4)}function updateCoords5(){updateCoords(5)}function updateCoords6(){updateCoords(6)}function updateCoords7(){updateCoords(7)}function updateCoords8(){updateCoords(8)}function updateCoords9(){updateCoords(9)}var ASnoSVG=!1,checkIfSVGavailable=!0,notifyIfNoSVG=!1,alertIfNoSVG=!1,xunitlength=20,yunitlength=20,origin=[0,0],defaultwidth=300;defaultheight=200,defaultborder=[0,0,0,0];var border=defaultborder,strokewidth,strokedasharray,stroke,fill,fontstyle,fontfamily,fontsize,fontweight,fontstroke,fontfill,fontbackground,fillopacity=.5,markerstrokewidth="1",markerstroke="black",markerfill="yellow",marker="none",arrowfill=stroke,dotradius=4,ticklength=4,axesstroke="black",gridstroke="grey",pointerpos=null,coordinates=null,above="above",below="below",left="left",right="right",aboveleft="aboveleft",aboveright="aboveright",belowleft="belowleft",belowright="belowright",xmin,xmax,ymin,ymax,xscl,yscl,xgrid,ygrid,xtick,ytick,initialized,isOldIE=null==document.createElementNS,picture,svgpicture,doc,width,height,a,b,c,d,i,n,p,t,x,y;ASfn=[function(){updatePicture(0)},function(){updatePicture(1)},function(){updatePicture(2)},function(){updatePicture(3)},function(){updatePicture(4)},function(){updatePicture(5)},function(){updatePicture(6)},function(){updatePicture(7)},function(){updatePicture(8)},function(){updatePicture(9)}],ASupdateCoords=[function(){updateCoords(0)},function(){updateCoords(1)},function(){updateCoords(2)},function(){updateCoords(3)},function(){updateCoords(4)},function(){updateCoords(5)},function(){updateCoords(6)},function(){updateCoords(7)},function(){updateCoords(8)},function(){updateCoords(9)}],$(function(){drawPics()}),checkIfSVGavailable&&(checkifSVGavailable=!1,nd=isSVGavailable(),ASnoSVG=null!=nd),window.drawPictures=drawPictures,window.drawPics=drawPics,window.ASnoSVG=ASnoSVG,window.parseShortScript=parseShortScript}();
