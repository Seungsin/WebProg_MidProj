// document.write("<script src='map.js'></script>");
// document.write("<script src='data.js'></script>");

let pos_count=3;
let menu_count=7;
let pos_check=[1,1,1];
let menu_rulet=[menu_c,menu_b,menu_g,menu_j,menu_k,menu_s,menu_t];
const gate = ['정문', '북문', '동문'];

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

function pos_change(value, id){
    let isCheck = document.getElementById(value);
    if(isCheck.checked===true){
        pos_count++;
        pos_check[id]=1;
    }else{
        pos_count--;
        pos_check[id]=0;
        if(!pos_count){
            alert("위치는 최소 한 곳 이상 선택되어야 합니다.");
            isCheck.checked=true;
            pos_count++;
            pos_check[id]=1;
        }
    }
}

function menu_change(value, name){
    let isCheck = document.getElementById(value);
    if(isCheck.checked===true){
        menu_count++;
        menu_rulet.push(name);
    }else{
        menu_count--;
        menu_rulet = menu_rulet.filter((element) => element !== name);
        if(!menu_count){
            alert("음식 분류는 최소 한 개 이상 선택되어야 합니다.");
            isCheck.checked=true;
            menu_count++;
            menu_rulet.push(name);
        }
    }
}


function recommand(){
    let restaurant
    do{
    let randNum1=rand(0,menu_rulet.length);
    // let randNum1=rand(0,1);
    let randNum2=rand(0,menu_rulet[randNum1].length);

    document.getElementById('text-blank').innerText = menu_rulet[randNum1][randNum2];
    document.getElementById('map-box').innerHTML='';

    // for(i=0;i<res_main_k[randNum2].length;i++){
    //     const map_content=document.createElement('div');
    //     map_content.className='map';
    //     map_content.id=`map${i}`;
    //     map_content.style="width:45%;height:350px;margin-top:10px;";
    //     document.getElementById('map-box').appendChild(map_content);
    //     makeMap(res_main_k[randNum2][i].addr, res_main_k[randNum2][i].name, i);
    // }

    restaurant = menu_data[menu_rulet[randNum1][randNum2]];
    }while(showMap(restaurant));
}

function showMap(restaurant){
    let i=0, j=0, c=0;

    for(i=0;i<3;i++){
        if(!pos_check[i]) continue;
        if(!restaurant[i].length) continue;
        restaurant[i].forEach(element => {
            const map_content_box=document.createElement('div');
            const map_content=document.createElement('div');
            const map_name=document.createElement('p');
            const map_location=document.createElement('p');

            map_content_box.className='map-content-box';
            map_name.innerText = `<< ${gate[i]} - ${element.name} >>`;
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
            c++;
        });
    }

    if(c==0) return 1;
    else return 0;
}