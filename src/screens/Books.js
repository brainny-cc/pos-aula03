import React, { useState } from 'react'
import { Table, Button } from 'antd';
import ModalCreateBook from '../components/ModalCreateBook';

const dataSource = [
    {
        id: "1",
        title: "Teste",
        ISBN: 2193821,
        publicationDate: "2019-05-05",
        genre: "ADVENTURE",
        writerName: "Miguel",
    }, {
        id: "2",
        title: "Teste",
        ISBN: 2193821,
        publicationDate: "2019-05-05",
        genre: "ADVENTURE",
        writerName: "Miguel",
    }, {
        id: "3",
        title: "Livro Teste",
        ISBN: 13412312,
        publicationDate: "2019-05-05",
        genre: null,
        writerName: "Miguel",
    }
]

const columns = [
    {
        title: 'Título',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'ISBN',
        dataIndex: 'ISBN',
        key: 'ISBN',
    },
    {
        title: 'Data de Publicação',
        dataIndex: 'publicationDate',
        key: 'publicationDate',
    },
    {
        title: 'Genero',
        dataIndex: 'genre',
        key: 'genre',
    },
    {
        title: 'Autor',
        dataIndex: 'writerName',
        key: 'writerName',
    },
];

export default function Books() {
    const [active, setActive] = useState(false)

    return (
        <>
            <Button type="primary" onClick={() => setActive(true)} style={{ marginBottom: 16 }}>
                Adicionar
            </Button>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
            <ModalCreateBook active={active} setActive={setActive} />
        </>
    )
}
