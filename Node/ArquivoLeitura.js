const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sicrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = conteudo = JSON.parse(conteudo) //transformar para objeto
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./Arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteudo da pasta...')
  console.log(arquivos)
})
