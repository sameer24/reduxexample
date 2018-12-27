import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchGrid} from '../actions/postActions';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Gridag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: this.createColumnDefs()
        }
    }
    
    createColumnDefs() {
        return [
            {headerName: "Athlete", field: "athlete"},
            {headerName: "Country", field: "country"},
            {headerName: "Age", field: "age",checkboxSelection:true},
            {headerName: "Date", field: "date"},
            {headerName: "Sport", field: "sport"},
            {headerName: "Gold", field: "gold"},
            {headerName: "Silver", field: "silver"},
            {headerName: "Bronze", field: "bronze"},
            {headerName: "Total", field: "total"}
        ];
    }

    // onGridReady(params) {
    //     this.gridApi = params.api;
    //     this.columnApi = params.columnApi;
    //     this.gridApi.sizeColumnsToFit();
    // }

    componentWillMount(){
        this.props.fetchGrid();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPosts){
            console.log(nextProps.newPosts);
            this.props.posts.unshift(nextProps.newPosts.data);
        }
    }
    onButtonClick = e => {
        const selectedNodes = this.gridApi.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(node => node.athlete + '- Gold ' + node.gold).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
      }
    
    render() {
        // const postItems = this.props.posts.map(post =>(
        //     <div >
        //         <h3>{post.athlete}</h3>
        //         <p>{post.country}</p>
        //     </div>
        // ));
        // return (
        //     <div>
        //         <h1>Posts</h1>
        //         {postItems}
        //     </div>
        // )
        const postItems = this.props.posts
        return (
            <div>
            <div
              className="ag-theme-balham"
              style={{
                height: '500px',
                width: '100%'
              }}
            >
              
              <AgGridReact
                onGridReady={params => this.gridApi = params.api}
                enableSorting={true}
                floatingFilter={true}
                enableFilter={true}
                rowSelection="multiple"
                columnDefs={this.state.columnDefs}
                rowData={postItems}
                /* this is where we provide custom components */
                frameworkComponents={this.state.frameworkComponents}
                >
              </AgGridReact>              
      
            </div>
            <button onClick={this.onButtonClick} className="btn btn-primary">Get selected rows</button></div>
          );
    }
}

Gridag.propTypes = {
    fetchGrid : PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPosts: PropTypes.object
}
const mapStateToProps = state =>({
    posts : state.posts.items,
    newPosts: state.posts.item
})

export default connect(mapStateToProps, {fetchGrid})(Gridag);