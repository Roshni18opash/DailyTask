import React from 'react'
interface ErrorComponentsProps{
    count:number;
}

const ErrorComponents:React.FC<ErrorComponentsProps> = ({count}) => {
    if(count===10){
throw new Error("App is Going to Crash");
    }
return <h3>Count up to 10  :  {count}</h3>
}

export default ErrorComponents