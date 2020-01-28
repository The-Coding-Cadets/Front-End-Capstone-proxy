import data from '../sample_data.js'
console.log(data)
console.log(data[0].id)
console.log(data[0].kor)
console.log(data[0].eng)
console.log(data[0].rom)
console.log(data[0].status)

data.map((item) => console.log(item.id, item.kor, item.eng))


<ul>{data.map((item) => console.log(item))}</ul>

//           <div className="phrase-row">
// <div className="phrase-data">item.kor</div>
// <div className="phrase-data">item.rom</div>
// <div className="phrase-data">item.eng</div>
// <div className="phrase-data">item.status</div>
// </div>