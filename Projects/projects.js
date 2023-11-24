var ProjectImg = document.getElementById('projectsImage');
var ProjectBrief = document.getElementById('projectsBrief')

var MBrief = document.getElementById('MuthunguBrief');
var MImg = document.getElementById('MuthunguImage');

var CBrief = document.getElementById('companyBrief');
var CImg = document.getElementById('companyImage');

var SBrief = document.getElementById('storeBrief');
var SImg = document.getElementById('storeImage');

setTimeout(function()  {
    ProjectImg.style.display = 'none';
    ProjectBrief.style.display = 'none';
    MImg.style.display = 'block';
    MBrief.style.display = 'block';
}, 4200);
