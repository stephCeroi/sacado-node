async function f() {
    return 0/0
}
f().then(r=>console.log(r)).catch(()=>console.log("ERREUR"));    