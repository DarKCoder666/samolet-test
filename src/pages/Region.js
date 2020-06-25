import React from 'react'
import { Descriptions } from 'antd'
import { BackwardOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom"

export default function Region(props) {
  const { lib } = props

  return (
    <div className="library">
      <Link to="/">
        <BackwardOutlined style={{ fontSize: '45px', color: '#08c' }} />
      </Link>
      {lib &&
        <Descriptions className="region__info" title="Информация о регионе">
          <Descriptions.Item label="Адрес">{lib.address}</Descriptions.Item>
          <Descriptions.Item label="Полное название">{lib.fullname}</Descriptions.Item>
          <Descriptions.Item label="Бюджет">{lib.funds_budget}</Descriptions.Item>
          <Descriptions.Item label="Кол-во библиотек">{lib.libraries}</Descriptions.Item>
          <Descriptions.Item label="Подписчиков">{lib.subscribers}</Descriptions.Item>
          <Descriptions.Item label="Посетителей">{lib.visits}</Descriptions.Item>

        </Descriptions>
      }
    </div>
  )
}
