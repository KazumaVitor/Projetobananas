# Sistema de Triagem Automática de Bananas por Maturação

## Integrantes

- Ronald Roland Filho
- Victor José Moraes de Lima
- Vítor Tetsuya Kazuma

## Objetivo

Desenvolver uma aplicação de Visão Computacional utilizando YOLO para classificar bananas em diferentes estágios de maturação, auxiliando processos de controle de qualidade e triagem de alimentos.

## Tema

Triagem Automática de Bananas por Maturação.

## Aplicação

O sistema analisa imagens de bananas e as classifica em diferentes estágios de maturação, permitindo identificar quais estão prontas para venda, quais ainda precisam amadurecer e quais devem ser descartadas.

## Dataset

### Origem

Dataset público:
Banana Ripeness Classification Dataset (Kaggle).

### Classes

- Unripe (Verde)
- Ripe (Madura)
- Overripe (Muito madura)
- Rotten (Estragada)
 Dataset já previamente rotulado (não foi necessária anotação manual)

### Quantidade de imagens de treino

| Classe | Quantidade |
|----------|----------:|
| Unripe | 1902 |
| Ripe | 3522 |
| Overripe | 2349 |
| Rotten | 4020 |

Total: 11.793 imagens

### Split

O dataset já possui separação em:

- Train
- Validation
- Test

Ferramenta de anotação: não utilizada, pois o dataset já era pré-rotulado


### Modelo Escolhido

YOLO11n-cls
Modelo treinado: best.pt

Configuração do Treinamento
Modelo: YOLO11n-cls
Número de épocas: 50
Tamanho das imagens: 224x224
Batch size: 16
Hardware utilizado:
CPU: Intel Core i5-xxxx
GPU: T4
RAM: 16 GB

### Justificativa da Escolha

A variante YOLO11n-cls foi escolhida por ser um modelo leve e eficiente para tarefas de classificação de imagens. O modelo apresenta baixo custo computacional, treinamento rápido e boa precisão, sendo adequado para execução em computadores comuns e aplicações em tempo real.

## Ferramenta de Anotação

Não foi necessária anotação manual, pois o dataset utilizado já estava previamente organizado e rotulado para a tarefa de classificação de imagens.

## Resultados do Treinamento

O modelo foi treinado utilizando o dataset Banana Ripeness Classification Dataset.

### Métricas Obtidas

* Top-1 Accuracy: 99,11%
* Top-5 Accuracy: 100%
* Loss final (val): ~0.05
* Fitness: 99.55%

### Arquivos Gerados

Os gráficos gerados durante o treinamento encontram-se na pasta `prints/`:

* results.png
* confusion_matrix.png

## Arquitetura da Aplicação

```text
Usuário
   ↓
Interface Web (HTML/CSS/JavaScript)
   ↓
API FastAPI
   ↓
Modelo YOLO11n-cls (best.pt)
   ↓
Resultado da Classificação
```

## Endpoints da API

### GET /

Descrição:
Verifica se a API está funcionando.

Resposta:

```json
{
  "mensagem": "API de Classificação de Bananas"
}
```

### POST /predict

Descrição:
Recebe uma imagem e retorna a classificação da banana.

Entrada:

* Arquivo de imagem (.jpg, .jpeg, .png)

Saída:

```json
{
  "classe": "ripe",
  "confianca": 100.0
}
```

💻 Interface da Aplicação

A interface foi desenvolvida em HTML, CSS e JavaScript.

Funcionalidades:
-Upload de imagem
-Upload de vídeo
-Envio para API
-Exibição da classe prevista
-Exibição da confiança
-Recomendação baseada na maturação

## Pesos do Modelo

O arquivo treinado do modelo encontra-se disponível em:

`models/best.pt`

📁 Pasta principal do projeto:
https://drive.google.com/drive/folders/1rgMQVK43-bKSp5hebsbznPT5GcZbjR_g
📄 Arquivo do modelo treinado:
https://drive.google.com/file/d/1Ira8kEDKRT_m0BMb17zMjoz35qWKOV1l/view
📁 Pasta adicional de recursos:
https://drive.google.com/drive/folders/1SmelOACMwDvHuL3ABMJSaSmi3rCT5Geo

### Tarefa

Classificação de imagens.

## Tecnologias Utilizadas

- Python
- Ultralytics YOLO
- FastAPI
- HTML
- CSS
- JavaScript
- Google Colab

## Estrutura do Projeto


ProjetoBananas/
├── dataset/
├── backend/
├── frontend/
├── models/
└── README.md
```

## Fluxo da Aplicação

Imagem/Vídeo
   ↓
Frontend
   ↓
API FastAPI
   ↓
Modelo YOLO (best.pt)
   ↓
Classificação
   ↓
Resultado exibido ao usuário
```

🚀 Como Executar o Projeto
bash
# Criar ambiente virtual

-python -m venv venv
-source venv/bin/activate   # Linux/Mac
-venv\Scripts\activate      # Windows

# Instalar dependências
pip install -r requirements.txt

# Executar servidor
uvicorn main:app --reload

Acesse a documentação interativa em:
👉 http://127.0.0.1:8000/docs  
👉 http://127.0.0.1:8000/redoc



## Referências

- Dataset: Banana Ripeness Classification Dataset (Kaggle)
- Ultralytics YOLO
- FastAPI

