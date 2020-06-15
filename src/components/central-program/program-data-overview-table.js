import React from "react"
import PropTypes from "prop-types"
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { formatToUSD } from '../table-utilities'


const Heading = () => {

  const columns = [{
    dataField: 'description',
    text: "Description",
    headerFormatter: (column, colIndex, components) => { return (<div>Description</div>)},
  },{
    dataField: 'value',
    text: 'Value',
    headerFormatter: (column, colIndex, components) => { return (<div className="text-right">Value</div>)},
  }]

  return (
    <ToolkitProvider
      keyField="description"
      data={[]}
      columns={columns}
      bootstrap4
    >
      {props => (
        <div>
          <BootstrapTable
            classes="heading"
            bordered={false}
            {...props.baseProps}
          />
        </div>
      )}
    </ToolkitProvider>
  )
}

const SpendingOverview = ({data}) => {

  const columns = [{
    dataField: 'description',
    text: "Description",
    headerFormatter: (column, colIndex, components) => { return (<div>Spending</div>)},
  },{
    dataField: 'value',
    text: 'Value',
    headerFormatter: (column, colIndex, components) => {
      return (
        <div className="text-right">{formatToUSD(data.spending)}</div>
      )
    },
  }]

  return (
    <ToolkitProvider
      keyField="description"
      data={[]}
      columns={columns}
      bootstrap4
    >
      {props => (
        <div>
          <BootstrapTable
            classes="spending-overview"
            bordered={false}
            {...props.baseProps}
          />
        </div>
      )}
    </ToolkitProvider>
  )
}

const BudgetOverview = ({data}) => {

  const columns = [{
    dataField: 'description',
    text: "Description",
    headerFormatter: (column, colIndex, components) => { return (<div>Budget</div>)},
  },{
    dataField: 'value',
    text: 'Value',
    align: 'right',
    headerFormatter: (column, colIndex, components) => {
      return (
        <div className="text-right">{formatToUSD(data.budget)}</div>
      )
    },
  }]

  let overOrUnder = "Over", difference
  if (data.spending > data.budget) {
    difference = data.spending - data.budget
  } else {
    overOrUnder = "Under"
    difference = data.budget - data.spending
  }

  const rows = [
    {
      description: "Over or under budget?",
      value: `${overOrUnder} by ${formatToUSD(difference)} (${Math.abs(data.remaining_budget_percent)}%)`
    }
  ]

  return (
    <ToolkitProvider
      keyField="description"
      data={rows}
      columns={columns}
      bootstrap4
    >
      {props => (
        <div>
          <BootstrapTable
            classes="budget-overview"
            bordered={false}
            {...props.baseProps}
          />
        </div>
      )}
    </ToolkitProvider>
  )
}


const ProgramDataOverviewTable = ({data}) => (
    <div className="program-data-overview">
      <Heading/>
      <SpendingOverview data={data.centralProgramsJson}/>
      <BudgetOverview data={data.centralProgramsJson}/>
    </div>
)

ProgramDataOverviewTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
}

ProgramDataOverviewTable.defaultProps = {
    data: [],
}

export default ProgramDataOverviewTable
