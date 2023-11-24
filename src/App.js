import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placebear.com/640/360',
  'name': '이민서',
  'birthday': '890411',
  'gender': '여자',
  'job': '교사'
},
{
  'id': 2,
  'image': 'https://baconmockup.com/640/360',
  'name': '오상진',
  'birthday': '860103',
  'gender': '남자',
  'job': '백수'
},
{
  'id': 3,
  'image': 'https://placekitten.com/640/360',
  'name': '심슨',
  'birthday': '241010',
  'gender': '여자',
  'job': '애기'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id} 
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>

    );
  }
}

export default App;