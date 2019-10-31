import React, { Component } from 'react';
import { Col, Row, Icon, Card, Button } from 'antd';
import Reloj from '../Reloj'
  class Maquinas extends Component {

    render() {
        return (
            <div>
                <Row type="flex" justify="space-around" align="middle" className="Linea_Maquinas">
                <Col xs={6} sm={6} md={6} lg={2} xl={10} className="DiseñoCol">
                        <Card title="Máquina" bordered={true} className="DiseñoCard">
                        <span>1</span>
                        </Card>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={5} xl={10} className="DiseñoCol">
                        <Card title="Hora llegada" bordered={true} className="DiseñoCard">
                        <input></input>
                        </Card>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={5} xl={10} className="DiseñoCol">
                        <Card title="Tiempo trascurrido" bordered={true} className="DiseñoCard">
                        <input></input>
                        </Card>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={3} xl={10} className="DiseñoCol">
                        <Card title="Dulces y Copias" bordered={true} className="DiseñoCard">
                        <input type="text" name="nombre" value="0" id="Dulces" className="Datos"/>
                        </Card>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} xl={10} className="DiseñoCol">
                    <Card title="Operaciones" bordered={true} className="DiseñoCard">
                        <Button icon="dollar" className="Boton" ghost={true} size="large"> Total:</Button>
                        </Card>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={5} xl={10} className="DiseñoCol">
                        <Card title="Anotaciones" bordered={true} className="DiseñoCard">
                                <input></input>
                                </Card>
                        </Col>
                </Row>
                <Reloj/>
            </div>
        );
    }
}

export default Maquinas;