var projectsImages = ['projectsImage', 'MuthunguImage', 'companyImage', 'storeImage'];
var projectsBriefs =['projectsBrief', 'MuthunguBrief', 'companyBrief', 'storeBrief'];

function nextProject(index) {
    document.getElementById(projectsImages[index]).style.display = 'none';
    document.getElementById(projectsBriefs[index]).style.display = 'none';

    var nextIndex = (index + 1) % projectsImages.length;

    document.getElementById(projectsImages[nextIndex]).style.display = 'block';
    document.getElementById(projectsBriefs(nextIndex)).style.display = 'block';
}

nextProject(0);

var timerId = setInterval(function() {
    nextProject(projectsImages.indexOf('projectsImage'));
}, 4200);