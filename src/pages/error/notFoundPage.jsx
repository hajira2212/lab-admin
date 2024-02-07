import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img alt='Error' src={"https://i.stack.imgur.com/6M513.png"}  />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;