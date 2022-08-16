export default function Result (props){
    
    //Created a variable for use below
    let element;

    //If the props result value is equal to "win"
    if(props.result === "win"){

        //The element variable gets set to the following
        element = (
            <div className="result"><h2>Congratulations, you win! Well played!</h2></div>
        )
    }

    //If the props result value is equal to "lose"
    else if (props.result === "lose"){

        //The element variable gets set to the following
        element = (
            <div className="result"><h2>Unfortunately, you've lost! Better luck next time!</h2></div>
        )
    }

    //Else if the props result value is equal to an empty string the element gets set to null
    else{
        element = null;
    }

    //The element gets returned
    return element;
}