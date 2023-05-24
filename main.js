const body = document.querySelector('body');
body.style.background = 'black'

alert('My The Force Be With You')

const container = document.createElement('div');
container.classList.add('container');
container.style.width = '1000px';
container.style.height = '250px';
container.style.margin = '40px auto';
container.style.display = 'flex';
container.style.background = 'black';
container.style.flexDirection = 'column'
body.appendChild(container);

const header = document.createElement('h1')
header.textContent = 'Star Wars!'
// header.style.margin = 'auto'
 header.style.display = 'flex'
// header.style.flexWrap = 'wrap'
header.style.justifyContent = 'center'
header.style.color = 'yellow'
container.appendChild(header)

const button = document.createElement('button');
button.classList.add('Generte')
button.style.width = '100px';
button.style.height = '40px';
button.style.margin = 'auto';
button.style.display = 'flex'; 
button.style.background = 'blue';
button.style.flexDirection = 'column'
//button.textContent = 'Generate'
container.appendChild(button)

const header2 = document.createElement('h2')
header2.textContent = 'Generate'
header2.style.color = 'black'
//header2.style.width = '50px'
//header2.style.height = '10px'
header.style.display = 'flex'
header2.style.justifyContent = 'center'
button.appendChild(header2)

const button2 = document.createElement('button')
button2.classList.add('Delete')
button2.style.width = '100px';
button2.style.height = '40px';
button2.style.margin = 'auto';
button2.style.display = 'flex'; 
button2.style.background = 'blue';
button2.style.flexDirection = 'column'
container.appendChild(button2)

const header3 = document.createElement('h3')
header3.textContent = 'Delete'
header3.style.color = 'black'
// header2.style.width = '50px'
// header2.style.height = '10px'
header3.style.display = 'flex'
header3.style.justifyContent = 'center'
button2.appendChild(header3)

 button.addEventListener('click', function() {
    async function logJSONData() {
        const response = await fetch("https://swapi.dev/api/planets/3/?format=json")
        const jsonData = await response.json();
        createStats(jsonData)
        console.log(jsonData);
      }
      logJSONData()     
 })
 function createStats(obj) {
   for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
    const h1 = document.createElement('h1')
    h1.textContent = `${key}: ${value}`
    h1.style.color = 'red'
    h1.style.justifyContent = 'center'
    h1.style.display = 'flex'
    document.querySelector('body').appendChild(h1)
   }
 }
//  function removeList() {
   button2.addEventListener('click', function() {
      h1.remove()
   })
// }
// removeList()