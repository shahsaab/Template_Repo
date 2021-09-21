var pagenames = "contact";
function sendEmail()
{
    try {
        $('#divLoader').show()
        $("#sendmaildone").attr("disabled", true)
        
        var errorschecks = "success";
        var msg = $('#message').val();
    var email = $('#useremail').val();
    var name = $('#username').val();
    if (msg == "") {
        document.getElementById("errormsges").innerHTML = "Name required";
        errorschecks = "error";
    }
    else {
        if (errorschecks == "success") { document.getElementById("errormsges").innerHTML = ""; errorschecks = "success"; }
    }
    if (email == "") {
        document.getElementById("erroremils").innerHTML = "Address required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success") { document.getElementById("erroremils").innerHTML = ""; errorschecks = "success"; }

    }
    if (name == "") {
        document.getElementById("errornames").innerHTML = "Name required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success")
        {errorschecks = "success";document.getElementById("errornames").innerHTML = "";}
    }

    if(errorschecks == "success"){
 $.getScript('/javascript/social_links.js', function () {
    $.ajax({
        url: "http://eratest.site:81/api/ECom/SendContactEmail?Email="+social_email+"&Msg="+encodeURIComponent(msg)+"&UserEmail="+email+"&UserName="+name,
        method: "GET",
                    headers: {
                    'SubDomain': subdomain,
                    'AccessKey': AccessKey,
                    },
                    success: function(response){
                        if("True" == response)
                        {
                            $('#message').val('');
                            $('#useremail').val('');
                            $('#username').val('');
                            $('#divLoader').hide()
                            var options = {
                                autoClose: true,
                                progressBar: true,
                                enableSounds: true,
                                sounds: {
            
                                    success: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
            
                                },
                            };
                            var toast = new Toasty(options);
                            toast.configure(options);
            
                            toast.success("Request successful send");
                        
                        }
                        else
                        {
                            $('#divLoader').hide()
                            var options = {
                                autoClose: true,
                                progressBar: true,
                                enableSounds: true,
                                sounds: {
            
                                    error: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
            
                                },
                            };
                            var toast = new Toasty(options);
                            toast.configure(options);
                            
                            toast.error("Request failed");
                        
                        }
                        
                        
                        $("#sendmaildone"). attr("disabled", false)
                        
                    }
        });
    })
}
else{
    $("#sendmaildone"). attr("disabled", false)
    $('#divLoader').hide()

}
    } catch (error) {
        
    }
    
}



