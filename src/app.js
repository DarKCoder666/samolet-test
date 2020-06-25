import React, { useEffect, useState } from 'react'
import { Route, Switch } from "react-router-dom"
import { Layout } from 'antd'
import './app.css'
import { getData } from "./api"

import Region from './pages/Region'
import RegionsList from './pages/RegionsList'

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData().then(setData);
  }, [])

  const getRegionById = (id) => data.find(el => el.order === parseInt(id) )

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <RegionsList data={data} />
        </Route>
        <Route path="/:itemID" render={(props) => <Region lib={getRegionById(props.match.params.itemID)} {...props} />}></Route>
      </Switch>
    </Layout>
  )
}
