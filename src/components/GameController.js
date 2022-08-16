import React from 'react';
import Door from './Door';
import Result from './Result';

//Created a class that controlls the state of the Monty Hall Game
class GameController extends React.Component{

    constructor(){
        super()

        //Sets the state to the initial state function
        this.state = this.getInitialState();
    }

    //Created a function that represents the initial state of the game
    getInitialState = () => ({

        //The loaction of the prize gets set to a random number (either 1, 2 or 3)
        prizeLocation: Math.floor(Math.random() * 3) + 1,
        firstLosingDoor: 0,
        currentDoorSelected: 0,
        result: "",
        doors:[
            {
                id: 1,
                className: "door" 
            },
            {
                id: 2,
                className: "door" 
            },
            {
                id: 3,
                className: "door" 
            }
        ]
    })

    //Created a function the returns the state of the game back to the initial state
    handleGameReset = () => {
        this.setState(this.getInitialState());
    }

    //Created a function that handles all door events
    handleDoorEvents = (e) => {

        //Makes a copy of the state's array of door objects
        let doorObjArr = this.state.doors;

        //Checks if the user has not clicked on a door before
        if(this.state.currentDoorSelected === 0){

            //If not then the state of the currentDoorSelected gets update to the id of the door the user has clicked on
            this.setState({
                currentDoorSelected: parseInt(e.target.id)
                
            //A callback gets made to the reveal losing door function passing in the doorObjArr created earlier as well as the state of the currentDoorSelected
            }, () => this.revealLosingDoor(this.state.currentDoorSelected, doorObjArr))
            
        }

        //Else if the user has clicked on a door before
        else{

            //The state of the currentDoorSelected gets update to the id of the door the user has clicked on
            this.setState({
                currentDoorSelected: parseInt(e.target.id)
            
            //A callback to a different function, the revealWinningDoorFunction, 
            //gets made and the doorObjArr created earlier as well as the state of the firstLosingDoor gets passed in as params
            }, () => this.revealWinningDoor(parseInt(this.state.firstLosingDoor), doorObjArr))
           
        }
        
    }

    //Created a function that reveals the losing doors (reveals one with each call)
    //Takes in 2 params: a door to remove (this will either be first losing door or the current door the user has clicked on) and an array of door objects
    //The first time this function gets called the value of the state's currentDoorSelected prop will be passed through as the doorToRemove param
    //The second time this function gets called the value of the state's firsLosingDoor prop will be passed through as the doorToRemove param
    revealLosingDoor = (doorToRemove, doorObjArr) => {
        
        //Created an array that represents the id's of the doors
        let doorArr = [1, 2, 3];

        //Created an array that represents the doors that need to be removed from the above array
        let doorsToRemoveArr = [doorToRemove, this.state.prizeLocation];
        
        //The door array then removes the items that are present in the doorToRemoveArr
        doorArr = doorArr.filter(arrItem => doorsToRemoveArr.indexOf(arrItem) === -1);
        
        //Created a variable for use below
        let doorToOpen;

        //If the door arrays length is greater than 1
        if(doorArr.length > 1){

            //Then the doorToOpen variable gets set to a random item in the array
            doorToOpen  = doorArr[Math.floor(Math.random() * 2)];
           
        }

        //If the length is equal to one then the doorToOpen variable gets set to the first item in the array 
        else{
            doorToOpen = doorArr[0];
        }
        
        //If the firstLosingDoor's state has not been set
        if(this.state.firstLosingDoor === 0){

            //Then it will set the state to the doorToOpen variable's value
            this.setState({firstLosingDoor: doorToOpen});
        }
        
        //Created a losingDoor variable that finds the door object with the id equal to the doorToOpen variable's value
        let losingDoor = doorObjArr.find(doorObj => doorObj.id === doorToOpen);

        //That object's className get's set to the following
        losingDoor.className = "losingDoor";

        //The state of the doors array of objects then gets set to the copy made earlier in the handleDoorEvents function
        this.setState({doorObjArr})
    
    }


    //Created a function that reveals the winning door
    //Takes in the same params as the revealLosingDoor function 
    revealWinningDoor = (doorToRemove, doorObjArr) => {

        //The revealLosingDoorFunction gets called in order to reveal the second losing door and the params from the revealWinningDoor function gets passed to it
        this.revealLosingDoor(doorToRemove, doorObjArr);

        //Created a winningDoor variable that finds the door object with the id equal the prizeLocation's state value
        let winningDoor = doorObjArr.find(doorObj => doorObj.id === this.state.prizeLocation);

        //That object's className get's set to the following
        winningDoor.className = "winningDoor";

        //The state of the doors array of objects then gets set to the copy made earlier in the handleDoorEvents function
        //A callback gets made to the setResuls function
        this.setState({doorObjArr}, () => this.setResults())
    }


    //Created a set results function
    setResults = () => {

        //Checks if the value of the state's currentDoorSelected property is equal to the value of the state's prizeLocation property
        if(this.state.currentDoorSelected === this.state.prizeLocation){
            
            //If so then the state's result property get updated to "win"
            this.setState({result: "win"})
        }

        //If not then the state's result property get updated to "lose"
        else{
           this.setState({result: "lose"})
        }
    }

    render(){
        return(
            <div className="game">

                <h1 className='flexContainer gameHeader'>Monty Hall Game</h1>

                <div className="flexContainer">

                    {/* Maps the state's doors array of object's properties to the Door component as props (this will create 3 Door components), 
                    also added a func (set to the handleDoorEvents function) and result (set to the state's result property) property */}
                    {this.state.doors.map((door) => 
                    <Door 
                        func={this.handleDoorEvents}
                        result = {this.state.result} 
                        id={door.id} 
                        className={door.className}
                        key={door.id} 
                    />)}

                </div>

                {/* Created a button that has an onClick function that resets the game  */}
                <div><button className='flexContainer resetBtn' onClick={this.handleGameReset}>Reset game</button></div>
                
                {/* Added the result component passing in the state's result property as a prop */}
                <Result result={this.state.result}/>
            </div>
        )
    }
}

export default GameController;