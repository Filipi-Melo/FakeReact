(async function load(){
    await new Promise( call => setTimeout(call, Math.random()*1000+300))
    document.querySelector("#load").innerHTML="";
})()