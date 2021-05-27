function separarCedulas(valor) {
    if (valor <=0) {console.log("inválido")} 

    var total = valor
    var cedula = 200
    var totalCedula = 0 

    while (true) {
        if (total >= cedula) {
            total = total - cedula 
            totalCedula = totalCedula + 1   
        }
        if (totalCedula > 0){
            console.log (`${totalCedula} cédulas(s) de R$${cedula}`)}

           else if (total < cedula && cedula == 200) {cedula = 100}
                 
               else if (total < cedula && cedula == 100) {cedula = 50}
                    
                   else if (total < cedula && cedula == 50) {cedula = 20}
                    
                       else if (total < cedula && cedula == 20) {cedula = 10}

                           else if (total < cedula && cedula == 10) {cedula = 5}

                                else if (total < cedula && cedula == 5) {cedula = 2}
                        
                                    else if (total < cedula && cedula <= 1) {break}
        
        totalCedula = 0 
                                

    
        }
    }

