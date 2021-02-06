import React from "react";
import { Form, Row, Col, Table, Button } from "react-bootstrap";
import AuditForm from "../components/AuditForm";

const ScorecardScreen = () => {
  return (
    <Form
      className="mt-5 mx-auto"
      style={{
        border: "1px solid black",
        padding: "25px 80px",
        borderRadius: "6px",
        width: "90%",
      }}
    >
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Month</Form.Label>
            <Form.Control as="select">
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Half</Form.Label>
            <Form.Control as="select">
              <option>First Half</option>
              <option>Second Half</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Reviewer</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Supervisor</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Auditor</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead className="table-primary">
            <tr>
              <th>Client</th>
              <th>Claim #</th>
              <th>File Type</th>
              <th>Amount</th>
              <th>Variance</th>
              <th>Missed Docs</th>
              <th>Missed FH</th>
              <th>Manual</th>
              <th>Initial Issues</th>
              <th>Rebutted</th>
              <th>Codes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <thead className="table-primary">
            <tr>
              <th>Client</th>
              <th>Claim #</th>
              <th>File Type</th>
              <th>Supplement Amount</th>
              <th>Variance</th>
              <th>Pre Approve</th>
              <th>FH/Docs</th>
              <th>Separated</th>
              <th>Manual</th>
              <th>N/A</th>
              <th>Codes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>

          <thead className="table-info">
            <tr>
              <th>Half Totals</th>
              <th>Dollar Value:</th>
              <th></th>
              <th>Variance:</th>
              <th></th>
              <th>Score:</th>
              <th></th>
            </tr>
          </thead>
        </Table>
      </Row>
      <AuditForm />
    </Form>
  );
};

export default ScorecardScreen;
