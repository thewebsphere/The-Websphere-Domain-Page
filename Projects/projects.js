
var ProjectImg = document.getElementById('projectsImage');
var ProjectBrief = document.getElementById('projectsBrief');

var MBrief = document.getElementById('MuthunguBrief');
var MImg = document.getElementById('MuthunguImage');

var CBrief = document.getElementById('companyBrief');
var CImg = document.getElementById('companyImage');

var SBrief = document.getElementById('storeBrief');
var SImg = document.getElementById('storeImage');

function transitionProjects(imgShown, briefShown, imgHiden, briefHidden) {
    imgHiden.style.display = 'none';
    briefHidden.style.display = 'none';
    imgShown.style.display = 'block';
    briefShown.style.display = 'block';
}

setTimeout(function () {
    transitionProjects(MImg, MBrief, ProjectImg, ProjectBrief);
}, 4200);

setTimeout(function () {
    transitionProjects(CImg, CBrief, MImg, MBrief);
}, 8400);

setTimeout(function () {
    transitionProjects(SImg, SBrief, CImg, CBrief);
}, 12600);

setTimeout(function () {
    SImg.style.display = 'none';
    SBrief.style.display = 'none'
    ProjectImg.style.display = 'block';
    ProjectBrief.style.display = 'block';
}, 16800);