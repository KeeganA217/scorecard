import React, { Fragment } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const AuditForm = () => {
  return (
    <Fragment>
      <h4 className="mt-5">Audit 1</h4>
      <Row>
        <Col className="px-1">
          <Form.Group>
            <Form.Label>Client</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1">
          <Form.Group>
            <Form.Label>Claim #</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1">
          <Form.Group>
            <Form.Label>File Type</Form.Label>
            <Form.Control as="select">
              <option>MRP</option>
              <option>MIT</option>
              <option>EMS</option>
              <option>Contents</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1" lg={1}>
          <Form.Group>
            <Form.Label>Dollar Value</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1" lg={1}>
          <Form.Group>
            <Form.Label>Variance</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1" lg={1}>
          <Form.Group>
            <Form.Label>Missed Docs</Form.Label>
            <Form.Control as="select">
              <option>No</option>
              <option>0.5</option>
              <option>1.0</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1" lg={1}>
          <Form.Group>
            <Form.Label>Missed FH</Form.Label>
            <Form.Control as="select">
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1" lg={1}>
          <Form.Group>
            <Form.Label>Manual</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1" lg={1}>
          <Form.Group>
            <Form.Label>Initial Issues</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1" lg={1}>
          <Form.Group>
            <Form.Label>Rebutted</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="px-1">
          <Form.Group>
            <Form.Control as="textarea"></Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1" lg={1}>
          <Form.Group>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1">
          <Form.Group>
            <Form.Control as="textarea"></Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1" lg={1}>
          <Form.Group>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        </Col>
        <Col className="px-1" lg={2}>
          <Form.Group>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="px-1">
          <Form.Group>
            <Button>Add Comment</Button>
          </Form.Group>
        </Col>
      </Row>
    </Fragment>
  );
};

export default AuditForm;
