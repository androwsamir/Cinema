

SetColor(localStorage.getItem("mainColor") || ("rgb(43, 39, 39)"));
function getColorElement(color)
{
    return document.getElementById("color-"+color);
};
getColorElement("dark").addEventListener("click",() => {
    localStorage.setItem("mainColor","rgb(43, 39, 39)");
    SetColor(localStorage.getItem("maincolor")||"rgb(43, 39, 39)");
});

getColorElement("green").addEventListener("click",()=>{
    localStorage.setItem("mainColor","green");
    SetColor(localStorage.getItem("maincolor")||"green");
});
getColorElement("light").addEventListener("click",()=>{
    localStorage.setItem("mainColor","beige");
    SetColor(localStorage.getItem("maincolor")||"beige");
});
getColorElement("silver").addEventListener("click",()=>{
    localStorage.setItem("mainColor","silver");
    SetColor(localStorage.getItem("maincolor")||"silver");
});
getColorElement("blue").addEventListener("click",()=>{
    localStorage.setItem("mainColor","rgb(40, 40, 107)");
    SetColor(localStorage.getItem("maincolor")||"rgb(40, 40, 107)");
});
