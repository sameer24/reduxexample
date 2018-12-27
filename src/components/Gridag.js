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
            {headerName: "athlete", field: "athlete"},
            {headerName: "country", field: "country"}
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
            <div
              className="ag-theme-balham"
              style={{
                height: '500px',
                width: '100%'
              }}
            >
              <button onClick={this.onButtonClick}>Get selected rows</button>
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