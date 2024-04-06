import React from 'react';
import "./ChakraBasic.css"
import ModalInfo from '../ModalInfo/ModalInfo';



// export default function ChakraBasic() {
//     return (
//         <div className="ChakraBasic">
//             testing
           
//         </div>
//     );
// }

export default function ChakraBasic() {
    
    const DummyData = [{name: "Starbucks",address: "1626 W Katella Ave, Anaheim, CA 9342"}, 
    {name: "In-N-Out",address: "1245 W Orange Ave, Orange, CA 93242"}, 
    {name: "Home Depot",address: "1926 W NewSide Ave, Buena, CA 92802"}]
    return (
      <>
      <div className="chakra">
        {DummyData.map((item, index) => (
          <ModalInfo key={index + 1} data={DummyData[index]}/>
        ))}     
        
      </div>
      </>
    )
  }