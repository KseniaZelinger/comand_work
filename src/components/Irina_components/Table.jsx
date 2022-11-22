import React from 'react';
import { Table } from 'antd';


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
    return (
        <>
            <Table dataSource={dataSource} columns={columns} width={500} />
        </>
    )
}

export default TableIrina;