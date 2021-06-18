
$(".answer").hide();

$("button").click(function(){
	let userAge= $(".time").val();
    let userXp= $(".hungry").val();
    
    if(userAge >= 18 && (userXp==="Beginner"||userXp==="beginner"||userXp==="BEGINNER")){
        $(".result").text("We recommend you to ride Jersey Devil Coaster");
        $(".image").attr("src", "https://images.foxtv.com/static.fox29.com/www.fox29.com/content/uploads/2019/08/764/432/JerseyDevilCoaster_Crop_1567109158463_7625501_ver1.0_1280_720-1.jpg?ve=1&tl=1");
        $(".pic").show();
        $(".answer").show();
        
    }else if (userAge >= 18 && (userXp==="Intermediate"||userXp==="intermediate"||userXp==="INTERMEDIATE")){
        $(".result").text("We recommend you to ride Kingda Ka");
        $(".image").attr("src", "https://thumb.spokesman.com/etGRcK319Vgd3jHYcygARDkCvkw=/2500x1875/smart/media.spokesman.com/photos/2020/08/11/5f32b5a5f3433.image.jpg");
        $(".image").show();
        $(".answer").show();
        
    }else if (userAge >= 18 && (userXp==="Experience"||userXp==="experience"||userXp==="EXPERIENCE")){
        $(".result").text("We recommend you to ride Lightnin' Loops");
        $(".image").attr("src", "https://lh3.googleusercontent.com/proxy/sz0ugAIFEWlkoqOBuej-33sFvhAG8KAorAbSSt-lUlpUsArPbsPd4aVomkKwT0JMLhWBPUAc-TwycTFL2kgri7mwfwp292x70H1wSe5OlWL_unLt8yH0XODbezUVIo9flQ");
        $(".image").show();
        $(".answer").show();
    
        //brake
    
        }else if (userAge >= 13 && (userXp==="Beginner"||userXp==="beginner"||userXp==="BEGINNER")){
    	$(".result").text("We recommend you to ride Scream");
        $(".image").attr("src", "https://sf-static.sixflags.com/wp-content/uploads/2020/04/scream_1-scaled.jpg");
        $(".image").show();
            $(".answer").show();
            
        }else if (userAge >= 13 && (userXp==="Intermediate"||userXp==="intermediate"||userXp==="INTERMEDIATE")){
    	$(".result").text("We recommend you to Batman The Ride");
        $(".image").attr("src", "https://sf-static.sixflags.com/wp-content/uploads/2020/04/teaser_batmantheride1_sfft.jpg");     
            $(".answer").show();
            
        }else if (userAge >= 13 && (userXp==="Experience"||userXp==="experience"||userXp==="EXPERIENCE")){
    	$(".result").text("We recommend you to ride X²");
        $(".image").attr("src", "https://i.ytimg.com/vi/zGV-aoemQ5Q/maxresdefault.jpg");
        $(".image").show();  
            $(".answer").show();
            
    //brake
            
    }else if(userAge >= 8 && (userXp==="Beginner"||userXp==="beginner"||userXp==="BEGINNER")){
        $(".result").text("We recommend you to ride The New Revolution");
        $(".image").attr("src", "https://www.coaster101.com/wp-content/uploads/2016/03/S0150096.jpg");
        $(".answer").show();
    
	}else if(userAge >= 8 && (userXp==="Intermediate"||userXp==="intermediate"||userXp==="INTERMEDIATE")){
        $(".result").text("We recommend you to ride El Toro");
        $(".image").attr("src", "https://upload.wikimedia.org/wikipedia/commons/b/b8/KingdaEltoro.JPG");
        $(".answer").show();
        
    }else if(userAge >= 8 && (userXp==="Experience"||userXp==="experience"||userXp==="EXPERIENCE")){
        $(".result").text("We recommend you to ride Bizarro");
        $(".image").attr("src", "https://i.pinimg.com/originals/3d/93/30/3d9330fe26109e146891209fd196e491.jpg");
        $(".answer").show();
        
        //brake
        }else if(userAge ==="" && userXp===""){
            $(".result").text("Error, please write your answer");
            $(".answer").show();
            $(".pic").hide();
            
        }else if(userAge <= 7 && userXp===""||userXp==="Beginner"||userXp==="beginner"||userXp==="BEGINNER"||userXp==="Intermediate"||userXp==="intermediate"||userXp==="INTERMEDIATE"||userXp==="Experience"||userXp==="experience"||userXp==="EXPERIENCE"){
        $(".result").text("Too Young to Ride");
            $(".answer").show();
            $(".pic").hide();
        
       }else{
     	$(".result").text("Error");
}
});