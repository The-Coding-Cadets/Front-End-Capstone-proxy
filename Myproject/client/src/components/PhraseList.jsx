import React from 'react';
import data from '../sample_data.js';



//{data.map((item) => <div>hello!</div>)}

const Tabs = () => (
  <div>
    <h1>Phrase List</h1>
      <div className="phrases">
        <div className="phrase-table">
          <div>
          {data.map((item) => <div className="phrase-row" key={item.id}>
 <div className="phrase-data">{item.kor}</div>
 <div className="phrase-data">{item.rom}</div>
 <div className="phrase-data">{item.eng}</div>
 <div className="phrase-data">{item.status}</div>
 </div>)}
          </div>
        </div>
      </div>
  </div>
);

export default Tabs;