import React from 'react';

function Test(symbol){
    console.log(symbol)
    return(
        <>
        <div>
            {symbol.BTCUSDT !== undefined ? (
                <p>
                    s:{symbol.BTCUSDT.s}
                    <br/>
                    b:{symbol.BTCUSDT.b}
                    <br/>
                    a:{symbol.BTCUSDT.a}
                </p>
            ): null}
        </div>
        <div>
            {symbol.ETHUSDT !== undefined ? (
                <p>
                    s:{symbol.ETHUSDT.s}
                    <br/>
                    b:{symbol.ETHUSDT.b}
                    <br/>
                    a:{symbol.ETHUSDT.a}
                </p>
            ): null}
        </div>
        </>
    )
}
export default Test;