$(document).ready(function() {
    // Mostrar o formulário ao clicar no botão "Nova imagem +"
    $('#botao-nova-imagem').click(function() {
        $('form').slideDown();
    });

    // Esconder o formulário ao clicar no botão "Cancelar"
    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    // Adicionar uma nova imagem ao enviar o formulário
    $('form').on('submit', function(e) {
        e.preventDefault(); // Previne o envio padrão do formulário
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); // Pega o valor do campo de entrada

        // Cria um novo item da lista
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" alt="Nova imagem" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>`).appendTo(novoItem);

        // Adiciona o item à lista e exibe com efeito fade
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);

        // Limpa o campo de entrada de URL
        $('#endereco-imagem-nova').val('');
    });
});
