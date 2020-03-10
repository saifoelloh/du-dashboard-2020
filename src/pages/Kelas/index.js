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

const Kelas = () => {
  const tHead = ['no', 'name', 'phone', 'class', 'kuota', 'actions']
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
    <ExampleWrapperSimple sectionHeading="Kelas">
      <Table bordered hover>
        <thead>
          <tr className="text-center">
            {tHead.map((h, id) => (
              <td key={id}>{h}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {tBody.map((datum, id) => (
            <tr key={id} className="text-center">
              <td>{(id += 1)}</td>
              <td>{datum.name}</td>
              <td>{datum.phone}</td>
              <td>{datum.class}</td>
              <td>{datum.status}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button color="success" to={() => `/payment/${datum.id}`}>
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['far', 'check-circle']} />
                    </span>
                  </Button>
                  <Button color="warning" to={() => `/payment/${datum.id}`}>
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
                    </span>
                  </Button>
                  <Button color="danger" to={() => `/payment/${datum.id}`}>
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

export default Kelas
