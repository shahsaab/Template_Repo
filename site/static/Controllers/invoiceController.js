var pagenames = "invoice"
var orderid;
var u_id;
var email;
if(localStorage.getItem("gotrue.user")!=null){
login = localStorage.getItem("gotrue.user");
logins = JSON.parse(login);

u_id = logins.id;
email = logins.email;
console.log(logins)

}
else{
window.location.href = window.location.origin+"/";

}
function backproductpage()
{
window.location.href = window.location.origin+"/";
}




var username;
  var address;
  var city;
  var province;




var url_string = window.location.href
var url = new URL(url_string);
var orderid = url.searchParams.get("orderid");
console.log(orderid);
// document.getElementById('inno').innerText = 'abc';
// $("#inno").append('abc');
$("#emails").append(email);
$("#innoooo").append("&nbsp;"+orderid);



// + orderid
// ,'+datas[0].Shipping_State+'
var ord = '';
toprice = 0;



// Invoice function start
function onloaderinvoice()
{
    try {
        if (pagenames == "invoice") {
       
    $.ajax({
    url: 'http://eratest.site:81/api/ECom/GetOrdersDetail?EOrderID='+orderid,
    method: "GET",
                headers: {
                'SubDomain': subdomain,
                'AccessKey': AccessKey,
                },
    success: function(response){
      console.log(JSON.parse(response))
      var datas = JSON.parse(response).Table;
      // console.log(datas[0]);
      if(datas[0].Shipping_Name !=null)
      {
        $('#changesaddressnames').text("Shipping address");
        $("#name").append(datas[0].Shipping_Name);
        var charges = datas[0].Delivery_Charges;
        $("#address").append(datas[0].Shipping_Address+'<br><br> '+datas[0].Shipping_City+'<br><br> '+datas[0].Shipping_Country);
        $('#orderdate').append("&nbsp;"+datas[0].CreatedAt)
      }
      else{
        $('#changesaddressnames').text("Billing address");
        $("#name").append(datas[0].Billing_Name);
        var charges = datas[0].Delivery_Charges;
        $("#address").append(datas[0].Billing_Address+'<br><br> '+datas[0].Billing_City+'<br><br> '+datas[0].Billing_Country);
        $('#orderdate').append("&nbsp;"+datas[0].CreatedAt)
      }
      $('#phonenumberid').text(datas[0].Billing_Contact)
     
        var productdats = JSON.parse(response).Table1;
      // console.log(productdats)
        var len = 0;
        if(productdats != null){
          len = productdats.length;
        }
        else(
            alert(response.id)
        )
        if(len > 0){
           
          for(var i=0; i<len; i++){

            fottor = '<ul class="snipcart-cart-summary-items-list snipcart-scrollbar"><li class="snipcart-cart-summary-expanded-item"><div><span class="snipcart-cart-summary-expanded-item__name snipcart__font--secondary snipcart__font--regular">'+productdats[i].Name+'</span><ul class="snipcart-cart-summary-expanded-item__custom-fields"></ul></div><div class="snipcart-cart-summary-expanded-item--secondary snipcart-cart-summary-expanded-item__quantity">Qty: '+productdats[i].quantity+' </div><div class="snipcart-cart-summary-expanded-item--secondary snipcart-cart-summary-expanded-item__price snipcart__font--secondary snipcart__font--bold">PKR&nbsp;'+productdats[i].price+' </div></li></ul>';

                $('#orderproduct').append(fottor);
                var price = parseFloat(productdats[i].price * productdats[i].quantity)
                toprice = parseFloat(toprice + price);
                // alert(price)
            
            // document.getElementById("abc").innerHTML = name;
           
          }
          
          $("#subtotal").append('PKR&nbsp;' +  new Intl.NumberFormat().format(parseFloat(toprice)));
            $("#pricetotal").append('PKR&nbsp;' + new Intl.NumberFormat().format(parseFloat(charges+toprice)));
            $("#delivery_charges").append('PKR&nbsp;' + charges);
            
        }

      }
 });
}
} catch (error) {
    
}
}

// Invoice function end