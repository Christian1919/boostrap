$("#start").click(()=>{
    $(".progress-bar").animate(
        {
            width:"100%"
        },
       2500,
        "linear"
    )
})
let wsize = document.getElementsByClassName("progress-bar").clientWidth
$("#stop").click(()=>{
    $(".progress-bar").animate.done(
        {
        
        width:"wsize%"    
        },
        0,
        "linear"
        )
})
$("#reset").click(()=>{
    $(".progress-bar").animate(
        {
            width:"0%"
        },
        0,
        "linear"
        )
})