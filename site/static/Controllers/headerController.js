// Get the current user:
const user = netlifyIdentity.currentUser();
// var json=null;


// const idToUse = id;
var accpagescheck = null;
function checkoutbtc() {
    if (localStorage.getItem("gotrue.user") != null) {
        window.location.href = window.location.origin + "/checkout";

    }
    else {
        accpagescheck = "checkout";
        $('#exampleModalPreview').modal('hide');
        account()
    }
}


window.onload = function () {
    if (localStorage.getItem("gotrue.user") != null) {
        $('#noneDashboard').removeClass('d-none')

    } else {
        $('#noneDashboard').addClass('d-none')
    }

}



function cartpricechnage(qty, p_id, i, price,checkrequet) {
    toprice = 0;
    const oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
    const idToUse = p_id;
    const existingItem = oldItems.find(ss => ss.id === idToUse && ss.user_id === ueres_id);
    if (existingItem) {
        Object.assign(existingItem, {
            'quantity': parseFloat($(qty).val())
        })
    }
    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
    $('#' + i).text(parseFloat(price) * parseFloat($(qty).val()).toFixed(2))
    items = localStorage.getItem("itemsArray");
    json = JSON.parse(items);
    const result = json.filter(ss => ss.user_id === ueres_id);
    var count = 0;
    toprice = 0;
    var student = '';
    for (i = 0; i < result.length; i++) {
        var price = parseFloat(parseFloat(result[i].price) * parseFloat(result[i].quantity))
        toprice = parseFloat(parseFloat(toprice) + parseFloat(price));
    }
    $('#pricedonefotter').text(new Intl.NumberFormat().format(parseFloat(toprice)));
    $('#pricedonefotter').text(new Intl.NumberFormat().format(parseFloat(toprice)));
    if (checkrequet == "checkout") {
    $('#subtotle').text(new Intl.NumberFormat().format(parseFloat(toprice)));
    $('#sutotle').text(new Intl.NumberFormat().format(parseFloat(toprice)));
    onlodergetusersids()
    }
    else
    {
        if (pagenames == "checkout") {
            load()
        }
    }

}
//  




//   netlifyIdentity code start
// Bind to eventsgetusersids()

netlifyIdentity.on('login',
    user => redirtedallows());

function redirtedallows() {
    if (accpagescheck != null) {
        window.location.href = window.location.origin + "/checkout"
    }
}


netlifyIdentity.on('login', user => $('#noneDashboard').removeClass('d-none'));
netlifyIdentity.on('login', user => getusersids());
netlifyIdentity.on('logout', user => $('#noneDashboard').addClass('d-none'));
netlifyIdentity.on('logout', user => localStorage.removeItem('itemsArray'));
netlifyIdentity.on('logout', user => getusersids());
function account() {

    netlifyIdentity.open('login');
}
// var span_Text = document.getElementById("loginaccount");
//   netlifyIdentity code end



function add_delete(id, o) {
    try {
        if (pagenames == "checkout") {
            var p = o.parentElement.parentElement;
            p.remove();
        }
        else
        {
            var p = o.parentElement.parentElement.parentElement;
            p.remove();
        }
    } catch (error) {
        var p = o.parentElement.parentElement.parentElement;
            p.remove();
    }
   

    var json = JSON.parse(localStorage["itemsArray"]);

    for (i = 0; i < json.length; i++) {

        if (json[i].id == id && json[i].user_id == ueres_id) {
            var price = parseFloat(parseFloat(json[i].price) * json[i].quantity)
            toprice = parseFloat(parseFloat(toprice) - parseFloat(price)).toFixed(2);
            //console.log(toprice)
            console.log(json[i].price)
            console.log(parseFloat(toprice))
            $('#pricedonefotter').text(new Intl.NumberFormat().format(parseFloat(toprice)));

            json.splice(i, 1);
            // localStorage["itemsArray"] = JSON.stringify(json);
            localStorage.setItem('itemsArray', JSON.stringify(json));
            $("#p_count").text($("#p_count").text() - 1);
            onlodergetusersids()
        }

    }
    try {
        if (pagenames == "checkout") {
            load()
        }
       

    } catch (error) {
        
    }
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

    toast.error("item(s) have been deleted from your cart");

}

