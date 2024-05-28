document.getElementById('formInscricoes').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const formData = {
        nome: document.getElementById('campoNome').value,
        email: document.getElementById('campoEmail').value,
        telefone: document.getElementById('campoTelefone').value,
        dataNasc: document.getElementById('campoDataNasc').value,
        sexo: document.getElementById('campoSexo').value,
        cidade: document.getElementById('campoCidade').value,
        categoria: []
    };

    document.querySelectorAll('input[name="categoria"]:checked').forEach((checkbox) => {
        formData.categoria.push(checkbox.value);
    });

    document.getElementById('modalNome').innerText = formData.nome;
    document.getElementById('modalEmail').innerText = formData.email;
    document.getElementById('modalTelefone').innerText = formData.telefone;
    document.getElementById('modalDataNasc').innerText = formData.dataNasc;
    document.getElementById('modalSexo').innerText = formData.sexo;
    document.getElementById('modalCidade').innerText = formData.cidade;
    document.getElementById('modalCategorias').innerText = formData.categoria.join(', ');

   
    const modal = document.getElementById('confirmModal');
    modal.style.display = 'block';

    
    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
    };

   
    document.getElementById('confirmButton').onclick = function() {
        
        fetch('http://localhost:3000/inscricoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Inscrição enviada com sucesso!');
            modal.style.display = 'none';
            limparFormulario(); 
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Erro ao enviar inscrição.');
        });
    };

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});


function limparFormulario() {
    document.getElementById('formInscricoes').reset();
    
    document.querySelectorAll('input[name="categoria"]:checked').forEach((checkbox) => {
        checkbox.checked = false;
    });
}



