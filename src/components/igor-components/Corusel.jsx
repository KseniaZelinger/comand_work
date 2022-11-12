import { Carousel } from 'antd';
import React from 'react';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const contentStyle2 = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: "url(https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469601_nature_gora.jpg)",
    backgroundSize: 'cover'
};

const contentStyle3 = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: "url(https://klike.net/uploads/posts/2021-06/1623669235_2.jpg)",
    backgroundSize: 'cover'
};

const contentStyle4 = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: "url(https://vjoy.cc/wp-content/uploads/2019/07/1-5.jpg)",
    backgroundSize: 'cover'
};

const contentStyle5 = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: "url(https://bipbap.ru/wp-content/uploads/2017/07/morskie_peyzagi_krasivie_plyagi_foto_12.jpg)",
    backgroundSize: 'cover'
};

const App = () => (
    <Carousel autoplay>
        <div>
            <div style={contentStyle2}></div>
        </div>
        <div>
            <div style={contentStyle3}></div>
        </div>
        <div>
            <div style={contentStyle4}></div>
        </div>
        <div>
            <div style={contentStyle5}></div>
        </div>
    </Carousel>
);
export default App;