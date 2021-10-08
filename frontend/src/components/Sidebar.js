import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar, Doughnut, Line } from 'react-chartjs-2';

export default function Sidebar() {
  function optionsLine() {
    return {
      title: {
        display: true,
        text: 'Chart.js Toggle with React',
        fontSize: 20
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          type: "linear",
          display: true,
          position: "left"
        }]
      },
      responsive: true,
      fill: true,
    };
  }

  const data = {
    "labels": [
      "Mo",
      "Tu",
      "We",
      "Th",
      "Fr",
      "Sa",
      "Su"
    ],
    "datasets": [
      {
        "label": "Temperature",
        "data": [
          340,
          425,
          383,
          403,
          389,
          504,
          467
        ],
        // blue
        borderWidth: 0,
        borderColor: "rgba(101,147,185,1)",
        backgroundColor: ["rgba(101,147,185,0.8)"],
        pointBackgroundColor: "rgba(255,255,255,0.8)",
        pointBorderColor: "rgba(101,147,185,1)",
        pointHoverBorderColor: "magenta",
        pointHoverBorderWidth: 1
      },
      {
        "label": "Turbidity",
        "data": [
          439,
          465,
          493,
          478,
          559,
          532,
          514
        ],
        // pinky
        borderWidth: 0,
        borderColor: "rgba(220,120,220,1)",
        backgroundColor: "rgba(220,120,220,0.8)",
        pointBackgroundColor: "rgba(255,255,255,0.8)",
        pointBorderColor: "rgba(220,120,220,1)",
        pointHoverBorderColor: "#333",
        pointHoverBorderWidth: 1
      },
      {
        "label": "pH",
        "data": [
          489,
          545,
          583,
          503,
          589,
          592,
          434
        ],
        // red
        borderWidth: 0,
        borderColor: "rgba(247,70,74,1)",
        backgroundColor: "rgba(247,70,74,0.7)",
        pointBackgroundColor: "rgba(255,255,255,0.8)",
        pointBorderColor: "rgba(247,70,74,1)",
        pointHoverBorderColor: "rgba(0,0,0,0.7)",
        pointHoverBorderWidth: 1,
        pointHoverBackgroundColor: "rgba(247,70,74,1)"
      },
      {
        "label": "Common",
        "data": [
          450,
          500,
          520,
          500,
          520,
          550,
          400
        ],
        // lime
        borderWidth: 0,
        borderColor: "lime",
        backgroundColor: "lime",
        pointBackgroundColor: "lime"
      }
    ]
  }
  return (
    <div>
      <Button variant="success" size="lg" disabled style={{marginTop: '5px'}}>
        Status
      </Button>

      <Table
        style={{marginTop: '15px'}}
        striped 
        bordered 
        hover
      >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <div>
        <Line data={data} options={optionsLine()} />
        <br />
        <Bar data={data} options={optionsLine()} style={{marginTop: "10px"}} />
      </div>
    </div>
  );
}
