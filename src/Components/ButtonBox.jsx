import Button from "./Button"

export default function ButtonBox() {
    const buttons = [
        ["C", "%", "DEL", "/",
        7, 8, 9, "x",
        4, 5, 6, "-",
        1, 2, 3, "+",
        0, ".", "="]
    ]
    return (
        <div className="buttonBox mt-3">
            {buttons.flat().map((btn, i)=>(
                <Button btn={btn} key={i}/>
            ))}
        </div>
    )
}