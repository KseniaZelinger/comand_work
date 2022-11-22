import React from 'react';
import { Table } from 'antd';
import { Select } from 'antd';


function TableIrina() {
  const dataSource = [
    {
      brand: "ferrari",
      country: "Italy",
      price: "1500000"

    },
    {
      brand: "mercedes benz",
      country: "Italy",
      price: "1500000"


    },
    {
      brand: "ferrari",
      country: "Italy",
      price: "1500000"


    },
    {
      brand: "ferrari",
      country: "Italy",
      price: "1500000"


    },
    {
      brand: "ferrari",
      country: "Italy",
      price: "1500000"


    }
  ]

  const columns = [
    {
      title: 'brand',
      dataIndex: 'brand',
      key: 'brand',
    },

    {
      title: 'страна',
      dataIndex: 'country',
      key: 'country',
    },

    {
      title: 'цена',
      dataIndex: 'price',
      key: 'price',
    },


  ]

  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };


  return (
    <>
      <Table dataSource={dataSource} columns={columns} width={500} />
      <Select
        labelInValue
        defaultValue={{
          value: 'lucy',
          label: 'Lucy (101)',
        }}
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'jack',
            label: 'Jack (100)',
          },
          {
            value: 'lucy',
            label: 'Lucy (101)',
          },
        ]}
      />
    </>
  )

}

export default TableIrina;
