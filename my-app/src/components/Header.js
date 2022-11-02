import React from "react"


function first_onclick (){
    let first_oclick = document.getElementById("first_click");
    let elem_style = first_oclick.style;
    if(elem_style.backgroundColor == 'yellow'){
        elem_style.backgroundColor = 'white';
        elem_style.color = "black";
    }
    else{
        elem_style.backgroundColor = 'yellow';
        elem_style.color = "white";
    }
}

function second_onclick(){
    let second_onclick = document.querySelector(".second_click");
    let elem_style = second_onclick.style;
    if(elem_style.backgroundColor == 'green'){
        elem_style.backgroundColor = 'white';
        elem_style.color = "black";
    }
    else{
        elem_style.backgroundColor = 'green';
        elem_style.color = "white";
    }
}

function Header() {
    return (
        <header>
            <span><h2>Бондаренко Анастасія Тарасівна</h2></span>
        <p>18 квітня 2002 рік, місто Вінниця</p>
        <p id = "first_click" onClick={() => first_onclick()}>Школа-гімназія №23 міста Вінниця</p>
        <p className = "second_click" onClick={() => second_onclick()} >НТУУ "Київський Політехнічний Інститут імені Ігоря Сікорського" ФІОТ
        </p>
        </header>
    )
}
 
export default Header