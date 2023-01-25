import Score from "./Score"

const Student = (props) => {
  return (
    <>
      <div className="card">
        <h1 className="name">{props.student.name}</h1>
        <p className="bio">{props.student.bio}</p>
        <h3>{props.student.name.split(" ")[0]} earned the following scores:</h3>
        <ul>
          {props.student.scores.map((score, idx) => 
            <Score 
              key={idx} 
              score={score} 
            />
          )}
        </ul>
      </div>
    </>
  )
}



export default Student