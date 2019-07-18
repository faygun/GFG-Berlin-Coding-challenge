import React,{Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import PriceModal from './PriceModal';
import ImageModal from './ImageModal';
import axios from 'axios';
import { getConfig } from '../helper/helper';

export default class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            products : []
        };
    }
    componentDidMount(){

        axios.get('/api/product', getConfig())
        .then(res=> {
            this.setState({products:res.data.products});
        }).catch(err=>{
            throw err;
        })
    }

    // Custom modals
    imageModal = (cell, row) =>{
        return(
            <ImageModal row={row}/>
        );
    }
    salePriceModal = (onUpdate, props) => (<PriceModal onUpdate={ onUpdate } {...props}/>)
    
    // validation
    validator = (value, row) =>{
        let newValue = Number(value);
        if(!(Number.isInteger(newValue) && newValue >= 0))
          return 'this value must be a integer!';

        return true;
      }
    render(){
        const products = this.state.products;

        const cellEditProp = {
            mode: 'click',
            blurToSave:true,
            afterSaveCell:(row, cellName, cellValue) =>{
                let data = this.state.products;
                console.log(row);
                data[row.id - 1] = row;
                this.setState({products:data});
            }
        };
        
return(
    <div>
        <BootstrapTable data={products} 
                    options={{ noDataText: 'Loading...' }}
                    striped hover 
                    pagination
                    containerClass="editableGrid"
                    cellEdit={ cellEditProp }>
            <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
            <TableHeaderColumn editable={false} dataField='title'>Title</TableHeaderColumn>
            <TableHeaderColumn editable={false} dataField='brand'>Brand</TableHeaderColumn>
            <TableHeaderColumn editable={false} dataField='image' dataFormat={this.imageModal}>Image</TableHeaderColumn>
            <TableHeaderColumn hidden={true} dataField='thumbnail'></TableHeaderColumn>
            <TableHeaderColumn dataField='price' editable={{ validator: this.validator }} >Price (€)</TableHeaderColumn>
            <TableHeaderColumn customEditor={{getElement: this.salePriceModal}} editable={{ validator: this.validator }} dataField='salePrice'>Sale Price (€)</TableHeaderColumn>
            <TableHeaderColumn hidden={true} dataField='saleStartDate'></TableHeaderColumn>
            <TableHeaderColumn hidden={true} dataField='saleEndDate'></TableHeaderColumn>
            <TableHeaderColumn  dataField='stock' editable={{ validator: this.validator }}>Stock</TableHeaderColumn>
        </BootstrapTable>
    </div>
    )}
}