var pagenames = "dashboard";
var u_id;

$(document).ready(function () {
  if (localStorage.getItem("gotrue.user") != null) {
    login = localStorage.getItem("gotrue.user");
    logins = JSON.parse(login);

    u_id = logins.id;

    console.log(logins)

  }
  else {
    window.location.href = window.location.origin + "/products";

  }
})
// u_id
var ord = '';





// Dashboard function start
function onloaderdashboard() {
  try {
    if (pagenames == "dashboard") {
      console.log(AccessKey)
      $.ajax({
        url: 'http://eratest.site:81/api/ECom/GetOrders?StartDate=2021-07-01&EndDate=2021-09-30&CustomerID=' + u_id,
        method: "GET",
        headers: {
          'SubDomain': subdomain,
          'AccessKey': AccessKey,
        },
        success: function (response) {


          var len = 0;
          if (JSON.parse(response) != null) {
            len = JSON.parse(response).length;
          }
          else (
            alert(JSON.parse(response).id)
          )
          if (len > 0) {
            // Read data and create <option >
            for (var i = 0; i < len; i++) {
              var datas = JSON.parse(response)[i];
              //   console.log(datas)
              ord += '<tr>';
              ord += '<td>' + datas.order_key + '</td>';
              ord += '<td>'+ Intl.NumberFormat().format(parseFloat(datas.total))  + '</td>';
              
              if(datas.Shipping_City !=null )
                {
                  ord += '<td>' + capitalizeFirstLetter(datas.Shipping_City)+ '</td>';
                }
                else{
                  ord += '<td>' + capitalizeFirstLetter(datas.Billing_City)+ '</td>';
                }

              ord += '<td>'+ capitalizeFirstLetter(datas.status)  + '</td>';
              ord += '<td>' + moment(datas.date_created).format('DD-MM-YYYY') + '</td>';
              ord += '<td><a href="' + window.location.origin + '/invoice/?orderid=' + datas.order_key + '" target="_blank" rel="noopener noreferrer">View</a></td>';


              $("#productorder tbody tr").remove();
              $('#productorder tbody').append(ord);


              // document.getElementById("abc").innerHTML = name;

            }
          }

        }
      });


    }
  } catch (error) {

  }
}
// Dashboard function end