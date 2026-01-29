const btn = document.getElementById('btn')
let res = document.getElementById('res')
function calcular(){
    let ini = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let pas = document.getElementById('ipasso')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = '[ERRO] Faltam dados!'
    }else{
        if (pas.value <= 0){
            res.innerHTML = 'Passo inválido.'
        }
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
                
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F6A6}`
    }
    ini.value = ''
    fim.value = ''
    pas.value = ''
}
btn.addEventListener('click', calcular)