async function analisarImagem() {

    const input = document.getElementById("imageInput");

    if (!input.files.length) {
        alert("Selecione uma imagem.");
        return;
    }

    const formData = new FormData();
    formData.append("file", input.files[0]);

    try {

        const resposta = await fetch(
            "http://127.0.0.1:8000/predict",
            {
                method: "POST",
                body: formData
            }
        );

        const dados = await resposta.json();

        let classeTraduzida = dados.classe;
        let recomendacao = "";

        if (dados.classe === "unripe") {
            classeTraduzida = "🟢 Verde";
            recomendacao = "Aguardar amadurecimento antes da venda.";
        }

        if (dados.classe === "ripe") {
            classeTraduzida = "🟡 Madura";
            recomendacao = "Pronta para venda ao consumidor.";
        }

        if (dados.classe === "overripe") {
            classeTraduzida = "🟠 Muito Madura";
            recomendacao = "Recomenda-se consumo rápido ou promoção.";
        }

        if (dados.classe === "rotten") {
            classeTraduzida = "🔴 Estragada";
            recomendacao = "Produto impróprio para venda. Recomenda-se descarte.";
        }

        document.getElementById("resultado").innerHTML =
        `
        <h2>🍌 Resultado da Análise</h2>

        <p><strong>Classificação:</strong> ${classeTraduzida}</p>

        <p><strong>Confiança:</strong> ${dados.confianca}%</p>

        <p><strong>Recomendação:</strong> ${recomendacao}</p>
        `;

    } catch (erro) {

        console.error(erro);

        document.getElementById("resultado").innerHTML =
            "❌ Erro ao conectar com a API.";

    }
}