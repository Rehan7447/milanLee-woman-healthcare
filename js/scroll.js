window.addEventListener("scroll",()=>{
    var x=scrollY;
    var gemini_img_id=document.getElementById("gemini-img")
    gemini_img_id.style.transform="translateY(30%)"
    gemini_img_id.style.opacity=0.5
    var extra_mile_img_id=document.getElementById("extra-mile-img")
    extra_mile_img_id.style.transform="translateY(30%)"
    extra_mile_img_id.style.opacity=0.5
    var experience_heading_id=document.getElementById("experience-heading")
    console.log(x)






    if(x>=3111){
        gemini_img_id.style.opacity=1
        gemini_img_id.style.transform="translateY(0%)";
    }else if(x<3111) {
        gemini_img_id.style.opacity=0.5
        gemini_img_id.style.transform="translateY(30%)"
    }
    
    if(x>=4080){
        gemini_img_id.style.opacity=0.5
        gemini_img_id.style.transform="translateY(-50%)"
        
    }else{
        gemini_img_id.style.opacity=1
        gemini_img_id.style.transform="translateY(0%)";
    }
   
    if(x>=4824){
        extra_mile_img_id.style.opacity=0.3
        extra_mile_img_id.style.transform="translateY(-50%)"
        
    }else{
        extra_mile_img_id.style.opacity=1
        extra_mile_img_id.style.transform="translateY(0%)";
    }




})