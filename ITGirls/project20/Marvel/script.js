
let json=`[{
   "charactername":"Бэтмен",
   "image":"https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
   "characteristics":"интеллект, обширные познания, знания боевых искусств, ловкость",
   "description":"по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. ",
   "points":"0"
},
{
    "charactername":"Супермен",
    "image":"https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg",
    "characteristics":"непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "description":"полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. ",
    "points":"0"
},
{
    "charactername":"Чудо-женщина",
    "image":"https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg",
    "characteristics":"cверхчеловеческая сила искорость, выносливость, полет",
    "description":"пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :) Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Свое настоящее имя — Диана — она получила в честь древнегреческой богини охоты, а суперспособности — от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма.",
    "points":"0"
}]`;
function check() {
let points=document.querySelectorAll('.points'); 
for(i = 0; i < points.length; i++){
    pointsvalue=points[i].value
   id=points[i].id
   localStorage.setItem(id,pointsvalue);
} 
}
document.addEventListener("DOMContentLoaded", function(event)
{
let heroes= JSON.parse(json);
let dccomics='';
let heroeslist="";
let counter=0;
for(let hero of heroes){
    dccomics +=`<div class='hero'>
    <h2>${hero.charactername}</h2>
    <div><img src="${hero.image}"></div>
    <div>Характеристики:${hero.characteristics}</div>
    <div>Описание:${hero.description}</div>
    <div>
    <input type="number" class="points" min="1" max="10" id=${hero.charactername} value=${hero.points}>
    <button class='btnSavePoints' onclick=check()>Сохранить</button>
    </div>
    </div>`;

    document.getElementById("heroeslist").innerHTML=dccomics;
    let btn = document.querySelectorAll('.btnSavePoints');
    let points=document.querySelectorAll('.points');  

    pointsvalue=points[counter].value
    id=points[counter].id
    localStorage.setItem(id,pointsvalue);
    counter++;
    function check() {}
}

}); 

