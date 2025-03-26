$(document).ready(function(){ 
    console.log("It is time to start the JavaScript program"); 
    
    function change_led_color(color, power){ 
        const settings = { 
            "url": "https://wizklub.com/api/secured/wiziot-poll-request/", 
            "method": "POST", 
            "dataType": "json", 
            "contentType": "application/json; charset=utf-8", 
            "headers": {
                "Api-Access-Key": "cm94eTVhbTV5VTNIV2lpMjN4QTA=", 
                "Api-Secret-Key": "d0V0R2dfVTlTazZhYjl0X1k4R0JhLWdVLVJqT0hfNlVoZw==", 
                "Content-Type": "application/json"
            }, 
            "data": JSON.stringify({
                "mode": "WRITE", 
                "device_id": "sony02_IoT_device", 
                "source": "API", 
                "api": "smartlight", 
                "type": "strip_switch", 
                "color": color, 
                "power": power
            }), 
        }; 
        
        console.log("Sending request:", power, color); 
        
        $.ajax(settings).done(function (response) { 
            console.log("Response received:", response); 
        }).fail(function (jqXHR, textStatus, errorThrown) { 
            console.error("API request failed:", textStatus, errorThrown); 
        }); 
    } 

    $("#color_changer_red").click(function() { 
        console.log("Changing color to red"); 
        change_led_color("red", "1"); 
    }); 
    
    $("#color_changer_green").click(function(){ 
        console.log("Changing color to green"); 
        change_led_color("green", "1"); 
    }); 
    
    $("#color_changer_blue").click(function(){ 
        console.log("Changing color to blue"); 
        change_led_color("blue", "1"); 
    }); 
    
    $("#color_changer_off").click(function(){ 
        console.log("Turning LED off"); 
        change_led_color("", "0"); 
    }); 
    
    $("#smart_light_power_on").click(function() { 
        console.log("Turning LED power on"); 
        const color = $("#color").val(); 
        change_led_color(color, "1"); 
    }); 
    
    $("#smart_light_power_off").click(function() { 
        console.log("Turning LED power off"); 
        const color = $("#color").val(); 
        change_led_color(color, "0"); 
    }); 
});