var bio = {
	"name" : "Moises Maldonado",
	"role" : "CEO & Social Entrepreneur",
	"contacts" : {
		"mobile" : "52-33-3105-7857",
		"email" : "moises@humanbrands.mx",
		"github" : "moymaldonadoa",
		"twitter" : "@moymaldonado",
		"location" : "Guadalajara"
	},
	"welcomeMessage":"Everybody wants to change the world!",
	"skills": ["Web Developer", "Strategiest", "Social Organizing", "Project Management"],
	"bioPic": "images/fry.jpg"
}
function displayheader() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			$("#skills:last").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
}
displayheader();

function displaytopContacts() {
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}
displaytopContacts();


function displayfooterContacts() {
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}
displayfooterContacts();

var projects = {
	"projects": [
	{
		"title" : "Free Public Transportation Programme for Students, Older People and Disiability People",
		"dates" : 2013,
		"description" : "Social public policy to improve families income and to prevent school desertion",
		"images": [
			"images/bienevales1.png", "images/bienevales2.png"
			]
	},
	{
		"title" : "FLOREVER",
		"dates" : 2015,
		"description" : "Flower Shop e-commerce platform and Bussiness start-up strategy",
		"images": [
			"images/florever.png", "images/florever2.png"]
	}
	]
}
function displayproject() {
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
	$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
	$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
	$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[0]));
	$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[1]));
		}
}
displayproject();

var work = {
	"jobs": [
	{
		"employer" : "Human Brands Company",
		"title" : "CEO",
		"dates" : 2015,
		"location": "Zapopan",
		"description" : "Social and digital entrepreneurs that create companies, products and services with an economic, social and technological value"
	},
	{
		"employer" : "Jalisco Government",
		"title" : "Social Programms General Director",
		"dates" : 2013,
		"location": "Guadalajara",
		"description" : "Design, organize, coordinate, manange and evaluate the social programms and public policies that help people overcome poberty and exclusion."
	},
	{
		"employer" : "Zapopan Government",
		"title" : "Jr. Strategist and City Mayor´s Advisor",
		"dates" : 2010,
		"location" : "Zapopan",
		"description" : "Design, coordinate and ejecute strategies and programms from the Mayor´s Office"
	}
	]
}
function displaywork() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer + HTMLworkTitle.replace("%data%", work.jobs[job].title)));
	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
	$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
	$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
		}
}
displaywork();

var education = {
	"schools":[
	{
		"name" : "ITESM Campus Guadalajara",
		"location": "Guadalajara",
		"degree":"Bachelor",
		"majors": ["BIA"],
		"dates": 2009,
		"url":"http://gda.itesm.mx"
	},
	{
		"name" : "COLJAL",
		"location": "Zapopan",
		"degree":"Masters",
		"majors": ["MPP"],
		"dates": 2012,
		"url":"http://www.coljal.edu.mx"
	}
],
"onlineCourses" : [
	{
		"title" : "Front End Web Developer",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "http://www.udacity.com"
	}
	]
}
function displayeducation () {
	for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
	$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
	$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
	$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
		}
for (course in education.onlineCourses) {
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
	$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates));
	$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
		}
}
displayeducation ();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name [1].tuUpperCase();
	name[0] = name [0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name [0] + " "+ name[1];
}
// My Resume is not diplaying this function about the inName :(

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);









