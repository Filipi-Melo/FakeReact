const FR = new FakeReact()

let styles=':root{'+
'    --gray:rgb(146, 143, 143);'+
'    --orange:rgb(255, 126, 6);}'+
'.back_blue{background-color: rgb(9, 1, 124)}'+
'.head{'+
'    background-color: var(--orange);'+
'    height: 100px;'+
'    width: 100%;}'+
'.dt{'+
'    height: 500px;'+
'    width: 100%;}'+
'.di1{'+
'    height:75%;'+
'    width: 400px;'+
'    background-color: var(--gray);'+
'    border: 2px groove var(--black);'+
'    margin:auto;}'+
'.di2{'+
'    border-top: 1px solid var(--black);'+
'    margin-top: -1px; color:white;'+
'    height: 15%;}'+
'.di2b{'+
'    height:60px;'+
'    width: 100%;'+
'    margin-top: -33px;'+
'    border-bottom: 2px groove var(--black);}'+
'.th-btn{'+
'    padding-top: 4px;'+
'    padding-bottom: 4px;'+
'    width:120px;         }'+
'button{margin:3px;'+
'   background-color: black;'+
'   color: rgb(255, 255, 255);'+
'   padding: 2px;}'+
'@media (max-width: 420px){'+
'    .di1{width: 95%;}'+
'    input{width: 160px} }'+
'@media (max-width: 226px){ .di1{ height: 85% } }';

FR.write('head',
    FR.tag('style',styles),
    FR.tag('link','',{rel:"stylesheet",href:"./load/load.css"}),
    FR.tag('script','',{src:"./load/load.js"})
)

FR.start(
    FR.tag('span','',{id:'load'},[
        FR.tag('div','',{class:'loading',tabindex:-1},[
            FR.tag('div','',{class:'top center float'},[
                FR.tag('img','',{src:'./load/load.png',class:'img',heigth:"100%",width:"100%"}),
                FR.tag('h1','Loading...')
            ])    
        ])
    ]),
    FR.tag('div','',{class:'head center'},[
        FR.BR(),
        FR.tag('h1','FakeReact Calculator')
    ]),
    FR.BR(),
    FR.BR(),
    FR.tag('div','',{class:'dt'},[
        FR.tag('button','Change Theme',{class:'th-btn',onclick:"theme()"}),
        FR.BR(),
        FR.BR(),
        FR.tag('div','',{class:'di1 radius'},[
            FR.tag('div','',{class:'di2 center radius back_blue'},[
                FR.BR(),
                FR.tag('h1','Calculate'),
                FR.tag('div','',{class:'di2b back_blue'})
            ]),
            FR.tag('div','',{class:'center'},[
                FR.BR(),
                FR.BR(),
                FR.BR(),
                FR.tag('input','',{placeholder:'Enter a number', type:'number', id:'num1', class:'center'}),
                FR.BR(),
                FR.BR(),
                FR.tag('input','',{placeholder:'Enter a number', type:'number', id:'num2', class:'center'}),
                FR.BR(),
                FR.BR(),
                FR.tag('button','Add',{type:'button',onclick:`setv("#res",qsv("#num1")*1+1*qsv("#num2"))`}),
                FR.tag('button','Subtract',{type:'button',onclick:`setv("#res",qsv("#num1")-qsv("#num2"))`}),
                FR.tag('button','Multiply',{type:'button',onclick:`setv("#res",qsv("#num1")*qsv("#num2"))`}),
                FR.tag('button','Divide',{type:'button',onclick:`setv("#res",qsv("#num1")/qsv("#num2"))`}),
                FR.BR(),
                FR.tag('button','Root',{type:'button',onclick:`setv("#res",qsv("#num1")**(1/qsv("#num2")))`}),
                FR.tag('button','Power',{type:'button',onclick:`setv("#res",qsv("#num1")**qsv("#num2"))`}),
                FR.tag('button','Percentage',{type:'button',onclick:`setv("#res",qsv("#num1")*qsv("#num2")/100)`}),
                FR.tag('button','Factorial',{type:'button',onclick:`setv("#res",factorial(qsv("#num1")))`}),
                FR.BR(),FR.BR(),
                FR.tag('h1','Result:'),
                FR.tag('input','',{id:'res', class:'center'})
            ])
        ])
    ])   
)
const qsv = id => document.querySelector(id).value;
const setv = (id,value) => document.querySelector(id).value = value;

const factorial = (n1) => {
    let f = n1;
    for(let x=2;x<n1;x++) f *= x;
    return f;
}

let x=1;
const theme = ()=> x===0 ?
(()=>{document.body.style.backgroundColor = '#ffffff';x++})():
(()=>{document.body.style.backgroundColor = '#000000';x--})();
