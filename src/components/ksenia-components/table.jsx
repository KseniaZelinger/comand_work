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

export default TableKsenia;