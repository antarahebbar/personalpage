
// Adding click functions
var media = window.matchMedia("(max-width: 760px)");
console.log(media);

function clickImg()
{
    let imgs = document.querySelector(".pics").querySelectorAll("img");
    let texts = document.querySelectorAll(".alt");
    console.log(imgs);
    for (let j = 0; j < imgs.length; ++j)
    {
        imgs[j].addEventListener("click", function()
        { 
            if (texts[j].style.display != "none")
            {
                texts[j].style.display = "none";
                console.log("don't show");
        
            }
        
            else 
            {
                texts[j].style.display = "inline";
                console.log("show");
            }
        });
    }


}

function revertImg()
{
    let imgs = document.querySelector(".pics").querySelectorAll("img");
    console.log("remving");
    for (var j = 0; j < imgs.length; ++j)
        {
            imgs[j].removeEventListener("click", clickImg);
        }
}

function mediaRight(media)
{
    if (media.matches)
    {
        console.log("got here");
        clickImg();
        }

    else 
    {
        console.log(media.matches);
        revertImg();
    }
}

mediaRight(media);

