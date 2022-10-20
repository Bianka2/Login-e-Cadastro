function botao() {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let cel = document.getElementById('cel')
    let nasc = document.getElementById('nasc')
    if(validate(nome) && validate(email) && validate(senha) && validate(cel) && validate (nasc)) {
        alert('Cadastrado com sucesso!')
    } else {
        alert('Por favor, preencha os campos!')
    }
}