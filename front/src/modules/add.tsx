import { FC, useRef, useEffect, useState } from "react";
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import options from './data';

interface AddProps
{
    open: boolean;
}

const Add: FC<AddProps> = ({open}) => {
    const serviceUrl = 'http://127.0.0.1:8000/api';
    
    const [validated, setValidated] = useState(false);
    const [load, setLoad] = useState(true);

    const [allok, setAllok] = useState(false);
    const [createduser, setCreatedUser] = useState<string|undefined>('');
    
    const [name, setName] = useState<string|undefined>('');
    const [nameerror, setNameError] = useState(false);

    const [email, setEmail] = useState<string|undefined>('');
    const [emailerror, setEmailError] = useState(false);
    
    const typeaheadRef = useRef(null);
    const [tags, setTags] = useState<any[]>([]);

    useEffect(() => {
        setLoad(false);
    }, [open]);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            event.stopPropagation();

            const response = await fetch(serviceUrl+'/add', {
                method: "POST",
                headers: { "Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({
                    name: name,
                    email: email,
                    description: tags,
                }),
            });

            if (response.ok === true) {
                response.text().then(function (message) {
                    if(message === 'email error'){
                        setEmailError(true);
                        setValidated(false);
                    }else{
                        setAllok(true);
                        setCreatedUser(name);
                        setName('');
                        setEmail('');
                        setTags([]);

                        setNameError(false);
                        setEmailError(false);
                        setValidated(false);
                    }
                });
            }
        }

        setValidated(true);
    };

    const validateName = (name: string) => {
        const numberRegex = /^\d+$/;
        const charsRegex = /^[a-zA-Z]+$/;
        
        if(numberRegex.test(name)){
            if(name.length <= 12){
                setNameError(false);
                setValidated(true);
            }else{
                setNameError(true);
                setValidated(false);
            }
        }else if(charsRegex.test(name)){
            setNameError(false);
            setValidated(true);
        }else{
            setNameError(true);
            setValidated(false);
        }
    }

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
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

            {(allok)?<Alert variant={'primary'} style={{marginBottom: '15px'}}>Пользователь {createduser} успешно создан!</Alert>:''}

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Имя</Form.Label>
                <Form.Control aria-describedby="nameHelpBlock" type="name" value={name} required placeholder="Eugene или 1234567890" isInvalid={nameerror} onChange={(e)=>{setName(e.target.value);validateName(e.target.value)}} />
                <Form.Text id="nameHelpBlock" style={{color: '#fff'}}>
                Либо только цифры не более 12 символов, либо только буквы в обоих регистрах.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>@</Form.Label>
                <Form.Control type="email" value={email} required placeholder="name@example.ru" isInvalid={emailerror} onChange={(e)=>{setEmail(e.target.value)}} />
                {(emailerror)?<Alert variant={'danger'} style={{marginTop: '15px'}}>Пользователь с таким @ уже существует!</Alert>:''}
            </Form.Group>
            <Form.Group className="mb-3">

            <Form.Label>Навыки</Form.Label>
 
            <Typeahead
                multiple
                id="keep-menu-open"
                onChange={(tags) => {
                    setTags(tags);
                }}
                options={options}
                placeholder="Выбрать навыки..."
                ref={typeaheadRef}
                selected={tags}
            />

            </Form.Group>

            <Button variant="primary" type="submit">
                Отправить
            </Button>
            </Form>

            </Col>
            </>
        }

      <Col xxl={2} xl={2} lg={2} className="d-none d-sm-none d-md-none d-lg-block d-xl-block"></Col>
      </Row>
    );
}

export default Add;