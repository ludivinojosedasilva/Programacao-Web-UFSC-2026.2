
function  GET(url)
{
  console.log('acessa a url para GET:'+url)
}
function POST(url,dados)
{
  console.log('acessa a url para POST com os dados:' + url + '  ' + dados);

}
export { GET, POST };
