import React,{Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import PriceModal from './PriceModal';
export default class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            products : []
        };
    }
    componentDidMount(){
        this.setState({
            products : [{id:1, title:"Jean", brand:"Levis", image:"png", price : "55", salePrice: "60", saleStartDate:"2019-08-01", saleEndDate : "2019-09-01", stock: 200},
                        {id:2, title:"Jean", brand:"Wrangler", image:"png", price : "85", salePrice: "90", saleStartDate:"2019-08-27", saleEndDate : "2019-10-01", stock: 400}]
        })
    }

    
    onLog(data){
        
    }

    render(){
        const products = this.state.products;

        const cellEditProp = {
            mode: 'click',
            beforeSaveCell: (row, cellName, cellValue)=>{
                let newValue = Number(cellValue);
                return Number.isInteger(newValue) && newValue >= 0;
            },
            afterSaveCell:(row, cellName, cellValue) =>{
                let data = this.state.products;
                console.log(row);
                data[row.id - 1] = row;
                this.setState({products:data});
            }
        };
        
        const salePriceModal = (onUpdate, props) => (<PriceModal onLog={this.onLog} onUpdate={ onUpdate } {...props}/>);

        return(
            <BootstrapTable data={products} 
                        striped hover 
                        cellEdit={ cellEditProp }>
                <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
                <TableHeaderColumn editable={false} dataField='title'>Title</TableHeaderColumn>
                <TableHeaderColumn editable={false} dataField='brand'>Brand</TableHeaderColumn>
                <TableHeaderColumn editable={false} dataField='image'>Image</TableHeaderColumn>
                <TableHeaderColumn dataField='price' >Price (€)</TableHeaderColumn>
                <TableHeaderColumn customEditor={{getElement:salePriceModal}} dataField='salePrice'>Sale Price (€)</TableHeaderColumn>
                <TableHeaderColumn hidden={true} dataField='saleStartDate'></TableHeaderColumn>
                <TableHeaderColumn hidden={true} dataField='saleEndDate'></TableHeaderColumn>
                <TableHeaderColumn  dataField='stock'>Stock</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}