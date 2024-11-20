import React, { useState } from "react";

const useCustomhook=(inhook)=>{  // zero pass to inhook in this line from app.jsx
    const [val,setval]=useState(inhook) //zero again pass to this line and assign 0 to val
    const increment=()=>{ 
        setval(val+1)
    }
    const decrement=()=>{
        setval(val-1)
    }
    return{val,increment,decrement}

}
export default useCustomhook