export default function Doors (props){

    //Created a variable for use below
    let element;
    
    //If the result props value is equal to an empty string
    if(props.result === ""){
        
        //The element variable gets set to the following
        element = ( <div id={props.id} className={props.className} onClick={props.func}></div>)
    }

    //Else it get's set to the following
    else{

        //Note the onClick function gets removed as soon as the player wins or loses
        element = ( <div id={props.id} className={props.className}></div>)
    }

    //The element gets returned
    return element;

}