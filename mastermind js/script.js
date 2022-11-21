let code1 = Math.floor(Math.random() * 4) + 1;
let code2 = Math.floor(Math.random() * 4) + 1;
let code3 = Math.floor(Math.random() * 4) + 1;
let code4 = Math.floor(Math.random() * 4) + 1;
let proposition1;
let proposition2;
let proposition3;
let proposition4;
let couleurcercle = ["red","yellow","blue","green"];
let code = [code1,code2,code3,code4];
let propositioncode = [proposition1,proposition2,proposition3,proposition4];
let bienplace = 0;
let malplace = 0;
alert(code);

    function manche1(){
    proposition1 = parseInt(document.getElementById('IDproposition1').value);
    proposition2 = parseInt(document.getElementById('IDproposition2').value); 
    proposition3 = parseInt(document.getElementById('IDproposition3').value);
    proposition4 = parseInt(document.getElementById('IDproposition4').value);
    document.getElementById('IDcercle1_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
    document.getElementById('IDcercle1_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
    document.getElementById('IDcercle1_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
    document.getElementById('IDcercle1_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
    proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="w-100 h-100">';
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche2()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
    }

    function manche2(){
        bienplace = 0 ;
        malplace = 0 ;
        proposition1 = parseInt(document.getElementById('IDproposition1').value);
        proposition2 = parseInt(document.getElementById('IDproposition2').value); 
        proposition3 = parseInt(document.getElementById('IDproposition3').value);
        proposition4 = parseInt(document.getElementById('IDproposition4').value);
        document.getElementById('IDcercle2_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
        document.getElementById('IDcercle2_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
        document.getElementById('IDcercle2_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
        document.getElementById('IDcercle2_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
        proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">'
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche3()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
        }

        function manche3(){
            bienplace = 0 ;
            malplace = 0 ;
            proposition1 = parseInt(document.getElementById('IDproposition1').value);
            proposition2 = parseInt(document.getElementById('IDproposition2').value); 
            proposition3 = parseInt(document.getElementById('IDproposition3').value);
            proposition4 = parseInt(document.getElementById('IDproposition4').value);
            document.getElementById('IDcercle3_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
            document.getElementById('IDcercle3_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
            document.getElementById('IDcercle3_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
            document.getElementById('IDcercle3_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
            proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">'
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche4()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
            }

            function manche4(){
                bienplace = 0 ;
                malplace = 0 ;
                proposition1 = parseInt(document.getElementById('IDproposition1').value);
                proposition2 = parseInt(document.getElementById('IDproposition2').value); 
                proposition3 = parseInt(document.getElementById('IDproposition3').value);
                proposition4 = parseInt(document.getElementById('IDproposition4').value);
                document.getElementById('IDcercle4_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
                document.getElementById('IDcercle4_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
                document.getElementById('IDcercle4_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
                document.getElementById('IDcercle4_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
                proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">'
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche5()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
                }

                function manche5(){
                    bienplace = 0 ;
                    malplace = 0 ;
                    proposition1 = parseInt(document.getElementById('IDproposition1').value);
                    proposition2 = parseInt(document.getElementById('IDproposition2').value); 
                    proposition3 = parseInt(document.getElementById('IDproposition3').value);
                    proposition4 = parseInt(document.getElementById('IDproposition4').value);
                    document.getElementById('IDcercle5_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
                    document.getElementById('IDcercle5_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
                    document.getElementById('IDcercle5_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
                    document.getElementById('IDcercle5_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
                    proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">'
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche6()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
                    }

                    function manche5(){
                        bienplace = 0 ;
                        malplace = 0 ;
                        proposition1 = parseInt(document.getElementById('IDproposition1').value);
                        proposition2 = parseInt(document.getElementById('IDproposition2').value); 
                        proposition3 = parseInt(document.getElementById('IDproposition3').value);
                        proposition4 = parseInt(document.getElementById('IDproposition4').value);
                        document.getElementById('IDcercle5_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
                        document.getElementById('IDcercle5_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
                        document.getElementById('IDcercle5_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
                        document.getElementById('IDcercle5_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
                        proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">'
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche6()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
                        }

                        function manche6(){
                            bienplace = 0 ;
                            malplace = 0 ;
                            proposition1 = parseInt(document.getElementById('IDproposition1').value);
                            proposition2 = parseInt(document.getElementById('IDproposition2').value); 
                            proposition3 = parseInt(document.getElementById('IDproposition3').value);
                            proposition4 = parseInt(document.getElementById('IDproposition4').value);
                            document.getElementById('IDcercle6_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
                            document.getElementById('IDcercle6_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
                            document.getElementById('IDcercle6_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
                            document.getElementById('IDcercle6_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
                            proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">'
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche7()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
                            }

                            function manche7(){
                                bienplace = 0 ;
                                malplace = 0 ;
                                proposition1 = parseInt(document.getElementById('IDproposition1').value);
                                proposition2 = parseInt(document.getElementById('IDproposition2').value); 
                                proposition3 = parseInt(document.getElementById('IDproposition3').value);
                                proposition4 = parseInt(document.getElementById('IDproposition4').value);
                                document.getElementById('IDcercle7_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
                                document.getElementById('IDcercle7_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
                                document.getElementById('IDcercle7_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
                                document.getElementById('IDcercle7_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
                                proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">'
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche8()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
                                }

                                function manche8(){
                                    bienplace = 0 ;
                                    malplace = 0 ;
                                    proposition1 = parseInt(document.getElementById('IDproposition1').value);
                                    proposition2 = parseInt(document.getElementById('IDproposition2').value); 
                                    proposition3 = parseInt(document.getElementById('IDproposition3').value);
                                    proposition4 = parseInt(document.getElementById('IDproposition4').value);
                                    document.getElementById('IDcercle8_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
                                    document.getElementById('IDcercle8_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
                                    document.getElementById('IDcercle8_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
                                    document.getElementById('IDcercle8_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
                                    proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">'
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche9()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
                                    }

                                    function manche9(){
                                        bienplace = 0 ;
                                        malplace = 0 ;
                                        proposition1 = parseInt(document.getElementById('IDproposition1').value);
                                        proposition2 = parseInt(document.getElementById('IDproposition2').value); 
                                        proposition3 = parseInt(document.getElementById('IDproposition3').value);
                                        proposition4 = parseInt(document.getElementById('IDproposition4').value);
                                        document.getElementById('IDcercle9_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
                                        document.getElementById('IDcercle9_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
                                        document.getElementById('IDcercle9_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
                                        document.getElementById('IDcercle9_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
                                        proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">'
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche10()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
                                        }

                                        function manche10(){
                                            bienplace = 0 ;
                                            malplace = 0 ;
                                            proposition1 = parseInt(document.getElementById('IDproposition1').value);
                                            proposition2 = parseInt(document.getElementById('IDproposition2').value); 
                                            proposition3 = parseInt(document.getElementById('IDproposition3').value);
                                            proposition4 = parseInt(document.getElementById('IDproposition4').value);
                                            document.getElementById('IDcercle10_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
                                            document.getElementById('IDcercle10_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
                                            document.getElementById('IDcercle10_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
                                            document.getElementById('IDcercle10_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
                                            proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">'
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche11()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
                                            }

                                            function manche11(){
                                                bienplace = 0 ;
                                                malplace = 0 ;
                                                proposition1 = parseInt(document.getElementById('IDproposition1').value);
                                                proposition2 = parseInt(document.getElementById('IDproposition2').value); 
                                                proposition3 = parseInt(document.getElementById('IDproposition3').value);
                                                proposition4 = parseInt(document.getElementById('IDproposition4').value);
                                                document.getElementById('IDcercle11_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
                                                document.getElementById('IDcercle11_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
                                                document.getElementById('IDcercle11_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
                                                document.getElementById('IDcercle11_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
                                                proposition1++;
    proposition2++;
    proposition3++;
    proposition4++;
    if (proposition1 == code1){
        bienplace++;
    }
    else if (proposition1 == code2 || proposition1 == code3 || proposition1 == code4 ) {
        malplace++;
    }
    if (proposition2 == code2){
        bienplace++;
    }
    else if (proposition2 == code1 || proposition2 == code3 || proposition2 == code4 ) {
        malplace++;
    }
    if (proposition3 == code3){
        bienplace++;
    }
    else if (proposition3 == code1 || proposition3 == code2 || proposition3 == code4 ) {
        malplace++;
    }
    if (proposition4 == code4){
        bienplace++;
    }
    else if (proposition4 == code1 || proposition4 == code2 || proposition4 == code3 ) {
        malplace++;
    }
    document.getElementById('IDmanche1gauche').innerHTML = bienplace + "   Sont bien placés";
    document.getElementById('IDmanche1droite').innerHTML = malplace  + "   Sont mal placés";
    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
        document.getElementById('IDmessagedefin').style.display="block";
        document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">'
    }
    else{
        document.getElementById('IDboutonmanche').innerHTML = '<button id="IDbouton" class="btn btn-primary" onclick="manche12()">valider</button> ';
    }
    malplace = 0;
    bienplace = 0;
                                                }

                                                function manche12(){
                                                    proposition1 = parseInt(document.getElementById('IDproposition1').value);
                                                    proposition2 = parseInt(document.getElementById('IDproposition2').value); 
                                                    proposition3 = parseInt(document.getElementById('IDproposition3').value);
                                                    proposition4 = parseInt(document.getElementById('IDproposition4').value);
                                                    document.getElementById('IDcercle12_1').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition1] +' cx="50" cy="50" r="50"/>';
                                                    document.getElementById('IDcercle12_2').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition2] +' cx="50" cy="50" r="50"/>';
                                                    document.getElementById('IDcercle12_3').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition3] +' cx="50" cy="50" r="50"/>';
                                                    document.getElementById('IDcercle12_4').innerHTML = '<circle ' + 'fill=' + couleurcercle[proposition4] +' cx="50" cy="50" r="50"/>';
                                                    proposition1++;
                                                    proposition2++;
                                                    proposition3++;
                                                    proposition4++;
                                                    if (proposition1 == code1 && proposition2 == code2 && proposition3 == code3 && proposition4 == code4){
                                                            document.getElementById('IDmessagedefin').style.display="block";
                                                            document.getElementById('IDmessagedefin').innerHTML = '<img src="win.jpg" class="m-auto p-auto">';
                                                    }
                                                    else{
                                                            document.getElementById('IDmessagedefin').style.display="block";
                                                            document.getElementById('IDmessagedefin').innerHTML = '<img src="lose.jpg" class="h-100 w-100">';
                                                    }
}