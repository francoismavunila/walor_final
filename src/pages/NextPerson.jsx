import React from 'react';
import './Group.css'; // Import the CSS file for styling
import { farm2, farm1, farm3, farm4, women1, women2, women3, men1, men2 } from "../assets";

const peopleData = [
  { id: 1, name: 'John Doe', image: women2 },
  { id: 2, name: 'Jane Smith', image: women3 },
  { id: 3, name: 'Mike Johnson', image: men1 },
  { id: 4, name: 'Emily Davis', image: men2 },
];

class NextPerson extends React.Component {
  state = {
    nextInLineId: 1,
  };

  render() {
    const { nextInLineId } = this.state;

    return (
      <div className="person-container">
        <h2>Harvest Helpers Fund Group members</h2>
        <div className="card-container">
          {peopleData.map((person) => (
            // <div
            //   key={person.id}
            //   className={`card ${person.id === nextInLineId ? 'highlighted' : ''}`}
            // >
            //   <img src={person.image} alt={person.name} />
            //   <h3>{person.name}</h3>
            // </div>


            <div className="bg-white rounded-lg overflow-hidden shadow-md m-4 w-64 " id={`${person.id === nextInLineId ? 'high' : ''}`}>
            {/* person Image */}
            <img
              src={person.image} // Replace with the URL of the person's image
              alt="person"
              className="w-full h-32 object-cover"
            />
      
      
            {/* Buttons for actions (e.g., join, contribute, etc.) */}
            <div className="p-4">
                {person.name}
            </div>
          </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NextPerson;