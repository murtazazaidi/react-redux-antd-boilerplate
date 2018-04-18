import React from 'react';
import {
  Button, Row, Col, Input, Radio,
  Layout, List
} from 'antd';

import 'components/Employee.css';

const { Header } = Layout;

const Search = Input.Search;

class Employee extends React.Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    const { isLoading, employees } = this.props;

    return (
      <div>
        <Header className="employee-header">
          <Row>
            <Col span={12}>
              <h3>Employees</h3>
            </Col>
            <Col span={12}>
              <Button
                type="primary"
                className="btn-right"
              >Add Employee
              </Button>
            </Col>
          </Row>
        </Header>
        <div className="employee-table">
          <Row>
            <Col span={8}>
              <Radio.Group className="table-operations">
                <Radio.Button value="all" selected>All</Radio.Button>
                <Radio.Button value="technical">Technical</Radio.Button>
                <Radio.Button value="nontechnical">Non-Technical</Radio.Button>
              </Radio.Group>
            </Col>
            <Col offset={10} span={6}>
              <Search />
            </Col>
          </Row>
          <List datasource={employees} loading={isLoading} />
        </div>
      </div>
    );
  }
}

export default Employee;
