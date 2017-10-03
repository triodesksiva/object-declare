function objfun() {
	// var student = {};
	// var address = {
	// 	addressug = {},addresspg = {}
	// };
 //     student.name = document.getElementById('namevalue').value;
 //     student.age = document.getElementById('agevalue').value;
 //     student.city = document.getElementById('cityvalue').value;
 //     student.state = document.getElementById('statevalue').value;
 //     student.country = document.getElementById('countryvalue').value;
 //     student.degree = document.getElementById('degreevalue').value;
 //     student.collegename = document.getElementById('clgvalue').value;
 //     // document.getElementById('getvalue').innerHTML = student.name + "" + student.age;
 //     console.log(student);
 var student = {
        address: {},
        ugclgdetails: {
        	ugaddress:{}
        },
        pgclgdetails: {
        	pgaddress:{}
        }
 };
       student.name = document.getElementById('namevalue').value;
       student.age = document.getElementById('agevalue').value;
       student.address.city = document.getElementById('cityvalue').value;
       student.address.state = document.getElementById('statevalue').value;
       student.address.country = document.getElementById('countryvalue').value;
       student.ugclgdetails.ugdegree = document.getElementById('degreevalue').value;
       student.ugclgdetails.ugclgname = document.getElementById('clgvalue').value;
       student.ugclgdetails.ugmarks = document.getElementById('markvalue').value;
       student.ugclgdetails.ugaddress.city = document.getElementById('ugcityvalue').value;
       student.ugclgdetails.ugaddress.state = document.getElementById('ugstatevalue').value;
       student.ugclgdetails.ugaddress.country = document.getElementById('ugcountryvalue').value;
       student.pgclgdetails.pgdegree = document.getElementById('pgdegreevalue').value;
       student.pgclgdetails.pgclgname = document.getElementById('pgclgvalue').value;
       student.pgclgdetails.pgmarks = document.getElementById('pgmarkvalue').value;
       student.pgclgdetails.pgaddress.city = document.getElementById('pgcityvalue').value;
       student.pgclgdetails.pgaddress.state = document.getElementById('pgstatevalue').value;
       student.pgclgdetails.pgaddress.country = document.getElementById('pgcountryvalue').value;
        document.getElementById('getvalue').innerHTML = student.name + " , " + student.age + " <br> " +
        student.address.city + " , " + student.address.state + "<br>" + student.address.country + " <br> " +
        student.ugclgdetails.ugdegree + "  " + student.ugclgdetails.ugclgname + " <br> " +
        student.ugclgdetails.ugmarks + " <br> " +
        student.ugclgdetails.ugaddress.city + " " +
        student.ugclgdetails.ugaddress.state + " " +
        student.ugclgdetails.ugaddress.country + " <br> " +
        student.pgclgdetails.pgdegree + " " +
        student.pgclgdetails.pgclgname + " " +
        student.pgclgdetails.pgmarks + " <br> " +
        student.pgclgdetails.pgaddress.city + " " +
        student.pgclgdetails.pgaddress.state + " " +
        student.pgclgdetails.pgaddress.country;
       console.log(student);
}

