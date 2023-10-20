
        var myNodelist = document.getElementsByTagName("LI");
        var i;
       for (i = 0; i < myNodelist.length; i++) {
       var span = document.createElement("SPAN");
       var txt = document.createTextNode("\u00D7");
       span.className = "close";
       span.appendChild(txt);
       myNodelist[i].appendChild(span);
     }

      var close = document.getElementsByClassName("close");
      var i;
      for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      }
     }
        function newElement() {

        var li = document.createElement("li");

        var inputValue = document.getElementById("inputtext").value;
        var t= document.createTextNode(inputValue);

        li.appendChild(t);

        if (inputValue === '') {
         alert("You must write something!");
       } else {
         document.getElementById("list").appendChild(li);
       }
       
        document.getElementById("inputtext").value = "";

        li.addEventListener('click', function(){
            li.style.textDecoration = "line-through";
        });

        // li.addEventListener('dblclick', function(){
        //     list.removeChild(li);
        // });
        
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
       }
  }