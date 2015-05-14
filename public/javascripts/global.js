// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

});


function query1(){
    var tableContent = '';  

        var newUser = {
            'rating': $('#find1 input#rating').val(),
            'ratingRange': $('#find1  select#rangeRating').val(),
            'year': $('#find1  input#year').val(),
            'yearRange': $('#find1  select#rangeYear').val(),
            'category': $('#find1  input#category').val(),
            'protocol': $('#find1  select#protocols').val()
        }
        alert(newUser['year']);
 $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/find1',
            dataType: 'JSON'
        }).done(function( data ) {
                      // Check for successful (blank) response
                    $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.dateModified + '">' + this.title + '</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);          
            
        });



}

function query3(){

    var tableContent = '';  

        var newUser = {}
            newUser['year']= $('#find3 input#keyapi').val(),
        
        alert(newUser['year']);
 $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/find4',
            dataType: 'JSON'
        }).done(function( data ) {
                      // Check for successful (blank) response
                    $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.dateModified + '">' + this.title + '</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);          
            
        });



}
function query4(){

    var tableContent = '';  

        var newUser = {}
            newUser['year']= $('#find4 input#keymashup').val(),
        
        alert(newUser['year']);
 $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/find5',
            dataType: 'JSON'
        }).done(function( data ) {
                      // Check for successful (blank) response
                    $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.dateModified + '">' + this.title + '</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);          
            
        });



}
function query2(){

    var tableContent = '';  

        var newUser = {
            'year': $('#find2 input#year2').val(),
            'apiName': $('#find2  input#apiName').val(),
            'tag': $('#find2  input#tags').val(),

        }
        alert(newUser['year ']);
 $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/find3',
            dataType: 'JSON'
        }).done(function( data ) {
                      // Check for successful (blank) response
                    $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.dateModified + '">' + this.title + '</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);          
            
        });



}


$("#submit").click(function(event){
    alert("hello");
  query1();
});
$("#submit2").click(function(event){
    alert("For 2");
  query2();
});
$("#submit3").click(function(event){
    alert("For 3");
  query3();
});
$("#submit4").click(function(event){
    alert("For 4");
  query4();
});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {
        userListData = data;
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.dateModified + '">' + this.title + '</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};
function populateTable1() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/find1', function( data ) {
        userListData = data;
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.dateModified + '">' + this.title + '</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};