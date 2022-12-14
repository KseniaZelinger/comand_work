import React, { useEffect, useState } from 'react';
import { Table, Tag, Alert } from 'antd';


function TableKsenia() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=ru&apiKey=db379468ddd943abb9dd69806507f55a')
            .then(res => res.json())
            .then(res => setData(res.articles))
    }, [])


    const colums = [
        {
            title: "Название",
            dataIndex: 'title',
            key: 'name',
            render: name => <Alert description={name} type="success" />
        },
        {
            title: "Описание",
            dataIndex: 'description',
            key: 'description',
            render: description => <Alert description={description} type="info" />
        },
        {
            title: "Автор",
            dataIndex: 'author',
            key: 'author',
            render: author => <Tag color="green">{author}</Tag>
        },
        {
            title: "Ссылка на источник",
            dataIndex: 'url',
            key: 'url',
            render: (url) => <a target="blanc" href={url}>Подробнее</a>
        },
        {
            title: "Картинка",
            dataIndex: 'urlToImage',
            key: 'urlToImage',
            render: (img) => <img width="250px" src={img} alt='здесь должна быть картинка' />
        },

    ]


    return (
        <>
            <Table dataSource={data} columns={colums} />
        </>
    )
}


//         {
//             name: "J7",
//             product: "Сок",
//             price: "115p."

//         },
//         {
//             name: "Сады Придонья",
//             product: "Нектар",
//             price: "85p."

//         },
//         {
//             name: "Добрый",
//             product: "Нектар",
//             price: "99p."

//         },
//         {
//             name: "Rich",
//             product: "Сок",
//             price: "148p."

//         },
//         {
//             name: "Я",
//             product: "Сок",
//             price: "136p."

//         },
//         {
//             name: "Фруктовый сад",
//             product: "Нектар",
//             price: "89p."

//         }
//     ]

//     const colums = [
//         {
//             title: "Название",
//             dataIndex: "name",
//             key: "name"
//         },
//         {
//             title: "Тип продукта",
//             dataIndex: "product",
//             key: "product"
//         },
//         {
//             title: "Цена",
//             dataIndex: "price",
//             key: "price"
//         }
//     ]
//     return (
//         <>
//             <Table dataSource={data} columns={colums} width={500} />
//         </>
//     )
// }

export default TableKsenia;