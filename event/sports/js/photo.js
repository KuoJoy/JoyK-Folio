$(function(){
    
    $(".note__picbox div").click(function(){
        
        var N = $(this).attr("id").substr(2);
        
        $("#big").attr( "src" , "images/notebook/big" + N + ".png" );
        $(".note__picbox div").css( "border" , "1px solid #ccc" );
        $(this).css( "border" , "2px solid #777" );

        $("#big_mb").attr( "src" , "images/notebook/big_mb" + N + ".png" );  
    });

});