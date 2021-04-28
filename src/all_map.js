let pos_check=0;
let menu_check =0;
let menu_rulet=[menu_k,menu_s,menu_j,menu_c,menu_t,menu_b,menu_g];
const gate = ['정문', '북문', '동문'];
let j=0;

let menu_data={
    "분식" : k_boon,
    "찜닭" : k_chick,
    "국밥" : k_soup,
    "칼국수" : k_noodle,
    "초밥" : j_sushi,
    "라멘" : j_noodle,
    "돈까스" : j_pig,
    "덮밥" : j_rice,
    "중국집" : c_noodle,
    "마라탕" : c_mara,
    "파스타" : s_noodle,
    "피자" : s_pizza,
    "햄버거" : s_burger,
    "쌀국수" : a_noodle,
    "떡볶이": t_red,
    "김밥": t_rice,
    "밥버거" : g_burger,
    "컵밥" : g_cup,
    "샐러드/샌드위치" : g_salad,
    "치킨" : b_chicken,
    "굽는고기": b_fire,
    "족발" : b_pig
}

function showOption(){
    let option = document.getElementById('main-options').style.visibility;
    if(option==='visible'){
        document.getElementById('main-options').style.visibility = 'hidden';
    }else{
        document.getElementById('main-options').style.visibility = 'visible';
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function pos_change(id){
    pos_check=id;
}

function menu_change(id){
    menu_check=id;
}

function recommand(){
    let restaurant, i=0;
    j=0;
    document.getElementById('map-box').innerHTML='';
    
    // alert(menu_data[menu_rulet[menu_check][0]][0][0]);
    menu_rulet[menu_check].forEach(element => {
        restaurant = menu_data[element];
        showMap(restaurant);
    });
    
}

function showMap(restaurant){
    let i= pos_check;
       
    if(!restaurant[i].length) return;
    restaurant[i].forEach(element => {
        const map_content_box=document.createElement('div');
        const map_content=document.createElement('div');
        const map_name=document.createElement('p');
        const map_location=document.createElement('p');

        map_content_box.className='map-content-box';
        map_name.innerText = `<< ${element.name} >>`;
        map_location.innerText = element.addr;
        map_content.className='map';
        map_content.id=`map${j}`;
        map_content.style="width:100%;height:350px;margin-top:10px;";
        map_content_box.appendChild(map_content);
        map_content_box.appendChild(map_name);
        map_content_box.appendChild(map_location);
        document.getElementById('map-box').appendChild(map_content_box);
        makeMap(element.addr, element.name, j);
        j++;        
    });
}