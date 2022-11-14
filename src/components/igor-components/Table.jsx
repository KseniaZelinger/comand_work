import React from 'react';
import { Table } from 'antd';

function TableIgor() {

    const data = [
        {
            name: "Игорь",
            city: "Москва"
        },
        {
            name: "Карина",
            city: "Москва"
        }
    ]

    const colums = [
        {
            title: "Имя",
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: "Город",
            dataIndex: 'city',
            key: 'city'
        }
    ]


    return (
        <>
            <Table dataSource={data} columns={colums} width={500} />
        </>
    )
}

export default TableIgor;