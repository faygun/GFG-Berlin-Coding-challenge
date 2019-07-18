import React,{Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class ImageModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        product: props.row,
        isOpen: false
      };
    }
    
    render() {
        const { isOpen } = this.state;
      return (
        <div>
            <img className="thumbnail" onClick={()=>this.setState({isOpen:true})} src={this.state.product.thumbnail}/>
            {isOpen && (
                <Lightbox
                    mainSrc={this.state.product.image}
                    onCloseRequest={() => this.setState({ isOpen: false })}
              />
            )}
        </div>
      );
    }
  }