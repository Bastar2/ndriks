window.onload = function() {
    const numberWPP = 5492612083385;
    const requestURL = '/lista';
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', requestURL);
    xhttp.responseType = 'json';
    xhttp.send();

    xhttp.onload = function() {
        const lista = xhttp.response;
        let indexCountBebidas = lista.length;
        let pagination =  (indexCountBebidas/10);
        
        //PAGINATION LOAD
        $("#containerDinks").show();
        $("#paginationNumber").show();
        $("#idToat").hide();
        let paginatioNumber = document.getElementById("paginationNumber");
        let arrowLeft = document.createElement("span");
        arrowLeft.setAttribute("class","page-item");
        arrowLeft.setAttribute("id","arrowLeft");
        arrowLeft.innerHTML;
        paginatioNumber.appendChild(arrowLeft);

        let arrowLeftA = document.createElement("a");
        arrowLeftA.setAttribute("class","page-link");
        arrowLeftA.setAttribute("href","#")
        arrowLeftA.setAttribute("aria-label","Previous");
        arrowLeftA.setAttribute("id", "arrowLeftA");
        arrowLeftA.innerHTML;
        document.getElementById("arrowLeft").appendChild(arrowLeftA);

        let arrowLeftSpan = document.createElement("span");
        arrowLeftSpan.setAttribute("aria-hidden","true");
        arrowLeftSpan.innerHTML =" &laquo;";
        document.getElementById("arrowLeftA").appendChild(arrowLeftSpan);
        
        paginatioNumber.appendChild(arrowLeft);
        if(pagination===.0){
            
            for(let i=0 ; i < pagination ; i++){
                let paginatioLi = document.createElement("li");
                paginatioLi.setAttribute("class","page-item");
                paginatioLi.setAttribute("id","pageLiNumber"+i);

                paginatioLi.innerHTML;
                paginatioNumber.appendChild(paginatioLi);

                let paginationA = document.createElement("a");
                paginationA.setAttribute("class","page-link");
                paginationA.setAttribute("href","#cardDinamyc-");
                paginationA.setAttribute("id","pageHrefNumber"+i);

                paginationA.innerHTML = (i+1);
                document.getElementById("pageLiNumber"+i).appendChild(paginationA);
            }
            
        }else{
            let paginatioNumber = document.getElementById("paginationNumber");
            for(let i=0 ; i <= pagination ; i++){
                let paginatioLi = document.createElement("li");
                paginatioLi.setAttribute("class","page-item");
                paginatioLi.setAttribute("id","pageLiNumber"+i);

                paginatioLi.innerHTML;
                paginatioNumber.appendChild(paginatioLi);

                let paginationA = document.createElement("a");
                paginationA.setAttribute("class","page-link");
                paginationA.setAttribute("href","#");
                paginationA.setAttribute("id","pageHrefNumber"+i);

                paginationA.innerHTML = (i+1);
                document.getElementById("pageLiNumber"+i).appendChild(paginationA);
            }
        }

        let arrowRight = document.createElement("span");
        arrowRight.setAttribute("class","page-item");
        arrowRight.setAttribute("id","arrowRight");
        arrowRight.innerHTML;
        paginatioNumber.appendChild(arrowRight);

        let arrowRightA = document.createElement("a");
        arrowRightA.setAttribute("class","page-link");
        arrowRightA.setAttribute("href","#")
        arrowRightA.setAttribute("aria-label","Next");
        arrowRightA.setAttribute("id", "arrowRightA");
        arrowRightA.innerHTML;
        document.getElementById("arrowRight").appendChild(arrowRightA);

        let arrowRightSpan = document.createElement("span");
        arrowRightSpan.setAttribute("aria-hidden","true");
        arrowRightSpan.innerHTML =" &raquo;";
        document.getElementById("arrowRightA").appendChild(arrowRightSpan);

        //DINAMIC CALL BY STOCK COUNT BEBIDAS
        let divDinamycLaodBebidas = document.getElementById("dinamyc-load-bebidas");
        let auxiliarPagination = 0;
        for (let i=0 ; i<indexCountBebidas ; i++){
            let name = lista[i].nombreProducto;
            let price = lista[i].unidadPrecio;
            let priceCant = lista[i].unidadPrecioBulto;
            let cant = lista[i].cantidadBulto;
            let detalle = lista[i].detalle;
            let srcImg = lista[i].src;
            
            if((i%10) == 0){
                let paginationContainer = document.createElement("div");
                paginationContainer.setAttribute("class", "row justify-content-md-center");
                paginationContainer.setAttribute("name", "paginationContainer");
                paginationContainer.setAttribute("id", "paginationContainer-"+(i/10));
                paginationContainer.innerHTML;
                
                divDinamycLaodBebidas.append(paginationContainer);
                auxiliarPagination = (i/10);
            };

            //CREATE CARD CONTAINER --> BEGING
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.classList.add("col-12");
            cardDiv.classList.add("m-3");
            cardDiv.classList.add("border-secondary");
            cardDiv.setAttribute("style", "max-width: 529px;")
            cardDiv.setAttribute("id","cardDinamyc-"+i);
            
            cardDiv.addEventListener("mouseover", function hover() {
                cardDiv.setAttribute("class","col-12 card m-3 bg-light");
                cardDiv.setAttribute("style", "max-width: 529px;");
            }, false);

            cardDiv.addEventListener("mouseout", function after() {
                cardDiv.setAttribute("class","col-12 card m-3 border-secondary");
                cardDiv.setAttribute("style", "max-width: 529px;");
            }, false);

            cardDiv.innerHTML;
            document.getElementById("paginationContainer-"+(auxiliarPagination)).appendChild(cardDiv);
            //CREATE CARD CONTAINER --> END
            
            //CREATE CARD ROW --> BEGING
            let cardDivRow =  document.createElement("div");
            cardDivRow.classList.add("row");
            cardDivRow.classList.add("no-gutters");
            cardDivRow.setAttribute("id","cardDinamycRow-"+i);

            cardDivRow.innerHTML;
            document.getElementById("cardDinamyc-"+i).appendChild(cardDivRow);
            //CREATE CARD ROW --> END

            //CREATE CARD COL --> BEGING
            let cardDivCol =  document.createElement("div");
            cardDivCol.classList.add("col-md-4");
            cardDivCol.setAttribute("id","cardDinamycCol-"+i);

            cardDivCol.innerHTML;
            document.getElementById("cardDinamycRow-"+i).appendChild(cardDivCol);
            //CREATE CARD COL --> END
            
            //CREATE CARD IMG --> BEGING
            let cardImg =  document.createElement("img");
            cardImg.classList.add("card-img");
            cardImg.classList.add("mt-3");
            cardImg.classList.add("mb-3");
            cardImg.classList.add("img-fluid");
            cardImg.setAttribute("style"," height: auto;");
            if(srcImg){
                cardImg.setAttribute("src",srcImg);
            }else{
                cardImg.setAttribute("src","img/icoDefault.png");
            }
            cardImg.setAttribute("alt","...");
            
            cardImg.innerHTML;
            document.getElementById("cardDinamycCol-"+i).appendChild(cardImg);
            //CREATE CARD IMG --> END
            
            //CREATE CARD COL --> BEGING
            let cardDivColX =  document.createElement("div");
            cardDivColX.classList.add("col-md-8");
            cardDivColX.setAttribute("id","cardDinamycColX-"+i);

            cardDivColX.innerHTML;
            document.getElementById("cardDinamycRow-"+i).appendChild(cardDivColX);
            //CREATE CARD COL --> END

            
            //CREATE CARD BODY --> BEGING
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            cardBody.classList.add("text-secondary");
            cardBody.setAttribute("id","cardDinamycColBody-"+i);

            cardBody.innerHTML;
            document.getElementById("cardDinamycColX-"+i).appendChild(cardBody);
            //CREATE CARD BODY --> END

            //CREAtE CARD CONTENT --> BEGING
            let cardH5 = document.createElement("h5");
            let cardP1 = document.createElement("p");
            let cardP2 = document.createElement("p");
            let cardP3 = document.createElement("p");

            cardH5.classList.add("card-title");
            cardH5.innerHTML = name;

            cardP1.classList.add("card-text");
            cardP1.innerHTML = "Precio Unidad: &#x20B1;"+price;

            cardP2.classList.add("card-text");
            cardP2.innerHTML = "Precio Cantidad: &#x20B1;"+priceCant+" (MNIMO "+cant+")";

            cardP3.classList.add("card-text");
            cardP3.setAttribute("id","cardDinamycP"+i);
            cardP3.innerHTML;

            document.getElementById("cardDinamycColBody-"+i).appendChild(cardH5);
            document.getElementById("cardDinamycColBody-"+i).appendChild(cardP1);
            document.getElementById("cardDinamycColBody-"+i).appendChild(cardP2);
            document.getElementById("cardDinamycColBody-"+i).appendChild(cardP3);

            let cardSmall = document.createElement("small");
            cardSmall.classList.add("text-muted");
            cardSmall.classList.add("m-3");
            cardSmall.innerHTML = detalle;

            document.getElementById("cardDinamycP"+i).appendChild(cardSmall);

            //BUTTON ADD CARRITO
            let btnAddCarrito = document.createElement("button");
            btnAddCarrito.classList.add("btn", "btn-outline-dark", "float-right", "mb-3");
            btnAddCarrito.setAttribute("marcador",(i+1))
            btnAddCarrito.setAttribute("type","button");
            btnAddCarrito.addEventListener("click", addCarrito);
            
            btnAddCarrito.innerHTML = "<i class='fas fa-plus' 'style='font-size:36px;'></i>";
            document.getElementById("cardDinamycP"+i).appendChild(btnAddCarrito);        
        }
        
        //CARRITO
        let carrito = [];
        let total = 0;
        //ADD TO CARRITO
        function addCarrito(){
            carrito.push(this.getAttribute('marcador'));

            calcularTotal();
            renderizarCarrito();
        };

        function renderizarCarrito() {
            document.getElementById("carrito").textContent = '';
            let carritoSinDuplicados = [...new Set(carrito)];

            // Generamos los Nodos a partir de carrito
            carritoSinDuplicados.forEach(function (item, indice) {
                // Obtenemos el item que necesitamos de la variable base de datos
                let miItem = lista.filter(function(itemLista) {
                    return itemLista['id'] == item;
                });
                // Cuenta el número de veces que se repite el producto
                let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                    return itemId === item ? total += 1 : total;
                }, 0);
                // Creamos el nodo del item del carrito
                let miNodo = document.createElement('li');
                miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                
                if(numeroUnidadesItem >= miItem[0]['cantidadBulto']){
                    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombreProducto']} - ${miItem[0]['unidadPrecioBulto']} ₱`;
                }else {
                    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombreProducto']} - ${miItem[0]['unidadPrecio']} ₱`;
                }

                //Button rest
                let miBotonRest = document.createElement('button');
                miBotonRest.classList.add('btn', 'btn-outline-dark', 'ml-5', 'mr-3');
                miBotonRest.setAttribute("id","btnListRest");
                miBotonRest.setAttribute('itemRest', item);
                miBotonRest.innerHTML = "<i class='fas fa-minus' 'style='font-size:36px;'></i>";
                miBotonRest.style.marginLeft = '1rem';
                miBotonRest.addEventListener('click', restItemCarrito);
                miNodo.appendChild(miBotonRest);
                document.getElementById("carrito").appendChild(miNodo);

                //Button clean
                let miBoton = document.createElement('button');
                miBoton.classList.add('btn', 'btn-outline-danger', 'mx-2');
                miBoton.setAttribute("id","btnList");
                miBoton.setAttribute('item', item);
                miBoton.innerHTML = "<i class='fas fa-times' 'style='font-size:36px;'></i>";
                miBoton.style.marginLeft = '1rem';
                miBoton.addEventListener('click', borrarItemCarrito);
                miNodo.appendChild(miBoton);
                document.getElementById("carrito").appendChild(miNodo);


            })
            let badgeTop = document.getElementById("badgeTop");
            badgeTop.textContent = carrito.length;
            let badge = document.getElementById("badge");
            badge.textContent = carrito.length;
        }

        //Rest element
        function restItemCarrito(){
            let id = this.getAttribute('itemRest');
            for(let i=0 ; i < carrito.length ; i++){
                if(carrito[i] === id){
                    carrito.splice(i,1);
                    break;
                }  
            }
            renderizarCarrito();
            calcularTotal();
        }
        //DELET ITEM
        function borrarItemCarrito() {
            let id = this.getAttribute('item');
            carrito = carrito.filter(function (carritoId) {
                return carritoId !== id;
            });
            renderizarCarrito();
            calcularTotal();
        }
        
        //TOTAL CARRITO
        function calcularTotal() {
            total = 0;
            carrito.forEach(function (item, indice) {
            // Obtenemos el item que necesitamos de la variable base de datos
            let miItem = lista.filter(function(itemLista) {
                return itemLista['id'] == item;
            });
            // Cuenta el número de veces que se repite el producto
            let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);
            if(numeroUnidadesItem >= miItem[0]['cantidadBulto']){
                total += miItem[0]['unidadPrecioBulto'];
            }else{
                total += miItem[0]['unidadPrecio'];
            }
            });
            let totalDosDecimales = total.toFixed(2);
            document.getElementById("total").textContent = totalDosDecimales;
        }
        //VACIAR CARRITO
        function vaciarCarrito() {
            carrito = [];
            renderizarCarrito();
            calcularTotal();
        }

        // Eventos
        document.getElementById("boton-vaciar").addEventListener('click', vaciarCarrito);
        
        //SHOW BEBIDAS HIDE REST
        document.getElementById("drinks").addEventListener("click", 
            function showDriks() {
                $("#containerDinks").show();
                $("#containerPromotions").hide();
                $("#containerContacts").hide();
                $("#containerBtns").hide();
                $("#paginationNumber").show();
                $("#idCarrito").show();
            }
        );

        //SHOW PROMOCIONES HIDE REST
        document.getElementById("promotions").addEventListener("click", 
            function showDriks() {
                $("#containerDinks").hide();
                $("#containerPromotions").show();
                $("#containerContacts").hide();
                $("#containerBtns").hide();
                $("#paginationNumber").hide();
                $("#idCarrito").show();
            }
        );

        //SHOW CONTACTS HIDE REST
            document.getElementById("contact").addEventListener("click", 
            function showDriks() {
                $("#containerDinks").hide();
                $("#containerPromotions").hide();
                $("#containerContacts").show();
                $("#containerBtns").hide();
                $("#paginationNumber").hide();
                $("#idCarrito").hide();
            }
        );
    }

    //NAV BAR ICON AND NAME
        $(".navbar-brand").click(function(){
            $("#containerDinks").show();
            $("#containerPromotions").hide();
            $("#containerContacts").hide();
            $("#containerBtns").hide();
            $("#paginationNumber").show();
            $("#idCarrito").show();
        });

    //FUNCION PAGINATION 
    setTimeout(() => {
        let numberPage = $("div[name=paginationContainer]").length;

        showPage = function (pagination) {
        rederPaginationRedudce(pagination,numberPage);
        if (pagination < 0 || pagination >= numberPage) return;

        $("div[name=paginationContainer]").hide().eq(pagination).show();
        $("#paginationNumber li").removeClass("active").eq(pagination).addClass("active");
        };    

        //GO TO LEFT
        $("#arrowLeft").click(function () {
            showPage($("#paginationNumber .active").index() -2);
        });

        //GO TO RIGTH
        $("#arrowRight").click(function () {
            showPage($("#paginationNumber .active").index());
        });

        //GO TO ELEMENT
        $("#paginationNumber li").click(function (e) {
            e.preventDefault();
            showPage($(this).index()-1);
        });

        showPage(0);
    }, 500);
    
    //MODAL TEXT INFORMATION
    document.getElementById("boton-pedir").addEventListener("click", function(){
        let cantCarrito = parseInt( document.getElementById("badge").innerHTML );
         if(cantCarrito === 0){
            $("#idToat").show();
            $('.toast').toast('show');
            setTimeout(() => {
                $("#idToat").hide();
            },1000);
        }else{
            $('#staticBackdrop').modal('show');   
        }
    })
    
    //MODAL PEDIR
    document.getElementById("pedir").addEventListener("click", function(){
        let text = "";
        let name = document.getElementById("name").value;
        let location = document.getElementById("location").value;
        let adress = document.getElementById("adress").value;
        let money = document.getElementById("money").value;
        let comment = document.getElementById("comment").value
        let total = document.getElementById("total").innerHTML;
        let totalDelivery = 50 + parseInt(total);

        let listUl = document.getElementById("carrito");
        let listLi = listUl.getElementsByTagName("li");
        let listText = "";

        if(total === ""){ total = 0.00;}
        let boolMoney = validationMoney(parseInt(money),parseInt(total));
        let boolName = validationName(name);
        let boolLocation = validationLocation(location);
        let boolAdress = validationAdress(adress);

        for(let i=0; i<listLi.length; i++){
            listText += listLi[i].textContent;
            listText += "%0A";
   
        };

        text = name + " con direccion en: "+adress+" - "+location+"."+"%0A"+"Paga con : "+money+"."+"%0A"+listText+"%0A"+"COMENTARIOS : "+comment+"%0A%0A"+"Total Pedido: "+totalDelivery;
        encodeURI(text);
        if(boolMoney && boolName && boolLocation && boolAdress){
            window.location.assign("https://wa.me/"+numberWPP+"/?text="+text);
        }


    });
 /*
     //DINAMIC CALL BY STOCK COUNT PROMOCIONES
     $("#containerPromotions").hide();
     let divDinamycLaodPromociones = document.getElementById("dinamyc-load-promociones");
     let indexCountPromociones = 15;
     for (let i=0 ; i<indexCountPromociones ; i++){
         //CREATE CARD CONTAINER --> BEGING
         let cardDiv = document.createElement("div");
         cardDiv.classList.add("card");
         cardDiv.classList.add("m-3");
         cardDiv.classList.add("border-success");
         cardDiv.classList.add("text-success");
         cardDiv.setAttribute("style", "max-width: 540px;")
         cardDiv.setAttribute("id","cardDinamycPromociones-"+i);

         cardDiv.addEventListener("mouseover", function hover() {
             cardDiv.setAttribute("class","card m-3  bg-success text-white");
             cardDiv.setAttribute("style", "max-width: 540px;");
         }, false);

         cardDiv.addEventListener("mouseout", function after() {
             cardDiv.setAttribute("class","card m-3 border-success text-success");
             cardDiv.setAttribute("style", "max-width: 540px;");
         }, false);
         
         cardDiv.innerHTML;
         divDinamycLaodPromociones.appendChild(cardDiv);
         //CREATE CARD CONTAINER --> END

         //CREATE CARD ROW --> BEGING
         let cardDivRow =  document.createElement("div");
         cardDivRow.classList.add("row");
         cardDivRow.classList.add("no-gutters");
         cardDivRow.setAttribute("id","cardDinamycRowPromociones-"+i);

         cardDivRow.innerHTML;
         document.getElementById("cardDinamycPromociones-"+i).appendChild(cardDivRow);
         //CREATE CARD ROW --> END

         //CREATE CARD COL --> BEGING
         let cardDivCol =  document.createElement("div");
         cardDivCol.classList.add("col-md-4");
         cardDivCol.setAttribute("id","cardDinamycColPromociones-"+i);
         cardDivCol.innerHTML;
         document.getElementById("cardDinamycRowPromociones-"+i).appendChild(cardDivCol);
         //CREATE CARD COL --> END
         
         //CREATE CARD IMG --> BEGING
         let cardImg =  document.createElement("img");
         cardImg.classList.add("card-img");
         cardImg.setAttribute("src","");
         cardImg.setAttribute("alt","...");
         
         cardImg.innerHTML;
         document.getElementById("cardDinamycColPromociones-"+i).appendChild(cardImg);
         //CREATE CARD IMG --> END
         
         //CREATE CARD COL --> BEGING
         let cardDivColX =  document.createElement("div");
         cardDivColX.classList.add("col-md-8");
         cardDivColX.setAttribute("id","cardDinamycColXPromociones-"+i);

         cardDivColX.innerHTML;
         document.getElementById("cardDinamycRowPromociones-"+i).appendChild(cardDivColX);
         //CREATE CARD COL --> END

         
         //CREATE CARD BODY --> BEGING
         let cardBody = document.createElement("div");
         cardBody.classList.add("card-body");
         cardBody.setAttribute("id","cardDinamycColBodyPromociones-"+i);

         cardBody.innerHTML;
         document.getElementById("cardDinamycColXPromociones-"+i).appendChild(cardBody);
         //CREATE CARD BODY --> END

         //CREAtE CARD CONTENT --> BEGING
         let cardH5 = document.createElement("h5");
         let cardP1 = document.createElement("p");
         let cardP2 = document.createElement("p");

         cardH5.classList.add("card-title");
         cardH5.innerHTML = "THE TITLE CARD";

         cardP1.classList.add("card-text");
         cardP1.innerHTML = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";

         cardP2.classList.add("card-text");
         cardP2.setAttribute("id","cardDinamycPromociones"+i);
         cardP2.innerHTML;

         document.getElementById("cardDinamycColBodyPromociones-"+i).appendChild(cardH5);
         document.getElementById("cardDinamycColBodyPromociones-"+i).appendChild(cardP1);
         document.getElementById("cardDinamycColBodyPromociones-"+i).appendChild(cardP2);

         let cardSmall = document.createElement("small");
         cardSmall.classList.add("text-muted");
         cardSmall.innerHTML = "Last updated 3 mins ago";

         document.getElementById("cardDinamycPromociones"+i).appendChild(cardSmall);
         //CREAtE CARD CONTENT --> END
     }
    */
     let falgAlertMoney=0;
     function validationMoney(money,total){
        document.getElementById("money").setAttribute("min",(total+50));
        if(money>=(total+50)){
            $("#alertMoney").hide();
            return true;
        }else{
            if(falgAlertMoney===0){
            let alert = document.createElement("div");
            alert.classList.add("alert", "alert-danger", "alert-dismissible", "fade", "show");
            alert.setAttribute("role","alert");
            alert.setAttribute("id","alertMoney");
            alert.innerHTML = "El valor tiene que ser igual o mayor...";
            document.getElementById("divMoney").append(alert);

            falgAlertMoney++;
            }
            $("#alertMoney").show();
            return false;
        }
    }

    let flagAlertName=0;
    function validationName(name){
       if(name !== "" && name.length>3){
           $("#alertName").hide();
           return true;
       }else{
           if(flagAlertName===0){
           let alert = document.createElement("div");
           alert.classList.add("alert", "alert-danger", "alert-dismissible", "fade", "show");
           alert.setAttribute("role","alert");
           alert.setAttribute("id","alertName");
           alert.innerHTML = "Campo obligatorio...";
           document.getElementById("divName").append(alert);

           flagAlertName++;
           }
           $("#alertName").show();
           return false;
       }
   }

   let flagAlertLocation=0;
   function validationLocation(location){
      if(location !== "" && location.length>3){
          $("#alertLocation").hide();
          return true;
      }else{
          if(flagAlertLocation===0){
          let alert = document.createElement("div");
          alert.classList.add("alert", "alert-danger", "alert-dismissible", "fade", "show");
          alert.setAttribute("role","alert");
          alert.setAttribute("id","alertLocation");
          alert.innerHTML = "Campo obligatorio...";
          document.getElementById("divLocation").append(alert);

          flagAlertLocation++;
          }
          $("#alertLocation").show();
          return false;
      }
  }

  let flagAlertAdress=0;
  function validationAdress(adress){
     if(adress !== "" && adress.length>3){
         $("#alertAdress").hide();
         return true;
     }else{
         if(flagAlertAdress===0){
         let alert = document.createElement("div");
         alert.classList.add("alert", "alert-danger", "fade", "show");
         alert.setAttribute("role","alert");
         alert.setAttribute("id","alertAdress");
         alert.innerHTML = "Campo obligatorio...";
         document.getElementById("divAdress").append(alert);

         flagAlertAdress++;
         }
         $("#alertAdress").show();
         return false;
     }
 }
    function rederPaginationRedudce(activeItem,maxItem){
        let indexOfFirst = activeItem-3;
        let indexOfLast = activeItem+3;
        $("#paginationNumber li").each(function(index){
            if(index > indexOfFirst &&  index < indexOfLast){
                $("#paginationNumber li").eq(index).show();
            }else{
                if( (index === 0) || (index === maxItem-1)){
                    $("#paginationNumber li").eq(index).show();
                }else{
                    $("#paginationNumber li").eq(index).hide();
                }
            }
        });
    };
    
};