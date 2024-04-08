import React from "react";
import { Row, Col, FloatingLabel, Form , Container } from "react-bootstrap";

import Arrow from './../../dist/images/arrow.png';
import DocIcon from './../../dist/images/formManagementImg/doc.png';
import TeamIcon from './../../dist/images/formManagementImg/team-icon.png';

function CreateProposalData() {
  

  return (
    <>
      <Container className="createProposalDsn px-0">
      <Form className="px-0">
        <Row>
        
          <Col md={5}>
            <h3 className="mb-4"><img src={Arrow}  width="17"/> Create Proposal</h3>

            <FloatingLabel controlId="floatingInput" label="Proposal Name *" className="mb-4 floatInputDsn" >
                <Form.Control type="text" placeholder="Proposal Name *" />
            </FloatingLabel>
            <Form.Group controlId="floatingSelect" label="" className="mb-4 floatSelectDsn" >
              <Form.Select aria-label="Floating label select example">
                <option>Purpose*</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <FloatingLabel controlId="floatingInput" label="Solution*" className="mb-4 floatInputDsn" >
                <Form.Control type="text" placeholder="Solution*" />
            </FloatingLabel>
            
            <Form.Group controlId="floatingSelect" label="" className="mb-4 floatSelectDsn" >
              <Form.Select aria-label="Floating label select example">
                <option>Link Template*</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="floatingSelect" label="" className="mb-4 floatSelectDsn" >
              <Form.Select aria-label="Floating label select example">
                <option>Assigned To*</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="floatingSelect" label="" className="mb-4 floatSelectDsn" >
              <Form.Select aria-label="Floating label select example">
                <option>Reviewer*</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="floatingSelect" label="" className="mb-4 floatSelectDsn" >
              <Form.Select aria-label="Floating label select example">
                <option>Approver*</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={7}>
            <h3 class="mb-4">Preview Documents</h3>
            <div className="previewDocDsn">
                <div className="content">
                    <img src={DocIcon} />
                    <p>Not Yet Uploaded</p>
                </div>
            </div> 
            <Row>
                <Col>
                    <button class="btn-grn-bor-2 mb-3" disabled><img src={TeamIcon} className="me-2" />Tag People</button>
                </Col>
                <Col md="auto">
                    <button class="btn-green-2 mb-3" disabled>Edit</button>
                </Col>
                <Col md="auto">
                    <button class="btn-green mb-3" disabled>Save</button>
                </Col>

            </Row>

          </Col>
          
        </Row>
        </Form>
      </Container>
    </>
  );
}

export default CreateProposalData;
