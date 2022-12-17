var P=Object.defineProperty;var E=(a,e,l)=>e in a?P(a,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[e]=l;var i=(a,e,l)=>(E(a,typeof e!="symbol"?e+"":e,l),l);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}})();class T{constructor(){i(this,"hp");i(this,"points");i(this,"energyBarStartWidth",60);i(this,"energyBarStartTransform",0);i(this,"statsBarHTML",document.querySelector("#stats-bar"));i(this,"healthBarHTML",document.querySelector("#stats-bar_health-bar"));this.hp=3,this.points=0}spawnStatsBar(){}updateHealthBar(){this.healthBarHTML.replaceChildren();for(let e=0;e<this.hp;e++){let l=document.createElement("div");l.classList.add("stats-bar_health-bar_heart"),this.healthBarHTML.appendChild(l)}}manageEnergyBar(e){let l=document.querySelector("#stats-bar_energy-bar_yellowBg");this.energyBarChecker(l,e)}energyBarChecker(e,l){setInterval(()=>{this.energyBarStartWidth-=.5,e.style.width=`${this.energyBarStartWidth}vw`,e.style.transform=`translateX(${this.energyBarStartTransform}vw)`,this.energyBarStartWidth<=0&&(f.playerDeath(),setTimeout(()=>{l()},3e3))},500)}renewEnergyBar(){this.energyBarStartWidth=60,this.energyBarStartTransform=0}addPoints(){let e=document.querySelector("#stats-bar_points-bar_text"),l=parseInt(e.textContent),t=0;switch(console.log("currEnemyType"),console.log(m),m){case"burgers":t=20;break;case"discs":t=60;break;case"bugs":t=90;break;default:t=40}let s=l+=t;e.innerHTML=`${s}`}zeroPoints(){let e=document.querySelector("#stats-bar_points-bar_text");e.innerHTML=`${0}`}resetEnergyBar(){this.energyBarStartWidth=62,this.energyBarStartTransform=0,this.statsBarHTML}static animationEnergyBar(){const e=document.querySelector("#stats-bar_energy-bar_yellowBg");e.classList.contains("energyBarAnimation")?(e.classList.remove("energyBarAnimation"),setTimeout(()=>{e.classList.add("energyBarAnimation")},10)):e.classList.add("energyBarAnimation")}}class w{constructor(e,l,t){i(this,"alienHTML");i(this,"bgImage");i(this,"startLeft");i(this,"startHeight");i(this,"intervalMove");i(this,"canMove");this.alienHTML=document.createElement("div"),this.bgImage=e,this.startLeft=l,this.startHeight=t,this.canMove=!0}spawnAlien(){const e=document.querySelector("#game-board");this.alienHTML=document.createElement("div"),this.alienHTML.classList.add("alien"),this.alienHTML.style.left=this.startLeft+"vw",this.alienHTML.style.top=this.startHeight+"vh",console.log(this.bgImage),console.log("bg img"),this.alienHTML.style.backgroundImage=`url(../enemies/${this.bgImage})`,e.appendChild(this.alienHTML)}respawnAlien(){clearInterval(this.intervalMove),this.alienHTML.style.left=this.startLeft+"vw",this.alienHTML.style.top=this.startHeight+"vh",this.alienHTML.style.display="none",setTimeout(()=>{this.alienHTML.style.display="block"},50)}stopMove(){this.canMove=!1,setTimeout(()=>{this.canMove=!0},3e3)}discMove(){let e=0,l=0,t=parseInt(this.alienHTML.style.left.replace(/\D/g,"")),s=parseInt(this.alienHTML.style.top.replace(/\D/g,""));console.log("standardMove"),console.log(s),console.log(t);let o=1,r=.2;const c=()=>{e>10?o=-1:e<-40&&(o=1),l>=70&&(l=-20)};this.intervalMove=setInterval(()=>{this.canMove&&(e+=o,l+=r,c(),this.alienHTML.style.left=`${t+e}vw`,this.alienHTML.style.top=`${s+l}vh`)},1e3/24)}hamburgerMove(){console.log(this.alienHTML.style.left);let e=parseInt(this.alienHTML.style.left.replace(/\D/g,"")),l=1;const t=()=>{e>100&&(e=-5)};this.intervalMove=setInterval(()=>{this.canMove&&(e+=l,document.body.contains(this.alienHTML)||clearInterval(this.intervalMove),t(),this.alienHTML.style.left=`${e}vw`)},1e3/24)}bugsMove(){console.log(this.alienHTML.style.left);let e=parseInt(this.alienHTML.style.left.replace(/\D/g,"")),l=.8,t=2;const s=()=>{e>100&&(e=-5)};let o;function r(u){return new Promise(g=>setTimeout(g,u))}const c=async u=>{o=u,console.log("robi sie")},h=async()=>{await c(0),await r(3e3),await c(1),await r(3e3),await c(2),await r(3e3)};h(),setInterval(()=>{h()},9100),this.intervalMove=setInterval(()=>{if(this.canMove){switch(o){case 0:e+=l;break;case 1:e+=t;break;case 2:e+=0;break;default:console.log("nie ma takiej opcji robaki")}document.body.contains(this.alienHTML)||clearInterval(this.intervalMove),s(),this.alienHTML.style.left=`${e}vw`}},1e3/24)}turnShooting(){setInterval(()=>{if(Math.random()*100<40){let l=new T;new A(l).spawnAlienBullet(this.alienHTML,this.alienHTML.style.left,this.alienHTML.style.top)}},3e3)}checkAlienHtmlExistence(e){var l=document.body.contains(e),t=new MutationObserver(()=>{document.body.contains(e)?(l||console.log("element inserted"),l=!0):l&&(l=!1,console.log("element removed"),clearInterval(this.intervalMove))});t.observe(document.body,{childList:!0,subtree:!0})}}let n=[],m;const S=()=>{I()},z=()=>{m="discs";let a=7;console.log("spawn disc\xF3w");let e=0;for(let t=1;t<a/2;t++)for(let s=1;s<5;s++){console.log("robie aliena");let o=s*10;o-=30;let r=new w("enemyDisc.gif",e*2,o);n.push(r),r.spawnAlien(),console.log(r),e+=5}(()=>{n.forEach(t=>{t.discMove()})})(),console.log(n)},I=()=>{m="burgers";let a=26;console.log("spawn burger\xF3w");const e=()=>{for(let t=0;t<a/2;t++)for(let s=1;s<4;s++){console.log("robie aliena");let o=new w("enemyHamburger.png",t*7,s*8);n.push(o),o.spawnAlien(),console.log(o)}},l=()=>{n.forEach(t=>{t.hamburgerMove()})};e(),l(),console.log(n)},x=()=>{m="bugs";let a=15;console.log("spawn burger\xF3w");const e=()=>{for(let t=1;t<=a/2;t++){let s=2;for(let o=1;o<4;o++){s+=2,console.log("robie aliena");let r=new w("enemyBugs.gif",t*(7+s),o*8);n.push(r),r.turnShooting(),r.spawnAlien(),console.log(r)}}},l=()=>{n.forEach(t=>{t.bugsMove()})};e(),l(),console.log(n)},$=()=>{n.forEach(a=>{a.alienHTML.remove()}),S()},q=()=>{(()=>{n.forEach(e=>{switch(e.respawnAlien(),console.log("przemieszczam"),m){case"discs":e.discMove();break;case"burgers":e.hamburgerMove();break;case"bugs":e.bugsMove();break}})})()},k=()=>{switch(console.log("spawn zrobi\u0142em"),console.log(n),m){case"discs":x();break;case"burgers":z();break;case"bugs":I();break;default:console.log("no respawn")}T.animationEnergyBar()},D=()=>{n.forEach(a=>{a.stopMove()})},C=a=>{let e={hit:!1,enemyType:"hamburger"};return n.forEach((l,t)=>{let s=l.alienHTML.getBoundingClientRect(),o=s.top,r=s.left,c=s.right,h=s.bottom,u=a.getBoundingClientRect(),g=u.top,v=u.left,M=u.right,p=u.bottom,y;g>o&&g<h||p>o&&p<h?y=!0:y=!1;let L;if(M>r&&M<c||v<c&&v>r?L=!0:L=!1,L&&y){if(console.log(a),a.className=="bullet"){let H=new Audio("../../sounds/explosion.wav");H.volume=1,H.play(),l.alienHTML.remove(),n.splice(t,1)}console.log("kolizja!!! Juhu"),e.hit=!0}}),e};let b=!1;const R=a=>{let e={hit:!1,enemyType:"hamburger"},t=document.querySelector("#player").getBoundingClientRect(),s=t.top,o=t.left,r=t.right,c=t.bottom,h=a.getBoundingClientRect(),u=h.top,g=h.left,v=h.right,M=h.bottom,p;u>s&&u<c||M>s&&M<c?p=!0:p=!1;let y;return v>o&&v<r||g<r&&g>o?y=!0:y=!1,y&&p&&(b||(console.log(a),console.log("Kolizja z graczem"),console.log(B),f.playerDeath(),B.hurtPlayer(),console.log("kolizja!!! Juhu"),e.hit=!0,console.log(b),b=!0,console.log(b),setTimeout(()=>{b=!1},5e3))),e};class A{constructor(e){i(this,"bulletHTML",document.createElement("div"));i(this,"statsBar");this.statsBar=e}spawnAlienBullet(e,l,t){this.bulletHTML.classList.add("bullet");let s=-2,o=window.getComputedStyle(e),r=parseInt(o.getPropertyValue("left"));r-=10,this.bulletHTML.style.setProperty("left",`calc(50% + ${r}px)a`),e.appendChild(this.bulletHTML),console.log("alien bullet"),console.log(l),console.log(t);let c=setInterval(()=>{s-=3,this.bulletHTML.style.bottom=`${s}vh`,this.checkPlayerCollision().hit&&(console.log("trafiony"),console.log(n),this.addPointsAfterHit(),n.length==0&&(console.log("next fala"),k(),this.statsBar.resetEnergyBar()),clearInterval(c),this.bulletHTML.remove()),(s>105||s<-105)&&(clearInterval(c),this.bulletHTML.remove())},1e3/20)}spawnBullet(e){const l=document.querySelector("#bullet-zone");this.bulletHTML.classList.add("bullet");let t=-2,s=window.getComputedStyle(e),o=parseInt(s.getPropertyValue("left"));o-=10,this.bulletHTML.style.setProperty("left",`calc(50% + ${o}px)`),l.appendChild(this.bulletHTML);let r=setInterval(()=>{t+=3,this.bulletHTML.style.bottom=`${t}vh`,this.checkCollision().hit&&(console.log("trafiony"),console.log(n),this.addPointsAfterHit(),n.length==0&&(console.log("next fala"),k(),this.statsBar.resetEnergyBar()),clearInterval(r),this.bulletHTML.remove()),t>105&&(clearInterval(r),this.bulletHTML.remove())},1e3/20)}checkCollision(){return C(this.bulletHTML)}checkPlayerCollision(){return R(this.bulletHTML)}addPointsAfterHit(){this.statsBar.addPoints()}}const d=class{constructor(){i(this,"playerHTML");i(this,"statsBar");this.playerHTML=document.createElement("div"),this.statsBar=new T,d.canMove=!0,this.manageEnergyBar()}initialize(){this.spawnPlayer(),this.bestMovePlayer(),this.initializeStatsBar()}spawnPlayer(){const e=document.querySelector("#player-zone");this.playerHTML.id="player",e.appendChild(this.playerHTML),this.checkCollision()}shooting(){let e=!0;document.addEventListener("keyup",l=>{if(d.canMove&&l.code=="Space"&&e){let s=new Audio("../../sounds/blaster.mp3");s.volume=.1,s.play(),e=!1,console.log(e),new A(this.statsBar).spawnBullet(this.playerHTML),setTimeout(()=>{e=!0},250)}})}checkCollision(){let e=!1;setInterval(()=>{C(this.playerHTML).hit&&e==!1&&(this.hurtPlayer(),d.playerDeath(),e=!0,setTimeout(()=>{e=!1},2e3))},1e3/30)}hurtPlayer(){this.statsBar.hp--,this.statsBar.updateHealthBar(),this.statsBar.renewEnergyBar(),console.log(this.statsBar),q(),this.statsBar.hp==0&&this.playerLost()}playerLost(){$(),this.statsBar.zeroPoints(),this.statsBar.resetEnergyBar(),this.statsBar.hp=3,this.statsBar.updateHealthBar()}bestMovePlayer(){let e={left:0,right:0};e.left=65,e.right=68;let l=window.getComputedStyle(this.playerHTML),t=parseInt(l.getPropertyValue("left"));document.body.onkeyup=document.body.onkeydown=function(o){if(o.keyCode!=32){let r=o.keyCode||o.which;e[r]=o.type=="keydown"}};const s=()=>{e[e.left]&&t>-48&&(this.playerHTML.style.left=t+"vw",t-=1),e[e.right]&&t<48&&(this.playerHTML.style.left=t+"vw",t+=1)};setInterval(()=>{d.canMove&&s()},1e3/24)}initializeStatsBar(){this.statsBar.spawnStatsBar(),this.statsBar.updateHealthBar()}manageEnergyBar(){this.statsBar.manageEnergyBar(this.hurtPlayer.bind(this))}static playerDeath(){console.log("Player umar\u0142");const e=document.querySelector("#player");let l=setInterval(()=>{console.log("umiera player");let s=Math.floor(Math.random()*1e3),o=Math.random();e.style.filter=`brightness(${o}) hue-rotate(${s}deg)`},140);D(),d.canMove=!1,T.animationEnergyBar();let t=new Audio("../../sounds/systemBreakDown.wav");t.volume=.1,t.play(),setTimeout(()=>{clearInterval(l),e.style.filter="",d.canMove=!0},3e3)}};let f=d;i(f,"canMove");let B;const j=()=>{let a=document.querySelector("#intro");O(a),setTimeout(()=>{a.remove(),W(),console.log("start the game"),B=new f,B.initialize(),B.shooting(),S()},5e3)},O=a=>{setInterval(()=>{let e=Math.floor(Math.random()*1e3),l=Math.random();a.style.filter=`brightness(${l}) hue-rotate(${e}deg)`},200)},W=()=>{const a=document.querySelector(".modal"),e=document.querySelector(".close-button");function l(){a.classList.add("show-modal")}function t(){a.classList.remove("show-modal")}function s(o){o.target===a&&t()}l(),setTimeout(()=>{t()},3e3),e.addEventListener("click",t),window.addEventListener("click",s)};j();
