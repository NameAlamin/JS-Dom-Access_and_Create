        //Dom Access
        document.getElementById('inputid').value = "Change input For Dom Access Using js";
        document.getElementById('h2id').innerHTML = "Change h2 using js";
        document.getElementById('imgid').setAttribute('src','/img-4.jpg');

        // Dom Create
        var headingElement = document.createElement('h1');
        var paragraphElement = document.createElement('p');
        var imgElement = document.createElement('img');

        headingElement.innerHTML = "This is heading element For Dom Create";
        paragraphElement.innerHTML = "This is paragraph element";
        imgElement.setAttribute('src',"/img-4.jpg");
        imgElement.setAttribute('width',"300px");
        imgElement.setAttribute('height',"250px");

        document.getElementById('div_id').appendChild(headingElement);
        document.getElementById('div_id').appendChild(paragraphElement);
        document.getElementById('div_id').appendChild(imgElement);