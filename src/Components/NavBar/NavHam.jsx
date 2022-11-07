// return (
//   Hamburger Animation - Currently Ice Boxed
//     < div className = "ham-container" >
//       <span className={isNavExpanded ? "ham on t" : "ham off t"} > &nbsp;</span>
//       <span className={isNavExpanded ? "ham on m" : "ham off m"} > &nbsp;</span>
//       <span className={isNavExpanded ? "ham on b" : "ham off b"} > &nbsp;</span>
//     </div > 
// )



// .ham-container {
//   text-align: center;
//   justify-content: center;
  
//   position: absolute;
//   top: 50%;
//   right: 25px;
//   transform: translateY(-50%);
//   display: block;
// }

// .ham {
  
//   display: none;
//   width: 33px;
//   height: 4px;
//   margin-bottom: 4px;
//   position: relative;

//   background-color: orange;
//   border-radius: 3px;
  
//   z-index: 1;
  
//   transform-origin: 0% 0%;
  
//   transition: 
//               transform 0.5s ease-in-out,
//               background-color 0.5s ease-in-out,
//               opacity 0.55s ease;
// }
// .ham.off.t{
//   background-color: blue;

// }
// .ham.off.b{
//   background-color: green;
// }
// .ham.on.t{ 
//   left: 3px;
//   opacity: 1;
//   transform: rotate(45deg) translate(-3px, -3px);
//   background: #232323;
// }
// .ham.on.m{
//   opacity: 0;
//   transform: rotate(0deg) scale(10%);
// }
// .ham.on.b{
//   opacity: 1;
//   transform: rotate(-45deg) translate(-3px, 50%);
//   background: #232323;
// }
