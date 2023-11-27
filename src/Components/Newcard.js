import Card from 'react-bootstrap/Card';
import './Newcard.css'

function BasicExample({img,delay}) {
  return (
    <Card className='basiccard' style={{backgroundImage:`url(${img})`,animationDelay:"."+9*delay+"s"}}></Card>
  );
}

export default BasicExample;