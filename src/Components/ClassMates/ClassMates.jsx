import React,{ useState } from 'react';

import { Button } from 'react-bootstrap';       
export const ClassMates = () => {
    const [classmatesCount, setClassmatesCount] = useState(0);

    return (
    <React.Fragment>
        <h1>{`Classmates are awesome.
            I have total ${classmatesCount} classmates.`}</h1>
        
        
        <Button variant="primary" onClick={()=>setClassmatesCount(classmatesCount + 1)}>Add Classmates</Button>
        <br />
        <br />
        <Button variant="primary" onClick={()=>setClassmatesCount(classmatesCount-1)}>Remove Classmates</Button>
    </React.Fragment>
    );
};
