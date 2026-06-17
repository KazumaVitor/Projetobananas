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

## Modelo Base Utilizado

### Modelo Escolhido

YOLO11n-cls

### Justificativa da Escolha

A variante YOLO11n-cls foi escolhida por ser um modelo leve e eficiente para tarefas de classificação de imagens. O modelo apresenta baixo custo computacional, treinamento rápido e boa precisão, sendo adequado para execução em computadores comuns e aplicações em tempo real.

## Ferramenta de Anotação

Não foi necessária anotação manual, pois o dataset utilizado já estava previamente organizado e rotulado para a tarefa de classificação de imagens.

## Resultados do Treinamento

O modelo foi treinado utilizando o dataset Banana Ripeness Classification Dataset.

### Métricas Obtidas

* Top-1 Accuracy: 99,11%
* Top-5 Accuracy: 100%

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

## Interface Gráfica

A aplicação possui uma interface web desenvolvida pela equipe utilizando HTML, CSS e JavaScript.

Funcionalidades:

* Upload de imagem.
* Envio da imagem para a API.
* Exibição da classificação da banana.
* Exibição da confiança da predição.
* Exibição de recomendação baseada no estágio de maturação.

## Pesos do Modelo

O arquivo treinado do modelo encontra-se disponível em:

`models/best.pt`

ou através do link disponibilizado no Google Drive da equipe.


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

Imagem
   ↓
Frontend
   ↓
API FastAPI
   ↓
YOLO
   ↓
Classificação
   ↓
Resultado
```

## Resultados



## Referências

- Dataset: Banana Ripeness Classification Dataset (Kaggle)
- Ultralytics YOLO
- FastAPI

