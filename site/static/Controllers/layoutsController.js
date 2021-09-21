var ueres_id = null;
function onlodergetusersids() {


    if (localStorage.getItem("gotrue.user") != null) {
        login = localStorage.getItem("gotrue.user");
        logins = JSON.parse(login);

        ueres_id = logins.id;
        const oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];


        if (oldItems) {
            for (i = 0; i < oldItems.length; i++) {

                const idToUse = oldItems[i].id;
                const existingItem = oldItems.find(ss => ss.id === idToUse && ss.user_id === null);
                if (existingItem) {
                    Object.assign(existingItem, {
                        'user_id': ueres_id,
                    })
                }
                localStorage.setItem('itemsArray', JSON.stringify(oldItems));

            }
        }
    }
    else {
        ueres_id = null;
    }
    
    try {
        $("#product_Addid div").remove();
        $("#product_Addid hr").remove();
        items = localStorage.getItem("itemsArray");
        json = JSON.parse(items);
        const result = json.filter(ss => ss.user_id === ueres_id);
        var count = 0;
        toprice = 0;
        var student = '';
        for (i = 0; i < result.length; i++) {
            // console.log(json[i]);
            count++;
            student += '<div class="row  pb-4">'
            // first div start
            student += '<div class="col-6 col-sm-6 col-md-3 text-center">'
            student += '<img class="img-responsive" src="' + result[i].img + '" alt="prewiew" width="120" height="80">'
            student += '</div>'
            // first div end
            // second div start
            student += '<div class="col-6 text-sm-center col-sm-4 text-md-left col-md-3">'
            student += '<h4 class="titlealign product-name"><strong>' +result[i].name + '</strong></h4>'
            student += '<h4 class="titlealign"><small>' +result[i].dec + '</small></h4>'
            student += '</div>'
            // second div end

            // price div start
            student += '<div class="col-12 col-sm-12 text-sm-center col-md-5 text-md-right row">'
            student += '<div class="col-3 col-sm-4 col-md-4 text-center p-2">'
            student += '<h6><strong>'+new Intl.NumberFormat().format(parseFloat(result[i].price))+'<span class="text-muted">x</span></strong></h6>'
            student += '</div>'
            // price div end

            // quantity div Start
            student += '<div class="col-5 col-sm-5 col-md-4 text-center">'
            student += '<div class="quantity">'
            student += '<input type="number" class="qty form-control text-center" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57" oninput="this.value = Math.abs(this.value)" min="1"  maxlength="3" onkeyup="' + "cartpricechnage(this,'" + result[i].id + "'," + i + "," + result[i].price + ",'layout')" + '"' + 'onchange="' + "cartpricechnage(this,'" + result[i].id + "'," + i + "," + result[i].price + ",'layout')" + '" value="' + result[i].quantity + '">'
            student += '</div>'
            student += '</div>'
            // quantity div end


            student += '<div class="col-2 col-sm-4 col-md-4 text-right">'
            student += '<button class="btn btn-outline-danger btn-icon btn-sm px-3" onclick="add_delete(' +
            "'" + result[i].id + "'"
            + ',this)"><i class="fa fa-trash" aria-hidden="true"></i></button>';

            student += '</div>';
            student += '</div>';
            student += '<hr></div>';
            


            var price = parseFloat(result[i].price * result[i].quantity)
            toprice = parseFloat(toprice + price);

            $("#product_Addid hr").remove();
            $("#product_Addid div").remove();
            $('#product_Addid').append(student);

        };
        $('#pricedonefotter').text(new Intl.NumberFormat().format(parseFloat(toprice)));
        $("#p_count").text(count);

    } catch (error) {
        var count = 0;
        toprice = 0;
     
        $('#pricedonefotter').text(toprice);
        $("#p_count").text(count);

    }

    try {
        socialtagsandcontant()
    } catch (error) {

    }

}




function socialtagsandcontant() {
    // Social file start
    try {
        $.getScript('/javascript/social_links.js', function () {
            // Social media allow start
            try {
                if (fb != null && fb != '' && fb.trim() != '') {
                    $('#facebook').attr("href", fb);
                    $("#itemfb").removeClass("d-none");
                }
            } catch (error) {

            }

            try {
                if (tw != null && tw != '' && tw.trim() != '') {
               
                    $('#twitter').attr("href", tw);
                    $("#itemtw").removeClass("d-none");
                }
            } catch (error) {

            }



            try {
                    if (yt != null && yt != '' && yt.trim() != '') {
                    $('#youtube').attr("href", yt);
                    $("#itemyt").removeClass("d-none");
                }
            } catch (error) {

            }



            try {
                if (insta != null && insta != '' && insta.trim() != '') {
                    $('#instagram').attr("href", insta);
                    $("#iteminta").removeClass("d-none");
                }
            } catch (error) {

            }



            try {
                if (pt != null && pt != '' && pt.trim() != '') {
              
                    $('#pinterest').attr("href", pt);
                    $("#itempt").removeClass("d-none");
                }
            } catch (error) {

            }
            // Social media allow end

            // contact allow start
            try {
                    if (social_mobile != null && social_mobile != '' && social_mobile.trim() != '') {
                    $(".parmobile").html('<a class="text-color" href="tel:' + social_mobile + '"><i class="ti-mobile text-primary mr-2"></i>' + social_mobile + '</a>');
                    $(".parmobile").removeClass("d-none");
                }
            } catch (error) {

            }
            try {
                    if (social_email != null && social_email != '' && social_email.trim() != '') {
                    $(".paremail").html('<a class="text-color" href="mailto:' + social_email + '"><i class="ti-email text-primary mr-2"></i>' + social_email + '</a>');
                    $(".paremail").removeClass("d-none");
                }
            } catch (error) {

            }
            try {

                if (social_location != null && social_location != '' && social_location.trim() != '') {
                    $(".parlocation").html('<i class="ti-location-pin text-primary mr-2"></i>' + decodeURIComponent(social_location));
                    $(".parlocation").removeClass("d-none");
                }
            } catch (error) {

            }
            try {
                if (about_info != null && about_info != '' && about_info.trim() != '') {
                    $("#aboutdetails").text(decodeURIComponent(about_info));
                   
                }
            } catch (error) {

            }

            try {
                if (social_mobile != null && social_mobile != '' && social_mobile.trim() != '') {
               // $(".whatsappallow").html('<a class="text-color" href="tel:' + social_mobile + '"><i class="ti-mobile text-primary mr-2"></i>' + social_mobile + '</a>');
                $(".whatsappallow").removeClass("d-none");
            }
        } catch (error) {

        }
            // contact allow end

            
        //     <a href="https://api.whatsapp.com/send/?phone=15551234567&text=I%27m+interested+in+your+car+for+sale&app_absent=0"  class="btn btn-sm btn-outline-primary" target="_blank">
        //     <i class="fa fa-whatsapp" aria-hidden="true" style="font-size: 20px;"></i>
        //   </a>
        });

    }
    catch (error) {

    }
    // Social file end
}



// Listen for input event on numInput.
// Reusable Function to Enforce MaxLength
