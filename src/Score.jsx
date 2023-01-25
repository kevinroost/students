import Moment from 'react-moment'

const Score = (props) => {
  let dateSplit = props.score.date.split("-")

  return (
    <>
      <p>{props.score.score}% on {dateSplit[1]}/{dateSplit[2]}</p>
    </>
  )
}

export default Score