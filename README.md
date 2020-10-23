# Atividade 1 TRC3

Resumo: aplicação CRUD para estrutura de disciplinas, desenvolvida em JavaScript para um banco de dados MongoDB em um Docker Container

Recursos e programas utilizados: NodeJS, Express, Mongoose, MongoDB, VScode, Kitematic, MongoDB Compass, Insomnia

### Configuração pessoal

Meu container subiu no endereço `192.168.99.100:27017`. Usei o então no *path* definido em `src\config\dbConnection.js`



## Execução inicial

- subir o container MongoDB no Kitematic.

- No código:
```yarn
yarn install
```

```yarn
yarn dev
```

- No MongoDB Compass, conectar-se ao endereço `mongodb://192.168.99.100:27017/topicos3`

- No Insomnia, seguir os métodos de interação.


## Interação

No Insomnia, a URL base de acesso é `http://localhost:3000/disciplinas`

#### método POST
Adiciona uma disciplina. Exemplo:

```json
{
	"codigo": 845126,
	"nome": "REDES 1",
	"turma": "A",
	"professor": "Diego Aves",
	"departamento": "CIC",
	"qtdCretidos": 4
}
```

#### método GET
Lista as disciplinas cadastradas
> http://localhost:3000/disciplinas 


#### método PUT

Busca uma disciplina com o ID informado no *path* da URL

> http://localhost:3000/disciplinas/{id}

#### método DELETE

Apaga uma disciplina com o ID informado no *path* da URL
> http://localhost:3000/disciplinas/{id}