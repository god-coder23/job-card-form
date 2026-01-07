import {Bookmark} from "lucide-react"
const Card = (props) => {
  return (
    <div>
      <div className="card">
              <div>
                <div className="top">
                <img src={props.logo} alt="" />
                <button>Save <Bookmark size={12}/></button>
              </div>
              <div className="center">
                <h3>{props.name} <span>{props.date}</span></h3>
                <h2>Senior UI/UX Designer</h2>
                <div className='tag'>
                  <h4>{props.tag1}</h4>
                  <h4>{props.tag2}</h4>
                </div>
              </div>
              </div>
              <div className="bottom">
                <div>
                  <h3>{props.pay}</h3>
                  <p>{props.jagah}</p>
                </div>
                <button>Apply Now</button>
              </div>
            </div>
    </div>
  )
}

export default Card
