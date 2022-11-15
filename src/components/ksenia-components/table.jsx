import React from 'react';
import { Table } from 'antd';


function TableKsenia() {
    const data = [
        {
            name: "J7",
            product: "Сок",
            price: "115p."

        },
        {
            name: "Сады Придонья",
            product: "Нектар",
            price: "85p."

        },
        {
            name: "Добрый",
            product: "Нектар",
            price: "99p."

        },
        {
            name: "Rich",
            product: "Сок",
            price: "148p."

        },
        {
            name: "Я",
            product: "Сок",
            price: "136p."

        },
        {
            name: "Фруктовый сад",
            product: "Нектар",
            price: "89p."

        }
    ]

    const colums = [
        {
            title: "Название",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Тип продукта",
            dataIndex: "product",
            key: "product"
        },
        {
            title: "Цена",
            dataIndex: "price",
            key: "price"
        }
    ]
    return (
        <>
            <Table dataSource={data} columns={colums} width={500} />
        </>
    )
}

export default TableKsenia;