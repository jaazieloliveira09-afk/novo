// =========================
// CONFIGURAÇÕES
// =========================

const numeroWhatsApp = "5594999999999";

const produtos = [

    {
        id: 1,
        nome: "Geladeira Frost Free 400L",
        categoria: "geladeiras",
        preco: 2899.90,
        imagem: "geladeira.webp",
        descricao: "Geladeira Frost Free com amplo espaço interno, ideal para sua cozinha."
    },

    {
        id: 2,
        nome: "Geladeira Duplex 450L",
        categoria: "geladeiras",
        preco: 3299.90,
        imagem: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80",
        descricao: "Geladeira duplex com excelente capacidade e organização interna."
    },

    {
        id: 3,
        nome: "Fogão 4 Bocas",
        categoria: "fogoes",
        preco: 899.90,
        imagem: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80",
        descricao: "Fogão de 4 bocas para preparar suas refeições com praticidade."
    },

    {
        id: 4,
        nome: "Fogão 5 Bocas Inox",
        categoria: "fogoes",
        preco: 1299.90,
        imagem: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        descricao: "Fogão de 5 bocas com acabamento moderno em inox."
    },

    {
        id: 5,
        nome: "Máquina de Lavar 12kg",
        categoria: "lavadoras",
        preco: 1899.90,
        imagem: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
        descricao: "Máquina de lavar com capacidade de 12kg para facilitar sua rotina."
    },

    {
        id: 6,
        nome: "Máquina de Lavar 15kg",
        categoria: "lavadoras",
        preco: 2299.90,
        imagem: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
        descricao: "Lavadora de grande capacidade para famílias que precisam de praticidade."
    },

    {
        id: 7,
        nome: "Micro-ondas 20L",
        categoria: "microondas",
        preco: 599.90,
        imagem: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=600&q=80",
        descricao: "Micro-ondas compacto e prático para sua cozinha."
    },

    {
        id: 8,
        nome: "Micro-ondas 32L",
        categoria: "microondas",
        preco: 799.90,
        imagem: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
        descricao: "Micro-ondas com maior capacidade e diversas funções."
    },

    {
        id: 9,
        nome: "Liquidificador 1000W",
        categoria: "eletroportateis",
        preco: 249.90,
        imagem: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80",
        descricao: "Liquidificador potente para preparar bebidas, vitaminas e receitas."
    },

    {
        id: 10,
        nome: "Air Fryer 5L",
        categoria: "eletroportateis",
        preco: 399.90,
        imagem: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        descricao: "Air Fryer de 5 litros para preparar alimentos de forma prática."
    },

    {
        id: 11,
        nome: "Cafeteira Elétrica",
        categoria: "eletroportateis",
        preco: 199.90,
        imagem: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
        descricao: "Cafeteira elétrica prática para preparar seu café todos os dias."
    },

    {
        id: 12,
        nome: "Batedeira Elétrica",
        categoria: "eletroportateis",
        preco: 179.90,
        imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        descricao: "Batedeira prática para preparar massas, bolos e sobremesas."
    }

];


// =========================
// VARIÁVEIS
// =========================

let produtosExibidos = [...produtos];

let carrinho = [];

let paginaAtual = 1;

const produtosPorPagina = 6;


// =========================
// FORMATAR PREÇO
// =========================

function formatarPreco(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


// =========================
// MOSTRAR PRODUTOS
// =========================

function mostrarProdutos() {

    const lista = document.getElementById("listaProdutos");

    lista.innerHTML = "";

    const inicio = (paginaAtual - 1) * produtosPorPagina;

    const fim = inicio + produtosPorPagina;

    const produtosPagina =
        produtosExibidos.slice(inicio, fim);


    if (produtosPagina.length === 0) {

        lista.innerHTML = `
            <p style="grid-column: 1 / -1; text-align: center;">
                Nenhum produto encontrado.
            </p>
        `;

        criarPaginacao();

        return;
    }


    produtosPagina.forEach(produto => {

        const card = document.createElement("article");

        card.className = "produto";


        card.innerHTML = `

            <img
                class="produto-imagem"
                src="${produto.imagem}"
                alt="${produto.nome}"
                onclick="abrirProduto(${produto.id})"
            >

            <div class="produto-info">

                <h3>
                    ${produto.nome}
                </h3>

                <div class="preco">
                    ${formatarPreco(produto.preco)}
                </div>

                <div class="botoes-produto">

                    <button
                        class="botao-comprar"
                        onclick="comprarWhatsApp(${produto.id})"
                    >
                        Comprar pelo WhatsApp
                    </button>

                    <button
                        class="botao-carrinho-produto"
                        onclick="adicionarCarrinho(${produto.id})"
                    >
                        🛒 Adicionar ao carrinho
                    </button>

                </div>

            </div>

        `;


        lista.appendChild(card);

    });


    criarPaginacao();

}


// =========================
// PAGINAÇÃO
// =========================

function criarPaginacao() {

    const paginacao =
        document.getElementById("paginacao");

    paginacao.innerHTML = "";

    const totalPaginas =
        Math.ceil(
            produtosExibidos.length / produtosPorPagina
        );


    if (totalPaginas <= 1) {
        return;
    }


    for (let i = 1; i <= totalPaginas; i++) {

        const botao =
            document.createElement("button");

        botao.textContent = i;


        if (i === paginaAtual) {
            botao.classList.add("ativo");
        }


        botao.onclick = function () {

            paginaAtual = i;

            mostrarProdutos();

            document
                .getElementById("produtos")
                .scrollIntoView({
                    behavior: "smooth"
                });

        };


        paginacao.appendChild(botao);

    }

}


// =========================
// FILTRAR CATEGORIA
// =========================

function filtrarCategoria(categoria) {

    if (categoria === "todos") {

        produtosExibidos = [...produtos];

    } else {

        produtosExibidos =
            produtos.filter(
                produto =>
                    produto.categoria === categoria
            );

    }


    paginaAtual = 1;

    mostrarProdutos();

}


// =========================
// PESQUISA
// =========================

function pesquisarProdutos() {

    const campo =
        document.getElementById("campoPesquisa");

    const pesquisa =
        campo.value
            .toLowerCase()
            .trim();


    if (pesquisa === "") {

        produtosExibidos = [...produtos];

    } else {

        produtosExibidos =
            produtos.filter(produto =>
                produto.nome
                    .toLowerCase()
                    .includes(pesquisa)
            );

    }


    paginaAtual = 1;

    mostrarProdutos();

}


// PESQUISAR APERTANDO ENTER

document
    .getElementById("campoPesquisa")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            pesquisarProdutos();

        }

    });


// =========================
// ABRIR PRODUTO
// =========================

function abrirProduto(id) {

    const produto =
        produtos.find(
            produto => produto.id === id
        );


    if (!produto) {
        return;
    }


    const informacoes =
        document.getElementById(
            "informacoesProduto"
        );


    informacoes.innerHTML = `

        <img
            src="${produto.imagem}"
            alt="${produto.nome}"
            style="
                width: 100%;
                max-height: 300px;
                object-fit: contain;
            "
        >

        <h2 style="margin-top: 20px;">
            ${produto.nome}
        </h2>

        <p style="
            margin-top: 12px;
            line-height: 1.6;
            color: #555;
        ">
            ${produto.descricao}
        </p>

        <h3 style="
            margin-top: 20px;
            color: #087f3e;
            font-size: 25px;
        ">
            ${formatarPreco(produto.preco)}
        </h3>

        <button
            class="botao-comprar"
            style="margin-top: 20px;"
            onclick="comprarWhatsApp(${produto.id})"
        >
            Comprar pelo WhatsApp
        </button>

        <button
            class="botao-carrinho-produto"
            style="margin-top: 8px;"
            onclick="adicionarCarrinho(${produto.id})"
        >
            🛒 Adicionar ao carrinho
        </button>

    `;


    document
        .getElementById("modalProduto")
        .classList.add("ativo");

}


// =========================
// FECHAR PRODUTO
// =========================

function fecharProduto() {

    document
        .getElementById("modalProduto")
        .classList.remove("ativo");

}


// =========================
// ADICIONAR AO CARRINHO
// =========================

function adicionarCarrinho(id) {

    const produto =
        produtos.find(
            produto => produto.id === id
        );


    if (!produto) {
        return;
    }


    carrinho.push(produto);

    atualizarCarrinho();


    // Abre o carrinho automaticamente
    abrirCarrinho();

}



// =========================
// ATUALIZAR CARRINHO
// =========================

function atualizarCarrinho() {

    const quantidade =
        document.getElementById(
            "quantidadeCarrinho"
        );


    quantidade.textContent =
        carrinho.length;


    const lista =
        document.getElementById(
            "itensCarrinho"
        );


    lista.innerHTML = "";


    if (carrinho.length === 0) {

        lista.innerHTML = `
            <p>
                Seu carrinho está vazio.
            </p>
        `;

        document.getElementById(
            "totalCarrinho"
        ).textContent = "R$ 0,00";

        return;
    }


    let total = 0;


    carrinho.forEach((produto, index) => {

        total += produto.preco;


        const item =
            document.createElement("div");

        item.className = "item-carrinho";


        item.innerHTML = `

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <div style="flex: 1;">

                <strong>
                    ${produto.nome}
                </strong>

                <p>
                    ${formatarPreco(produto.preco)}
                </p>

            </div>

            <button
                onclick="removerCarrinho(${index})"
                style="
                    border: none;
                    background: #e53935;
                    color: white;
                    padding: 7px 10px;
                    border-radius: 4px;
                    cursor: pointer;
                "
            >
                Remover
            </button>

        `;


        lista.appendChild(item);

    });


    document.getElementById(
        "totalCarrinho"
    ).textContent = formatarPreco(total);

}


// =========================
// REMOVER DO CARRINHO
// =========================

function removerCarrinho(index) {

    carrinho.splice(index, 1);

    atualizarCarrinho();

}


// =========================
// ABRIR CARRINHO
// =========================

function abrirCarrinho() {

    atualizarCarrinho();

    document
        .getElementById("modalCarrinho")
        .classList.add("ativo");

}


// =========================
// FECHAR CARRINHO
// =========================

function fecharCarrinho() {

    document
        .getElementById("modalCarrinho")
        .classList.remove("ativo");

}


// =========================
// COMPRAR PRODUTO PELO WHATSAPP
// =========================

function comprarWhatsApp(id) {

    const produto =
        produtos.find(
            produto => produto.id === id
        );


    if (!produto) {
        return;
    }


    const mensagem =
        `Olá! Tenho interesse no produto: ${produto.nome}. Preço: ${formatarPreco(produto.preco)}.`;


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;


    window.open(url, "_blank");

}


// =========================
// FINALIZAR CARRINHO NO WHATSAPP
// =========================

function finalizarCompra() {

    if (carrinho.length === 0) {

        alert(
            "Seu carrinho está vazio."
        );

        return;
    }


    let mensagem =
        "Olá! Tenho interesse nos seguintes produtos:%0A%0A";


    let total = 0;


    carrinho.forEach(produto => {

        mensagem +=
            `• ${produto.nome} - ${formatarPreco(produto.preco)}%0A`;

        total += produto.preco;

    });


    mensagem +=
        `%0ATotal: ${formatarPreco(total)}`;


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;


    window.open(url, "_blank");

}


// =========================
// ROLAR ATÉ PRODUTOS
// =========================

function rolarParaProdutos() {

    document
        .getElementById("produtos")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// =========================
// FECHAR MODAIS CLICANDO FORA
// =========================

window.addEventListener("click", function(event) {

    const modalProduto =
        document.getElementById("modalProduto");

    const modalCarrinho =
        document.getElementById("modalCarrinho");


    if (event.target === modalProduto) {

        fecharProduto();

    }


    if (event.target === modalCarrinho) {

        fecharCarrinho();

    }

});


// =========================
// INICIAR SITE
// =========================

mostrarProdutos();

atualizarCarrinho();