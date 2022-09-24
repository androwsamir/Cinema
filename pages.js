
var admins_names=["3AsFOUr","Andrew","Naryman","Esmail","Amin"];
var admins_password=["12345","23456","34567","45678","56789"];
var clints_names=["Ziad","Omnia","Alaa","Sara","Ma7me7o","Abo El3enen","7alwany","Shfeeq","Galal","Nabela"];
var clints_password=["00000","11111","22222","33333","44444","55555","66666","77777","88888","99999"];
var admins=5,clints=10;
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


var modal3= document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

if(document.getElementById("b_log").clicked == true){
  replaceButtonText('Login', 'Logout');
}

function search_admins()
{
    var username=document.getElementById("window-uname2").value;
    var password=document.getElementById("window-psw2").value;
    var here=0;
    var right=0;
    for(var i=0;i<admins;i++)
    {
        if(admins_names[i]==username)
        {
            here=1;
            if(admins_password[i]==password)
            {
                right=1;
                window.open('admin.html');
            }
        }
    }
    if(here==0)
    {
        for(var i=0;i<clints;i++)
    {
        if(clints_names[i]==username)
        {
            here=1;
            if(clints_password[i]==password)
            {
                right=1;
                window.open('Web_Project.html');

            }
        }
    }
    }
    if(here==0)
    {
      alert('check your name');
    }
    else if(right==0)
    {
      alert('check your password');
    }

}

function add_client() {
  var username=document.getElementById("window-uname2").value;
  var password=document.getElementById("window-psw2").value;
  clints_names.push(username);
  clints_password.push(password);
  window.open=('Web_Project.html');
}
