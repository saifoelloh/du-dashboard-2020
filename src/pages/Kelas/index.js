import React, { Fragment } from 'react'
import { Button, Col, Container, Row, Table } from 'reactstrap'

import ExampleWrapperSimple from '../../layout-components/ExampleWrapperSimple/index.js'

const Kelas = () => {
  const tHead = ['no', 'name', 'phone', 'class', 'status', 'actions']
  const tBody = [
    {
      id: 1041,
      name: 'saipul',
      phone: '012470174',
      class: 'web',
      status: 'bayar'
    }
  ]

  return (
    <Fragment>
      <Row>
        <Col>
          <ExampleWrapperSimple sectionHeading="Kelas">
            <Container>
              <Table bordered hover>
                <thead>
                  <tr>
                    {tHead.map((h, id) => (
                      <td key={id}>{h}</td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tBody.map((datum, id) => (
                    <tr key={id}>
                      <td>{(id += 1)}</td>
                      <td>{datum.name}</td>
                      <td>{datum.phone}</td>
                      <td>{datum.class}</td>
                      <td>{datum.status}</td>
                      <td>
                        <Button
                          size="sm"
                          color="primary"
                          to={() => `/payment/${datum.id}`}>
                          Validasi
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </ExampleWrapperSimple>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Kelas
