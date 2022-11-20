import React, { useEffect, useState } from 'react';
import { Table, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';

function Table_for_edite() {

    // 1. Формируем таблицу
    const [data, setData] = useState([
        {
            name: 'Вася',
            city: 'Москва',
            age: '40',
            id: 123
        },
        {
            name: 'Федя',
            city: 'Воронеж',
            age: '35',
            id: 436456
        },
        {
            name: 'Коля',
            city: 'Пермь',
            age: '27',
            id: 34567
        }
    ]);

    // 2. Формируем колонки
    const colums = [
        {
            title: "Name",
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: "City",
            dataIndex: 'city',
            key: 'city'
        },
        {
            title: "Age",
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: "Редактирование",
            dataIndex: 'id',
            key: 'id',
            render: (id) => <span onClick={() => editeRaw(id)}><EditOutlined /></span> // В данной строке создаем вызов функции для установки промежуточного редактируемого объекта
        }
    ]

    // 3. Задаем условие активации модального окна
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 4. Создаем промежуточный объект в котором хранится редактируемая строка
    const [editeObj, setEditeObj] = useState({});

    // 5. Когда функция editeRaw вызывается, то по переданному id ищем в массиве пользователей data объект с таким же id, помещаем его в промежуточный объект. После данной процедуры в модальном окне отразятся редактруемые записи
    const editeRaw = (id) => {
        data.forEach(e => {
            if (e.id === id) {
                setEditeObj(e)
                setIsModalOpen(true)
            }
        }
        )
    }

    const editeFunction = (item, type) => {
        console.log(item)
        if (type === 'name') {
            let newEditeObj = { ...editeObj };
            newEditeObj.name = item;
            setEditeObj(newEditeObj)
        } else if (type === 'age') {
            let newEditeObj = { ...editeObj };
            newEditeObj.age = item;
            setEditeObj(newEditeObj)
        } else if (type === 'city') {
            let newEditeObj = { ...editeObj };
            newEditeObj.city = item;
            setEditeObj(newEditeObj)
        }
    }

    // 7. После нажатия на кнопку Сохранить в текущем массиве с пользователями ищется объект с таким же id как и промежуточный редактируемый. После успешного поиска промежуточный редактируемый объект заменяет находящийся в массиве data
    const handleOk = () => {
        let newData = [...data]
        for (let i = 0; i < newData.length; i++) {
            if (newData[i].id === editeObj.id) {
                newData[i] = editeObj
            }
        }
        setData(newData)
        setIsModalOpen(false);
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Table dataSource={data} columns={colums} width={500} />

            {/* 6. При редактировании записей вызывается функция editeFunction, которая меняяет в промежуточном редактируемом объекте соответствующие поля */}
            <Modal title="Окно редактирования" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={'Сохранить'} cancelText={'Отменить'}>
                <p>Имя: <input type='text' defaultValue={editeObj.name} onChange={(e) => editeFunction(e.target.value, 'name')} /> </p>
                <p>Возраст: <input type='text' defaultValue={editeObj.age} onChange={(e) => editeFunction(e.target.value, 'age')} /> </p>
                <p>Город: <input type='text' defaultValue={editeObj.city} onChange={(e) => editeFunction(e.target.value, 'city')} /> </p>
            </Modal>
        </>
    )
}

export default Table_for_edite;