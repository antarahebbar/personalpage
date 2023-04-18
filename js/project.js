

// Adding click functions
let mediaSmall = window.matchMedia("(max-width: 760px)");
let mediaLarge = window.matchMedia("(min-width: 1000px)");

// Variables
let buttons = document.querySelectorAll(".javabutton");
let imgs = document.querySelectorAll(".projicon");


// Adding event listeners for media small and large
if (mediaSmall.matches || mediaLarge.matches)
{
    for (var i = 0; i < imgs.length; ++i)
    {
        let thisButton = buttons[i];
        imgs[i].addEventListener("click", function(mouseOverFunc)
        {
            if (this.style.display != "none")
            {
                this.style.display = "none";
                thisButton.style.display = "flex";
                this.style.position = "absolute";
            }
        });

    }
}

// Remove if tablet
if (!mediaSmall.matches && !mediaLarge.matches)
{
    for (var i = 0; i < imgs.length; ++i)
    {
        let thisButton = buttons[i];
        imgs[i].removeEventListener("click", function()
        {
            this.style.display = "flex";
        });
    } 
}



