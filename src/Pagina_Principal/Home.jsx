import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd';
import Maquinas from '../Pagina_Principal/Maquinas/Maquinas';
import Xbox from '../Pagina_Principal/Xbox/Xbox'
const { Header, Footer } = Layout;
class Home extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>
                        <Row type="flex" justify="space-around" align="middle" className="Header" >
                            <Col span={6}>
                                <Icon type="windows" />
                            </Col>
                            <Col span={12}>
                                Internet Studio
                            </Col>
                            <Col span={6}>
                                <Icon type="laptop" />
                            </Col>
                        </Row>
                    </Header>
                    <Maquinas />
                    <Xbox/>
                    <Footer className="DiseñoFooter">Diseñado por Uriel Benitez Medina <Icon type="copyright" className="DiseñoIcons" /><Icon type="github" className="DiseñoIcons" /><Icon type="twitter" className="DiseñoIcons" /></Footer>
                </Layout>
            </div>
        );
    }
}

export default Home;