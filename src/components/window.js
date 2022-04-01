// import React from "react"

// export default function WindowTracker() {
    
//     const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
//     React.useEffect(() => {
//         window.addEventListener("resize", function() {
//             setWindowWidth(window.innerWidth)
//         })
//     }, [])
    
//     return (
//         <h1>Window width: {windowWidth}</h1>
//     )
// }


// import React from "react"
// import WindowTracker from "./WindowTracker"

// export default function App() {
//     /**
//      * Challenge:
//      * 1. Create state called `show`, default to `true`
//      * 2. When the button is clicked, toggle `show`
//      * 3. Only display `<WindowTracker>` if `show` is `true`
//      */
    
//     const [show, setShow] = React.useState(true)
    
//     function toggle() {
//         setShow(prevShow => !prevShow)
//     }
    
//     return (
//         <div className="container">
//             <button onClick={toggle}>
//                 Toggle WindowTracker
//             </button>
//             {show && <WindowTracker />} 
//             {/* //Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. at WindowTracker (exe1.bundle.js:69:56) */}
//             {/* when we are toggling off windeoe but we are usjing windows resize use effect whiuch runs even wheb component not rendred */}

//         </div>
//     )
// }

// import React from "react"

// export default function WindowTracker() {
    
//     const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
//     React.useEffect(() => {
//         function watchWidth() {
//             console.log("Setting up...")
//             setWindowWidth(window.innerWidth)
//         }
        
//         window.addEventListener("resize", watchWidth)
        
//         return function() {
//             console.log("Cleaning up...")
//             window.removeEventListener("resize", watchWidth)
//         }
//     }, []) 
//     //thus we can use a effect dependency in use effect and it can return one function
    
//     return (
//         <h1>Window width: {windowWidth}</h1>
//     )
// }
