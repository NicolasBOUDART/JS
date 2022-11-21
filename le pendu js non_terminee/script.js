const mot1lettre =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const mot2lettre =["là", "dû", "aï", "çà", "hé", "mû", "nô", "ès", "dé", "né", "ça", "té", "ré", "où"]
const mot3lettre=["sas", "cap", "zut", "max", "dry", "lue", "ure", "mis", "out", "sot", "ver", "sac", "dam", "etc", "une", "néo", "fat", "cit", "bey", "ohé", "lac"]
const mot4lettre=["baie", "choc", "teck", "mène", "rets", "dons", "puna", "sûrs", "régi", "dupa", "fiez", "uses", "unir", "naïf", "rama", "acon", "mens"]
const mot5lettre=["moulu", "régné", "lavai", "liché", "reçue", "auras", "itéra", "truie", "monel", "stipe", "sayon", "fuser", "teste", "ajour", "galbe"]
const mot6lettre=["entêta", "routés", "omette", "captés", "angora", "appâts", "ketchs", "ripper", "bréler", "ligués", "revira", "fluors", "canoté"]
const mot7lettre=["assigné", "errants", "déchapé", "récitât", "luxerai", "copulas", "bombait", "résoute", "étirais", "dégîtez", "boycott", "accepte"]
const mot8lettre=["hématite", "auricule", "trouvées", "claquiez", "limonant", "bengalis", "abêtiras", "dentelai", "hennisse", "bêlerons"]
const mot9lettre=["démerdait", "présagées", "endommagé", "enserrera", "maculions", "étayerais", "starisait", "rassemblé", "jonglions"]
const mot10lettre=["châtiments", "octaviâtes", "laquerions", "vallonnent", "amollissez", "lobassions", "sérancerez", "déchantées", "mortifiant"]
const mot11lettre=["amoindrîmes", "ondulassent", "klaxonneras", "affriolante", "rudoyassent", "abreuveront", "succéderont", "repartirais"]
const mot12lettre=["dégoupillait", "pendulassent", "télékinésies", "manoeuvrerai", "convergences", "précautionné", "camelotaient"]
const mot13lettre=["naturaliserez", "engrumelleras", "détalonneront", "démantelasses", "verdunisèrent", "ausculterions", "non-révisable"]
const mot14lettre=["séculariseriez", "convergeraient", "glycérinassent", "cohéritassions", "champlevassiez", "dégasolinèrent"]
let longueurtableau
let aleatoire
let motatrouver
let tiret = document.getElementById('IDtiret');
let lettre;
let nombredemanche = 1;
let potence = document.getElementById('IDpotence');
let compteurpotence = 0;
let compteurmot = 0;
let regexmin = new RegExp("[a-z]");
let compteur = 0;
    function commencerlapartie(){
        aleatoire = Math.floor((Math.random() * 14)+1);
        switch(aleatoire){
            case 1:
                longueurtableau = mot1lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot1lettre[aleatoire]
                break;
            case 2:
                longueurtableau = mot2lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot2lettre[aleatoire]
                break;
            case 3:
                longueurtableau = mot3lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot3lettre[aleatoire]
               break;
            case 4:
                longueurtableau = mot4lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot4lettre[aleatoire]
                 break;
            case 5:
                longueurtableau = mot5lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot5lettre[aleatoire]
                 break;
            case 6:
                longueurtableau = mot6lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot6lettre[aleatoire]
                  break;
            case 7:
                longueurtableau = mot7lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot7lettre[aleatoire]
                  break;
            case 8:
                longueurtableau = mot8lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot8lettre[aleatoire]
                 break;
            case 9:
                longueurtableau = mot9lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot9lettre[aleatoire]
                 break;
            case 10:
                longueurtableau = mot10lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot10lettre[aleatoire]
                 break;
            case 11:
                longueurtableau = mot11lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot11lettre[aleatoire]
                break;
            case 12:
                longueurtableau = mot12lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot12lettre[aleatoire]
                break;
            case 13:
                longueurtableau = mot13lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot13lettre[aleatoire]
                 break;
            case 14:
                longueurtableau = mot14lettre.length
                aleatoire = Math.floor(Math.random() * longueurtableau);
                motatrouver = mot14lettre[aleatoire]
                 break;
        }
        switch(motatrouver.length){
            case 1:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 2:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 3:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 4:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="120" y1="400" x2="150" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 5:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="120" y1="400" x2="150" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="160" y1="400" x2="190" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 6:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="120" y1="400" x2="150" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="160" y1="400" x2="190" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="200" y1="400" x2="230" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 7:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="120" y1="400" x2="150" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="160" y1="400" x2="190" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="200" y1="400" x2="230" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="240" y1="400" x2="270" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 8:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="120" y1="400" x2="150" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="160" y1="400" x2="190" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="200" y1="400" x2="230" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="240" y1="400" x2="270" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="280" y1="400" x2="310" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 9:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="120" y1="400" x2="150" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="160" y1="400" x2="190" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="200" y1="400" x2="230" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="240" y1="400" x2="270" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="280" y1="400" x2="310" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="320" y1="400" x2="350" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 10:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="120" y1="400" x2="150" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="160" y1="400" x2="190" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="200" y1="400" x2="230" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="240" y1="400" x2="270" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="280" y1="400" x2="310" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="320" y1="400" x2="350" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="360" y1="400" x2="390" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 11:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="120" y1="400" x2="150" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="160" y1="400" x2="190" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="200" y1="400" x2="230" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="240" y1="400" x2="270" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="280" y1="400" x2="310" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="320" y1="400" x2="350" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="360" y1="400" x2="390" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="400" y1="400" x2="430" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 12:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="120" y1="400" x2="150" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="160" y1="400" x2="190" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="200" y1="400" x2="230" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="240" y1="400" x2="270" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="280" y1="400" x2="310" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="320" y1="400" x2="350" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="360" y1="400" x2="390" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="400" y1="400" x2="430" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="440" y1="400" x2="470" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 13:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="120" y1="400" x2="150" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="160" y1="400" x2="190" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="200" y1="400" x2="230" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="240" y1="400" x2="270" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="280" y1="400" x2="310" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="320" y1="400" x2="350" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="360" y1="400" x2="390" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="400" y1="400" x2="430" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="440" y1="400" x2="470" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="480" y1="400" x2="510" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
            case 14:
                tiret.innerHTML='<line x1="0" y1="400" x2="30" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="40" y1="400" x2="70" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="80" y1="400" x2="110" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="120" y1="400" x2="150" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="160" y1="400" x2="190" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="200" y1="400" x2="230" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="240" y1="400" x2="270" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="280" y1="400" x2="310" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="320" y1="400" x2="350" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="360" y1="400" x2="390" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="400" y1="400" x2="430" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="440" y1="400" x2="470" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="480" y1="400" x2="510" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" /><line x1="520" y1="400" x2="550" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2" />'
                break;
        }
    }
            function pendu(){
                console.log(motatrouver)
                while (compteur == 0){
                            lettre = prompt('veuillez proposer une lettre en minuscule')
                            if (regexmin.test(lettre)){
                            compteur++;
                            compteurpotence++;
                }
                }
                switch(compteurpotence){
                    case 1:
                        potence.innerHTML='<line x1="100" y1="400" x2="400" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2"/>'
                        break;
                    case 2:
                        potence.innerHTML='<line x1="100" y1="400" x2="400" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2"/><line x1="150" y1="100" x2="150" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" />'
                        break;
                    case 3:
                        potence.innerHTML='<line x1="100" y1="400" x2="400" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2"/><line x1="150" y1="100" x2="150" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="100" x2="300" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="150" x2="180" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" />'
                        break;
                    case 4:
                        potence.innerHTML='<line x1="100" y1="400" x2="400" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2"/><line x1="150" y1="100" x2="150" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="100" x2="300" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="150" x2="180" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="100" x2="300" y2="180" style="stroke:rgb(0,0,0);stroke-width:2" />'
                        break;
                    case 5:
                        potence.innerHTML='<line x1="100" y1="400" x2="400" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2"/><line x1="150" y1="100" x2="150" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="100" x2="300" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="150" x2="180" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="100" x2="300" y2="180" style="stroke:rgb(0,0,0);stroke-width:2" /><circle cx="300" cy="200" r="20" stroke="black" stroke-width="2" /><line x1="296" y1="210" x2="304" y2="210" style="stroke:rgb(255, 255, 255);stroke-width:3" /><ellipse cx="290" cy="195" rx="8" ry="5" style="fill:rgb(255, 255, 255);stroke:rgb(0, 0, 0);stroke-width:2" /><circle cx="290" cy="195" r="3" stroke="black" style="stroke:rgba(0, 225, 255, 0.932)" stroke-width="2" /><circle cx="290" cy="195" r="1" stroke="black" stroke-width="2"/><ellipse cx="310" cy="195" rx="8" ry="5" style="fill:rgb(255, 255, 255);stroke:rgb(0, 0, 0);stroke-width:2" /><circle cx="310" cy="195" r="3" stroke="black" style="stroke:rgba(0, 225, 225, 0.932)" stroke-width="2" /><circle cx="310" cy="195" r="1" stroke="black" stroke-width="2"/>'
                        break;
                    case 6:
                        potence.innerHTML='<line x1="100" y1="400" x2="400" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2"/><line x1="150" y1="100" x2="150" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="100" x2="300" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="150" x2="180" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="100" x2="300" y2="180" style="stroke:rgb(0,0,0);stroke-width:2" /><circle cx="300" cy="200" r="20" stroke="black" stroke-width="2" /><line x1="296" y1="210" x2="304" y2="210" style="stroke:rgb(255, 255, 255);stroke-width:3" /><line x1="290" y1="192" x2="295" y2="195" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="290" y1="198" x2="295" y2="195" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="307" y1="195" x2="312" y2="198" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="307" y1="195" x2="312" y2="192" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="300" y1="220" x2="300" y2="300" style="stroke:rgb(0,0,0);stroke-width:2" />'
                        break;
                    case 7:
                        potence.innerHTML='<line x1="100" y1="400" x2="400" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2"/><line x1="150" y1="100" x2="150" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="100" x2="300" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="150" x2="180" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="100" x2="300" y2="180" style="stroke:rgb(0,0,0);stroke-width:2" /><circle cx="300" cy="200" r="20" stroke="black" stroke-width="2" /><line x1="296" y1="210" x2="304" y2="210" style="stroke:rgb(255, 255, 255);stroke-width:3" /><line x1="290" y1="192" x2="295" y2="195" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="290" y1="198" x2="295" y2="195" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="307" y1="195" x2="312" y2="198" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="307" y1="195" x2="312" y2="192" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="300" y1="220" x2="300" y2="300" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="240" x2="270" y2="280" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="240" x2="330" y2="280" style="stroke:rgb(0,0,0);stroke-width:2" />'
                        break;
                    case 8:
                        potence.innerHTML='<line x1="100" y1="400" x2="400" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2"/><line x1="150" y1="100" x2="150" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="100" x2="300" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="150" x2="180" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="100" x2="300" y2="180" style="stroke:rgb(0,0,0);stroke-width:2" /><circle cx="300" cy="200" r="20" stroke="black" stroke-width="2" /><line x1="296" y1="210" x2="304" y2="210" style="stroke:rgb(255, 255, 255);stroke-width:3" /><line x1="290" y1="192" x2="295" y2="195" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="290" y1="198" x2="295" y2="195" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="307" y1="195" x2="312" y2="198" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="307" y1="195" x2="312" y2="192" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="300" y1="220" x2="300" y2="300" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="240" x2="270" y2="280" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="240" x2="330" y2="280" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="300" x2="270" y2="340" style="stroke:rgb(0,0,0);stroke-width:2" />'
                        break;
                    case 9:
                        potence.innerHTML='<line x1="100" y1="400" x2="400" y2="400" style="stroke:rgb(0, 0, 0);stroke-width:2"/><line x1="150" y1="100" x2="150" y2="400" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="100" x2="300" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="150" y1="150" x2="180" y2="100" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="100" x2="300" y2="180" style="stroke:rgb(0,0,0);stroke-width:2" /><circle cx="300" cy="200" r="20" stroke="black" stroke-width="2" /><line x1="296" y1="210" x2="304" y2="210" style="stroke:rgb(255, 255, 255);stroke-width:3" /><line x1="300" y1="220" x2="300" y2="300" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="240" x2="270" y2="280" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="240" x2="330" y2="280" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="300" x2="270" y2="340" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="300" y1="300" x2="330" y2="340" style="stroke:rgb(0,0,0);stroke-width:2" /><line x1="290" y1="190" x2="300" y2="200" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="290" y1="200" x2="300" y2="190" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="302" y1="190" x2="312" y2="200" style="stroke:rgb(255, 0, 0);stroke-width:2" /><line x1="302" y1="200" x2="312" y2="190" style="stroke:rgb(255, 0, 0);stroke-width:2" />'
                        break;
                    }
                compteur=0
                }
           