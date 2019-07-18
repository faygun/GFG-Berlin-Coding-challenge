import React,{Component} from 'react';
import {Modal, Button, ModalHeader, ModalFooter, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';

export default class PriceModal extends Component {
    constructor(props) {
      super(props);
      this.updateData = this.updateData.bind(this);
      this.state = {
        salePrice : props.defaultValue,
        product: props.row,
        open: true,
        modal: true
      };

      this.toggle = this.toggle.bind(this);
    }
    toggle() {
      this.updateData();
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

  
    onSubmit = e =>{
        e.preventDefault();

        this.updateData();
    }
    
    updateData() {
      this.props.onUpdate(this.state.salePrice);
    }

    dateChange(e){
      let newProduct = this.state.product;
      if(e.currentTarget.name === 'saleStartDate'){
          newProduct.saleStartDate = e.currentTarget.value
      }
      else{
          newProduct.saleEndDate = e.currentTarget.value
      }
        
      if(newProduct.saleEndDate < newProduct.saleStartDate){
        alert('Start date should not be greater than end date');
        return;
      }

      this.setState({product: newProduct});
    }

    close = () => {
      this.setState({ open: false });
      this.updateData();
    }
    render() {
      return (
        <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Sale Information</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="Sale Price">Sale Price</Label>
                            <Input 
                            type="number"
                            name="salePrice"
                            id="salePrice"
                            placeholder="Sale Price"
                            value={this.state.salePrice}
                            className = "mb-3"
                            onChange={ e => { this.setState({ salePrice: e.currentTarget.value }); } } 
                            />

                            <Label for="Sale Price">Sale Start Date</Label>
                            <Input 
                            type="date"
                            name="saleStartDate"
                            id="saleStartDate"
                            placeholder="Sale Start Date"
                            className = "mb-3"
                            value={this.state.product.saleStartDate}
                            onChange={ e => { this.dateChange(e); } } 
                            />

                            <Label for="Sale Price">Sale End Date</Label>
                            <Input 
                            type="date"
                            name="saleEndDate"
                            id="saleEndDate"
                            placeholder="sale End Date"
                            className = "mb-3"
                            value={this.state.product.saleEndDate}
                            onChange={ e => { this.dateChange(e); } } 
                            />
                        </FormGroup>
                    </Form>    
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.updateData}>Save</Button>{' '}
                    <Button color="secondary" onClick={this.close}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
      );
    }
  }