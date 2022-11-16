import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

function TableIgor() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=ru&apiKey=17c40d0ec6344b36bfb501ec43586208')
            .then(res => res.json())
            .then(res => setData(res.articles))
    }, [])


    const colums = [
        {
            title: "title",
            dataIndex: 'title',
            key: 'name'
        },
        {
            title: "description",
            dataIndex: 'description',
            key: 'description'
        }
    ]


    return (
        <>
            <Table dataSource={data} columns={colums} width={500} />
        </>
    )
}

export default TableIgor;