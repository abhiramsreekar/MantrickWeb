import Card from 'react-bootstrap/Card';
import './Newcard.css'

function BasicExample({img,delay}) {
  return (
    <Card className='basiccard' style={{animationDelay:"."+9*delay+"s"}}>
      <img src={img} style={{width:"15vw"}}/>
    </Card>
  );
}

export default BasicExample;