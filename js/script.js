jQuery(function($){
    $(':radio').change(function(){
        barra();
    });
});
function barra(){
    var barra = document.querySelector(links);
    if( $("#rd_home").is(":checked") == true){
        console.log("ok")  ;
    }
    if( $("#rd_produtos").is(":checked") == true){
        barra.classList.add(fundo02);
        console.log("ok");
    }
    if( $("#rd_galeria").is(":checked") == true){

    }
    if( $("#rd_siga").is(":checked") == true){

    }
    if( $("#rd_final").is(":checked") == true){

    }
}