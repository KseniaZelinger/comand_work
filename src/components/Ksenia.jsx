import { Button } from 'antd';
import React from 'react';
import { Table } from 'antd';
import TableKsenia from './ksenia-components/table';
import Select from './ksenia-components/Select'

function Ksenia() {

    return (
        <><div>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </div>

            <div style={{ width: '90%', margin: '0 auto' }}>
                <TableKsenia />
            </div>
            <div style={{ width: '90%', margin: '0 auto' }}>
                <Select />
            </div>

        </>

    )
}

export default Ksenia;

