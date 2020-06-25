import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { List, Select } from 'antd'

const { Option } = Select

// Sort consts
const DESC = 'desc'
const ASC = 'asc'
const DEF = 'default'
////

export default function RegionsList(props) {
  const [sort, setSort] = useState(DEF)

  const handleChange = (value) => {
    setSort(value)
  }

  const headerHTML = (
    <div>
      <h1>Библиотеки</h1>
      <div className="controller">
        Сортировать
        <Select defaultValue={sort} onChange={handleChange}>
          <Option value={DEF}>По умолчанию</Option>
          <Option value={DESC}>По убыванию</Option>
          <Option value={ASC}>По возрастанию</Option>
        </Select>
      </div>
    </div>
  )

  let data = Object.assign([], props.data)

  if (sort === DESC) {
    data = data.sort((a, b) => parseInt(b.libraries) - parseInt(a.libraries))
  } else if (sort === ASC) {
    data = data.sort((a, b) => parseInt(a.libraries) - parseInt(b.libraries))
  } else {
    data = props.data
  }

  return (
    <div>
      <List
        header={headerHTML}
        bordered
        dataSource={data}
        renderItem={item => (
          <Link to={`/${item.order}`}>
            <List.Item className="libraries__item">
              {`${item.libraries}  -  ${item.fullname}`}
            </List.Item>
          </Link>
        )}
      />
    </div>
  )
}
