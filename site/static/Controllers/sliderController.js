
function sliderheroactive() {
    // Slider allow start
    try {
        var imgas = '';
        $.ajax({
            url: '/javascript/slider.json',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                
                $.each(response, function (index, element) {

                    if (index == 0) {
                        
                        imgas += '<div class="carousel-item active">' +
                            '<img class="d-block w-100" src="' + element.src + '">' +
                            '</div>';
                        $("#slider_main_id").removeClass("d-none");
                    }
                    else {
                        
                        imgas += '<div class="carousel-item">' +
                            '<img class="d-block w-100" src="' + element.src + '">' +
                            '</div>';
                    }

                });
                $('#sliders_items_imgs').append(imgas);
            }


        })
    } catch (error) {
        console.log(error)
    }
    // Slider allow end
}