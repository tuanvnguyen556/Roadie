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
    
    const DummyData = ["Starbucks", "In-N-Out"]
    return (
      <>
      <div className="chakra">     
        <ModalInfo data={DummyData[0]}/>
      </div>
      </>
    )
  }