import React , { Component } from 'react';
import './card.css';
 
class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
 
    }
  }
  render(){
    return (
        <div class="grid">
            <figure class="effect-apollo">
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" alt="img18"/>
                <figcaption>
                    <h2>Strong <span>Apollo</span></h2>
                    <p>Apollo's last game of pool was so strange.</p>
                    <a href="#">View more</a>
                </figcaption>			
            </figure>
            <figure class="effect-apollo">
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" alt="img22"/>
                <figcaption>
                    <h2>Strong <span>Apollo</span></h2>
                    <p>Apollo's last game of pool was so strange.</p>
                    <a href="#">View more</a>
                </figcaption>			
            </figure>
            <figure class="effect-apollo">
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" alt="img22"/>
                <figcaption>
                    <h2>Strong <span>Apollo</span></h2>
                    <p>Apollo's last game of pool was so strange.</p>
                    <a href="#">View more</a>
                </figcaption>			
            </figure>
        </div>
    )
  }
}
export default Card;