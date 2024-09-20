import { FC, useEffect, useState } from "react";
import { Row, Col, Table, Spinner } from 'react-bootstrap';
import { Users } from '../models/users';
import { Data } from '../models/data';

interface ListProps
{
    open: boolean;
}

const List: FC<ListProps> = ({open}) => {
    const [users, setUsersList] = useState<Users[]>([]);
    const [load, setLoad] = useState(true);

    const serviceUrl = 'http://127.0.0.1:8000/api';

    const getUsersListHandle = async () => {
        const methodUrl = serviceUrl + '/users/';
    
        const response = await fetch(methodUrl, {
            method: "GET",
            headers: { "Accept": "application/json", "Content-Type": "application/json"},
        });
    
        if (response.ok === true) {
            const data = await response.json() as Data;
            setUsersList(data?.data);
            setLoad(false);
        }
    }

    useEffect(() => {
        getUsersListHandle();
    }, [open]);

    return(
        <Row className="App-main-row">
        <Col xxl={2} xl={2} lg={2} className="d-none d-sm-none d-md-none d-lg-block d-xl-block"></Col>
        {load?
        <Col lg={8} xl={8} className="d-flex justify-content-center align-items-center w-100 h-100" style={{minHeight: '200px'}}>
            <Spinner animation="border" variant="info">
                <span className="visually-hidden">Загрузка...</span>
            </Spinner>
        </Col>
        :
            <>
            <Col lg={8} xl={8} className="p-3">

            {users?(
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Имя</th>
                        <th>@</th>
                        <th>Навыки</th>
                        <th>Создан</th>
                        <th>Обновлён</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {users.map((r)=>
                    [
                        <tr key={r.id}>
                        <td>{r.id}</td>
                        <td>{r.name}</td>
                        <td>{r.email}</td>
                        <td>{r.description}</td>
                        <td>{r.created_at}</td>
                        <td>{r.updated_at}</td>
                        </tr>
                    ]
                    )}

                    </tbody>
                </Table>
            ):null}

            </Col>
            </>
        }

      <Col xxl={2} xl={2} lg={2} className="d-none d-sm-none d-md-none d-lg-block d-xl-block"></Col>
      </Row>
    );
}

export default List;