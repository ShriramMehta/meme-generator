// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
    
//     // console.log("Component rendered")
//     //Continuous rendered because of setSatrWarsData(data)
    
//     fetch("https://swapi.dev/api/people/1")
//         .then(res => res.json())
//         .then(data => setStarWarsData(data))
    
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }

// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(0)
    
//     console.log("Component rendered")
    
//     /**
//      * Challenge: re-write the useEffect
//      * It should run any time `count` changes
//      * For now, just console.log("Effect function ran")
//      */
//     React.useEffect(() => {
//         console.log("Effect function ran")
//     }, [count])
//     //Second parameter is dependency without it it remains the same rendering agein and again.ifwe add nothing to it it will run once only that effect function ran will be typed only once. but if we add count wvrytime count changes it will run
//     //also this function will run only after react has placed the comonent on dom
    
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
//         </div>
//     )
// }


// 1. What is a "side effect" in React? What are some examples?
// - Any code that affects an outside system.
// - local storage, API, websockets, two states to keep in sync


// 2. What is NOT a "side effect" in React? Examples?
// - Anything that React is in charge of.
// - Maintaining state, keeping the UI in sync with the data, 
//   render DOM elements


// 3. When does React run your useEffect function? When does it NOT run
//    the effect function?
// - As soon as the component loads (first render)
// - On every re-render of the component (assuming no dependencies array)
// - Will NOT run the effect when the values of the dependencies in the
//   array stay the same between renders


// 4. How would you explain what the "dependecies array" is?
// - Second paramter to the useEffect function
// - A way for React to know whether it should re-run the effect function



// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(0)
    
//     /**
//      * Quiz:
//      * 1. What will happen if I put back our Star Wars API call
//      *    into the effect function?
//      * 2. How will the useEffect be different if I use 
//      *    setStarWarsData() instead of console.log()
//      * 3. What SHOULD be in our dependencies array in this case?
//      */
//     React.useEffect(function() {
//         console.log("Effect ran")
//         fetch("https://swapi.dev/api/people/1")
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     }, [])
//     //if count used here then everytime setstarwarsdata makes api calls and count is differnt it will run 
//     //if starwarsdata is used then evrytime setstarwarsdata is called it will change starwarsdata and will go into infinte loop
//     //now it will only once run
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
//         </div>
//     )
// }


// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(1)
    
//     /**
//      * Challenge: Combine `count` with the request URL
//      * so pressing the "Get Next Character" button will
//      * get a new character from the Star Wars API.
//      * Remember: don't forget to consider the dependencies
//      * array!
//      */
    
//     React.useEffect(function() {
//         console.log("Effect ran")
//         fetch(`https://swapi.dev/api/people/${count}`)
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     }, [count])
//     //here once get next chracter is clicke on screen, react rerenders commonent which in turn checks cont aray old and new notices change and in turn calls the starwars api
//     return (
//         <div>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }





