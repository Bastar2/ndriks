window.onload = function() {
    const numberWPP = 5492612083385;
    const requestURL = 'http://localhost/Proyectos/NAHUEL/listaBebidas.json';
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', requestURL);
    xhttp.responseType = 'json';
    xhttp.send();

    xhttp.onload = function() {
        let lista = xhttp.response;
        let indexCountBebidas = lista.length;
        let pagination =  (indexCountBebidas/9);
        let flag = 9;
        
        //PAGINATION LOAD
        $("#badgeCounter").hide();
        $("#containerDinks").show();
        $("#paginationNumber").show();
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
            
            if((i%9) == 0){
                let paginationContainer = document.createElement("div");
                paginationContainer.setAttribute("class", "row justify-content-md-center");
                paginationContainer.setAttribute("name", "paginationContainer");
                paginationContainer.setAttribute("id", "paginationContainer-"+(i/9));
                paginationContainer.innerHTML;
                
                divDinamycLaodBebidas.append(paginationContainer);
                auxiliarPagination = (i/9);
            };

            //CREATE CARD CONTAINER --> BEGING
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.classList.add("col-12");
            cardDiv.classList.add("m-3");
            cardDiv.classList.add("border-secondary");
            cardDiv.setAttribute("style", "max-width: 540px;")
            cardDiv.setAttribute("id","cardDinamyc-"+i);
            
            cardDiv.addEventListener("mouseover", function hover() {
                cardDiv.setAttribute("class","col-12 card m-3 bg-light");
                cardDiv.setAttribute("style", "max-width: 540px;");
            }, false);

            cardDiv.addEventListener("mouseout", function after() {
                cardDiv.setAttribute("class","col-12 card m-3 border-secondary");
                cardDiv.setAttribute("style", "max-width: 540px;");
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
            cardP1.innerHTML = "Precio Unidad: $"+price;

            cardP2.classList.add("card-text");
            cardP2.innerHTML = "Precio Cantidad: $"+priceCant+" (MNIMO "+cant+")";

            cardP3.classList.add("card-text");
            cardP3.setAttribute("id","cardDinamycP"+i);
            cardP3.innerHTML;

            document.getElementById("cardDinamycColBody-"+i).appendChild(cardH5);
            document.getElementById("cardDinamycColBody-"+i).appendChild(cardP1);
            document.getElementById("cardDinamycColBody-"+i).appendChild(cardP2);
            document.getElementById("cardDinamycColBody-"+i).appendChild(cardP3);

            let cardSmall = document.createElement("small");
            cardSmall.classList.add("text-muted");
            cardSmall.innerHTML = detalle;

            document.getElementById("cardDinamycP"+i).appendChild(cardSmall);

            //DIV CANTIDAD ROW
            let divCant = document.createElement("div");
            divCant.classList.add("input-group");
            divCant.classList.add("row");
            divCant.classList.add("p-3");
            divCant.classList.add("justify-content-md-center");
            divCant.setAttribute("id","cantUnidad-"+i);
             
            divCant.innerHTML;
            document.getElementById("cardDinamycColX-"+i).appendChild(divCant);

            //BUTTON LEFT
            let btnMenos = document.createElement("button");
            btnMenos.classList.add("class","btn");+
            btnMenos.classList.add("class","btn-outline-secondary");
            btnMenos.setAttribute("type","button");
            btnMenos.setAttribute("id","CantMasBtn-"+i);

            btnMenos.innerHTML = "<i class='fas fa-minus' style='font-size:36px;'></i>";
            document.getElementById("cantUnidad-"+i).appendChild(btnMenos);

            //INPUT NUMBER
            let divTextNumber = document.createElement("div");
            divTextNumber.classList.add("class","col-6");
            divTextNumber.classList.add("class","p-3");
            divTextNumber.classList.add("class","bg-light");
            divTextNumber.classList.add("class","text-dark");
            divTextNumber.classList.add("class","text-center");
            divTextNumber.setAttribute("id","cantNumber");

            divTextNumber.innerHTML = "0";
            document.getElementById("cantUnidad-"+i).appendChild(divTextNumber);
            //BUTTON RIGTH
            let btnMas = document.createElement("button");
            btnMas.classList.add("class","btn");+
            btnMas.classList.add("class","btn-outline-secondary");
            btnMas.setAttribute("type","button");
            btnMas.setAttribute("id","CantMasBtn-"+i);

            btnMas.innerHTML = "<i class='fas fa-plus' style='font-size:36px;'></i>";
            document.getElementById("cantUnidad-"+i).appendChild(btnMas);
            //CREATE CARD CONTENT --> END          
        }

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

        //SHOW BEBIDAS HIDE REST
        document.getElementById("drinks").addEventListener("click", 
            function showDriks() {
                $("#containerDinks").show();
                $("#containerPromotions").hide();
                $("#containerContacts").hide();
                $("#containerBtns").hide();
                $("#paginationNumber").show();
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
        });

    //FUNCION PAGINATION 
    setTimeout(() => {
        let nombrePage = $("div[name=paginationContainer]").length;

        showPage = function (pagination) {
        if (pagination < 0 || pagination >= nombrePage) return;

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

    //CARRITO
    
    //VACIAR CARRITO

    //MODAL ADD TO CARRITO
    
    //MODAL TEXT INFORMATION
    let mesaje = "";

    //SEND WPP MESAJE
    $("#WPP").click(function(){
        window.location.assign("https://wa.me/"+numberWPP+"/?text="+mesaje);
    });
   
};