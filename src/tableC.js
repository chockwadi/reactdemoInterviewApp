import React from 'react';

import {
  Card,
  CardTitle,
  CardText,
  Button,
  DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  TablePagination,
} from 'react-md';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
  render(){
    return(
      <React.Fragment>
                <Card style={{ margin: '20px' ,}} >
          <CardTitle title="Car Companies"fixedWrapperStyle fixedHeight={10}>
            <Button className="md-cell--right" onClick={this.props.formAShow} icon style={{ background: '#2196F3', color: '#fafafa ' }}>add</Button>
          </CardTitle>
          <CardText className="md-cell--right">
            <DataTable
              plain
              fixedHeader
              fixedFooter
            >
              <TableHeader>
                <TableRow>
                  <TableColumn>No.</TableColumn>
                  <TableColumn>Name</TableColumn>
                  <TableColumn>Description</TableColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {this.props.data.map((res, i) => {
                  return<TableRow key={i}>
                    <TableColumn>{i + 1}</TableColumn>
                    <TableColumn>{res.name}</TableColumn>
                    <TableColumn>{res.description}</TableColumn>
                  </TableRow>
                })}
              </TableBody>
              <TablePagination
          rowsPerPageLabel={10}
          page={1}
          rows={10}
          rowsPerPage={10}
        />

            </DataTable>
          </CardText>
        </Card>

      </React.Fragment>
    )
  }
}
export default App;
