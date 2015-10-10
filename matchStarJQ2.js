// JavaScript Document
$(document).ready(function () {
        $('li').click(function () {


var parentTag = $(this).parent().get(0).id;
if (parentTag=='lv1') bstar=($(this).index());
if (parentTag=='lv2') tstar=($(this).index());
btext =  $( this ).text();
//if (parentTag=='lv2') gstar=($(this).index());
//if (parentTag=='lv3') tstar=($(this).index());
//if (parentTag=='lv4') qstar=($(this).index());
 //       alert(bstar+' '+gstar);
//        alert($('ul').text());
//alert(parentTag+' '+tstar);
     });  
});


$("input[data-type='search']").keyup(function() {
    if($(this).val() == '') {
$.mobile.activePage.find("[data-role=listview]").children().addClass('ui-screen-hidden');
    }
});

$('a.ui-input-clear').click(function() {
    $("input[data-type='search']").val('');
    $.mobile.activePage.find("input[data-type='search']").trigger('keyup');
});

 $("ul>li").click(function () {
$.mobile.activePage.find('input[data-type="search"]').val($(this).text());
$.mobile.activePage.find("[data-role=listview]").children().addClass('ui-screen-hidden');

           });



function flert(xx,yy){
alert(xx);
alert(yy);
alert(document.getElementById("lv1").text);
}

function getIndex(node) {
  var childs = node.parentNode.childNodes;
  for (i = 0; i < childs.length; i++) {
    if (node == childs[i]) break;
  }
  return i;
}
