const elBoss = {

    nombre: "Jose Luis",
    edad: 194,
    poderes: [
        {
            nombre: "Paranoia",
            description: "intentandome escapar de esta paranoia",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen de la paranoia"
                    }
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen de la paranoia"
                    }
                }
            ]
        },
        {
            nombre: "Petrificasió",
            description: "Te mira y te petrifica",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen de la petrificasió"
                    },
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen de la petrificasió"
                    }
                }   
            ]
        },
        {
            nombre: "Fuego",
            description: "Pues eso, fuego",
            imagenes: [
                {
                    imagen: {
                       url: "has conseguido acceder a la primera imagen del fueguito"
                    }
                },
                {
                    imagen: {
                        url: "has conseguido acceder a la segunda imagen del fueguito"
                    }
                } 
            ]
        }
    ],
    familiares: [
        {
            nombre: "Julian",
            edad: 342,
            parentesco: "Primo"
        },
        {
            nombre: "Paquito",
            edad: 312,
            parentesco: "Tío"
        },
        {
            nombre: "Emma",
            edad: 13,
            parentesco: "Sobrina"
        },
        {
            nombre: "Julia",
            edad: 100,
            parentesco: "Hermana"
        }
    ],
    reto: [
        [
            {
                sigueElReto: [
                    {
                        sigueElReto2: {
                            sigueElReto3: {
                                pareceQueSabesBucearEntreObjetos: {
                                    definitivamenteSabes: [
                                        "Jose",
                                        "Luis,",
                                        "te",
                                        "miro",
                                        "y",
                                        23121,
                                        "te",
                                        "destruyo",
                                        {
                                            mensajeFinal: "Enhorabuena!, si has llegado hasta aquí te costará mucho menos tratar los datos de la pokeapi en el proyecto final de JavaScript!"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                ]
            }
        ]
    ]
}
 
//1
//console.log(elBoss.nombre + ", te conozco y no me das ningún miedo!" );



//2 
//console.log(elBoss.nombre + " conozco tus poderes y lo que hacen!");



//3
//console.log(elBoss.poderes);
    //  for (let i = 0; i < elBoss.poderes.length ; i++) {
    //      const poder = elBoss.poderes[i]
    //     console.log(`tu ${i+1}º poder es  ${poder.nombre}  y hace   ${poder.description}` );
    //      }     
        // 4                                                                                 //// elBoss comiendo plomooo!!!!
        //     for (let i = 0; i < elBoss.familiares.length ; i++) {
        //     const primomuerto = elBoss.familiares[i]  
        //     console.log( `También se tu punto más debil, tus familiares, y les conozco...
        //      conozco a tu ${primomuerto.nombre} ${primomuerto.parentesco}
        //      y es un@ fecas`);
        //   }

        // 5
//      for (let i = 0; i < elBoss.reto.length; i++) {
//         const retaco = elBoss.reto[i];
        
//         for (let er = 0; er < retaco[0].sigueElReto.length; er++) {
//             const element = retaco[0].sigueElReto[er];
//            const frase= element.sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes;
//            console.log(frase[0],frase[1],frase[2],frase[3],frase[4],frase[6],frase[7]+ "jedePETE!");
//            console.log(frase[8].mensajeFinal);
         
        
//      }
//   }

         ////      BONUS         /////

         //1.IMAGENES DE LOS PODERES
        // for (let i = 0; i< elBoss.poderes.length; i++) {
        //   const element = elBoss.poderes[i];
          
        //    for (let e = 0; e < element.imagenes.length; e++) {
        //     const elemento = element.imagenes[e];
            
        //        console.log(elemento.imagen.url);
        //    }
        // }
        // 2. EDAD MEDIA DE LOS FAMILIARES
        // let suma =0
        // let sumatorio = []
        // let cont =0
        // for (let i = 0; i < elBoss.familiares.length; i++) {
        //     const element = elBoss.familiares[i];
        //     suma += element.edad           
        //     sumatorio.push(suma)
        //     cont++
        //     console.log(suma/cont);
        // }


        /// MENSAJE FINAL    ///

        for (let i = 0; i < elBoss.reto.length; i++) {
                    const retaco = elBoss.reto[i];
                 
                for (let er = 0; er < retaco[0].sigueElReto.length; er++) {
                         const element = retaco[0].sigueElReto[er];
                        const frase= element.sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes;
                        console.log(frase[8].mensajeFinal);
        
                }}
// EJERCICIO

// tenemos un objeto llamado elBoss, como hemos visto en clase con ejemplos muy sencillitos
// podemos recorrer arrays... bucear entre objetos... y tratar datos.
// Lo que tendrás que hacer a continuación solo es complicar un poco más lo que hemos visto antes,
// pero por mucho que te pueda asustar elBoss, es lo mismo!

// Requisitos para matar a elBoss

// vamos a imaginarnos que vamos a hablar con el mediante console.logs, cada vez que pongamos
// un console.log será como hablar con el.

// entonces: // le vamos a decir = console.log()
// 1: le vamos a decir "{su nombre}, te conozco y no me das ningún miedo!"; HECHO
// 2: le vamos a decir "conozco tus poderes y lo que hacen!"HECHO
// 3: le vamos a decir "tu primer poder es {su primer poder} y hace {la descripción de su poder}"
//"tu segundo poder es {su segundo poder} y hace {la descripción de su poder}"
//"tu tercero poder es {su tercero poder} y hace {la descripción de su poder}" HECHO
// 4: le vamos a decir "También se tu punto más debil, tus familiares, y les conozco..."
// "conozco a tu {parentesco del primer familiar} {nombre del primer familiar}"
// "conozco a tu {parentesco del segundo familiar} {nombre del segundo familiar}"
// "conozco a tu {parentesco del tercero familiar} {nombre del tercero familiar}"
// "y conozco a tu {parentesco del cuarto familiar} {nombre del cuarto familiar}" HECHO
// 5: para matarlo tendrás que superar el reto y para ello tendrás que decirle las palabras
// mágicas para que el mensaje quede tal que así "Jose luis, te miro y te destruyo". MUERTOOOOO MUERTISIMO

// Por último, como bonus, mostraremos por pantalla las urls de todas las imágenes de los poderes. HECHO

// haremos la media de las edades de los familiares de elBoss. HECHO

// y mostraremos por pantalla el mensajeFinal.              HECHO