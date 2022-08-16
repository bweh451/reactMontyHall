//Created a Header component that returns elements displaying information about the monty hall problem
export default function Header () {

    return(
        <div className="header">
            <div className="flexContainer"><h1>The Monty Hall problem</h1></div>
            <div className="flexContainer">
                <p>
                    According to <a href="https://en.wikipedia.org/wiki/Main_Page">Wikipedia</a>: <q>The Monty Hall problem is a brain teaser, in the form of a probability puzzle, 
                    loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall. 
                    The problem was originally posed (and solved) in a letter by Steve Selvin to the American Statistician in 1975. It became famous as a question from reader 
                    Craig F. Whitaker's letter quoted in Marilyn vos Savant's 'Ask Marilyn' column in Parade magazine in 1990.</q>
                </p>
            </div>
            
            <div className="flexContainer"><h2>The problem:</h2></div>
            <div className="flexContainer">
                <p>
                    <q>Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. 
                    You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. 
                    He then says to you, 'Do you want to pick door No. 2?' Is it to your advantage to switch your choice?</q> - (From Parade magazine's Ask Marilyn column)
                </p>
            </div>
            <div className="flexContainer"><span>-Source: <a href="https://www.statisticshowto.com/probability-and-statistics/monty-hall-problem/">staticshowto.com</a></span></div>
            

            <div className="flexContainer"><h2>So what do you do, switch doors or stick with your first pick?</h2></div>
            <div className="flexContainer">
                <p>
                    Believe it or not, it's actually to your benefit to switch. If you switch, you have roughly a 2/3 chance of winning the car.
                    If you stick to your original choice you have roughly a 1/3 chance of winning the car.
                    The answer sounds unlikely. After door 3 is opened, you would think that you then have two doors to choose from…both with the same odds. 
                    However, you are actually much more likely to win if you switch. Many statisticians are still dumbfounded by this and it has been proven time and time again!
                </p>
            </div>
            <div className="flexContainer"><span>-Source: <a href="https://www.statisticshowto.com/probability-and-statistics/monty-hall-problem/">staticshowto.com</a></span></div>

            <div className="flexContainer"><h2>Try it out yourself!</h2></div>
            <div className="flexContainer"><p>Below is a game you can play that simulates the Monty Hall problem. Check it out to see if it really is in your benefit to switch. Remember to have fun!</p></div>
            
        </div>
    )
}