import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/departments-table"
import Sankey from "../components/sankey-chart"
import { graphql } from "gatsby"
import sankeyData from "../../data/sankey.json"
import sankeyRestrictedData from "../../data/sankey-restricted.json"


import "../styles/pages/central-programs.scss"

const CentralProgramsPage = ({ data }) => {

  const departments = data.allDepartmentsJson.nodes;
  return (
    <Layout pageClassName="central-programs-page">
      <SEO title="Departments" />
      <h1>Central Programs Overview (2018-19)</h1>
      <Sankey data={sankeyData} restrictedData={sankeyRestrictedData} />
      <Table data={departments} />
    </Layout>
  )
}

export default CentralProgramsPage

export const query = graphql`
  query DepartmentList {
    allDepartmentsJson {
      nodes {
        name
        budget
        spending
        year
        code
      }
    }
  }
`
