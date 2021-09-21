var subdomain = SubDomain;
var siteid = SiteID;




function getusersids() {
    onlodergetusersids()
    
}
$(document).ready(function () {
    try {
        getusersids()
        
    } catch (error) {

    }
    try {
        sliderheroactive()
    } catch (error) {

    }
    // config file success load start
    try {

        $.ajax({
            url: Encryptionsuccess(),
            success: function () {

                checkoutsloadallows(AccessKey, subdomain);
                invoiceonloader();
                dashboardonloader();
                // track();
            }
        })
    }
    catch (error) {

    }
    // config file success load end
    try {
        $('#titlesnameallow').text(capitalizeFirstLetter(pagenames))
    } catch (error) {
        
    }



});
var AccessKey;

// config files allow start
function Encryptionsuccess() {
    AccessKey = Encryption(siteid, subdomain);
}
// config files allow end

// Create token encryption start

function Encryption(number, subdomain) {
    var key = CryptoJS.enc.Utf8.parse(subdomain.padStart(16, 'e'));
    var iv = CryptoJS.enc.Utf8.parse(subdomain.padStart(16, 'e'));
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(number), key,
        {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    return encrypted.toString();
}
// Create token encryption end




// Checkout onloader start
function checkoutsloadallows(acckey, domain) {
    try {
        if (pagenames == "checkout") {

            ouuid = generateUUID();


            console.log(ouuid);

            callcity(acckey, domain)

            load()
        }
    } catch (error) {

    }

}
// Checkout onloader End


// Invoice function start
function invoiceonloader() {
    try {
        if (pagenames == "invoice") {
            onloaderinvoice()
        }
    } catch (error) {

    }
}
// Invoice function end



// Dashboard function start
function dashboardonloader() {
    try {
        if (pagenames == "dashboard") {
            onloaderdashboard()
        }
    } catch (error) {

    }
}
// Dashboard function end

// tracking function start
function track() {
    try {
        if (pagenames == "track") {
            onloadertrack()
        }
    } catch (error) {

    }

}
// tracking function end


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}



function enforce_maxlength(event) {
    var t = event.target;
    if (t.hasAttribute('maxlength')) {
      t.value = t.value.slice(0, t.getAttribute('maxlength'));
    }
  }
  
  // Global Listener for anything with an maxlength attribute.
  // I put the listener on the body, put it on whatever.
  document.body.addEventListener('input', enforce_maxlength);


  function whatsapp(id,name)
{
  $('#whatsapp'+id).attr('href','https://api.whatsapp.com/send/?phone='+social_mobile+'&text=product url: '+window.location.origin+'products/'+id+' product name: '+name);
}