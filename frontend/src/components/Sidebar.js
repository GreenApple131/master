import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar, Line } from "react-chartjs-2";

export default function Sidebar(props) {
  const RenderItems = () => {
    const {data} = props;
    console.log("data", data);
    return data.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span className={`todo-title mr-2}`} title={item.device.id}>
          Dev number - {item.device.number}
        </span>
        <span> 
          Status - {item.common_status}
        </span>
      </li>
    ));
  };

  function getCommonStatusCode() {
    return {
      status: "GOOD",
    };
  }

  function optionsLine() {
    return {
      plugins: {
        title: {
          display: true,
          text: (ctx) => "Last week data",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Day",
          },
        },
        y: {
          title: {
            display: true,
            text: "Value",
          },
        },
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
      responsive: true,
    };
  }

  const data = {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [
      {
        label: "Temperature",
        data: [12, 11, 8, 10, 15, 14, 13],
        borderColor: "#E25435",
        backgroundColor: "#E25435",
        fill: false,
      },
      {
        label: "Turbidity",
        data: [1.5, 1.4, 1.6, 2, 1.8, 1.6, 1.6],
        borderColor: "#4F6FAE",
        backgroundColor: "#4F6FAE",
      },
      {
        label: "pH",
        data: [7, 6.9, 6.9, 7.1, 7, 7.1, 7],
        borderColor: "#70CAD1",
        backgroundColor: "#70CAD1",
      },
    ],
  };

  const detailedData = {
    labels: [
      "Mo 00:00",
      "Mo 06:00",
      "Mo 12:00",
      "Mo 18:00",
      "Tu 00:00",
      "Tu 06:00",
      "Tu 12:00",
      "Tu 18:00",
      "We 00:00",
      "We 06:00",
      "We 12:00",
      "We 18:00",
      "Th 00:00",
      "Th 06:00",
      "Th 12:00",
      "Th 18:00",
      "Fr 00:00",
      "Fr 06:00",
      "Fr 12:00",
      "Fr 18:00",
      "Sa 00:00",
      "Sa 06:00",
      "Sa 12:00",
      "Sa 18:00",
      "Su 00:00",
      "Su 06:00",
      "Su 12:00",
      "Su 18:00",
    ],
    datasets: [
      {
        label: "Temperature",
        data: [
          9, 7, 11, 16, 11, 9, 7, 11, 16, 11, 9, 7, 11, 16, 11, 9, 7, 11, 20,
          11, 9, 7, 11, 16, 11, 9, 7, 11, 16, 11,
        ],
        borderColor: "#E25435",
        backgroundColor: "#E25435",
        fill: false,
      },
      {
        label: "Turbidity",
        data: [
          1.5, 1.4, 1.6, 2, 1.8, 1.6, 1.5, 1.4, 1.6, 2, 1.8, 1.6, 1.5, 1.4, 1.6,
          2, 1.8, 1.6, 1.5, 1.4, 1.6, 2, 1.8, 1.6, 1.5, 1.4, 1.6, 2, 1.8, 1.6,
        ],
        borderColor: "#4F6FAE",
        backgroundColor: "#4F6FAE",
      },
      {
        label: "pH",
        data: [
          7, 6.9, 6.9, 7.1, 7, 7.1, 7, 6.9, 6.9, 7.1, 7, 7.1, 7, 6.9, 6.9, 7.1,
          7, 7.1, 7, 6.9, 6.9, 7.1, 7, 7.1, 7, 6.9, 6.9, 7.1, 7, 7.1,
        ],
        borderColor: "#70CAD1",
        backgroundColor: "#70CAD1",
      },
    ],
  };
  return (
    <div className="side overflow-auto">
      <Button variant="success" size="lg" disabled style={{ marginTop: "5px" }}>
        Good quality
      </Button>

      <Table style={{ marginTop: "15px" }} striped bordered hover>
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
      <div style={{ marginTop: "50px" }}>
        <Bar
          data={data}
          options={optionsLine()}
          style={{ marginTop: "10px" }}
        />
        <br />
        <Line data={detailedData} options={optionsLine()} />
        <RenderItems />
      </div>
    </div>
  );
}
