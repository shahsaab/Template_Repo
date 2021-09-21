var toprice = 0;
function Check(id, title, dec, price, img, qty) {


  const oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
  const idToUse = id;
  const existingItem = oldItems.find(ss => ss.id === idToUse && ss.user_id === ueres_id);
  if (existingItem) {
    Object.assign(existingItem, {
      'name': title,
      'quantity': existingItem.quantity + qty,
      'price': price,
      'dec': dec,
      'img': img,
      'user_id': ueres_id,
    })
  } else {
    const newItem = {
      'id': idToUse,
      'name': title,
      'quantity': qty,
      'price': price,
      'dec': dec,
      'img': img,
      'user_id': ueres_id,
    };
    oldItems.push(newItem);
  }

  localStorage.setItem('itemsArray', JSON.stringify(oldItems));
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

  toast.success("New item(s) have been added to your cart");

  items = localStorage.getItem("itemsArray");
  json = JSON.parse(items);
  const result = json.filter(ss => ss.user_id === ueres_id);
  var count = 0;
  toprice = 0;
  var student = '';
  $("#product_Addid div").remove();
    $("#product_Addid hr").remove();
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
        student += '<input type="number" class="qty form-control text-center" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57" oninput="this.value = Math.abs(this.value)" min="1"  maxlength="3" onkeyup="' + "cartpricechnage(this,'" + result[i].id + "'," + i + "," + result[i].price + ")" + '"' + 'onchange="' + "cartpricechnage(this,'" + result[i].id + "'," + i + "," + result[i].price + ")" + '" value="' + result[i].quantity + '">'
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



}
