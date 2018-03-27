$( function(){

    $("input[name=btn]").click( function(){
        $("#result").val($("#result").val() + $(this).val());
    });

$("input[name=ce").click( function(){
    $("#result").val('');
 })

 $("input[name=soma]").click( function(){
     if($("#result").val() != ''){
       $("#op").text($(this).val());
     } else {
         alert('Insira um valor para efetuar a operacao');
     }

    });




});
