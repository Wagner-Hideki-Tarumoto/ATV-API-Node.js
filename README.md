# API The Turismo

Esta API é utilizada para gerenciar um catálogo de pontos turísticos, permitindo operações de CRUD (criar, ler, atualizar e deletar) sobre os registros.

## Endpoints

---

### GET /turismos
Retorna a listagem de todos os pontos turísticos cadastrados.

**Parâmetros:** Nenhum.

**Resposta 200:**
```json
[
  {
    "id": 1,
    "nome": "Cristo Redentor",
    "localizacao": "Rio de Janeiro - RJ",
    "descricao": "Símbolo do Brasil, localizado no Morro do Corcovado"
  },
  {
    "id": 2,
    "nome": "Pelourinho",
    "localizacao": "Salvador - BA",
    "descricao": "Centro histórico com arquitetura colonial"
  }
]
```
**Resposta 500:**
```json
{ "erro": "Erro interno do servidor" }
```
### GET /turismos/:id
Retorna um ponto turístico pelo ID.

**Parâmetro:** `id` (obrigatório)

**Resposta 200:**
```json
{
  "id": 1,
  "nome": "Cristo Redentor",
  "localizacao": "Rio de Janeiro - RJ",
  "descricao": "Símbolo do Brasil, localizado no Morro do Corcovado"
}
```
**Resposta 404:**
```json
{ "erro": "Ponto turístico não encontrado" }
```
**Resposta 400:**
```json
{ "erro": "ID inválido" }
```
**Resposta 500:**
```json
{ "erro": "Erro interno do servidor" }
```
### POST /turismos
Cadastra um novo ponto turístico.

**Corpo da requisição:**
```json
{
  "nome": "Cristo Redentor",
  "localizacao": "Rio de Janeiro - RJ",
  "descricao": "Símbolo do Brasil, localizado no Morro do Corcovado"
}
```
Campos:
Tabela
| Campo | Tipo | Obrigatório |
|---|---|---|
| `nome` | String | ✅ Sim |
| `localizacao` | String | ✅ Sim |
| `descricao` | String | ❌ Não |


**Resposta 201:**

Sucesso sem conteúdo.

**Resposta 500:**
```json
{ "erro": "Erro interno do servidor" }
```
### PUT /turismos/:id

Atualiza um ponto turístico existente.

Parâmetro: id (obrigatório)

Corpo da requisição:
```json
{
  "nome": "Cristo Redentor - Atualizado",
  "localizacao": "Rio de Janeiro - RJ",
  "descricao": "Um dos principais cartões postais do mundo"
}
```
**Resposta 200:**
```json
{
  "id": 1,
  "nome": "Cristo Redentor - Atualizado",
  "localizacao": "Rio de Janeiro - RJ",
  "descricao": "Um dos principais cartões postais do mundo"
}
```
**Resposta 400:**
```json
{ "erro": "ID inválido ou dados malformados" }
```
**Resposta 500:**
```json
{ "erro": "Erro interno do servidor" }
```
### DELETE /turismos/:id

Remove um ponto turístico.

Parâmetro: id (obrigatório)



**Resposta 204:** 

Sucesso sem conteúdo.

**Resposta 400:**
```json
{ "erro": "ID inválido" }
```
**Resposta 500:**
```json
{ "erro": "Erro interno do servidor" }
```
**Autenticação**
Cabeçalho obrigatório em todas as requisições:

**plaintext**
Authorization: Bearer <seu-token-aqui>
