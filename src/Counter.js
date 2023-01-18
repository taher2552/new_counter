import './counter.css';

export function Display(props){
return(
    <>
    <h2>{props.text}</h2>
    <button className={props.class}>{props.btnName}</button>
    </>
)
}

;


export default function Counter(){
    return(
        <>
         <Display text={"this is h2 tag"} btnName={"Submit"} class={"red"} ></Display>
         <Display text={"this is another text"} btnName={"Add"} class={"green"} ></Display>
         <Display text={"this is third text"} btnName={"subtract"} class={"brown"} ></Display>
        </>
    )
}
