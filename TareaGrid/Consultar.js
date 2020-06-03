function Consultar()
{
     $.ajax({                        
        type: "GET",                 
        url: 'ConsultaPhp.php',                     
        datatype:'json',
        success: function(json){
            var tabla = document.getElementById('body');
            
            for(var i = 0; i < json.length; i++){
                tabla.innerHTML +=`<tr>
                <td>${json[i].id}</td>
                <td>${json[i].nombre}</td>
                <td>${json[i].apellido}</td>
                <td>${json[i].correo}</td></tr>`;
            }
        }
    });
}

 