// import React from 'react'
// import {useStaticQuery, graphql} from 'gatsby'
//
//
// const getData = graphql`
//     query FirstQuery {
//       site {
//         info: siteMetadata {
//           title
//           description
//           person {
//             name
//           }
//           simpleData
//           complexData {
//             name
//           }
//         }
//       }
//     }
// `
//
//
// const FetchData = () => {
//     const data = useStaticQuery(getData)
//
//     return (
//       <div>
//         <h2>Hello from fetch data</h2>
//           <h2>Name:{data.site.info.person.name}</h2>
//       </div>
//     )
// }
//
// export default FetchData
//
//
//
