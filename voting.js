import Poll from 'react-polling';
import React,{Component} from 'react';

const pollQuestion = 'Which is you Favourite Dish Rank them From (1 to 3'
const pollAnswers = [
  { option: 'Yes', votes: 8 },
  { option: 'No', votes: 2 }
]
 
export default class Voting extends Component {
  // Setting answers to state to reload the component with each vote
  state = {
    pollAnswers: [...pollAnswers]
  }
 
  // Handling user vote
  // Increments the votes count of answer when the user votes
  handleVote = voteAnswer => {
    const { pollAnswers } = this.state
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    })
    this.setState({
      pollAnswers: newPollAnswers
    })
  }
 
  render () {
    const { pollAnswers } = this.state
    return (
      <div>
        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
      </div>
    );
  }
};




// import React from "react";
// import { Card, Button } from "react-bootstrap";

// function Voting(props) {
//   let { team, incrementVoteCount } = props;

//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={`/assets/images/${team.logo}`} />
//       <Card.Body>
//         <Card.Title>{team.name}</Card.Title>
//         <Button variant="success" onClick={() => incrementVoteCount(team._id)}>
//           Vote
//         </Button>
//       </Card.Body>
//       <Card.Footer>Vote count: {team.votes}</Card.Footer>
//     </Card>
//   );
// }
// export default Voting;