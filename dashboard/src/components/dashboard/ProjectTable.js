import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "./table.css"



const ProjectTables = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllResort = async () => {
      try {
        const res = await axios.get("http://localhost:4400/signup");
        setUsers(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllResort();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:4400/signup/" + id);
      setUsers(prevData => prevData.filter(users => users.id !== id));
    } catch (err) { console.log(err) }
  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">User Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Users
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>

                <th>Shop Name</th>
                <th>Approve</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((users, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{users.name}</h6>
                      </div>
                    </div>
                  </td>
                  <td>{users.email}</td>
                  <td>
                    {users.shopname}
                  </td>
                  <td><button className="fa-solid fa-check check_button" style={{ color: "#00ff1e" }} />

                  </td>
                  <td><button onClick={() => handleDelete(users.id)} className="fa-solid fa-trash delete_button" style={{ color: "#ff0000" }} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
