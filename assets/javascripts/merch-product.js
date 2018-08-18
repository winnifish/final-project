function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

var header = document.getElementById("thumb-image");
var btns = header.getElementsByClassName("product-thumb-image");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-thumb");
    current[0].className = current[0].className.replace(" active-thumb", "");
    this.className += " active-thumb";
  });
}
var header = document.getElementById("size-button");
var sizes = header.getElementsByClassName("size-list");
for (var i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-size");
    current[0].className = current[0].className.replace(" active-size", "");
    this.className += " active-size";
  });
}

var count = 1;
var countEl = document.getElementById("count");
function plus(){
    count++;
    countEl.value = count;
}
function minus(){
  if (count > 1) {
    count--;
    countEl.value = count;
  }
}


jQuery(document).ready(function(){

    $('[data-quantity="plus"]').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('data-field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal)) {
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            $('input[name='+fieldName+']').val(1);
        }
    });

    $('[data-quantity="minus"]').click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('data-field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal) && currentVal > 1) {
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            $('input[name='+fieldName+']').val(1);
        }
    });
});
