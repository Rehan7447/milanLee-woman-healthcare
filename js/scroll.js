window.addEventListener("scroll",()=>{
    var x=scrollY;
var screenwidth=screen.width

    
    console.log(x)
    var gemini_img_id=document.getElementById("gemini-scroll-img")
    gemini_img_id.style.transition="all .3s ease-in"

    gemini_img_id.style.opacity=0


    var extra_mile_img_id=document.getElementById("extra-scroll-img")
   extra_mile_img_id.style.transition="all .3s ease-in"

    extra_mile_img_id.style.opacity=0

    var experience_heading_id=document.getElementById("experience-heading")
    experience_heading_id.style.transition="all .3s ease-in"
    experience_heading_id.style.transform="translateY(-30%)"
    
    experience_heading_id.style.color="#D3D3D3"
    if(screenwidth>=1700){
        
        ChangeSkinHeading(x,experience_heading_id)
  
        ChangeGeminiImagePosition(x,gemini_img_id)
        ChangeExtraImagePosition(x,extra_mile_img_id)
    }else if(screenwidth>991 &&  screenwidth<1700){
        ChangeGeminiImagePositionmid(x,gemini_img_id)
        ChangeExtraImagePositionmid(x,extra_mile_img_id)
        ChangeSkinHeadingmid(x,experience_heading_id)
    }else{
        gemini_img_id.style.opacity=1
        extra_mile_img_id.style.opacity=1
        experience_heading_id.style.transform="translateY(0%)"
    
        experience_heading_id.style.color="black"
    }


})

function ChangeExtraImagePositionmid(x,extra_mile_img_id){
    if(x>3683 &&x<4422){
      
        extra_mile_img_id.style.opacity="1"
    }else if(x>=4422){
 
        extra_mile_img_id.style.opacity="0"
    }
}
function ChangeGeminiImagePositionmid(x,gemini_img_id){
    if(x>=2995 && x<3683){
        gemini_img_id.style.opacity=1
 
    }else if(x>=3683){
        gemini_img_id.style.opacity=0
    
    }
    
}
function ChangeSkinHeadingmid(x,experience_heading_id){
    if(x>=705 && x<925){
       
        experience_heading_id.style.transform=`translateY(-20%)`
    
}else if(x>=925 && x<1553){
    experience_heading_id.style.transform=`translateY(-10%)`
    experience_heading_id.style.color="black"
}else if(x>=1553 && x<1609){
    experience_heading_id.style.transform=`translateY(0%)`
    experience_heading_id.style.color="black"
}else if(x>=1609){
    experience_heading_id.style.transform=`translateY(-30%)`
}
}

















function ChangeExtraImagePosition(x,extra_mile_img_id){
    if(x>4252 &&x<4824){
      
        extra_mile_img_id.style.opacity="1"
    }else if(x>=4824){
 
        extra_mile_img_id.style.opacity="0"
    }
}
function ChangeGeminiImagePosition(x,gemini_img_id){
    if(x>=3412 && x<4075){
        gemini_img_id.style.opacity=1
 
    }else if(x>=4075){
        gemini_img_id.style.opacity=0
    
    }
    
}
function ChangeSkinHeading(x,experience_heading_id){
    if(x>=832 && x<1160){
       
        experience_heading_id.style.transform=`translateY(-20%)`
    
}else if(x>=1160 && x<1489){
    experience_heading_id.style.transform=`translateY(-10%)`
    experience_heading_id.style.color="black"
}else if(x>=1489 && x<1811){
    experience_heading_id.style.transform=`translateY(0%)`
    experience_heading_id.style.color="black"
}else if(x>=1811){
    experience_heading_id.style.transform=`translateY(-30%)`
}
}