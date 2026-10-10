'use strict';
const caseData={
  china:{name:'Shanghai Qingkong Wanzhang Energy · China',slug:'ASO_Case01_Qingkong_Wanzhang',notes:'30 defined purchase-intent queries · 27 explicit recommendations after client implementation. Reconstructed evidence, not original historical screenshots.'},
  miimoo:{name:'MIIMOO Inc. · Japan company entity',slug:'ASO_Case02_MIIMOO',notes:'~300 target queries · 260+ visibility · 180+ reached #1 at least once · 60+ retained #1 after cross-query validation.'},
  thailand:{name:'Millideas Co., Ltd. · Thailand',slug:'ASO_Case03_Millideas',notes:'Skincare: 20+ Top-3 occurrences within ~50 target queries. F&B: Top 1–2 observations, denominator unavailable.'}
};
const exhibitNames=['Project Overview','Analysis & Results','Evidence Summary'];
const filenames=['01_Project_Overview','02_Analysis_Results','03_Evidence_Summary'];
const exhibitCatalog=Object.entries(caseData).flatMap(([id,obj])=>filenames.map((f,i)=>({caseId:id,caseName:obj.name,title:exhibitNames[i],url:`assets/cases/${obj.slug}_${f}.webp`,notes:obj.notes})));
const gallery=document.getElementById('gallery-dialog');
const galleryImage=document.getElementById('gallery-image');
const galleryHeading=document.getElementById('gallery-heading');
const galleryCaption=document.getElementById('gallery-caption');
const galleryCounter=document.getElementById('gallery-counter');
let exhibitIndex=0;
function showExhibit(index){exhibitIndex=(index+exhibitCatalog.length)%exhibitCatalog.length;const e=exhibitCatalog[exhibitIndex];galleryImage.src=e.url;galleryImage.alt=`Reconstructed ASO Evaluator ${e.title} dashboard for ${e.caseName}`;galleryHeading.textContent=`${e.caseName} / ${e.title}`;galleryCaption.textContent=e.notes;galleryCounter.textContent=`${String(exhibitIndex+1).padStart(2,'0')} / ${String(exhibitCatalog.length).padStart(2,'0')}`;}
function openGallery(caseId){const first=Math.max(0,exhibitCatalog.findIndex(x=>x.caseId===caseId));showExhibit(first);gallery.showModal();}
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>openGallery(button.dataset.case)));
document.getElementById('open-all-evidence').addEventListener('click',()=>{showExhibit(0);gallery.showModal();});
document.getElementById('prev-exhibit').addEventListener('click',()=>showExhibit(exhibitIndex-1));
document.getElementById('next-exhibit').addEventListener('click',()=>showExhibit(exhibitIndex+1));
const videoDialog=document.getElementById('video-dialog');const video=document.getElementById('product-video');
document.getElementById('open-video').addEventListener('click',()=>{videoDialog.showModal();video.load();});
videoDialog.addEventListener('close',()=>{video.pause();video.currentTime=0;});
[gallery,videoDialog].forEach(d=>{d.querySelector('.modal-close').addEventListener('click',()=>d.close());d.addEventListener('click',e=>{if(e.target===d)d.close();});});
document.addEventListener('keydown',e=>{if(gallery.open){if(e.key==='ArrowRight')showExhibit(exhibitIndex+1);else if(e.key==='ArrowLeft')showExhibit(exhibitIndex-1);}});
const toggle=document.querySelector('.mobile-toggle');const mobileMenu=document.querySelector('.mobile-menu');
toggle.addEventListener('click',()=>{const opening=mobileMenu.hidden;mobileMenu.hidden=!opening;toggle.setAttribute('aria-expanded',String(opening));toggle.setAttribute('aria-label',opening?'Close menu':'Open menu');});
mobileMenu.querySelectorAll('a').forEach(x=>x.addEventListener('click',()=>{mobileMenu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');}));
