function botao() {
    let nome = document.getElementById('nome')
    let sobre = document.getElementById('sobrenome')
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')

    if(validate(nome) && validate(sobre) && validate(email) && validate(senha)) 
    {
        alert('Logado com sucesso!');
    } else {
        alert('Preencha os campos!');
    }
}

