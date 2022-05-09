function Print(props) {
  return (
    <div>
      {
        props.data.map((item) => (
          <div className={"card " + item.status}>
            <img src={item.linkImg} />
            <p>{item.name}&nbsp;&nbsp;&nbsp;&nbsp;<span>{item.status}</span></p>
          </div>
        ))
      }
    </div>
  );
}

function tick(arrCharacters) {
  ReactDOM.render(
    <Print data={arrCharacters} />,
    document.getElementById('root')
  );
}

(async () => {
  let data = [];
  for(let i = 0; i < 43; i++){
    const response = await fetch('https://rickandmortyapi.com/api/character/?page='+i)
    const characters = await response.json()
    data = data.concat(characters.results.map(element => {
      return { "name": element.name, "linkImg": element.image, "status": element.status }
    }));
  }
  console.log(data)
  tick(data)
})()