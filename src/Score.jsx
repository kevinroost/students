const Score = (props) => {
  let dateSplit = props.score.date.split("-")

  return (
    <>
      <li>{props.score.score}% on {dateSplit[1]}/{dateSplit[2]}</li>
    </>
  )
}

export default Score