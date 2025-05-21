
# 📦 Fit Track

API REST para gerenciamento de usuários, treinos e dietas, com foco em pessoas que buscam acompanhar seus hábitos de vida saudável.

---

## 🎯 Objetivo do Projeto

O projeto **Fit Track** foi desenvolvido com o objetivo de facilitar o controle personalizado de treinos e dietas para diferentes usuários. Através dessa API, é possível:

- Cadastrar e gerenciar perfis de usuários.
- Associar treinos e dietas específicas a cada usuário.
- Registrar detalhes como exercícios, tempos de descanso, refeições, horários e objetivos.

Essa API pode servir como base para uma aplicação front-end mobile ou web, facilitando a organização de rotinas fitness personalizadas.
### Modelagem

## ![modelagem](./assest/modelagem.png)



## 🧠 Sobre a Modelagem

A modelagem foi pensada com foco em **relacionamentos entre entidades** e **simplicidade de expansão futura**. Os principais modelos são:

- **Usuário (`User`)**: contém dados pessoais e referência a um treino e uma dieta específicos.
- **Treino (`Treino`)**: lista de exercícios, tempo, categoria (ex: força, resistência), etc.
- **Dieta (`Dieta`)**: conjunto de refeições distribuídas por horários, com foco nutricional.

Cada modelo é independente, mas conectado por meio de referências (`treino_id`, `dieta_id`), facilitando tanto a manutenção quanto o reaproveitamento de treinos e dietas entre usuários.

---

## 🗂 Estrutura do Projeto

```
├── backend
│   ├── controllers        # Camada de controle das rotas
│   ├── models             # Definição dos modelos
│   ├── routes             # Arquivo de rotas da aplicação
│   └── server.js          # Arquivo principal da aplicação
├── package.json           # Gerenciador de dependências
├── package-lock.json      # dependências do projeto
├── node_modules           # dependências do projeto
├── assest                 #Imagem da Modlelagem 
├── README.md              # Documentação do projeto

```
## 🔗 Como Executar o Projeto

### ✅ Pré-requisitos

- Node.js
- npm
- Git
- Visual Studio Code
- Cliente HTTP (Insomnia, Postman ou Thunder Client)

---

### 💻 Execução Local

1. Clone o repositório:
```bash
git clone https://github.com/usuario/nome-do-projeto.git
```

2. Acesse a pasta do projeto:
```bash
cd backend
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor:
```bash
node server.js
```

Se estiver tudo certo, verá no terminal:
```
Servidor rodando em http://localhost:5000
Conectado ao Atlas
```
Se ocorrer algum erro verifique se está você na raiz do projeto e execute novamente

---

### 🌐 Execução Remota

Você pode acessar a API diretamente pelo back-end hospedado no Render:

```
https://fittrack-ratz.onrender.com
```

Utilize essa URL no Insomnia ou Postman com as rotas:
- `/user`
- `/treino`
- `/dieta`


---

## 🔁 Rotas e Exemplo de Dados
- `POST /treino` – Criar novo treino
- `GET /treino` – Listar treino
- `PUT /treino/:id` – Atualizar treino
- `DELETE /treino/:id` – Deletar treino

### 🏋️ Treinos

**Exemplo JSON:**
```json
{
  "nome": "Treino A - Superior",
  "descricao": "Treino focado nos músculos superiores",
  "tempo": "45 min",
  "categoria": "Força",
  "exercicios": [
    {
      "nome": "Supino reto",
      "series": 4,
      "repeticoes": 12,
      "descansoSeries": "1min30s"
    },
    {
      "nome": "Crucifixo",
      "series": 3,
      "repeticoes": 10,
      "descansoSeries": "1min20s"
    }
  ]
}
```

### 🥗 Dietas

**Exemplo JSON:**
```json
{
  "nome": "Dieta Hipercalórica",
  "descricao": "Alta ingestão calórica para ganho de massa",
  "data": "2025-05-20",
  "refeicoes": [
    {
      "horario": "8:00",
      "descricao": ["Ovos", "Pão integral", "Suco de laranja"]
    },
    {
      "horario": "12:00",
      "descricao": ["Arroz", "Feijão", "Frango grelhado", "Salada"]
    }
  ]
}
```
### 👤 Usuários
**Exemplo JSON:**
```json
{
  "nome": "João da Silva",
  "cpf": "12312312312",
  "email": "joao@email.com",
  "senha": "123456",
  "idade": 25,
  "altura": 1.75,
  "observações": "lesão no joelho direito",
  "treino_id": "treino123",
  "dieta_id": "dieta123"
}
```



---

## 🧪 Testando com Insomnia

1. Instale o Insomnia: [https://insomnia.rest/](https://insomnia.rest/)
2. Importe o arquivo `insomnia_collection.json` (disponível na raiz do projeto)
3. Teste as requisições de usuário, treino e dieta

---
