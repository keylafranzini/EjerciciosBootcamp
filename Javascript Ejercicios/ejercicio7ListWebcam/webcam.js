function makeRequest(){
    let httpRequest = new XMLHttpRequest(); 

    function handleResponse(response) {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                // con este let lo convierto en un array
                let typeWebcam = JSON.parse(httpRequest.responseText);

            // para cada webcam creo un tr y lo inserto en una tabla

            // luego creamos un for donde recorren todos los tipos de webcam que estan dentro de la tabla
                for (let i = 0; i < typeWebcam.length; i++) {
                    let webcam = typeWebcam[i];
                    let fila = document.createElement('tr');
                    let celda1 = document.createElement('td');
                    let celda2 = document.createElement('td');
                    let celda3 = document.createElement('td');
                    let celda4 = document.createElement('td');
                    let celda5 = document.createElement('td');
                    let video = document.createElement('a');

                    celda1.innerText = webcam.latitude;
                    celda2.appendChild(video);
                    celda3.innerText = webcam.type;
                    celda4.innerText = webcam.name;
                    celda5.innerText = webcam.longitude;
                    video.href = webcam.url;
                    video.innerText = "Click on here";
                    video.target = "_blank";
                    
 
                    fila.appendChild(celda1);
                    fila.appendChild(celda2);
                    fila.appendChild(celda3);
                    fila.appendChild(celda4);
                    fila.appendChild(celda5);

                    let tableBody = document.querySelector(".table-body");
                    tableBody.appendChild(fila);
                }
                
            } else {
                alert("There was an error");
            }
        }
    }

    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open('GET','https://api.oceandrivers.com/v1.0/getWebCams/');
    httpRequest.send();
}

makeRequest();