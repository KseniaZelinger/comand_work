import { Button } from 'antd';
import React from 'react';

import TableIrina from './Irina_components/Table';

function Irina() {

    return (
        <><div>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </div>

            <div style={{ width: '80%', margin: '0 auto' }}>
                <TableIrina />
            </div></>

    )
}

export default Irina;