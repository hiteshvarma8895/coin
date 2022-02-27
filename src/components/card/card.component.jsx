import React from 'react';

function Card(symbol){
    let abc = Object.entries(symbol);
    return(
        <>
        <div>
            {abc[0][1] !== undefined ? (
                <p>
                    s:{abc[0][1].s}
                    <br/>
                    b:{abc[0][1].b}
                    <br/>
                    a:{abc[0][1].a}
                </p>
            ): null}
        </div>
        <div>
            {abc[1][1] !== undefined ? (
                <p>
                    s:{abc[1][1].s}
                    <br/>
                    b:{abc[1][1].b}
                    <br/>
                    a:{abc[1][1].a}
                </p>
            ): null}
        </div>
        </>
    )
}
export default Card;