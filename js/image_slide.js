   function hideallexcept(id) 
    { 
	      if((navigator.userAgent.match(/iPhone/i)) ||  (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)))
	         {
              document.getElementById('video').style.display = '';
                   var xmlhttp;
                       if (window.XMLHttpRequest) 
                              {
                                  xmlhttp = new XMLHttpRequest();
                              }
                           else 
                              {
                                 xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                              }
                        xmlhttp.onreadystatechange = function() 
						
                       {
                           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
                               {
                                 document.getElementById("video").innerHTML = xmlhttp.responseText;
                               }
                            else 
                                {
                                  document.getElementById("video").innerHTML = "<font color='#ff0000'>Wait........</font>";
                                }
                        }
						var val_id = btoa(id);
						xmlhttp.open("POST", "js/div2.asp?id=" + val_id, false);
                        xmlhttp.send();
						
	         }
			 
			 
			 
			 else
			 {
              document.getElementById('video').style.display = '';
                   var xmlhttp;
                       if (window.XMLHttpRequest) 
                              {
                                  xmlhttp = new XMLHttpRequest();
                              }
                           else 
                              {
                                 xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                              }
                        xmlhttp.onreadystatechange = function() 
						
                       {
                           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
                               {
                                 document.getElementById("video").innerHTML = xmlhttp.responseText;
                               }
                            else 
                                {
                                  document.getElementById("video").innerHTML = "<font color='#ff0000'>Wait........</font>";
                                }
                        }
						var val_id = btoa(id);
                        xmlhttp.open("POST", "js/div1.asp?id=" + val_id, false);
                        xmlhttp.send();
						
	         }
    }
	
function removeElement(id) 
{
  var element = document.getElementById(id);
  element.parentNode.removeChild(element);
}




var player = null;

function toggleShowHide1() 
{
    var el = document.getElementById('vddl');

   if ( el.style.display == 'none')
    {
        document.getElementById('ccatspan').style.color = "blue";
        document.getElementById('ccatspan').innerHTML = 'Hide Playlist';
        document.getElementById('ccatimage').src ='images/click1.png';
		el.style.display = 'block';
    }
    else
    {
		document.getElementById('ccatspan').style.color = "blue";
		document.getElementById('ccatspan').innerHTML = 'Other Parts';
		document.getElementById('ccatimage').src ='images/click.png';
		el.style.display = 'none';

    }

}
  


