import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Button,
  ButtonGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table
} from 'reactstrap'

import ExampleWrapperSimple from '../../layout-components/ExampleWrapperSimple/index.js'

const Peserta = () => {
  const tbl = {
    head: ['no', 'name', 'phone', 'class', 'status', 'actions'],
    body: [
      {
        id: 1041,
        name: 'saipul',
        phone: '012470174',
        class: 'web',
        status: 'bayar'
      }
    ]
  }
  return (
    <ExampleWrapperSimple sectionHeading="Peserta">
      <Table bordered hover>
        <thead>
          <tr className="text-center">
            {tbl.head.map((h, id) => (
              <td key={id}>{h}</td>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {[...Array(10).keys()].map(n => (
            <tr key={n}>
              <td>{(n += 1)}</td>
              <td>{tbl.body[0].name}</td>
              <td>{tbl.body[0].phone}</td>
              <td>{tbl.body[0].class}</td>
              <td>{tbl.body[0].status}</td>
              <td>
                <ButtonGroup
                  size="sm"
                  disabled={tbl.body[0].status !== 'lunas'}>
                  <Button
                    color="success"
                    to={() => `/payment/${tbl.body[0].id}`}>
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'check-circle']} />
                    </span>
                  </Button>
                  <Button
                    color="warning"
                    to={() => `/payment/${tbl.body[0].id}`}>
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
                    </span>
                  </Button>
                  <Button
                    color="danger"
                    to={() => `/payment/${tbl.body[0].id}`}>
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'trash']} />
                    </span>
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination size="sm">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        {[...Array(10).keys()].map((n, id) => (
          <PaginationItem key={id}>
            <PaginationLink href={() => `/kelas/${(n += 1)}`}>
              {(n += 1)}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    </ExampleWrapperSimple>
  )
}

export default Peserta
