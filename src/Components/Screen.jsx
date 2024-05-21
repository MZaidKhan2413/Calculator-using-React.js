import { Textfit } from 'react-textfit';
import { useContext } from 'react';
import { CalcContext } from "../Context/CalcContext";

function Screen() {
    const {calc} = useContext(CalcContext)
    return (
        <Textfit className="screen p-1" max={70}>
            {calc.num || calc.res || 0}
        </Textfit>
    )
}

export default Screen