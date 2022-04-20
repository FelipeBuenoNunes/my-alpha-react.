import React from "react";

import './style.css';

let btns = [0, 1, 2, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/', '='];

const Calc = () => {
    let n1 = "", n2 = "", operation;
    let confirm = true

    const result = () => {
        document.getElementById('display').innerText += '=' + operation(n1, n2);
    }

    const conta = (e) => {
        console.log(n1, n2, operation)
        switch (e.target.innerHTML) {
            case '+':
                operation = (n1, n2) => (+n1) + (+n2); 
                confirm = false;
                break;
            case '-':
                operation = (n1, n2) => (+n1) - (+n2);
                confirm = false;
                break;
            case '*':
                operation = (n1, n2) => (+n1) * (+n2);
                confirm = false;
                break;
            case '/':
                operation = (n1, n2) => (+n1) / (+n2);
                confirm = false;
                break;
            case '=':
                result();
                return;
        }

        if(confirm)
            n1 += e.target.innerHTML;
        else if(/[0-9]/.test(Number(e.target.innerHTML))){
            n2 += e.target.innerHTML;
        }
        document.getElementById('display').innerText += e.target.innerHTML;
    }

    return (
        <section className="sec">
            <div id="numbers" >
                {
                    btns.map((item) => (
                        <button onClick={conta} >
                            {item}
                        </button>
                    ))
                }
            </div>
            <div id="display" >

            </div>
        </section>
    );

}


export default Calc;